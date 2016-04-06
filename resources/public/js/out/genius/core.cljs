(ns genius.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :as a :refer [<! chan]]
            [clojure.data :refer [diff]]
            [reagent.core :as r]
            [wad]))

(enable-console-print!)

(def game-state (r/atom {:colors [{:id 0 :title :red :active? false}
                                  {:id 1 :title :yellow :active? false}
                                  {:id 2 :title :blue :active? false}
                                  {:id 3 :title :green :active? false}]
                         :color-sequence []
                         :choosen-sequence []
                         :playing-sequence? false
                         :status :main
                         :score -1
                         :highest-score 0}))

(defn state [k]
  (get @game-state k))

(defn reset-state []
  (swap! game-state assoc
         :color-sequence []
         :choosen-sequence []
         :score -1))

(defn clear-choosen-sequence []
  (swap! game-state assoc :choosen-sequence []))

(defn id->note [id]
  (condp = id
    0 "C4"
    1 "D4"
    2 "E4"
    3 "F4"
    "C4"))

(defn wad-options [note]
  {:source "sawtooth"
   :volume 1.0
   :loop "false"
   :pitch note
   :detune 0
   :panning -0.5
   :env {:attack 0
         :decay 0
         :sustain 1.0
         :hold 0.1
         :release 0}})

(defn play-sound! [id]
  (let [note (id->note id)]
    (.play (js/Wad. (clj->js (wad-options note))))))

(defn color-not-active [color]
  (assoc color :active? false))

(defn color-active [color]
  (assoc color :active? true))

(defn game-status [status]
  (swap! game-state assoc :status status))

(defn new-highscore [score]
  (swap! game-state assoc :highest-score score))

(defn playing-sequence-status [status]
  (swap! game-state assoc :playing-sequence? status))

(defn inc-point []
  (swap! game-state update :score inc))

(defn all-colors-not-active []
  (let [colors (state :colors)
        new-colors (mapv color-not-active colors)]
    (swap! game-state assoc :colors new-colors)))

(defn add-new-color [active-item]
  (fn [color]
    (if (= active-item (:id color))
      (do
        (play-sound! (:id color))
        (assoc color :active? true))
      color)))

(defn start-color-sequence []
  (let [color-sequence (state :color-sequence)
        colors (state :colors)]
    (swap! game-state assoc :playing-sequence? true)
    (go-loop [index 0]
      (let [active-item (nth color-sequence index)
            new-colors (mapv (add-new-color active-item) colors)]
        (swap! game-state assoc :colors new-colors)
        (<! (a/timeout 1000))
        (all-colors-not-active)
        (<! (a/timeout 150))
        (cond
          (< (inc index) (count color-sequence))
          (recur (inc index))

          (= (inc index) (count color-sequence))
          (playing-sequence-status false))))))

(defn new-color-to-sequence []
  (let [new-color (rand-nth (state :colors))]
    (swap! game-state update :color-sequence conj (:id new-color))
    (inc-point)
    (clear-choosen-sequence)
    (go
      (playing-sequence-status true)
      (<! (a/timeout 2000))
      (start-color-sequence))))

(defn finish-game []
  (let [score (state :score)
        highest-score (state :highest-score)]
    (when (> score highest-score)
      (new-highscore score))
    (game-status :finished)))

(defn compare-choosen-colors []
  (let [color-sequence (state :color-sequence)
        choosen-sequence (state :choosen-sequence)
        sequence-diff (diff color-sequence choosen-sequence)
        still-correct? (nil? (second sequence-diff))
        correct? (= color-sequence (nth sequence-diff 2))]
    (cond
      correct? (new-color-to-sequence)
      (not still-correct?) (finish-game)
      :else true)))

(defn start-game []
  (reset-state)
  (game-status :playing)
  (new-color-to-sequence))

(defn color-click [_ id]
  (let [colors (state :colors)
        color (first (filter #(= id (:id %)) colors))]
    (play-sound! id)
    (swap! game-state update :choosen-sequence conj (:id color))
    (compare-choosen-colors)))


;; COMPONENTS

(defn color-sequence-item-class [color]
  (str "color-sequence-box__item color-sequence-box__item--" (name color)))

(defn active-color-sequence-item-class [color]
  (str "color-sequence-box__item color-sequence-box__item--" (name color)
       " color-sequence-box__item--" (name color) "-active"))

(defn color-feedback [item-class name]
  (fn [_]
    (reset! item-class (active-color-sequence-item-class name))
    (js/setTimeout
     (fn []
       (reset! item-class (color-sequence-item-class name)))
     300)))

(defn color-sequence-item [{:keys [id active? title]} color-click]
  (let [initial-class (color-sequence-item-class title)
        item-class (r/atom initial-class)]
    (fn [{:keys [id active? name]} color-click]
      (let [playing-sequence? (state :playing-sequence?)]
        (if playing-sequence?
          (if active?
            (reset! item-class (active-color-sequence-item-class title))
            (reset! item-class (color-sequence-item-class title))))
        [:div.color-sequence-box__item
         (merge
          {:class-name @item-class}
          (when-not playing-sequence?
            {:on-click #(color-click % id)
             :on-mouse-down (color-feedback item-class title)}))]))))

(defn color-sequence-box []
  (let [colors (state :colors)]
    [:div.color-sequence-container
     [:div.color-sequence-box
      (for [color colors]
        ^{:key (:id color)}[color-sequence-item color color-click])]]))

(defn select-color-item [color on-color-click]
  [:div.select-color-box__item
   {:on-click #(on-color-click % (:id color))
    :style {:backgroundColor (:name color)}}])

(defn select-color-box []
  (let [colors (state :colors)]
    [:div.select-color-box
     (for [color colors]
       ^{:key (:id color)}[select-color-item color color-click])]))

(defn game-info [score highest-score]
  [:div.game-info
   [:small (str "Score: " score)]])


;; VIEWS

(defn main-view [game-state]
  [:div.main-view
   [:div.main-view__title-area
    [:h1.title-area__title "genius"]
    [:button.btn {:on-click start-game} "start!"]]])

(defn genius-view []
  (let [{:keys [score highest-score]} @game-state]
    [:div.genius
     [color-sequence-box]
     [game-info score highest-score]]))

(defn finished-view []
  (let [{:keys [score highest-score]} @game-state]
    [:div.finished-view
     [:h1.title "finished!"]
     [:strong (str "score: " score)]
     [:p.finished-view__score (str "highest score: " highest-score)]
     [:button.btn {:on-click start-game} "again!"]]))

(defn game [game-state]
  (let [{:keys [choosen-sequence color-sequence highest-score
                playing-sequence? score status]} @game-state]
    [:div.genius
     (condp = status
       :main [main-view]
       :playing [genius-view]
       :finished [finished-view]
       [main-view])]))

(defn mount! []
  (r/render
   [game game-state]
   (.getElementById js/document "app")))

(mount!)
