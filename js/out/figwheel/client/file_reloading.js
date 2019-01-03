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
var or__18291__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18291__auto__){
return or__18291__auto__;
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
var or__18291__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23946_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23946_SHARP_));
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
var seq__23951 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23952 = null;
var count__23953 = (0);
var i__23954 = (0);
while(true){
if((i__23954 < count__23953)){
var n = cljs.core._nth.call(null,chunk__23952,i__23954);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23955 = seq__23951;
var G__23956 = chunk__23952;
var G__23957 = count__23953;
var G__23958 = (i__23954 + (1));
seq__23951 = G__23955;
chunk__23952 = G__23956;
count__23953 = G__23957;
i__23954 = G__23958;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23951);
if(temp__4425__auto__){
var seq__23951__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23951__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__23951__$1);
var G__23959 = cljs.core.chunk_rest.call(null,seq__23951__$1);
var G__23960 = c__19094__auto__;
var G__23961 = cljs.core.count.call(null,c__19094__auto__);
var G__23962 = (0);
seq__23951 = G__23959;
chunk__23952 = G__23960;
count__23953 = G__23961;
i__23954 = G__23962;
continue;
} else {
var n = cljs.core.first.call(null,seq__23951__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23963 = cljs.core.next.call(null,seq__23951__$1);
var G__23964 = null;
var G__23965 = (0);
var G__23966 = (0);
seq__23951 = G__23963;
chunk__23952 = G__23964;
count__23953 = G__23965;
i__23954 = G__23966;
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

var seq__24005_24012 = cljs.core.seq.call(null,deps);
var chunk__24006_24013 = null;
var count__24007_24014 = (0);
var i__24008_24015 = (0);
while(true){
if((i__24008_24015 < count__24007_24014)){
var dep_24016 = cljs.core._nth.call(null,chunk__24006_24013,i__24008_24015);
topo_sort_helper_STAR_.call(null,dep_24016,(depth + (1)),state);

var G__24017 = seq__24005_24012;
var G__24018 = chunk__24006_24013;
var G__24019 = count__24007_24014;
var G__24020 = (i__24008_24015 + (1));
seq__24005_24012 = G__24017;
chunk__24006_24013 = G__24018;
count__24007_24014 = G__24019;
i__24008_24015 = G__24020;
continue;
} else {
var temp__4425__auto___24021 = cljs.core.seq.call(null,seq__24005_24012);
if(temp__4425__auto___24021){
var seq__24005_24022__$1 = temp__4425__auto___24021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24005_24022__$1)){
var c__19094__auto___24023 = cljs.core.chunk_first.call(null,seq__24005_24022__$1);
var G__24024 = cljs.core.chunk_rest.call(null,seq__24005_24022__$1);
var G__24025 = c__19094__auto___24023;
var G__24026 = cljs.core.count.call(null,c__19094__auto___24023);
var G__24027 = (0);
seq__24005_24012 = G__24024;
chunk__24006_24013 = G__24025;
count__24007_24014 = G__24026;
i__24008_24015 = G__24027;
continue;
} else {
var dep_24028 = cljs.core.first.call(null,seq__24005_24022__$1);
topo_sort_helper_STAR_.call(null,dep_24028,(depth + (1)),state);

var G__24029 = cljs.core.next.call(null,seq__24005_24022__$1);
var G__24030 = null;
var G__24031 = (0);
var G__24032 = (0);
seq__24005_24012 = G__24029;
chunk__24006_24013 = G__24030;
count__24007_24014 = G__24031;
i__24008_24015 = G__24032;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24009){
var vec__24011 = p__24009;
var x = cljs.core.nth.call(null,vec__24011,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24011,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24011,x,xs,get_deps__$1){
return (function (p1__23967_SHARP_){
return clojure.set.difference.call(null,p1__23967_SHARP_,x);
});})(vec__24011,x,xs,get_deps__$1))
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
var seq__24045 = cljs.core.seq.call(null,provides);
var chunk__24046 = null;
var count__24047 = (0);
var i__24048 = (0);
while(true){
if((i__24048 < count__24047)){
var prov = cljs.core._nth.call(null,chunk__24046,i__24048);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24049_24057 = cljs.core.seq.call(null,requires);
var chunk__24050_24058 = null;
var count__24051_24059 = (0);
var i__24052_24060 = (0);
while(true){
if((i__24052_24060 < count__24051_24059)){
var req_24061 = cljs.core._nth.call(null,chunk__24050_24058,i__24052_24060);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24061,prov);

var G__24062 = seq__24049_24057;
var G__24063 = chunk__24050_24058;
var G__24064 = count__24051_24059;
var G__24065 = (i__24052_24060 + (1));
seq__24049_24057 = G__24062;
chunk__24050_24058 = G__24063;
count__24051_24059 = G__24064;
i__24052_24060 = G__24065;
continue;
} else {
var temp__4425__auto___24066 = cljs.core.seq.call(null,seq__24049_24057);
if(temp__4425__auto___24066){
var seq__24049_24067__$1 = temp__4425__auto___24066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24049_24067__$1)){
var c__19094__auto___24068 = cljs.core.chunk_first.call(null,seq__24049_24067__$1);
var G__24069 = cljs.core.chunk_rest.call(null,seq__24049_24067__$1);
var G__24070 = c__19094__auto___24068;
var G__24071 = cljs.core.count.call(null,c__19094__auto___24068);
var G__24072 = (0);
seq__24049_24057 = G__24069;
chunk__24050_24058 = G__24070;
count__24051_24059 = G__24071;
i__24052_24060 = G__24072;
continue;
} else {
var req_24073 = cljs.core.first.call(null,seq__24049_24067__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24073,prov);

var G__24074 = cljs.core.next.call(null,seq__24049_24067__$1);
var G__24075 = null;
var G__24076 = (0);
var G__24077 = (0);
seq__24049_24057 = G__24074;
chunk__24050_24058 = G__24075;
count__24051_24059 = G__24076;
i__24052_24060 = G__24077;
continue;
}
} else {
}
}
break;
}

var G__24078 = seq__24045;
var G__24079 = chunk__24046;
var G__24080 = count__24047;
var G__24081 = (i__24048 + (1));
seq__24045 = G__24078;
chunk__24046 = G__24079;
count__24047 = G__24080;
i__24048 = G__24081;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24045);
if(temp__4425__auto__){
var seq__24045__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24045__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__24045__$1);
var G__24082 = cljs.core.chunk_rest.call(null,seq__24045__$1);
var G__24083 = c__19094__auto__;
var G__24084 = cljs.core.count.call(null,c__19094__auto__);
var G__24085 = (0);
seq__24045 = G__24082;
chunk__24046 = G__24083;
count__24047 = G__24084;
i__24048 = G__24085;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24045__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24053_24086 = cljs.core.seq.call(null,requires);
var chunk__24054_24087 = null;
var count__24055_24088 = (0);
var i__24056_24089 = (0);
while(true){
if((i__24056_24089 < count__24055_24088)){
var req_24090 = cljs.core._nth.call(null,chunk__24054_24087,i__24056_24089);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24090,prov);

var G__24091 = seq__24053_24086;
var G__24092 = chunk__24054_24087;
var G__24093 = count__24055_24088;
var G__24094 = (i__24056_24089 + (1));
seq__24053_24086 = G__24091;
chunk__24054_24087 = G__24092;
count__24055_24088 = G__24093;
i__24056_24089 = G__24094;
continue;
} else {
var temp__4425__auto___24095__$1 = cljs.core.seq.call(null,seq__24053_24086);
if(temp__4425__auto___24095__$1){
var seq__24053_24096__$1 = temp__4425__auto___24095__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24053_24096__$1)){
var c__19094__auto___24097 = cljs.core.chunk_first.call(null,seq__24053_24096__$1);
var G__24098 = cljs.core.chunk_rest.call(null,seq__24053_24096__$1);
var G__24099 = c__19094__auto___24097;
var G__24100 = cljs.core.count.call(null,c__19094__auto___24097);
var G__24101 = (0);
seq__24053_24086 = G__24098;
chunk__24054_24087 = G__24099;
count__24055_24088 = G__24100;
i__24056_24089 = G__24101;
continue;
} else {
var req_24102 = cljs.core.first.call(null,seq__24053_24096__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24102,prov);

var G__24103 = cljs.core.next.call(null,seq__24053_24096__$1);
var G__24104 = null;
var G__24105 = (0);
var G__24106 = (0);
seq__24053_24086 = G__24103;
chunk__24054_24087 = G__24104;
count__24055_24088 = G__24105;
i__24056_24089 = G__24106;
continue;
}
} else {
}
}
break;
}

var G__24107 = cljs.core.next.call(null,seq__24045__$1);
var G__24108 = null;
var G__24109 = (0);
var G__24110 = (0);
seq__24045 = G__24107;
chunk__24046 = G__24108;
count__24047 = G__24109;
i__24048 = G__24110;
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
var seq__24115_24119 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24116_24120 = null;
var count__24117_24121 = (0);
var i__24118_24122 = (0);
while(true){
if((i__24118_24122 < count__24117_24121)){
var ns_24123 = cljs.core._nth.call(null,chunk__24116_24120,i__24118_24122);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24123);

var G__24124 = seq__24115_24119;
var G__24125 = chunk__24116_24120;
var G__24126 = count__24117_24121;
var G__24127 = (i__24118_24122 + (1));
seq__24115_24119 = G__24124;
chunk__24116_24120 = G__24125;
count__24117_24121 = G__24126;
i__24118_24122 = G__24127;
continue;
} else {
var temp__4425__auto___24128 = cljs.core.seq.call(null,seq__24115_24119);
if(temp__4425__auto___24128){
var seq__24115_24129__$1 = temp__4425__auto___24128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24115_24129__$1)){
var c__19094__auto___24130 = cljs.core.chunk_first.call(null,seq__24115_24129__$1);
var G__24131 = cljs.core.chunk_rest.call(null,seq__24115_24129__$1);
var G__24132 = c__19094__auto___24130;
var G__24133 = cljs.core.count.call(null,c__19094__auto___24130);
var G__24134 = (0);
seq__24115_24119 = G__24131;
chunk__24116_24120 = G__24132;
count__24117_24121 = G__24133;
i__24118_24122 = G__24134;
continue;
} else {
var ns_24135 = cljs.core.first.call(null,seq__24115_24129__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24135);

var G__24136 = cljs.core.next.call(null,seq__24115_24129__$1);
var G__24137 = null;
var G__24138 = (0);
var G__24139 = (0);
seq__24115_24119 = G__24136;
chunk__24116_24120 = G__24137;
count__24117_24121 = G__24138;
i__24118_24122 = G__24139;
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
goog.require_figwheel_backup_ = (function (){var or__18291__auto__ = goog.require__;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
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
var G__24140__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24141__i = 0, G__24141__a = new Array(arguments.length -  0);
while (G__24141__i < G__24141__a.length) {G__24141__a[G__24141__i] = arguments[G__24141__i + 0]; ++G__24141__i;}
  args = new cljs.core.IndexedSeq(G__24141__a,0);
} 
return G__24140__delegate.call(this,args);};
G__24140.cljs$lang$maxFixedArity = 0;
G__24140.cljs$lang$applyTo = (function (arglist__24142){
var args = cljs.core.seq(arglist__24142);
return G__24140__delegate(args);
});
G__24140.cljs$core$IFn$_invoke$arity$variadic = G__24140__delegate;
return G__24140;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24144 = cljs.core._EQ_;
var expr__24145 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24144.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24145))){
var path_parts = ((function (pred__24144,expr__24145){
return (function (p1__24143_SHARP_){
return clojure.string.split.call(null,p1__24143_SHARP_,/[\/\\]/);
});})(pred__24144,expr__24145))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24144,expr__24145){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24147){if((e24147 instanceof Error)){
var e = e24147;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24147;

}
}})());
});
;})(path_parts,sep,root,pred__24144,expr__24145))
} else {
if(cljs.core.truth_(pred__24144.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24145))){
return ((function (pred__24144,expr__24145){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24144,expr__24145){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24144,expr__24145))
);

return deferred.addErrback(((function (deferred,pred__24144,expr__24145){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24144,expr__24145))
);
});
;})(pred__24144,expr__24145))
} else {
return ((function (pred__24144,expr__24145){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24144,expr__24145))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24148,callback){
var map__24151 = p__24148;
var map__24151__$1 = ((((!((map__24151 == null)))?((((map__24151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24151):map__24151);
var file_msg = map__24151__$1;
var request_url = cljs.core.get.call(null,map__24151__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24151,map__24151__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24151,map__24151__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__){
return (function (state_24175){
var state_val_24176 = (state_24175[(1)]);
if((state_val_24176 === (7))){
var inst_24171 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
var statearr_24177_24197 = state_24175__$1;
(statearr_24177_24197[(2)] = inst_24171);

(statearr_24177_24197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (1))){
var state_24175__$1 = state_24175;
var statearr_24178_24198 = state_24175__$1;
(statearr_24178_24198[(2)] = null);

(statearr_24178_24198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (4))){
var inst_24155 = (state_24175[(7)]);
var inst_24155__$1 = (state_24175[(2)]);
var state_24175__$1 = (function (){var statearr_24179 = state_24175;
(statearr_24179[(7)] = inst_24155__$1);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24155__$1)){
var statearr_24180_24199 = state_24175__$1;
(statearr_24180_24199[(1)] = (5));

} else {
var statearr_24181_24200 = state_24175__$1;
(statearr_24181_24200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (6))){
var state_24175__$1 = state_24175;
var statearr_24182_24201 = state_24175__$1;
(statearr_24182_24201[(2)] = null);

(statearr_24182_24201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (3))){
var inst_24173 = (state_24175[(2)]);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24175__$1,inst_24173);
} else {
if((state_val_24176 === (2))){
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24175__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24176 === (11))){
var inst_24167 = (state_24175[(2)]);
var state_24175__$1 = (function (){var statearr_24183 = state_24175;
(statearr_24183[(8)] = inst_24167);

return statearr_24183;
})();
var statearr_24184_24202 = state_24175__$1;
(statearr_24184_24202[(2)] = null);

(statearr_24184_24202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (9))){
var inst_24159 = (state_24175[(9)]);
var inst_24161 = (state_24175[(10)]);
var inst_24163 = inst_24161.call(null,inst_24159);
var state_24175__$1 = state_24175;
var statearr_24185_24203 = state_24175__$1;
(statearr_24185_24203[(2)] = inst_24163);

(statearr_24185_24203[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (5))){
var inst_24155 = (state_24175[(7)]);
var inst_24157 = figwheel.client.file_reloading.blocking_load.call(null,inst_24155);
var state_24175__$1 = state_24175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24175__$1,(8),inst_24157);
} else {
if((state_val_24176 === (10))){
var inst_24159 = (state_24175[(9)]);
var inst_24165 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24159);
var state_24175__$1 = state_24175;
var statearr_24186_24204 = state_24175__$1;
(statearr_24186_24204[(2)] = inst_24165);

(statearr_24186_24204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24176 === (8))){
var inst_24155 = (state_24175[(7)]);
var inst_24161 = (state_24175[(10)]);
var inst_24159 = (state_24175[(2)]);
var inst_24160 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24161__$1 = cljs.core.get.call(null,inst_24160,inst_24155);
var state_24175__$1 = (function (){var statearr_24187 = state_24175;
(statearr_24187[(9)] = inst_24159);

(statearr_24187[(10)] = inst_24161__$1);

return statearr_24187;
})();
if(cljs.core.truth_(inst_24161__$1)){
var statearr_24188_24205 = state_24175__$1;
(statearr_24188_24205[(1)] = (9));

} else {
var statearr_24189_24206 = state_24175__$1;
(statearr_24189_24206[(1)] = (10));

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
});})(c__20458__auto__))
;
return ((function (switch__20346__auto__,c__20458__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20347__auto__ = null;
var figwheel$client$file_reloading$state_machine__20347__auto____0 = (function (){
var statearr_24193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24193[(0)] = figwheel$client$file_reloading$state_machine__20347__auto__);

(statearr_24193[(1)] = (1));

return statearr_24193;
});
var figwheel$client$file_reloading$state_machine__20347__auto____1 = (function (state_24175){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_24175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e24194){if((e24194 instanceof Object)){
var ex__20350__auto__ = e24194;
var statearr_24195_24207 = state_24175;
(statearr_24195_24207[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24208 = state_24175;
state_24175 = G__24208;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20347__auto__ = function(state_24175){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20347__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20347__auto____1.call(this,state_24175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20347__auto____0;
figwheel$client$file_reloading$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20347__auto____1;
return figwheel$client$file_reloading$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__))
})();
var state__20460__auto__ = (function (){var statearr_24196 = f__20459__auto__.call(null);
(statearr_24196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_24196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__))
);

return c__20458__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24209,callback){
var map__24212 = p__24209;
var map__24212__$1 = ((((!((map__24212 == null)))?((((map__24212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24212):map__24212);
var file_msg = map__24212__$1;
var namespace = cljs.core.get.call(null,map__24212__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24212,map__24212__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24212,map__24212__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24214){
var map__24217 = p__24214;
var map__24217__$1 = ((((!((map__24217 == null)))?((((map__24217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24217):map__24217);
var file_msg = map__24217__$1;
var namespace = cljs.core.get.call(null,map__24217__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18279__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18279__auto__){
var or__18291__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
var or__18291__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18291__auto____$1)){
return or__18291__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18279__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24219,callback){
var map__24222 = p__24219;
var map__24222__$1 = ((((!((map__24222 == null)))?((((map__24222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24222):map__24222);
var file_msg = map__24222__$1;
var request_url = cljs.core.get.call(null,map__24222__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20458__auto___24310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___24310,out){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___24310,out){
return (function (state_24292){
var state_val_24293 = (state_24292[(1)]);
if((state_val_24293 === (1))){
var inst_24270 = cljs.core.nth.call(null,files,(0),null);
var inst_24271 = cljs.core.nthnext.call(null,files,(1));
var inst_24272 = files;
var state_24292__$1 = (function (){var statearr_24294 = state_24292;
(statearr_24294[(7)] = inst_24272);

(statearr_24294[(8)] = inst_24271);

(statearr_24294[(9)] = inst_24270);

return statearr_24294;
})();
var statearr_24295_24311 = state_24292__$1;
(statearr_24295_24311[(2)] = null);

(statearr_24295_24311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (2))){
var inst_24275 = (state_24292[(10)]);
var inst_24272 = (state_24292[(7)]);
var inst_24275__$1 = cljs.core.nth.call(null,inst_24272,(0),null);
var inst_24276 = cljs.core.nthnext.call(null,inst_24272,(1));
var inst_24277 = (inst_24275__$1 == null);
var inst_24278 = cljs.core.not.call(null,inst_24277);
var state_24292__$1 = (function (){var statearr_24296 = state_24292;
(statearr_24296[(10)] = inst_24275__$1);

(statearr_24296[(11)] = inst_24276);

return statearr_24296;
})();
if(inst_24278){
var statearr_24297_24312 = state_24292__$1;
(statearr_24297_24312[(1)] = (4));

} else {
var statearr_24298_24313 = state_24292__$1;
(statearr_24298_24313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (3))){
var inst_24290 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24292__$1,inst_24290);
} else {
if((state_val_24293 === (4))){
var inst_24275 = (state_24292[(10)]);
var inst_24280 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24275);
var state_24292__$1 = state_24292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24292__$1,(7),inst_24280);
} else {
if((state_val_24293 === (5))){
var inst_24286 = cljs.core.async.close_BANG_.call(null,out);
var state_24292__$1 = state_24292;
var statearr_24299_24314 = state_24292__$1;
(statearr_24299_24314[(2)] = inst_24286);

(statearr_24299_24314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (6))){
var inst_24288 = (state_24292[(2)]);
var state_24292__$1 = state_24292;
var statearr_24300_24315 = state_24292__$1;
(statearr_24300_24315[(2)] = inst_24288);

(statearr_24300_24315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24293 === (7))){
var inst_24276 = (state_24292[(11)]);
var inst_24282 = (state_24292[(2)]);
var inst_24283 = cljs.core.async.put_BANG_.call(null,out,inst_24282);
var inst_24272 = inst_24276;
var state_24292__$1 = (function (){var statearr_24301 = state_24292;
(statearr_24301[(7)] = inst_24272);

(statearr_24301[(12)] = inst_24283);

return statearr_24301;
})();
var statearr_24302_24316 = state_24292__$1;
(statearr_24302_24316[(2)] = null);

(statearr_24302_24316[(1)] = (2));


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
});})(c__20458__auto___24310,out))
;
return ((function (switch__20346__auto__,c__20458__auto___24310,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto____0 = (function (){
var statearr_24306 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24306[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto__);

(statearr_24306[(1)] = (1));

return statearr_24306;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto____1 = (function (state_24292){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_24292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e24307){if((e24307 instanceof Object)){
var ex__20350__auto__ = e24307;
var statearr_24308_24317 = state_24292;
(statearr_24308_24317[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24318 = state_24292;
state_24292 = G__24318;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto__ = function(state_24292){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto____1.call(this,state_24292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___24310,out))
})();
var state__20460__auto__ = (function (){var statearr_24309 = f__20459__auto__.call(null);
(statearr_24309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___24310);

return statearr_24309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___24310,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24319,opts){
var map__24323 = p__24319;
var map__24323__$1 = ((((!((map__24323 == null)))?((((map__24323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24323):map__24323);
var eval_body__$1 = cljs.core.get.call(null,map__24323__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24323__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18279__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18279__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18279__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24325){var e = e24325;
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
return (function (p1__24326_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24326_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__24331){
var vec__24332 = p__24331;
var k = cljs.core.nth.call(null,vec__24332,(0),null);
var v = cljs.core.nth.call(null,vec__24332,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24333){
var vec__24334 = p__24333;
var k = cljs.core.nth.call(null,vec__24334,(0),null);
var v = cljs.core.nth.call(null,vec__24334,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24338,p__24339){
var map__24586 = p__24338;
var map__24586__$1 = ((((!((map__24586 == null)))?((((map__24586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24586):map__24586);
var opts = map__24586__$1;
var before_jsload = cljs.core.get.call(null,map__24586__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24586__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24586__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24587 = p__24339;
var map__24587__$1 = ((((!((map__24587 == null)))?((((map__24587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24587):map__24587);
var msg = map__24587__$1;
var files = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24587__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24740){
var state_val_24741 = (state_24740[(1)]);
if((state_val_24741 === (7))){
var inst_24601 = (state_24740[(7)]);
var inst_24602 = (state_24740[(8)]);
var inst_24604 = (state_24740[(9)]);
var inst_24603 = (state_24740[(10)]);
var inst_24609 = cljs.core._nth.call(null,inst_24602,inst_24604);
var inst_24610 = figwheel.client.file_reloading.eval_body.call(null,inst_24609,opts);
var inst_24611 = (inst_24604 + (1));
var tmp24742 = inst_24601;
var tmp24743 = inst_24602;
var tmp24744 = inst_24603;
var inst_24601__$1 = tmp24742;
var inst_24602__$1 = tmp24743;
var inst_24603__$1 = tmp24744;
var inst_24604__$1 = inst_24611;
var state_24740__$1 = (function (){var statearr_24745 = state_24740;
(statearr_24745[(7)] = inst_24601__$1);

(statearr_24745[(8)] = inst_24602__$1);

(statearr_24745[(9)] = inst_24604__$1);

(statearr_24745[(10)] = inst_24603__$1);

(statearr_24745[(11)] = inst_24610);

return statearr_24745;
})();
var statearr_24746_24832 = state_24740__$1;
(statearr_24746_24832[(2)] = null);

(statearr_24746_24832[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (20))){
var inst_24644 = (state_24740[(12)]);
var inst_24652 = figwheel.client.file_reloading.sort_files.call(null,inst_24644);
var state_24740__$1 = state_24740;
var statearr_24747_24833 = state_24740__$1;
(statearr_24747_24833[(2)] = inst_24652);

(statearr_24747_24833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (27))){
var state_24740__$1 = state_24740;
var statearr_24748_24834 = state_24740__$1;
(statearr_24748_24834[(2)] = null);

(statearr_24748_24834[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (1))){
var inst_24593 = (state_24740[(13)]);
var inst_24590 = before_jsload.call(null,files);
var inst_24591 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24592 = (function (){return ((function (inst_24593,inst_24590,inst_24591,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24335_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24335_SHARP_);
});
;})(inst_24593,inst_24590,inst_24591,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24593__$1 = cljs.core.filter.call(null,inst_24592,files);
var inst_24594 = cljs.core.not_empty.call(null,inst_24593__$1);
var state_24740__$1 = (function (){var statearr_24749 = state_24740;
(statearr_24749[(14)] = inst_24590);

(statearr_24749[(15)] = inst_24591);

(statearr_24749[(13)] = inst_24593__$1);

return statearr_24749;
})();
if(cljs.core.truth_(inst_24594)){
var statearr_24750_24835 = state_24740__$1;
(statearr_24750_24835[(1)] = (2));

} else {
var statearr_24751_24836 = state_24740__$1;
(statearr_24751_24836[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (24))){
var state_24740__$1 = state_24740;
var statearr_24752_24837 = state_24740__$1;
(statearr_24752_24837[(2)] = null);

(statearr_24752_24837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (39))){
var inst_24694 = (state_24740[(16)]);
var state_24740__$1 = state_24740;
var statearr_24753_24838 = state_24740__$1;
(statearr_24753_24838[(2)] = inst_24694);

(statearr_24753_24838[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (46))){
var inst_24735 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24754_24839 = state_24740__$1;
(statearr_24754_24839[(2)] = inst_24735);

(statearr_24754_24839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (4))){
var inst_24638 = (state_24740[(2)]);
var inst_24639 = cljs.core.List.EMPTY;
var inst_24640 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24639);
var inst_24641 = (function (){return ((function (inst_24638,inst_24639,inst_24640,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24336_SHARP_){
var and__18279__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24336_SHARP_);
if(cljs.core.truth_(and__18279__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24336_SHARP_));
} else {
return and__18279__auto__;
}
});
;})(inst_24638,inst_24639,inst_24640,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24642 = cljs.core.filter.call(null,inst_24641,files);
var inst_24643 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24644 = cljs.core.concat.call(null,inst_24642,inst_24643);
var state_24740__$1 = (function (){var statearr_24755 = state_24740;
(statearr_24755[(17)] = inst_24640);

(statearr_24755[(18)] = inst_24638);

(statearr_24755[(12)] = inst_24644);

return statearr_24755;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24756_24840 = state_24740__$1;
(statearr_24756_24840[(1)] = (16));

} else {
var statearr_24757_24841 = state_24740__$1;
(statearr_24757_24841[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (15))){
var inst_24628 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24758_24842 = state_24740__$1;
(statearr_24758_24842[(2)] = inst_24628);

(statearr_24758_24842[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (21))){
var inst_24654 = (state_24740[(19)]);
var inst_24654__$1 = (state_24740[(2)]);
var inst_24655 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24654__$1);
var state_24740__$1 = (function (){var statearr_24759 = state_24740;
(statearr_24759[(19)] = inst_24654__$1);

return statearr_24759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24740__$1,(22),inst_24655);
} else {
if((state_val_24741 === (31))){
var inst_24738 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24740__$1,inst_24738);
} else {
if((state_val_24741 === (32))){
var inst_24694 = (state_24740[(16)]);
var inst_24699 = inst_24694.cljs$lang$protocol_mask$partition0$;
var inst_24700 = (inst_24699 & (64));
var inst_24701 = inst_24694.cljs$core$ISeq$;
var inst_24702 = (inst_24700) || (inst_24701);
var state_24740__$1 = state_24740;
if(cljs.core.truth_(inst_24702)){
var statearr_24760_24843 = state_24740__$1;
(statearr_24760_24843[(1)] = (35));

} else {
var statearr_24761_24844 = state_24740__$1;
(statearr_24761_24844[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (40))){
var inst_24715 = (state_24740[(20)]);
var inst_24714 = (state_24740[(2)]);
var inst_24715__$1 = cljs.core.get.call(null,inst_24714,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24716 = cljs.core.get.call(null,inst_24714,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24717 = cljs.core.not_empty.call(null,inst_24715__$1);
var state_24740__$1 = (function (){var statearr_24762 = state_24740;
(statearr_24762[(21)] = inst_24716);

(statearr_24762[(20)] = inst_24715__$1);

return statearr_24762;
})();
if(cljs.core.truth_(inst_24717)){
var statearr_24763_24845 = state_24740__$1;
(statearr_24763_24845[(1)] = (41));

} else {
var statearr_24764_24846 = state_24740__$1;
(statearr_24764_24846[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (33))){
var state_24740__$1 = state_24740;
var statearr_24765_24847 = state_24740__$1;
(statearr_24765_24847[(2)] = false);

(statearr_24765_24847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (13))){
var inst_24614 = (state_24740[(22)]);
var inst_24618 = cljs.core.chunk_first.call(null,inst_24614);
var inst_24619 = cljs.core.chunk_rest.call(null,inst_24614);
var inst_24620 = cljs.core.count.call(null,inst_24618);
var inst_24601 = inst_24619;
var inst_24602 = inst_24618;
var inst_24603 = inst_24620;
var inst_24604 = (0);
var state_24740__$1 = (function (){var statearr_24766 = state_24740;
(statearr_24766[(7)] = inst_24601);

(statearr_24766[(8)] = inst_24602);

(statearr_24766[(9)] = inst_24604);

(statearr_24766[(10)] = inst_24603);

return statearr_24766;
})();
var statearr_24767_24848 = state_24740__$1;
(statearr_24767_24848[(2)] = null);

(statearr_24767_24848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (22))){
var inst_24657 = (state_24740[(23)]);
var inst_24654 = (state_24740[(19)]);
var inst_24662 = (state_24740[(24)]);
var inst_24658 = (state_24740[(25)]);
var inst_24657__$1 = (state_24740[(2)]);
var inst_24658__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24657__$1);
var inst_24659 = (function (){var all_files = inst_24654;
var res_SINGLEQUOTE_ = inst_24657__$1;
var res = inst_24658__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24657,inst_24654,inst_24662,inst_24658,inst_24657__$1,inst_24658__$1,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24337_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24337_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24657,inst_24654,inst_24662,inst_24658,inst_24657__$1,inst_24658__$1,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24660 = cljs.core.filter.call(null,inst_24659,inst_24657__$1);
var inst_24661 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24662__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24661);
var inst_24663 = cljs.core.not_empty.call(null,inst_24662__$1);
var state_24740__$1 = (function (){var statearr_24768 = state_24740;
(statearr_24768[(23)] = inst_24657__$1);

(statearr_24768[(26)] = inst_24660);

(statearr_24768[(24)] = inst_24662__$1);

(statearr_24768[(25)] = inst_24658__$1);

return statearr_24768;
})();
if(cljs.core.truth_(inst_24663)){
var statearr_24769_24849 = state_24740__$1;
(statearr_24769_24849[(1)] = (23));

} else {
var statearr_24770_24850 = state_24740__$1;
(statearr_24770_24850[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (36))){
var state_24740__$1 = state_24740;
var statearr_24771_24851 = state_24740__$1;
(statearr_24771_24851[(2)] = false);

(statearr_24771_24851[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (41))){
var inst_24715 = (state_24740[(20)]);
var inst_24719 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24720 = cljs.core.map.call(null,inst_24719,inst_24715);
var inst_24721 = cljs.core.pr_str.call(null,inst_24720);
var inst_24722 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24721)].join('');
var inst_24723 = figwheel.client.utils.log.call(null,inst_24722);
var state_24740__$1 = state_24740;
var statearr_24772_24852 = state_24740__$1;
(statearr_24772_24852[(2)] = inst_24723);

(statearr_24772_24852[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (43))){
var inst_24716 = (state_24740[(21)]);
var inst_24726 = (state_24740[(2)]);
var inst_24727 = cljs.core.not_empty.call(null,inst_24716);
var state_24740__$1 = (function (){var statearr_24773 = state_24740;
(statearr_24773[(27)] = inst_24726);

return statearr_24773;
})();
if(cljs.core.truth_(inst_24727)){
var statearr_24774_24853 = state_24740__$1;
(statearr_24774_24853[(1)] = (44));

} else {
var statearr_24775_24854 = state_24740__$1;
(statearr_24775_24854[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (29))){
var inst_24657 = (state_24740[(23)]);
var inst_24654 = (state_24740[(19)]);
var inst_24660 = (state_24740[(26)]);
var inst_24662 = (state_24740[(24)]);
var inst_24694 = (state_24740[(16)]);
var inst_24658 = (state_24740[(25)]);
var inst_24690 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24693 = (function (){var all_files = inst_24654;
var res_SINGLEQUOTE_ = inst_24657;
var res = inst_24658;
var files_not_loaded = inst_24660;
var dependencies_that_loaded = inst_24662;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24657,inst_24654,inst_24660,inst_24662,inst_24694,inst_24658,inst_24690,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24692){
var map__24776 = p__24692;
var map__24776__$1 = ((((!((map__24776 == null)))?((((map__24776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24776):map__24776);
var namespace = cljs.core.get.call(null,map__24776__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24657,inst_24654,inst_24660,inst_24662,inst_24694,inst_24658,inst_24690,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24694__$1 = cljs.core.group_by.call(null,inst_24693,inst_24660);
var inst_24696 = (inst_24694__$1 == null);
var inst_24697 = cljs.core.not.call(null,inst_24696);
var state_24740__$1 = (function (){var statearr_24778 = state_24740;
(statearr_24778[(28)] = inst_24690);

(statearr_24778[(16)] = inst_24694__$1);

return statearr_24778;
})();
if(inst_24697){
var statearr_24779_24855 = state_24740__$1;
(statearr_24779_24855[(1)] = (32));

} else {
var statearr_24780_24856 = state_24740__$1;
(statearr_24780_24856[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (44))){
var inst_24716 = (state_24740[(21)]);
var inst_24729 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24716);
var inst_24730 = cljs.core.pr_str.call(null,inst_24729);
var inst_24731 = [cljs.core.str("not required: "),cljs.core.str(inst_24730)].join('');
var inst_24732 = figwheel.client.utils.log.call(null,inst_24731);
var state_24740__$1 = state_24740;
var statearr_24781_24857 = state_24740__$1;
(statearr_24781_24857[(2)] = inst_24732);

(statearr_24781_24857[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (6))){
var inst_24635 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24782_24858 = state_24740__$1;
(statearr_24782_24858[(2)] = inst_24635);

(statearr_24782_24858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (28))){
var inst_24660 = (state_24740[(26)]);
var inst_24687 = (state_24740[(2)]);
var inst_24688 = cljs.core.not_empty.call(null,inst_24660);
var state_24740__$1 = (function (){var statearr_24783 = state_24740;
(statearr_24783[(29)] = inst_24687);

return statearr_24783;
})();
if(cljs.core.truth_(inst_24688)){
var statearr_24784_24859 = state_24740__$1;
(statearr_24784_24859[(1)] = (29));

} else {
var statearr_24785_24860 = state_24740__$1;
(statearr_24785_24860[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (25))){
var inst_24658 = (state_24740[(25)]);
var inst_24674 = (state_24740[(2)]);
var inst_24675 = cljs.core.not_empty.call(null,inst_24658);
var state_24740__$1 = (function (){var statearr_24786 = state_24740;
(statearr_24786[(30)] = inst_24674);

return statearr_24786;
})();
if(cljs.core.truth_(inst_24675)){
var statearr_24787_24861 = state_24740__$1;
(statearr_24787_24861[(1)] = (26));

} else {
var statearr_24788_24862 = state_24740__$1;
(statearr_24788_24862[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (34))){
var inst_24709 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
if(cljs.core.truth_(inst_24709)){
var statearr_24789_24863 = state_24740__$1;
(statearr_24789_24863[(1)] = (38));

} else {
var statearr_24790_24864 = state_24740__$1;
(statearr_24790_24864[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (17))){
var state_24740__$1 = state_24740;
var statearr_24791_24865 = state_24740__$1;
(statearr_24791_24865[(2)] = recompile_dependents);

(statearr_24791_24865[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (3))){
var state_24740__$1 = state_24740;
var statearr_24792_24866 = state_24740__$1;
(statearr_24792_24866[(2)] = null);

(statearr_24792_24866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (12))){
var inst_24631 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24793_24867 = state_24740__$1;
(statearr_24793_24867[(2)] = inst_24631);

(statearr_24793_24867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (2))){
var inst_24593 = (state_24740[(13)]);
var inst_24600 = cljs.core.seq.call(null,inst_24593);
var inst_24601 = inst_24600;
var inst_24602 = null;
var inst_24603 = (0);
var inst_24604 = (0);
var state_24740__$1 = (function (){var statearr_24794 = state_24740;
(statearr_24794[(7)] = inst_24601);

(statearr_24794[(8)] = inst_24602);

(statearr_24794[(9)] = inst_24604);

(statearr_24794[(10)] = inst_24603);

return statearr_24794;
})();
var statearr_24795_24868 = state_24740__$1;
(statearr_24795_24868[(2)] = null);

(statearr_24795_24868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (23))){
var inst_24657 = (state_24740[(23)]);
var inst_24654 = (state_24740[(19)]);
var inst_24660 = (state_24740[(26)]);
var inst_24662 = (state_24740[(24)]);
var inst_24658 = (state_24740[(25)]);
var inst_24665 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24667 = (function (){var all_files = inst_24654;
var res_SINGLEQUOTE_ = inst_24657;
var res = inst_24658;
var files_not_loaded = inst_24660;
var dependencies_that_loaded = inst_24662;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24657,inst_24654,inst_24660,inst_24662,inst_24658,inst_24665,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24666){
var map__24796 = p__24666;
var map__24796__$1 = ((((!((map__24796 == null)))?((((map__24796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24796):map__24796);
var request_url = cljs.core.get.call(null,map__24796__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24657,inst_24654,inst_24660,inst_24662,inst_24658,inst_24665,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24668 = cljs.core.reverse.call(null,inst_24662);
var inst_24669 = cljs.core.map.call(null,inst_24667,inst_24668);
var inst_24670 = cljs.core.pr_str.call(null,inst_24669);
var inst_24671 = figwheel.client.utils.log.call(null,inst_24670);
var state_24740__$1 = (function (){var statearr_24798 = state_24740;
(statearr_24798[(31)] = inst_24665);

return statearr_24798;
})();
var statearr_24799_24869 = state_24740__$1;
(statearr_24799_24869[(2)] = inst_24671);

(statearr_24799_24869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (35))){
var state_24740__$1 = state_24740;
var statearr_24800_24870 = state_24740__$1;
(statearr_24800_24870[(2)] = true);

(statearr_24800_24870[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (19))){
var inst_24644 = (state_24740[(12)]);
var inst_24650 = figwheel.client.file_reloading.expand_files.call(null,inst_24644);
var state_24740__$1 = state_24740;
var statearr_24801_24871 = state_24740__$1;
(statearr_24801_24871[(2)] = inst_24650);

(statearr_24801_24871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (11))){
var state_24740__$1 = state_24740;
var statearr_24802_24872 = state_24740__$1;
(statearr_24802_24872[(2)] = null);

(statearr_24802_24872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (9))){
var inst_24633 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24803_24873 = state_24740__$1;
(statearr_24803_24873[(2)] = inst_24633);

(statearr_24803_24873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (5))){
var inst_24604 = (state_24740[(9)]);
var inst_24603 = (state_24740[(10)]);
var inst_24606 = (inst_24604 < inst_24603);
var inst_24607 = inst_24606;
var state_24740__$1 = state_24740;
if(cljs.core.truth_(inst_24607)){
var statearr_24804_24874 = state_24740__$1;
(statearr_24804_24874[(1)] = (7));

} else {
var statearr_24805_24875 = state_24740__$1;
(statearr_24805_24875[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (14))){
var inst_24614 = (state_24740[(22)]);
var inst_24623 = cljs.core.first.call(null,inst_24614);
var inst_24624 = figwheel.client.file_reloading.eval_body.call(null,inst_24623,opts);
var inst_24625 = cljs.core.next.call(null,inst_24614);
var inst_24601 = inst_24625;
var inst_24602 = null;
var inst_24603 = (0);
var inst_24604 = (0);
var state_24740__$1 = (function (){var statearr_24806 = state_24740;
(statearr_24806[(7)] = inst_24601);

(statearr_24806[(8)] = inst_24602);

(statearr_24806[(9)] = inst_24604);

(statearr_24806[(32)] = inst_24624);

(statearr_24806[(10)] = inst_24603);

return statearr_24806;
})();
var statearr_24807_24876 = state_24740__$1;
(statearr_24807_24876[(2)] = null);

(statearr_24807_24876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (45))){
var state_24740__$1 = state_24740;
var statearr_24808_24877 = state_24740__$1;
(statearr_24808_24877[(2)] = null);

(statearr_24808_24877[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (26))){
var inst_24657 = (state_24740[(23)]);
var inst_24654 = (state_24740[(19)]);
var inst_24660 = (state_24740[(26)]);
var inst_24662 = (state_24740[(24)]);
var inst_24658 = (state_24740[(25)]);
var inst_24677 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24679 = (function (){var all_files = inst_24654;
var res_SINGLEQUOTE_ = inst_24657;
var res = inst_24658;
var files_not_loaded = inst_24660;
var dependencies_that_loaded = inst_24662;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24657,inst_24654,inst_24660,inst_24662,inst_24658,inst_24677,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24678){
var map__24809 = p__24678;
var map__24809__$1 = ((((!((map__24809 == null)))?((((map__24809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24809):map__24809);
var namespace = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24809__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24657,inst_24654,inst_24660,inst_24662,inst_24658,inst_24677,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24680 = cljs.core.map.call(null,inst_24679,inst_24658);
var inst_24681 = cljs.core.pr_str.call(null,inst_24680);
var inst_24682 = figwheel.client.utils.log.call(null,inst_24681);
var inst_24683 = (function (){var all_files = inst_24654;
var res_SINGLEQUOTE_ = inst_24657;
var res = inst_24658;
var files_not_loaded = inst_24660;
var dependencies_that_loaded = inst_24662;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24657,inst_24654,inst_24660,inst_24662,inst_24658,inst_24677,inst_24679,inst_24680,inst_24681,inst_24682,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24657,inst_24654,inst_24660,inst_24662,inst_24658,inst_24677,inst_24679,inst_24680,inst_24681,inst_24682,state_val_24741,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24684 = setTimeout(inst_24683,(10));
var state_24740__$1 = (function (){var statearr_24811 = state_24740;
(statearr_24811[(33)] = inst_24682);

(statearr_24811[(34)] = inst_24677);

return statearr_24811;
})();
var statearr_24812_24878 = state_24740__$1;
(statearr_24812_24878[(2)] = inst_24684);

(statearr_24812_24878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (16))){
var state_24740__$1 = state_24740;
var statearr_24813_24879 = state_24740__$1;
(statearr_24813_24879[(2)] = reload_dependents);

(statearr_24813_24879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (38))){
var inst_24694 = (state_24740[(16)]);
var inst_24711 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24694);
var state_24740__$1 = state_24740;
var statearr_24814_24880 = state_24740__$1;
(statearr_24814_24880[(2)] = inst_24711);

(statearr_24814_24880[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (30))){
var state_24740__$1 = state_24740;
var statearr_24815_24881 = state_24740__$1;
(statearr_24815_24881[(2)] = null);

(statearr_24815_24881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (10))){
var inst_24614 = (state_24740[(22)]);
var inst_24616 = cljs.core.chunked_seq_QMARK_.call(null,inst_24614);
var state_24740__$1 = state_24740;
if(inst_24616){
var statearr_24816_24882 = state_24740__$1;
(statearr_24816_24882[(1)] = (13));

} else {
var statearr_24817_24883 = state_24740__$1;
(statearr_24817_24883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (18))){
var inst_24648 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
if(cljs.core.truth_(inst_24648)){
var statearr_24818_24884 = state_24740__$1;
(statearr_24818_24884[(1)] = (19));

} else {
var statearr_24819_24885 = state_24740__$1;
(statearr_24819_24885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (42))){
var state_24740__$1 = state_24740;
var statearr_24820_24886 = state_24740__$1;
(statearr_24820_24886[(2)] = null);

(statearr_24820_24886[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (37))){
var inst_24706 = (state_24740[(2)]);
var state_24740__$1 = state_24740;
var statearr_24821_24887 = state_24740__$1;
(statearr_24821_24887[(2)] = inst_24706);

(statearr_24821_24887[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24741 === (8))){
var inst_24601 = (state_24740[(7)]);
var inst_24614 = (state_24740[(22)]);
var inst_24614__$1 = cljs.core.seq.call(null,inst_24601);
var state_24740__$1 = (function (){var statearr_24822 = state_24740;
(statearr_24822[(22)] = inst_24614__$1);

return statearr_24822;
})();
if(inst_24614__$1){
var statearr_24823_24888 = state_24740__$1;
(statearr_24823_24888[(1)] = (10));

} else {
var statearr_24824_24889 = state_24740__$1;
(statearr_24824_24889[(1)] = (11));

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
});})(c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20346__auto__,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto____0 = (function (){
var statearr_24828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24828[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto__);

(statearr_24828[(1)] = (1));

return statearr_24828;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto____1 = (function (state_24740){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_24740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e24829){if((e24829 instanceof Object)){
var ex__20350__auto__ = e24829;
var statearr_24830_24890 = state_24740;
(statearr_24830_24890[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24891 = state_24740;
state_24740 = G__24891;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto__ = function(state_24740){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto____1.call(this,state_24740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20460__auto__ = (function (){var statearr_24831 = f__20459__auto__.call(null);
(statearr_24831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_24831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__,map__24586,map__24586__$1,opts,before_jsload,on_jsload,reload_dependents,map__24587,map__24587__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20458__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24894,link){
var map__24897 = p__24894;
var map__24897__$1 = ((((!((map__24897 == null)))?((((map__24897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24897):map__24897);
var file = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24897,map__24897__$1,file){
return (function (p1__24892_SHARP_,p2__24893_SHARP_){
if(cljs.core._EQ_.call(null,p1__24892_SHARP_,p2__24893_SHARP_)){
return p1__24892_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24897,map__24897__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24903){
var map__24904 = p__24903;
var map__24904__$1 = ((((!((map__24904 == null)))?((((map__24904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24904):map__24904);
var match_length = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24904__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24899_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24899_SHARP_);
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
var args24906 = [];
var len__19349__auto___24909 = arguments.length;
var i__19350__auto___24910 = (0);
while(true){
if((i__19350__auto___24910 < len__19349__auto___24909)){
args24906.push((arguments[i__19350__auto___24910]));

var G__24911 = (i__19350__auto___24910 + (1));
i__19350__auto___24910 = G__24911;
continue;
} else {
}
break;
}

var G__24908 = args24906.length;
switch (G__24908) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24906.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24913_SHARP_,p2__24914_SHARP_){
return cljs.core.assoc.call(null,p1__24913_SHARP_,cljs.core.get.call(null,p2__24914_SHARP_,key),p2__24914_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24915){
var map__24918 = p__24915;
var map__24918__$1 = ((((!((map__24918 == null)))?((((map__24918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24918):map__24918);
var f_data = map__24918__$1;
var file = cljs.core.get.call(null,map__24918__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24920,files_msg){
var map__24927 = p__24920;
var map__24927__$1 = ((((!((map__24927 == null)))?((((map__24927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24927):map__24927);
var opts = map__24927__$1;
var on_cssload = cljs.core.get.call(null,map__24927__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24929_24933 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24930_24934 = null;
var count__24931_24935 = (0);
var i__24932_24936 = (0);
while(true){
if((i__24932_24936 < count__24931_24935)){
var f_24937 = cljs.core._nth.call(null,chunk__24930_24934,i__24932_24936);
figwheel.client.file_reloading.reload_css_file.call(null,f_24937);

var G__24938 = seq__24929_24933;
var G__24939 = chunk__24930_24934;
var G__24940 = count__24931_24935;
var G__24941 = (i__24932_24936 + (1));
seq__24929_24933 = G__24938;
chunk__24930_24934 = G__24939;
count__24931_24935 = G__24940;
i__24932_24936 = G__24941;
continue;
} else {
var temp__4425__auto___24942 = cljs.core.seq.call(null,seq__24929_24933);
if(temp__4425__auto___24942){
var seq__24929_24943__$1 = temp__4425__auto___24942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24929_24943__$1)){
var c__19094__auto___24944 = cljs.core.chunk_first.call(null,seq__24929_24943__$1);
var G__24945 = cljs.core.chunk_rest.call(null,seq__24929_24943__$1);
var G__24946 = c__19094__auto___24944;
var G__24947 = cljs.core.count.call(null,c__19094__auto___24944);
var G__24948 = (0);
seq__24929_24933 = G__24945;
chunk__24930_24934 = G__24946;
count__24931_24935 = G__24947;
i__24932_24936 = G__24948;
continue;
} else {
var f_24949 = cljs.core.first.call(null,seq__24929_24943__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24949);

var G__24950 = cljs.core.next.call(null,seq__24929_24943__$1);
var G__24951 = null;
var G__24952 = (0);
var G__24953 = (0);
seq__24929_24933 = G__24950;
chunk__24930_24934 = G__24951;
count__24931_24935 = G__24952;
i__24932_24936 = G__24953;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24927,map__24927__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24927,map__24927__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1546505761717