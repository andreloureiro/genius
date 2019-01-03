// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25629 = cljs.core._EQ_;
var expr__25630 = (function (){var or__18291__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e25633){if((e25633 instanceof Error)){
var e = e25633;
return false;
} else {
throw e25633;

}
}})();
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25629.call(null,"true",expr__25630))){
return true;
} else {
if(cljs.core.truth_(pred__25629.call(null,"false",expr__25630))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25630)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e25635){if((e25635 instanceof Error)){
var e = e25635;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e25635;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19356__auto__ = [];
var len__19349__auto___25637 = arguments.length;
var i__19350__auto___25638 = (0);
while(true){
if((i__19350__auto___25638 < len__19349__auto___25637)){
args__19356__auto__.push((arguments[i__19350__auto___25638]));

var G__25639 = (i__19350__auto___25638 + (1));
i__19350__auto___25638 = G__25639;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq25636){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25636));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25640){
var map__25643 = p__25640;
var map__25643__$1 = ((((!((map__25643 == null)))?((((map__25643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25643):map__25643);
var message = cljs.core.get.call(null,map__25643__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25643__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18291__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18279__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18279__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18279__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20458__auto___25805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___25805,ch){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___25805,ch){
return (function (state_25774){
var state_val_25775 = (state_25774[(1)]);
if((state_val_25775 === (7))){
var inst_25770 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25776_25806 = state_25774__$1;
(statearr_25776_25806[(2)] = inst_25770);

(statearr_25776_25806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (1))){
var state_25774__$1 = state_25774;
var statearr_25777_25807 = state_25774__$1;
(statearr_25777_25807[(2)] = null);

(statearr_25777_25807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (4))){
var inst_25727 = (state_25774[(7)]);
var inst_25727__$1 = (state_25774[(2)]);
var state_25774__$1 = (function (){var statearr_25778 = state_25774;
(statearr_25778[(7)] = inst_25727__$1);

return statearr_25778;
})();
if(cljs.core.truth_(inst_25727__$1)){
var statearr_25779_25808 = state_25774__$1;
(statearr_25779_25808[(1)] = (5));

} else {
var statearr_25780_25809 = state_25774__$1;
(statearr_25780_25809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (15))){
var inst_25734 = (state_25774[(8)]);
var inst_25749 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25734);
var inst_25750 = cljs.core.first.call(null,inst_25749);
var inst_25751 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25750);
var inst_25752 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25751)].join('');
var inst_25753 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25752);
var state_25774__$1 = state_25774;
var statearr_25781_25810 = state_25774__$1;
(statearr_25781_25810[(2)] = inst_25753);

(statearr_25781_25810[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (13))){
var inst_25758 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25782_25811 = state_25774__$1;
(statearr_25782_25811[(2)] = inst_25758);

(statearr_25782_25811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (6))){
var state_25774__$1 = state_25774;
var statearr_25783_25812 = state_25774__$1;
(statearr_25783_25812[(2)] = null);

(statearr_25783_25812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (17))){
var inst_25756 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25784_25813 = state_25774__$1;
(statearr_25784_25813[(2)] = inst_25756);

(statearr_25784_25813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (3))){
var inst_25772 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25774__$1,inst_25772);
} else {
if((state_val_25775 === (12))){
var inst_25733 = (state_25774[(9)]);
var inst_25747 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25733,opts);
var state_25774__$1 = state_25774;
if(cljs.core.truth_(inst_25747)){
var statearr_25785_25814 = state_25774__$1;
(statearr_25785_25814[(1)] = (15));

} else {
var statearr_25786_25815 = state_25774__$1;
(statearr_25786_25815[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (2))){
var state_25774__$1 = state_25774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25774__$1,(4),ch);
} else {
if((state_val_25775 === (11))){
var inst_25734 = (state_25774[(8)]);
var inst_25739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25740 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25734);
var inst_25741 = cljs.core.async.timeout.call(null,(1000));
var inst_25742 = [inst_25740,inst_25741];
var inst_25743 = (new cljs.core.PersistentVector(null,2,(5),inst_25739,inst_25742,null));
var state_25774__$1 = state_25774;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25774__$1,(14),inst_25743);
} else {
if((state_val_25775 === (9))){
var inst_25734 = (state_25774[(8)]);
var inst_25760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25761 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25734);
var inst_25762 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25761);
var inst_25763 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25762)].join('');
var inst_25764 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25763);
var state_25774__$1 = (function (){var statearr_25787 = state_25774;
(statearr_25787[(10)] = inst_25760);

return statearr_25787;
})();
var statearr_25788_25816 = state_25774__$1;
(statearr_25788_25816[(2)] = inst_25764);

(statearr_25788_25816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (5))){
var inst_25727 = (state_25774[(7)]);
var inst_25729 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25730 = (new cljs.core.PersistentArrayMap(null,2,inst_25729,null));
var inst_25731 = (new cljs.core.PersistentHashSet(null,inst_25730,null));
var inst_25732 = figwheel.client.focus_msgs.call(null,inst_25731,inst_25727);
var inst_25733 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25732);
var inst_25734 = cljs.core.first.call(null,inst_25732);
var inst_25735 = figwheel.client.autoload_QMARK_.call(null);
var state_25774__$1 = (function (){var statearr_25789 = state_25774;
(statearr_25789[(8)] = inst_25734);

(statearr_25789[(9)] = inst_25733);

return statearr_25789;
})();
if(cljs.core.truth_(inst_25735)){
var statearr_25790_25817 = state_25774__$1;
(statearr_25790_25817[(1)] = (8));

} else {
var statearr_25791_25818 = state_25774__$1;
(statearr_25791_25818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (14))){
var inst_25745 = (state_25774[(2)]);
var state_25774__$1 = state_25774;
var statearr_25792_25819 = state_25774__$1;
(statearr_25792_25819[(2)] = inst_25745);

(statearr_25792_25819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (16))){
var state_25774__$1 = state_25774;
var statearr_25793_25820 = state_25774__$1;
(statearr_25793_25820[(2)] = null);

(statearr_25793_25820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (10))){
var inst_25766 = (state_25774[(2)]);
var state_25774__$1 = (function (){var statearr_25794 = state_25774;
(statearr_25794[(11)] = inst_25766);

return statearr_25794;
})();
var statearr_25795_25821 = state_25774__$1;
(statearr_25795_25821[(2)] = null);

(statearr_25795_25821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25775 === (8))){
var inst_25733 = (state_25774[(9)]);
var inst_25737 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25733,opts);
var state_25774__$1 = state_25774;
if(cljs.core.truth_(inst_25737)){
var statearr_25796_25822 = state_25774__$1;
(statearr_25796_25822[(1)] = (11));

} else {
var statearr_25797_25823 = state_25774__$1;
(statearr_25797_25823[(1)] = (12));

}

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
}
}
}
}
}
}
});})(c__20458__auto___25805,ch))
;
return ((function (switch__20346__auto__,c__20458__auto___25805,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20347__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20347__auto____0 = (function (){
var statearr_25801 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25801[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20347__auto__);

(statearr_25801[(1)] = (1));

return statearr_25801;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20347__auto____1 = (function (state_25774){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_25774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e25802){if((e25802 instanceof Object)){
var ex__20350__auto__ = e25802;
var statearr_25803_25824 = state_25774;
(statearr_25803_25824[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25825 = state_25774;
state_25774 = G__25825;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20347__auto__ = function(state_25774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20347__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20347__auto____1.call(this,state_25774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20347__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20347__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___25805,ch))
})();
var state__20460__auto__ = (function (){var statearr_25804 = f__20459__auto__.call(null);
(statearr_25804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___25805);

return statearr_25804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___25805,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25826_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25826_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25833 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25833){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25831 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25832 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25832;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25831;
}}catch (e25830){if((e25830 instanceof Error)){
var e = e25830;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25833], null));
} else {
var e = e25830;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25833))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25834){
var map__25841 = p__25834;
var map__25841__$1 = ((((!((map__25841 == null)))?((((map__25841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25841):map__25841);
var opts = map__25841__$1;
var build_id = cljs.core.get.call(null,map__25841__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25841,map__25841__$1,opts,build_id){
return (function (p__25843){
var vec__25844 = p__25843;
var map__25845 = cljs.core.nth.call(null,vec__25844,(0),null);
var map__25845__$1 = ((((!((map__25845 == null)))?((((map__25845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25845):map__25845);
var msg = map__25845__$1;
var msg_name = cljs.core.get.call(null,map__25845__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25844,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25844,map__25845,map__25845__$1,msg,msg_name,_,map__25841,map__25841__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25844,map__25845,map__25845__$1,msg,msg_name,_,map__25841,map__25841__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25841,map__25841__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25851){
var vec__25852 = p__25851;
var map__25853 = cljs.core.nth.call(null,vec__25852,(0),null);
var map__25853__$1 = ((((!((map__25853 == null)))?((((map__25853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25853):map__25853);
var msg = map__25853__$1;
var msg_name = cljs.core.get.call(null,map__25853__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25852,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25855){
var map__25865 = p__25855;
var map__25865__$1 = ((((!((map__25865 == null)))?((((map__25865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25865):map__25865);
var on_compile_warning = cljs.core.get.call(null,map__25865__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25865__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25865,map__25865__$1,on_compile_warning,on_compile_fail){
return (function (p__25867){
var vec__25868 = p__25867;
var map__25869 = cljs.core.nth.call(null,vec__25868,(0),null);
var map__25869__$1 = ((((!((map__25869 == null)))?((((map__25869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25869):map__25869);
var msg = map__25869__$1;
var msg_name = cljs.core.get.call(null,map__25869__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25868,(1));
var pred__25871 = cljs.core._EQ_;
var expr__25872 = msg_name;
if(cljs.core.truth_(pred__25871.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25872))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25871.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25872))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25865,map__25865__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__,msg_hist,msg_names,msg){
return (function (state_26088){
var state_val_26089 = (state_26088[(1)]);
if((state_val_26089 === (7))){
var inst_26012 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26012)){
var statearr_26090_26136 = state_26088__$1;
(statearr_26090_26136[(1)] = (8));

} else {
var statearr_26091_26137 = state_26088__$1;
(statearr_26091_26137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (20))){
var inst_26082 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26092_26138 = state_26088__$1;
(statearr_26092_26138[(2)] = inst_26082);

(statearr_26092_26138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (27))){
var inst_26078 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26093_26139 = state_26088__$1;
(statearr_26093_26139[(2)] = inst_26078);

(statearr_26093_26139[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (1))){
var inst_26005 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26005)){
var statearr_26094_26140 = state_26088__$1;
(statearr_26094_26140[(1)] = (2));

} else {
var statearr_26095_26141 = state_26088__$1;
(statearr_26095_26141[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (24))){
var inst_26080 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26096_26142 = state_26088__$1;
(statearr_26096_26142[(2)] = inst_26080);

(statearr_26096_26142[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (4))){
var inst_26086 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26088__$1,inst_26086);
} else {
if((state_val_26089 === (15))){
var inst_26084 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26097_26143 = state_26088__$1;
(statearr_26097_26143[(2)] = inst_26084);

(statearr_26097_26143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (21))){
var inst_26043 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26098_26144 = state_26088__$1;
(statearr_26098_26144[(2)] = inst_26043);

(statearr_26098_26144[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (31))){
var inst_26067 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26067)){
var statearr_26099_26145 = state_26088__$1;
(statearr_26099_26145[(1)] = (34));

} else {
var statearr_26100_26146 = state_26088__$1;
(statearr_26100_26146[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (32))){
var inst_26076 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26101_26147 = state_26088__$1;
(statearr_26101_26147[(2)] = inst_26076);

(statearr_26101_26147[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (33))){
var inst_26065 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26102_26148 = state_26088__$1;
(statearr_26102_26148[(2)] = inst_26065);

(statearr_26102_26148[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (13))){
var inst_26026 = figwheel.client.heads_up.clear.call(null);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(16),inst_26026);
} else {
if((state_val_26089 === (22))){
var inst_26047 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26048 = figwheel.client.heads_up.append_message.call(null,inst_26047);
var state_26088__$1 = state_26088;
var statearr_26103_26149 = state_26088__$1;
(statearr_26103_26149[(2)] = inst_26048);

(statearr_26103_26149[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (36))){
var inst_26074 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26104_26150 = state_26088__$1;
(statearr_26104_26150[(2)] = inst_26074);

(statearr_26104_26150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (29))){
var inst_26058 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26105_26151 = state_26088__$1;
(statearr_26105_26151[(2)] = inst_26058);

(statearr_26105_26151[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (6))){
var inst_26007 = (state_26088[(7)]);
var state_26088__$1 = state_26088;
var statearr_26106_26152 = state_26088__$1;
(statearr_26106_26152[(2)] = inst_26007);

(statearr_26106_26152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (28))){
var inst_26054 = (state_26088[(2)]);
var inst_26055 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26056 = figwheel.client.heads_up.display_warning.call(null,inst_26055);
var state_26088__$1 = (function (){var statearr_26107 = state_26088;
(statearr_26107[(8)] = inst_26054);

return statearr_26107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(29),inst_26056);
} else {
if((state_val_26089 === (25))){
var inst_26052 = figwheel.client.heads_up.clear.call(null);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(28),inst_26052);
} else {
if((state_val_26089 === (34))){
var inst_26069 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(37),inst_26069);
} else {
if((state_val_26089 === (17))){
var inst_26034 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26108_26153 = state_26088__$1;
(statearr_26108_26153[(2)] = inst_26034);

(statearr_26108_26153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (3))){
var inst_26024 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26024)){
var statearr_26109_26154 = state_26088__$1;
(statearr_26109_26154[(1)] = (13));

} else {
var statearr_26110_26155 = state_26088__$1;
(statearr_26110_26155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (12))){
var inst_26020 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26111_26156 = state_26088__$1;
(statearr_26111_26156[(2)] = inst_26020);

(statearr_26111_26156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (2))){
var inst_26007 = (state_26088[(7)]);
var inst_26007__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26088__$1 = (function (){var statearr_26112 = state_26088;
(statearr_26112[(7)] = inst_26007__$1);

return statearr_26112;
})();
if(cljs.core.truth_(inst_26007__$1)){
var statearr_26113_26157 = state_26088__$1;
(statearr_26113_26157[(1)] = (5));

} else {
var statearr_26114_26158 = state_26088__$1;
(statearr_26114_26158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (23))){
var inst_26050 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26050)){
var statearr_26115_26159 = state_26088__$1;
(statearr_26115_26159[(1)] = (25));

} else {
var statearr_26116_26160 = state_26088__$1;
(statearr_26116_26160[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (35))){
var state_26088__$1 = state_26088;
var statearr_26117_26161 = state_26088__$1;
(statearr_26117_26161[(2)] = null);

(statearr_26117_26161[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (19))){
var inst_26045 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26045)){
var statearr_26118_26162 = state_26088__$1;
(statearr_26118_26162[(1)] = (22));

} else {
var statearr_26119_26163 = state_26088__$1;
(statearr_26119_26163[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (11))){
var inst_26016 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26120_26164 = state_26088__$1;
(statearr_26120_26164[(2)] = inst_26016);

(statearr_26120_26164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (9))){
var inst_26018 = figwheel.client.heads_up.clear.call(null);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(12),inst_26018);
} else {
if((state_val_26089 === (5))){
var inst_26009 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26088__$1 = state_26088;
var statearr_26121_26165 = state_26088__$1;
(statearr_26121_26165[(2)] = inst_26009);

(statearr_26121_26165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (14))){
var inst_26036 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26036)){
var statearr_26122_26166 = state_26088__$1;
(statearr_26122_26166[(1)] = (18));

} else {
var statearr_26123_26167 = state_26088__$1;
(statearr_26123_26167[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (26))){
var inst_26060 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26088__$1 = state_26088;
if(cljs.core.truth_(inst_26060)){
var statearr_26124_26168 = state_26088__$1;
(statearr_26124_26168[(1)] = (30));

} else {
var statearr_26125_26169 = state_26088__$1;
(statearr_26125_26169[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (16))){
var inst_26028 = (state_26088[(2)]);
var inst_26029 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26030 = figwheel.client.format_messages.call(null,inst_26029);
var inst_26031 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26032 = figwheel.client.heads_up.display_error.call(null,inst_26030,inst_26031);
var state_26088__$1 = (function (){var statearr_26126 = state_26088;
(statearr_26126[(9)] = inst_26028);

return statearr_26126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(17),inst_26032);
} else {
if((state_val_26089 === (30))){
var inst_26062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26063 = figwheel.client.heads_up.display_warning.call(null,inst_26062);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(33),inst_26063);
} else {
if((state_val_26089 === (10))){
var inst_26022 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26127_26170 = state_26088__$1;
(statearr_26127_26170[(2)] = inst_26022);

(statearr_26127_26170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (18))){
var inst_26038 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26039 = figwheel.client.format_messages.call(null,inst_26038);
var inst_26040 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26041 = figwheel.client.heads_up.display_error.call(null,inst_26039,inst_26040);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(21),inst_26041);
} else {
if((state_val_26089 === (37))){
var inst_26071 = (state_26088[(2)]);
var state_26088__$1 = state_26088;
var statearr_26128_26171 = state_26088__$1;
(statearr_26128_26171[(2)] = inst_26071);

(statearr_26128_26171[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26089 === (8))){
var inst_26014 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26088__$1 = state_26088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26088__$1,(11),inst_26014);
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
}
}
}
}
});})(c__20458__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20346__auto__,c__20458__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto____0 = (function (){
var statearr_26132 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26132[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto__);

(statearr_26132[(1)] = (1));

return statearr_26132;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto____1 = (function (state_26088){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_26088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e26133){if((e26133 instanceof Object)){
var ex__20350__auto__ = e26133;
var statearr_26134_26172 = state_26088;
(statearr_26134_26172[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26173 = state_26088;
state_26088 = G__26173;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto__ = function(state_26088){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto____1.call(this,state_26088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__,msg_hist,msg_names,msg))
})();
var state__20460__auto__ = (function (){var statearr_26135 = f__20459__auto__.call(null);
(statearr_26135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_26135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__,msg_hist,msg_names,msg))
);

return c__20458__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20458__auto___26236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___26236,ch){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___26236,ch){
return (function (state_26219){
var state_val_26220 = (state_26219[(1)]);
if((state_val_26220 === (1))){
var state_26219__$1 = state_26219;
var statearr_26221_26237 = state_26219__$1;
(statearr_26221_26237[(2)] = null);

(statearr_26221_26237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (2))){
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26219__$1,(4),ch);
} else {
if((state_val_26220 === (3))){
var inst_26217 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26219__$1,inst_26217);
} else {
if((state_val_26220 === (4))){
var inst_26207 = (state_26219[(7)]);
var inst_26207__$1 = (state_26219[(2)]);
var state_26219__$1 = (function (){var statearr_26222 = state_26219;
(statearr_26222[(7)] = inst_26207__$1);

return statearr_26222;
})();
if(cljs.core.truth_(inst_26207__$1)){
var statearr_26223_26238 = state_26219__$1;
(statearr_26223_26238[(1)] = (5));

} else {
var statearr_26224_26239 = state_26219__$1;
(statearr_26224_26239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (5))){
var inst_26207 = (state_26219[(7)]);
var inst_26209 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26207);
var state_26219__$1 = state_26219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26219__$1,(8),inst_26209);
} else {
if((state_val_26220 === (6))){
var state_26219__$1 = state_26219;
var statearr_26225_26240 = state_26219__$1;
(statearr_26225_26240[(2)] = null);

(statearr_26225_26240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (7))){
var inst_26215 = (state_26219[(2)]);
var state_26219__$1 = state_26219;
var statearr_26226_26241 = state_26219__$1;
(statearr_26226_26241[(2)] = inst_26215);

(statearr_26226_26241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26220 === (8))){
var inst_26211 = (state_26219[(2)]);
var state_26219__$1 = (function (){var statearr_26227 = state_26219;
(statearr_26227[(8)] = inst_26211);

return statearr_26227;
})();
var statearr_26228_26242 = state_26219__$1;
(statearr_26228_26242[(2)] = null);

(statearr_26228_26242[(1)] = (2));


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
});})(c__20458__auto___26236,ch))
;
return ((function (switch__20346__auto__,c__20458__auto___26236,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20347__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20347__auto____0 = (function (){
var statearr_26232 = [null,null,null,null,null,null,null,null,null];
(statearr_26232[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20347__auto__);

(statearr_26232[(1)] = (1));

return statearr_26232;
});
var figwheel$client$heads_up_plugin_$_state_machine__20347__auto____1 = (function (state_26219){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_26219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e26233){if((e26233 instanceof Object)){
var ex__20350__auto__ = e26233;
var statearr_26234_26243 = state_26219;
(statearr_26234_26243[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26244 = state_26219;
state_26219 = G__26244;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20347__auto__ = function(state_26219){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20347__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20347__auto____1.call(this,state_26219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20347__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20347__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___26236,ch))
})();
var state__20460__auto__ = (function (){var statearr_26235 = f__20459__auto__.call(null);
(statearr_26235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___26236);

return statearr_26235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___26236,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__){
return (function (state_26265){
var state_val_26266 = (state_26265[(1)]);
if((state_val_26266 === (1))){
var inst_26260 = cljs.core.async.timeout.call(null,(3000));
var state_26265__$1 = state_26265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26265__$1,(2),inst_26260);
} else {
if((state_val_26266 === (2))){
var inst_26262 = (state_26265[(2)]);
var inst_26263 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26265__$1 = (function (){var statearr_26267 = state_26265;
(statearr_26267[(7)] = inst_26262);

return statearr_26267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26265__$1,inst_26263);
} else {
return null;
}
}
});})(c__20458__auto__))
;
return ((function (switch__20346__auto__,c__20458__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20347__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20347__auto____0 = (function (){
var statearr_26271 = [null,null,null,null,null,null,null,null];
(statearr_26271[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20347__auto__);

(statearr_26271[(1)] = (1));

return statearr_26271;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20347__auto____1 = (function (state_26265){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_26265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e26272){if((e26272 instanceof Object)){
var ex__20350__auto__ = e26272;
var statearr_26273_26275 = state_26265;
(statearr_26273_26275[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26276 = state_26265;
state_26265 = G__26276;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20347__auto__ = function(state_26265){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20347__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20347__auto____1.call(this,state_26265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20347__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20347__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__))
})();
var state__20460__auto__ = (function (){var statearr_26274 = f__20459__auto__.call(null);
(statearr_26274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_26274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__))
);

return c__20458__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26277){
var map__26284 = p__26277;
var map__26284__$1 = ((((!((map__26284 == null)))?((((map__26284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26284):map__26284);
var ed = map__26284__$1;
var formatted_exception = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26284__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26286_26290 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26287_26291 = null;
var count__26288_26292 = (0);
var i__26289_26293 = (0);
while(true){
if((i__26289_26293 < count__26288_26292)){
var msg_26294 = cljs.core._nth.call(null,chunk__26287_26291,i__26289_26293);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26294);

var G__26295 = seq__26286_26290;
var G__26296 = chunk__26287_26291;
var G__26297 = count__26288_26292;
var G__26298 = (i__26289_26293 + (1));
seq__26286_26290 = G__26295;
chunk__26287_26291 = G__26296;
count__26288_26292 = G__26297;
i__26289_26293 = G__26298;
continue;
} else {
var temp__4425__auto___26299 = cljs.core.seq.call(null,seq__26286_26290);
if(temp__4425__auto___26299){
var seq__26286_26300__$1 = temp__4425__auto___26299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26286_26300__$1)){
var c__19094__auto___26301 = cljs.core.chunk_first.call(null,seq__26286_26300__$1);
var G__26302 = cljs.core.chunk_rest.call(null,seq__26286_26300__$1);
var G__26303 = c__19094__auto___26301;
var G__26304 = cljs.core.count.call(null,c__19094__auto___26301);
var G__26305 = (0);
seq__26286_26290 = G__26302;
chunk__26287_26291 = G__26303;
count__26288_26292 = G__26304;
i__26289_26293 = G__26305;
continue;
} else {
var msg_26306 = cljs.core.first.call(null,seq__26286_26300__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26306);

var G__26307 = cljs.core.next.call(null,seq__26286_26300__$1);
var G__26308 = null;
var G__26309 = (0);
var G__26310 = (0);
seq__26286_26290 = G__26307;
chunk__26287_26291 = G__26308;
count__26288_26292 = G__26309;
i__26289_26293 = G__26310;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26311){
var map__26314 = p__26311;
var map__26314__$1 = ((((!((map__26314 == null)))?((((map__26314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26314):map__26314);
var w = map__26314__$1;
var message = cljs.core.get.call(null,map__26314__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18279__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18279__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18279__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26322 = cljs.core.seq.call(null,plugins);
var chunk__26323 = null;
var count__26324 = (0);
var i__26325 = (0);
while(true){
if((i__26325 < count__26324)){
var vec__26326 = cljs.core._nth.call(null,chunk__26323,i__26325);
var k = cljs.core.nth.call(null,vec__26326,(0),null);
var plugin = cljs.core.nth.call(null,vec__26326,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26328 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26322,chunk__26323,count__26324,i__26325,pl_26328,vec__26326,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26328.call(null,msg_hist);
});})(seq__26322,chunk__26323,count__26324,i__26325,pl_26328,vec__26326,k,plugin))
);
} else {
}

var G__26329 = seq__26322;
var G__26330 = chunk__26323;
var G__26331 = count__26324;
var G__26332 = (i__26325 + (1));
seq__26322 = G__26329;
chunk__26323 = G__26330;
count__26324 = G__26331;
i__26325 = G__26332;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26322);
if(temp__4425__auto__){
var seq__26322__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26322__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__26322__$1);
var G__26333 = cljs.core.chunk_rest.call(null,seq__26322__$1);
var G__26334 = c__19094__auto__;
var G__26335 = cljs.core.count.call(null,c__19094__auto__);
var G__26336 = (0);
seq__26322 = G__26333;
chunk__26323 = G__26334;
count__26324 = G__26335;
i__26325 = G__26336;
continue;
} else {
var vec__26327 = cljs.core.first.call(null,seq__26322__$1);
var k = cljs.core.nth.call(null,vec__26327,(0),null);
var plugin = cljs.core.nth.call(null,vec__26327,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26337 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26322,chunk__26323,count__26324,i__26325,pl_26337,vec__26327,k,plugin,seq__26322__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26337.call(null,msg_hist);
});})(seq__26322,chunk__26323,count__26324,i__26325,pl_26337,vec__26327,k,plugin,seq__26322__$1,temp__4425__auto__))
);
} else {
}

var G__26338 = cljs.core.next.call(null,seq__26322__$1);
var G__26339 = null;
var G__26340 = (0);
var G__26341 = (0);
seq__26322 = G__26338;
chunk__26323 = G__26339;
count__26324 = G__26340;
i__26325 = G__26341;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args26342 = [];
var len__19349__auto___26345 = arguments.length;
var i__19350__auto___26346 = (0);
while(true){
if((i__19350__auto___26346 < len__19349__auto___26345)){
args26342.push((arguments[i__19350__auto___26346]));

var G__26347 = (i__19350__auto___26346 + (1));
i__19350__auto___26346 = G__26347;
continue;
} else {
}
break;
}

var G__26344 = args26342.length;
switch (G__26344) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26342.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19356__auto__ = [];
var len__19349__auto___26353 = arguments.length;
var i__19350__auto___26354 = (0);
while(true){
if((i__19350__auto___26354 < len__19349__auto___26353)){
args__19356__auto__.push((arguments[i__19350__auto___26354]));

var G__26355 = (i__19350__auto___26354 + (1));
i__19350__auto___26354 = G__26355;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((0) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19357__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26350){
var map__26351 = p__26350;
var map__26351__$1 = ((((!((map__26351 == null)))?((((map__26351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26351):map__26351);
var opts = map__26351__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26349){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26349));
});

//# sourceMappingURL=client.js.map?rel=1546505762689