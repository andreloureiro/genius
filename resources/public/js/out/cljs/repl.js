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
var seq__44100_44114 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44101_44115 = null;
var count__44102_44116 = (0);
var i__44103_44117 = (0);
while(true){
if((i__44103_44117 < count__44102_44116)){
var f_44118 = cljs.core._nth.call(null,chunk__44101_44115,i__44103_44117);
cljs.core.println.call(null,"  ",f_44118);

var G__44119 = seq__44100_44114;
var G__44120 = chunk__44101_44115;
var G__44121 = count__44102_44116;
var G__44122 = (i__44103_44117 + (1));
seq__44100_44114 = G__44119;
chunk__44101_44115 = G__44120;
count__44102_44116 = G__44121;
i__44103_44117 = G__44122;
continue;
} else {
var temp__4425__auto___44123 = cljs.core.seq.call(null,seq__44100_44114);
if(temp__4425__auto___44123){
var seq__44100_44124__$1 = temp__4425__auto___44123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44100_44124__$1)){
var c__37984__auto___44125 = cljs.core.chunk_first.call(null,seq__44100_44124__$1);
var G__44126 = cljs.core.chunk_rest.call(null,seq__44100_44124__$1);
var G__44127 = c__37984__auto___44125;
var G__44128 = cljs.core.count.call(null,c__37984__auto___44125);
var G__44129 = (0);
seq__44100_44114 = G__44126;
chunk__44101_44115 = G__44127;
count__44102_44116 = G__44128;
i__44103_44117 = G__44129;
continue;
} else {
var f_44130 = cljs.core.first.call(null,seq__44100_44124__$1);
cljs.core.println.call(null,"  ",f_44130);

var G__44131 = cljs.core.next.call(null,seq__44100_44124__$1);
var G__44132 = null;
var G__44133 = (0);
var G__44134 = (0);
seq__44100_44114 = G__44131;
chunk__44101_44115 = G__44132;
count__44102_44116 = G__44133;
i__44103_44117 = G__44134;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44135 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__37181__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44135);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44135)))?cljs.core.second.call(null,arglists_44135):arglists_44135));
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
var seq__44104 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44105 = null;
var count__44106 = (0);
var i__44107 = (0);
while(true){
if((i__44107 < count__44106)){
var vec__44108 = cljs.core._nth.call(null,chunk__44105,i__44107);
var name = cljs.core.nth.call(null,vec__44108,(0),null);
var map__44109 = cljs.core.nth.call(null,vec__44108,(1),null);
var map__44109__$1 = ((((!((map__44109 == null)))?((((map__44109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44109):map__44109);
var doc = cljs.core.get.call(null,map__44109__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__44109__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__44136 = seq__44104;
var G__44137 = chunk__44105;
var G__44138 = count__44106;
var G__44139 = (i__44107 + (1));
seq__44104 = G__44136;
chunk__44105 = G__44137;
count__44106 = G__44138;
i__44107 = G__44139;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__44104);
if(temp__4425__auto__){
var seq__44104__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44104__$1)){
var c__37984__auto__ = cljs.core.chunk_first.call(null,seq__44104__$1);
var G__44140 = cljs.core.chunk_rest.call(null,seq__44104__$1);
var G__44141 = c__37984__auto__;
var G__44142 = cljs.core.count.call(null,c__37984__auto__);
var G__44143 = (0);
seq__44104 = G__44140;
chunk__44105 = G__44141;
count__44106 = G__44142;
i__44107 = G__44143;
continue;
} else {
var vec__44111 = cljs.core.first.call(null,seq__44104__$1);
var name = cljs.core.nth.call(null,vec__44111,(0),null);
var map__44112 = cljs.core.nth.call(null,vec__44111,(1),null);
var map__44112__$1 = ((((!((map__44112 == null)))?((((map__44112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44112):map__44112);
var doc = cljs.core.get.call(null,map__44112__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__44112__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__44144 = cljs.core.next.call(null,seq__44104__$1);
var G__44145 = null;
var G__44146 = (0);
var G__44147 = (0);
seq__44104 = G__44144;
chunk__44105 = G__44145;
count__44106 = G__44146;
i__44107 = G__44147;
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

//# sourceMappingURL=repl.js.map?rel=1459924597100