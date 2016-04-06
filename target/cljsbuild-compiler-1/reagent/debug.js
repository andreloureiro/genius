// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__11845__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11846__i = 0, G__11846__a = new Array(arguments.length -  0);
while (G__11846__i < G__11846__a.length) {G__11846__a[G__11846__i] = arguments[G__11846__i + 0]; ++G__11846__i;}
  args = new cljs.core.IndexedSeq(G__11846__a,0);
} 
return G__11845__delegate.call(this,args);};
G__11845.cljs$lang$maxFixedArity = 0;
G__11845.cljs$lang$applyTo = (function (arglist__11847){
var args = cljs.core.seq(arglist__11847);
return G__11845__delegate(args);
});
G__11845.cljs$core$IFn$_invoke$arity$variadic = G__11845__delegate;
return G__11845;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11848__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11849__i = 0, G__11849__a = new Array(arguments.length -  0);
while (G__11849__i < G__11849__a.length) {G__11849__a[G__11849__i] = arguments[G__11849__i + 0]; ++G__11849__i;}
  args = new cljs.core.IndexedSeq(G__11849__a,0);
} 
return G__11848__delegate.call(this,args);};
G__11848.cljs$lang$maxFixedArity = 0;
G__11848.cljs$lang$applyTo = (function (arglist__11850){
var args = cljs.core.seq(arglist__11850);
return G__11848__delegate(args);
});
G__11848.cljs$core$IFn$_invoke$arity$variadic = G__11848__delegate;
return G__11848;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
