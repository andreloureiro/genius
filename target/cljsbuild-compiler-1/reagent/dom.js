// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6142__auto__ = (function (){var and__6130__auto__ = typeof ReactDOM !== 'undefined';
if(and__6130__auto__){
return ReactDOM;
} else {
return and__6130__auto__;
}
})();
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
var and__6130__auto__ = typeof require !== 'undefined';
if(and__6130__auto__){
return require("react-dom");
} else {
return and__6130__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$dom], 0)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__12359 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12359) : cljs.core.atom.call(null,G__12359));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12362 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_12362){
return (function (){
var _STAR_always_update_STAR_12363 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12363;
}});})(_STAR_always_update_STAR_12362))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12362;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12364 = [];
var len__7200__auto___12367 = arguments.length;
var i__7201__auto___12368 = (0);
while(true){
if((i__7201__auto___12368 < len__7200__auto___12367)){
args12364.push((arguments[i__7201__auto___12368]));

var G__12369 = (i__7201__auto___12368 + (1));
i__7201__auto___12368 = G__12369;
continue;
} else {
}
break;
}

var G__12366 = args12364.length;
switch (G__12366) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12364.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__12375_12379 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__12376_12380 = null;
var count__12377_12381 = (0);
var i__12378_12382 = (0);
while(true){
if((i__12378_12382 < count__12377_12381)){
var v_12383 = chunk__12376_12380.cljs$core$IIndexed$_nth$arity$2(null,i__12378_12382);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12383);

var G__12384 = seq__12375_12379;
var G__12385 = chunk__12376_12380;
var G__12386 = count__12377_12381;
var G__12387 = (i__12378_12382 + (1));
seq__12375_12379 = G__12384;
chunk__12376_12380 = G__12385;
count__12377_12381 = G__12386;
i__12378_12382 = G__12387;
continue;
} else {
var temp__4425__auto___12388 = cljs.core.seq(seq__12375_12379);
if(temp__4425__auto___12388){
var seq__12375_12389__$1 = temp__4425__auto___12388;
if(cljs.core.chunked_seq_QMARK_(seq__12375_12389__$1)){
var c__6945__auto___12390 = cljs.core.chunk_first(seq__12375_12389__$1);
var G__12391 = cljs.core.chunk_rest(seq__12375_12389__$1);
var G__12392 = c__6945__auto___12390;
var G__12393 = cljs.core.count(c__6945__auto___12390);
var G__12394 = (0);
seq__12375_12379 = G__12391;
chunk__12376_12380 = G__12392;
count__12377_12381 = G__12393;
i__12378_12382 = G__12394;
continue;
} else {
var v_12395 = cljs.core.first(seq__12375_12389__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12395);

var G__12396 = cljs.core.next(seq__12375_12389__$1);
var G__12397 = null;
var G__12398 = (0);
var G__12399 = (0);
seq__12375_12379 = G__12396;
chunk__12376_12380 = G__12397;
count__12377_12381 = G__12398;
i__12378_12382 = G__12399;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
