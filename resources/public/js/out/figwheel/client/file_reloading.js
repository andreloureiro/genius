// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__37181__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__37181__auto__){
return or__37181__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__37181__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42291_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42291_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42296 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42297 = null;
var count__42298 = (0);
var i__42299 = (0);
while(true){
if((i__42299 < count__42298)){
var n = cljs.core._nth.call(null,chunk__42297,i__42299);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42300 = seq__42296;
var G__42301 = chunk__42297;
var G__42302 = count__42298;
var G__42303 = (i__42299 + (1));
seq__42296 = G__42300;
chunk__42297 = G__42301;
count__42298 = G__42302;
i__42299 = G__42303;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42296);
if(temp__4425__auto__){
var seq__42296__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42296__$1)){
var c__37984__auto__ = cljs.core.chunk_first.call(null,seq__42296__$1);
var G__42304 = cljs.core.chunk_rest.call(null,seq__42296__$1);
var G__42305 = c__37984__auto__;
var G__42306 = cljs.core.count.call(null,c__37984__auto__);
var G__42307 = (0);
seq__42296 = G__42304;
chunk__42297 = G__42305;
count__42298 = G__42306;
i__42299 = G__42307;
continue;
} else {
var n = cljs.core.first.call(null,seq__42296__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42308 = cljs.core.next.call(null,seq__42296__$1);
var G__42309 = null;
var G__42310 = (0);
var G__42311 = (0);
seq__42296 = G__42308;
chunk__42297 = G__42309;
count__42298 = G__42310;
i__42299 = G__42311;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42350_42357 = cljs.core.seq.call(null,deps);
var chunk__42351_42358 = null;
var count__42352_42359 = (0);
var i__42353_42360 = (0);
while(true){
if((i__42353_42360 < count__42352_42359)){
var dep_42361 = cljs.core._nth.call(null,chunk__42351_42358,i__42353_42360);
topo_sort_helper_STAR_.call(null,dep_42361,(depth + (1)),state);

var G__42362 = seq__42350_42357;
var G__42363 = chunk__42351_42358;
var G__42364 = count__42352_42359;
var G__42365 = (i__42353_42360 + (1));
seq__42350_42357 = G__42362;
chunk__42351_42358 = G__42363;
count__42352_42359 = G__42364;
i__42353_42360 = G__42365;
continue;
} else {
var temp__4425__auto___42366 = cljs.core.seq.call(null,seq__42350_42357);
if(temp__4425__auto___42366){
var seq__42350_42367__$1 = temp__4425__auto___42366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42350_42367__$1)){
var c__37984__auto___42368 = cljs.core.chunk_first.call(null,seq__42350_42367__$1);
var G__42369 = cljs.core.chunk_rest.call(null,seq__42350_42367__$1);
var G__42370 = c__37984__auto___42368;
var G__42371 = cljs.core.count.call(null,c__37984__auto___42368);
var G__42372 = (0);
seq__42350_42357 = G__42369;
chunk__42351_42358 = G__42370;
count__42352_42359 = G__42371;
i__42353_42360 = G__42372;
continue;
} else {
var dep_42373 = cljs.core.first.call(null,seq__42350_42367__$1);
topo_sort_helper_STAR_.call(null,dep_42373,(depth + (1)),state);

var G__42374 = cljs.core.next.call(null,seq__42350_42367__$1);
var G__42375 = null;
var G__42376 = (0);
var G__42377 = (0);
seq__42350_42357 = G__42374;
chunk__42351_42358 = G__42375;
count__42352_42359 = G__42376;
i__42353_42360 = G__42377;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42354){
var vec__42356 = p__42354;
var x = cljs.core.nth.call(null,vec__42356,(0),null);
var xs = cljs.core.nthnext.call(null,vec__42356,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42356,x,xs,get_deps__$1){
return (function (p1__42312_SHARP_){
return clojure.set.difference.call(null,p1__42312_SHARP_,x);
});})(vec__42356,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42390 = cljs.core.seq.call(null,provides);
var chunk__42391 = null;
var count__42392 = (0);
var i__42393 = (0);
while(true){
if((i__42393 < count__42392)){
var prov = cljs.core._nth.call(null,chunk__42391,i__42393);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42394_42402 = cljs.core.seq.call(null,requires);
var chunk__42395_42403 = null;
var count__42396_42404 = (0);
var i__42397_42405 = (0);
while(true){
if((i__42397_42405 < count__42396_42404)){
var req_42406 = cljs.core._nth.call(null,chunk__42395_42403,i__42397_42405);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42406,prov);

var G__42407 = seq__42394_42402;
var G__42408 = chunk__42395_42403;
var G__42409 = count__42396_42404;
var G__42410 = (i__42397_42405 + (1));
seq__42394_42402 = G__42407;
chunk__42395_42403 = G__42408;
count__42396_42404 = G__42409;
i__42397_42405 = G__42410;
continue;
} else {
var temp__4425__auto___42411 = cljs.core.seq.call(null,seq__42394_42402);
if(temp__4425__auto___42411){
var seq__42394_42412__$1 = temp__4425__auto___42411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42394_42412__$1)){
var c__37984__auto___42413 = cljs.core.chunk_first.call(null,seq__42394_42412__$1);
var G__42414 = cljs.core.chunk_rest.call(null,seq__42394_42412__$1);
var G__42415 = c__37984__auto___42413;
var G__42416 = cljs.core.count.call(null,c__37984__auto___42413);
var G__42417 = (0);
seq__42394_42402 = G__42414;
chunk__42395_42403 = G__42415;
count__42396_42404 = G__42416;
i__42397_42405 = G__42417;
continue;
} else {
var req_42418 = cljs.core.first.call(null,seq__42394_42412__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42418,prov);

var G__42419 = cljs.core.next.call(null,seq__42394_42412__$1);
var G__42420 = null;
var G__42421 = (0);
var G__42422 = (0);
seq__42394_42402 = G__42419;
chunk__42395_42403 = G__42420;
count__42396_42404 = G__42421;
i__42397_42405 = G__42422;
continue;
}
} else {
}
}
break;
}

var G__42423 = seq__42390;
var G__42424 = chunk__42391;
var G__42425 = count__42392;
var G__42426 = (i__42393 + (1));
seq__42390 = G__42423;
chunk__42391 = G__42424;
count__42392 = G__42425;
i__42393 = G__42426;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__42390);
if(temp__4425__auto__){
var seq__42390__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42390__$1)){
var c__37984__auto__ = cljs.core.chunk_first.call(null,seq__42390__$1);
var G__42427 = cljs.core.chunk_rest.call(null,seq__42390__$1);
var G__42428 = c__37984__auto__;
var G__42429 = cljs.core.count.call(null,c__37984__auto__);
var G__42430 = (0);
seq__42390 = G__42427;
chunk__42391 = G__42428;
count__42392 = G__42429;
i__42393 = G__42430;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42390__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42398_42431 = cljs.core.seq.call(null,requires);
var chunk__42399_42432 = null;
var count__42400_42433 = (0);
var i__42401_42434 = (0);
while(true){
if((i__42401_42434 < count__42400_42433)){
var req_42435 = cljs.core._nth.call(null,chunk__42399_42432,i__42401_42434);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42435,prov);

var G__42436 = seq__42398_42431;
var G__42437 = chunk__42399_42432;
var G__42438 = count__42400_42433;
var G__42439 = (i__42401_42434 + (1));
seq__42398_42431 = G__42436;
chunk__42399_42432 = G__42437;
count__42400_42433 = G__42438;
i__42401_42434 = G__42439;
continue;
} else {
var temp__4425__auto___42440__$1 = cljs.core.seq.call(null,seq__42398_42431);
if(temp__4425__auto___42440__$1){
var seq__42398_42441__$1 = temp__4425__auto___42440__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42398_42441__$1)){
var c__37984__auto___42442 = cljs.core.chunk_first.call(null,seq__42398_42441__$1);
var G__42443 = cljs.core.chunk_rest.call(null,seq__42398_42441__$1);
var G__42444 = c__37984__auto___42442;
var G__42445 = cljs.core.count.call(null,c__37984__auto___42442);
var G__42446 = (0);
seq__42398_42431 = G__42443;
chunk__42399_42432 = G__42444;
count__42400_42433 = G__42445;
i__42401_42434 = G__42446;
continue;
} else {
var req_42447 = cljs.core.first.call(null,seq__42398_42441__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42447,prov);

var G__42448 = cljs.core.next.call(null,seq__42398_42441__$1);
var G__42449 = null;
var G__42450 = (0);
var G__42451 = (0);
seq__42398_42431 = G__42448;
chunk__42399_42432 = G__42449;
count__42400_42433 = G__42450;
i__42401_42434 = G__42451;
continue;
}
} else {
}
}
break;
}

var G__42452 = cljs.core.next.call(null,seq__42390__$1);
var G__42453 = null;
var G__42454 = (0);
var G__42455 = (0);
seq__42390 = G__42452;
chunk__42391 = G__42453;
count__42392 = G__42454;
i__42393 = G__42455;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42460_42464 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42461_42465 = null;
var count__42462_42466 = (0);
var i__42463_42467 = (0);
while(true){
if((i__42463_42467 < count__42462_42466)){
var ns_42468 = cljs.core._nth.call(null,chunk__42461_42465,i__42463_42467);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42468);

var G__42469 = seq__42460_42464;
var G__42470 = chunk__42461_42465;
var G__42471 = count__42462_42466;
var G__42472 = (i__42463_42467 + (1));
seq__42460_42464 = G__42469;
chunk__42461_42465 = G__42470;
count__42462_42466 = G__42471;
i__42463_42467 = G__42472;
continue;
} else {
var temp__4425__auto___42473 = cljs.core.seq.call(null,seq__42460_42464);
if(temp__4425__auto___42473){
var seq__42460_42474__$1 = temp__4425__auto___42473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42460_42474__$1)){
var c__37984__auto___42475 = cljs.core.chunk_first.call(null,seq__42460_42474__$1);
var G__42476 = cljs.core.chunk_rest.call(null,seq__42460_42474__$1);
var G__42477 = c__37984__auto___42475;
var G__42478 = cljs.core.count.call(null,c__37984__auto___42475);
var G__42479 = (0);
seq__42460_42464 = G__42476;
chunk__42461_42465 = G__42477;
count__42462_42466 = G__42478;
i__42463_42467 = G__42479;
continue;
} else {
var ns_42480 = cljs.core.first.call(null,seq__42460_42474__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42480);

var G__42481 = cljs.core.next.call(null,seq__42460_42474__$1);
var G__42482 = null;
var G__42483 = (0);
var G__42484 = (0);
seq__42460_42464 = G__42481;
chunk__42461_42465 = G__42482;
count__42462_42466 = G__42483;
i__42463_42467 = G__42484;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__37181__auto__ = goog.require__;
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42485__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42486__i = 0, G__42486__a = new Array(arguments.length -  0);
while (G__42486__i < G__42486__a.length) {G__42486__a[G__42486__i] = arguments[G__42486__i + 0]; ++G__42486__i;}
  args = new cljs.core.IndexedSeq(G__42486__a,0);
} 
return G__42485__delegate.call(this,args);};
G__42485.cljs$lang$maxFixedArity = 0;
G__42485.cljs$lang$applyTo = (function (arglist__42487){
var args = cljs.core.seq(arglist__42487);
return G__42485__delegate(args);
});
G__42485.cljs$core$IFn$_invoke$arity$variadic = G__42485__delegate;
return G__42485;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42489 = cljs.core._EQ_;
var expr__42490 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42489.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42490))){
var path_parts = ((function (pred__42489,expr__42490){
return (function (p1__42488_SHARP_){
return clojure.string.split.call(null,p1__42488_SHARP_,/[\/\\]/);
});})(pred__42489,expr__42490))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42489,expr__42490){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42492){if((e42492 instanceof Error)){
var e = e42492;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42492;

}
}})());
});
;})(path_parts,sep,root,pred__42489,expr__42490))
} else {
if(cljs.core.truth_(pred__42489.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42490))){
return ((function (pred__42489,expr__42490){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__42489,expr__42490){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42489,expr__42490))
);

return deferred.addErrback(((function (deferred,pred__42489,expr__42490){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42489,expr__42490))
);
});
;})(pred__42489,expr__42490))
} else {
return ((function (pred__42489,expr__42490){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42489,expr__42490))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42493,callback){
var map__42496 = p__42493;
var map__42496__$1 = ((((!((map__42496 == null)))?((((map__42496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42496):map__42496);
var file_msg = map__42496__$1;
var request_url = cljs.core.get.call(null,map__42496__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42496,map__42496__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42496,map__42496__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__39348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto__){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto__){
return (function (state_42520){
var state_val_42521 = (state_42520[(1)]);
if((state_val_42521 === (7))){
var inst_42516 = (state_42520[(2)]);
var state_42520__$1 = state_42520;
var statearr_42522_42542 = state_42520__$1;
(statearr_42522_42542[(2)] = inst_42516);

(statearr_42522_42542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42521 === (1))){
var state_42520__$1 = state_42520;
var statearr_42523_42543 = state_42520__$1;
(statearr_42523_42543[(2)] = null);

(statearr_42523_42543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42521 === (4))){
var inst_42500 = (state_42520[(7)]);
var inst_42500__$1 = (state_42520[(2)]);
var state_42520__$1 = (function (){var statearr_42524 = state_42520;
(statearr_42524[(7)] = inst_42500__$1);

return statearr_42524;
})();
if(cljs.core.truth_(inst_42500__$1)){
var statearr_42525_42544 = state_42520__$1;
(statearr_42525_42544[(1)] = (5));

} else {
var statearr_42526_42545 = state_42520__$1;
(statearr_42526_42545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42521 === (6))){
var state_42520__$1 = state_42520;
var statearr_42527_42546 = state_42520__$1;
(statearr_42527_42546[(2)] = null);

(statearr_42527_42546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42521 === (3))){
var inst_42518 = (state_42520[(2)]);
var state_42520__$1 = state_42520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42520__$1,inst_42518);
} else {
if((state_val_42521 === (2))){
var state_42520__$1 = state_42520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42520__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42521 === (11))){
var inst_42512 = (state_42520[(2)]);
var state_42520__$1 = (function (){var statearr_42528 = state_42520;
(statearr_42528[(8)] = inst_42512);

return statearr_42528;
})();
var statearr_42529_42547 = state_42520__$1;
(statearr_42529_42547[(2)] = null);

(statearr_42529_42547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42521 === (9))){
var inst_42506 = (state_42520[(9)]);
var inst_42504 = (state_42520[(10)]);
var inst_42508 = inst_42506.call(null,inst_42504);
var state_42520__$1 = state_42520;
var statearr_42530_42548 = state_42520__$1;
(statearr_42530_42548[(2)] = inst_42508);

(statearr_42530_42548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42521 === (5))){
var inst_42500 = (state_42520[(7)]);
var inst_42502 = figwheel.client.file_reloading.blocking_load.call(null,inst_42500);
var state_42520__$1 = state_42520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42520__$1,(8),inst_42502);
} else {
if((state_val_42521 === (10))){
var inst_42504 = (state_42520[(10)]);
var inst_42510 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42504);
var state_42520__$1 = state_42520;
var statearr_42531_42549 = state_42520__$1;
(statearr_42531_42549[(2)] = inst_42510);

(statearr_42531_42549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42521 === (8))){
var inst_42506 = (state_42520[(9)]);
var inst_42500 = (state_42520[(7)]);
var inst_42504 = (state_42520[(2)]);
var inst_42505 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42506__$1 = cljs.core.get.call(null,inst_42505,inst_42500);
var state_42520__$1 = (function (){var statearr_42532 = state_42520;
(statearr_42532[(9)] = inst_42506__$1);

(statearr_42532[(10)] = inst_42504);

return statearr_42532;
})();
if(cljs.core.truth_(inst_42506__$1)){
var statearr_42533_42550 = state_42520__$1;
(statearr_42533_42550[(1)] = (9));

} else {
var statearr_42534_42551 = state_42520__$1;
(statearr_42534_42551[(1)] = (10));

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
});})(c__39348__auto__))
;
return ((function (switch__39236__auto__,c__39348__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__39237__auto__ = null;
var figwheel$client$file_reloading$state_machine__39237__auto____0 = (function (){
var statearr_42538 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42538[(0)] = figwheel$client$file_reloading$state_machine__39237__auto__);

(statearr_42538[(1)] = (1));

return statearr_42538;
});
var figwheel$client$file_reloading$state_machine__39237__auto____1 = (function (state_42520){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_42520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e42539){if((e42539 instanceof Object)){
var ex__39240__auto__ = e42539;
var statearr_42540_42552 = state_42520;
(statearr_42540_42552[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42553 = state_42520;
state_42520 = G__42553;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__39237__auto__ = function(state_42520){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__39237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__39237__auto____1.call(this,state_42520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__39237__auto____0;
figwheel$client$file_reloading$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__39237__auto____1;
return figwheel$client$file_reloading$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto__))
})();
var state__39350__auto__ = (function (){var statearr_42541 = f__39349__auto__.call(null);
(statearr_42541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto__);

return statearr_42541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto__))
);

return c__39348__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42554,callback){
var map__42557 = p__42554;
var map__42557__$1 = ((((!((map__42557 == null)))?((((map__42557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42557):map__42557);
var file_msg = map__42557__$1;
var namespace = cljs.core.get.call(null,map__42557__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42557,map__42557__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42557,map__42557__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42559){
var map__42562 = p__42559;
var map__42562__$1 = ((((!((map__42562 == null)))?((((map__42562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42562):map__42562);
var file_msg = map__42562__$1;
var namespace = cljs.core.get.call(null,map__42562__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__37169__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__37169__auto__){
var or__37181__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
var or__37181__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__37181__auto____$1)){
return or__37181__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__37169__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42564,callback){
var map__42567 = p__42564;
var map__42567__$1 = ((((!((map__42567 == null)))?((((map__42567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42567):map__42567);
var file_msg = map__42567__$1;
var request_url = cljs.core.get.call(null,map__42567__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__39348__auto___42655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___42655,out){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___42655,out){
return (function (state_42637){
var state_val_42638 = (state_42637[(1)]);
if((state_val_42638 === (1))){
var inst_42615 = cljs.core.nth.call(null,files,(0),null);
var inst_42616 = cljs.core.nthnext.call(null,files,(1));
var inst_42617 = files;
var state_42637__$1 = (function (){var statearr_42639 = state_42637;
(statearr_42639[(7)] = inst_42616);

(statearr_42639[(8)] = inst_42615);

(statearr_42639[(9)] = inst_42617);

return statearr_42639;
})();
var statearr_42640_42656 = state_42637__$1;
(statearr_42640_42656[(2)] = null);

(statearr_42640_42656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42638 === (2))){
var inst_42620 = (state_42637[(10)]);
var inst_42617 = (state_42637[(9)]);
var inst_42620__$1 = cljs.core.nth.call(null,inst_42617,(0),null);
var inst_42621 = cljs.core.nthnext.call(null,inst_42617,(1));
var inst_42622 = (inst_42620__$1 == null);
var inst_42623 = cljs.core.not.call(null,inst_42622);
var state_42637__$1 = (function (){var statearr_42641 = state_42637;
(statearr_42641[(11)] = inst_42621);

(statearr_42641[(10)] = inst_42620__$1);

return statearr_42641;
})();
if(inst_42623){
var statearr_42642_42657 = state_42637__$1;
(statearr_42642_42657[(1)] = (4));

} else {
var statearr_42643_42658 = state_42637__$1;
(statearr_42643_42658[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42638 === (3))){
var inst_42635 = (state_42637[(2)]);
var state_42637__$1 = state_42637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42637__$1,inst_42635);
} else {
if((state_val_42638 === (4))){
var inst_42620 = (state_42637[(10)]);
var inst_42625 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42620);
var state_42637__$1 = state_42637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42637__$1,(7),inst_42625);
} else {
if((state_val_42638 === (5))){
var inst_42631 = cljs.core.async.close_BANG_.call(null,out);
var state_42637__$1 = state_42637;
var statearr_42644_42659 = state_42637__$1;
(statearr_42644_42659[(2)] = inst_42631);

(statearr_42644_42659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42638 === (6))){
var inst_42633 = (state_42637[(2)]);
var state_42637__$1 = state_42637;
var statearr_42645_42660 = state_42637__$1;
(statearr_42645_42660[(2)] = inst_42633);

(statearr_42645_42660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42638 === (7))){
var inst_42621 = (state_42637[(11)]);
var inst_42627 = (state_42637[(2)]);
var inst_42628 = cljs.core.async.put_BANG_.call(null,out,inst_42627);
var inst_42617 = inst_42621;
var state_42637__$1 = (function (){var statearr_42646 = state_42637;
(statearr_42646[(12)] = inst_42628);

(statearr_42646[(9)] = inst_42617);

return statearr_42646;
})();
var statearr_42647_42661 = state_42637__$1;
(statearr_42647_42661[(2)] = null);

(statearr_42647_42661[(1)] = (2));


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
});})(c__39348__auto___42655,out))
;
return ((function (switch__39236__auto__,c__39348__auto___42655,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto____0 = (function (){
var statearr_42651 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42651[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto__);

(statearr_42651[(1)] = (1));

return statearr_42651;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto____1 = (function (state_42637){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_42637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e42652){if((e42652 instanceof Object)){
var ex__39240__auto__ = e42652;
var statearr_42653_42662 = state_42637;
(statearr_42653_42662[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42663 = state_42637;
state_42637 = G__42663;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto__ = function(state_42637){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto____1.call(this,state_42637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___42655,out))
})();
var state__39350__auto__ = (function (){var statearr_42654 = f__39349__auto__.call(null);
(statearr_42654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___42655);

return statearr_42654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___42655,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42664,opts){
var map__42668 = p__42664;
var map__42668__$1 = ((((!((map__42668 == null)))?((((map__42668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42668):map__42668);
var eval_body__$1 = cljs.core.get.call(null,map__42668__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42668__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__37169__auto__ = eval_body__$1;
if(cljs.core.truth_(and__37169__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__37169__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42670){var e = e42670;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42671_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42671_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42676){
var vec__42677 = p__42676;
var k = cljs.core.nth.call(null,vec__42677,(0),null);
var v = cljs.core.nth.call(null,vec__42677,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42678){
var vec__42679 = p__42678;
var k = cljs.core.nth.call(null,vec__42679,(0),null);
var v = cljs.core.nth.call(null,vec__42679,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42683,p__42684){
var map__42931 = p__42683;
var map__42931__$1 = ((((!((map__42931 == null)))?((((map__42931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42931):map__42931);
var opts = map__42931__$1;
var before_jsload = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42931__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42932 = p__42684;
var map__42932__$1 = ((((!((map__42932 == null)))?((((map__42932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42932):map__42932);
var msg = map__42932__$1;
var files = cljs.core.get.call(null,map__42932__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42932__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42932__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__39348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43085){
var state_val_43086 = (state_43085[(1)]);
if((state_val_43086 === (7))){
var inst_42949 = (state_43085[(7)]);
var inst_42946 = (state_43085[(8)]);
var inst_42947 = (state_43085[(9)]);
var inst_42948 = (state_43085[(10)]);
var inst_42954 = cljs.core._nth.call(null,inst_42947,inst_42949);
var inst_42955 = figwheel.client.file_reloading.eval_body.call(null,inst_42954,opts);
var inst_42956 = (inst_42949 + (1));
var tmp43087 = inst_42946;
var tmp43088 = inst_42947;
var tmp43089 = inst_42948;
var inst_42946__$1 = tmp43087;
var inst_42947__$1 = tmp43088;
var inst_42948__$1 = tmp43089;
var inst_42949__$1 = inst_42956;
var state_43085__$1 = (function (){var statearr_43090 = state_43085;
(statearr_43090[(7)] = inst_42949__$1);

(statearr_43090[(8)] = inst_42946__$1);

(statearr_43090[(9)] = inst_42947__$1);

(statearr_43090[(11)] = inst_42955);

(statearr_43090[(10)] = inst_42948__$1);

return statearr_43090;
})();
var statearr_43091_43177 = state_43085__$1;
(statearr_43091_43177[(2)] = null);

(statearr_43091_43177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (20))){
var inst_42989 = (state_43085[(12)]);
var inst_42997 = figwheel.client.file_reloading.sort_files.call(null,inst_42989);
var state_43085__$1 = state_43085;
var statearr_43092_43178 = state_43085__$1;
(statearr_43092_43178[(2)] = inst_42997);

(statearr_43092_43178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (27))){
var state_43085__$1 = state_43085;
var statearr_43093_43179 = state_43085__$1;
(statearr_43093_43179[(2)] = null);

(statearr_43093_43179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (1))){
var inst_42938 = (state_43085[(13)]);
var inst_42935 = before_jsload.call(null,files);
var inst_42936 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42937 = (function (){return ((function (inst_42938,inst_42935,inst_42936,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42680_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42680_SHARP_);
});
;})(inst_42938,inst_42935,inst_42936,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42938__$1 = cljs.core.filter.call(null,inst_42937,files);
var inst_42939 = cljs.core.not_empty.call(null,inst_42938__$1);
var state_43085__$1 = (function (){var statearr_43094 = state_43085;
(statearr_43094[(14)] = inst_42935);

(statearr_43094[(15)] = inst_42936);

(statearr_43094[(13)] = inst_42938__$1);

return statearr_43094;
})();
if(cljs.core.truth_(inst_42939)){
var statearr_43095_43180 = state_43085__$1;
(statearr_43095_43180[(1)] = (2));

} else {
var statearr_43096_43181 = state_43085__$1;
(statearr_43096_43181[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (24))){
var state_43085__$1 = state_43085;
var statearr_43097_43182 = state_43085__$1;
(statearr_43097_43182[(2)] = null);

(statearr_43097_43182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (39))){
var inst_43039 = (state_43085[(16)]);
var state_43085__$1 = state_43085;
var statearr_43098_43183 = state_43085__$1;
(statearr_43098_43183[(2)] = inst_43039);

(statearr_43098_43183[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (46))){
var inst_43080 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43099_43184 = state_43085__$1;
(statearr_43099_43184[(2)] = inst_43080);

(statearr_43099_43184[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (4))){
var inst_42983 = (state_43085[(2)]);
var inst_42984 = cljs.core.List.EMPTY;
var inst_42985 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42984);
var inst_42986 = (function (){return ((function (inst_42983,inst_42984,inst_42985,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42681_SHARP_){
var and__37169__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42681_SHARP_);
if(cljs.core.truth_(and__37169__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42681_SHARP_));
} else {
return and__37169__auto__;
}
});
;})(inst_42983,inst_42984,inst_42985,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42987 = cljs.core.filter.call(null,inst_42986,files);
var inst_42988 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42989 = cljs.core.concat.call(null,inst_42987,inst_42988);
var state_43085__$1 = (function (){var statearr_43100 = state_43085;
(statearr_43100[(17)] = inst_42985);

(statearr_43100[(12)] = inst_42989);

(statearr_43100[(18)] = inst_42983);

return statearr_43100;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43101_43185 = state_43085__$1;
(statearr_43101_43185[(1)] = (16));

} else {
var statearr_43102_43186 = state_43085__$1;
(statearr_43102_43186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (15))){
var inst_42973 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43103_43187 = state_43085__$1;
(statearr_43103_43187[(2)] = inst_42973);

(statearr_43103_43187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (21))){
var inst_42999 = (state_43085[(19)]);
var inst_42999__$1 = (state_43085[(2)]);
var inst_43000 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42999__$1);
var state_43085__$1 = (function (){var statearr_43104 = state_43085;
(statearr_43104[(19)] = inst_42999__$1);

return statearr_43104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43085__$1,(22),inst_43000);
} else {
if((state_val_43086 === (31))){
var inst_43083 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43085__$1,inst_43083);
} else {
if((state_val_43086 === (32))){
var inst_43039 = (state_43085[(16)]);
var inst_43044 = inst_43039.cljs$lang$protocol_mask$partition0$;
var inst_43045 = (inst_43044 & (64));
var inst_43046 = inst_43039.cljs$core$ISeq$;
var inst_43047 = (inst_43045) || (inst_43046);
var state_43085__$1 = state_43085;
if(cljs.core.truth_(inst_43047)){
var statearr_43105_43188 = state_43085__$1;
(statearr_43105_43188[(1)] = (35));

} else {
var statearr_43106_43189 = state_43085__$1;
(statearr_43106_43189[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (40))){
var inst_43060 = (state_43085[(20)]);
var inst_43059 = (state_43085[(2)]);
var inst_43060__$1 = cljs.core.get.call(null,inst_43059,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43061 = cljs.core.get.call(null,inst_43059,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43062 = cljs.core.not_empty.call(null,inst_43060__$1);
var state_43085__$1 = (function (){var statearr_43107 = state_43085;
(statearr_43107[(20)] = inst_43060__$1);

(statearr_43107[(21)] = inst_43061);

return statearr_43107;
})();
if(cljs.core.truth_(inst_43062)){
var statearr_43108_43190 = state_43085__$1;
(statearr_43108_43190[(1)] = (41));

} else {
var statearr_43109_43191 = state_43085__$1;
(statearr_43109_43191[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (33))){
var state_43085__$1 = state_43085;
var statearr_43110_43192 = state_43085__$1;
(statearr_43110_43192[(2)] = false);

(statearr_43110_43192[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (13))){
var inst_42959 = (state_43085[(22)]);
var inst_42963 = cljs.core.chunk_first.call(null,inst_42959);
var inst_42964 = cljs.core.chunk_rest.call(null,inst_42959);
var inst_42965 = cljs.core.count.call(null,inst_42963);
var inst_42946 = inst_42964;
var inst_42947 = inst_42963;
var inst_42948 = inst_42965;
var inst_42949 = (0);
var state_43085__$1 = (function (){var statearr_43111 = state_43085;
(statearr_43111[(7)] = inst_42949);

(statearr_43111[(8)] = inst_42946);

(statearr_43111[(9)] = inst_42947);

(statearr_43111[(10)] = inst_42948);

return statearr_43111;
})();
var statearr_43112_43193 = state_43085__$1;
(statearr_43112_43193[(2)] = null);

(statearr_43112_43193[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (22))){
var inst_42999 = (state_43085[(19)]);
var inst_43007 = (state_43085[(23)]);
var inst_43002 = (state_43085[(24)]);
var inst_43003 = (state_43085[(25)]);
var inst_43002__$1 = (state_43085[(2)]);
var inst_43003__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43002__$1);
var inst_43004 = (function (){var all_files = inst_42999;
var res_SINGLEQUOTE_ = inst_43002__$1;
var res = inst_43003__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42999,inst_43007,inst_43002,inst_43003,inst_43002__$1,inst_43003__$1,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42682_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42682_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42999,inst_43007,inst_43002,inst_43003,inst_43002__$1,inst_43003__$1,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43005 = cljs.core.filter.call(null,inst_43004,inst_43002__$1);
var inst_43006 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43007__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43006);
var inst_43008 = cljs.core.not_empty.call(null,inst_43007__$1);
var state_43085__$1 = (function (){var statearr_43113 = state_43085;
(statearr_43113[(23)] = inst_43007__$1);

(statearr_43113[(24)] = inst_43002__$1);

(statearr_43113[(25)] = inst_43003__$1);

(statearr_43113[(26)] = inst_43005);

return statearr_43113;
})();
if(cljs.core.truth_(inst_43008)){
var statearr_43114_43194 = state_43085__$1;
(statearr_43114_43194[(1)] = (23));

} else {
var statearr_43115_43195 = state_43085__$1;
(statearr_43115_43195[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (36))){
var state_43085__$1 = state_43085;
var statearr_43116_43196 = state_43085__$1;
(statearr_43116_43196[(2)] = false);

(statearr_43116_43196[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (41))){
var inst_43060 = (state_43085[(20)]);
var inst_43064 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43065 = cljs.core.map.call(null,inst_43064,inst_43060);
var inst_43066 = cljs.core.pr_str.call(null,inst_43065);
var inst_43067 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43066)].join('');
var inst_43068 = figwheel.client.utils.log.call(null,inst_43067);
var state_43085__$1 = state_43085;
var statearr_43117_43197 = state_43085__$1;
(statearr_43117_43197[(2)] = inst_43068);

(statearr_43117_43197[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (43))){
var inst_43061 = (state_43085[(21)]);
var inst_43071 = (state_43085[(2)]);
var inst_43072 = cljs.core.not_empty.call(null,inst_43061);
var state_43085__$1 = (function (){var statearr_43118 = state_43085;
(statearr_43118[(27)] = inst_43071);

return statearr_43118;
})();
if(cljs.core.truth_(inst_43072)){
var statearr_43119_43198 = state_43085__$1;
(statearr_43119_43198[(1)] = (44));

} else {
var statearr_43120_43199 = state_43085__$1;
(statearr_43120_43199[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (29))){
var inst_43039 = (state_43085[(16)]);
var inst_42999 = (state_43085[(19)]);
var inst_43007 = (state_43085[(23)]);
var inst_43002 = (state_43085[(24)]);
var inst_43003 = (state_43085[(25)]);
var inst_43005 = (state_43085[(26)]);
var inst_43035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43038 = (function (){var all_files = inst_42999;
var res_SINGLEQUOTE_ = inst_43002;
var res = inst_43003;
var files_not_loaded = inst_43005;
var dependencies_that_loaded = inst_43007;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43039,inst_42999,inst_43007,inst_43002,inst_43003,inst_43005,inst_43035,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43037){
var map__43121 = p__43037;
var map__43121__$1 = ((((!((map__43121 == null)))?((((map__43121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43121):map__43121);
var namespace = cljs.core.get.call(null,map__43121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43039,inst_42999,inst_43007,inst_43002,inst_43003,inst_43005,inst_43035,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43039__$1 = cljs.core.group_by.call(null,inst_43038,inst_43005);
var inst_43041 = (inst_43039__$1 == null);
var inst_43042 = cljs.core.not.call(null,inst_43041);
var state_43085__$1 = (function (){var statearr_43123 = state_43085;
(statearr_43123[(16)] = inst_43039__$1);

(statearr_43123[(28)] = inst_43035);

return statearr_43123;
})();
if(inst_43042){
var statearr_43124_43200 = state_43085__$1;
(statearr_43124_43200[(1)] = (32));

} else {
var statearr_43125_43201 = state_43085__$1;
(statearr_43125_43201[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (44))){
var inst_43061 = (state_43085[(21)]);
var inst_43074 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43061);
var inst_43075 = cljs.core.pr_str.call(null,inst_43074);
var inst_43076 = [cljs.core.str("not required: "),cljs.core.str(inst_43075)].join('');
var inst_43077 = figwheel.client.utils.log.call(null,inst_43076);
var state_43085__$1 = state_43085;
var statearr_43126_43202 = state_43085__$1;
(statearr_43126_43202[(2)] = inst_43077);

(statearr_43126_43202[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (6))){
var inst_42980 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43127_43203 = state_43085__$1;
(statearr_43127_43203[(2)] = inst_42980);

(statearr_43127_43203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (28))){
var inst_43005 = (state_43085[(26)]);
var inst_43032 = (state_43085[(2)]);
var inst_43033 = cljs.core.not_empty.call(null,inst_43005);
var state_43085__$1 = (function (){var statearr_43128 = state_43085;
(statearr_43128[(29)] = inst_43032);

return statearr_43128;
})();
if(cljs.core.truth_(inst_43033)){
var statearr_43129_43204 = state_43085__$1;
(statearr_43129_43204[(1)] = (29));

} else {
var statearr_43130_43205 = state_43085__$1;
(statearr_43130_43205[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (25))){
var inst_43003 = (state_43085[(25)]);
var inst_43019 = (state_43085[(2)]);
var inst_43020 = cljs.core.not_empty.call(null,inst_43003);
var state_43085__$1 = (function (){var statearr_43131 = state_43085;
(statearr_43131[(30)] = inst_43019);

return statearr_43131;
})();
if(cljs.core.truth_(inst_43020)){
var statearr_43132_43206 = state_43085__$1;
(statearr_43132_43206[(1)] = (26));

} else {
var statearr_43133_43207 = state_43085__$1;
(statearr_43133_43207[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (34))){
var inst_43054 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
if(cljs.core.truth_(inst_43054)){
var statearr_43134_43208 = state_43085__$1;
(statearr_43134_43208[(1)] = (38));

} else {
var statearr_43135_43209 = state_43085__$1;
(statearr_43135_43209[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (17))){
var state_43085__$1 = state_43085;
var statearr_43136_43210 = state_43085__$1;
(statearr_43136_43210[(2)] = recompile_dependents);

(statearr_43136_43210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (3))){
var state_43085__$1 = state_43085;
var statearr_43137_43211 = state_43085__$1;
(statearr_43137_43211[(2)] = null);

(statearr_43137_43211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (12))){
var inst_42976 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43138_43212 = state_43085__$1;
(statearr_43138_43212[(2)] = inst_42976);

(statearr_43138_43212[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (2))){
var inst_42938 = (state_43085[(13)]);
var inst_42945 = cljs.core.seq.call(null,inst_42938);
var inst_42946 = inst_42945;
var inst_42947 = null;
var inst_42948 = (0);
var inst_42949 = (0);
var state_43085__$1 = (function (){var statearr_43139 = state_43085;
(statearr_43139[(7)] = inst_42949);

(statearr_43139[(8)] = inst_42946);

(statearr_43139[(9)] = inst_42947);

(statearr_43139[(10)] = inst_42948);

return statearr_43139;
})();
var statearr_43140_43213 = state_43085__$1;
(statearr_43140_43213[(2)] = null);

(statearr_43140_43213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (23))){
var inst_42999 = (state_43085[(19)]);
var inst_43007 = (state_43085[(23)]);
var inst_43002 = (state_43085[(24)]);
var inst_43003 = (state_43085[(25)]);
var inst_43005 = (state_43085[(26)]);
var inst_43010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43012 = (function (){var all_files = inst_42999;
var res_SINGLEQUOTE_ = inst_43002;
var res = inst_43003;
var files_not_loaded = inst_43005;
var dependencies_that_loaded = inst_43007;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42999,inst_43007,inst_43002,inst_43003,inst_43005,inst_43010,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43011){
var map__43141 = p__43011;
var map__43141__$1 = ((((!((map__43141 == null)))?((((map__43141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43141):map__43141);
var request_url = cljs.core.get.call(null,map__43141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42999,inst_43007,inst_43002,inst_43003,inst_43005,inst_43010,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43013 = cljs.core.reverse.call(null,inst_43007);
var inst_43014 = cljs.core.map.call(null,inst_43012,inst_43013);
var inst_43015 = cljs.core.pr_str.call(null,inst_43014);
var inst_43016 = figwheel.client.utils.log.call(null,inst_43015);
var state_43085__$1 = (function (){var statearr_43143 = state_43085;
(statearr_43143[(31)] = inst_43010);

return statearr_43143;
})();
var statearr_43144_43214 = state_43085__$1;
(statearr_43144_43214[(2)] = inst_43016);

(statearr_43144_43214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (35))){
var state_43085__$1 = state_43085;
var statearr_43145_43215 = state_43085__$1;
(statearr_43145_43215[(2)] = true);

(statearr_43145_43215[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (19))){
var inst_42989 = (state_43085[(12)]);
var inst_42995 = figwheel.client.file_reloading.expand_files.call(null,inst_42989);
var state_43085__$1 = state_43085;
var statearr_43146_43216 = state_43085__$1;
(statearr_43146_43216[(2)] = inst_42995);

(statearr_43146_43216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (11))){
var state_43085__$1 = state_43085;
var statearr_43147_43217 = state_43085__$1;
(statearr_43147_43217[(2)] = null);

(statearr_43147_43217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (9))){
var inst_42978 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43148_43218 = state_43085__$1;
(statearr_43148_43218[(2)] = inst_42978);

(statearr_43148_43218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (5))){
var inst_42949 = (state_43085[(7)]);
var inst_42948 = (state_43085[(10)]);
var inst_42951 = (inst_42949 < inst_42948);
var inst_42952 = inst_42951;
var state_43085__$1 = state_43085;
if(cljs.core.truth_(inst_42952)){
var statearr_43149_43219 = state_43085__$1;
(statearr_43149_43219[(1)] = (7));

} else {
var statearr_43150_43220 = state_43085__$1;
(statearr_43150_43220[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (14))){
var inst_42959 = (state_43085[(22)]);
var inst_42968 = cljs.core.first.call(null,inst_42959);
var inst_42969 = figwheel.client.file_reloading.eval_body.call(null,inst_42968,opts);
var inst_42970 = cljs.core.next.call(null,inst_42959);
var inst_42946 = inst_42970;
var inst_42947 = null;
var inst_42948 = (0);
var inst_42949 = (0);
var state_43085__$1 = (function (){var statearr_43151 = state_43085;
(statearr_43151[(7)] = inst_42949);

(statearr_43151[(8)] = inst_42946);

(statearr_43151[(9)] = inst_42947);

(statearr_43151[(32)] = inst_42969);

(statearr_43151[(10)] = inst_42948);

return statearr_43151;
})();
var statearr_43152_43221 = state_43085__$1;
(statearr_43152_43221[(2)] = null);

(statearr_43152_43221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (45))){
var state_43085__$1 = state_43085;
var statearr_43153_43222 = state_43085__$1;
(statearr_43153_43222[(2)] = null);

(statearr_43153_43222[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (26))){
var inst_42999 = (state_43085[(19)]);
var inst_43007 = (state_43085[(23)]);
var inst_43002 = (state_43085[(24)]);
var inst_43003 = (state_43085[(25)]);
var inst_43005 = (state_43085[(26)]);
var inst_43022 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43024 = (function (){var all_files = inst_42999;
var res_SINGLEQUOTE_ = inst_43002;
var res = inst_43003;
var files_not_loaded = inst_43005;
var dependencies_that_loaded = inst_43007;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42999,inst_43007,inst_43002,inst_43003,inst_43005,inst_43022,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43023){
var map__43154 = p__43023;
var map__43154__$1 = ((((!((map__43154 == null)))?((((map__43154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43154):map__43154);
var namespace = cljs.core.get.call(null,map__43154__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43154__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42999,inst_43007,inst_43002,inst_43003,inst_43005,inst_43022,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43025 = cljs.core.map.call(null,inst_43024,inst_43003);
var inst_43026 = cljs.core.pr_str.call(null,inst_43025);
var inst_43027 = figwheel.client.utils.log.call(null,inst_43026);
var inst_43028 = (function (){var all_files = inst_42999;
var res_SINGLEQUOTE_ = inst_43002;
var res = inst_43003;
var files_not_loaded = inst_43005;
var dependencies_that_loaded = inst_43007;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42999,inst_43007,inst_43002,inst_43003,inst_43005,inst_43022,inst_43024,inst_43025,inst_43026,inst_43027,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42999,inst_43007,inst_43002,inst_43003,inst_43005,inst_43022,inst_43024,inst_43025,inst_43026,inst_43027,state_val_43086,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43029 = setTimeout(inst_43028,(10));
var state_43085__$1 = (function (){var statearr_43156 = state_43085;
(statearr_43156[(33)] = inst_43027);

(statearr_43156[(34)] = inst_43022);

return statearr_43156;
})();
var statearr_43157_43223 = state_43085__$1;
(statearr_43157_43223[(2)] = inst_43029);

(statearr_43157_43223[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (16))){
var state_43085__$1 = state_43085;
var statearr_43158_43224 = state_43085__$1;
(statearr_43158_43224[(2)] = reload_dependents);

(statearr_43158_43224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (38))){
var inst_43039 = (state_43085[(16)]);
var inst_43056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43039);
var state_43085__$1 = state_43085;
var statearr_43159_43225 = state_43085__$1;
(statearr_43159_43225[(2)] = inst_43056);

(statearr_43159_43225[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (30))){
var state_43085__$1 = state_43085;
var statearr_43160_43226 = state_43085__$1;
(statearr_43160_43226[(2)] = null);

(statearr_43160_43226[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (10))){
var inst_42959 = (state_43085[(22)]);
var inst_42961 = cljs.core.chunked_seq_QMARK_.call(null,inst_42959);
var state_43085__$1 = state_43085;
if(inst_42961){
var statearr_43161_43227 = state_43085__$1;
(statearr_43161_43227[(1)] = (13));

} else {
var statearr_43162_43228 = state_43085__$1;
(statearr_43162_43228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (18))){
var inst_42993 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
if(cljs.core.truth_(inst_42993)){
var statearr_43163_43229 = state_43085__$1;
(statearr_43163_43229[(1)] = (19));

} else {
var statearr_43164_43230 = state_43085__$1;
(statearr_43164_43230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (42))){
var state_43085__$1 = state_43085;
var statearr_43165_43231 = state_43085__$1;
(statearr_43165_43231[(2)] = null);

(statearr_43165_43231[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (37))){
var inst_43051 = (state_43085[(2)]);
var state_43085__$1 = state_43085;
var statearr_43166_43232 = state_43085__$1;
(statearr_43166_43232[(2)] = inst_43051);

(statearr_43166_43232[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43086 === (8))){
var inst_42946 = (state_43085[(8)]);
var inst_42959 = (state_43085[(22)]);
var inst_42959__$1 = cljs.core.seq.call(null,inst_42946);
var state_43085__$1 = (function (){var statearr_43167 = state_43085;
(statearr_43167[(22)] = inst_42959__$1);

return statearr_43167;
})();
if(inst_42959__$1){
var statearr_43168_43233 = state_43085__$1;
(statearr_43168_43233[(1)] = (10));

} else {
var statearr_43169_43234 = state_43085__$1;
(statearr_43169_43234[(1)] = (11));

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
});})(c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__39236__auto__,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto____0 = (function (){
var statearr_43173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43173[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto__);

(statearr_43173[(1)] = (1));

return statearr_43173;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto____1 = (function (state_43085){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_43085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e43174){if((e43174 instanceof Object)){
var ex__39240__auto__ = e43174;
var statearr_43175_43235 = state_43085;
(statearr_43175_43235[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43236 = state_43085;
state_43085 = G__43236;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto__ = function(state_43085){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto____1.call(this,state_43085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__39350__auto__ = (function (){var statearr_43176 = f__39349__auto__.call(null);
(statearr_43176[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto__);

return statearr_43176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto__,map__42931,map__42931__$1,opts,before_jsload,on_jsload,reload_dependents,map__42932,map__42932__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__39348__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43239,link){
var map__43242 = p__43239;
var map__43242__$1 = ((((!((map__43242 == null)))?((((map__43242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43242):map__43242);
var file = cljs.core.get.call(null,map__43242__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__43242,map__43242__$1,file){
return (function (p1__43237_SHARP_,p2__43238_SHARP_){
if(cljs.core._EQ_.call(null,p1__43237_SHARP_,p2__43238_SHARP_)){
return p1__43237_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__43242,map__43242__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43248){
var map__43249 = p__43248;
var map__43249__$1 = ((((!((map__43249 == null)))?((((map__43249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43249):map__43249);
var match_length = cljs.core.get.call(null,map__43249__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43249__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43244_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43244_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args43251 = [];
var len__38239__auto___43254 = arguments.length;
var i__38240__auto___43255 = (0);
while(true){
if((i__38240__auto___43255 < len__38239__auto___43254)){
args43251.push((arguments[i__38240__auto___43255]));

var G__43256 = (i__38240__auto___43255 + (1));
i__38240__auto___43255 = G__43256;
continue;
} else {
}
break;
}

var G__43253 = args43251.length;
switch (G__43253) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43251.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43258_SHARP_,p2__43259_SHARP_){
return cljs.core.assoc.call(null,p1__43258_SHARP_,cljs.core.get.call(null,p2__43259_SHARP_,key),p2__43259_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__43260){
var map__43263 = p__43260;
var map__43263__$1 = ((((!((map__43263 == null)))?((((map__43263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43263):map__43263);
var f_data = map__43263__$1;
var file = cljs.core.get.call(null,map__43263__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43265,files_msg){
var map__43272 = p__43265;
var map__43272__$1 = ((((!((map__43272 == null)))?((((map__43272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43272):map__43272);
var opts = map__43272__$1;
var on_cssload = cljs.core.get.call(null,map__43272__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43274_43278 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__43275_43279 = null;
var count__43276_43280 = (0);
var i__43277_43281 = (0);
while(true){
if((i__43277_43281 < count__43276_43280)){
var f_43282 = cljs.core._nth.call(null,chunk__43275_43279,i__43277_43281);
figwheel.client.file_reloading.reload_css_file.call(null,f_43282);

var G__43283 = seq__43274_43278;
var G__43284 = chunk__43275_43279;
var G__43285 = count__43276_43280;
var G__43286 = (i__43277_43281 + (1));
seq__43274_43278 = G__43283;
chunk__43275_43279 = G__43284;
count__43276_43280 = G__43285;
i__43277_43281 = G__43286;
continue;
} else {
var temp__4425__auto___43287 = cljs.core.seq.call(null,seq__43274_43278);
if(temp__4425__auto___43287){
var seq__43274_43288__$1 = temp__4425__auto___43287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43274_43288__$1)){
var c__37984__auto___43289 = cljs.core.chunk_first.call(null,seq__43274_43288__$1);
var G__43290 = cljs.core.chunk_rest.call(null,seq__43274_43288__$1);
var G__43291 = c__37984__auto___43289;
var G__43292 = cljs.core.count.call(null,c__37984__auto___43289);
var G__43293 = (0);
seq__43274_43278 = G__43290;
chunk__43275_43279 = G__43291;
count__43276_43280 = G__43292;
i__43277_43281 = G__43293;
continue;
} else {
var f_43294 = cljs.core.first.call(null,seq__43274_43288__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43294);

var G__43295 = cljs.core.next.call(null,seq__43274_43288__$1);
var G__43296 = null;
var G__43297 = (0);
var G__43298 = (0);
seq__43274_43278 = G__43295;
chunk__43275_43279 = G__43296;
count__43276_43280 = G__43297;
i__43277_43281 = G__43298;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__43272,map__43272__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__43272,map__43272__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1459924595465