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
var pred__44519 = cljs.core._EQ_;
var expr__44520 = (function (){var or__37181__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e44523){if((e44523 instanceof Error)){
var e = e44523;
return false;
} else {
throw e44523;

}
}})();
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__44519.call(null,"true",expr__44520))){
return true;
} else {
if(cljs.core.truth_(pred__44519.call(null,"false",expr__44520))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__44520)].join('')));
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
}catch (e44525){if((e44525 instanceof Error)){
var e = e44525;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e44525;

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
var args__38246__auto__ = [];
var len__38239__auto___44527 = arguments.length;
var i__38240__auto___44528 = (0);
while(true){
if((i__38240__auto___44528 < len__38239__auto___44527)){
args__38246__auto__.push((arguments[i__38240__auto___44528]));

var G__44529 = (i__38240__auto___44528 + (1));
i__38240__auto___44528 = G__44529;
continue;
} else {
}
break;
}

var argseq__38247__auto__ = ((((0) < args__38246__auto__.length))?(new cljs.core.IndexedSeq(args__38246__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__38247__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq44526){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44526));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44530){
var map__44533 = p__44530;
var map__44533__$1 = ((((!((map__44533 == null)))?((((map__44533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44533):map__44533);
var message = cljs.core.get.call(null,map__44533__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44533__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__37181__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__37169__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__37169__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__37169__auto__;
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
var c__39348__auto___44695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___44695,ch){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___44695,ch){
return (function (state_44664){
var state_val_44665 = (state_44664[(1)]);
if((state_val_44665 === (7))){
var inst_44660 = (state_44664[(2)]);
var state_44664__$1 = state_44664;
var statearr_44666_44696 = state_44664__$1;
(statearr_44666_44696[(2)] = inst_44660);

(statearr_44666_44696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (1))){
var state_44664__$1 = state_44664;
var statearr_44667_44697 = state_44664__$1;
(statearr_44667_44697[(2)] = null);

(statearr_44667_44697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (4))){
var inst_44617 = (state_44664[(7)]);
var inst_44617__$1 = (state_44664[(2)]);
var state_44664__$1 = (function (){var statearr_44668 = state_44664;
(statearr_44668[(7)] = inst_44617__$1);

return statearr_44668;
})();
if(cljs.core.truth_(inst_44617__$1)){
var statearr_44669_44698 = state_44664__$1;
(statearr_44669_44698[(1)] = (5));

} else {
var statearr_44670_44699 = state_44664__$1;
(statearr_44670_44699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (15))){
var inst_44624 = (state_44664[(8)]);
var inst_44639 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44624);
var inst_44640 = cljs.core.first.call(null,inst_44639);
var inst_44641 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44640);
var inst_44642 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_44641)].join('');
var inst_44643 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44642);
var state_44664__$1 = state_44664;
var statearr_44671_44700 = state_44664__$1;
(statearr_44671_44700[(2)] = inst_44643);

(statearr_44671_44700[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (13))){
var inst_44648 = (state_44664[(2)]);
var state_44664__$1 = state_44664;
var statearr_44672_44701 = state_44664__$1;
(statearr_44672_44701[(2)] = inst_44648);

(statearr_44672_44701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (6))){
var state_44664__$1 = state_44664;
var statearr_44673_44702 = state_44664__$1;
(statearr_44673_44702[(2)] = null);

(statearr_44673_44702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (17))){
var inst_44646 = (state_44664[(2)]);
var state_44664__$1 = state_44664;
var statearr_44674_44703 = state_44664__$1;
(statearr_44674_44703[(2)] = inst_44646);

(statearr_44674_44703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (3))){
var inst_44662 = (state_44664[(2)]);
var state_44664__$1 = state_44664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44664__$1,inst_44662);
} else {
if((state_val_44665 === (12))){
var inst_44623 = (state_44664[(9)]);
var inst_44637 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44623,opts);
var state_44664__$1 = state_44664;
if(cljs.core.truth_(inst_44637)){
var statearr_44675_44704 = state_44664__$1;
(statearr_44675_44704[(1)] = (15));

} else {
var statearr_44676_44705 = state_44664__$1;
(statearr_44676_44705[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (2))){
var state_44664__$1 = state_44664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44664__$1,(4),ch);
} else {
if((state_val_44665 === (11))){
var inst_44624 = (state_44664[(8)]);
var inst_44629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44630 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44624);
var inst_44631 = cljs.core.async.timeout.call(null,(1000));
var inst_44632 = [inst_44630,inst_44631];
var inst_44633 = (new cljs.core.PersistentVector(null,2,(5),inst_44629,inst_44632,null));
var state_44664__$1 = state_44664;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44664__$1,(14),inst_44633);
} else {
if((state_val_44665 === (9))){
var inst_44624 = (state_44664[(8)]);
var inst_44650 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44651 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44624);
var inst_44652 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44651);
var inst_44653 = [cljs.core.str("Not loading: "),cljs.core.str(inst_44652)].join('');
var inst_44654 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44653);
var state_44664__$1 = (function (){var statearr_44677 = state_44664;
(statearr_44677[(10)] = inst_44650);

return statearr_44677;
})();
var statearr_44678_44706 = state_44664__$1;
(statearr_44678_44706[(2)] = inst_44654);

(statearr_44678_44706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (5))){
var inst_44617 = (state_44664[(7)]);
var inst_44619 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44620 = (new cljs.core.PersistentArrayMap(null,2,inst_44619,null));
var inst_44621 = (new cljs.core.PersistentHashSet(null,inst_44620,null));
var inst_44622 = figwheel.client.focus_msgs.call(null,inst_44621,inst_44617);
var inst_44623 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44622);
var inst_44624 = cljs.core.first.call(null,inst_44622);
var inst_44625 = figwheel.client.autoload_QMARK_.call(null);
var state_44664__$1 = (function (){var statearr_44679 = state_44664;
(statearr_44679[(9)] = inst_44623);

(statearr_44679[(8)] = inst_44624);

return statearr_44679;
})();
if(cljs.core.truth_(inst_44625)){
var statearr_44680_44707 = state_44664__$1;
(statearr_44680_44707[(1)] = (8));

} else {
var statearr_44681_44708 = state_44664__$1;
(statearr_44681_44708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (14))){
var inst_44635 = (state_44664[(2)]);
var state_44664__$1 = state_44664;
var statearr_44682_44709 = state_44664__$1;
(statearr_44682_44709[(2)] = inst_44635);

(statearr_44682_44709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (16))){
var state_44664__$1 = state_44664;
var statearr_44683_44710 = state_44664__$1;
(statearr_44683_44710[(2)] = null);

(statearr_44683_44710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (10))){
var inst_44656 = (state_44664[(2)]);
var state_44664__$1 = (function (){var statearr_44684 = state_44664;
(statearr_44684[(11)] = inst_44656);

return statearr_44684;
})();
var statearr_44685_44711 = state_44664__$1;
(statearr_44685_44711[(2)] = null);

(statearr_44685_44711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44665 === (8))){
var inst_44623 = (state_44664[(9)]);
var inst_44627 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44623,opts);
var state_44664__$1 = state_44664;
if(cljs.core.truth_(inst_44627)){
var statearr_44686_44712 = state_44664__$1;
(statearr_44686_44712[(1)] = (11));

} else {
var statearr_44687_44713 = state_44664__$1;
(statearr_44687_44713[(1)] = (12));

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
});})(c__39348__auto___44695,ch))
;
return ((function (switch__39236__auto__,c__39348__auto___44695,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__39237__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__39237__auto____0 = (function (){
var statearr_44691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44691[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__39237__auto__);

(statearr_44691[(1)] = (1));

return statearr_44691;
});
var figwheel$client$file_reloader_plugin_$_state_machine__39237__auto____1 = (function (state_44664){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_44664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e44692){if((e44692 instanceof Object)){
var ex__39240__auto__ = e44692;
var statearr_44693_44714 = state_44664;
(statearr_44693_44714[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44715 = state_44664;
state_44664 = G__44715;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__39237__auto__ = function(state_44664){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__39237__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__39237__auto____1.call(this,state_44664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__39237__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__39237__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___44695,ch))
})();
var state__39350__auto__ = (function (){var statearr_44694 = f__39349__auto__.call(null);
(statearr_44694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___44695);

return statearr_44694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___44695,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44716_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44716_SHARP_));
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
var base_path_44723 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44723){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_44721 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_44722 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_44722;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_44721;
}}catch (e44720){if((e44720 instanceof Error)){
var e = e44720;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44723], null));
} else {
var e = e44720;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_44723))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44724){
var map__44731 = p__44724;
var map__44731__$1 = ((((!((map__44731 == null)))?((((map__44731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44731):map__44731);
var opts = map__44731__$1;
var build_id = cljs.core.get.call(null,map__44731__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44731,map__44731__$1,opts,build_id){
return (function (p__44733){
var vec__44734 = p__44733;
var map__44735 = cljs.core.nth.call(null,vec__44734,(0),null);
var map__44735__$1 = ((((!((map__44735 == null)))?((((map__44735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44735):map__44735);
var msg = map__44735__$1;
var msg_name = cljs.core.get.call(null,map__44735__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44734,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44734,map__44735,map__44735__$1,msg,msg_name,_,map__44731,map__44731__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44734,map__44735,map__44735__$1,msg,msg_name,_,map__44731,map__44731__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44731,map__44731__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44741){
var vec__44742 = p__44741;
var map__44743 = cljs.core.nth.call(null,vec__44742,(0),null);
var map__44743__$1 = ((((!((map__44743 == null)))?((((map__44743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44743):map__44743);
var msg = map__44743__$1;
var msg_name = cljs.core.get.call(null,map__44743__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44742,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44745){
var map__44755 = p__44745;
var map__44755__$1 = ((((!((map__44755 == null)))?((((map__44755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44755):map__44755);
var on_compile_warning = cljs.core.get.call(null,map__44755__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44755__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44755,map__44755__$1,on_compile_warning,on_compile_fail){
return (function (p__44757){
var vec__44758 = p__44757;
var map__44759 = cljs.core.nth.call(null,vec__44758,(0),null);
var map__44759__$1 = ((((!((map__44759 == null)))?((((map__44759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44759):map__44759);
var msg = map__44759__$1;
var msg_name = cljs.core.get.call(null,map__44759__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44758,(1));
var pred__44761 = cljs.core._EQ_;
var expr__44762 = msg_name;
if(cljs.core.truth_(pred__44761.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44762))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44761.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44762))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44755,map__44755__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__39348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto__,msg_hist,msg_names,msg){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto__,msg_hist,msg_names,msg){
return (function (state_44978){
var state_val_44979 = (state_44978[(1)]);
if((state_val_44979 === (7))){
var inst_44902 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44902)){
var statearr_44980_45026 = state_44978__$1;
(statearr_44980_45026[(1)] = (8));

} else {
var statearr_44981_45027 = state_44978__$1;
(statearr_44981_45027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (20))){
var inst_44972 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44982_45028 = state_44978__$1;
(statearr_44982_45028[(2)] = inst_44972);

(statearr_44982_45028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (27))){
var inst_44968 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44983_45029 = state_44978__$1;
(statearr_44983_45029[(2)] = inst_44968);

(statearr_44983_45029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (1))){
var inst_44895 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44895)){
var statearr_44984_45030 = state_44978__$1;
(statearr_44984_45030[(1)] = (2));

} else {
var statearr_44985_45031 = state_44978__$1;
(statearr_44985_45031[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (24))){
var inst_44970 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44986_45032 = state_44978__$1;
(statearr_44986_45032[(2)] = inst_44970);

(statearr_44986_45032[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (4))){
var inst_44976 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44978__$1,inst_44976);
} else {
if((state_val_44979 === (15))){
var inst_44974 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44987_45033 = state_44978__$1;
(statearr_44987_45033[(2)] = inst_44974);

(statearr_44987_45033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (21))){
var inst_44933 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44988_45034 = state_44978__$1;
(statearr_44988_45034[(2)] = inst_44933);

(statearr_44988_45034[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (31))){
var inst_44957 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44957)){
var statearr_44989_45035 = state_44978__$1;
(statearr_44989_45035[(1)] = (34));

} else {
var statearr_44990_45036 = state_44978__$1;
(statearr_44990_45036[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (32))){
var inst_44966 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44991_45037 = state_44978__$1;
(statearr_44991_45037[(2)] = inst_44966);

(statearr_44991_45037[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (33))){
var inst_44955 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44992_45038 = state_44978__$1;
(statearr_44992_45038[(2)] = inst_44955);

(statearr_44992_45038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (13))){
var inst_44916 = figwheel.client.heads_up.clear.call(null);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(16),inst_44916);
} else {
if((state_val_44979 === (22))){
var inst_44937 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44938 = figwheel.client.heads_up.append_message.call(null,inst_44937);
var state_44978__$1 = state_44978;
var statearr_44993_45039 = state_44978__$1;
(statearr_44993_45039[(2)] = inst_44938);

(statearr_44993_45039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (36))){
var inst_44964 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44994_45040 = state_44978__$1;
(statearr_44994_45040[(2)] = inst_44964);

(statearr_44994_45040[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (29))){
var inst_44948 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44995_45041 = state_44978__$1;
(statearr_44995_45041[(2)] = inst_44948);

(statearr_44995_45041[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (6))){
var inst_44897 = (state_44978[(7)]);
var state_44978__$1 = state_44978;
var statearr_44996_45042 = state_44978__$1;
(statearr_44996_45042[(2)] = inst_44897);

(statearr_44996_45042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (28))){
var inst_44944 = (state_44978[(2)]);
var inst_44945 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44946 = figwheel.client.heads_up.display_warning.call(null,inst_44945);
var state_44978__$1 = (function (){var statearr_44997 = state_44978;
(statearr_44997[(8)] = inst_44944);

return statearr_44997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(29),inst_44946);
} else {
if((state_val_44979 === (25))){
var inst_44942 = figwheel.client.heads_up.clear.call(null);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(28),inst_44942);
} else {
if((state_val_44979 === (34))){
var inst_44959 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(37),inst_44959);
} else {
if((state_val_44979 === (17))){
var inst_44924 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44998_45043 = state_44978__$1;
(statearr_44998_45043[(2)] = inst_44924);

(statearr_44998_45043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (3))){
var inst_44914 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44914)){
var statearr_44999_45044 = state_44978__$1;
(statearr_44999_45044[(1)] = (13));

} else {
var statearr_45000_45045 = state_44978__$1;
(statearr_45000_45045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (12))){
var inst_44910 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_45001_45046 = state_44978__$1;
(statearr_45001_45046[(2)] = inst_44910);

(statearr_45001_45046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (2))){
var inst_44897 = (state_44978[(7)]);
var inst_44897__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44978__$1 = (function (){var statearr_45002 = state_44978;
(statearr_45002[(7)] = inst_44897__$1);

return statearr_45002;
})();
if(cljs.core.truth_(inst_44897__$1)){
var statearr_45003_45047 = state_44978__$1;
(statearr_45003_45047[(1)] = (5));

} else {
var statearr_45004_45048 = state_44978__$1;
(statearr_45004_45048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (23))){
var inst_44940 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44940)){
var statearr_45005_45049 = state_44978__$1;
(statearr_45005_45049[(1)] = (25));

} else {
var statearr_45006_45050 = state_44978__$1;
(statearr_45006_45050[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (35))){
var state_44978__$1 = state_44978;
var statearr_45007_45051 = state_44978__$1;
(statearr_45007_45051[(2)] = null);

(statearr_45007_45051[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (19))){
var inst_44935 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44935)){
var statearr_45008_45052 = state_44978__$1;
(statearr_45008_45052[(1)] = (22));

} else {
var statearr_45009_45053 = state_44978__$1;
(statearr_45009_45053[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (11))){
var inst_44906 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_45010_45054 = state_44978__$1;
(statearr_45010_45054[(2)] = inst_44906);

(statearr_45010_45054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (9))){
var inst_44908 = figwheel.client.heads_up.clear.call(null);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(12),inst_44908);
} else {
if((state_val_44979 === (5))){
var inst_44899 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44978__$1 = state_44978;
var statearr_45011_45055 = state_44978__$1;
(statearr_45011_45055[(2)] = inst_44899);

(statearr_45011_45055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (14))){
var inst_44926 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44926)){
var statearr_45012_45056 = state_44978__$1;
(statearr_45012_45056[(1)] = (18));

} else {
var statearr_45013_45057 = state_44978__$1;
(statearr_45013_45057[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (26))){
var inst_44950 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44950)){
var statearr_45014_45058 = state_44978__$1;
(statearr_45014_45058[(1)] = (30));

} else {
var statearr_45015_45059 = state_44978__$1;
(statearr_45015_45059[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (16))){
var inst_44918 = (state_44978[(2)]);
var inst_44919 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44920 = figwheel.client.format_messages.call(null,inst_44919);
var inst_44921 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44922 = figwheel.client.heads_up.display_error.call(null,inst_44920,inst_44921);
var state_44978__$1 = (function (){var statearr_45016 = state_44978;
(statearr_45016[(9)] = inst_44918);

return statearr_45016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(17),inst_44922);
} else {
if((state_val_44979 === (30))){
var inst_44952 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44953 = figwheel.client.heads_up.display_warning.call(null,inst_44952);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(33),inst_44953);
} else {
if((state_val_44979 === (10))){
var inst_44912 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_45017_45060 = state_44978__$1;
(statearr_45017_45060[(2)] = inst_44912);

(statearr_45017_45060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (18))){
var inst_44928 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44929 = figwheel.client.format_messages.call(null,inst_44928);
var inst_44930 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44931 = figwheel.client.heads_up.display_error.call(null,inst_44929,inst_44930);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(21),inst_44931);
} else {
if((state_val_44979 === (37))){
var inst_44961 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_45018_45061 = state_44978__$1;
(statearr_45018_45061[(2)] = inst_44961);

(statearr_45018_45061[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (8))){
var inst_44904 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(11),inst_44904);
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
});})(c__39348__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__39236__auto__,c__39348__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto____0 = (function (){
var statearr_45022 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45022[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto__);

(statearr_45022[(1)] = (1));

return statearr_45022;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto____1 = (function (state_44978){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_44978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e45023){if((e45023 instanceof Object)){
var ex__39240__auto__ = e45023;
var statearr_45024_45062 = state_44978;
(statearr_45024_45062[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45063 = state_44978;
state_44978 = G__45063;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto__ = function(state_44978){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto____1.call(this,state_44978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto__,msg_hist,msg_names,msg))
})();
var state__39350__auto__ = (function (){var statearr_45025 = f__39349__auto__.call(null);
(statearr_45025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto__);

return statearr_45025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto__,msg_hist,msg_names,msg))
);

return c__39348__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__39348__auto___45126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___45126,ch){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___45126,ch){
return (function (state_45109){
var state_val_45110 = (state_45109[(1)]);
if((state_val_45110 === (1))){
var state_45109__$1 = state_45109;
var statearr_45111_45127 = state_45109__$1;
(statearr_45111_45127[(2)] = null);

(statearr_45111_45127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (2))){
var state_45109__$1 = state_45109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45109__$1,(4),ch);
} else {
if((state_val_45110 === (3))){
var inst_45107 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45109__$1,inst_45107);
} else {
if((state_val_45110 === (4))){
var inst_45097 = (state_45109[(7)]);
var inst_45097__$1 = (state_45109[(2)]);
var state_45109__$1 = (function (){var statearr_45112 = state_45109;
(statearr_45112[(7)] = inst_45097__$1);

return statearr_45112;
})();
if(cljs.core.truth_(inst_45097__$1)){
var statearr_45113_45128 = state_45109__$1;
(statearr_45113_45128[(1)] = (5));

} else {
var statearr_45114_45129 = state_45109__$1;
(statearr_45114_45129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (5))){
var inst_45097 = (state_45109[(7)]);
var inst_45099 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_45097);
var state_45109__$1 = state_45109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45109__$1,(8),inst_45099);
} else {
if((state_val_45110 === (6))){
var state_45109__$1 = state_45109;
var statearr_45115_45130 = state_45109__$1;
(statearr_45115_45130[(2)] = null);

(statearr_45115_45130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (7))){
var inst_45105 = (state_45109[(2)]);
var state_45109__$1 = state_45109;
var statearr_45116_45131 = state_45109__$1;
(statearr_45116_45131[(2)] = inst_45105);

(statearr_45116_45131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45110 === (8))){
var inst_45101 = (state_45109[(2)]);
var state_45109__$1 = (function (){var statearr_45117 = state_45109;
(statearr_45117[(8)] = inst_45101);

return statearr_45117;
})();
var statearr_45118_45132 = state_45109__$1;
(statearr_45118_45132[(2)] = null);

(statearr_45118_45132[(1)] = (2));


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
});})(c__39348__auto___45126,ch))
;
return ((function (switch__39236__auto__,c__39348__auto___45126,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__39237__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__39237__auto____0 = (function (){
var statearr_45122 = [null,null,null,null,null,null,null,null,null];
(statearr_45122[(0)] = figwheel$client$heads_up_plugin_$_state_machine__39237__auto__);

(statearr_45122[(1)] = (1));

return statearr_45122;
});
var figwheel$client$heads_up_plugin_$_state_machine__39237__auto____1 = (function (state_45109){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_45109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e45123){if((e45123 instanceof Object)){
var ex__39240__auto__ = e45123;
var statearr_45124_45133 = state_45109;
(statearr_45124_45133[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45134 = state_45109;
state_45109 = G__45134;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__39237__auto__ = function(state_45109){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__39237__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__39237__auto____1.call(this,state_45109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__39237__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__39237__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___45126,ch))
})();
var state__39350__auto__ = (function (){var statearr_45125 = f__39349__auto__.call(null);
(statearr_45125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___45126);

return statearr_45125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___45126,ch))
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
var c__39348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto__){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto__){
return (function (state_45155){
var state_val_45156 = (state_45155[(1)]);
if((state_val_45156 === (1))){
var inst_45150 = cljs.core.async.timeout.call(null,(3000));
var state_45155__$1 = state_45155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45155__$1,(2),inst_45150);
} else {
if((state_val_45156 === (2))){
var inst_45152 = (state_45155[(2)]);
var inst_45153 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_45155__$1 = (function (){var statearr_45157 = state_45155;
(statearr_45157[(7)] = inst_45152);

return statearr_45157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45155__$1,inst_45153);
} else {
return null;
}
}
});})(c__39348__auto__))
;
return ((function (switch__39236__auto__,c__39348__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__39237__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__39237__auto____0 = (function (){
var statearr_45161 = [null,null,null,null,null,null,null,null];
(statearr_45161[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__39237__auto__);

(statearr_45161[(1)] = (1));

return statearr_45161;
});
var figwheel$client$enforce_project_plugin_$_state_machine__39237__auto____1 = (function (state_45155){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_45155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e45162){if((e45162 instanceof Object)){
var ex__39240__auto__ = e45162;
var statearr_45163_45165 = state_45155;
(statearr_45163_45165[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45166 = state_45155;
state_45155 = G__45166;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__39237__auto__ = function(state_45155){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__39237__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__39237__auto____1.call(this,state_45155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__39237__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__39237__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto__))
})();
var state__39350__auto__ = (function (){var statearr_45164 = f__39349__auto__.call(null);
(statearr_45164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto__);

return statearr_45164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto__))
);

return c__39348__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__45167){
var map__45174 = p__45167;
var map__45174__$1 = ((((!((map__45174 == null)))?((((map__45174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45174):map__45174);
var ed = map__45174__$1;
var formatted_exception = cljs.core.get.call(null,map__45174__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__45174__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__45174__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__45176_45180 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__45177_45181 = null;
var count__45178_45182 = (0);
var i__45179_45183 = (0);
while(true){
if((i__45179_45183 < count__45178_45182)){
var msg_45184 = cljs.core._nth.call(null,chunk__45177_45181,i__45179_45183);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45184);

var G__45185 = seq__45176_45180;
var G__45186 = chunk__45177_45181;
var G__45187 = count__45178_45182;
var G__45188 = (i__45179_45183 + (1));
seq__45176_45180 = G__45185;
chunk__45177_45181 = G__45186;
count__45178_45182 = G__45187;
i__45179_45183 = G__45188;
continue;
} else {
var temp__4425__auto___45189 = cljs.core.seq.call(null,seq__45176_45180);
if(temp__4425__auto___45189){
var seq__45176_45190__$1 = temp__4425__auto___45189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45176_45190__$1)){
var c__37984__auto___45191 = cljs.core.chunk_first.call(null,seq__45176_45190__$1);
var G__45192 = cljs.core.chunk_rest.call(null,seq__45176_45190__$1);
var G__45193 = c__37984__auto___45191;
var G__45194 = cljs.core.count.call(null,c__37984__auto___45191);
var G__45195 = (0);
seq__45176_45180 = G__45192;
chunk__45177_45181 = G__45193;
count__45178_45182 = G__45194;
i__45179_45183 = G__45195;
continue;
} else {
var msg_45196 = cljs.core.first.call(null,seq__45176_45190__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_45196);

var G__45197 = cljs.core.next.call(null,seq__45176_45190__$1);
var G__45198 = null;
var G__45199 = (0);
var G__45200 = (0);
seq__45176_45180 = G__45197;
chunk__45177_45181 = G__45198;
count__45178_45182 = G__45199;
i__45179_45183 = G__45200;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__45201){
var map__45204 = p__45201;
var map__45204__$1 = ((((!((map__45204 == null)))?((((map__45204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45204):map__45204);
var w = map__45204__$1;
var message = cljs.core.get.call(null,map__45204__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__37169__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__37169__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__37169__auto__;
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
var seq__45212 = cljs.core.seq.call(null,plugins);
var chunk__45213 = null;
var count__45214 = (0);
var i__45215 = (0);
while(true){
if((i__45215 < count__45214)){
var vec__45216 = cljs.core._nth.call(null,chunk__45213,i__45215);
var k = cljs.core.nth.call(null,vec__45216,(0),null);
var plugin = cljs.core.nth.call(null,vec__45216,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45218 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45212,chunk__45213,count__45214,i__45215,pl_45218,vec__45216,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_45218.call(null,msg_hist);
});})(seq__45212,chunk__45213,count__45214,i__45215,pl_45218,vec__45216,k,plugin))
);
} else {
}

var G__45219 = seq__45212;
var G__45220 = chunk__45213;
var G__45221 = count__45214;
var G__45222 = (i__45215 + (1));
seq__45212 = G__45219;
chunk__45213 = G__45220;
count__45214 = G__45221;
i__45215 = G__45222;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45212);
if(temp__4425__auto__){
var seq__45212__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45212__$1)){
var c__37984__auto__ = cljs.core.chunk_first.call(null,seq__45212__$1);
var G__45223 = cljs.core.chunk_rest.call(null,seq__45212__$1);
var G__45224 = c__37984__auto__;
var G__45225 = cljs.core.count.call(null,c__37984__auto__);
var G__45226 = (0);
seq__45212 = G__45223;
chunk__45213 = G__45224;
count__45214 = G__45225;
i__45215 = G__45226;
continue;
} else {
var vec__45217 = cljs.core.first.call(null,seq__45212__$1);
var k = cljs.core.nth.call(null,vec__45217,(0),null);
var plugin = cljs.core.nth.call(null,vec__45217,(1),null);
if(cljs.core.truth_(plugin)){
var pl_45227 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__45212,chunk__45213,count__45214,i__45215,pl_45227,vec__45217,k,plugin,seq__45212__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_45227.call(null,msg_hist);
});})(seq__45212,chunk__45213,count__45214,i__45215,pl_45227,vec__45217,k,plugin,seq__45212__$1,temp__4425__auto__))
);
} else {
}

var G__45228 = cljs.core.next.call(null,seq__45212__$1);
var G__45229 = null;
var G__45230 = (0);
var G__45231 = (0);
seq__45212 = G__45228;
chunk__45213 = G__45229;
count__45214 = G__45230;
i__45215 = G__45231;
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
var args45232 = [];
var len__38239__auto___45235 = arguments.length;
var i__38240__auto___45236 = (0);
while(true){
if((i__38240__auto___45236 < len__38239__auto___45235)){
args45232.push((arguments[i__38240__auto___45236]));

var G__45237 = (i__38240__auto___45236 + (1));
i__38240__auto___45236 = G__45237;
continue;
} else {
}
break;
}

var G__45234 = args45232.length;
switch (G__45234) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45232.length)].join('')));

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
var args__38246__auto__ = [];
var len__38239__auto___45243 = arguments.length;
var i__38240__auto___45244 = (0);
while(true){
if((i__38240__auto___45244 < len__38239__auto___45243)){
args__38246__auto__.push((arguments[i__38240__auto___45244]));

var G__45245 = (i__38240__auto___45244 + (1));
i__38240__auto___45244 = G__45245;
continue;
} else {
}
break;
}

var argseq__38247__auto__ = ((((0) < args__38246__auto__.length))?(new cljs.core.IndexedSeq(args__38246__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__38247__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__45240){
var map__45241 = p__45240;
var map__45241__$1 = ((((!((map__45241 == null)))?((((map__45241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45241):map__45241);
var opts = map__45241__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq45239){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45239));
});

//# sourceMappingURL=client.js.map?rel=1459924598034