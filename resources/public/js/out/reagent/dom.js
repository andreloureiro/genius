// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__37181__auto__ = (function (){var and__37169__auto__ = typeof ReactDOM !== 'undefined';
if(and__37169__auto__){
return ReactDOM;
} else {
return and__37169__auto__;
}
})();
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
var and__37169__auto__ = typeof require !== 'undefined';
if(and__37169__auto__){
return require("react-dom");
} else {
return and__37169__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_43724 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_43724){
return (function (){
var _STAR_always_update_STAR_43725 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_43725;
}});})(_STAR_always_update_STAR_43724))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_43724;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var args43726 = [];
var len__38239__auto___43729 = arguments.length;
var i__38240__auto___43730 = (0);
while(true){
if((i__38240__auto___43730 < len__38239__auto___43729)){
args43726.push((arguments[i__38240__auto___43730]));

var G__43731 = (i__38240__auto___43730 + (1));
i__38240__auto___43730 = G__43731;
continue;
} else {
}
break;
}

var G__43728 = args43726.length;
switch (G__43728) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43726.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
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
var seq__43737_43741 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__43738_43742 = null;
var count__43739_43743 = (0);
var i__43740_43744 = (0);
while(true){
if((i__43740_43744 < count__43739_43743)){
var v_43745 = cljs.core._nth.call(null,chunk__43738_43742,i__43740_43744);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_43745);

var G__43746 = seq__43737_43741;
var G__43747 = chunk__43738_43742;
var G__43748 = count__43739_43743;
var G__43749 = (i__43740_43744 + (1));
seq__43737_43741 = G__43746;
chunk__43738_43742 = G__43747;
count__43739_43743 = G__43748;
i__43740_43744 = G__43749;
continue;
} else {
var temp__4425__auto___43750 = cljs.core.seq.call(null,seq__43737_43741);
if(temp__4425__auto___43750){
var seq__43737_43751__$1 = temp__4425__auto___43750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43737_43751__$1)){
var c__37984__auto___43752 = cljs.core.chunk_first.call(null,seq__43737_43751__$1);
var G__43753 = cljs.core.chunk_rest.call(null,seq__43737_43751__$1);
var G__43754 = c__37984__auto___43752;
var G__43755 = cljs.core.count.call(null,c__37984__auto___43752);
var G__43756 = (0);
seq__43737_43741 = G__43753;
chunk__43738_43742 = G__43754;
count__43739_43743 = G__43755;
i__43740_43744 = G__43756;
continue;
} else {
var v_43757 = cljs.core.first.call(null,seq__43737_43751__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_43757);

var G__43758 = cljs.core.next.call(null,seq__43737_43751__$1);
var G__43759 = null;
var G__43760 = (0);
var G__43761 = (0);
seq__43737_43741 = G__43758;
chunk__43738_43742 = G__43759;
count__43739_43743 = G__43760;
i__43740_43744 = G__43761;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1459924596533