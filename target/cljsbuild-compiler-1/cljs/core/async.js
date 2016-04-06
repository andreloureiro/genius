// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13874 = [];
var len__7200__auto___13880 = arguments.length;
var i__7201__auto___13881 = (0);
while(true){
if((i__7201__auto___13881 < len__7200__auto___13880)){
args13874.push((arguments[i__7201__auto___13881]));

var G__13882 = (i__7201__auto___13881 + (1));
i__7201__auto___13881 = G__13882;
continue;
} else {
}
break;
}

var G__13876 = args13874.length;
switch (G__13876) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13874.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13877 = (function (f,blockable,meta13878){
this.f = f;
this.blockable = blockable;
this.meta13878 = meta13878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13879,meta13878__$1){
var self__ = this;
var _13879__$1 = this;
return (new cljs.core.async.t_cljs$core$async13877(self__.f,self__.blockable,meta13878__$1));
});

cljs.core.async.t_cljs$core$async13877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13879){
var self__ = this;
var _13879__$1 = this;
return self__.meta13878;
});

cljs.core.async.t_cljs$core$async13877.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13877.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta13878], null);
});

cljs.core.async.t_cljs$core$async13877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13877";

cljs.core.async.t_cljs$core$async13877.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async13877");
});

cljs.core.async.__GT_t_cljs$core$async13877 = (function cljs$core$async$__GT_t_cljs$core$async13877(f__$1,blockable__$1,meta13878){
return (new cljs.core.async.t_cljs$core$async13877(f__$1,blockable__$1,meta13878));
});

}

return (new cljs.core.async.t_cljs$core$async13877(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13886 = [];
var len__7200__auto___13889 = arguments.length;
var i__7201__auto___13890 = (0);
while(true){
if((i__7201__auto___13890 < len__7200__auto___13889)){
args13886.push((arguments[i__7201__auto___13890]));

var G__13891 = (i__7201__auto___13890 + (1));
i__7201__auto___13890 = G__13891;
continue;
} else {
}
break;
}

var G__13888 = args13886.length;
switch (G__13888) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13886.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13893 = [];
var len__7200__auto___13896 = arguments.length;
var i__7201__auto___13897 = (0);
while(true){
if((i__7201__auto___13897 < len__7200__auto___13896)){
args13893.push((arguments[i__7201__auto___13897]));

var G__13898 = (i__7201__auto___13897 + (1));
i__7201__auto___13897 = G__13898;
continue;
} else {
}
break;
}

var G__13895 = args13893.length;
switch (G__13895) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13893.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13900 = [];
var len__7200__auto___13903 = arguments.length;
var i__7201__auto___13904 = (0);
while(true){
if((i__7201__auto___13904 < len__7200__auto___13903)){
args13900.push((arguments[i__7201__auto___13904]));

var G__13905 = (i__7201__auto___13904 + (1));
i__7201__auto___13904 = G__13905;
continue;
} else {
}
break;
}

var G__13902 = args13900.length;
switch (G__13902) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13900.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_13907 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13907) : fn1.call(null,val_13907));
} else {
cljs.core.async.impl.dispatch.run(((function (val_13907,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_13907) : fn1.call(null,val_13907));
});})(val_13907,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13908 = [];
var len__7200__auto___13911 = arguments.length;
var i__7201__auto___13912 = (0);
while(true){
if((i__7201__auto___13912 < len__7200__auto___13911)){
args13908.push((arguments[i__7201__auto___13912]));

var G__13913 = (i__7201__auto___13912 + (1));
i__7201__auto___13912 = G__13913;
continue;
} else {
}
break;
}

var G__13910 = args13908.length;
switch (G__13910) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13908.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7045__auto___13915 = n;
var x_13916 = (0);
while(true){
if((x_13916 < n__7045__auto___13915)){
(a[x_13916] = (0));

var G__13917 = (x_13916 + (1));
x_13916 = G__13917;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__13918 = (i + (1));
i = G__13918;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async13922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13922 = (function (alt_flag,flag,meta13923){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13923 = meta13923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13924,meta13923__$1){
var self__ = this;
var _13924__$1 = this;
return (new cljs.core.async.t_cljs$core$async13922(self__.alt_flag,self__.flag,meta13923__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13924){
var self__ = this;
var _13924__$1 = this;
return self__.meta13923;
});})(flag))
;

cljs.core.async.t_cljs$core$async13922.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async13922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13922.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta13923], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13922";

cljs.core.async.t_cljs$core$async13922.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async13922");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13922 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13922(alt_flag__$1,flag__$1,meta13923){
return (new cljs.core.async.t_cljs$core$async13922(alt_flag__$1,flag__$1,meta13923));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13922(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13928 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13928 = (function (alt_handler,flag,cb,meta13929){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13929 = meta13929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13930,meta13929__$1){
var self__ = this;
var _13930__$1 = this;
return (new cljs.core.async.t_cljs$core$async13928(self__.alt_handler,self__.flag,self__.cb,meta13929__$1));
});

cljs.core.async.t_cljs$core$async13928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13930){
var self__ = this;
var _13930__$1 = this;
return self__.meta13929;
});

cljs.core.async.t_cljs$core$async13928.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async13928.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta13929], null);
});

cljs.core.async.t_cljs$core$async13928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13928";

cljs.core.async.t_cljs$core$async13928.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async13928");
});

cljs.core.async.__GT_t_cljs$core$async13928 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13928(alt_handler__$1,flag__$1,cb__$1,meta13929){
return (new cljs.core.async.t_cljs$core$async13928(alt_handler__$1,flag__$1,cb__$1,meta13929));
});

}

return (new cljs.core.async.t_cljs$core$async13928(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13931_SHARP_){
var G__13935 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13931_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13935) : fret.call(null,G__13935));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13932_SHARP_){
var G__13936 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13932_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13936) : fret.call(null,G__13936));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6142__auto__ = wport;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13937 = (i + (1));
i = G__13937;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6142__auto__ = ret;
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__6130__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6130__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6130__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___13943 = arguments.length;
var i__7201__auto___13944 = (0);
while(true){
if((i__7201__auto___13944 < len__7200__auto___13943)){
args__7207__auto__.push((arguments[i__7201__auto___13944]));

var G__13945 = (i__7201__auto___13944 + (1));
i__7201__auto___13944 = G__13945;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((1) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7208__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13940){
var map__13941 = p__13940;
var map__13941__$1 = ((((!((map__13941 == null)))?((((map__13941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13941):map__13941);
var opts = map__13941__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13938){
var G__13939 = cljs.core.first(seq13938);
var seq13938__$1 = cljs.core.next(seq13938);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13939,seq13938__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13946 = [];
var len__7200__auto___13996 = arguments.length;
var i__7201__auto___13997 = (0);
while(true){
if((i__7201__auto___13997 < len__7200__auto___13996)){
args13946.push((arguments[i__7201__auto___13997]));

var G__13998 = (i__7201__auto___13997 + (1));
i__7201__auto___13997 = G__13998;
continue;
} else {
}
break;
}

var G__13948 = args13946.length;
switch (G__13948) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13946.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13829__auto___14000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___14000){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___14000){
return (function (state_13972){
var state_val_13973 = (state_13972[(1)]);
if((state_val_13973 === (7))){
var inst_13968 = (state_13972[(2)]);
var state_13972__$1 = state_13972;
var statearr_13974_14001 = state_13972__$1;
(statearr_13974_14001[(2)] = inst_13968);

(statearr_13974_14001[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (1))){
var state_13972__$1 = state_13972;
var statearr_13975_14002 = state_13972__$1;
(statearr_13975_14002[(2)] = null);

(statearr_13975_14002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (4))){
var inst_13951 = (state_13972[(7)]);
var inst_13951__$1 = (state_13972[(2)]);
var inst_13952 = (inst_13951__$1 == null);
var state_13972__$1 = (function (){var statearr_13976 = state_13972;
(statearr_13976[(7)] = inst_13951__$1);

return statearr_13976;
})();
if(cljs.core.truth_(inst_13952)){
var statearr_13977_14003 = state_13972__$1;
(statearr_13977_14003[(1)] = (5));

} else {
var statearr_13978_14004 = state_13972__$1;
(statearr_13978_14004[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (13))){
var state_13972__$1 = state_13972;
var statearr_13979_14005 = state_13972__$1;
(statearr_13979_14005[(2)] = null);

(statearr_13979_14005[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (6))){
var inst_13951 = (state_13972[(7)]);
var state_13972__$1 = state_13972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13972__$1,(11),to,inst_13951);
} else {
if((state_val_13973 === (3))){
var inst_13970 = (state_13972[(2)]);
var state_13972__$1 = state_13972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13972__$1,inst_13970);
} else {
if((state_val_13973 === (12))){
var state_13972__$1 = state_13972;
var statearr_13980_14006 = state_13972__$1;
(statearr_13980_14006[(2)] = null);

(statearr_13980_14006[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (2))){
var state_13972__$1 = state_13972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13972__$1,(4),from);
} else {
if((state_val_13973 === (11))){
var inst_13961 = (state_13972[(2)]);
var state_13972__$1 = state_13972;
if(cljs.core.truth_(inst_13961)){
var statearr_13981_14007 = state_13972__$1;
(statearr_13981_14007[(1)] = (12));

} else {
var statearr_13982_14008 = state_13972__$1;
(statearr_13982_14008[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (9))){
var state_13972__$1 = state_13972;
var statearr_13983_14009 = state_13972__$1;
(statearr_13983_14009[(2)] = null);

(statearr_13983_14009[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (5))){
var state_13972__$1 = state_13972;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13984_14010 = state_13972__$1;
(statearr_13984_14010[(1)] = (8));

} else {
var statearr_13985_14011 = state_13972__$1;
(statearr_13985_14011[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (14))){
var inst_13966 = (state_13972[(2)]);
var state_13972__$1 = state_13972;
var statearr_13986_14012 = state_13972__$1;
(statearr_13986_14012[(2)] = inst_13966);

(statearr_13986_14012[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (10))){
var inst_13958 = (state_13972[(2)]);
var state_13972__$1 = state_13972;
var statearr_13987_14013 = state_13972__$1;
(statearr_13987_14013[(2)] = inst_13958);

(statearr_13987_14013[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13973 === (8))){
var inst_13955 = cljs.core.async.close_BANG_(to);
var state_13972__$1 = state_13972;
var statearr_13988_14014 = state_13972__$1;
(statearr_13988_14014[(2)] = inst_13955);

(statearr_13988_14014[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___14000))
;
return ((function (switch__13715__auto__,c__13829__auto___14000){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_13992 = [null,null,null,null,null,null,null,null];
(statearr_13992[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_13992[(1)] = (1));

return statearr_13992;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_13972){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_13972);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e13993){if((e13993 instanceof Object)){
var ex__13719__auto__ = e13993;
var statearr_13994_14015 = state_13972;
(statearr_13994_14015[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13972);

return cljs.core.cst$kw$recur;
} else {
throw e13993;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14016 = state_13972;
state_13972 = G__14016;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_13972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_13972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___14000))
})();
var state__13831__auto__ = (function (){var statearr_13995 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_13995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___14000);

return statearr_13995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___14000))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__14200){
var vec__14201 = p__14200;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14201,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14201,(1),null);
var job = vec__14201;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13829__auto___14383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___14383,res,vec__14201,v,p,job,jobs,results){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___14383,res,vec__14201,v,p,job,jobs,results){
return (function (state_14206){
var state_val_14207 = (state_14206[(1)]);
if((state_val_14207 === (1))){
var state_14206__$1 = state_14206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14206__$1,(2),res,v);
} else {
if((state_val_14207 === (2))){
var inst_14203 = (state_14206[(2)]);
var inst_14204 = cljs.core.async.close_BANG_(res);
var state_14206__$1 = (function (){var statearr_14208 = state_14206;
(statearr_14208[(7)] = inst_14203);

return statearr_14208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14206__$1,inst_14204);
} else {
return null;
}
}
});})(c__13829__auto___14383,res,vec__14201,v,p,job,jobs,results))
;
return ((function (switch__13715__auto__,c__13829__auto___14383,res,vec__14201,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0 = (function (){
var statearr_14212 = [null,null,null,null,null,null,null,null];
(statearr_14212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__);

(statearr_14212[(1)] = (1));

return statearr_14212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1 = (function (state_14206){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_14206);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e14213){if((e14213 instanceof Object)){
var ex__13719__auto__ = e14213;
var statearr_14214_14384 = state_14206;
(statearr_14214_14384[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14206);

return cljs.core.cst$kw$recur;
} else {
throw e14213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14385 = state_14206;
state_14206 = G__14385;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = function(state_14206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1.call(this,state_14206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___14383,res,vec__14201,v,p,job,jobs,results))
})();
var state__13831__auto__ = (function (){var statearr_14215 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_14215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___14383);

return statearr_14215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___14383,res,vec__14201,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14216){
var vec__14217 = p__14216;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14217,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14217,(1),null);
var job = vec__14217;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7045__auto___14386 = n;
var __14387 = (0);
while(true){
if((__14387 < n__7045__auto___14386)){
var G__14218_14388 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14218_14388) {
case "compute":
var c__13829__auto___14390 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14387,c__13829__auto___14390,G__14218_14388,n__7045__auto___14386,jobs,results,process,async){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (__14387,c__13829__auto___14390,G__14218_14388,n__7045__auto___14386,jobs,results,process,async){
return (function (state_14231){
var state_val_14232 = (state_14231[(1)]);
if((state_val_14232 === (1))){
var state_14231__$1 = state_14231;
var statearr_14233_14391 = state_14231__$1;
(statearr_14233_14391[(2)] = null);

(statearr_14233_14391[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (2))){
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14231__$1,(4),jobs);
} else {
if((state_val_14232 === (3))){
var inst_14229 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14231__$1,inst_14229);
} else {
if((state_val_14232 === (4))){
var inst_14221 = (state_14231[(2)]);
var inst_14222 = process(inst_14221);
var state_14231__$1 = state_14231;
if(cljs.core.truth_(inst_14222)){
var statearr_14234_14392 = state_14231__$1;
(statearr_14234_14392[(1)] = (5));

} else {
var statearr_14235_14393 = state_14231__$1;
(statearr_14235_14393[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (5))){
var state_14231__$1 = state_14231;
var statearr_14236_14394 = state_14231__$1;
(statearr_14236_14394[(2)] = null);

(statearr_14236_14394[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (6))){
var state_14231__$1 = state_14231;
var statearr_14237_14395 = state_14231__$1;
(statearr_14237_14395[(2)] = null);

(statearr_14237_14395[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (7))){
var inst_14227 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
var statearr_14238_14396 = state_14231__$1;
(statearr_14238_14396[(2)] = inst_14227);

(statearr_14238_14396[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14387,c__13829__auto___14390,G__14218_14388,n__7045__auto___14386,jobs,results,process,async))
;
return ((function (__14387,switch__13715__auto__,c__13829__auto___14390,G__14218_14388,n__7045__auto___14386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0 = (function (){
var statearr_14242 = [null,null,null,null,null,null,null];
(statearr_14242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__);

(statearr_14242[(1)] = (1));

return statearr_14242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1 = (function (state_14231){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_14231);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e14243){if((e14243 instanceof Object)){
var ex__13719__auto__ = e14243;
var statearr_14244_14397 = state_14231;
(statearr_14244_14397[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14231);

return cljs.core.cst$kw$recur;
} else {
throw e14243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14398 = state_14231;
state_14231 = G__14398;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = function(state_14231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1.call(this,state_14231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__;
})()
;})(__14387,switch__13715__auto__,c__13829__auto___14390,G__14218_14388,n__7045__auto___14386,jobs,results,process,async))
})();
var state__13831__auto__ = (function (){var statearr_14245 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_14245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___14390);

return statearr_14245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(__14387,c__13829__auto___14390,G__14218_14388,n__7045__auto___14386,jobs,results,process,async))
);


break;
case "async":
var c__13829__auto___14399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14387,c__13829__auto___14399,G__14218_14388,n__7045__auto___14386,jobs,results,process,async){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (__14387,c__13829__auto___14399,G__14218_14388,n__7045__auto___14386,jobs,results,process,async){
return (function (state_14258){
var state_val_14259 = (state_14258[(1)]);
if((state_val_14259 === (1))){
var state_14258__$1 = state_14258;
var statearr_14260_14400 = state_14258__$1;
(statearr_14260_14400[(2)] = null);

(statearr_14260_14400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14259 === (2))){
var state_14258__$1 = state_14258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14258__$1,(4),jobs);
} else {
if((state_val_14259 === (3))){
var inst_14256 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14258__$1,inst_14256);
} else {
if((state_val_14259 === (4))){
var inst_14248 = (state_14258[(2)]);
var inst_14249 = async(inst_14248);
var state_14258__$1 = state_14258;
if(cljs.core.truth_(inst_14249)){
var statearr_14261_14401 = state_14258__$1;
(statearr_14261_14401[(1)] = (5));

} else {
var statearr_14262_14402 = state_14258__$1;
(statearr_14262_14402[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14259 === (5))){
var state_14258__$1 = state_14258;
var statearr_14263_14403 = state_14258__$1;
(statearr_14263_14403[(2)] = null);

(statearr_14263_14403[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14259 === (6))){
var state_14258__$1 = state_14258;
var statearr_14264_14404 = state_14258__$1;
(statearr_14264_14404[(2)] = null);

(statearr_14264_14404[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14259 === (7))){
var inst_14254 = (state_14258[(2)]);
var state_14258__$1 = state_14258;
var statearr_14265_14405 = state_14258__$1;
(statearr_14265_14405[(2)] = inst_14254);

(statearr_14265_14405[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__14387,c__13829__auto___14399,G__14218_14388,n__7045__auto___14386,jobs,results,process,async))
;
return ((function (__14387,switch__13715__auto__,c__13829__auto___14399,G__14218_14388,n__7045__auto___14386,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0 = (function (){
var statearr_14269 = [null,null,null,null,null,null,null];
(statearr_14269[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__);

(statearr_14269[(1)] = (1));

return statearr_14269;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1 = (function (state_14258){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_14258);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e14270){if((e14270 instanceof Object)){
var ex__13719__auto__ = e14270;
var statearr_14271_14406 = state_14258;
(statearr_14271_14406[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14258);

return cljs.core.cst$kw$recur;
} else {
throw e14270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14407 = state_14258;
state_14258 = G__14407;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = function(state_14258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1.call(this,state_14258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__;
})()
;})(__14387,switch__13715__auto__,c__13829__auto___14399,G__14218_14388,n__7045__auto___14386,jobs,results,process,async))
})();
var state__13831__auto__ = (function (){var statearr_14272 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_14272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___14399);

return statearr_14272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(__14387,c__13829__auto___14399,G__14218_14388,n__7045__auto___14386,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14408 = (__14387 + (1));
__14387 = G__14408;
continue;
} else {
}
break;
}

var c__13829__auto___14409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___14409,jobs,results,process,async){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___14409,jobs,results,process,async){
return (function (state_14294){
var state_val_14295 = (state_14294[(1)]);
if((state_val_14295 === (1))){
var state_14294__$1 = state_14294;
var statearr_14296_14410 = state_14294__$1;
(statearr_14296_14410[(2)] = null);

(statearr_14296_14410[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14295 === (2))){
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14294__$1,(4),from);
} else {
if((state_val_14295 === (3))){
var inst_14292 = (state_14294[(2)]);
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14294__$1,inst_14292);
} else {
if((state_val_14295 === (4))){
var inst_14275 = (state_14294[(7)]);
var inst_14275__$1 = (state_14294[(2)]);
var inst_14276 = (inst_14275__$1 == null);
var state_14294__$1 = (function (){var statearr_14297 = state_14294;
(statearr_14297[(7)] = inst_14275__$1);

return statearr_14297;
})();
if(cljs.core.truth_(inst_14276)){
var statearr_14298_14411 = state_14294__$1;
(statearr_14298_14411[(1)] = (5));

} else {
var statearr_14299_14412 = state_14294__$1;
(statearr_14299_14412[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14295 === (5))){
var inst_14278 = cljs.core.async.close_BANG_(jobs);
var state_14294__$1 = state_14294;
var statearr_14300_14413 = state_14294__$1;
(statearr_14300_14413[(2)] = inst_14278);

(statearr_14300_14413[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14295 === (6))){
var inst_14275 = (state_14294[(7)]);
var inst_14280 = (state_14294[(8)]);
var inst_14280__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14282 = [inst_14275,inst_14280__$1];
var inst_14283 = (new cljs.core.PersistentVector(null,2,(5),inst_14281,inst_14282,null));
var state_14294__$1 = (function (){var statearr_14301 = state_14294;
(statearr_14301[(8)] = inst_14280__$1);

return statearr_14301;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14294__$1,(8),jobs,inst_14283);
} else {
if((state_val_14295 === (7))){
var inst_14290 = (state_14294[(2)]);
var state_14294__$1 = state_14294;
var statearr_14302_14414 = state_14294__$1;
(statearr_14302_14414[(2)] = inst_14290);

(statearr_14302_14414[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14295 === (8))){
var inst_14280 = (state_14294[(8)]);
var inst_14285 = (state_14294[(2)]);
var state_14294__$1 = (function (){var statearr_14303 = state_14294;
(statearr_14303[(9)] = inst_14285);

return statearr_14303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14294__$1,(9),results,inst_14280);
} else {
if((state_val_14295 === (9))){
var inst_14287 = (state_14294[(2)]);
var state_14294__$1 = (function (){var statearr_14304 = state_14294;
(statearr_14304[(10)] = inst_14287);

return statearr_14304;
})();
var statearr_14305_14415 = state_14294__$1;
(statearr_14305_14415[(2)] = null);

(statearr_14305_14415[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___14409,jobs,results,process,async))
;
return ((function (switch__13715__auto__,c__13829__auto___14409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0 = (function (){
var statearr_14309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__);

(statearr_14309[(1)] = (1));

return statearr_14309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1 = (function (state_14294){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_14294);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e14310){if((e14310 instanceof Object)){
var ex__13719__auto__ = e14310;
var statearr_14311_14416 = state_14294;
(statearr_14311_14416[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14294);

return cljs.core.cst$kw$recur;
} else {
throw e14310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14417 = state_14294;
state_14294 = G__14417;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = function(state_14294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1.call(this,state_14294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___14409,jobs,results,process,async))
})();
var state__13831__auto__ = (function (){var statearr_14312 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_14312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___14409);

return statearr_14312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___14409,jobs,results,process,async))
);


var c__13829__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto__,jobs,results,process,async){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto__,jobs,results,process,async){
return (function (state_14350){
var state_val_14351 = (state_14350[(1)]);
if((state_val_14351 === (7))){
var inst_14346 = (state_14350[(2)]);
var state_14350__$1 = state_14350;
var statearr_14352_14418 = state_14350__$1;
(statearr_14352_14418[(2)] = inst_14346);

(statearr_14352_14418[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (20))){
var state_14350__$1 = state_14350;
var statearr_14353_14419 = state_14350__$1;
(statearr_14353_14419[(2)] = null);

(statearr_14353_14419[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (1))){
var state_14350__$1 = state_14350;
var statearr_14354_14420 = state_14350__$1;
(statearr_14354_14420[(2)] = null);

(statearr_14354_14420[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (4))){
var inst_14315 = (state_14350[(7)]);
var inst_14315__$1 = (state_14350[(2)]);
var inst_14316 = (inst_14315__$1 == null);
var state_14350__$1 = (function (){var statearr_14355 = state_14350;
(statearr_14355[(7)] = inst_14315__$1);

return statearr_14355;
})();
if(cljs.core.truth_(inst_14316)){
var statearr_14356_14421 = state_14350__$1;
(statearr_14356_14421[(1)] = (5));

} else {
var statearr_14357_14422 = state_14350__$1;
(statearr_14357_14422[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (15))){
var inst_14328 = (state_14350[(8)]);
var state_14350__$1 = state_14350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14350__$1,(18),to,inst_14328);
} else {
if((state_val_14351 === (21))){
var inst_14341 = (state_14350[(2)]);
var state_14350__$1 = state_14350;
var statearr_14358_14423 = state_14350__$1;
(statearr_14358_14423[(2)] = inst_14341);

(statearr_14358_14423[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (13))){
var inst_14343 = (state_14350[(2)]);
var state_14350__$1 = (function (){var statearr_14359 = state_14350;
(statearr_14359[(9)] = inst_14343);

return statearr_14359;
})();
var statearr_14360_14424 = state_14350__$1;
(statearr_14360_14424[(2)] = null);

(statearr_14360_14424[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (6))){
var inst_14315 = (state_14350[(7)]);
var state_14350__$1 = state_14350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14350__$1,(11),inst_14315);
} else {
if((state_val_14351 === (17))){
var inst_14336 = (state_14350[(2)]);
var state_14350__$1 = state_14350;
if(cljs.core.truth_(inst_14336)){
var statearr_14361_14425 = state_14350__$1;
(statearr_14361_14425[(1)] = (19));

} else {
var statearr_14362_14426 = state_14350__$1;
(statearr_14362_14426[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (3))){
var inst_14348 = (state_14350[(2)]);
var state_14350__$1 = state_14350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14350__$1,inst_14348);
} else {
if((state_val_14351 === (12))){
var inst_14325 = (state_14350[(10)]);
var state_14350__$1 = state_14350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14350__$1,(14),inst_14325);
} else {
if((state_val_14351 === (2))){
var state_14350__$1 = state_14350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14350__$1,(4),results);
} else {
if((state_val_14351 === (19))){
var state_14350__$1 = state_14350;
var statearr_14363_14427 = state_14350__$1;
(statearr_14363_14427[(2)] = null);

(statearr_14363_14427[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (11))){
var inst_14325 = (state_14350[(2)]);
var state_14350__$1 = (function (){var statearr_14364 = state_14350;
(statearr_14364[(10)] = inst_14325);

return statearr_14364;
})();
var statearr_14365_14428 = state_14350__$1;
(statearr_14365_14428[(2)] = null);

(statearr_14365_14428[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (9))){
var state_14350__$1 = state_14350;
var statearr_14366_14429 = state_14350__$1;
(statearr_14366_14429[(2)] = null);

(statearr_14366_14429[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (5))){
var state_14350__$1 = state_14350;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14367_14430 = state_14350__$1;
(statearr_14367_14430[(1)] = (8));

} else {
var statearr_14368_14431 = state_14350__$1;
(statearr_14368_14431[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (14))){
var inst_14330 = (state_14350[(11)]);
var inst_14328 = (state_14350[(8)]);
var inst_14328__$1 = (state_14350[(2)]);
var inst_14329 = (inst_14328__$1 == null);
var inst_14330__$1 = cljs.core.not(inst_14329);
var state_14350__$1 = (function (){var statearr_14369 = state_14350;
(statearr_14369[(11)] = inst_14330__$1);

(statearr_14369[(8)] = inst_14328__$1);

return statearr_14369;
})();
if(inst_14330__$1){
var statearr_14370_14432 = state_14350__$1;
(statearr_14370_14432[(1)] = (15));

} else {
var statearr_14371_14433 = state_14350__$1;
(statearr_14371_14433[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (16))){
var inst_14330 = (state_14350[(11)]);
var state_14350__$1 = state_14350;
var statearr_14372_14434 = state_14350__$1;
(statearr_14372_14434[(2)] = inst_14330);

(statearr_14372_14434[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (10))){
var inst_14322 = (state_14350[(2)]);
var state_14350__$1 = state_14350;
var statearr_14373_14435 = state_14350__$1;
(statearr_14373_14435[(2)] = inst_14322);

(statearr_14373_14435[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (18))){
var inst_14333 = (state_14350[(2)]);
var state_14350__$1 = state_14350;
var statearr_14374_14436 = state_14350__$1;
(statearr_14374_14436[(2)] = inst_14333);

(statearr_14374_14436[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14351 === (8))){
var inst_14319 = cljs.core.async.close_BANG_(to);
var state_14350__$1 = state_14350;
var statearr_14375_14437 = state_14350__$1;
(statearr_14375_14437[(2)] = inst_14319);

(statearr_14375_14437[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto__,jobs,results,process,async))
;
return ((function (switch__13715__auto__,c__13829__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0 = (function (){
var statearr_14379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__);

(statearr_14379[(1)] = (1));

return statearr_14379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1 = (function (state_14350){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_14350);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e14380){if((e14380 instanceof Object)){
var ex__13719__auto__ = e14380;
var statearr_14381_14438 = state_14350;
(statearr_14381_14438[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14350);

return cljs.core.cst$kw$recur;
} else {
throw e14380;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14439 = state_14350;
state_14350 = G__14439;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__ = function(state_14350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1.call(this,state_14350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13716__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto__,jobs,results,process,async))
})();
var state__13831__auto__ = (function (){var statearr_14382 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_14382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto__);

return statearr_14382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto__,jobs,results,process,async))
);

return c__13829__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14440 = [];
var len__7200__auto___14443 = arguments.length;
var i__7201__auto___14444 = (0);
while(true){
if((i__7201__auto___14444 < len__7200__auto___14443)){
args14440.push((arguments[i__7201__auto___14444]));

var G__14445 = (i__7201__auto___14444 + (1));
i__7201__auto___14444 = G__14445;
continue;
} else {
}
break;
}

var G__14442 = args14440.length;
switch (G__14442) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14440.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14447 = [];
var len__7200__auto___14450 = arguments.length;
var i__7201__auto___14451 = (0);
while(true){
if((i__7201__auto___14451 < len__7200__auto___14450)){
args14447.push((arguments[i__7201__auto___14451]));

var G__14452 = (i__7201__auto___14451 + (1));
i__7201__auto___14451 = G__14452;
continue;
} else {
}
break;
}

var G__14449 = args14447.length;
switch (G__14449) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14447.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14454 = [];
var len__7200__auto___14507 = arguments.length;
var i__7201__auto___14508 = (0);
while(true){
if((i__7201__auto___14508 < len__7200__auto___14507)){
args14454.push((arguments[i__7201__auto___14508]));

var G__14509 = (i__7201__auto___14508 + (1));
i__7201__auto___14508 = G__14509;
continue;
} else {
}
break;
}

var G__14456 = args14454.length;
switch (G__14456) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14454.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13829__auto___14511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___14511,tc,fc){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___14511,tc,fc){
return (function (state_14482){
var state_val_14483 = (state_14482[(1)]);
if((state_val_14483 === (7))){
var inst_14478 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14484_14512 = state_14482__$1;
(statearr_14484_14512[(2)] = inst_14478);

(statearr_14484_14512[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (1))){
var state_14482__$1 = state_14482;
var statearr_14485_14513 = state_14482__$1;
(statearr_14485_14513[(2)] = null);

(statearr_14485_14513[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (4))){
var inst_14459 = (state_14482[(7)]);
var inst_14459__$1 = (state_14482[(2)]);
var inst_14460 = (inst_14459__$1 == null);
var state_14482__$1 = (function (){var statearr_14486 = state_14482;
(statearr_14486[(7)] = inst_14459__$1);

return statearr_14486;
})();
if(cljs.core.truth_(inst_14460)){
var statearr_14487_14514 = state_14482__$1;
(statearr_14487_14514[(1)] = (5));

} else {
var statearr_14488_14515 = state_14482__$1;
(statearr_14488_14515[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (13))){
var state_14482__$1 = state_14482;
var statearr_14489_14516 = state_14482__$1;
(statearr_14489_14516[(2)] = null);

(statearr_14489_14516[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (6))){
var inst_14459 = (state_14482[(7)]);
var inst_14465 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14459) : p.call(null,inst_14459));
var state_14482__$1 = state_14482;
if(cljs.core.truth_(inst_14465)){
var statearr_14490_14517 = state_14482__$1;
(statearr_14490_14517[(1)] = (9));

} else {
var statearr_14491_14518 = state_14482__$1;
(statearr_14491_14518[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (3))){
var inst_14480 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14482__$1,inst_14480);
} else {
if((state_val_14483 === (12))){
var state_14482__$1 = state_14482;
var statearr_14492_14519 = state_14482__$1;
(statearr_14492_14519[(2)] = null);

(statearr_14492_14519[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (2))){
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14482__$1,(4),ch);
} else {
if((state_val_14483 === (11))){
var inst_14459 = (state_14482[(7)]);
var inst_14469 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14482__$1,(8),inst_14469,inst_14459);
} else {
if((state_val_14483 === (9))){
var state_14482__$1 = state_14482;
var statearr_14493_14520 = state_14482__$1;
(statearr_14493_14520[(2)] = tc);

(statearr_14493_14520[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (5))){
var inst_14462 = cljs.core.async.close_BANG_(tc);
var inst_14463 = cljs.core.async.close_BANG_(fc);
var state_14482__$1 = (function (){var statearr_14494 = state_14482;
(statearr_14494[(8)] = inst_14462);

return statearr_14494;
})();
var statearr_14495_14521 = state_14482__$1;
(statearr_14495_14521[(2)] = inst_14463);

(statearr_14495_14521[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (14))){
var inst_14476 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
var statearr_14496_14522 = state_14482__$1;
(statearr_14496_14522[(2)] = inst_14476);

(statearr_14496_14522[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (10))){
var state_14482__$1 = state_14482;
var statearr_14497_14523 = state_14482__$1;
(statearr_14497_14523[(2)] = fc);

(statearr_14497_14523[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14483 === (8))){
var inst_14471 = (state_14482[(2)]);
var state_14482__$1 = state_14482;
if(cljs.core.truth_(inst_14471)){
var statearr_14498_14524 = state_14482__$1;
(statearr_14498_14524[(1)] = (12));

} else {
var statearr_14499_14525 = state_14482__$1;
(statearr_14499_14525[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___14511,tc,fc))
;
return ((function (switch__13715__auto__,c__13829__auto___14511,tc,fc){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_14503 = [null,null,null,null,null,null,null,null,null];
(statearr_14503[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_14503[(1)] = (1));

return statearr_14503;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_14482){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_14482);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e14504){if((e14504 instanceof Object)){
var ex__13719__auto__ = e14504;
var statearr_14505_14526 = state_14482;
(statearr_14505_14526[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14482);

return cljs.core.cst$kw$recur;
} else {
throw e14504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14527 = state_14482;
state_14482 = G__14527;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_14482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_14482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___14511,tc,fc))
})();
var state__13831__auto__ = (function (){var statearr_14506 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_14506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___14511);

return statearr_14506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___14511,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13829__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto__){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto__){
return (function (state_14591){
var state_val_14592 = (state_14591[(1)]);
if((state_val_14592 === (7))){
var inst_14587 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
var statearr_14593_14614 = state_14591__$1;
(statearr_14593_14614[(2)] = inst_14587);

(statearr_14593_14614[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14592 === (1))){
var inst_14571 = init;
var state_14591__$1 = (function (){var statearr_14594 = state_14591;
(statearr_14594[(7)] = inst_14571);

return statearr_14594;
})();
var statearr_14595_14615 = state_14591__$1;
(statearr_14595_14615[(2)] = null);

(statearr_14595_14615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14592 === (4))){
var inst_14574 = (state_14591[(8)]);
var inst_14574__$1 = (state_14591[(2)]);
var inst_14575 = (inst_14574__$1 == null);
var state_14591__$1 = (function (){var statearr_14596 = state_14591;
(statearr_14596[(8)] = inst_14574__$1);

return statearr_14596;
})();
if(cljs.core.truth_(inst_14575)){
var statearr_14597_14616 = state_14591__$1;
(statearr_14597_14616[(1)] = (5));

} else {
var statearr_14598_14617 = state_14591__$1;
(statearr_14598_14617[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14592 === (6))){
var inst_14574 = (state_14591[(8)]);
var inst_14571 = (state_14591[(7)]);
var inst_14578 = (state_14591[(9)]);
var inst_14578__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14571,inst_14574) : f.call(null,inst_14571,inst_14574));
var inst_14579 = cljs.core.reduced_QMARK_(inst_14578__$1);
var state_14591__$1 = (function (){var statearr_14599 = state_14591;
(statearr_14599[(9)] = inst_14578__$1);

return statearr_14599;
})();
if(inst_14579){
var statearr_14600_14618 = state_14591__$1;
(statearr_14600_14618[(1)] = (8));

} else {
var statearr_14601_14619 = state_14591__$1;
(statearr_14601_14619[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14592 === (3))){
var inst_14589 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14591__$1,inst_14589);
} else {
if((state_val_14592 === (2))){
var state_14591__$1 = state_14591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14591__$1,(4),ch);
} else {
if((state_val_14592 === (9))){
var inst_14578 = (state_14591[(9)]);
var inst_14571 = inst_14578;
var state_14591__$1 = (function (){var statearr_14602 = state_14591;
(statearr_14602[(7)] = inst_14571);

return statearr_14602;
})();
var statearr_14603_14620 = state_14591__$1;
(statearr_14603_14620[(2)] = null);

(statearr_14603_14620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14592 === (5))){
var inst_14571 = (state_14591[(7)]);
var state_14591__$1 = state_14591;
var statearr_14604_14621 = state_14591__$1;
(statearr_14604_14621[(2)] = inst_14571);

(statearr_14604_14621[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14592 === (10))){
var inst_14585 = (state_14591[(2)]);
var state_14591__$1 = state_14591;
var statearr_14605_14622 = state_14591__$1;
(statearr_14605_14622[(2)] = inst_14585);

(statearr_14605_14622[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14592 === (8))){
var inst_14578 = (state_14591[(9)]);
var inst_14581 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14578) : cljs.core.deref.call(null,inst_14578));
var state_14591__$1 = state_14591;
var statearr_14606_14623 = state_14591__$1;
(statearr_14606_14623[(2)] = inst_14581);

(statearr_14606_14623[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto__))
;
return ((function (switch__13715__auto__,c__13829__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13716__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13716__auto____0 = (function (){
var statearr_14610 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14610[(0)] = cljs$core$async$reduce_$_state_machine__13716__auto__);

(statearr_14610[(1)] = (1));

return statearr_14610;
});
var cljs$core$async$reduce_$_state_machine__13716__auto____1 = (function (state_14591){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_14591);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e14611){if((e14611 instanceof Object)){
var ex__13719__auto__ = e14611;
var statearr_14612_14624 = state_14591;
(statearr_14612_14624[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14591);

return cljs.core.cst$kw$recur;
} else {
throw e14611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14625 = state_14591;
state_14591 = G__14625;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13716__auto__ = function(state_14591){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13716__auto____1.call(this,state_14591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13716__auto____0;
cljs$core$async$reduce_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13716__auto____1;
return cljs$core$async$reduce_$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto__))
})();
var state__13831__auto__ = (function (){var statearr_14613 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_14613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto__);

return statearr_14613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto__))
);

return c__13829__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14626 = [];
var len__7200__auto___14678 = arguments.length;
var i__7201__auto___14679 = (0);
while(true){
if((i__7201__auto___14679 < len__7200__auto___14678)){
args14626.push((arguments[i__7201__auto___14679]));

var G__14680 = (i__7201__auto___14679 + (1));
i__7201__auto___14679 = G__14680;
continue;
} else {
}
break;
}

var G__14628 = args14626.length;
switch (G__14628) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14626.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13829__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto__){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto__){
return (function (state_14653){
var state_val_14654 = (state_14653[(1)]);
if((state_val_14654 === (7))){
var inst_14635 = (state_14653[(2)]);
var state_14653__$1 = state_14653;
var statearr_14655_14682 = state_14653__$1;
(statearr_14655_14682[(2)] = inst_14635);

(statearr_14655_14682[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (1))){
var inst_14629 = cljs.core.seq(coll);
var inst_14630 = inst_14629;
var state_14653__$1 = (function (){var statearr_14656 = state_14653;
(statearr_14656[(7)] = inst_14630);

return statearr_14656;
})();
var statearr_14657_14683 = state_14653__$1;
(statearr_14657_14683[(2)] = null);

(statearr_14657_14683[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (4))){
var inst_14630 = (state_14653[(7)]);
var inst_14633 = cljs.core.first(inst_14630);
var state_14653__$1 = state_14653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14653__$1,(7),ch,inst_14633);
} else {
if((state_val_14654 === (13))){
var inst_14647 = (state_14653[(2)]);
var state_14653__$1 = state_14653;
var statearr_14658_14684 = state_14653__$1;
(statearr_14658_14684[(2)] = inst_14647);

(statearr_14658_14684[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (6))){
var inst_14638 = (state_14653[(2)]);
var state_14653__$1 = state_14653;
if(cljs.core.truth_(inst_14638)){
var statearr_14659_14685 = state_14653__$1;
(statearr_14659_14685[(1)] = (8));

} else {
var statearr_14660_14686 = state_14653__$1;
(statearr_14660_14686[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (3))){
var inst_14651 = (state_14653[(2)]);
var state_14653__$1 = state_14653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14653__$1,inst_14651);
} else {
if((state_val_14654 === (12))){
var state_14653__$1 = state_14653;
var statearr_14661_14687 = state_14653__$1;
(statearr_14661_14687[(2)] = null);

(statearr_14661_14687[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (2))){
var inst_14630 = (state_14653[(7)]);
var state_14653__$1 = state_14653;
if(cljs.core.truth_(inst_14630)){
var statearr_14662_14688 = state_14653__$1;
(statearr_14662_14688[(1)] = (4));

} else {
var statearr_14663_14689 = state_14653__$1;
(statearr_14663_14689[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (11))){
var inst_14644 = cljs.core.async.close_BANG_(ch);
var state_14653__$1 = state_14653;
var statearr_14664_14690 = state_14653__$1;
(statearr_14664_14690[(2)] = inst_14644);

(statearr_14664_14690[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (9))){
var state_14653__$1 = state_14653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14665_14691 = state_14653__$1;
(statearr_14665_14691[(1)] = (11));

} else {
var statearr_14666_14692 = state_14653__$1;
(statearr_14666_14692[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (5))){
var inst_14630 = (state_14653[(7)]);
var state_14653__$1 = state_14653;
var statearr_14667_14693 = state_14653__$1;
(statearr_14667_14693[(2)] = inst_14630);

(statearr_14667_14693[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (10))){
var inst_14649 = (state_14653[(2)]);
var state_14653__$1 = state_14653;
var statearr_14668_14694 = state_14653__$1;
(statearr_14668_14694[(2)] = inst_14649);

(statearr_14668_14694[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14654 === (8))){
var inst_14630 = (state_14653[(7)]);
var inst_14640 = cljs.core.next(inst_14630);
var inst_14630__$1 = inst_14640;
var state_14653__$1 = (function (){var statearr_14669 = state_14653;
(statearr_14669[(7)] = inst_14630__$1);

return statearr_14669;
})();
var statearr_14670_14695 = state_14653__$1;
(statearr_14670_14695[(2)] = null);

(statearr_14670_14695[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto__))
;
return ((function (switch__13715__auto__,c__13829__auto__){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_14674 = [null,null,null,null,null,null,null,null];
(statearr_14674[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_14674[(1)] = (1));

return statearr_14674;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_14653){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_14653);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e14675){if((e14675 instanceof Object)){
var ex__13719__auto__ = e14675;
var statearr_14676_14696 = state_14653;
(statearr_14676_14696[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14653);

return cljs.core.cst$kw$recur;
} else {
throw e14675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__14697 = state_14653;
state_14653 = G__14697;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_14653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_14653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto__))
})();
var state__13831__auto__ = (function (){var statearr_14677 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_14677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto__);

return statearr_14677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto__))
);

return c__13829__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6797__auto__ = (((_ == null))?null:_);
var m__6798__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6798__auto__.call(null,_));
} else {
var m__6798__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6798__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6797__auto__ = (((m == null))?null:m);
var m__6798__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6798__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6798__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6798__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6797__auto__ = (((m == null))?null:m);
var m__6798__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6798__auto__.call(null,m,ch));
} else {
var m__6798__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6798__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6797__auto__ = (((m == null))?null:m);
var m__6798__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6798__auto__.call(null,m));
} else {
var m__6798__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6798__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__14922 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14922) : cljs.core.atom.call(null,G__14922));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14923 = (function (mult,ch,cs,meta14924){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14924 = meta14924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14925,meta14924__$1){
var self__ = this;
var _14925__$1 = this;
return (new cljs.core.async.t_cljs$core$async14923(self__.mult,self__.ch,self__.cs,meta14924__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14925){
var self__ = this;
var _14925__$1 = this;
return self__.meta14924;
});})(cs))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14923.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14926_15146 = self__.cs;
var G__14927_15147 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14926_15146,G__14927_15147) : cljs.core.reset_BANG_.call(null,G__14926_15146,G__14927_15147));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14923.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta14924], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14923";

cljs.core.async.t_cljs$core$async14923.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async14923");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14923 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14923(mult__$1,ch__$1,cs__$1,meta14924){
return (new cljs.core.async.t_cljs$core$async14923(mult__$1,ch__$1,cs__$1,meta14924));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14923(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13829__auto___15148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___15148,cs,m,dchan,dctr,done){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___15148,cs,m,dchan,dctr,done){
return (function (state_15058){
var state_val_15059 = (state_15058[(1)]);
if((state_val_15059 === (7))){
var inst_15054 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15060_15149 = state_15058__$1;
(statearr_15060_15149[(2)] = inst_15054);

(statearr_15060_15149[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (20))){
var inst_14959 = (state_15058[(7)]);
var inst_14969 = cljs.core.first(inst_14959);
var inst_14970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14969,(0),null);
var inst_14971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14969,(1),null);
var state_15058__$1 = (function (){var statearr_15061 = state_15058;
(statearr_15061[(8)] = inst_14970);

return statearr_15061;
})();
if(cljs.core.truth_(inst_14971)){
var statearr_15062_15150 = state_15058__$1;
(statearr_15062_15150[(1)] = (22));

} else {
var statearr_15063_15151 = state_15058__$1;
(statearr_15063_15151[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (27))){
var inst_15006 = (state_15058[(9)]);
var inst_15001 = (state_15058[(10)]);
var inst_14999 = (state_15058[(11)]);
var inst_14930 = (state_15058[(12)]);
var inst_15006__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14999,inst_15001);
var inst_15007 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15006__$1,inst_14930,done);
var state_15058__$1 = (function (){var statearr_15064 = state_15058;
(statearr_15064[(9)] = inst_15006__$1);

return statearr_15064;
})();
if(cljs.core.truth_(inst_15007)){
var statearr_15065_15152 = state_15058__$1;
(statearr_15065_15152[(1)] = (30));

} else {
var statearr_15066_15153 = state_15058__$1;
(statearr_15066_15153[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (1))){
var state_15058__$1 = state_15058;
var statearr_15067_15154 = state_15058__$1;
(statearr_15067_15154[(2)] = null);

(statearr_15067_15154[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (24))){
var inst_14959 = (state_15058[(7)]);
var inst_14976 = (state_15058[(2)]);
var inst_14977 = cljs.core.next(inst_14959);
var inst_14939 = inst_14977;
var inst_14940 = null;
var inst_14941 = (0);
var inst_14942 = (0);
var state_15058__$1 = (function (){var statearr_15068 = state_15058;
(statearr_15068[(13)] = inst_14940);

(statearr_15068[(14)] = inst_14939);

(statearr_15068[(15)] = inst_14976);

(statearr_15068[(16)] = inst_14942);

(statearr_15068[(17)] = inst_14941);

return statearr_15068;
})();
var statearr_15069_15155 = state_15058__$1;
(statearr_15069_15155[(2)] = null);

(statearr_15069_15155[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (39))){
var state_15058__$1 = state_15058;
var statearr_15073_15156 = state_15058__$1;
(statearr_15073_15156[(2)] = null);

(statearr_15073_15156[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (4))){
var inst_14930 = (state_15058[(12)]);
var inst_14930__$1 = (state_15058[(2)]);
var inst_14931 = (inst_14930__$1 == null);
var state_15058__$1 = (function (){var statearr_15074 = state_15058;
(statearr_15074[(12)] = inst_14930__$1);

return statearr_15074;
})();
if(cljs.core.truth_(inst_14931)){
var statearr_15075_15157 = state_15058__$1;
(statearr_15075_15157[(1)] = (5));

} else {
var statearr_15076_15158 = state_15058__$1;
(statearr_15076_15158[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (15))){
var inst_14940 = (state_15058[(13)]);
var inst_14939 = (state_15058[(14)]);
var inst_14942 = (state_15058[(16)]);
var inst_14941 = (state_15058[(17)]);
var inst_14955 = (state_15058[(2)]);
var inst_14956 = (inst_14942 + (1));
var tmp15070 = inst_14940;
var tmp15071 = inst_14939;
var tmp15072 = inst_14941;
var inst_14939__$1 = tmp15071;
var inst_14940__$1 = tmp15070;
var inst_14941__$1 = tmp15072;
var inst_14942__$1 = inst_14956;
var state_15058__$1 = (function (){var statearr_15077 = state_15058;
(statearr_15077[(13)] = inst_14940__$1);

(statearr_15077[(14)] = inst_14939__$1);

(statearr_15077[(18)] = inst_14955);

(statearr_15077[(16)] = inst_14942__$1);

(statearr_15077[(17)] = inst_14941__$1);

return statearr_15077;
})();
var statearr_15078_15159 = state_15058__$1;
(statearr_15078_15159[(2)] = null);

(statearr_15078_15159[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (21))){
var inst_14980 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15082_15160 = state_15058__$1;
(statearr_15082_15160[(2)] = inst_14980);

(statearr_15082_15160[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (31))){
var inst_15006 = (state_15058[(9)]);
var inst_15010 = done(null);
var inst_15011 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15006);
var state_15058__$1 = (function (){var statearr_15083 = state_15058;
(statearr_15083[(19)] = inst_15010);

return statearr_15083;
})();
var statearr_15084_15161 = state_15058__$1;
(statearr_15084_15161[(2)] = inst_15011);

(statearr_15084_15161[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (32))){
var inst_14998 = (state_15058[(20)]);
var inst_15000 = (state_15058[(21)]);
var inst_15001 = (state_15058[(10)]);
var inst_14999 = (state_15058[(11)]);
var inst_15013 = (state_15058[(2)]);
var inst_15014 = (inst_15001 + (1));
var tmp15079 = inst_14998;
var tmp15080 = inst_15000;
var tmp15081 = inst_14999;
var inst_14998__$1 = tmp15079;
var inst_14999__$1 = tmp15081;
var inst_15000__$1 = tmp15080;
var inst_15001__$1 = inst_15014;
var state_15058__$1 = (function (){var statearr_15085 = state_15058;
(statearr_15085[(22)] = inst_15013);

(statearr_15085[(20)] = inst_14998__$1);

(statearr_15085[(21)] = inst_15000__$1);

(statearr_15085[(10)] = inst_15001__$1);

(statearr_15085[(11)] = inst_14999__$1);

return statearr_15085;
})();
var statearr_15086_15162 = state_15058__$1;
(statearr_15086_15162[(2)] = null);

(statearr_15086_15162[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (40))){
var inst_15026 = (state_15058[(23)]);
var inst_15030 = done(null);
var inst_15031 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15026);
var state_15058__$1 = (function (){var statearr_15087 = state_15058;
(statearr_15087[(24)] = inst_15030);

return statearr_15087;
})();
var statearr_15088_15163 = state_15058__$1;
(statearr_15088_15163[(2)] = inst_15031);

(statearr_15088_15163[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (33))){
var inst_15017 = (state_15058[(25)]);
var inst_15019 = cljs.core.chunked_seq_QMARK_(inst_15017);
var state_15058__$1 = state_15058;
if(inst_15019){
var statearr_15089_15164 = state_15058__$1;
(statearr_15089_15164[(1)] = (36));

} else {
var statearr_15090_15165 = state_15058__$1;
(statearr_15090_15165[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (13))){
var inst_14949 = (state_15058[(26)]);
var inst_14952 = cljs.core.async.close_BANG_(inst_14949);
var state_15058__$1 = state_15058;
var statearr_15091_15166 = state_15058__$1;
(statearr_15091_15166[(2)] = inst_14952);

(statearr_15091_15166[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (22))){
var inst_14970 = (state_15058[(8)]);
var inst_14973 = cljs.core.async.close_BANG_(inst_14970);
var state_15058__$1 = state_15058;
var statearr_15092_15167 = state_15058__$1;
(statearr_15092_15167[(2)] = inst_14973);

(statearr_15092_15167[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (36))){
var inst_15017 = (state_15058[(25)]);
var inst_15021 = cljs.core.chunk_first(inst_15017);
var inst_15022 = cljs.core.chunk_rest(inst_15017);
var inst_15023 = cljs.core.count(inst_15021);
var inst_14998 = inst_15022;
var inst_14999 = inst_15021;
var inst_15000 = inst_15023;
var inst_15001 = (0);
var state_15058__$1 = (function (){var statearr_15093 = state_15058;
(statearr_15093[(20)] = inst_14998);

(statearr_15093[(21)] = inst_15000);

(statearr_15093[(10)] = inst_15001);

(statearr_15093[(11)] = inst_14999);

return statearr_15093;
})();
var statearr_15094_15168 = state_15058__$1;
(statearr_15094_15168[(2)] = null);

(statearr_15094_15168[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (41))){
var inst_15017 = (state_15058[(25)]);
var inst_15033 = (state_15058[(2)]);
var inst_15034 = cljs.core.next(inst_15017);
var inst_14998 = inst_15034;
var inst_14999 = null;
var inst_15000 = (0);
var inst_15001 = (0);
var state_15058__$1 = (function (){var statearr_15095 = state_15058;
(statearr_15095[(20)] = inst_14998);

(statearr_15095[(27)] = inst_15033);

(statearr_15095[(21)] = inst_15000);

(statearr_15095[(10)] = inst_15001);

(statearr_15095[(11)] = inst_14999);

return statearr_15095;
})();
var statearr_15096_15169 = state_15058__$1;
(statearr_15096_15169[(2)] = null);

(statearr_15096_15169[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (43))){
var state_15058__$1 = state_15058;
var statearr_15097_15170 = state_15058__$1;
(statearr_15097_15170[(2)] = null);

(statearr_15097_15170[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (29))){
var inst_15042 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15098_15171 = state_15058__$1;
(statearr_15098_15171[(2)] = inst_15042);

(statearr_15098_15171[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (44))){
var inst_15051 = (state_15058[(2)]);
var state_15058__$1 = (function (){var statearr_15099 = state_15058;
(statearr_15099[(28)] = inst_15051);

return statearr_15099;
})();
var statearr_15100_15172 = state_15058__$1;
(statearr_15100_15172[(2)] = null);

(statearr_15100_15172[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (6))){
var inst_14990 = (state_15058[(29)]);
var inst_14989 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14990__$1 = cljs.core.keys(inst_14989);
var inst_14991 = cljs.core.count(inst_14990__$1);
var inst_14992 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_14991) : cljs.core.reset_BANG_.call(null,dctr,inst_14991));
var inst_14997 = cljs.core.seq(inst_14990__$1);
var inst_14998 = inst_14997;
var inst_14999 = null;
var inst_15000 = (0);
var inst_15001 = (0);
var state_15058__$1 = (function (){var statearr_15101 = state_15058;
(statearr_15101[(29)] = inst_14990__$1);

(statearr_15101[(20)] = inst_14998);

(statearr_15101[(21)] = inst_15000);

(statearr_15101[(10)] = inst_15001);

(statearr_15101[(30)] = inst_14992);

(statearr_15101[(11)] = inst_14999);

return statearr_15101;
})();
var statearr_15102_15173 = state_15058__$1;
(statearr_15102_15173[(2)] = null);

(statearr_15102_15173[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (28))){
var inst_14998 = (state_15058[(20)]);
var inst_15017 = (state_15058[(25)]);
var inst_15017__$1 = cljs.core.seq(inst_14998);
var state_15058__$1 = (function (){var statearr_15103 = state_15058;
(statearr_15103[(25)] = inst_15017__$1);

return statearr_15103;
})();
if(inst_15017__$1){
var statearr_15104_15174 = state_15058__$1;
(statearr_15104_15174[(1)] = (33));

} else {
var statearr_15105_15175 = state_15058__$1;
(statearr_15105_15175[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (25))){
var inst_15000 = (state_15058[(21)]);
var inst_15001 = (state_15058[(10)]);
var inst_15003 = (inst_15001 < inst_15000);
var inst_15004 = inst_15003;
var state_15058__$1 = state_15058;
if(cljs.core.truth_(inst_15004)){
var statearr_15106_15176 = state_15058__$1;
(statearr_15106_15176[(1)] = (27));

} else {
var statearr_15107_15177 = state_15058__$1;
(statearr_15107_15177[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (34))){
var state_15058__$1 = state_15058;
var statearr_15108_15178 = state_15058__$1;
(statearr_15108_15178[(2)] = null);

(statearr_15108_15178[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (17))){
var state_15058__$1 = state_15058;
var statearr_15109_15179 = state_15058__$1;
(statearr_15109_15179[(2)] = null);

(statearr_15109_15179[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (3))){
var inst_15056 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15058__$1,inst_15056);
} else {
if((state_val_15059 === (12))){
var inst_14985 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15110_15180 = state_15058__$1;
(statearr_15110_15180[(2)] = inst_14985);

(statearr_15110_15180[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (2))){
var state_15058__$1 = state_15058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15058__$1,(4),ch);
} else {
if((state_val_15059 === (23))){
var state_15058__$1 = state_15058;
var statearr_15111_15181 = state_15058__$1;
(statearr_15111_15181[(2)] = null);

(statearr_15111_15181[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (35))){
var inst_15040 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15112_15182 = state_15058__$1;
(statearr_15112_15182[(2)] = inst_15040);

(statearr_15112_15182[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (19))){
var inst_14959 = (state_15058[(7)]);
var inst_14963 = cljs.core.chunk_first(inst_14959);
var inst_14964 = cljs.core.chunk_rest(inst_14959);
var inst_14965 = cljs.core.count(inst_14963);
var inst_14939 = inst_14964;
var inst_14940 = inst_14963;
var inst_14941 = inst_14965;
var inst_14942 = (0);
var state_15058__$1 = (function (){var statearr_15113 = state_15058;
(statearr_15113[(13)] = inst_14940);

(statearr_15113[(14)] = inst_14939);

(statearr_15113[(16)] = inst_14942);

(statearr_15113[(17)] = inst_14941);

return statearr_15113;
})();
var statearr_15114_15183 = state_15058__$1;
(statearr_15114_15183[(2)] = null);

(statearr_15114_15183[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (11))){
var inst_14939 = (state_15058[(14)]);
var inst_14959 = (state_15058[(7)]);
var inst_14959__$1 = cljs.core.seq(inst_14939);
var state_15058__$1 = (function (){var statearr_15115 = state_15058;
(statearr_15115[(7)] = inst_14959__$1);

return statearr_15115;
})();
if(inst_14959__$1){
var statearr_15116_15184 = state_15058__$1;
(statearr_15116_15184[(1)] = (16));

} else {
var statearr_15117_15185 = state_15058__$1;
(statearr_15117_15185[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (9))){
var inst_14987 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15118_15186 = state_15058__$1;
(statearr_15118_15186[(2)] = inst_14987);

(statearr_15118_15186[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (5))){
var inst_14937 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_14938 = cljs.core.seq(inst_14937);
var inst_14939 = inst_14938;
var inst_14940 = null;
var inst_14941 = (0);
var inst_14942 = (0);
var state_15058__$1 = (function (){var statearr_15119 = state_15058;
(statearr_15119[(13)] = inst_14940);

(statearr_15119[(14)] = inst_14939);

(statearr_15119[(16)] = inst_14942);

(statearr_15119[(17)] = inst_14941);

return statearr_15119;
})();
var statearr_15120_15187 = state_15058__$1;
(statearr_15120_15187[(2)] = null);

(statearr_15120_15187[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (14))){
var state_15058__$1 = state_15058;
var statearr_15121_15188 = state_15058__$1;
(statearr_15121_15188[(2)] = null);

(statearr_15121_15188[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (45))){
var inst_15048 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15122_15189 = state_15058__$1;
(statearr_15122_15189[(2)] = inst_15048);

(statearr_15122_15189[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (26))){
var inst_14990 = (state_15058[(29)]);
var inst_15044 = (state_15058[(2)]);
var inst_15045 = cljs.core.seq(inst_14990);
var state_15058__$1 = (function (){var statearr_15123 = state_15058;
(statearr_15123[(31)] = inst_15044);

return statearr_15123;
})();
if(inst_15045){
var statearr_15124_15190 = state_15058__$1;
(statearr_15124_15190[(1)] = (42));

} else {
var statearr_15125_15191 = state_15058__$1;
(statearr_15125_15191[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (16))){
var inst_14959 = (state_15058[(7)]);
var inst_14961 = cljs.core.chunked_seq_QMARK_(inst_14959);
var state_15058__$1 = state_15058;
if(inst_14961){
var statearr_15126_15192 = state_15058__$1;
(statearr_15126_15192[(1)] = (19));

} else {
var statearr_15127_15193 = state_15058__$1;
(statearr_15127_15193[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (38))){
var inst_15037 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15128_15194 = state_15058__$1;
(statearr_15128_15194[(2)] = inst_15037);

(statearr_15128_15194[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (30))){
var state_15058__$1 = state_15058;
var statearr_15129_15195 = state_15058__$1;
(statearr_15129_15195[(2)] = null);

(statearr_15129_15195[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (10))){
var inst_14940 = (state_15058[(13)]);
var inst_14942 = (state_15058[(16)]);
var inst_14948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14940,inst_14942);
var inst_14949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14948,(0),null);
var inst_14950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14948,(1),null);
var state_15058__$1 = (function (){var statearr_15130 = state_15058;
(statearr_15130[(26)] = inst_14949);

return statearr_15130;
})();
if(cljs.core.truth_(inst_14950)){
var statearr_15131_15196 = state_15058__$1;
(statearr_15131_15196[(1)] = (13));

} else {
var statearr_15132_15197 = state_15058__$1;
(statearr_15132_15197[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (18))){
var inst_14983 = (state_15058[(2)]);
var state_15058__$1 = state_15058;
var statearr_15133_15198 = state_15058__$1;
(statearr_15133_15198[(2)] = inst_14983);

(statearr_15133_15198[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (42))){
var state_15058__$1 = state_15058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15058__$1,(45),dchan);
} else {
if((state_val_15059 === (37))){
var inst_15017 = (state_15058[(25)]);
var inst_15026 = (state_15058[(23)]);
var inst_14930 = (state_15058[(12)]);
var inst_15026__$1 = cljs.core.first(inst_15017);
var inst_15027 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15026__$1,inst_14930,done);
var state_15058__$1 = (function (){var statearr_15134 = state_15058;
(statearr_15134[(23)] = inst_15026__$1);

return statearr_15134;
})();
if(cljs.core.truth_(inst_15027)){
var statearr_15135_15199 = state_15058__$1;
(statearr_15135_15199[(1)] = (39));

} else {
var statearr_15136_15200 = state_15058__$1;
(statearr_15136_15200[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15059 === (8))){
var inst_14942 = (state_15058[(16)]);
var inst_14941 = (state_15058[(17)]);
var inst_14944 = (inst_14942 < inst_14941);
var inst_14945 = inst_14944;
var state_15058__$1 = state_15058;
if(cljs.core.truth_(inst_14945)){
var statearr_15137_15201 = state_15058__$1;
(statearr_15137_15201[(1)] = (10));

} else {
var statearr_15138_15202 = state_15058__$1;
(statearr_15138_15202[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___15148,cs,m,dchan,dctr,done))
;
return ((function (switch__13715__auto__,c__13829__auto___15148,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13716__auto__ = null;
var cljs$core$async$mult_$_state_machine__13716__auto____0 = (function (){
var statearr_15142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15142[(0)] = cljs$core$async$mult_$_state_machine__13716__auto__);

(statearr_15142[(1)] = (1));

return statearr_15142;
});
var cljs$core$async$mult_$_state_machine__13716__auto____1 = (function (state_15058){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_15058);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e15143){if((e15143 instanceof Object)){
var ex__13719__auto__ = e15143;
var statearr_15144_15203 = state_15058;
(statearr_15144_15203[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15058);

return cljs.core.cst$kw$recur;
} else {
throw e15143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__15204 = state_15058;
state_15058 = G__15204;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13716__auto__ = function(state_15058){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13716__auto____1.call(this,state_15058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13716__auto____0;
cljs$core$async$mult_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13716__auto____1;
return cljs$core$async$mult_$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___15148,cs,m,dchan,dctr,done))
})();
var state__13831__auto__ = (function (){var statearr_15145 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_15145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___15148);

return statearr_15145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___15148,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15205 = [];
var len__7200__auto___15208 = arguments.length;
var i__7201__auto___15209 = (0);
while(true){
if((i__7201__auto___15209 < len__7200__auto___15208)){
args15205.push((arguments[i__7201__auto___15209]));

var G__15210 = (i__7201__auto___15209 + (1));
i__7201__auto___15209 = G__15210;
continue;
} else {
}
break;
}

var G__15207 = args15205.length;
switch (G__15207) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15205.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6797__auto__ = (((m == null))?null:m);
var m__6798__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6798__auto__.call(null,m,ch));
} else {
var m__6798__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6798__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6797__auto__ = (((m == null))?null:m);
var m__6798__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6798__auto__.call(null,m,ch));
} else {
var m__6798__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6798__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6797__auto__ = (((m == null))?null:m);
var m__6798__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6798__auto__.call(null,m));
} else {
var m__6798__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6798__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6797__auto__ = (((m == null))?null:m);
var m__6798__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6798__auto__.call(null,m,state_map));
} else {
var m__6798__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6798__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6797__auto__ = (((m == null))?null:m);
var m__6798__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6798__auto__.call(null,m,mode));
} else {
var m__6798__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6798__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7207__auto__ = [];
var len__7200__auto___15222 = arguments.length;
var i__7201__auto___15223 = (0);
while(true){
if((i__7201__auto___15223 < len__7200__auto___15222)){
args__7207__auto__.push((arguments[i__7201__auto___15223]));

var G__15224 = (i__7201__auto___15223 + (1));
i__7201__auto___15223 = G__15224;
continue;
} else {
}
break;
}

var argseq__7208__auto__ = ((((3) < args__7207__auto__.length))?(new cljs.core.IndexedSeq(args__7207__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7208__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15216){
var map__15217 = p__15216;
var map__15217__$1 = ((((!((map__15217 == null)))?((((map__15217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15217):map__15217);
var opts = map__15217__$1;
var statearr_15219_15225 = state;
(statearr_15219_15225[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__15217,map__15217__$1,opts){
return (function (val){
var statearr_15220_15226 = state;
(statearr_15220_15226[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15217,map__15217__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_15221_15227 = state;
(statearr_15221_15227[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15212){
var G__15213 = cljs.core.first(seq15212);
var seq15212__$1 = cljs.core.next(seq15212);
var G__15214 = cljs.core.first(seq15212__$1);
var seq15212__$2 = cljs.core.next(seq15212__$1);
var G__15215 = cljs.core.first(seq15212__$2);
var seq15212__$3 = cljs.core.next(seq15212__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15213,G__15214,G__15215,seq15212__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__15394 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15394) : cljs.core.atom.call(null,G__15394));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15395 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15396){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15396 = meta15396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15397,meta15396__$1){
var self__ = this;
var _15397__$1 = this;
return (new cljs.core.async.t_cljs$core$async15395(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15396__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15397){
var self__ = this;
var _15397__$1 = this;
return self__.meta15396;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15398_15560 = self__.cs;
var G__15399_15561 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15398_15560,G__15399_15561) : cljs.core.reset_BANG_.call(null,G__15398_15560,G__15399_15561));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15396], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15395";

cljs.core.async.t_cljs$core$async15395.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async15395");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15395 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15395(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15396){
return (new cljs.core.async.t_cljs$core$async15395(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15396));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15395(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13829__auto___15562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___15562,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___15562,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15497){
var state_val_15498 = (state_15497[(1)]);
if((state_val_15498 === (7))){
var inst_15415 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
var statearr_15499_15563 = state_15497__$1;
(statearr_15499_15563[(2)] = inst_15415);

(statearr_15499_15563[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (20))){
var inst_15427 = (state_15497[(7)]);
var state_15497__$1 = state_15497;
var statearr_15500_15564 = state_15497__$1;
(statearr_15500_15564[(2)] = inst_15427);

(statearr_15500_15564[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (27))){
var state_15497__$1 = state_15497;
var statearr_15501_15565 = state_15497__$1;
(statearr_15501_15565[(2)] = null);

(statearr_15501_15565[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (1))){
var inst_15403 = (state_15497[(8)]);
var inst_15403__$1 = calc_state();
var inst_15405 = (inst_15403__$1 == null);
var inst_15406 = cljs.core.not(inst_15405);
var state_15497__$1 = (function (){var statearr_15502 = state_15497;
(statearr_15502[(8)] = inst_15403__$1);

return statearr_15502;
})();
if(inst_15406){
var statearr_15503_15566 = state_15497__$1;
(statearr_15503_15566[(1)] = (2));

} else {
var statearr_15504_15567 = state_15497__$1;
(statearr_15504_15567[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (24))){
var inst_15471 = (state_15497[(9)]);
var inst_15450 = (state_15497[(10)]);
var inst_15457 = (state_15497[(11)]);
var inst_15471__$1 = (inst_15450.cljs$core$IFn$_invoke$arity$1 ? inst_15450.cljs$core$IFn$_invoke$arity$1(inst_15457) : inst_15450.call(null,inst_15457));
var state_15497__$1 = (function (){var statearr_15505 = state_15497;
(statearr_15505[(9)] = inst_15471__$1);

return statearr_15505;
})();
if(cljs.core.truth_(inst_15471__$1)){
var statearr_15506_15568 = state_15497__$1;
(statearr_15506_15568[(1)] = (29));

} else {
var statearr_15507_15569 = state_15497__$1;
(statearr_15507_15569[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (4))){
var inst_15418 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
if(cljs.core.truth_(inst_15418)){
var statearr_15508_15570 = state_15497__$1;
(statearr_15508_15570[(1)] = (8));

} else {
var statearr_15509_15571 = state_15497__$1;
(statearr_15509_15571[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (15))){
var inst_15444 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
if(cljs.core.truth_(inst_15444)){
var statearr_15510_15572 = state_15497__$1;
(statearr_15510_15572[(1)] = (19));

} else {
var statearr_15511_15573 = state_15497__$1;
(statearr_15511_15573[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (21))){
var inst_15449 = (state_15497[(12)]);
var inst_15449__$1 = (state_15497[(2)]);
var inst_15450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15449__$1,cljs.core.cst$kw$solos);
var inst_15451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15449__$1,cljs.core.cst$kw$mutes);
var inst_15452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15449__$1,cljs.core.cst$kw$reads);
var state_15497__$1 = (function (){var statearr_15512 = state_15497;
(statearr_15512[(13)] = inst_15451);

(statearr_15512[(12)] = inst_15449__$1);

(statearr_15512[(10)] = inst_15450);

return statearr_15512;
})();
return cljs.core.async.ioc_alts_BANG_(state_15497__$1,(22),inst_15452);
} else {
if((state_val_15498 === (31))){
var inst_15479 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
if(cljs.core.truth_(inst_15479)){
var statearr_15513_15574 = state_15497__$1;
(statearr_15513_15574[(1)] = (32));

} else {
var statearr_15514_15575 = state_15497__$1;
(statearr_15514_15575[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (32))){
var inst_15456 = (state_15497[(14)]);
var state_15497__$1 = state_15497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15497__$1,(35),out,inst_15456);
} else {
if((state_val_15498 === (33))){
var inst_15449 = (state_15497[(12)]);
var inst_15427 = inst_15449;
var state_15497__$1 = (function (){var statearr_15515 = state_15497;
(statearr_15515[(7)] = inst_15427);

return statearr_15515;
})();
var statearr_15516_15576 = state_15497__$1;
(statearr_15516_15576[(2)] = null);

(statearr_15516_15576[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (13))){
var inst_15427 = (state_15497[(7)]);
var inst_15434 = inst_15427.cljs$lang$protocol_mask$partition0$;
var inst_15435 = (inst_15434 & (64));
var inst_15436 = inst_15427.cljs$core$ISeq$;
var inst_15437 = (inst_15435) || (inst_15436);
var state_15497__$1 = state_15497;
if(cljs.core.truth_(inst_15437)){
var statearr_15517_15577 = state_15497__$1;
(statearr_15517_15577[(1)] = (16));

} else {
var statearr_15518_15578 = state_15497__$1;
(statearr_15518_15578[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (22))){
var inst_15457 = (state_15497[(11)]);
var inst_15456 = (state_15497[(14)]);
var inst_15455 = (state_15497[(2)]);
var inst_15456__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15455,(0),null);
var inst_15457__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15455,(1),null);
var inst_15458 = (inst_15456__$1 == null);
var inst_15459 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15457__$1,change);
var inst_15460 = (inst_15458) || (inst_15459);
var state_15497__$1 = (function (){var statearr_15519 = state_15497;
(statearr_15519[(11)] = inst_15457__$1);

(statearr_15519[(14)] = inst_15456__$1);

return statearr_15519;
})();
if(cljs.core.truth_(inst_15460)){
var statearr_15520_15579 = state_15497__$1;
(statearr_15520_15579[(1)] = (23));

} else {
var statearr_15521_15580 = state_15497__$1;
(statearr_15521_15580[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (36))){
var inst_15449 = (state_15497[(12)]);
var inst_15427 = inst_15449;
var state_15497__$1 = (function (){var statearr_15522 = state_15497;
(statearr_15522[(7)] = inst_15427);

return statearr_15522;
})();
var statearr_15523_15581 = state_15497__$1;
(statearr_15523_15581[(2)] = null);

(statearr_15523_15581[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (29))){
var inst_15471 = (state_15497[(9)]);
var state_15497__$1 = state_15497;
var statearr_15524_15582 = state_15497__$1;
(statearr_15524_15582[(2)] = inst_15471);

(statearr_15524_15582[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (6))){
var state_15497__$1 = state_15497;
var statearr_15525_15583 = state_15497__$1;
(statearr_15525_15583[(2)] = false);

(statearr_15525_15583[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (28))){
var inst_15467 = (state_15497[(2)]);
var inst_15468 = calc_state();
var inst_15427 = inst_15468;
var state_15497__$1 = (function (){var statearr_15526 = state_15497;
(statearr_15526[(7)] = inst_15427);

(statearr_15526[(15)] = inst_15467);

return statearr_15526;
})();
var statearr_15527_15584 = state_15497__$1;
(statearr_15527_15584[(2)] = null);

(statearr_15527_15584[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (25))){
var inst_15493 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
var statearr_15528_15585 = state_15497__$1;
(statearr_15528_15585[(2)] = inst_15493);

(statearr_15528_15585[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (34))){
var inst_15491 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
var statearr_15529_15586 = state_15497__$1;
(statearr_15529_15586[(2)] = inst_15491);

(statearr_15529_15586[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (17))){
var state_15497__$1 = state_15497;
var statearr_15530_15587 = state_15497__$1;
(statearr_15530_15587[(2)] = false);

(statearr_15530_15587[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (3))){
var state_15497__$1 = state_15497;
var statearr_15531_15588 = state_15497__$1;
(statearr_15531_15588[(2)] = false);

(statearr_15531_15588[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (12))){
var inst_15495 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15497__$1,inst_15495);
} else {
if((state_val_15498 === (2))){
var inst_15403 = (state_15497[(8)]);
var inst_15408 = inst_15403.cljs$lang$protocol_mask$partition0$;
var inst_15409 = (inst_15408 & (64));
var inst_15410 = inst_15403.cljs$core$ISeq$;
var inst_15411 = (inst_15409) || (inst_15410);
var state_15497__$1 = state_15497;
if(cljs.core.truth_(inst_15411)){
var statearr_15532_15589 = state_15497__$1;
(statearr_15532_15589[(1)] = (5));

} else {
var statearr_15533_15590 = state_15497__$1;
(statearr_15533_15590[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (23))){
var inst_15456 = (state_15497[(14)]);
var inst_15462 = (inst_15456 == null);
var state_15497__$1 = state_15497;
if(cljs.core.truth_(inst_15462)){
var statearr_15534_15591 = state_15497__$1;
(statearr_15534_15591[(1)] = (26));

} else {
var statearr_15535_15592 = state_15497__$1;
(statearr_15535_15592[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (35))){
var inst_15482 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
if(cljs.core.truth_(inst_15482)){
var statearr_15536_15593 = state_15497__$1;
(statearr_15536_15593[(1)] = (36));

} else {
var statearr_15537_15594 = state_15497__$1;
(statearr_15537_15594[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (19))){
var inst_15427 = (state_15497[(7)]);
var inst_15446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15427);
var state_15497__$1 = state_15497;
var statearr_15538_15595 = state_15497__$1;
(statearr_15538_15595[(2)] = inst_15446);

(statearr_15538_15595[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (11))){
var inst_15427 = (state_15497[(7)]);
var inst_15431 = (inst_15427 == null);
var inst_15432 = cljs.core.not(inst_15431);
var state_15497__$1 = state_15497;
if(inst_15432){
var statearr_15539_15596 = state_15497__$1;
(statearr_15539_15596[(1)] = (13));

} else {
var statearr_15540_15597 = state_15497__$1;
(statearr_15540_15597[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (9))){
var inst_15403 = (state_15497[(8)]);
var state_15497__$1 = state_15497;
var statearr_15541_15598 = state_15497__$1;
(statearr_15541_15598[(2)] = inst_15403);

(statearr_15541_15598[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (5))){
var state_15497__$1 = state_15497;
var statearr_15542_15599 = state_15497__$1;
(statearr_15542_15599[(2)] = true);

(statearr_15542_15599[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (14))){
var state_15497__$1 = state_15497;
var statearr_15543_15600 = state_15497__$1;
(statearr_15543_15600[(2)] = false);

(statearr_15543_15600[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (26))){
var inst_15457 = (state_15497[(11)]);
var inst_15464 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15457);
var state_15497__$1 = state_15497;
var statearr_15544_15601 = state_15497__$1;
(statearr_15544_15601[(2)] = inst_15464);

(statearr_15544_15601[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (16))){
var state_15497__$1 = state_15497;
var statearr_15545_15602 = state_15497__$1;
(statearr_15545_15602[(2)] = true);

(statearr_15545_15602[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (38))){
var inst_15487 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
var statearr_15546_15603 = state_15497__$1;
(statearr_15546_15603[(2)] = inst_15487);

(statearr_15546_15603[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (30))){
var inst_15451 = (state_15497[(13)]);
var inst_15450 = (state_15497[(10)]);
var inst_15457 = (state_15497[(11)]);
var inst_15474 = cljs.core.empty_QMARK_(inst_15450);
var inst_15475 = (inst_15451.cljs$core$IFn$_invoke$arity$1 ? inst_15451.cljs$core$IFn$_invoke$arity$1(inst_15457) : inst_15451.call(null,inst_15457));
var inst_15476 = cljs.core.not(inst_15475);
var inst_15477 = (inst_15474) && (inst_15476);
var state_15497__$1 = state_15497;
var statearr_15547_15604 = state_15497__$1;
(statearr_15547_15604[(2)] = inst_15477);

(statearr_15547_15604[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (10))){
var inst_15403 = (state_15497[(8)]);
var inst_15423 = (state_15497[(2)]);
var inst_15424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15423,cljs.core.cst$kw$solos);
var inst_15425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15423,cljs.core.cst$kw$mutes);
var inst_15426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15423,cljs.core.cst$kw$reads);
var inst_15427 = inst_15403;
var state_15497__$1 = (function (){var statearr_15548 = state_15497;
(statearr_15548[(7)] = inst_15427);

(statearr_15548[(16)] = inst_15426);

(statearr_15548[(17)] = inst_15425);

(statearr_15548[(18)] = inst_15424);

return statearr_15548;
})();
var statearr_15549_15605 = state_15497__$1;
(statearr_15549_15605[(2)] = null);

(statearr_15549_15605[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (18))){
var inst_15441 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
var statearr_15550_15606 = state_15497__$1;
(statearr_15550_15606[(2)] = inst_15441);

(statearr_15550_15606[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (37))){
var state_15497__$1 = state_15497;
var statearr_15551_15607 = state_15497__$1;
(statearr_15551_15607[(2)] = null);

(statearr_15551_15607[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15498 === (8))){
var inst_15403 = (state_15497[(8)]);
var inst_15420 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15403);
var state_15497__$1 = state_15497;
var statearr_15552_15608 = state_15497__$1;
(statearr_15552_15608[(2)] = inst_15420);

(statearr_15552_15608[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___15562,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13715__auto__,c__13829__auto___15562,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13716__auto__ = null;
var cljs$core$async$mix_$_state_machine__13716__auto____0 = (function (){
var statearr_15556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15556[(0)] = cljs$core$async$mix_$_state_machine__13716__auto__);

(statearr_15556[(1)] = (1));

return statearr_15556;
});
var cljs$core$async$mix_$_state_machine__13716__auto____1 = (function (state_15497){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_15497);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e15557){if((e15557 instanceof Object)){
var ex__13719__auto__ = e15557;
var statearr_15558_15609 = state_15497;
(statearr_15558_15609[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15497);

return cljs.core.cst$kw$recur;
} else {
throw e15557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__15610 = state_15497;
state_15497 = G__15610;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13716__auto__ = function(state_15497){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13716__auto____1.call(this,state_15497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13716__auto____0;
cljs$core$async$mix_$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13716__auto____1;
return cljs$core$async$mix_$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___15562,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13831__auto__ = (function (){var statearr_15559 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_15559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___15562);

return statearr_15559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___15562,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6797__auto__ = (((p == null))?null:p);
var m__6798__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6798__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6798__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6798__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6797__auto__ = (((p == null))?null:p);
var m__6798__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6798__auto__.call(null,p,v,ch));
} else {
var m__6798__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6798__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15611 = [];
var len__7200__auto___15614 = arguments.length;
var i__7201__auto___15615 = (0);
while(true){
if((i__7201__auto___15615 < len__7200__auto___15614)){
args15611.push((arguments[i__7201__auto___15615]));

var G__15616 = (i__7201__auto___15615 + (1));
i__7201__auto___15615 = G__15616;
continue;
} else {
}
break;
}

var G__15613 = args15611.length;
switch (G__15613) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15611.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6797__auto__ = (((p == null))?null:p);
var m__6798__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6798__auto__.call(null,p));
} else {
var m__6798__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6798__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6797__auto__ = (((p == null))?null:p);
var m__6798__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6797__auto__)]);
if(!((m__6798__auto__ == null))){
return (m__6798__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6798__auto__.call(null,p,v));
} else {
var m__6798__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6798__auto____$1 == null))){
return (m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6798__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6798__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15619 = [];
var len__7200__auto___15747 = arguments.length;
var i__7201__auto___15748 = (0);
while(true){
if((i__7201__auto___15748 < len__7200__auto___15747)){
args15619.push((arguments[i__7201__auto___15748]));

var G__15749 = (i__7201__auto___15748 + (1));
i__7201__auto___15748 = G__15749;
continue;
} else {
}
break;
}

var G__15621 = args15619.length;
switch (G__15621) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15619.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15622 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15622) : cljs.core.atom.call(null,G__15622));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6142__auto__)){
return or__6142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6142__auto__,mults){
return (function (p1__15618_SHARP_){
if(cljs.core.truth_((p1__15618_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15618_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15618_SHARP_.call(null,topic)))){
return p1__15618_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15618_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6142__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15623 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15624){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15624 = meta15624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15625,meta15624__$1){
var self__ = this;
var _15625__$1 = this;
return (new cljs.core.async.t_cljs$core$async15623(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15624__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15625){
var self__ = this;
var _15625__$1 = this;
return self__.meta15624;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15626 = self__.mults;
var G__15627 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15626,G__15627) : cljs.core.reset_BANG_.call(null,G__15626,G__15627));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15623.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15623.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15624], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15623";

cljs.core.async.t_cljs$core$async15623.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async15623");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15623 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15623(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15624){
return (new cljs.core.async.t_cljs$core$async15623(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15624));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15623(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13829__auto___15751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___15751,mults,ensure_mult,p){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___15751,mults,ensure_mult,p){
return (function (state_15699){
var state_val_15700 = (state_15699[(1)]);
if((state_val_15700 === (7))){
var inst_15695 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15701_15752 = state_15699__$1;
(statearr_15701_15752[(2)] = inst_15695);

(statearr_15701_15752[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (20))){
var state_15699__$1 = state_15699;
var statearr_15702_15753 = state_15699__$1;
(statearr_15702_15753[(2)] = null);

(statearr_15702_15753[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (1))){
var state_15699__$1 = state_15699;
var statearr_15703_15754 = state_15699__$1;
(statearr_15703_15754[(2)] = null);

(statearr_15703_15754[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (24))){
var inst_15678 = (state_15699[(7)]);
var inst_15687 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15678);
var state_15699__$1 = state_15699;
var statearr_15704_15755 = state_15699__$1;
(statearr_15704_15755[(2)] = inst_15687);

(statearr_15704_15755[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (4))){
var inst_15630 = (state_15699[(8)]);
var inst_15630__$1 = (state_15699[(2)]);
var inst_15631 = (inst_15630__$1 == null);
var state_15699__$1 = (function (){var statearr_15705 = state_15699;
(statearr_15705[(8)] = inst_15630__$1);

return statearr_15705;
})();
if(cljs.core.truth_(inst_15631)){
var statearr_15706_15756 = state_15699__$1;
(statearr_15706_15756[(1)] = (5));

} else {
var statearr_15707_15757 = state_15699__$1;
(statearr_15707_15757[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (15))){
var inst_15672 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15708_15758 = state_15699__$1;
(statearr_15708_15758[(2)] = inst_15672);

(statearr_15708_15758[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (21))){
var inst_15692 = (state_15699[(2)]);
var state_15699__$1 = (function (){var statearr_15709 = state_15699;
(statearr_15709[(9)] = inst_15692);

return statearr_15709;
})();
var statearr_15710_15759 = state_15699__$1;
(statearr_15710_15759[(2)] = null);

(statearr_15710_15759[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (13))){
var inst_15654 = (state_15699[(10)]);
var inst_15656 = cljs.core.chunked_seq_QMARK_(inst_15654);
var state_15699__$1 = state_15699;
if(inst_15656){
var statearr_15711_15760 = state_15699__$1;
(statearr_15711_15760[(1)] = (16));

} else {
var statearr_15712_15761 = state_15699__$1;
(statearr_15712_15761[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (22))){
var inst_15684 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
if(cljs.core.truth_(inst_15684)){
var statearr_15713_15762 = state_15699__$1;
(statearr_15713_15762[(1)] = (23));

} else {
var statearr_15714_15763 = state_15699__$1;
(statearr_15714_15763[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (6))){
var inst_15678 = (state_15699[(7)]);
var inst_15630 = (state_15699[(8)]);
var inst_15680 = (state_15699[(11)]);
var inst_15678__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15630) : topic_fn.call(null,inst_15630));
var inst_15679 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15680__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15679,inst_15678__$1);
var state_15699__$1 = (function (){var statearr_15715 = state_15699;
(statearr_15715[(7)] = inst_15678__$1);

(statearr_15715[(11)] = inst_15680__$1);

return statearr_15715;
})();
if(cljs.core.truth_(inst_15680__$1)){
var statearr_15716_15764 = state_15699__$1;
(statearr_15716_15764[(1)] = (19));

} else {
var statearr_15717_15765 = state_15699__$1;
(statearr_15717_15765[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (25))){
var inst_15689 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15718_15766 = state_15699__$1;
(statearr_15718_15766[(2)] = inst_15689);

(statearr_15718_15766[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (17))){
var inst_15654 = (state_15699[(10)]);
var inst_15663 = cljs.core.first(inst_15654);
var inst_15664 = cljs.core.async.muxch_STAR_(inst_15663);
var inst_15665 = cljs.core.async.close_BANG_(inst_15664);
var inst_15666 = cljs.core.next(inst_15654);
var inst_15640 = inst_15666;
var inst_15641 = null;
var inst_15642 = (0);
var inst_15643 = (0);
var state_15699__$1 = (function (){var statearr_15719 = state_15699;
(statearr_15719[(12)] = inst_15640);

(statearr_15719[(13)] = inst_15665);

(statearr_15719[(14)] = inst_15642);

(statearr_15719[(15)] = inst_15641);

(statearr_15719[(16)] = inst_15643);

return statearr_15719;
})();
var statearr_15720_15767 = state_15699__$1;
(statearr_15720_15767[(2)] = null);

(statearr_15720_15767[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (3))){
var inst_15697 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15699__$1,inst_15697);
} else {
if((state_val_15700 === (12))){
var inst_15674 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15721_15768 = state_15699__$1;
(statearr_15721_15768[(2)] = inst_15674);

(statearr_15721_15768[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (2))){
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15699__$1,(4),ch);
} else {
if((state_val_15700 === (23))){
var state_15699__$1 = state_15699;
var statearr_15722_15769 = state_15699__$1;
(statearr_15722_15769[(2)] = null);

(statearr_15722_15769[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (19))){
var inst_15630 = (state_15699[(8)]);
var inst_15680 = (state_15699[(11)]);
var inst_15682 = cljs.core.async.muxch_STAR_(inst_15680);
var state_15699__$1 = state_15699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15699__$1,(22),inst_15682,inst_15630);
} else {
if((state_val_15700 === (11))){
var inst_15654 = (state_15699[(10)]);
var inst_15640 = (state_15699[(12)]);
var inst_15654__$1 = cljs.core.seq(inst_15640);
var state_15699__$1 = (function (){var statearr_15723 = state_15699;
(statearr_15723[(10)] = inst_15654__$1);

return statearr_15723;
})();
if(inst_15654__$1){
var statearr_15724_15770 = state_15699__$1;
(statearr_15724_15770[(1)] = (13));

} else {
var statearr_15725_15771 = state_15699__$1;
(statearr_15725_15771[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (9))){
var inst_15676 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15726_15772 = state_15699__$1;
(statearr_15726_15772[(2)] = inst_15676);

(statearr_15726_15772[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (5))){
var inst_15637 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15638 = cljs.core.vals(inst_15637);
var inst_15639 = cljs.core.seq(inst_15638);
var inst_15640 = inst_15639;
var inst_15641 = null;
var inst_15642 = (0);
var inst_15643 = (0);
var state_15699__$1 = (function (){var statearr_15727 = state_15699;
(statearr_15727[(12)] = inst_15640);

(statearr_15727[(14)] = inst_15642);

(statearr_15727[(15)] = inst_15641);

(statearr_15727[(16)] = inst_15643);

return statearr_15727;
})();
var statearr_15728_15773 = state_15699__$1;
(statearr_15728_15773[(2)] = null);

(statearr_15728_15773[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (14))){
var state_15699__$1 = state_15699;
var statearr_15732_15774 = state_15699__$1;
(statearr_15732_15774[(2)] = null);

(statearr_15732_15774[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (16))){
var inst_15654 = (state_15699[(10)]);
var inst_15658 = cljs.core.chunk_first(inst_15654);
var inst_15659 = cljs.core.chunk_rest(inst_15654);
var inst_15660 = cljs.core.count(inst_15658);
var inst_15640 = inst_15659;
var inst_15641 = inst_15658;
var inst_15642 = inst_15660;
var inst_15643 = (0);
var state_15699__$1 = (function (){var statearr_15733 = state_15699;
(statearr_15733[(12)] = inst_15640);

(statearr_15733[(14)] = inst_15642);

(statearr_15733[(15)] = inst_15641);

(statearr_15733[(16)] = inst_15643);

return statearr_15733;
})();
var statearr_15734_15775 = state_15699__$1;
(statearr_15734_15775[(2)] = null);

(statearr_15734_15775[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (10))){
var inst_15640 = (state_15699[(12)]);
var inst_15642 = (state_15699[(14)]);
var inst_15641 = (state_15699[(15)]);
var inst_15643 = (state_15699[(16)]);
var inst_15648 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15641,inst_15643);
var inst_15649 = cljs.core.async.muxch_STAR_(inst_15648);
var inst_15650 = cljs.core.async.close_BANG_(inst_15649);
var inst_15651 = (inst_15643 + (1));
var tmp15729 = inst_15640;
var tmp15730 = inst_15642;
var tmp15731 = inst_15641;
var inst_15640__$1 = tmp15729;
var inst_15641__$1 = tmp15731;
var inst_15642__$1 = tmp15730;
var inst_15643__$1 = inst_15651;
var state_15699__$1 = (function (){var statearr_15735 = state_15699;
(statearr_15735[(12)] = inst_15640__$1);

(statearr_15735[(14)] = inst_15642__$1);

(statearr_15735[(17)] = inst_15650);

(statearr_15735[(15)] = inst_15641__$1);

(statearr_15735[(16)] = inst_15643__$1);

return statearr_15735;
})();
var statearr_15736_15776 = state_15699__$1;
(statearr_15736_15776[(2)] = null);

(statearr_15736_15776[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (18))){
var inst_15669 = (state_15699[(2)]);
var state_15699__$1 = state_15699;
var statearr_15737_15777 = state_15699__$1;
(statearr_15737_15777[(2)] = inst_15669);

(statearr_15737_15777[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15700 === (8))){
var inst_15642 = (state_15699[(14)]);
var inst_15643 = (state_15699[(16)]);
var inst_15645 = (inst_15643 < inst_15642);
var inst_15646 = inst_15645;
var state_15699__$1 = state_15699;
if(cljs.core.truth_(inst_15646)){
var statearr_15738_15778 = state_15699__$1;
(statearr_15738_15778[(1)] = (10));

} else {
var statearr_15739_15779 = state_15699__$1;
(statearr_15739_15779[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___15751,mults,ensure_mult,p))
;
return ((function (switch__13715__auto__,c__13829__auto___15751,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_15743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15743[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_15743[(1)] = (1));

return statearr_15743;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_15699){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_15699);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e15744){if((e15744 instanceof Object)){
var ex__13719__auto__ = e15744;
var statearr_15745_15780 = state_15699;
(statearr_15745_15780[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15699);

return cljs.core.cst$kw$recur;
} else {
throw e15744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__15781 = state_15699;
state_15699 = G__15781;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_15699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_15699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___15751,mults,ensure_mult,p))
})();
var state__13831__auto__ = (function (){var statearr_15746 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_15746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___15751);

return statearr_15746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___15751,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15782 = [];
var len__7200__auto___15785 = arguments.length;
var i__7201__auto___15786 = (0);
while(true){
if((i__7201__auto___15786 < len__7200__auto___15785)){
args15782.push((arguments[i__7201__auto___15786]));

var G__15787 = (i__7201__auto___15786 + (1));
i__7201__auto___15786 = G__15787;
continue;
} else {
}
break;
}

var G__15784 = args15782.length;
switch (G__15784) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15782.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args15789 = [];
var len__7200__auto___15792 = arguments.length;
var i__7201__auto___15793 = (0);
while(true){
if((i__7201__auto___15793 < len__7200__auto___15792)){
args15789.push((arguments[i__7201__auto___15793]));

var G__15794 = (i__7201__auto___15793 + (1));
i__7201__auto___15793 = G__15794;
continue;
} else {
}
break;
}

var G__15791 = args15789.length;
switch (G__15791) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15789.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args15796 = [];
var len__7200__auto___15867 = arguments.length;
var i__7201__auto___15868 = (0);
while(true){
if((i__7201__auto___15868 < len__7200__auto___15867)){
args15796.push((arguments[i__7201__auto___15868]));

var G__15869 = (i__7201__auto___15868 + (1));
i__7201__auto___15868 = G__15869;
continue;
} else {
}
break;
}

var G__15798 = args15796.length;
switch (G__15798) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15796.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__13829__auto___15871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___15871,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___15871,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15837){
var state_val_15838 = (state_15837[(1)]);
if((state_val_15838 === (7))){
var state_15837__$1 = state_15837;
var statearr_15839_15872 = state_15837__$1;
(statearr_15839_15872[(2)] = null);

(statearr_15839_15872[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (1))){
var state_15837__$1 = state_15837;
var statearr_15840_15873 = state_15837__$1;
(statearr_15840_15873[(2)] = null);

(statearr_15840_15873[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (4))){
var inst_15801 = (state_15837[(7)]);
var inst_15803 = (inst_15801 < cnt);
var state_15837__$1 = state_15837;
if(cljs.core.truth_(inst_15803)){
var statearr_15841_15874 = state_15837__$1;
(statearr_15841_15874[(1)] = (6));

} else {
var statearr_15842_15875 = state_15837__$1;
(statearr_15842_15875[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (15))){
var inst_15833 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
var statearr_15843_15876 = state_15837__$1;
(statearr_15843_15876[(2)] = inst_15833);

(statearr_15843_15876[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (13))){
var inst_15826 = cljs.core.async.close_BANG_(out);
var state_15837__$1 = state_15837;
var statearr_15844_15877 = state_15837__$1;
(statearr_15844_15877[(2)] = inst_15826);

(statearr_15844_15877[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (6))){
var state_15837__$1 = state_15837;
var statearr_15845_15878 = state_15837__$1;
(statearr_15845_15878[(2)] = null);

(statearr_15845_15878[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (3))){
var inst_15835 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15837__$1,inst_15835);
} else {
if((state_val_15838 === (12))){
var inst_15823 = (state_15837[(8)]);
var inst_15823__$1 = (state_15837[(2)]);
var inst_15824 = cljs.core.some(cljs.core.nil_QMARK_,inst_15823__$1);
var state_15837__$1 = (function (){var statearr_15846 = state_15837;
(statearr_15846[(8)] = inst_15823__$1);

return statearr_15846;
})();
if(cljs.core.truth_(inst_15824)){
var statearr_15847_15879 = state_15837__$1;
(statearr_15847_15879[(1)] = (13));

} else {
var statearr_15848_15880 = state_15837__$1;
(statearr_15848_15880[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (2))){
var inst_15800 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_15801 = (0);
var state_15837__$1 = (function (){var statearr_15849 = state_15837;
(statearr_15849[(9)] = inst_15800);

(statearr_15849[(7)] = inst_15801);

return statearr_15849;
})();
var statearr_15850_15881 = state_15837__$1;
(statearr_15850_15881[(2)] = null);

(statearr_15850_15881[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (11))){
var inst_15801 = (state_15837[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_15837,(10),Object,null,(9));
var inst_15810 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15801) : chs__$1.call(null,inst_15801));
var inst_15811 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15801) : done.call(null,inst_15801));
var inst_15812 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15810,inst_15811);
var state_15837__$1 = state_15837;
var statearr_15851_15882 = state_15837__$1;
(statearr_15851_15882[(2)] = inst_15812);


cljs.core.async.impl.ioc_helpers.process_exception(state_15837__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (9))){
var inst_15801 = (state_15837[(7)]);
var inst_15814 = (state_15837[(2)]);
var inst_15815 = (inst_15801 + (1));
var inst_15801__$1 = inst_15815;
var state_15837__$1 = (function (){var statearr_15852 = state_15837;
(statearr_15852[(10)] = inst_15814);

(statearr_15852[(7)] = inst_15801__$1);

return statearr_15852;
})();
var statearr_15853_15883 = state_15837__$1;
(statearr_15853_15883[(2)] = null);

(statearr_15853_15883[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (5))){
var inst_15821 = (state_15837[(2)]);
var state_15837__$1 = (function (){var statearr_15854 = state_15837;
(statearr_15854[(11)] = inst_15821);

return statearr_15854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15837__$1,(12),dchan);
} else {
if((state_val_15838 === (14))){
var inst_15823 = (state_15837[(8)]);
var inst_15828 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15823);
var state_15837__$1 = state_15837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15837__$1,(16),out,inst_15828);
} else {
if((state_val_15838 === (16))){
var inst_15830 = (state_15837[(2)]);
var state_15837__$1 = (function (){var statearr_15855 = state_15837;
(statearr_15855[(12)] = inst_15830);

return statearr_15855;
})();
var statearr_15856_15884 = state_15837__$1;
(statearr_15856_15884[(2)] = null);

(statearr_15856_15884[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (10))){
var inst_15805 = (state_15837[(2)]);
var inst_15806 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15837__$1 = (function (){var statearr_15857 = state_15837;
(statearr_15857[(13)] = inst_15805);

return statearr_15857;
})();
var statearr_15858_15885 = state_15837__$1;
(statearr_15858_15885[(2)] = inst_15806);


cljs.core.async.impl.ioc_helpers.process_exception(state_15837__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_15838 === (8))){
var inst_15819 = (state_15837[(2)]);
var state_15837__$1 = state_15837;
var statearr_15859_15886 = state_15837__$1;
(statearr_15859_15886[(2)] = inst_15819);

(statearr_15859_15886[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___15871,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13715__auto__,c__13829__auto___15871,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_15863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15863[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_15863[(1)] = (1));

return statearr_15863;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_15837){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_15837);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e15864){if((e15864 instanceof Object)){
var ex__13719__auto__ = e15864;
var statearr_15865_15887 = state_15837;
(statearr_15865_15887[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15837);

return cljs.core.cst$kw$recur;
} else {
throw e15864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__15888 = state_15837;
state_15837 = G__15888;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_15837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_15837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___15871,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13831__auto__ = (function (){var statearr_15866 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_15866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___15871);

return statearr_15866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___15871,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15890 = [];
var len__7200__auto___15946 = arguments.length;
var i__7201__auto___15947 = (0);
while(true){
if((i__7201__auto___15947 < len__7200__auto___15946)){
args15890.push((arguments[i__7201__auto___15947]));

var G__15948 = (i__7201__auto___15947 + (1));
i__7201__auto___15947 = G__15948;
continue;
} else {
}
break;
}

var G__15892 = args15890.length;
switch (G__15892) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15890.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13829__auto___15950 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___15950,out){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___15950,out){
return (function (state_15922){
var state_val_15923 = (state_15922[(1)]);
if((state_val_15923 === (7))){
var inst_15901 = (state_15922[(7)]);
var inst_15902 = (state_15922[(8)]);
var inst_15901__$1 = (state_15922[(2)]);
var inst_15902__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15901__$1,(0),null);
var inst_15903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15901__$1,(1),null);
var inst_15904 = (inst_15902__$1 == null);
var state_15922__$1 = (function (){var statearr_15924 = state_15922;
(statearr_15924[(7)] = inst_15901__$1);

(statearr_15924[(9)] = inst_15903);

(statearr_15924[(8)] = inst_15902__$1);

return statearr_15924;
})();
if(cljs.core.truth_(inst_15904)){
var statearr_15925_15951 = state_15922__$1;
(statearr_15925_15951[(1)] = (8));

} else {
var statearr_15926_15952 = state_15922__$1;
(statearr_15926_15952[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15923 === (1))){
var inst_15893 = cljs.core.vec(chs);
var inst_15894 = inst_15893;
var state_15922__$1 = (function (){var statearr_15927 = state_15922;
(statearr_15927[(10)] = inst_15894);

return statearr_15927;
})();
var statearr_15928_15953 = state_15922__$1;
(statearr_15928_15953[(2)] = null);

(statearr_15928_15953[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15923 === (4))){
var inst_15894 = (state_15922[(10)]);
var state_15922__$1 = state_15922;
return cljs.core.async.ioc_alts_BANG_(state_15922__$1,(7),inst_15894);
} else {
if((state_val_15923 === (6))){
var inst_15918 = (state_15922[(2)]);
var state_15922__$1 = state_15922;
var statearr_15929_15954 = state_15922__$1;
(statearr_15929_15954[(2)] = inst_15918);

(statearr_15929_15954[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15923 === (3))){
var inst_15920 = (state_15922[(2)]);
var state_15922__$1 = state_15922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15922__$1,inst_15920);
} else {
if((state_val_15923 === (2))){
var inst_15894 = (state_15922[(10)]);
var inst_15896 = cljs.core.count(inst_15894);
var inst_15897 = (inst_15896 > (0));
var state_15922__$1 = state_15922;
if(cljs.core.truth_(inst_15897)){
var statearr_15931_15955 = state_15922__$1;
(statearr_15931_15955[(1)] = (4));

} else {
var statearr_15932_15956 = state_15922__$1;
(statearr_15932_15956[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15923 === (11))){
var inst_15894 = (state_15922[(10)]);
var inst_15911 = (state_15922[(2)]);
var tmp15930 = inst_15894;
var inst_15894__$1 = tmp15930;
var state_15922__$1 = (function (){var statearr_15933 = state_15922;
(statearr_15933[(10)] = inst_15894__$1);

(statearr_15933[(11)] = inst_15911);

return statearr_15933;
})();
var statearr_15934_15957 = state_15922__$1;
(statearr_15934_15957[(2)] = null);

(statearr_15934_15957[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15923 === (9))){
var inst_15902 = (state_15922[(8)]);
var state_15922__$1 = state_15922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15922__$1,(11),out,inst_15902);
} else {
if((state_val_15923 === (5))){
var inst_15916 = cljs.core.async.close_BANG_(out);
var state_15922__$1 = state_15922;
var statearr_15935_15958 = state_15922__$1;
(statearr_15935_15958[(2)] = inst_15916);

(statearr_15935_15958[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15923 === (10))){
var inst_15914 = (state_15922[(2)]);
var state_15922__$1 = state_15922;
var statearr_15936_15959 = state_15922__$1;
(statearr_15936_15959[(2)] = inst_15914);

(statearr_15936_15959[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15923 === (8))){
var inst_15901 = (state_15922[(7)]);
var inst_15894 = (state_15922[(10)]);
var inst_15903 = (state_15922[(9)]);
var inst_15902 = (state_15922[(8)]);
var inst_15906 = (function (){var cs = inst_15894;
var vec__15899 = inst_15901;
var v = inst_15902;
var c = inst_15903;
return ((function (cs,vec__15899,v,c,inst_15901,inst_15894,inst_15903,inst_15902,state_val_15923,c__13829__auto___15950,out){
return (function (p1__15889_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15889_SHARP_);
});
;})(cs,vec__15899,v,c,inst_15901,inst_15894,inst_15903,inst_15902,state_val_15923,c__13829__auto___15950,out))
})();
var inst_15907 = cljs.core.filterv(inst_15906,inst_15894);
var inst_15894__$1 = inst_15907;
var state_15922__$1 = (function (){var statearr_15937 = state_15922;
(statearr_15937[(10)] = inst_15894__$1);

return statearr_15937;
})();
var statearr_15938_15960 = state_15922__$1;
(statearr_15938_15960[(2)] = null);

(statearr_15938_15960[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___15950,out))
;
return ((function (switch__13715__auto__,c__13829__auto___15950,out){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_15942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15942[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_15942[(1)] = (1));

return statearr_15942;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_15922){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_15922);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e15943){if((e15943 instanceof Object)){
var ex__13719__auto__ = e15943;
var statearr_15944_15961 = state_15922;
(statearr_15944_15961[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15922);

return cljs.core.cst$kw$recur;
} else {
throw e15943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__15962 = state_15922;
state_15922 = G__15962;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_15922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_15922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___15950,out))
})();
var state__13831__auto__ = (function (){var statearr_15945 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_15945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___15950);

return statearr_15945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___15950,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15963 = [];
var len__7200__auto___16012 = arguments.length;
var i__7201__auto___16013 = (0);
while(true){
if((i__7201__auto___16013 < len__7200__auto___16012)){
args15963.push((arguments[i__7201__auto___16013]));

var G__16014 = (i__7201__auto___16013 + (1));
i__7201__auto___16013 = G__16014;
continue;
} else {
}
break;
}

var G__15965 = args15963.length;
switch (G__15965) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15963.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13829__auto___16016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___16016,out){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___16016,out){
return (function (state_15989){
var state_val_15990 = (state_15989[(1)]);
if((state_val_15990 === (7))){
var inst_15971 = (state_15989[(7)]);
var inst_15971__$1 = (state_15989[(2)]);
var inst_15972 = (inst_15971__$1 == null);
var inst_15973 = cljs.core.not(inst_15972);
var state_15989__$1 = (function (){var statearr_15991 = state_15989;
(statearr_15991[(7)] = inst_15971__$1);

return statearr_15991;
})();
if(inst_15973){
var statearr_15992_16017 = state_15989__$1;
(statearr_15992_16017[(1)] = (8));

} else {
var statearr_15993_16018 = state_15989__$1;
(statearr_15993_16018[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15990 === (1))){
var inst_15966 = (0);
var state_15989__$1 = (function (){var statearr_15994 = state_15989;
(statearr_15994[(8)] = inst_15966);

return statearr_15994;
})();
var statearr_15995_16019 = state_15989__$1;
(statearr_15995_16019[(2)] = null);

(statearr_15995_16019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15990 === (4))){
var state_15989__$1 = state_15989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15989__$1,(7),ch);
} else {
if((state_val_15990 === (6))){
var inst_15984 = (state_15989[(2)]);
var state_15989__$1 = state_15989;
var statearr_15996_16020 = state_15989__$1;
(statearr_15996_16020[(2)] = inst_15984);

(statearr_15996_16020[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15990 === (3))){
var inst_15986 = (state_15989[(2)]);
var inst_15987 = cljs.core.async.close_BANG_(out);
var state_15989__$1 = (function (){var statearr_15997 = state_15989;
(statearr_15997[(9)] = inst_15986);

return statearr_15997;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15989__$1,inst_15987);
} else {
if((state_val_15990 === (2))){
var inst_15966 = (state_15989[(8)]);
var inst_15968 = (inst_15966 < n);
var state_15989__$1 = state_15989;
if(cljs.core.truth_(inst_15968)){
var statearr_15998_16021 = state_15989__$1;
(statearr_15998_16021[(1)] = (4));

} else {
var statearr_15999_16022 = state_15989__$1;
(statearr_15999_16022[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15990 === (11))){
var inst_15966 = (state_15989[(8)]);
var inst_15976 = (state_15989[(2)]);
var inst_15977 = (inst_15966 + (1));
var inst_15966__$1 = inst_15977;
var state_15989__$1 = (function (){var statearr_16000 = state_15989;
(statearr_16000[(10)] = inst_15976);

(statearr_16000[(8)] = inst_15966__$1);

return statearr_16000;
})();
var statearr_16001_16023 = state_15989__$1;
(statearr_16001_16023[(2)] = null);

(statearr_16001_16023[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15990 === (9))){
var state_15989__$1 = state_15989;
var statearr_16002_16024 = state_15989__$1;
(statearr_16002_16024[(2)] = null);

(statearr_16002_16024[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15990 === (5))){
var state_15989__$1 = state_15989;
var statearr_16003_16025 = state_15989__$1;
(statearr_16003_16025[(2)] = null);

(statearr_16003_16025[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15990 === (10))){
var inst_15981 = (state_15989[(2)]);
var state_15989__$1 = state_15989;
var statearr_16004_16026 = state_15989__$1;
(statearr_16004_16026[(2)] = inst_15981);

(statearr_16004_16026[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15990 === (8))){
var inst_15971 = (state_15989[(7)]);
var state_15989__$1 = state_15989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15989__$1,(11),out,inst_15971);
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
});})(c__13829__auto___16016,out))
;
return ((function (switch__13715__auto__,c__13829__auto___16016,out){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_16008 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16008[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_16008[(1)] = (1));

return statearr_16008;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_15989){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_15989);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e16009){if((e16009 instanceof Object)){
var ex__13719__auto__ = e16009;
var statearr_16010_16027 = state_15989;
(statearr_16010_16027[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15989);

return cljs.core.cst$kw$recur;
} else {
throw e16009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__16028 = state_15989;
state_15989 = G__16028;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_15989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_15989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___16016,out))
})();
var state__13831__auto__ = (function (){var statearr_16011 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_16011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___16016);

return statearr_16011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___16016,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16038 = (function (map_LT_,f,ch,meta16039){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16039 = meta16039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16040,meta16039__$1){
var self__ = this;
var _16040__$1 = this;
return (new cljs.core.async.t_cljs$core$async16038(self__.map_LT_,self__.f,self__.ch,meta16039__$1));
});

cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16040){
var self__ = this;
var _16040__$1 = this;
return self__.meta16039;
});

cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16041 = (function (map_LT_,f,ch,meta16039,_,fn1,meta16042){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16039 = meta16039;
this._ = _;
this.fn1 = fn1;
this.meta16042 = meta16042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16043,meta16042__$1){
var self__ = this;
var _16043__$1 = this;
return (new cljs.core.async.t_cljs$core$async16041(self__.map_LT_,self__.f,self__.ch,self__.meta16039,self__._,self__.fn1,meta16042__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16043){
var self__ = this;
var _16043__$1 = this;
return self__.meta16042;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16041.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16041.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16029_SHARP_){
var G__16044 = (((p1__16029_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16029_SHARP_) : self__.f.call(null,p1__16029_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16044) : f1.call(null,G__16044));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16041.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16039,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16038], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16042], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16041";

cljs.core.async.t_cljs$core$async16041.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async16041");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16041 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16041(map_LT___$1,f__$1,ch__$1,meta16039__$1,___$2,fn1__$1,meta16042){
return (new cljs.core.async.t_cljs$core$async16041(map_LT___$1,f__$1,ch__$1,meta16039__$1,___$2,fn1__$1,meta16042));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16041(self__.map_LT_,self__.f,self__.ch,self__.meta16039,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6130__auto__ = ret;
if(cljs.core.truth_(and__6130__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6130__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16045 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16045) : self__.f.call(null,G__16045));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16039], null);
});

cljs.core.async.t_cljs$core$async16038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16038";

cljs.core.async.t_cljs$core$async16038.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async16038");
});

cljs.core.async.__GT_t_cljs$core$async16038 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16038(map_LT___$1,f__$1,ch__$1,meta16039){
return (new cljs.core.async.t_cljs$core$async16038(map_LT___$1,f__$1,ch__$1,meta16039));
});

}

return (new cljs.core.async.t_cljs$core$async16038(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16049 = (function (map_GT_,f,ch,meta16050){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16050 = meta16050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16051,meta16050__$1){
var self__ = this;
var _16051__$1 = this;
return (new cljs.core.async.t_cljs$core$async16049(self__.map_GT_,self__.f,self__.ch,meta16050__$1));
});

cljs.core.async.t_cljs$core$async16049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16051){
var self__ = this;
var _16051__$1 = this;
return self__.meta16050;
});

cljs.core.async.t_cljs$core$async16049.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16049.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16049.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16050], null);
});

cljs.core.async.t_cljs$core$async16049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16049";

cljs.core.async.t_cljs$core$async16049.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async16049");
});

cljs.core.async.__GT_t_cljs$core$async16049 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16049(map_GT___$1,f__$1,ch__$1,meta16050){
return (new cljs.core.async.t_cljs$core$async16049(map_GT___$1,f__$1,ch__$1,meta16050));
});

}

return (new cljs.core.async.t_cljs$core$async16049(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16055 = (function (filter_GT_,p,ch,meta16056){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16056 = meta16056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16057,meta16056__$1){
var self__ = this;
var _16057__$1 = this;
return (new cljs.core.async.t_cljs$core$async16055(self__.filter_GT_,self__.p,self__.ch,meta16056__$1));
});

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16057){
var self__ = this;
var _16057__$1 = this;
return self__.meta16056;
});

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16056], null);
});

cljs.core.async.t_cljs$core$async16055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16055";

cljs.core.async.t_cljs$core$async16055.cljs$lang$ctorPrWriter = (function (this__6740__auto__,writer__6741__auto__,opt__6742__auto__){
return cljs.core._write(writer__6741__auto__,"cljs.core.async/t_cljs$core$async16055");
});

cljs.core.async.__GT_t_cljs$core$async16055 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16055(filter_GT___$1,p__$1,ch__$1,meta16056){
return (new cljs.core.async.t_cljs$core$async16055(filter_GT___$1,p__$1,ch__$1,meta16056));
});

}

return (new cljs.core.async.t_cljs$core$async16055(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16058 = [];
var len__7200__auto___16102 = arguments.length;
var i__7201__auto___16103 = (0);
while(true){
if((i__7201__auto___16103 < len__7200__auto___16102)){
args16058.push((arguments[i__7201__auto___16103]));

var G__16104 = (i__7201__auto___16103 + (1));
i__7201__auto___16103 = G__16104;
continue;
} else {
}
break;
}

var G__16060 = args16058.length;
switch (G__16060) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16058.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13829__auto___16106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___16106,out){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___16106,out){
return (function (state_16081){
var state_val_16082 = (state_16081[(1)]);
if((state_val_16082 === (7))){
var inst_16077 = (state_16081[(2)]);
var state_16081__$1 = state_16081;
var statearr_16083_16107 = state_16081__$1;
(statearr_16083_16107[(2)] = inst_16077);

(statearr_16083_16107[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16082 === (1))){
var state_16081__$1 = state_16081;
var statearr_16084_16108 = state_16081__$1;
(statearr_16084_16108[(2)] = null);

(statearr_16084_16108[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16082 === (4))){
var inst_16063 = (state_16081[(7)]);
var inst_16063__$1 = (state_16081[(2)]);
var inst_16064 = (inst_16063__$1 == null);
var state_16081__$1 = (function (){var statearr_16085 = state_16081;
(statearr_16085[(7)] = inst_16063__$1);

return statearr_16085;
})();
if(cljs.core.truth_(inst_16064)){
var statearr_16086_16109 = state_16081__$1;
(statearr_16086_16109[(1)] = (5));

} else {
var statearr_16087_16110 = state_16081__$1;
(statearr_16087_16110[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16082 === (6))){
var inst_16063 = (state_16081[(7)]);
var inst_16068 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16063) : p.call(null,inst_16063));
var state_16081__$1 = state_16081;
if(cljs.core.truth_(inst_16068)){
var statearr_16088_16111 = state_16081__$1;
(statearr_16088_16111[(1)] = (8));

} else {
var statearr_16089_16112 = state_16081__$1;
(statearr_16089_16112[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16082 === (3))){
var inst_16079 = (state_16081[(2)]);
var state_16081__$1 = state_16081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16081__$1,inst_16079);
} else {
if((state_val_16082 === (2))){
var state_16081__$1 = state_16081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16081__$1,(4),ch);
} else {
if((state_val_16082 === (11))){
var inst_16071 = (state_16081[(2)]);
var state_16081__$1 = state_16081;
var statearr_16090_16113 = state_16081__$1;
(statearr_16090_16113[(2)] = inst_16071);

(statearr_16090_16113[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16082 === (9))){
var state_16081__$1 = state_16081;
var statearr_16091_16114 = state_16081__$1;
(statearr_16091_16114[(2)] = null);

(statearr_16091_16114[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16082 === (5))){
var inst_16066 = cljs.core.async.close_BANG_(out);
var state_16081__$1 = state_16081;
var statearr_16092_16115 = state_16081__$1;
(statearr_16092_16115[(2)] = inst_16066);

(statearr_16092_16115[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16082 === (10))){
var inst_16074 = (state_16081[(2)]);
var state_16081__$1 = (function (){var statearr_16093 = state_16081;
(statearr_16093[(8)] = inst_16074);

return statearr_16093;
})();
var statearr_16094_16116 = state_16081__$1;
(statearr_16094_16116[(2)] = null);

(statearr_16094_16116[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16082 === (8))){
var inst_16063 = (state_16081[(7)]);
var state_16081__$1 = state_16081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16081__$1,(11),out,inst_16063);
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
});})(c__13829__auto___16106,out))
;
return ((function (switch__13715__auto__,c__13829__auto___16106,out){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_16098 = [null,null,null,null,null,null,null,null,null];
(statearr_16098[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_16098[(1)] = (1));

return statearr_16098;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_16081){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_16081);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e16099){if((e16099 instanceof Object)){
var ex__13719__auto__ = e16099;
var statearr_16100_16117 = state_16081;
(statearr_16100_16117[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16081);

return cljs.core.cst$kw$recur;
} else {
throw e16099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__16118 = state_16081;
state_16081 = G__16118;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_16081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_16081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___16106,out))
})();
var state__13831__auto__ = (function (){var statearr_16101 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_16101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___16106);

return statearr_16101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___16106,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16119 = [];
var len__7200__auto___16122 = arguments.length;
var i__7201__auto___16123 = (0);
while(true){
if((i__7201__auto___16123 < len__7200__auto___16122)){
args16119.push((arguments[i__7201__auto___16123]));

var G__16124 = (i__7201__auto___16123 + (1));
i__7201__auto___16123 = G__16124;
continue;
} else {
}
break;
}

var G__16121 = args16119.length;
switch (G__16121) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16119.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13829__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto__){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto__){
return (function (state_16291){
var state_val_16292 = (state_16291[(1)]);
if((state_val_16292 === (7))){
var inst_16287 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
var statearr_16293_16334 = state_16291__$1;
(statearr_16293_16334[(2)] = inst_16287);

(statearr_16293_16334[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (20))){
var inst_16257 = (state_16291[(7)]);
var inst_16268 = (state_16291[(2)]);
var inst_16269 = cljs.core.next(inst_16257);
var inst_16243 = inst_16269;
var inst_16244 = null;
var inst_16245 = (0);
var inst_16246 = (0);
var state_16291__$1 = (function (){var statearr_16294 = state_16291;
(statearr_16294[(8)] = inst_16246);

(statearr_16294[(9)] = inst_16243);

(statearr_16294[(10)] = inst_16268);

(statearr_16294[(11)] = inst_16244);

(statearr_16294[(12)] = inst_16245);

return statearr_16294;
})();
var statearr_16295_16335 = state_16291__$1;
(statearr_16295_16335[(2)] = null);

(statearr_16295_16335[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (1))){
var state_16291__$1 = state_16291;
var statearr_16296_16336 = state_16291__$1;
(statearr_16296_16336[(2)] = null);

(statearr_16296_16336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (4))){
var inst_16232 = (state_16291[(13)]);
var inst_16232__$1 = (state_16291[(2)]);
var inst_16233 = (inst_16232__$1 == null);
var state_16291__$1 = (function (){var statearr_16297 = state_16291;
(statearr_16297[(13)] = inst_16232__$1);

return statearr_16297;
})();
if(cljs.core.truth_(inst_16233)){
var statearr_16298_16337 = state_16291__$1;
(statearr_16298_16337[(1)] = (5));

} else {
var statearr_16299_16338 = state_16291__$1;
(statearr_16299_16338[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (15))){
var state_16291__$1 = state_16291;
var statearr_16303_16339 = state_16291__$1;
(statearr_16303_16339[(2)] = null);

(statearr_16303_16339[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (21))){
var state_16291__$1 = state_16291;
var statearr_16304_16340 = state_16291__$1;
(statearr_16304_16340[(2)] = null);

(statearr_16304_16340[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (13))){
var inst_16246 = (state_16291[(8)]);
var inst_16243 = (state_16291[(9)]);
var inst_16244 = (state_16291[(11)]);
var inst_16245 = (state_16291[(12)]);
var inst_16253 = (state_16291[(2)]);
var inst_16254 = (inst_16246 + (1));
var tmp16300 = inst_16243;
var tmp16301 = inst_16244;
var tmp16302 = inst_16245;
var inst_16243__$1 = tmp16300;
var inst_16244__$1 = tmp16301;
var inst_16245__$1 = tmp16302;
var inst_16246__$1 = inst_16254;
var state_16291__$1 = (function (){var statearr_16305 = state_16291;
(statearr_16305[(8)] = inst_16246__$1);

(statearr_16305[(9)] = inst_16243__$1);

(statearr_16305[(14)] = inst_16253);

(statearr_16305[(11)] = inst_16244__$1);

(statearr_16305[(12)] = inst_16245__$1);

return statearr_16305;
})();
var statearr_16306_16341 = state_16291__$1;
(statearr_16306_16341[(2)] = null);

(statearr_16306_16341[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (22))){
var state_16291__$1 = state_16291;
var statearr_16307_16342 = state_16291__$1;
(statearr_16307_16342[(2)] = null);

(statearr_16307_16342[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (6))){
var inst_16232 = (state_16291[(13)]);
var inst_16241 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16232) : f.call(null,inst_16232));
var inst_16242 = cljs.core.seq(inst_16241);
var inst_16243 = inst_16242;
var inst_16244 = null;
var inst_16245 = (0);
var inst_16246 = (0);
var state_16291__$1 = (function (){var statearr_16308 = state_16291;
(statearr_16308[(8)] = inst_16246);

(statearr_16308[(9)] = inst_16243);

(statearr_16308[(11)] = inst_16244);

(statearr_16308[(12)] = inst_16245);

return statearr_16308;
})();
var statearr_16309_16343 = state_16291__$1;
(statearr_16309_16343[(2)] = null);

(statearr_16309_16343[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (17))){
var inst_16257 = (state_16291[(7)]);
var inst_16261 = cljs.core.chunk_first(inst_16257);
var inst_16262 = cljs.core.chunk_rest(inst_16257);
var inst_16263 = cljs.core.count(inst_16261);
var inst_16243 = inst_16262;
var inst_16244 = inst_16261;
var inst_16245 = inst_16263;
var inst_16246 = (0);
var state_16291__$1 = (function (){var statearr_16310 = state_16291;
(statearr_16310[(8)] = inst_16246);

(statearr_16310[(9)] = inst_16243);

(statearr_16310[(11)] = inst_16244);

(statearr_16310[(12)] = inst_16245);

return statearr_16310;
})();
var statearr_16311_16344 = state_16291__$1;
(statearr_16311_16344[(2)] = null);

(statearr_16311_16344[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (3))){
var inst_16289 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16291__$1,inst_16289);
} else {
if((state_val_16292 === (12))){
var inst_16277 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
var statearr_16312_16345 = state_16291__$1;
(statearr_16312_16345[(2)] = inst_16277);

(statearr_16312_16345[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (2))){
var state_16291__$1 = state_16291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16291__$1,(4),in$);
} else {
if((state_val_16292 === (23))){
var inst_16285 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
var statearr_16313_16346 = state_16291__$1;
(statearr_16313_16346[(2)] = inst_16285);

(statearr_16313_16346[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (19))){
var inst_16272 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
var statearr_16314_16347 = state_16291__$1;
(statearr_16314_16347[(2)] = inst_16272);

(statearr_16314_16347[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (11))){
var inst_16257 = (state_16291[(7)]);
var inst_16243 = (state_16291[(9)]);
var inst_16257__$1 = cljs.core.seq(inst_16243);
var state_16291__$1 = (function (){var statearr_16315 = state_16291;
(statearr_16315[(7)] = inst_16257__$1);

return statearr_16315;
})();
if(inst_16257__$1){
var statearr_16316_16348 = state_16291__$1;
(statearr_16316_16348[(1)] = (14));

} else {
var statearr_16317_16349 = state_16291__$1;
(statearr_16317_16349[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (9))){
var inst_16279 = (state_16291[(2)]);
var inst_16280 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16291__$1 = (function (){var statearr_16318 = state_16291;
(statearr_16318[(15)] = inst_16279);

return statearr_16318;
})();
if(cljs.core.truth_(inst_16280)){
var statearr_16319_16350 = state_16291__$1;
(statearr_16319_16350[(1)] = (21));

} else {
var statearr_16320_16351 = state_16291__$1;
(statearr_16320_16351[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (5))){
var inst_16235 = cljs.core.async.close_BANG_(out);
var state_16291__$1 = state_16291;
var statearr_16321_16352 = state_16291__$1;
(statearr_16321_16352[(2)] = inst_16235);

(statearr_16321_16352[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (14))){
var inst_16257 = (state_16291[(7)]);
var inst_16259 = cljs.core.chunked_seq_QMARK_(inst_16257);
var state_16291__$1 = state_16291;
if(inst_16259){
var statearr_16322_16353 = state_16291__$1;
(statearr_16322_16353[(1)] = (17));

} else {
var statearr_16323_16354 = state_16291__$1;
(statearr_16323_16354[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (16))){
var inst_16275 = (state_16291[(2)]);
var state_16291__$1 = state_16291;
var statearr_16324_16355 = state_16291__$1;
(statearr_16324_16355[(2)] = inst_16275);

(statearr_16324_16355[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16292 === (10))){
var inst_16246 = (state_16291[(8)]);
var inst_16244 = (state_16291[(11)]);
var inst_16251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16244,inst_16246);
var state_16291__$1 = state_16291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16291__$1,(13),out,inst_16251);
} else {
if((state_val_16292 === (18))){
var inst_16257 = (state_16291[(7)]);
var inst_16266 = cljs.core.first(inst_16257);
var state_16291__$1 = state_16291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16291__$1,(20),out,inst_16266);
} else {
if((state_val_16292 === (8))){
var inst_16246 = (state_16291[(8)]);
var inst_16245 = (state_16291[(12)]);
var inst_16248 = (inst_16246 < inst_16245);
var inst_16249 = inst_16248;
var state_16291__$1 = state_16291;
if(cljs.core.truth_(inst_16249)){
var statearr_16325_16356 = state_16291__$1;
(statearr_16325_16356[(1)] = (10));

} else {
var statearr_16326_16357 = state_16291__$1;
(statearr_16326_16357[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__13829__auto__))
;
return ((function (switch__13715__auto__,c__13829__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13716__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13716__auto____0 = (function (){
var statearr_16330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16330[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13716__auto__);

(statearr_16330[(1)] = (1));

return statearr_16330;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13716__auto____1 = (function (state_16291){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_16291);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e16331){if((e16331 instanceof Object)){
var ex__13719__auto__ = e16331;
var statearr_16332_16358 = state_16291;
(statearr_16332_16358[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16291);

return cljs.core.cst$kw$recur;
} else {
throw e16331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__16359 = state_16291;
state_16291 = G__16359;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13716__auto__ = function(state_16291){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13716__auto____1.call(this,state_16291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13716__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13716__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto__))
})();
var state__13831__auto__ = (function (){var statearr_16333 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_16333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto__);

return statearr_16333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto__))
);

return c__13829__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16360 = [];
var len__7200__auto___16363 = arguments.length;
var i__7201__auto___16364 = (0);
while(true){
if((i__7201__auto___16364 < len__7200__auto___16363)){
args16360.push((arguments[i__7201__auto___16364]));

var G__16365 = (i__7201__auto___16364 + (1));
i__7201__auto___16364 = G__16365;
continue;
} else {
}
break;
}

var G__16362 = args16360.length;
switch (G__16362) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16360.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16367 = [];
var len__7200__auto___16370 = arguments.length;
var i__7201__auto___16371 = (0);
while(true){
if((i__7201__auto___16371 < len__7200__auto___16370)){
args16367.push((arguments[i__7201__auto___16371]));

var G__16372 = (i__7201__auto___16371 + (1));
i__7201__auto___16371 = G__16372;
continue;
} else {
}
break;
}

var G__16369 = args16367.length;
switch (G__16369) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16367.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16374 = [];
var len__7200__auto___16425 = arguments.length;
var i__7201__auto___16426 = (0);
while(true){
if((i__7201__auto___16426 < len__7200__auto___16425)){
args16374.push((arguments[i__7201__auto___16426]));

var G__16427 = (i__7201__auto___16426 + (1));
i__7201__auto___16426 = G__16427;
continue;
} else {
}
break;
}

var G__16376 = args16374.length;
switch (G__16376) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16374.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13829__auto___16429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___16429,out){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___16429,out){
return (function (state_16400){
var state_val_16401 = (state_16400[(1)]);
if((state_val_16401 === (7))){
var inst_16395 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
var statearr_16402_16430 = state_16400__$1;
(statearr_16402_16430[(2)] = inst_16395);

(statearr_16402_16430[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16401 === (1))){
var inst_16377 = null;
var state_16400__$1 = (function (){var statearr_16403 = state_16400;
(statearr_16403[(7)] = inst_16377);

return statearr_16403;
})();
var statearr_16404_16431 = state_16400__$1;
(statearr_16404_16431[(2)] = null);

(statearr_16404_16431[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16401 === (4))){
var inst_16380 = (state_16400[(8)]);
var inst_16380__$1 = (state_16400[(2)]);
var inst_16381 = (inst_16380__$1 == null);
var inst_16382 = cljs.core.not(inst_16381);
var state_16400__$1 = (function (){var statearr_16405 = state_16400;
(statearr_16405[(8)] = inst_16380__$1);

return statearr_16405;
})();
if(inst_16382){
var statearr_16406_16432 = state_16400__$1;
(statearr_16406_16432[(1)] = (5));

} else {
var statearr_16407_16433 = state_16400__$1;
(statearr_16407_16433[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16401 === (6))){
var state_16400__$1 = state_16400;
var statearr_16408_16434 = state_16400__$1;
(statearr_16408_16434[(2)] = null);

(statearr_16408_16434[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16401 === (3))){
var inst_16397 = (state_16400[(2)]);
var inst_16398 = cljs.core.async.close_BANG_(out);
var state_16400__$1 = (function (){var statearr_16409 = state_16400;
(statearr_16409[(9)] = inst_16397);

return statearr_16409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16400__$1,inst_16398);
} else {
if((state_val_16401 === (2))){
var state_16400__$1 = state_16400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16400__$1,(4),ch);
} else {
if((state_val_16401 === (11))){
var inst_16380 = (state_16400[(8)]);
var inst_16389 = (state_16400[(2)]);
var inst_16377 = inst_16380;
var state_16400__$1 = (function (){var statearr_16410 = state_16400;
(statearr_16410[(7)] = inst_16377);

(statearr_16410[(10)] = inst_16389);

return statearr_16410;
})();
var statearr_16411_16435 = state_16400__$1;
(statearr_16411_16435[(2)] = null);

(statearr_16411_16435[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16401 === (9))){
var inst_16380 = (state_16400[(8)]);
var state_16400__$1 = state_16400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16400__$1,(11),out,inst_16380);
} else {
if((state_val_16401 === (5))){
var inst_16377 = (state_16400[(7)]);
var inst_16380 = (state_16400[(8)]);
var inst_16384 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16380,inst_16377);
var state_16400__$1 = state_16400;
if(inst_16384){
var statearr_16413_16436 = state_16400__$1;
(statearr_16413_16436[(1)] = (8));

} else {
var statearr_16414_16437 = state_16400__$1;
(statearr_16414_16437[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16401 === (10))){
var inst_16392 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
var statearr_16415_16438 = state_16400__$1;
(statearr_16415_16438[(2)] = inst_16392);

(statearr_16415_16438[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16401 === (8))){
var inst_16377 = (state_16400[(7)]);
var tmp16412 = inst_16377;
var inst_16377__$1 = tmp16412;
var state_16400__$1 = (function (){var statearr_16416 = state_16400;
(statearr_16416[(7)] = inst_16377__$1);

return statearr_16416;
})();
var statearr_16417_16439 = state_16400__$1;
(statearr_16417_16439[(2)] = null);

(statearr_16417_16439[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___16429,out))
;
return ((function (switch__13715__auto__,c__13829__auto___16429,out){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_16421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16421[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_16421[(1)] = (1));

return statearr_16421;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_16400){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_16400);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e16422){if((e16422 instanceof Object)){
var ex__13719__auto__ = e16422;
var statearr_16423_16440 = state_16400;
(statearr_16423_16440[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16400);

return cljs.core.cst$kw$recur;
} else {
throw e16422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__16441 = state_16400;
state_16400 = G__16441;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_16400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_16400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___16429,out))
})();
var state__13831__auto__ = (function (){var statearr_16424 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_16424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___16429);

return statearr_16424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___16429,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16442 = [];
var len__7200__auto___16512 = arguments.length;
var i__7201__auto___16513 = (0);
while(true){
if((i__7201__auto___16513 < len__7200__auto___16512)){
args16442.push((arguments[i__7201__auto___16513]));

var G__16514 = (i__7201__auto___16513 + (1));
i__7201__auto___16513 = G__16514;
continue;
} else {
}
break;
}

var G__16444 = args16442.length;
switch (G__16444) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16442.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13829__auto___16516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___16516,out){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___16516,out){
return (function (state_16482){
var state_val_16483 = (state_16482[(1)]);
if((state_val_16483 === (7))){
var inst_16478 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16484_16517 = state_16482__$1;
(statearr_16484_16517[(2)] = inst_16478);

(statearr_16484_16517[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (1))){
var inst_16445 = (new Array(n));
var inst_16446 = inst_16445;
var inst_16447 = (0);
var state_16482__$1 = (function (){var statearr_16485 = state_16482;
(statearr_16485[(7)] = inst_16446);

(statearr_16485[(8)] = inst_16447);

return statearr_16485;
})();
var statearr_16486_16518 = state_16482__$1;
(statearr_16486_16518[(2)] = null);

(statearr_16486_16518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (4))){
var inst_16450 = (state_16482[(9)]);
var inst_16450__$1 = (state_16482[(2)]);
var inst_16451 = (inst_16450__$1 == null);
var inst_16452 = cljs.core.not(inst_16451);
var state_16482__$1 = (function (){var statearr_16487 = state_16482;
(statearr_16487[(9)] = inst_16450__$1);

return statearr_16487;
})();
if(inst_16452){
var statearr_16488_16519 = state_16482__$1;
(statearr_16488_16519[(1)] = (5));

} else {
var statearr_16489_16520 = state_16482__$1;
(statearr_16489_16520[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (15))){
var inst_16472 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16490_16521 = state_16482__$1;
(statearr_16490_16521[(2)] = inst_16472);

(statearr_16490_16521[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (13))){
var state_16482__$1 = state_16482;
var statearr_16491_16522 = state_16482__$1;
(statearr_16491_16522[(2)] = null);

(statearr_16491_16522[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (6))){
var inst_16447 = (state_16482[(8)]);
var inst_16468 = (inst_16447 > (0));
var state_16482__$1 = state_16482;
if(cljs.core.truth_(inst_16468)){
var statearr_16492_16523 = state_16482__$1;
(statearr_16492_16523[(1)] = (12));

} else {
var statearr_16493_16524 = state_16482__$1;
(statearr_16493_16524[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (3))){
var inst_16480 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16482__$1,inst_16480);
} else {
if((state_val_16483 === (12))){
var inst_16446 = (state_16482[(7)]);
var inst_16470 = cljs.core.vec(inst_16446);
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16482__$1,(15),out,inst_16470);
} else {
if((state_val_16483 === (2))){
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16482__$1,(4),ch);
} else {
if((state_val_16483 === (11))){
var inst_16462 = (state_16482[(2)]);
var inst_16463 = (new Array(n));
var inst_16446 = inst_16463;
var inst_16447 = (0);
var state_16482__$1 = (function (){var statearr_16494 = state_16482;
(statearr_16494[(10)] = inst_16462);

(statearr_16494[(7)] = inst_16446);

(statearr_16494[(8)] = inst_16447);

return statearr_16494;
})();
var statearr_16495_16525 = state_16482__$1;
(statearr_16495_16525[(2)] = null);

(statearr_16495_16525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (9))){
var inst_16446 = (state_16482[(7)]);
var inst_16460 = cljs.core.vec(inst_16446);
var state_16482__$1 = state_16482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16482__$1,(11),out,inst_16460);
} else {
if((state_val_16483 === (5))){
var inst_16450 = (state_16482[(9)]);
var inst_16455 = (state_16482[(11)]);
var inst_16446 = (state_16482[(7)]);
var inst_16447 = (state_16482[(8)]);
var inst_16454 = (inst_16446[inst_16447] = inst_16450);
var inst_16455__$1 = (inst_16447 + (1));
var inst_16456 = (inst_16455__$1 < n);
var state_16482__$1 = (function (){var statearr_16496 = state_16482;
(statearr_16496[(11)] = inst_16455__$1);

(statearr_16496[(12)] = inst_16454);

return statearr_16496;
})();
if(cljs.core.truth_(inst_16456)){
var statearr_16497_16526 = state_16482__$1;
(statearr_16497_16526[(1)] = (8));

} else {
var statearr_16498_16527 = state_16482__$1;
(statearr_16498_16527[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (14))){
var inst_16475 = (state_16482[(2)]);
var inst_16476 = cljs.core.async.close_BANG_(out);
var state_16482__$1 = (function (){var statearr_16500 = state_16482;
(statearr_16500[(13)] = inst_16475);

return statearr_16500;
})();
var statearr_16501_16528 = state_16482__$1;
(statearr_16501_16528[(2)] = inst_16476);

(statearr_16501_16528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (10))){
var inst_16466 = (state_16482[(2)]);
var state_16482__$1 = state_16482;
var statearr_16502_16529 = state_16482__$1;
(statearr_16502_16529[(2)] = inst_16466);

(statearr_16502_16529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16483 === (8))){
var inst_16455 = (state_16482[(11)]);
var inst_16446 = (state_16482[(7)]);
var tmp16499 = inst_16446;
var inst_16446__$1 = tmp16499;
var inst_16447 = inst_16455;
var state_16482__$1 = (function (){var statearr_16503 = state_16482;
(statearr_16503[(7)] = inst_16446__$1);

(statearr_16503[(8)] = inst_16447);

return statearr_16503;
})();
var statearr_16504_16530 = state_16482__$1;
(statearr_16504_16530[(2)] = null);

(statearr_16504_16530[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___16516,out))
;
return ((function (switch__13715__auto__,c__13829__auto___16516,out){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_16508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16508[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_16508[(1)] = (1));

return statearr_16508;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_16482){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_16482);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e16509){if((e16509 instanceof Object)){
var ex__13719__auto__ = e16509;
var statearr_16510_16531 = state_16482;
(statearr_16510_16531[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16482);

return cljs.core.cst$kw$recur;
} else {
throw e16509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__16532 = state_16482;
state_16482 = G__16532;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_16482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_16482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___16516,out))
})();
var state__13831__auto__ = (function (){var statearr_16511 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_16511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___16516);

return statearr_16511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___16516,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16533 = [];
var len__7200__auto___16607 = arguments.length;
var i__7201__auto___16608 = (0);
while(true){
if((i__7201__auto___16608 < len__7200__auto___16607)){
args16533.push((arguments[i__7201__auto___16608]));

var G__16609 = (i__7201__auto___16608 + (1));
i__7201__auto___16608 = G__16609;
continue;
} else {
}
break;
}

var G__16535 = args16533.length;
switch (G__16535) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16533.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13829__auto___16611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13829__auto___16611,out){
return (function (){
var f__13830__auto__ = (function (){var switch__13715__auto__ = ((function (c__13829__auto___16611,out){
return (function (state_16577){
var state_val_16578 = (state_16577[(1)]);
if((state_val_16578 === (7))){
var inst_16573 = (state_16577[(2)]);
var state_16577__$1 = state_16577;
var statearr_16579_16612 = state_16577__$1;
(statearr_16579_16612[(2)] = inst_16573);

(statearr_16579_16612[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (1))){
var inst_16536 = [];
var inst_16537 = inst_16536;
var inst_16538 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16577__$1 = (function (){var statearr_16580 = state_16577;
(statearr_16580[(7)] = inst_16538);

(statearr_16580[(8)] = inst_16537);

return statearr_16580;
})();
var statearr_16581_16613 = state_16577__$1;
(statearr_16581_16613[(2)] = null);

(statearr_16581_16613[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (4))){
var inst_16541 = (state_16577[(9)]);
var inst_16541__$1 = (state_16577[(2)]);
var inst_16542 = (inst_16541__$1 == null);
var inst_16543 = cljs.core.not(inst_16542);
var state_16577__$1 = (function (){var statearr_16582 = state_16577;
(statearr_16582[(9)] = inst_16541__$1);

return statearr_16582;
})();
if(inst_16543){
var statearr_16583_16614 = state_16577__$1;
(statearr_16583_16614[(1)] = (5));

} else {
var statearr_16584_16615 = state_16577__$1;
(statearr_16584_16615[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (15))){
var inst_16567 = (state_16577[(2)]);
var state_16577__$1 = state_16577;
var statearr_16585_16616 = state_16577__$1;
(statearr_16585_16616[(2)] = inst_16567);

(statearr_16585_16616[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (13))){
var state_16577__$1 = state_16577;
var statearr_16586_16617 = state_16577__$1;
(statearr_16586_16617[(2)] = null);

(statearr_16586_16617[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (6))){
var inst_16537 = (state_16577[(8)]);
var inst_16562 = inst_16537.length;
var inst_16563 = (inst_16562 > (0));
var state_16577__$1 = state_16577;
if(cljs.core.truth_(inst_16563)){
var statearr_16587_16618 = state_16577__$1;
(statearr_16587_16618[(1)] = (12));

} else {
var statearr_16588_16619 = state_16577__$1;
(statearr_16588_16619[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (3))){
var inst_16575 = (state_16577[(2)]);
var state_16577__$1 = state_16577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16577__$1,inst_16575);
} else {
if((state_val_16578 === (12))){
var inst_16537 = (state_16577[(8)]);
var inst_16565 = cljs.core.vec(inst_16537);
var state_16577__$1 = state_16577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16577__$1,(15),out,inst_16565);
} else {
if((state_val_16578 === (2))){
var state_16577__$1 = state_16577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16577__$1,(4),ch);
} else {
if((state_val_16578 === (11))){
var inst_16545 = (state_16577[(10)]);
var inst_16541 = (state_16577[(9)]);
var inst_16555 = (state_16577[(2)]);
var inst_16556 = [];
var inst_16557 = inst_16556.push(inst_16541);
var inst_16537 = inst_16556;
var inst_16538 = inst_16545;
var state_16577__$1 = (function (){var statearr_16589 = state_16577;
(statearr_16589[(11)] = inst_16557);

(statearr_16589[(12)] = inst_16555);

(statearr_16589[(7)] = inst_16538);

(statearr_16589[(8)] = inst_16537);

return statearr_16589;
})();
var statearr_16590_16620 = state_16577__$1;
(statearr_16590_16620[(2)] = null);

(statearr_16590_16620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (9))){
var inst_16537 = (state_16577[(8)]);
var inst_16553 = cljs.core.vec(inst_16537);
var state_16577__$1 = state_16577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16577__$1,(11),out,inst_16553);
} else {
if((state_val_16578 === (5))){
var inst_16538 = (state_16577[(7)]);
var inst_16545 = (state_16577[(10)]);
var inst_16541 = (state_16577[(9)]);
var inst_16545__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16541) : f.call(null,inst_16541));
var inst_16546 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16545__$1,inst_16538);
var inst_16547 = cljs.core.keyword_identical_QMARK_(inst_16538,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16548 = (inst_16546) || (inst_16547);
var state_16577__$1 = (function (){var statearr_16591 = state_16577;
(statearr_16591[(10)] = inst_16545__$1);

return statearr_16591;
})();
if(cljs.core.truth_(inst_16548)){
var statearr_16592_16621 = state_16577__$1;
(statearr_16592_16621[(1)] = (8));

} else {
var statearr_16593_16622 = state_16577__$1;
(statearr_16593_16622[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (14))){
var inst_16570 = (state_16577[(2)]);
var inst_16571 = cljs.core.async.close_BANG_(out);
var state_16577__$1 = (function (){var statearr_16595 = state_16577;
(statearr_16595[(13)] = inst_16570);

return statearr_16595;
})();
var statearr_16596_16623 = state_16577__$1;
(statearr_16596_16623[(2)] = inst_16571);

(statearr_16596_16623[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (10))){
var inst_16560 = (state_16577[(2)]);
var state_16577__$1 = state_16577;
var statearr_16597_16624 = state_16577__$1;
(statearr_16597_16624[(2)] = inst_16560);

(statearr_16597_16624[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16578 === (8))){
var inst_16545 = (state_16577[(10)]);
var inst_16541 = (state_16577[(9)]);
var inst_16537 = (state_16577[(8)]);
var inst_16550 = inst_16537.push(inst_16541);
var tmp16594 = inst_16537;
var inst_16537__$1 = tmp16594;
var inst_16538 = inst_16545;
var state_16577__$1 = (function (){var statearr_16598 = state_16577;
(statearr_16598[(14)] = inst_16550);

(statearr_16598[(7)] = inst_16538);

(statearr_16598[(8)] = inst_16537__$1);

return statearr_16598;
})();
var statearr_16599_16625 = state_16577__$1;
(statearr_16599_16625[(2)] = null);

(statearr_16599_16625[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__13829__auto___16611,out))
;
return ((function (switch__13715__auto__,c__13829__auto___16611,out){
return (function() {
var cljs$core$async$state_machine__13716__auto__ = null;
var cljs$core$async$state_machine__13716__auto____0 = (function (){
var statearr_16603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16603[(0)] = cljs$core$async$state_machine__13716__auto__);

(statearr_16603[(1)] = (1));

return statearr_16603;
});
var cljs$core$async$state_machine__13716__auto____1 = (function (state_16577){
while(true){
var ret_value__13717__auto__ = (function (){try{while(true){
var result__13718__auto__ = switch__13715__auto__(state_16577);
if(cljs.core.keyword_identical_QMARK_(result__13718__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13718__auto__;
}
break;
}
}catch (e16604){if((e16604 instanceof Object)){
var ex__13719__auto__ = e16604;
var statearr_16605_16626 = state_16577;
(statearr_16605_16626[(5)] = ex__13719__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16577);

return cljs.core.cst$kw$recur;
} else {
throw e16604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13717__auto__,cljs.core.cst$kw$recur)){
var G__16627 = state_16577;
state_16577 = G__16627;
continue;
} else {
return ret_value__13717__auto__;
}
break;
}
});
cljs$core$async$state_machine__13716__auto__ = function(state_16577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13716__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13716__auto____1.call(this,state_16577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13716__auto____0;
cljs$core$async$state_machine__13716__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13716__auto____1;
return cljs$core$async$state_machine__13716__auto__;
})()
;})(switch__13715__auto__,c__13829__auto___16611,out))
})();
var state__13831__auto__ = (function (){var statearr_16606 = (f__13830__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13830__auto__.cljs$core$IFn$_invoke$arity$0() : f__13830__auto__.call(null));
(statearr_16606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13829__auto___16611);

return statearr_16606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13831__auto__);
});})(c__13829__auto___16611,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
