// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__23333__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23334__i = 0, G__23334__a = new Array(arguments.length -  0);
while (G__23334__i < G__23334__a.length) {G__23334__a[G__23334__i] = arguments[G__23334__i + 0]; ++G__23334__i;}
  args = new cljs.core.IndexedSeq(G__23334__a,0);
} 
return G__23333__delegate.call(this,args);};
G__23333.cljs$lang$maxFixedArity = 0;
G__23333.cljs$lang$applyTo = (function (arglist__23335){
var args = cljs.core.seq(arglist__23335);
return G__23333__delegate(args);
});
G__23333.cljs$core$IFn$_invoke$arity$variadic = G__23333__delegate;
return G__23333;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23336__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23336 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23337__i = 0, G__23337__a = new Array(arguments.length -  0);
while (G__23337__i < G__23337__a.length) {G__23337__a[G__23337__i] = arguments[G__23337__i + 0]; ++G__23337__i;}
  args = new cljs.core.IndexedSeq(G__23337__a,0);
} 
return G__23336__delegate.call(this,args);};
G__23336.cljs$lang$maxFixedArity = 0;
G__23336.cljs$lang$applyTo = (function (arglist__23338){
var args = cljs.core.seq(arglist__23338);
return G__23336__delegate(args);
});
G__23336.cljs$core$IFn$_invoke$arity$variadic = G__23336__delegate;
return G__23336;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1546505760201