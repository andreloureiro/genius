// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25210_25224 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25211_25225 = null;
var count__25212_25226 = (0);
var i__25213_25227 = (0);
while(true){
if((i__25213_25227 < count__25212_25226)){
var f_25228 = cljs.core._nth.call(null,chunk__25211_25225,i__25213_25227);
cljs.core.println.call(null,"  ",f_25228);

var G__25229 = seq__25210_25224;
var G__25230 = chunk__25211_25225;
var G__25231 = count__25212_25226;
var G__25232 = (i__25213_25227 + (1));
seq__25210_25224 = G__25229;
chunk__25211_25225 = G__25230;
count__25212_25226 = G__25231;
i__25213_25227 = G__25232;
continue;
} else {
var temp__4425__auto___25233 = cljs.core.seq.call(null,seq__25210_25224);
if(temp__4425__auto___25233){
var seq__25210_25234__$1 = temp__4425__auto___25233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25210_25234__$1)){
var c__19094__auto___25235 = cljs.core.chunk_first.call(null,seq__25210_25234__$1);
var G__25236 = cljs.core.chunk_rest.call(null,seq__25210_25234__$1);
var G__25237 = c__19094__auto___25235;
var G__25238 = cljs.core.count.call(null,c__19094__auto___25235);
var G__25239 = (0);
seq__25210_25224 = G__25236;
chunk__25211_25225 = G__25237;
count__25212_25226 = G__25238;
i__25213_25227 = G__25239;
continue;
} else {
var f_25240 = cljs.core.first.call(null,seq__25210_25234__$1);
cljs.core.println.call(null,"  ",f_25240);

var G__25241 = cljs.core.next.call(null,seq__25210_25234__$1);
var G__25242 = null;
var G__25243 = (0);
var G__25244 = (0);
seq__25210_25224 = G__25241;
chunk__25211_25225 = G__25242;
count__25212_25226 = G__25243;
i__25213_25227 = G__25244;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25245 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18291__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25245);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25245)))?cljs.core.second.call(null,arglists_25245):arglists_25245));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25214 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25215 = null;
var count__25216 = (0);
var i__25217 = (0);
while(true){
if((i__25217 < count__25216)){
var vec__25218 = cljs.core._nth.call(null,chunk__25215,i__25217);
var name = cljs.core.nth.call(null,vec__25218,(0),null);
var map__25219 = cljs.core.nth.call(null,vec__25218,(1),null);
var map__25219__$1 = ((((!((map__25219 == null)))?((((map__25219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25219):map__25219);
var doc = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25246 = seq__25214;
var G__25247 = chunk__25215;
var G__25248 = count__25216;
var G__25249 = (i__25217 + (1));
seq__25214 = G__25246;
chunk__25215 = G__25247;
count__25216 = G__25248;
i__25217 = G__25249;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25214);
if(temp__4425__auto__){
var seq__25214__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25214__$1)){
var c__19094__auto__ = cljs.core.chunk_first.call(null,seq__25214__$1);
var G__25250 = cljs.core.chunk_rest.call(null,seq__25214__$1);
var G__25251 = c__19094__auto__;
var G__25252 = cljs.core.count.call(null,c__19094__auto__);
var G__25253 = (0);
seq__25214 = G__25250;
chunk__25215 = G__25251;
count__25216 = G__25252;
i__25217 = G__25253;
continue;
} else {
var vec__25221 = cljs.core.first.call(null,seq__25214__$1);
var name = cljs.core.nth.call(null,vec__25221,(0),null);
var map__25222 = cljs.core.nth.call(null,vec__25221,(1),null);
var map__25222__$1 = ((((!((map__25222 == null)))?((((map__25222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25222):map__25222);
var doc = cljs.core.get.call(null,map__25222__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25222__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25254 = cljs.core.next.call(null,seq__25214__$1);
var G__25255 = null;
var G__25256 = (0);
var G__25257 = (0);
seq__25214 = G__25254;
chunk__25215 = G__25255;
count__25216 = G__25256;
i__25217 = G__25257;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1546505762007