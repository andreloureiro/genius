(defproject genius "0.1.0-SNAPSHOT"
  :description "Genius game"
  :url ""
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.228"]
                 [reagent "0.6.0-alpha"]
                 [figwheel "0.5.2"]
                 [figwheel-sidecar "0.5.2"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/core.async "0.2.374"]]
  :plugins [[lein-figwheel "0.5.2"]
            [lein-cljsbuild "1.1.3" :exclusions [[org.clojure/clojure]]]]
  :source-paths ["src"]
  :clean-targets ^{:protect false} ["resources/public/js" "target"]
  :profiles {:dev {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}
  :cljsbuild {:builds [{:id "dev"
                        :figwheel true
                        :source-paths ["src"]
                        :compiler {:main genius.core
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/genius.js"
                                   :output-dir "resources/public/js/out"
                                   :source-map-timestamp true
                                   :foreign-libs [{:file "resources/public/lib/wad.js"
                                                   :provides ["wad"]}]
                                   :externs ["resources/public/externs/wad.js"]}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main genius.core
                                   :output-to "resources/public/js/genius.js"
                                   :foreign-libs [{:file "resources/public/lib/wad.js"
                                                   :file-min "resources/public/lib/wad.min.js"
                                                   :provides ["wad"]}]
                                   :externs ["resources/public/externs/wad.js"]
                                   :optimizations :advanced}}]}
  :figwheel {:css-dirs ["resources/public/css"]})
