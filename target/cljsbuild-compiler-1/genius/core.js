// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('genius.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_();
genius.core.game_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$colors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(0),cljs.core.cst$kw$title,cljs.core.cst$kw$red,cljs.core.cst$kw$active_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$title,cljs.core.cst$kw$yellow,cljs.core.cst$kw$active_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$title,cljs.core.cst$kw$blue,cljs.core.cst$kw$active_QMARK_,false], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$title,cljs.core.cst$kw$green,cljs.core.cst$kw$active_QMARK_,false], null)], null),cljs.core.cst$kw$color_DASH_sequence,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$choosen_DASH_sequence,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$playing_DASH_sequence_QMARK_,false,cljs.core.cst$kw$status,cljs.core.cst$kw$main,cljs.core.cst$kw$score,(-1),cljs.core.cst$kw$highest_DASH_score,(0)], null));
genius.core.state = (function genius$core$state(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(genius.core.game_state) : cljs.core.deref.call(null,genius.core.game_state)),k);
});
genius.core.reset_state = (function genius$core$reset_state(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(genius.core.game_state,cljs.core.assoc,cljs.core.cst$kw$color_DASH_sequence,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$choosen_DASH_sequence,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$score,(-1)], 0));
});
genius.core.clear_choosen_sequence = (function genius$core$clear_choosen_sequence(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genius.core.game_state,cljs.core.assoc,cljs.core.cst$kw$choosen_DASH_sequence,cljs.core.PersistentVector.EMPTY);
});
genius.core.id__GT_note = (function genius$core$id__GT_note(id){
var pred__16653 = cljs.core._EQ_;
var expr__16654 = id;
if(cljs.core.truth_((pred__16653.cljs$core$IFn$_invoke$arity$2 ? pred__16653.cljs$core$IFn$_invoke$arity$2((0),expr__16654) : pred__16653.call(null,(0),expr__16654)))){
return "C4";
} else {
if(cljs.core.truth_((pred__16653.cljs$core$IFn$_invoke$arity$2 ? pred__16653.cljs$core$IFn$_invoke$arity$2((1),expr__16654) : pred__16653.call(null,(1),expr__16654)))){
return "D4";
} else {
if(cljs.core.truth_((pred__16653.cljs$core$IFn$_invoke$arity$2 ? pred__16653.cljs$core$IFn$_invoke$arity$2((2),expr__16654) : pred__16653.call(null,(2),expr__16654)))){
return "E4";
} else {
if(cljs.core.truth_((pred__16653.cljs$core$IFn$_invoke$arity$2 ? pred__16653.cljs$core$IFn$_invoke$arity$2((3),expr__16654) : pred__16653.call(null,(3),expr__16654)))){
return "F4";
} else {
return "C4";
}
}
}
}
});
genius.core.wad_options = (function genius$core$wad_options(note){
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$source,"sawtooth",cljs.core.cst$kw$volume,1.0,cljs.core.cst$kw$loop,"false",cljs.core.cst$kw$pitch,note,cljs.core.cst$kw$detune,(0),cljs.core.cst$kw$panning,-0.5,cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$attack,(0),cljs.core.cst$kw$decay,(0),cljs.core.cst$kw$sustain,1.0,cljs.core.cst$kw$hold,0.1,cljs.core.cst$kw$release,(0)], null)], null);
});
genius.core.play_sound_BANG_ = (function genius$core$play_sound_BANG_(id){
var note = genius.core.id__GT_note(id);
return (new Wad(cljs.core.clj__GT_js(genius.core.wad_options(note)))).play();
});
genius.core.color_not_active = (function genius$core$color_not_active(color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,cljs.core.cst$kw$active_QMARK_,false);
});
genius.core.color_active = (function genius$core$color_active(color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,cljs.core.cst$kw$active_QMARK_,true);
});
genius.core.game_status = (function genius$core$game_status(status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genius.core.game_state,cljs.core.assoc,cljs.core.cst$kw$status,status);
});
genius.core.new_highscore = (function genius$core$new_highscore(score){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genius.core.game_state,cljs.core.assoc,cljs.core.cst$kw$highest_DASH_score,score);
});
genius.core.playing_sequence_status = (function genius$core$playing_sequence_status(status){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genius.core.game_state,cljs.core.assoc,cljs.core.cst$kw$playing_DASH_sequence_QMARK_,status);
});
genius.core.inc_point = (function genius$core$inc_point(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genius.core.game_state,cljs.core.update,cljs.core.cst$kw$score,cljs.core.inc);
});
genius.core.all_colors_not_active = (function genius$core$all_colors_not_active(){
var colors = genius.core.state(cljs.core.cst$kw$colors);
var new_colors = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(genius.core.color_not_active,colors);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genius.core.game_state,cljs.core.assoc,cljs.core.cst$kw$colors,new_colors);
});
genius.core.add_new_color = (function genius$core$add_new_color(active_item){
return (function (color){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_item,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(color))){
genius.core.play_sound_BANG_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(color));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,cljs.core.cst$kw$active_QMARK_,true);
} else {
return color;
}
});
});
genius.core.start_color_sequence = (function genius$core$start_color_sequence(){
var color_sequence = genius.core.state(cljs.core.cst$kw$color_DASH_sequence);
var colors = genius.core.state(cljs.core.cst$kw$colors);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genius.core.game_state,cljs.core.assoc,cljs.core.cst$kw$playing_DASH_sequence_QMARK_,true);

var c__13829__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto__,color_sequence,colors){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto__,color_sequence,colors){
return (function (state_16746){
var state_val_16747 = (state_16746[(1)]);
if((state_val_16747 === (7))){
var inst_16713 = (state_16746[(7)]);
var inst_16733 = (inst_16713 + (1));
var inst_16734 = cljs.core.count(color_sequence);
var inst_16735 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16733,inst_16734);
var state_16746__$1 = state_16746;
if(inst_16735){
var statearr_16748_16770 = state_16746__$1;
(statearr_16748_16770[(1)] = (9));

} else {
var statearr_16749_16771 = state_16746__$1;
(statearr_16749_16771[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16747 === (1))){
var inst_16713 = (0);
var state_16746__$1 = (function (){var statearr_16750 = state_16746;
(statearr_16750[(7)] = inst_16713);

return statearr_16750;
})();
var statearr_16751_16772 = state_16746__$1;
(statearr_16751_16772[(2)] = null);

(statearr_16751_16772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16747 === (4))){
var inst_16721 = (state_16746[(2)]);
var inst_16722 = genius.core.all_colors_not_active();
var inst_16723 = cljs.core.async.timeout((150));
var state_16746__$1 = (function (){var statearr_16752 = state_16746;
(statearr_16752[(8)] = inst_16721);

(statearr_16752[(9)] = inst_16722);

return statearr_16752;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16746__$1,(5),inst_16723);
} else {
if((state_val_16747 === (6))){
var inst_16713 = (state_16746[(7)]);
var inst_16730 = (inst_16713 + (1));
var inst_16713__$1 = inst_16730;
var state_16746__$1 = (function (){var statearr_16753 = state_16746;
(statearr_16753[(7)] = inst_16713__$1);

return statearr_16753;
})();
var statearr_16754_16773 = state_16746__$1;
(statearr_16754_16773[(2)] = null);

(statearr_16754_16773[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16747 === (3))){
var inst_16744 = (state_16746[(2)]);
var state_16746__$1 = state_16746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16746__$1,inst_16744);
} else {
if((state_val_16747 === (2))){
var inst_16713 = (state_16746[(7)]);
var inst_16715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(color_sequence,inst_16713);
var inst_16716 = genius.core.add_new_color(inst_16715);
var inst_16717 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_16716,colors);
var inst_16718 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(genius.core.game_state,cljs.core.assoc,cljs.core.cst$kw$colors,inst_16717);
var inst_16719 = cljs.core.async.timeout((1000));
var state_16746__$1 = (function (){var statearr_16755 = state_16746;
(statearr_16755[(10)] = inst_16718);

return statearr_16755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16746__$1,(4),inst_16719);
} else {
if((state_val_16747 === (11))){
var inst_16740 = (state_16746[(2)]);
var state_16746__$1 = state_16746;
var statearr_16756_16774 = state_16746__$1;
(statearr_16756_16774[(2)] = inst_16740);

(statearr_16756_16774[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16747 === (9))){
var inst_16737 = genius.core.playing_sequence_status(false);
var state_16746__$1 = state_16746;
var statearr_16757_16775 = state_16746__$1;
(statearr_16757_16775[(2)] = inst_16737);

(statearr_16757_16775[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16747 === (5))){
var inst_16713 = (state_16746[(7)]);
var inst_16725 = (state_16746[(2)]);
var inst_16726 = (inst_16713 + (1));
var inst_16727 = cljs.core.count(color_sequence);
var inst_16728 = (inst_16726 < inst_16727);
var state_16746__$1 = (function (){var statearr_16758 = state_16746;
(statearr_16758[(11)] = inst_16725);

return statearr_16758;
})();
if(cljs.core.truth_(inst_16728)){
var statearr_16759_16776 = state_16746__$1;
(statearr_16759_16776[(1)] = (6));

} else {
var statearr_16760_16777 = state_16746__$1;
(statearr_16760_16777[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16747 === (10))){
var state_16746__$1 = state_16746;
var statearr_16761_16778 = state_16746__$1;
(statearr_16761_16778[(2)] = null);

(statearr_16761_16778[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16747 === (8))){
var inst_16742 = (state_16746[(2)]);
var state_16746__$1 = state_16746;
var statearr_16762_16779 = state_16746__$1;
(statearr_16762_16779[(2)] = inst_16742);

(statearr_16762_16779[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13829__auto__,color_sequence,colors))
;
return ((function (switch__13715__auto__,c__13829__auto__,color_sequence,colors){
return (function() {
var genius$core$start_color_sequence_$_state_machine__13716__auto__ = null;
var genius$core$start_color_sequence_$_state_machine__13716__auto____0 = (function (){
var statearr_16766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16766[(0)] = genius$core$start_color_sequence_$_state_machine__13716__auto__);

(statearr_16766[(1)] = (1));

return statearr_16766;
});
var genius$core$start_color_sequence_$_state_machine__13716__auto____1 = (function (state_16746){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_16746);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e16767){if((e16767 instanceof Object)){
var ex__13719__auto__ = e16767;
var statearr_16768_16780 = state_16746;
(statearr_16768_16780[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16746);

return cljs.core.cst$kw$recur;
} else {
throw e16767;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__16781 = state_16746;
state_16746 = G__16781;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
genius$core$start_color_sequence_$_state_machine__13716__auto__ = function(state_16746){
switch(arguments.length){
case 0:
return genius$core$start_color_sequence_$_state_machine__13716__auto____0.call(this);
case 1:
return genius$core$start_color_sequence_$_state_machine__13716__auto____1.call(this,state_16746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
genius$core$start_color_sequence_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = genius$core$start_color_sequence_$_state_machine__13716__auto____0;
genius$core$start_color_sequence_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = genius$core$start_color_sequence_$_state_machine__13716__auto____1;
return genius$core$start_color_sequence_$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto__,color_sequence,colors))
})();
var state__13831__auto__ = (function (){var statearr_16769 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_16769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto__);

return statearr_16769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto__,color_sequence,colors))
);

return c__13829__auto__;
});
genius.core.new_color_to_sequence = (function genius$core$new_color_to_sequence(){
var new_color = cljs.core.rand_nth(genius.core.state(cljs.core.cst$kw$colors));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(genius.core.game_state,cljs.core.update,cljs.core.cst$kw$color_DASH_sequence,cljs.core.conj,cljs.core.array_seq([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(new_color)], 0));

genius.core.inc_point();

genius.core.clear_choosen_sequence();

var c__13829__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto__,new_color){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto__,new_color){
return (function (state_16805){
var state_val_16806 = (state_16805[(1)]);
if((state_val_16806 === (1))){
var inst_16799 = genius.core.playing_sequence_status(true);
var inst_16800 = cljs.core.async.timeout((2000));
var state_16805__$1 = (function (){var statearr_16807 = state_16805;
(statearr_16807[(7)] = inst_16799);

return statearr_16807;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16805__$1,(2),inst_16800);
} else {
if((state_val_16806 === (2))){
var inst_16802 = (state_16805[(2)]);
var inst_16803 = genius.core.start_color_sequence();
var state_16805__$1 = (function (){var statearr_16808 = state_16805;
(statearr_16808[(8)] = inst_16802);

return statearr_16808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16805__$1,inst_16803);
} else {
return null;
}
}
});})(c__13829__auto__,new_color))
;
return ((function (switch__13715__auto__,c__13829__auto__,new_color){
return (function() {
var genius$core$new_color_to_sequence_$_state_machine__13716__auto__ = null;
var genius$core$new_color_to_sequence_$_state_machine__13716__auto____0 = (function (){
var statearr_16812 = [null,null,null,null,null,null,null,null,null];
(statearr_16812[(0)] = genius$core$new_color_to_sequence_$_state_machine__13716__auto__);

(statearr_16812[(1)] = (1));

return statearr_16812;
});
var genius$core$new_color_to_sequence_$_state_machine__13716__auto____1 = (function (state_16805){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_16805);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e16813){if((e16813 instanceof Object)){
var ex__13719__auto__ = e16813;
var statearr_16814_16816 = state_16805;
(statearr_16814_16816[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16805);

return cljs.core.cst$kw$recur;
} else {
throw e16813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__16817 = state_16805;
state_16805 = G__16817;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
genius$core$new_color_to_sequence_$_state_machine__13716__auto__ = function(state_16805){
switch(arguments.length){
case 0:
return genius$core$new_color_to_sequence_$_state_machine__13716__auto____0.call(this);
case 1:
return genius$core$new_color_to_sequence_$_state_machine__13716__auto____1.call(this,state_16805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
genius$core$new_color_to_sequence_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = genius$core$new_color_to_sequence_$_state_machine__13716__auto____0;
genius$core$new_color_to_sequence_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = genius$core$new_color_to_sequence_$_state_machine__13716__auto____1;
return genius$core$new_color_to_sequence_$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto__,new_color))
})();
var state__13831__auto__ = (function (){var statearr_16815 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_16815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto__);

return statearr_16815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto__,new_color))
);

return c__13829__auto__;
});
genius.core.finish_game = (function genius$core$finish_game(){
var score = genius.core.state(cljs.core.cst$kw$score);
var highest_score = genius.core.state(cljs.core.cst$kw$highest_DASH_score);
if((score > highest_score)){
genius.core.new_highscore(score);
} else {
}

return genius.core.game_status(cljs.core.cst$kw$finished);
});
genius.core.compare_choosen_colors = (function genius$core$compare_choosen_colors(){
var color_sequence = genius.core.state(cljs.core.cst$kw$color_DASH_sequence);
var choosen_sequence = genius.core.state(cljs.core.cst$kw$choosen_DASH_sequence);
var sequence_diff = clojure.data.diff(color_sequence,choosen_sequence);
var still_correct_QMARK_ = (cljs.core.second(sequence_diff) == null);
var correct_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_sequence,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sequence_diff,(2)));
if(correct_QMARK_){
return genius.core.new_color_to_sequence();
} else {
if(!(still_correct_QMARK_)){
return genius.core.finish_game();
} else {
return true;

}
}
});
genius.core.start_game = (function genius$core$start_game(){
genius.core.reset_state();

genius.core.game_status(cljs.core.cst$kw$playing);

return genius.core.new_color_to_sequence();
});
genius.core.color_click = (function genius$core$color_click(_,id){
var colors = genius.core.state(cljs.core.cst$kw$colors);
var color = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (colors){
return (function (p1__16818_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__16818_SHARP_));
});})(colors))
,colors));
genius.core.play_sound_BANG_(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(genius.core.game_state,cljs.core.update,cljs.core.cst$kw$choosen_DASH_sequence,cljs.core.conj,cljs.core.array_seq([cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(color)], 0));

return genius.core.compare_choosen_colors();
});
genius.core.color_sequence_item_class = (function genius$core$color_sequence_item_class(color){
return [cljs.core.str("color-sequence-box__item color-sequence-box__item--"),cljs.core.str(cljs.core.name(color))].join('');
});
genius.core.active_color_sequence_item_class = (function genius$core$active_color_sequence_item_class(color){
return [cljs.core.str("color-sequence-box__item color-sequence-box__item--"),cljs.core.str(cljs.core.name(color)),cljs.core.str(" color-sequence-box__item--"),cljs.core.str(cljs.core.name(color)),cljs.core.str("-active")].join('');
});
genius.core.color_feedback = (function genius$core$color_feedback(item_class,name){
return (function (_){
var G__16827_16835 = item_class;
var G__16828_16836 = genius.core.active_color_sequence_item_class(name);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16827_16835,G__16828_16836) : cljs.core.reset_BANG_.call(null,G__16827_16835,G__16828_16836));

var G__16831 = (function (){
var G__16833 = item_class;
var G__16834 = genius.core.color_sequence_item_class(name);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16833,G__16834) : cljs.core.reset_BANG_.call(null,G__16833,G__16834));
});
var G__16832 = (300);
return setTimeout(G__16831,G__16832);
});
});
genius.core.color_sequence_item = (function genius$core$color_sequence_item(p__16838,color_click){
var map__16848 = p__16838;
var map__16848__$1 = ((((!((map__16848 == null)))?((((map__16848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16848):map__16848);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16848__$1,cljs.core.cst$kw$id);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16848__$1,cljs.core.cst$kw$active_QMARK_);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16848__$1,cljs.core.cst$kw$title);
var initial_class = genius.core.color_sequence_item_class(title);
var item_class = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_class);
return ((function (initial_class,item_class,map__16848,map__16848__$1,id,active_QMARK_,title){
return (function (p__16850,color_click__$1){
var map__16851 = p__16850;
var map__16851__$1 = ((((!((map__16851 == null)))?((((map__16851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16851):map__16851);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16851__$1,cljs.core.cst$kw$id);
var active_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16851__$1,cljs.core.cst$kw$active_QMARK_);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16851__$1,cljs.core.cst$kw$name);
var playing_sequence_QMARK_ = genius.core.state(cljs.core.cst$kw$playing_DASH_sequence_QMARK_);
if(cljs.core.truth_(playing_sequence_QMARK_)){
if(cljs.core.truth_(active_QMARK___$1)){
var G__16853_16857 = item_class;
var G__16854_16858 = genius.core.active_color_sequence_item_class(title);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16853_16857,G__16854_16858) : cljs.core.reset_BANG_.call(null,G__16853_16857,G__16854_16858));
} else {
var G__16855_16859 = item_class;
var G__16856_16860 = genius.core.color_sequence_item_class(title);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16855_16859,G__16856_16860) : cljs.core.reset_BANG_.call(null,G__16855_16859,G__16856_16860));
}
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$color_DASH_sequence_DASH_box__item,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item_class) : cljs.core.deref.call(null,item_class))], null),(cljs.core.truth_(playing_sequence_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (playing_sequence_QMARK_,map__16851,map__16851__$1,id__$1,active_QMARK___$1,name,initial_class,item_class,map__16848,map__16848__$1,id,active_QMARK_,title){
return (function (p1__16837_SHARP_){
return (color_click__$1.cljs$core$IFn$_invoke$arity$2 ? color_click__$1.cljs$core$IFn$_invoke$arity$2(p1__16837_SHARP_,id__$1) : color_click__$1.call(null,p1__16837_SHARP_,id__$1));
});})(playing_sequence_QMARK_,map__16851,map__16851__$1,id__$1,active_QMARK___$1,name,initial_class,item_class,map__16848,map__16848__$1,id,active_QMARK_,title))
,cljs.core.cst$kw$on_DASH_mouse_DASH_down,genius.core.color_feedback(item_class,title)], null))], 0))], null);
});
;})(initial_class,item_class,map__16848,map__16848__$1,id,active_QMARK_,title))
});
genius.core.color_sequence_box = (function genius$core$color_sequence_box(){
var colors = genius.core.state(cljs.core.cst$kw$colors);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$color_DASH_sequence_DASH_container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$color_DASH_sequence_DASH_box,(function (){var iter__6914__auto__ = ((function (colors){
return (function genius$core$color_sequence_box_$_iter__16867(s__16868){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__16868__$1 = s__16868;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16868__$1);
if(temp__4425__auto__){
var s__16868__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16868__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__16868__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__16870 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__16869 = (0);
while(true){
if((i__16869 < size__6913__auto__)){
var color = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__16869);
cljs.core.chunk_append(b__16870,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.color_sequence_item,color,genius.core.color_click], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(color)], null)));

var G__16873 = (i__16869 + (1));
i__16869 = G__16873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16870),genius$core$color_sequence_box_$_iter__16867(cljs.core.chunk_rest(s__16868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16870),null);
}
} else {
var color = cljs.core.first(s__16868__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.color_sequence_item,color,genius.core.color_click], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(color)], null)),genius$core$color_sequence_box_$_iter__16867(cljs.core.rest(s__16868__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__6914__auto__(colors);
})()], null)], null);
});
genius.core.select_color_item = (function genius$core$select_color_item(color,on_color_click){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$select_DASH_color_DASH_box__item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (p1__16874_SHARP_){
var G__16877 = p1__16874_SHARP_;
var G__16878 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(color);
return (on_color_click.cljs$core$IFn$_invoke$arity$2 ? on_color_click.cljs$core$IFn$_invoke$arity$2(G__16877,G__16878) : on_color_click.call(null,G__16877,G__16878));
}),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(color)], null)], null)], null);
});
genius.core.select_color_box = (function genius$core$select_color_box(){
var colors = genius.core.state(cljs.core.cst$kw$colors);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$select_DASH_color_DASH_box,(function (){var iter__6914__auto__ = ((function (colors){
return (function genius$core$select_color_box_$_iter__16885(s__16886){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__16886__$1 = s__16886;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__16886__$1);
if(temp__4425__auto__){
var s__16886__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16886__$2)){
var c__6912__auto__ = cljs.core.chunk_first(s__16886__$2);
var size__6913__auto__ = cljs.core.count(c__6912__auto__);
var b__16888 = cljs.core.chunk_buffer(size__6913__auto__);
if((function (){var i__16887 = (0);
while(true){
if((i__16887 < size__6913__auto__)){
var color = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6912__auto__,i__16887);
cljs.core.chunk_append(b__16888,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.select_color_item,color,genius.core.color_click], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(color)], null)));

var G__16891 = (i__16887 + (1));
i__16887 = G__16891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16888),genius$core$select_color_box_$_iter__16885(cljs.core.chunk_rest(s__16886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16888),null);
}
} else {
var color = cljs.core.first(s__16886__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.select_color_item,color,genius.core.color_click], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(color)], null)),genius$core$select_color_box_$_iter__16885(cljs.core.rest(s__16886__$2)));
}
} else {
return null;
}
break;
}
});})(colors))
,null,null));
});})(colors))
;
return iter__6914__auto__(colors);
})()], null);
});
genius.core.game_info = (function genius$core$game_info(score,highest_score){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$game_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$small,[cljs.core.str("Score: "),cljs.core.str(score)].join('')], null)], null);
});
genius.core.main_view = (function genius$core$main_view(game_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main_DASH_view__title_DASH_area,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title_DASH_area__title,"genius"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,genius.core.start_game], null),"start!"], null)], null)], null);
});
genius.core.genius_view = (function genius$core$genius_view(){
var map__16894 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(genius.core.game_state) : cljs.core.deref.call(null,genius.core.game_state));
var map__16894__$1 = ((((!((map__16894 == null)))?((((map__16894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16894):map__16894);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16894__$1,cljs.core.cst$kw$score);
var highest_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16894__$1,cljs.core.cst$kw$highest_DASH_score);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$genius,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.color_sequence_box], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.game_info,score,highest_score], null)], null);
});
genius.core.finished_view = (function genius$core$finished_view(){
var map__16898 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(genius.core.game_state) : cljs.core.deref.call(null,genius.core.game_state));
var map__16898__$1 = ((((!((map__16898 == null)))?((((map__16898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16898):map__16898);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16898__$1,cljs.core.cst$kw$score);
var highest_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16898__$1,cljs.core.cst$kw$highest_DASH_score);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$finished_DASH_view,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title,"finished!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$strong,[cljs.core.str("score: "),cljs.core.str(score)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p$finished_DASH_view__score,[cljs.core.str("highest score: "),cljs.core.str(highest_score)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,genius.core.start_game], null),"again!"], null)], null);
});
genius.core.game = (function genius$core$game(game_state){
var map__16905 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_state) : cljs.core.deref.call(null,game_state));
var map__16905__$1 = ((((!((map__16905 == null)))?((((map__16905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16905):map__16905);
var choosen_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$choosen_DASH_sequence);
var color_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$color_DASH_sequence);
var highest_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$highest_DASH_score);
var playing_sequence_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$playing_DASH_sequence_QMARK_);
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$score);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,cljs.core.cst$kw$status);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$genius,(function (){var pred__16907 = cljs.core._EQ_;
var expr__16908 = status;
if(cljs.core.truth_((pred__16907.cljs$core$IFn$_invoke$arity$2 ? pred__16907.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$main,expr__16908) : pred__16907.call(null,cljs.core.cst$kw$main,expr__16908)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.main_view], null);
} else {
if(cljs.core.truth_((pred__16907.cljs$core$IFn$_invoke$arity$2 ? pred__16907.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$playing,expr__16908) : pred__16907.call(null,cljs.core.cst$kw$playing,expr__16908)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.genius_view], null);
} else {
if(cljs.core.truth_((pred__16907.cljs$core$IFn$_invoke$arity$2 ? pred__16907.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$finished,expr__16908) : pred__16907.call(null,cljs.core.cst$kw$finished,expr__16908)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.finished_view], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.main_view], null);
}
}
}
})()], null);
});
genius.core.mount_BANG_ = (function genius$core$mount_BANG_(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.game,genius.core.game_state], null),document.getElementById("app"));
});
genius.core.mount_BANG_();
