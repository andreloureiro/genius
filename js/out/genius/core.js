// Compiled by ClojureScript 1.7.228 {}
goog.provide('genius.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.data');
goog.require('reagent.core');
goog.require('wad');
cljs.core.enable_console_print_BANG_.call(null);
genius.core.game_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"active?","active?",459499776),false], null)], null),new cljs.core.Keyword(null,"color-sequence","color-sequence",-75209764),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"choosen-sequence","choosen-sequence",152616246),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"playing-sequence?","playing-sequence?",-383916654),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"score","score",-1963588780),(-1),new cljs.core.Keyword(null,"highest-score","highest-score",1147726523),(0)], null));
genius.core.state = (function genius$core$state(k){
return cljs.core.get.call(null,cljs.core.deref.call(null,genius.core.game_state),k);
});
genius.core.reset_state = (function genius$core$reset_state(){
return cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"color-sequence","color-sequence",-75209764),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"choosen-sequence","choosen-sequence",152616246),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"score","score",-1963588780),(-1));
});
genius.core.clear_choosen_sequence = (function genius$core$clear_choosen_sequence(){
return cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"choosen-sequence","choosen-sequence",152616246),cljs.core.PersistentVector.EMPTY);
});
genius.core.id__GT_note = (function genius$core$id__GT_note(id){
var pred__24979 = cljs.core._EQ_;
var expr__24980 = id;
if(cljs.core.truth_(pred__24979.call(null,(0),expr__24980))){
return "C4";
} else {
if(cljs.core.truth_(pred__24979.call(null,(1),expr__24980))){
return "D4";
} else {
if(cljs.core.truth_(pred__24979.call(null,(2),expr__24980))){
return "E4";
} else {
if(cljs.core.truth_(pred__24979.call(null,(3),expr__24980))){
return "F4";
} else {
return "C4";
}
}
}
}
});
genius.core.wad_options = (function genius$core$wad_options(note){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"source","source",-433931539),"sawtooth",new cljs.core.Keyword(null,"volume","volume",1900330799),1.0,new cljs.core.Keyword(null,"loop","loop",-395552849),"false",new cljs.core.Keyword(null,"pitch","pitch",1495126700),note,new cljs.core.Keyword(null,"detune","detune",316572245),(0),new cljs.core.Keyword(null,"panning","panning",-1931627491),-0.5,new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attack","attack",1957061788),(0),new cljs.core.Keyword(null,"decay","decay",1036712184),(0),new cljs.core.Keyword(null,"sustain","sustain",1604277844),1.0,new cljs.core.Keyword(null,"hold","hold",-1621118005),0.1,new cljs.core.Keyword(null,"release","release",-1534371381),(0)], null)], null);
});
genius.core.play_sound_BANG_ = (function genius$core$play_sound_BANG_(id){
var note = genius.core.id__GT_note.call(null,id);
return (new Wad(cljs.core.clj__GT_js.call(null,genius.core.wad_options.call(null,note)))).play();
});
genius.core.color_not_active = (function genius$core$color_not_active(color){
return cljs.core.assoc.call(null,color,new cljs.core.Keyword(null,"active?","active?",459499776),false);
});
genius.core.color_active = (function genius$core$color_active(color){
return cljs.core.assoc.call(null,color,new cljs.core.Keyword(null,"active?","active?",459499776),true);
});
genius.core.game_status = (function genius$core$game_status(status){
return cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),status);
});
genius.core.new_highscore = (function genius$core$new_highscore(score){
return cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"highest-score","highest-score",1147726523),score);
});
genius.core.playing_sequence_status = (function genius$core$playing_sequence_status(status){
return cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"playing-sequence?","playing-sequence?",-383916654),status);
});
genius.core.inc_point = (function genius$core$inc_point(){
return cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.update,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.inc);
});
genius.core.all_colors_not_active = (function genius$core$all_colors_not_active(){
var colors = genius.core.state.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732));
var new_colors = cljs.core.mapv.call(null,genius.core.color_not_active,colors);
return cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"colors","colors",1157174732),new_colors);
});
genius.core.add_new_color = (function genius$core$add_new_color(active_item){
return (function (color){
if(cljs.core._EQ_.call(null,active_item,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color))){
genius.core.play_sound_BANG_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color));

return cljs.core.assoc.call(null,color,new cljs.core.Keyword(null,"active?","active?",459499776),true);
} else {
return color;
}
});
});
genius.core.start_color_sequence = (function genius$core$start_color_sequence(){
var color_sequence = genius.core.state.call(null,new cljs.core.Keyword(null,"color-sequence","color-sequence",-75209764));
var colors = genius.core.state.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732));
cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"playing-sequence?","playing-sequence?",-383916654),true);

var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__,color_sequence,colors){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__,color_sequence,colors){
return (function (state_25072){
var state_val_25073 = (state_25072[(1)]);
if((state_val_25073 === (7))){
var inst_25039 = (state_25072[(7)]);
var inst_25059 = (inst_25039 + (1));
var inst_25060 = cljs.core.count.call(null,color_sequence);
var inst_25061 = cljs.core._EQ_.call(null,inst_25059,inst_25060);
var state_25072__$1 = state_25072;
if(inst_25061){
var statearr_25074_25096 = state_25072__$1;
(statearr_25074_25096[(1)] = (9));

} else {
var statearr_25075_25097 = state_25072__$1;
(statearr_25075_25097[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (1))){
var inst_25039 = (0);
var state_25072__$1 = (function (){var statearr_25076 = state_25072;
(statearr_25076[(7)] = inst_25039);

return statearr_25076;
})();
var statearr_25077_25098 = state_25072__$1;
(statearr_25077_25098[(2)] = null);

(statearr_25077_25098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (4))){
var inst_25047 = (state_25072[(2)]);
var inst_25048 = genius.core.all_colors_not_active.call(null);
var inst_25049 = cljs.core.async.timeout.call(null,(150));
var state_25072__$1 = (function (){var statearr_25078 = state_25072;
(statearr_25078[(8)] = inst_25048);

(statearr_25078[(9)] = inst_25047);

return statearr_25078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(5),inst_25049);
} else {
if((state_val_25073 === (6))){
var inst_25039 = (state_25072[(7)]);
var inst_25056 = (inst_25039 + (1));
var inst_25039__$1 = inst_25056;
var state_25072__$1 = (function (){var statearr_25079 = state_25072;
(statearr_25079[(7)] = inst_25039__$1);

return statearr_25079;
})();
var statearr_25080_25099 = state_25072__$1;
(statearr_25080_25099[(2)] = null);

(statearr_25080_25099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (3))){
var inst_25070 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25072__$1,inst_25070);
} else {
if((state_val_25073 === (2))){
var inst_25039 = (state_25072[(7)]);
var inst_25041 = cljs.core.nth.call(null,color_sequence,inst_25039);
var inst_25042 = genius.core.add_new_color.call(null,inst_25041);
var inst_25043 = cljs.core.mapv.call(null,inst_25042,colors);
var inst_25044 = cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"colors","colors",1157174732),inst_25043);
var inst_25045 = cljs.core.async.timeout.call(null,(1000));
var state_25072__$1 = (function (){var statearr_25081 = state_25072;
(statearr_25081[(10)] = inst_25044);

return statearr_25081;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25072__$1,(4),inst_25045);
} else {
if((state_val_25073 === (11))){
var inst_25066 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25082_25100 = state_25072__$1;
(statearr_25082_25100[(2)] = inst_25066);

(statearr_25082_25100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (9))){
var inst_25063 = genius.core.playing_sequence_status.call(null,false);
var state_25072__$1 = state_25072;
var statearr_25083_25101 = state_25072__$1;
(statearr_25083_25101[(2)] = inst_25063);

(statearr_25083_25101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (5))){
var inst_25039 = (state_25072[(7)]);
var inst_25051 = (state_25072[(2)]);
var inst_25052 = (inst_25039 + (1));
var inst_25053 = cljs.core.count.call(null,color_sequence);
var inst_25054 = (inst_25052 < inst_25053);
var state_25072__$1 = (function (){var statearr_25084 = state_25072;
(statearr_25084[(11)] = inst_25051);

return statearr_25084;
})();
if(cljs.core.truth_(inst_25054)){
var statearr_25085_25102 = state_25072__$1;
(statearr_25085_25102[(1)] = (6));

} else {
var statearr_25086_25103 = state_25072__$1;
(statearr_25086_25103[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (10))){
var state_25072__$1 = state_25072;
var statearr_25087_25104 = state_25072__$1;
(statearr_25087_25104[(2)] = null);

(statearr_25087_25104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25073 === (8))){
var inst_25068 = (state_25072[(2)]);
var state_25072__$1 = state_25072;
var statearr_25088_25105 = state_25072__$1;
(statearr_25088_25105[(2)] = inst_25068);

(statearr_25088_25105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__20458__auto__,color_sequence,colors))
;
return ((function (switch__20346__auto__,c__20458__auto__,color_sequence,colors){
return (function() {
var genius$core$start_color_sequence_$_state_machine__20347__auto__ = null;
var genius$core$start_color_sequence_$_state_machine__20347__auto____0 = (function (){
var statearr_25092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25092[(0)] = genius$core$start_color_sequence_$_state_machine__20347__auto__);

(statearr_25092[(1)] = (1));

return statearr_25092;
});
var genius$core$start_color_sequence_$_state_machine__20347__auto____1 = (function (state_25072){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_25072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e25093){if((e25093 instanceof Object)){
var ex__20350__auto__ = e25093;
var statearr_25094_25106 = state_25072;
(statearr_25094_25106[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25107 = state_25072;
state_25072 = G__25107;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
genius$core$start_color_sequence_$_state_machine__20347__auto__ = function(state_25072){
switch(arguments.length){
case 0:
return genius$core$start_color_sequence_$_state_machine__20347__auto____0.call(this);
case 1:
return genius$core$start_color_sequence_$_state_machine__20347__auto____1.call(this,state_25072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
genius$core$start_color_sequence_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = genius$core$start_color_sequence_$_state_machine__20347__auto____0;
genius$core$start_color_sequence_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = genius$core$start_color_sequence_$_state_machine__20347__auto____1;
return genius$core$start_color_sequence_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__,color_sequence,colors))
})();
var state__20460__auto__ = (function (){var statearr_25095 = f__20459__auto__.call(null);
(statearr_25095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_25095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__,color_sequence,colors))
);

return c__20458__auto__;
});
genius.core.new_color_to_sequence = (function genius$core$new_color_to_sequence(){
var new_color = cljs.core.rand_nth.call(null,genius.core.state.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732)));
cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.update,new cljs.core.Keyword(null,"color-sequence","color-sequence",-75209764),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_color));

genius.core.inc_point.call(null);

genius.core.clear_choosen_sequence.call(null);

var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__,new_color){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__,new_color){
return (function (state_25131){
var state_val_25132 = (state_25131[(1)]);
if((state_val_25132 === (1))){
var inst_25125 = genius.core.playing_sequence_status.call(null,true);
var inst_25126 = cljs.core.async.timeout.call(null,(2000));
var state_25131__$1 = (function (){var statearr_25133 = state_25131;
(statearr_25133[(7)] = inst_25125);

return statearr_25133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25131__$1,(2),inst_25126);
} else {
if((state_val_25132 === (2))){
var inst_25128 = (state_25131[(2)]);
var inst_25129 = genius.core.start_color_sequence.call(null);
var state_25131__$1 = (function (){var statearr_25134 = state_25131;
(statearr_25134[(8)] = inst_25128);

return statearr_25134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25131__$1,inst_25129);
} else {
return null;
}
}
});})(c__20458__auto__,new_color))
;
return ((function (switch__20346__auto__,c__20458__auto__,new_color){
return (function() {
var genius$core$new_color_to_sequence_$_state_machine__20347__auto__ = null;
var genius$core$new_color_to_sequence_$_state_machine__20347__auto____0 = (function (){
var statearr_25138 = [null,null,null,null,null,null,null,null,null];
(statearr_25138[(0)] = genius$core$new_color_to_sequence_$_state_machine__20347__auto__);

(statearr_25138[(1)] = (1));

return statearr_25138;
});
var genius$core$new_color_to_sequence_$_state_machine__20347__auto____1 = (function (state_25131){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_25131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e25139){if((e25139 instanceof Object)){
var ex__20350__auto__ = e25139;
var statearr_25140_25142 = state_25131;
(statearr_25140_25142[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25143 = state_25131;
state_25131 = G__25143;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
genius$core$new_color_to_sequence_$_state_machine__20347__auto__ = function(state_25131){
switch(arguments.length){
case 0:
return genius$core$new_color_to_sequence_$_state_machine__20347__auto____0.call(this);
case 1:
return genius$core$new_color_to_sequence_$_state_machine__20347__auto____1.call(this,state_25131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
genius$core$new_color_to_sequence_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = genius$core$new_color_to_sequence_$_state_machine__20347__auto____0;
genius$core$new_color_to_sequence_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = genius$core$new_color_to_sequence_$_state_machine__20347__auto____1;
return genius$core$new_color_to_sequence_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__,new_color))
})();
var state__20460__auto__ = (function (){var statearr_25141 = f__20459__auto__.call(null);
(statearr_25141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_25141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__,new_color))
);

return c__20458__auto__;
});
genius.core.finish_game = (function genius$core$finish_game(){
var score = genius.core.state.call(null,new cljs.core.Keyword(null,"score","score",-1963588780));
var highest_score = genius.core.state.call(null,new cljs.core.Keyword(null,"highest-score","highest-score",1147726523));
if((score > highest_score)){
genius.core.new_highscore.call(null,score);
} else {
}

return genius.core.game_status.call(null,new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
genius.core.compare_choosen_colors = (function genius$core$compare_choosen_colors(){
var color_sequence = genius.core.state.call(null,new cljs.core.Keyword(null,"color-sequence","color-sequence",-75209764));
var choosen_sequence = genius.core.state.call(null,new cljs.core.Keyword(null,"choosen-sequence","choosen-sequence",152616246));
var sequence_diff = clojure.data.diff.call(null,color_sequence,choosen_sequence);
var still_correct_QMARK_ = (cljs.core.second.call(null,sequence_diff) == null);
var correct_QMARK_ = cljs.core._EQ_.call(null,color_sequence,cljs.core.nth.call(null,sequence_diff,(2)));
if(correct_QMARK_){
return genius.core.new_color_to_sequence.call(null);
} else {
if(!(still_correct_QMARK_)){
return genius.core.finish_game.call(null);
} else {
return true;

}
}
});
genius.core.start_game = (function genius$core$start_game(){
genius.core.reset_state.call(null);

genius.core.game_status.call(null,new cljs.core.Keyword(null,"playing","playing",70013335));

return genius.core.new_color_to_sequence.call(null);
});
genius.core.color_click = (function genius$core$color_click(_,id){
var colors = genius.core.state.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732));
var color = cljs.core.first.call(null,cljs.core.filter.call(null,((function (colors){
return (function (p1__25144_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__25144_SHARP_));
});})(colors))
,colors));
genius.core.play_sound_BANG_.call(null,id);

cljs.core.swap_BANG_.call(null,genius.core.game_state,cljs.core.update,new cljs.core.Keyword(null,"choosen-sequence","choosen-sequence",152616246),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color));

return genius.core.compare_choosen_colors.call(null);
});
genius.core.color_sequence_item_class = (function genius$core$color_sequence_item_class(color){
return [cljs.core.str("color-sequence-box__item color-sequence-box__item--"),cljs.core.str(cljs.core.name.call(null,color))].join('');
});
genius.core.active_color_sequence_item_class = (function genius$core$active_color_sequence_item_class(color){
return [cljs.core.str("color-sequence-box__item color-sequence-box__item--"),cljs.core.str(cljs.core.name.call(null,color)),cljs.core.str(" color-sequence-box__item--"),cljs.core.str(cljs.core.name.call(null,color)),cljs.core.str("-active")].join('');
});
genius.core.color_feedback = (function genius$core$color_feedback(item_class,name){
return (function (_){
cljs.core.reset_BANG_.call(null,item_class,genius.core.active_color_sequence_item_class.call(null,name));

return setTimeout((function (){
return cljs.core.reset_BANG_.call(null,item_class,genius.core.color_sequence_item_class.call(null,name));
}),(300));
});
});
genius.core.color_sequence_item = (function genius$core$color_sequence_item(p__25146,color_click){
var map__25152 = p__25146;
var map__25152__$1 = ((((!((map__25152 == null)))?((((map__25152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25152):map__25152);
var id = cljs.core.get.call(null,map__25152__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var active_QMARK_ = cljs.core.get.call(null,map__25152__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var title = cljs.core.get.call(null,map__25152__$1,new cljs.core.Keyword(null,"title","title",636505583));
var initial_class = genius.core.color_sequence_item_class.call(null,title);
var item_class = reagent.core.atom.call(null,initial_class);
return ((function (initial_class,item_class,map__25152,map__25152__$1,id,active_QMARK_,title){
return (function (p__25154,color_click__$1){
var map__25155 = p__25154;
var map__25155__$1 = ((((!((map__25155 == null)))?((((map__25155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25155):map__25155);
var id__$1 = cljs.core.get.call(null,map__25155__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var active_QMARK___$1 = cljs.core.get.call(null,map__25155__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var name = cljs.core.get.call(null,map__25155__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var playing_sequence_QMARK_ = genius.core.state.call(null,new cljs.core.Keyword(null,"playing-sequence?","playing-sequence?",-383916654));
if(cljs.core.truth_(playing_sequence_QMARK_)){
if(cljs.core.truth_(active_QMARK___$1)){
cljs.core.reset_BANG_.call(null,item_class,genius.core.active_color_sequence_item_class.call(null,title));
} else {
cljs.core.reset_BANG_.call(null,item_class,genius.core.color_sequence_item_class.call(null,title));
}
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-sequence-box__item","div.color-sequence-box__item",-1190037217),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),cljs.core.deref.call(null,item_class)], null),(cljs.core.truth_(playing_sequence_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (playing_sequence_QMARK_,map__25155,map__25155__$1,id__$1,active_QMARK___$1,name,initial_class,item_class,map__25152,map__25152__$1,id,active_QMARK_,title){
return (function (p1__25145_SHARP_){
return color_click__$1.call(null,p1__25145_SHARP_,id__$1);
});})(playing_sequence_QMARK_,map__25155,map__25155__$1,id__$1,active_QMARK___$1,name,initial_class,item_class,map__25152,map__25152__$1,id,active_QMARK_,title))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),genius.core.color_feedback.call(null,item_class,title)], null)))], null);
});
;})(initial_class,item_class,map__25152,map__25152__$1,id,active_QMARK_,title))
});
genius.core.color_sequence_box = (function genius$core$color_sequence_box(){
var colors = genius.core.state.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-sequence-container","div.color-sequence-container",-1150950894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-sequence-box","div.color-sequence-box",-2071148986),(function (){var iter__19063__auto__ = ((function (colors){
return (function genius$core$color_sequence_box_$_iter__25161(s__25162){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__25162__$1 = s__25162;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25162__$1);
if(temp__4425__auto__){
var s__25162__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25162__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__25162__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__25164 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__25163 = (0);
while(true){
if((i__25163 < size__19062__auto__)){
var color = cljs.core._nth.call(null,c__19061__auto__,i__25163);
cljs.core.chunk_append.call(null,b__25164,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.color_sequence_item,color,genius.core.color_click], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color)], null)));

var G__25165 = (i__25163 + (1));
i__25163 = G__25165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25164),genius$core$color_sequence_box_$_iter__25161.call(null,cljs.core.chunk_rest.call(null,s__25162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25164),null);
}
} else {
var color = cljs.core.first.call(null,s__25162__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.color_sequence_item,color,genius.core.color_click], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color)], null)),genius$core$color_sequence_box_$_iter__25161.call(null,cljs.core.rest.call(null,s__25162__$2)));
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
return iter__19063__auto__.call(null,colors);
})()], null)], null);
});
genius.core.select_color_item = (function genius$core$select_color_item(color,on_color_click){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select-color-box__item","div.select-color-box__item",881031581),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__25166_SHARP_){
return on_color_click.call(null,p1__25166_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color)], null)], null)], null);
});
genius.core.select_color_box = (function genius$core$select_color_box(){
var colors = genius.core.state.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select-color-box","div.select-color-box",-563966000),(function (){var iter__19063__auto__ = ((function (colors){
return (function genius$core$select_color_box_$_iter__25171(s__25172){
return (new cljs.core.LazySeq(null,((function (colors){
return (function (){
var s__25172__$1 = s__25172;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__25172__$1);
if(temp__4425__auto__){
var s__25172__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25172__$2)){
var c__19061__auto__ = cljs.core.chunk_first.call(null,s__25172__$2);
var size__19062__auto__ = cljs.core.count.call(null,c__19061__auto__);
var b__25174 = cljs.core.chunk_buffer.call(null,size__19062__auto__);
if((function (){var i__25173 = (0);
while(true){
if((i__25173 < size__19062__auto__)){
var color = cljs.core._nth.call(null,c__19061__auto__,i__25173);
cljs.core.chunk_append.call(null,b__25174,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.select_color_item,color,genius.core.color_click], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color)], null)));

var G__25175 = (i__25173 + (1));
i__25173 = G__25175;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25174),genius$core$select_color_box_$_iter__25171.call(null,cljs.core.chunk_rest.call(null,s__25172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25174),null);
}
} else {
var color = cljs.core.first.call(null,s__25172__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.select_color_item,color,genius.core.color_click], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color)], null)),genius$core$select_color_box_$_iter__25171.call(null,cljs.core.rest.call(null,s__25172__$2)));
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
return iter__19063__auto__.call(null,colors);
})()], null);
});
genius.core.game_info = (function genius$core$game_info(score,highest_score){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-info","div.game-info",-605893819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),[cljs.core.str("Score: "),cljs.core.str(score)].join('')], null)], null);
});
genius.core.main_view = (function genius$core$main_view(game_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-view","div.main-view",1657317201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-view__title-area","div.main-view__title-area",716656861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title-area__title","h1.title-area__title",-1900904616),"genius"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),genius.core.start_game], null),"start!"], null)], null)], null);
});
genius.core.genius_view = (function genius$core$genius_view(){
var map__25178 = cljs.core.deref.call(null,genius.core.game_state);
var map__25178__$1 = ((((!((map__25178 == null)))?((((map__25178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25178):map__25178);
var score = cljs.core.get.call(null,map__25178__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var highest_score = cljs.core.get.call(null,map__25178__$1,new cljs.core.Keyword(null,"highest-score","highest-score",1147726523));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.genius","div.genius",337253681),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.color_sequence_box], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.game_info,score,highest_score], null)], null);
});
genius.core.finished_view = (function genius$core$finished_view(){
var map__25182 = cljs.core.deref.call(null,genius.core.game_state);
var map__25182__$1 = ((((!((map__25182 == null)))?((((map__25182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25182):map__25182);
var score = cljs.core.get.call(null,map__25182__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var highest_score = cljs.core.get.call(null,map__25182__$1,new cljs.core.Keyword(null,"highest-score","highest-score",1147726523));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.finished-view","div.finished-view",1417859978),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"finished!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),[cljs.core.str("score: "),cljs.core.str(score)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.finished-view__score","p.finished-view__score",-2009658916),[cljs.core.str("highest score: "),cljs.core.str(highest_score)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),genius.core.start_game], null),"again!"], null)], null);
});
genius.core.game = (function genius$core$game(game_state){
var map__25189 = cljs.core.deref.call(null,game_state);
var map__25189__$1 = ((((!((map__25189 == null)))?((((map__25189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25189):map__25189);
var choosen_sequence = cljs.core.get.call(null,map__25189__$1,new cljs.core.Keyword(null,"choosen-sequence","choosen-sequence",152616246));
var color_sequence = cljs.core.get.call(null,map__25189__$1,new cljs.core.Keyword(null,"color-sequence","color-sequence",-75209764));
var highest_score = cljs.core.get.call(null,map__25189__$1,new cljs.core.Keyword(null,"highest-score","highest-score",1147726523));
var playing_sequence_QMARK_ = cljs.core.get.call(null,map__25189__$1,new cljs.core.Keyword(null,"playing-sequence?","playing-sequence?",-383916654));
var score = cljs.core.get.call(null,map__25189__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var status = cljs.core.get.call(null,map__25189__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.genius","div.genius",337253681),(function (){var pred__25191 = cljs.core._EQ_;
var expr__25192 = status;
if(cljs.core.truth_(pred__25191.call(null,new cljs.core.Keyword(null,"main","main",-2117802661),expr__25192))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.main_view], null);
} else {
if(cljs.core.truth_(pred__25191.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),expr__25192))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.genius_view], null);
} else {
if(cljs.core.truth_(pred__25191.call(null,new cljs.core.Keyword(null,"finished","finished",-1018867731),expr__25192))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.finished_view], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.main_view], null);
}
}
}
})()], null);
});
genius.core.mount_BANG_ = (function genius$core$mount_BANG_(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [genius.core.game,genius.core.game_state], null),document.getElementById("app"));
});
genius.core.mount_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1546505761962