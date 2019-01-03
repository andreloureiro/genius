// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20503 = [];
var len__19349__auto___20509 = arguments.length;
var i__19350__auto___20510 = (0);
while(true){
if((i__19350__auto___20510 < len__19349__auto___20509)){
args20503.push((arguments[i__19350__auto___20510]));

var G__20511 = (i__19350__auto___20510 + (1));
i__19350__auto___20510 = G__20511;
continue;
} else {
}
break;
}

var G__20505 = args20503.length;
switch (G__20505) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20503.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20506 = (function (f,blockable,meta20507){
this.f = f;
this.blockable = blockable;
this.meta20507 = meta20507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20508,meta20507__$1){
var self__ = this;
var _20508__$1 = this;
return (new cljs.core.async.t_cljs$core$async20506(self__.f,self__.blockable,meta20507__$1));
});

cljs.core.async.t_cljs$core$async20506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20508){
var self__ = this;
var _20508__$1 = this;
return self__.meta20507;
});

cljs.core.async.t_cljs$core$async20506.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20507","meta20507",-1086945575,null)], null);
});

cljs.core.async.t_cljs$core$async20506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20506";

cljs.core.async.t_cljs$core$async20506.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async20506");
});

cljs.core.async.__GT_t_cljs$core$async20506 = (function cljs$core$async$__GT_t_cljs$core$async20506(f__$1,blockable__$1,meta20507){
return (new cljs.core.async.t_cljs$core$async20506(f__$1,blockable__$1,meta20507));
});

}

return (new cljs.core.async.t_cljs$core$async20506(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args20515 = [];
var len__19349__auto___20518 = arguments.length;
var i__19350__auto___20519 = (0);
while(true){
if((i__19350__auto___20519 < len__19349__auto___20518)){
args20515.push((arguments[i__19350__auto___20519]));

var G__20520 = (i__19350__auto___20519 + (1));
i__19350__auto___20519 = G__20520;
continue;
} else {
}
break;
}

var G__20517 = args20515.length;
switch (G__20517) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20515.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args20522 = [];
var len__19349__auto___20525 = arguments.length;
var i__19350__auto___20526 = (0);
while(true){
if((i__19350__auto___20526 < len__19349__auto___20525)){
args20522.push((arguments[i__19350__auto___20526]));

var G__20527 = (i__19350__auto___20526 + (1));
i__19350__auto___20526 = G__20527;
continue;
} else {
}
break;
}

var G__20524 = args20522.length;
switch (G__20524) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20522.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args20529 = [];
var len__19349__auto___20532 = arguments.length;
var i__19350__auto___20533 = (0);
while(true){
if((i__19350__auto___20533 < len__19349__auto___20532)){
args20529.push((arguments[i__19350__auto___20533]));

var G__20534 = (i__19350__auto___20533 + (1));
i__19350__auto___20533 = G__20534;
continue;
} else {
}
break;
}

var G__20531 = args20529.length;
switch (G__20531) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20529.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20536 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20536);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20536,ret){
return (function (){
return fn1.call(null,val_20536);
});})(val_20536,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var args20537 = [];
var len__19349__auto___20540 = arguments.length;
var i__19350__auto___20541 = (0);
while(true){
if((i__19350__auto___20541 < len__19349__auto___20540)){
args20537.push((arguments[i__19350__auto___20541]));

var G__20542 = (i__19350__auto___20541 + (1));
i__19350__auto___20541 = G__20542;
continue;
} else {
}
break;
}

var G__20539 = args20537.length;
switch (G__20539) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20537.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19194__auto___20544 = n;
var x_20545 = (0);
while(true){
if((x_20545 < n__19194__auto___20544)){
(a[x_20545] = (0));

var G__20546 = (x_20545 + (1));
x_20545 = G__20546;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20547 = (i + (1));
i = G__20547;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20551 = (function (alt_flag,flag,meta20552){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20552 = meta20552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20553,meta20552__$1){
var self__ = this;
var _20553__$1 = this;
return (new cljs.core.async.t_cljs$core$async20551(self__.alt_flag,self__.flag,meta20552__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20553){
var self__ = this;
var _20553__$1 = this;
return self__.meta20552;
});})(flag))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20551.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20552","meta20552",-582972342,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20551";

cljs.core.async.t_cljs$core$async20551.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async20551");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20551 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20551(alt_flag__$1,flag__$1,meta20552){
return (new cljs.core.async.t_cljs$core$async20551(alt_flag__$1,flag__$1,meta20552));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20551(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20557 = (function (alt_handler,flag,cb,meta20558){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20558 = meta20558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20559,meta20558__$1){
var self__ = this;
var _20559__$1 = this;
return (new cljs.core.async.t_cljs$core$async20557(self__.alt_handler,self__.flag,self__.cb,meta20558__$1));
});

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20559){
var self__ = this;
var _20559__$1 = this;
return self__.meta20558;
});

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20558","meta20558",-1551737607,null)], null);
});

cljs.core.async.t_cljs$core$async20557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20557";

cljs.core.async.t_cljs$core$async20557.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async20557");
});

cljs.core.async.__GT_t_cljs$core$async20557 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20557(alt_handler__$1,flag__$1,cb__$1,meta20558){
return (new cljs.core.async.t_cljs$core$async20557(alt_handler__$1,flag__$1,cb__$1,meta20558));
});

}

return (new cljs.core.async.t_cljs$core$async20557(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20560_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20560_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20561_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20561_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18291__auto__ = wport;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20562 = (i + (1));
i = G__20562;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18291__auto__ = ret;
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18279__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18279__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__19356__auto__ = [];
var len__19349__auto___20568 = arguments.length;
var i__19350__auto___20569 = (0);
while(true){
if((i__19350__auto___20569 < len__19349__auto___20568)){
args__19356__auto__.push((arguments[i__19350__auto___20569]));

var G__20570 = (i__19350__auto___20569 + (1));
i__19350__auto___20569 = G__20570;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((1) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19357__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20565){
var map__20566 = p__20565;
var map__20566__$1 = ((((!((map__20566 == null)))?((((map__20566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20566):map__20566);
var opts = map__20566__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20563){
var G__20564 = cljs.core.first.call(null,seq20563);
var seq20563__$1 = cljs.core.next.call(null,seq20563);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20564,seq20563__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args20571 = [];
var len__19349__auto___20621 = arguments.length;
var i__19350__auto___20622 = (0);
while(true){
if((i__19350__auto___20622 < len__19349__auto___20621)){
args20571.push((arguments[i__19350__auto___20622]));

var G__20623 = (i__19350__auto___20622 + (1));
i__19350__auto___20622 = G__20623;
continue;
} else {
}
break;
}

var G__20573 = args20571.length;
switch (G__20573) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20571.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20458__auto___20625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___20625){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___20625){
return (function (state_20597){
var state_val_20598 = (state_20597[(1)]);
if((state_val_20598 === (7))){
var inst_20593 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
var statearr_20599_20626 = state_20597__$1;
(statearr_20599_20626[(2)] = inst_20593);

(statearr_20599_20626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (1))){
var state_20597__$1 = state_20597;
var statearr_20600_20627 = state_20597__$1;
(statearr_20600_20627[(2)] = null);

(statearr_20600_20627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (4))){
var inst_20576 = (state_20597[(7)]);
var inst_20576__$1 = (state_20597[(2)]);
var inst_20577 = (inst_20576__$1 == null);
var state_20597__$1 = (function (){var statearr_20601 = state_20597;
(statearr_20601[(7)] = inst_20576__$1);

return statearr_20601;
})();
if(cljs.core.truth_(inst_20577)){
var statearr_20602_20628 = state_20597__$1;
(statearr_20602_20628[(1)] = (5));

} else {
var statearr_20603_20629 = state_20597__$1;
(statearr_20603_20629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (13))){
var state_20597__$1 = state_20597;
var statearr_20604_20630 = state_20597__$1;
(statearr_20604_20630[(2)] = null);

(statearr_20604_20630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (6))){
var inst_20576 = (state_20597[(7)]);
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20597__$1,(11),to,inst_20576);
} else {
if((state_val_20598 === (3))){
var inst_20595 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20597__$1,inst_20595);
} else {
if((state_val_20598 === (12))){
var state_20597__$1 = state_20597;
var statearr_20605_20631 = state_20597__$1;
(statearr_20605_20631[(2)] = null);

(statearr_20605_20631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (2))){
var state_20597__$1 = state_20597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20597__$1,(4),from);
} else {
if((state_val_20598 === (11))){
var inst_20586 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
if(cljs.core.truth_(inst_20586)){
var statearr_20606_20632 = state_20597__$1;
(statearr_20606_20632[(1)] = (12));

} else {
var statearr_20607_20633 = state_20597__$1;
(statearr_20607_20633[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (9))){
var state_20597__$1 = state_20597;
var statearr_20608_20634 = state_20597__$1;
(statearr_20608_20634[(2)] = null);

(statearr_20608_20634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (5))){
var state_20597__$1 = state_20597;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20609_20635 = state_20597__$1;
(statearr_20609_20635[(1)] = (8));

} else {
var statearr_20610_20636 = state_20597__$1;
(statearr_20610_20636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (14))){
var inst_20591 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
var statearr_20611_20637 = state_20597__$1;
(statearr_20611_20637[(2)] = inst_20591);

(statearr_20611_20637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (10))){
var inst_20583 = (state_20597[(2)]);
var state_20597__$1 = state_20597;
var statearr_20612_20638 = state_20597__$1;
(statearr_20612_20638[(2)] = inst_20583);

(statearr_20612_20638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20598 === (8))){
var inst_20580 = cljs.core.async.close_BANG_.call(null,to);
var state_20597__$1 = state_20597;
var statearr_20613_20639 = state_20597__$1;
(statearr_20613_20639[(2)] = inst_20580);

(statearr_20613_20639[(1)] = (10));


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
});})(c__20458__auto___20625))
;
return ((function (switch__20346__auto__,c__20458__auto___20625){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_20617 = [null,null,null,null,null,null,null,null];
(statearr_20617[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_20617[(1)] = (1));

return statearr_20617;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_20597){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_20597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e20618){if((e20618 instanceof Object)){
var ex__20350__auto__ = e20618;
var statearr_20619_20640 = state_20597;
(statearr_20619_20640[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20641 = state_20597;
state_20597 = G__20641;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_20597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_20597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___20625))
})();
var state__20460__auto__ = (function (){var statearr_20620 = f__20459__auto__.call(null);
(statearr_20620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___20625);

return statearr_20620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___20625))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20825){
var vec__20826 = p__20825;
var v = cljs.core.nth.call(null,vec__20826,(0),null);
var p = cljs.core.nth.call(null,vec__20826,(1),null);
var job = vec__20826;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20458__auto___21008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___21008,res,vec__20826,v,p,job,jobs,results){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___21008,res,vec__20826,v,p,job,jobs,results){
return (function (state_20831){
var state_val_20832 = (state_20831[(1)]);
if((state_val_20832 === (1))){
var state_20831__$1 = state_20831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20831__$1,(2),res,v);
} else {
if((state_val_20832 === (2))){
var inst_20828 = (state_20831[(2)]);
var inst_20829 = cljs.core.async.close_BANG_.call(null,res);
var state_20831__$1 = (function (){var statearr_20833 = state_20831;
(statearr_20833[(7)] = inst_20828);

return statearr_20833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20831__$1,inst_20829);
} else {
return null;
}
}
});})(c__20458__auto___21008,res,vec__20826,v,p,job,jobs,results))
;
return ((function (switch__20346__auto__,c__20458__auto___21008,res,vec__20826,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0 = (function (){
var statearr_20837 = [null,null,null,null,null,null,null,null];
(statearr_20837[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__);

(statearr_20837[(1)] = (1));

return statearr_20837;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1 = (function (state_20831){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_20831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e20838){if((e20838 instanceof Object)){
var ex__20350__auto__ = e20838;
var statearr_20839_21009 = state_20831;
(statearr_20839_21009[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21010 = state_20831;
state_20831 = G__21010;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = function(state_20831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1.call(this,state_20831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___21008,res,vec__20826,v,p,job,jobs,results))
})();
var state__20460__auto__ = (function (){var statearr_20840 = f__20459__auto__.call(null);
(statearr_20840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___21008);

return statearr_20840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___21008,res,vec__20826,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20841){
var vec__20842 = p__20841;
var v = cljs.core.nth.call(null,vec__20842,(0),null);
var p = cljs.core.nth.call(null,vec__20842,(1),null);
var job = vec__20842;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19194__auto___21011 = n;
var __21012 = (0);
while(true){
if((__21012 < n__19194__auto___21011)){
var G__20843_21013 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20843_21013) {
case "compute":
var c__20458__auto___21015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21012,c__20458__auto___21015,G__20843_21013,n__19194__auto___21011,jobs,results,process,async){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (__21012,c__20458__auto___21015,G__20843_21013,n__19194__auto___21011,jobs,results,process,async){
return (function (state_20856){
var state_val_20857 = (state_20856[(1)]);
if((state_val_20857 === (1))){
var state_20856__$1 = state_20856;
var statearr_20858_21016 = state_20856__$1;
(statearr_20858_21016[(2)] = null);

(statearr_20858_21016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20857 === (2))){
var state_20856__$1 = state_20856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20856__$1,(4),jobs);
} else {
if((state_val_20857 === (3))){
var inst_20854 = (state_20856[(2)]);
var state_20856__$1 = state_20856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20856__$1,inst_20854);
} else {
if((state_val_20857 === (4))){
var inst_20846 = (state_20856[(2)]);
var inst_20847 = process.call(null,inst_20846);
var state_20856__$1 = state_20856;
if(cljs.core.truth_(inst_20847)){
var statearr_20859_21017 = state_20856__$1;
(statearr_20859_21017[(1)] = (5));

} else {
var statearr_20860_21018 = state_20856__$1;
(statearr_20860_21018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20857 === (5))){
var state_20856__$1 = state_20856;
var statearr_20861_21019 = state_20856__$1;
(statearr_20861_21019[(2)] = null);

(statearr_20861_21019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20857 === (6))){
var state_20856__$1 = state_20856;
var statearr_20862_21020 = state_20856__$1;
(statearr_20862_21020[(2)] = null);

(statearr_20862_21020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20857 === (7))){
var inst_20852 = (state_20856[(2)]);
var state_20856__$1 = state_20856;
var statearr_20863_21021 = state_20856__$1;
(statearr_20863_21021[(2)] = inst_20852);

(statearr_20863_21021[(1)] = (3));


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
});})(__21012,c__20458__auto___21015,G__20843_21013,n__19194__auto___21011,jobs,results,process,async))
;
return ((function (__21012,switch__20346__auto__,c__20458__auto___21015,G__20843_21013,n__19194__auto___21011,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0 = (function (){
var statearr_20867 = [null,null,null,null,null,null,null];
(statearr_20867[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__);

(statearr_20867[(1)] = (1));

return statearr_20867;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1 = (function (state_20856){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_20856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e20868){if((e20868 instanceof Object)){
var ex__20350__auto__ = e20868;
var statearr_20869_21022 = state_20856;
(statearr_20869_21022[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21023 = state_20856;
state_20856 = G__21023;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = function(state_20856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1.call(this,state_20856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__;
})()
;})(__21012,switch__20346__auto__,c__20458__auto___21015,G__20843_21013,n__19194__auto___21011,jobs,results,process,async))
})();
var state__20460__auto__ = (function (){var statearr_20870 = f__20459__auto__.call(null);
(statearr_20870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___21015);

return statearr_20870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(__21012,c__20458__auto___21015,G__20843_21013,n__19194__auto___21011,jobs,results,process,async))
);


break;
case "async":
var c__20458__auto___21024 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21012,c__20458__auto___21024,G__20843_21013,n__19194__auto___21011,jobs,results,process,async){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (__21012,c__20458__auto___21024,G__20843_21013,n__19194__auto___21011,jobs,results,process,async){
return (function (state_20883){
var state_val_20884 = (state_20883[(1)]);
if((state_val_20884 === (1))){
var state_20883__$1 = state_20883;
var statearr_20885_21025 = state_20883__$1;
(statearr_20885_21025[(2)] = null);

(statearr_20885_21025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20884 === (2))){
var state_20883__$1 = state_20883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20883__$1,(4),jobs);
} else {
if((state_val_20884 === (3))){
var inst_20881 = (state_20883[(2)]);
var state_20883__$1 = state_20883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20883__$1,inst_20881);
} else {
if((state_val_20884 === (4))){
var inst_20873 = (state_20883[(2)]);
var inst_20874 = async.call(null,inst_20873);
var state_20883__$1 = state_20883;
if(cljs.core.truth_(inst_20874)){
var statearr_20886_21026 = state_20883__$1;
(statearr_20886_21026[(1)] = (5));

} else {
var statearr_20887_21027 = state_20883__$1;
(statearr_20887_21027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20884 === (5))){
var state_20883__$1 = state_20883;
var statearr_20888_21028 = state_20883__$1;
(statearr_20888_21028[(2)] = null);

(statearr_20888_21028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20884 === (6))){
var state_20883__$1 = state_20883;
var statearr_20889_21029 = state_20883__$1;
(statearr_20889_21029[(2)] = null);

(statearr_20889_21029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20884 === (7))){
var inst_20879 = (state_20883[(2)]);
var state_20883__$1 = state_20883;
var statearr_20890_21030 = state_20883__$1;
(statearr_20890_21030[(2)] = inst_20879);

(statearr_20890_21030[(1)] = (3));


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
});})(__21012,c__20458__auto___21024,G__20843_21013,n__19194__auto___21011,jobs,results,process,async))
;
return ((function (__21012,switch__20346__auto__,c__20458__auto___21024,G__20843_21013,n__19194__auto___21011,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0 = (function (){
var statearr_20894 = [null,null,null,null,null,null,null];
(statearr_20894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__);

(statearr_20894[(1)] = (1));

return statearr_20894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1 = (function (state_20883){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_20883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e20895){if((e20895 instanceof Object)){
var ex__20350__auto__ = e20895;
var statearr_20896_21031 = state_20883;
(statearr_20896_21031[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21032 = state_20883;
state_20883 = G__21032;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = function(state_20883){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1.call(this,state_20883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__;
})()
;})(__21012,switch__20346__auto__,c__20458__auto___21024,G__20843_21013,n__19194__auto___21011,jobs,results,process,async))
})();
var state__20460__auto__ = (function (){var statearr_20897 = f__20459__auto__.call(null);
(statearr_20897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___21024);

return statearr_20897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(__21012,c__20458__auto___21024,G__20843_21013,n__19194__auto___21011,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21033 = (__21012 + (1));
__21012 = G__21033;
continue;
} else {
}
break;
}

var c__20458__auto___21034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___21034,jobs,results,process,async){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___21034,jobs,results,process,async){
return (function (state_20919){
var state_val_20920 = (state_20919[(1)]);
if((state_val_20920 === (1))){
var state_20919__$1 = state_20919;
var statearr_20921_21035 = state_20919__$1;
(statearr_20921_21035[(2)] = null);

(statearr_20921_21035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (2))){
var state_20919__$1 = state_20919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20919__$1,(4),from);
} else {
if((state_val_20920 === (3))){
var inst_20917 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20919__$1,inst_20917);
} else {
if((state_val_20920 === (4))){
var inst_20900 = (state_20919[(7)]);
var inst_20900__$1 = (state_20919[(2)]);
var inst_20901 = (inst_20900__$1 == null);
var state_20919__$1 = (function (){var statearr_20922 = state_20919;
(statearr_20922[(7)] = inst_20900__$1);

return statearr_20922;
})();
if(cljs.core.truth_(inst_20901)){
var statearr_20923_21036 = state_20919__$1;
(statearr_20923_21036[(1)] = (5));

} else {
var statearr_20924_21037 = state_20919__$1;
(statearr_20924_21037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (5))){
var inst_20903 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20919__$1 = state_20919;
var statearr_20925_21038 = state_20919__$1;
(statearr_20925_21038[(2)] = inst_20903);

(statearr_20925_21038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (6))){
var inst_20905 = (state_20919[(8)]);
var inst_20900 = (state_20919[(7)]);
var inst_20905__$1 = cljs.core.async.chan.call(null,(1));
var inst_20906 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20907 = [inst_20900,inst_20905__$1];
var inst_20908 = (new cljs.core.PersistentVector(null,2,(5),inst_20906,inst_20907,null));
var state_20919__$1 = (function (){var statearr_20926 = state_20919;
(statearr_20926[(8)] = inst_20905__$1);

return statearr_20926;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20919__$1,(8),jobs,inst_20908);
} else {
if((state_val_20920 === (7))){
var inst_20915 = (state_20919[(2)]);
var state_20919__$1 = state_20919;
var statearr_20927_21039 = state_20919__$1;
(statearr_20927_21039[(2)] = inst_20915);

(statearr_20927_21039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20920 === (8))){
var inst_20905 = (state_20919[(8)]);
var inst_20910 = (state_20919[(2)]);
var state_20919__$1 = (function (){var statearr_20928 = state_20919;
(statearr_20928[(9)] = inst_20910);

return statearr_20928;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20919__$1,(9),results,inst_20905);
} else {
if((state_val_20920 === (9))){
var inst_20912 = (state_20919[(2)]);
var state_20919__$1 = (function (){var statearr_20929 = state_20919;
(statearr_20929[(10)] = inst_20912);

return statearr_20929;
})();
var statearr_20930_21040 = state_20919__$1;
(statearr_20930_21040[(2)] = null);

(statearr_20930_21040[(1)] = (2));


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
});})(c__20458__auto___21034,jobs,results,process,async))
;
return ((function (switch__20346__auto__,c__20458__auto___21034,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0 = (function (){
var statearr_20934 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__);

(statearr_20934[(1)] = (1));

return statearr_20934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1 = (function (state_20919){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_20919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e20935){if((e20935 instanceof Object)){
var ex__20350__auto__ = e20935;
var statearr_20936_21041 = state_20919;
(statearr_20936_21041[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21042 = state_20919;
state_20919 = G__21042;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = function(state_20919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1.call(this,state_20919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___21034,jobs,results,process,async))
})();
var state__20460__auto__ = (function (){var statearr_20937 = f__20459__auto__.call(null);
(statearr_20937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___21034);

return statearr_20937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___21034,jobs,results,process,async))
);


var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__,jobs,results,process,async){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__,jobs,results,process,async){
return (function (state_20975){
var state_val_20976 = (state_20975[(1)]);
if((state_val_20976 === (7))){
var inst_20971 = (state_20975[(2)]);
var state_20975__$1 = state_20975;
var statearr_20977_21043 = state_20975__$1;
(statearr_20977_21043[(2)] = inst_20971);

(statearr_20977_21043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (20))){
var state_20975__$1 = state_20975;
var statearr_20978_21044 = state_20975__$1;
(statearr_20978_21044[(2)] = null);

(statearr_20978_21044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (1))){
var state_20975__$1 = state_20975;
var statearr_20979_21045 = state_20975__$1;
(statearr_20979_21045[(2)] = null);

(statearr_20979_21045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (4))){
var inst_20940 = (state_20975[(7)]);
var inst_20940__$1 = (state_20975[(2)]);
var inst_20941 = (inst_20940__$1 == null);
var state_20975__$1 = (function (){var statearr_20980 = state_20975;
(statearr_20980[(7)] = inst_20940__$1);

return statearr_20980;
})();
if(cljs.core.truth_(inst_20941)){
var statearr_20981_21046 = state_20975__$1;
(statearr_20981_21046[(1)] = (5));

} else {
var statearr_20982_21047 = state_20975__$1;
(statearr_20982_21047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (15))){
var inst_20953 = (state_20975[(8)]);
var state_20975__$1 = state_20975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20975__$1,(18),to,inst_20953);
} else {
if((state_val_20976 === (21))){
var inst_20966 = (state_20975[(2)]);
var state_20975__$1 = state_20975;
var statearr_20983_21048 = state_20975__$1;
(statearr_20983_21048[(2)] = inst_20966);

(statearr_20983_21048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (13))){
var inst_20968 = (state_20975[(2)]);
var state_20975__$1 = (function (){var statearr_20984 = state_20975;
(statearr_20984[(9)] = inst_20968);

return statearr_20984;
})();
var statearr_20985_21049 = state_20975__$1;
(statearr_20985_21049[(2)] = null);

(statearr_20985_21049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (6))){
var inst_20940 = (state_20975[(7)]);
var state_20975__$1 = state_20975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20975__$1,(11),inst_20940);
} else {
if((state_val_20976 === (17))){
var inst_20961 = (state_20975[(2)]);
var state_20975__$1 = state_20975;
if(cljs.core.truth_(inst_20961)){
var statearr_20986_21050 = state_20975__$1;
(statearr_20986_21050[(1)] = (19));

} else {
var statearr_20987_21051 = state_20975__$1;
(statearr_20987_21051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (3))){
var inst_20973 = (state_20975[(2)]);
var state_20975__$1 = state_20975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20975__$1,inst_20973);
} else {
if((state_val_20976 === (12))){
var inst_20950 = (state_20975[(10)]);
var state_20975__$1 = state_20975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20975__$1,(14),inst_20950);
} else {
if((state_val_20976 === (2))){
var state_20975__$1 = state_20975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20975__$1,(4),results);
} else {
if((state_val_20976 === (19))){
var state_20975__$1 = state_20975;
var statearr_20988_21052 = state_20975__$1;
(statearr_20988_21052[(2)] = null);

(statearr_20988_21052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (11))){
var inst_20950 = (state_20975[(2)]);
var state_20975__$1 = (function (){var statearr_20989 = state_20975;
(statearr_20989[(10)] = inst_20950);

return statearr_20989;
})();
var statearr_20990_21053 = state_20975__$1;
(statearr_20990_21053[(2)] = null);

(statearr_20990_21053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (9))){
var state_20975__$1 = state_20975;
var statearr_20991_21054 = state_20975__$1;
(statearr_20991_21054[(2)] = null);

(statearr_20991_21054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (5))){
var state_20975__$1 = state_20975;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20992_21055 = state_20975__$1;
(statearr_20992_21055[(1)] = (8));

} else {
var statearr_20993_21056 = state_20975__$1;
(statearr_20993_21056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (14))){
var inst_20955 = (state_20975[(11)]);
var inst_20953 = (state_20975[(8)]);
var inst_20953__$1 = (state_20975[(2)]);
var inst_20954 = (inst_20953__$1 == null);
var inst_20955__$1 = cljs.core.not.call(null,inst_20954);
var state_20975__$1 = (function (){var statearr_20994 = state_20975;
(statearr_20994[(11)] = inst_20955__$1);

(statearr_20994[(8)] = inst_20953__$1);

return statearr_20994;
})();
if(inst_20955__$1){
var statearr_20995_21057 = state_20975__$1;
(statearr_20995_21057[(1)] = (15));

} else {
var statearr_20996_21058 = state_20975__$1;
(statearr_20996_21058[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (16))){
var inst_20955 = (state_20975[(11)]);
var state_20975__$1 = state_20975;
var statearr_20997_21059 = state_20975__$1;
(statearr_20997_21059[(2)] = inst_20955);

(statearr_20997_21059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (10))){
var inst_20947 = (state_20975[(2)]);
var state_20975__$1 = state_20975;
var statearr_20998_21060 = state_20975__$1;
(statearr_20998_21060[(2)] = inst_20947);

(statearr_20998_21060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (18))){
var inst_20958 = (state_20975[(2)]);
var state_20975__$1 = state_20975;
var statearr_20999_21061 = state_20975__$1;
(statearr_20999_21061[(2)] = inst_20958);

(statearr_20999_21061[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20976 === (8))){
var inst_20944 = cljs.core.async.close_BANG_.call(null,to);
var state_20975__$1 = state_20975;
var statearr_21000_21062 = state_20975__$1;
(statearr_21000_21062[(2)] = inst_20944);

(statearr_21000_21062[(1)] = (10));


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
});})(c__20458__auto__,jobs,results,process,async))
;
return ((function (switch__20346__auto__,c__20458__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0 = (function (){
var statearr_21004 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21004[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__);

(statearr_21004[(1)] = (1));

return statearr_21004;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1 = (function (state_20975){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_20975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e21005){if((e21005 instanceof Object)){
var ex__20350__auto__ = e21005;
var statearr_21006_21063 = state_20975;
(statearr_21006_21063[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21064 = state_20975;
state_20975 = G__21064;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__ = function(state_20975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1.call(this,state_20975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20347__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__,jobs,results,process,async))
})();
var state__20460__auto__ = (function (){var statearr_21007 = f__20459__auto__.call(null);
(statearr_21007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_21007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__,jobs,results,process,async))
);

return c__20458__auto__;
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
var args21065 = [];
var len__19349__auto___21068 = arguments.length;
var i__19350__auto___21069 = (0);
while(true){
if((i__19350__auto___21069 < len__19349__auto___21068)){
args21065.push((arguments[i__19350__auto___21069]));

var G__21070 = (i__19350__auto___21069 + (1));
i__19350__auto___21069 = G__21070;
continue;
} else {
}
break;
}

var G__21067 = args21065.length;
switch (G__21067) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21065.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var args21072 = [];
var len__19349__auto___21075 = arguments.length;
var i__19350__auto___21076 = (0);
while(true){
if((i__19350__auto___21076 < len__19349__auto___21075)){
args21072.push((arguments[i__19350__auto___21076]));

var G__21077 = (i__19350__auto___21076 + (1));
i__19350__auto___21076 = G__21077;
continue;
} else {
}
break;
}

var G__21074 = args21072.length;
switch (G__21074) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21072.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var args21079 = [];
var len__19349__auto___21132 = arguments.length;
var i__19350__auto___21133 = (0);
while(true){
if((i__19350__auto___21133 < len__19349__auto___21132)){
args21079.push((arguments[i__19350__auto___21133]));

var G__21134 = (i__19350__auto___21133 + (1));
i__19350__auto___21133 = G__21134;
continue;
} else {
}
break;
}

var G__21081 = args21079.length;
switch (G__21081) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21079.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20458__auto___21136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___21136,tc,fc){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___21136,tc,fc){
return (function (state_21107){
var state_val_21108 = (state_21107[(1)]);
if((state_val_21108 === (7))){
var inst_21103 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
var statearr_21109_21137 = state_21107__$1;
(statearr_21109_21137[(2)] = inst_21103);

(statearr_21109_21137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (1))){
var state_21107__$1 = state_21107;
var statearr_21110_21138 = state_21107__$1;
(statearr_21110_21138[(2)] = null);

(statearr_21110_21138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (4))){
var inst_21084 = (state_21107[(7)]);
var inst_21084__$1 = (state_21107[(2)]);
var inst_21085 = (inst_21084__$1 == null);
var state_21107__$1 = (function (){var statearr_21111 = state_21107;
(statearr_21111[(7)] = inst_21084__$1);

return statearr_21111;
})();
if(cljs.core.truth_(inst_21085)){
var statearr_21112_21139 = state_21107__$1;
(statearr_21112_21139[(1)] = (5));

} else {
var statearr_21113_21140 = state_21107__$1;
(statearr_21113_21140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (13))){
var state_21107__$1 = state_21107;
var statearr_21114_21141 = state_21107__$1;
(statearr_21114_21141[(2)] = null);

(statearr_21114_21141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (6))){
var inst_21084 = (state_21107[(7)]);
var inst_21090 = p.call(null,inst_21084);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21090)){
var statearr_21115_21142 = state_21107__$1;
(statearr_21115_21142[(1)] = (9));

} else {
var statearr_21116_21143 = state_21107__$1;
(statearr_21116_21143[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (3))){
var inst_21105 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21107__$1,inst_21105);
} else {
if((state_val_21108 === (12))){
var state_21107__$1 = state_21107;
var statearr_21117_21144 = state_21107__$1;
(statearr_21117_21144[(2)] = null);

(statearr_21117_21144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (2))){
var state_21107__$1 = state_21107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21107__$1,(4),ch);
} else {
if((state_val_21108 === (11))){
var inst_21084 = (state_21107[(7)]);
var inst_21094 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21107__$1,(8),inst_21094,inst_21084);
} else {
if((state_val_21108 === (9))){
var state_21107__$1 = state_21107;
var statearr_21118_21145 = state_21107__$1;
(statearr_21118_21145[(2)] = tc);

(statearr_21118_21145[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (5))){
var inst_21087 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21088 = cljs.core.async.close_BANG_.call(null,fc);
var state_21107__$1 = (function (){var statearr_21119 = state_21107;
(statearr_21119[(8)] = inst_21087);

return statearr_21119;
})();
var statearr_21120_21146 = state_21107__$1;
(statearr_21120_21146[(2)] = inst_21088);

(statearr_21120_21146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (14))){
var inst_21101 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
var statearr_21121_21147 = state_21107__$1;
(statearr_21121_21147[(2)] = inst_21101);

(statearr_21121_21147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (10))){
var state_21107__$1 = state_21107;
var statearr_21122_21148 = state_21107__$1;
(statearr_21122_21148[(2)] = fc);

(statearr_21122_21148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (8))){
var inst_21096 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21096)){
var statearr_21123_21149 = state_21107__$1;
(statearr_21123_21149[(1)] = (12));

} else {
var statearr_21124_21150 = state_21107__$1;
(statearr_21124_21150[(1)] = (13));

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
});})(c__20458__auto___21136,tc,fc))
;
return ((function (switch__20346__auto__,c__20458__auto___21136,tc,fc){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_21128 = [null,null,null,null,null,null,null,null,null];
(statearr_21128[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_21128[(1)] = (1));

return statearr_21128;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_21107){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_21107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e21129){if((e21129 instanceof Object)){
var ex__20350__auto__ = e21129;
var statearr_21130_21151 = state_21107;
(statearr_21130_21151[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21152 = state_21107;
state_21107 = G__21152;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_21107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_21107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___21136,tc,fc))
})();
var state__20460__auto__ = (function (){var statearr_21131 = f__20459__auto__.call(null);
(statearr_21131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___21136);

return statearr_21131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___21136,tc,fc))
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
var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__){
return (function (state_21216){
var state_val_21217 = (state_21216[(1)]);
if((state_val_21217 === (7))){
var inst_21212 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
var statearr_21218_21239 = state_21216__$1;
(statearr_21218_21239[(2)] = inst_21212);

(statearr_21218_21239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (1))){
var inst_21196 = init;
var state_21216__$1 = (function (){var statearr_21219 = state_21216;
(statearr_21219[(7)] = inst_21196);

return statearr_21219;
})();
var statearr_21220_21240 = state_21216__$1;
(statearr_21220_21240[(2)] = null);

(statearr_21220_21240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (4))){
var inst_21199 = (state_21216[(8)]);
var inst_21199__$1 = (state_21216[(2)]);
var inst_21200 = (inst_21199__$1 == null);
var state_21216__$1 = (function (){var statearr_21221 = state_21216;
(statearr_21221[(8)] = inst_21199__$1);

return statearr_21221;
})();
if(cljs.core.truth_(inst_21200)){
var statearr_21222_21241 = state_21216__$1;
(statearr_21222_21241[(1)] = (5));

} else {
var statearr_21223_21242 = state_21216__$1;
(statearr_21223_21242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (6))){
var inst_21196 = (state_21216[(7)]);
var inst_21203 = (state_21216[(9)]);
var inst_21199 = (state_21216[(8)]);
var inst_21203__$1 = f.call(null,inst_21196,inst_21199);
var inst_21204 = cljs.core.reduced_QMARK_.call(null,inst_21203__$1);
var state_21216__$1 = (function (){var statearr_21224 = state_21216;
(statearr_21224[(9)] = inst_21203__$1);

return statearr_21224;
})();
if(inst_21204){
var statearr_21225_21243 = state_21216__$1;
(statearr_21225_21243[(1)] = (8));

} else {
var statearr_21226_21244 = state_21216__$1;
(statearr_21226_21244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (3))){
var inst_21214 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21216__$1,inst_21214);
} else {
if((state_val_21217 === (2))){
var state_21216__$1 = state_21216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21216__$1,(4),ch);
} else {
if((state_val_21217 === (9))){
var inst_21203 = (state_21216[(9)]);
var inst_21196 = inst_21203;
var state_21216__$1 = (function (){var statearr_21227 = state_21216;
(statearr_21227[(7)] = inst_21196);

return statearr_21227;
})();
var statearr_21228_21245 = state_21216__$1;
(statearr_21228_21245[(2)] = null);

(statearr_21228_21245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (5))){
var inst_21196 = (state_21216[(7)]);
var state_21216__$1 = state_21216;
var statearr_21229_21246 = state_21216__$1;
(statearr_21229_21246[(2)] = inst_21196);

(statearr_21229_21246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (10))){
var inst_21210 = (state_21216[(2)]);
var state_21216__$1 = state_21216;
var statearr_21230_21247 = state_21216__$1;
(statearr_21230_21247[(2)] = inst_21210);

(statearr_21230_21247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21217 === (8))){
var inst_21203 = (state_21216[(9)]);
var inst_21206 = cljs.core.deref.call(null,inst_21203);
var state_21216__$1 = state_21216;
var statearr_21231_21248 = state_21216__$1;
(statearr_21231_21248[(2)] = inst_21206);

(statearr_21231_21248[(1)] = (10));


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
});})(c__20458__auto__))
;
return ((function (switch__20346__auto__,c__20458__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20347__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20347__auto____0 = (function (){
var statearr_21235 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21235[(0)] = cljs$core$async$reduce_$_state_machine__20347__auto__);

(statearr_21235[(1)] = (1));

return statearr_21235;
});
var cljs$core$async$reduce_$_state_machine__20347__auto____1 = (function (state_21216){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_21216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e21236){if((e21236 instanceof Object)){
var ex__20350__auto__ = e21236;
var statearr_21237_21249 = state_21216;
(statearr_21237_21249[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21250 = state_21216;
state_21216 = G__21250;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20347__auto__ = function(state_21216){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20347__auto____1.call(this,state_21216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20347__auto____0;
cljs$core$async$reduce_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20347__auto____1;
return cljs$core$async$reduce_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__))
})();
var state__20460__auto__ = (function (){var statearr_21238 = f__20459__auto__.call(null);
(statearr_21238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_21238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__))
);

return c__20458__auto__;
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
var args21251 = [];
var len__19349__auto___21303 = arguments.length;
var i__19350__auto___21304 = (0);
while(true){
if((i__19350__auto___21304 < len__19349__auto___21303)){
args21251.push((arguments[i__19350__auto___21304]));

var G__21305 = (i__19350__auto___21304 + (1));
i__19350__auto___21304 = G__21305;
continue;
} else {
}
break;
}

var G__21253 = args21251.length;
switch (G__21253) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21251.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__){
return (function (state_21278){
var state_val_21279 = (state_21278[(1)]);
if((state_val_21279 === (7))){
var inst_21260 = (state_21278[(2)]);
var state_21278__$1 = state_21278;
var statearr_21280_21307 = state_21278__$1;
(statearr_21280_21307[(2)] = inst_21260);

(statearr_21280_21307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (1))){
var inst_21254 = cljs.core.seq.call(null,coll);
var inst_21255 = inst_21254;
var state_21278__$1 = (function (){var statearr_21281 = state_21278;
(statearr_21281[(7)] = inst_21255);

return statearr_21281;
})();
var statearr_21282_21308 = state_21278__$1;
(statearr_21282_21308[(2)] = null);

(statearr_21282_21308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (4))){
var inst_21255 = (state_21278[(7)]);
var inst_21258 = cljs.core.first.call(null,inst_21255);
var state_21278__$1 = state_21278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21278__$1,(7),ch,inst_21258);
} else {
if((state_val_21279 === (13))){
var inst_21272 = (state_21278[(2)]);
var state_21278__$1 = state_21278;
var statearr_21283_21309 = state_21278__$1;
(statearr_21283_21309[(2)] = inst_21272);

(statearr_21283_21309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (6))){
var inst_21263 = (state_21278[(2)]);
var state_21278__$1 = state_21278;
if(cljs.core.truth_(inst_21263)){
var statearr_21284_21310 = state_21278__$1;
(statearr_21284_21310[(1)] = (8));

} else {
var statearr_21285_21311 = state_21278__$1;
(statearr_21285_21311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (3))){
var inst_21276 = (state_21278[(2)]);
var state_21278__$1 = state_21278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21278__$1,inst_21276);
} else {
if((state_val_21279 === (12))){
var state_21278__$1 = state_21278;
var statearr_21286_21312 = state_21278__$1;
(statearr_21286_21312[(2)] = null);

(statearr_21286_21312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (2))){
var inst_21255 = (state_21278[(7)]);
var state_21278__$1 = state_21278;
if(cljs.core.truth_(inst_21255)){
var statearr_21287_21313 = state_21278__$1;
(statearr_21287_21313[(1)] = (4));

} else {
var statearr_21288_21314 = state_21278__$1;
(statearr_21288_21314[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (11))){
var inst_21269 = cljs.core.async.close_BANG_.call(null,ch);
var state_21278__$1 = state_21278;
var statearr_21289_21315 = state_21278__$1;
(statearr_21289_21315[(2)] = inst_21269);

(statearr_21289_21315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (9))){
var state_21278__$1 = state_21278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21290_21316 = state_21278__$1;
(statearr_21290_21316[(1)] = (11));

} else {
var statearr_21291_21317 = state_21278__$1;
(statearr_21291_21317[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (5))){
var inst_21255 = (state_21278[(7)]);
var state_21278__$1 = state_21278;
var statearr_21292_21318 = state_21278__$1;
(statearr_21292_21318[(2)] = inst_21255);

(statearr_21292_21318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (10))){
var inst_21274 = (state_21278[(2)]);
var state_21278__$1 = state_21278;
var statearr_21293_21319 = state_21278__$1;
(statearr_21293_21319[(2)] = inst_21274);

(statearr_21293_21319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21279 === (8))){
var inst_21255 = (state_21278[(7)]);
var inst_21265 = cljs.core.next.call(null,inst_21255);
var inst_21255__$1 = inst_21265;
var state_21278__$1 = (function (){var statearr_21294 = state_21278;
(statearr_21294[(7)] = inst_21255__$1);

return statearr_21294;
})();
var statearr_21295_21320 = state_21278__$1;
(statearr_21295_21320[(2)] = null);

(statearr_21295_21320[(1)] = (2));


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
});})(c__20458__auto__))
;
return ((function (switch__20346__auto__,c__20458__auto__){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_21299 = [null,null,null,null,null,null,null,null];
(statearr_21299[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_21299[(1)] = (1));

return statearr_21299;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_21278){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_21278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e21300){if((e21300 instanceof Object)){
var ex__20350__auto__ = e21300;
var statearr_21301_21321 = state_21278;
(statearr_21301_21321[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21322 = state_21278;
state_21278 = G__21322;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_21278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_21278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__))
})();
var state__20460__auto__ = (function (){var statearr_21302 = f__20459__auto__.call(null);
(statearr_21302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_21302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__))
);

return c__20458__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__18946__auto__ = (((_ == null))?null:_);
var m__18947__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,_);
} else {
var m__18947__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18947__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m);
} else {
var m__18947__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21544 = (function (mult,ch,cs,meta21545){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21545 = meta21545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21546,meta21545__$1){
var self__ = this;
var _21546__$1 = this;
return (new cljs.core.async.t_cljs$core$async21544(self__.mult,self__.ch,self__.cs,meta21545__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21546){
var self__ = this;
var _21546__$1 = this;
return self__.meta21545;
});})(cs))
;

cljs.core.async.t_cljs$core$async21544.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21544.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21544.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21544.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21544.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21544.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21545","meta21545",87182157,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21544";

cljs.core.async.t_cljs$core$async21544.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async21544");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21544 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21544(mult__$1,ch__$1,cs__$1,meta21545){
return (new cljs.core.async.t_cljs$core$async21544(mult__$1,ch__$1,cs__$1,meta21545));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21544(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20458__auto___21765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___21765,cs,m,dchan,dctr,done){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___21765,cs,m,dchan,dctr,done){
return (function (state_21677){
var state_val_21678 = (state_21677[(1)]);
if((state_val_21678 === (7))){
var inst_21673 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21679_21766 = state_21677__$1;
(statearr_21679_21766[(2)] = inst_21673);

(statearr_21679_21766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (20))){
var inst_21578 = (state_21677[(7)]);
var inst_21588 = cljs.core.first.call(null,inst_21578);
var inst_21589 = cljs.core.nth.call(null,inst_21588,(0),null);
var inst_21590 = cljs.core.nth.call(null,inst_21588,(1),null);
var state_21677__$1 = (function (){var statearr_21680 = state_21677;
(statearr_21680[(8)] = inst_21589);

return statearr_21680;
})();
if(cljs.core.truth_(inst_21590)){
var statearr_21681_21767 = state_21677__$1;
(statearr_21681_21767[(1)] = (22));

} else {
var statearr_21682_21768 = state_21677__$1;
(statearr_21682_21768[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (27))){
var inst_21620 = (state_21677[(9)]);
var inst_21618 = (state_21677[(10)]);
var inst_21625 = (state_21677[(11)]);
var inst_21549 = (state_21677[(12)]);
var inst_21625__$1 = cljs.core._nth.call(null,inst_21618,inst_21620);
var inst_21626 = cljs.core.async.put_BANG_.call(null,inst_21625__$1,inst_21549,done);
var state_21677__$1 = (function (){var statearr_21683 = state_21677;
(statearr_21683[(11)] = inst_21625__$1);

return statearr_21683;
})();
if(cljs.core.truth_(inst_21626)){
var statearr_21684_21769 = state_21677__$1;
(statearr_21684_21769[(1)] = (30));

} else {
var statearr_21685_21770 = state_21677__$1;
(statearr_21685_21770[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (1))){
var state_21677__$1 = state_21677;
var statearr_21686_21771 = state_21677__$1;
(statearr_21686_21771[(2)] = null);

(statearr_21686_21771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (24))){
var inst_21578 = (state_21677[(7)]);
var inst_21595 = (state_21677[(2)]);
var inst_21596 = cljs.core.next.call(null,inst_21578);
var inst_21558 = inst_21596;
var inst_21559 = null;
var inst_21560 = (0);
var inst_21561 = (0);
var state_21677__$1 = (function (){var statearr_21687 = state_21677;
(statearr_21687[(13)] = inst_21559);

(statearr_21687[(14)] = inst_21560);

(statearr_21687[(15)] = inst_21558);

(statearr_21687[(16)] = inst_21561);

(statearr_21687[(17)] = inst_21595);

return statearr_21687;
})();
var statearr_21688_21772 = state_21677__$1;
(statearr_21688_21772[(2)] = null);

(statearr_21688_21772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (39))){
var state_21677__$1 = state_21677;
var statearr_21692_21773 = state_21677__$1;
(statearr_21692_21773[(2)] = null);

(statearr_21692_21773[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (4))){
var inst_21549 = (state_21677[(12)]);
var inst_21549__$1 = (state_21677[(2)]);
var inst_21550 = (inst_21549__$1 == null);
var state_21677__$1 = (function (){var statearr_21693 = state_21677;
(statearr_21693[(12)] = inst_21549__$1);

return statearr_21693;
})();
if(cljs.core.truth_(inst_21550)){
var statearr_21694_21774 = state_21677__$1;
(statearr_21694_21774[(1)] = (5));

} else {
var statearr_21695_21775 = state_21677__$1;
(statearr_21695_21775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (15))){
var inst_21559 = (state_21677[(13)]);
var inst_21560 = (state_21677[(14)]);
var inst_21558 = (state_21677[(15)]);
var inst_21561 = (state_21677[(16)]);
var inst_21574 = (state_21677[(2)]);
var inst_21575 = (inst_21561 + (1));
var tmp21689 = inst_21559;
var tmp21690 = inst_21560;
var tmp21691 = inst_21558;
var inst_21558__$1 = tmp21691;
var inst_21559__$1 = tmp21689;
var inst_21560__$1 = tmp21690;
var inst_21561__$1 = inst_21575;
var state_21677__$1 = (function (){var statearr_21696 = state_21677;
(statearr_21696[(13)] = inst_21559__$1);

(statearr_21696[(14)] = inst_21560__$1);

(statearr_21696[(18)] = inst_21574);

(statearr_21696[(15)] = inst_21558__$1);

(statearr_21696[(16)] = inst_21561__$1);

return statearr_21696;
})();
var statearr_21697_21776 = state_21677__$1;
(statearr_21697_21776[(2)] = null);

(statearr_21697_21776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (21))){
var inst_21599 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21701_21777 = state_21677__$1;
(statearr_21701_21777[(2)] = inst_21599);

(statearr_21701_21777[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (31))){
var inst_21625 = (state_21677[(11)]);
var inst_21629 = done.call(null,null);
var inst_21630 = cljs.core.async.untap_STAR_.call(null,m,inst_21625);
var state_21677__$1 = (function (){var statearr_21702 = state_21677;
(statearr_21702[(19)] = inst_21629);

return statearr_21702;
})();
var statearr_21703_21778 = state_21677__$1;
(statearr_21703_21778[(2)] = inst_21630);

(statearr_21703_21778[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (32))){
var inst_21620 = (state_21677[(9)]);
var inst_21618 = (state_21677[(10)]);
var inst_21617 = (state_21677[(20)]);
var inst_21619 = (state_21677[(21)]);
var inst_21632 = (state_21677[(2)]);
var inst_21633 = (inst_21620 + (1));
var tmp21698 = inst_21618;
var tmp21699 = inst_21617;
var tmp21700 = inst_21619;
var inst_21617__$1 = tmp21699;
var inst_21618__$1 = tmp21698;
var inst_21619__$1 = tmp21700;
var inst_21620__$1 = inst_21633;
var state_21677__$1 = (function (){var statearr_21704 = state_21677;
(statearr_21704[(9)] = inst_21620__$1);

(statearr_21704[(10)] = inst_21618__$1);

(statearr_21704[(22)] = inst_21632);

(statearr_21704[(20)] = inst_21617__$1);

(statearr_21704[(21)] = inst_21619__$1);

return statearr_21704;
})();
var statearr_21705_21779 = state_21677__$1;
(statearr_21705_21779[(2)] = null);

(statearr_21705_21779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (40))){
var inst_21645 = (state_21677[(23)]);
var inst_21649 = done.call(null,null);
var inst_21650 = cljs.core.async.untap_STAR_.call(null,m,inst_21645);
var state_21677__$1 = (function (){var statearr_21706 = state_21677;
(statearr_21706[(24)] = inst_21649);

return statearr_21706;
})();
var statearr_21707_21780 = state_21677__$1;
(statearr_21707_21780[(2)] = inst_21650);

(statearr_21707_21780[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (33))){
var inst_21636 = (state_21677[(25)]);
var inst_21638 = cljs.core.chunked_seq_QMARK_.call(null,inst_21636);
var state_21677__$1 = state_21677;
if(inst_21638){
var statearr_21708_21781 = state_21677__$1;
(statearr_21708_21781[(1)] = (36));

} else {
var statearr_21709_21782 = state_21677__$1;
(statearr_21709_21782[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (13))){
var inst_21568 = (state_21677[(26)]);
var inst_21571 = cljs.core.async.close_BANG_.call(null,inst_21568);
var state_21677__$1 = state_21677;
var statearr_21710_21783 = state_21677__$1;
(statearr_21710_21783[(2)] = inst_21571);

(statearr_21710_21783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (22))){
var inst_21589 = (state_21677[(8)]);
var inst_21592 = cljs.core.async.close_BANG_.call(null,inst_21589);
var state_21677__$1 = state_21677;
var statearr_21711_21784 = state_21677__$1;
(statearr_21711_21784[(2)] = inst_21592);

(statearr_21711_21784[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (36))){
var inst_21636 = (state_21677[(25)]);
var inst_21640 = cljs.core.chunk_first.call(null,inst_21636);
var inst_21641 = cljs.core.chunk_rest.call(null,inst_21636);
var inst_21642 = cljs.core.count.call(null,inst_21640);
var inst_21617 = inst_21641;
var inst_21618 = inst_21640;
var inst_21619 = inst_21642;
var inst_21620 = (0);
var state_21677__$1 = (function (){var statearr_21712 = state_21677;
(statearr_21712[(9)] = inst_21620);

(statearr_21712[(10)] = inst_21618);

(statearr_21712[(20)] = inst_21617);

(statearr_21712[(21)] = inst_21619);

return statearr_21712;
})();
var statearr_21713_21785 = state_21677__$1;
(statearr_21713_21785[(2)] = null);

(statearr_21713_21785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (41))){
var inst_21636 = (state_21677[(25)]);
var inst_21652 = (state_21677[(2)]);
var inst_21653 = cljs.core.next.call(null,inst_21636);
var inst_21617 = inst_21653;
var inst_21618 = null;
var inst_21619 = (0);
var inst_21620 = (0);
var state_21677__$1 = (function (){var statearr_21714 = state_21677;
(statearr_21714[(9)] = inst_21620);

(statearr_21714[(10)] = inst_21618);

(statearr_21714[(20)] = inst_21617);

(statearr_21714[(21)] = inst_21619);

(statearr_21714[(27)] = inst_21652);

return statearr_21714;
})();
var statearr_21715_21786 = state_21677__$1;
(statearr_21715_21786[(2)] = null);

(statearr_21715_21786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (43))){
var state_21677__$1 = state_21677;
var statearr_21716_21787 = state_21677__$1;
(statearr_21716_21787[(2)] = null);

(statearr_21716_21787[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (29))){
var inst_21661 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21717_21788 = state_21677__$1;
(statearr_21717_21788[(2)] = inst_21661);

(statearr_21717_21788[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (44))){
var inst_21670 = (state_21677[(2)]);
var state_21677__$1 = (function (){var statearr_21718 = state_21677;
(statearr_21718[(28)] = inst_21670);

return statearr_21718;
})();
var statearr_21719_21789 = state_21677__$1;
(statearr_21719_21789[(2)] = null);

(statearr_21719_21789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (6))){
var inst_21609 = (state_21677[(29)]);
var inst_21608 = cljs.core.deref.call(null,cs);
var inst_21609__$1 = cljs.core.keys.call(null,inst_21608);
var inst_21610 = cljs.core.count.call(null,inst_21609__$1);
var inst_21611 = cljs.core.reset_BANG_.call(null,dctr,inst_21610);
var inst_21616 = cljs.core.seq.call(null,inst_21609__$1);
var inst_21617 = inst_21616;
var inst_21618 = null;
var inst_21619 = (0);
var inst_21620 = (0);
var state_21677__$1 = (function (){var statearr_21720 = state_21677;
(statearr_21720[(9)] = inst_21620);

(statearr_21720[(10)] = inst_21618);

(statearr_21720[(29)] = inst_21609__$1);

(statearr_21720[(20)] = inst_21617);

(statearr_21720[(30)] = inst_21611);

(statearr_21720[(21)] = inst_21619);

return statearr_21720;
})();
var statearr_21721_21790 = state_21677__$1;
(statearr_21721_21790[(2)] = null);

(statearr_21721_21790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (28))){
var inst_21636 = (state_21677[(25)]);
var inst_21617 = (state_21677[(20)]);
var inst_21636__$1 = cljs.core.seq.call(null,inst_21617);
var state_21677__$1 = (function (){var statearr_21722 = state_21677;
(statearr_21722[(25)] = inst_21636__$1);

return statearr_21722;
})();
if(inst_21636__$1){
var statearr_21723_21791 = state_21677__$1;
(statearr_21723_21791[(1)] = (33));

} else {
var statearr_21724_21792 = state_21677__$1;
(statearr_21724_21792[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (25))){
var inst_21620 = (state_21677[(9)]);
var inst_21619 = (state_21677[(21)]);
var inst_21622 = (inst_21620 < inst_21619);
var inst_21623 = inst_21622;
var state_21677__$1 = state_21677;
if(cljs.core.truth_(inst_21623)){
var statearr_21725_21793 = state_21677__$1;
(statearr_21725_21793[(1)] = (27));

} else {
var statearr_21726_21794 = state_21677__$1;
(statearr_21726_21794[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (34))){
var state_21677__$1 = state_21677;
var statearr_21727_21795 = state_21677__$1;
(statearr_21727_21795[(2)] = null);

(statearr_21727_21795[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (17))){
var state_21677__$1 = state_21677;
var statearr_21728_21796 = state_21677__$1;
(statearr_21728_21796[(2)] = null);

(statearr_21728_21796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (3))){
var inst_21675 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21677__$1,inst_21675);
} else {
if((state_val_21678 === (12))){
var inst_21604 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21729_21797 = state_21677__$1;
(statearr_21729_21797[(2)] = inst_21604);

(statearr_21729_21797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (2))){
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21677__$1,(4),ch);
} else {
if((state_val_21678 === (23))){
var state_21677__$1 = state_21677;
var statearr_21730_21798 = state_21677__$1;
(statearr_21730_21798[(2)] = null);

(statearr_21730_21798[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (35))){
var inst_21659 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21731_21799 = state_21677__$1;
(statearr_21731_21799[(2)] = inst_21659);

(statearr_21731_21799[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (19))){
var inst_21578 = (state_21677[(7)]);
var inst_21582 = cljs.core.chunk_first.call(null,inst_21578);
var inst_21583 = cljs.core.chunk_rest.call(null,inst_21578);
var inst_21584 = cljs.core.count.call(null,inst_21582);
var inst_21558 = inst_21583;
var inst_21559 = inst_21582;
var inst_21560 = inst_21584;
var inst_21561 = (0);
var state_21677__$1 = (function (){var statearr_21732 = state_21677;
(statearr_21732[(13)] = inst_21559);

(statearr_21732[(14)] = inst_21560);

(statearr_21732[(15)] = inst_21558);

(statearr_21732[(16)] = inst_21561);

return statearr_21732;
})();
var statearr_21733_21800 = state_21677__$1;
(statearr_21733_21800[(2)] = null);

(statearr_21733_21800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (11))){
var inst_21578 = (state_21677[(7)]);
var inst_21558 = (state_21677[(15)]);
var inst_21578__$1 = cljs.core.seq.call(null,inst_21558);
var state_21677__$1 = (function (){var statearr_21734 = state_21677;
(statearr_21734[(7)] = inst_21578__$1);

return statearr_21734;
})();
if(inst_21578__$1){
var statearr_21735_21801 = state_21677__$1;
(statearr_21735_21801[(1)] = (16));

} else {
var statearr_21736_21802 = state_21677__$1;
(statearr_21736_21802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (9))){
var inst_21606 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21737_21803 = state_21677__$1;
(statearr_21737_21803[(2)] = inst_21606);

(statearr_21737_21803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (5))){
var inst_21556 = cljs.core.deref.call(null,cs);
var inst_21557 = cljs.core.seq.call(null,inst_21556);
var inst_21558 = inst_21557;
var inst_21559 = null;
var inst_21560 = (0);
var inst_21561 = (0);
var state_21677__$1 = (function (){var statearr_21738 = state_21677;
(statearr_21738[(13)] = inst_21559);

(statearr_21738[(14)] = inst_21560);

(statearr_21738[(15)] = inst_21558);

(statearr_21738[(16)] = inst_21561);

return statearr_21738;
})();
var statearr_21739_21804 = state_21677__$1;
(statearr_21739_21804[(2)] = null);

(statearr_21739_21804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (14))){
var state_21677__$1 = state_21677;
var statearr_21740_21805 = state_21677__$1;
(statearr_21740_21805[(2)] = null);

(statearr_21740_21805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (45))){
var inst_21667 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21741_21806 = state_21677__$1;
(statearr_21741_21806[(2)] = inst_21667);

(statearr_21741_21806[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (26))){
var inst_21609 = (state_21677[(29)]);
var inst_21663 = (state_21677[(2)]);
var inst_21664 = cljs.core.seq.call(null,inst_21609);
var state_21677__$1 = (function (){var statearr_21742 = state_21677;
(statearr_21742[(31)] = inst_21663);

return statearr_21742;
})();
if(inst_21664){
var statearr_21743_21807 = state_21677__$1;
(statearr_21743_21807[(1)] = (42));

} else {
var statearr_21744_21808 = state_21677__$1;
(statearr_21744_21808[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (16))){
var inst_21578 = (state_21677[(7)]);
var inst_21580 = cljs.core.chunked_seq_QMARK_.call(null,inst_21578);
var state_21677__$1 = state_21677;
if(inst_21580){
var statearr_21745_21809 = state_21677__$1;
(statearr_21745_21809[(1)] = (19));

} else {
var statearr_21746_21810 = state_21677__$1;
(statearr_21746_21810[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (38))){
var inst_21656 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21747_21811 = state_21677__$1;
(statearr_21747_21811[(2)] = inst_21656);

(statearr_21747_21811[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (30))){
var state_21677__$1 = state_21677;
var statearr_21748_21812 = state_21677__$1;
(statearr_21748_21812[(2)] = null);

(statearr_21748_21812[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (10))){
var inst_21559 = (state_21677[(13)]);
var inst_21561 = (state_21677[(16)]);
var inst_21567 = cljs.core._nth.call(null,inst_21559,inst_21561);
var inst_21568 = cljs.core.nth.call(null,inst_21567,(0),null);
var inst_21569 = cljs.core.nth.call(null,inst_21567,(1),null);
var state_21677__$1 = (function (){var statearr_21749 = state_21677;
(statearr_21749[(26)] = inst_21568);

return statearr_21749;
})();
if(cljs.core.truth_(inst_21569)){
var statearr_21750_21813 = state_21677__$1;
(statearr_21750_21813[(1)] = (13));

} else {
var statearr_21751_21814 = state_21677__$1;
(statearr_21751_21814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (18))){
var inst_21602 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21752_21815 = state_21677__$1;
(statearr_21752_21815[(2)] = inst_21602);

(statearr_21752_21815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (42))){
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21677__$1,(45),dchan);
} else {
if((state_val_21678 === (37))){
var inst_21636 = (state_21677[(25)]);
var inst_21645 = (state_21677[(23)]);
var inst_21549 = (state_21677[(12)]);
var inst_21645__$1 = cljs.core.first.call(null,inst_21636);
var inst_21646 = cljs.core.async.put_BANG_.call(null,inst_21645__$1,inst_21549,done);
var state_21677__$1 = (function (){var statearr_21753 = state_21677;
(statearr_21753[(23)] = inst_21645__$1);

return statearr_21753;
})();
if(cljs.core.truth_(inst_21646)){
var statearr_21754_21816 = state_21677__$1;
(statearr_21754_21816[(1)] = (39));

} else {
var statearr_21755_21817 = state_21677__$1;
(statearr_21755_21817[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (8))){
var inst_21560 = (state_21677[(14)]);
var inst_21561 = (state_21677[(16)]);
var inst_21563 = (inst_21561 < inst_21560);
var inst_21564 = inst_21563;
var state_21677__$1 = state_21677;
if(cljs.core.truth_(inst_21564)){
var statearr_21756_21818 = state_21677__$1;
(statearr_21756_21818[(1)] = (10));

} else {
var statearr_21757_21819 = state_21677__$1;
(statearr_21757_21819[(1)] = (11));

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
});})(c__20458__auto___21765,cs,m,dchan,dctr,done))
;
return ((function (switch__20346__auto__,c__20458__auto___21765,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20347__auto__ = null;
var cljs$core$async$mult_$_state_machine__20347__auto____0 = (function (){
var statearr_21761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21761[(0)] = cljs$core$async$mult_$_state_machine__20347__auto__);

(statearr_21761[(1)] = (1));

return statearr_21761;
});
var cljs$core$async$mult_$_state_machine__20347__auto____1 = (function (state_21677){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_21677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e21762){if((e21762 instanceof Object)){
var ex__20350__auto__ = e21762;
var statearr_21763_21820 = state_21677;
(statearr_21763_21820[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21821 = state_21677;
state_21677 = G__21821;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20347__auto__ = function(state_21677){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20347__auto____1.call(this,state_21677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20347__auto____0;
cljs$core$async$mult_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20347__auto____1;
return cljs$core$async$mult_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___21765,cs,m,dchan,dctr,done))
})();
var state__20460__auto__ = (function (){var statearr_21764 = f__20459__auto__.call(null);
(statearr_21764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___21765);

return statearr_21764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___21765,cs,m,dchan,dctr,done))
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
var args21822 = [];
var len__19349__auto___21825 = arguments.length;
var i__19350__auto___21826 = (0);
while(true){
if((i__19350__auto___21826 < len__19349__auto___21825)){
args21822.push((arguments[i__19350__auto___21826]));

var G__21827 = (i__19350__auto___21826 + (1));
i__19350__auto___21826 = G__21827;
continue;
} else {
}
break;
}

var G__21824 = args21822.length;
switch (G__21824) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21822.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m);
} else {
var m__18947__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,state_map);
} else {
var m__18947__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18946__auto__ = (((m == null))?null:m);
var m__18947__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,m,mode);
} else {
var m__18947__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19356__auto__ = [];
var len__19349__auto___21839 = arguments.length;
var i__19350__auto___21840 = (0);
while(true){
if((i__19350__auto___21840 < len__19349__auto___21839)){
args__19356__auto__.push((arguments[i__19350__auto___21840]));

var G__21841 = (i__19350__auto___21840 + (1));
i__19350__auto___21840 = G__21841;
continue;
} else {
}
break;
}

var argseq__19357__auto__ = ((((3) < args__19356__auto__.length))?(new cljs.core.IndexedSeq(args__19356__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19357__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21833){
var map__21834 = p__21833;
var map__21834__$1 = ((((!((map__21834 == null)))?((((map__21834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21834):map__21834);
var opts = map__21834__$1;
var statearr_21836_21842 = state;
(statearr_21836_21842[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21834,map__21834__$1,opts){
return (function (val){
var statearr_21837_21843 = state;
(statearr_21837_21843[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21834,map__21834__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21838_21844 = state;
(statearr_21838_21844[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21829){
var G__21830 = cljs.core.first.call(null,seq21829);
var seq21829__$1 = cljs.core.next.call(null,seq21829);
var G__21831 = cljs.core.first.call(null,seq21829__$1);
var seq21829__$2 = cljs.core.next.call(null,seq21829__$1);
var G__21832 = cljs.core.first.call(null,seq21829__$2);
var seq21829__$3 = cljs.core.next.call(null,seq21829__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21830,G__21831,G__21832,seq21829__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22008 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22009){
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
this.meta22009 = meta22009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22010,meta22009__$1){
var self__ = this;
var _22010__$1 = this;
return (new cljs.core.async.t_cljs$core$async22008(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22009__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22010){
var self__ = this;
var _22010__$1 = this;
return self__.meta22009;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22009","meta22009",-1216593069,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22008";

cljs.core.async.t_cljs$core$async22008.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22008");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22008 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22008(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22009){
return (new cljs.core.async.t_cljs$core$async22008(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22009));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22008(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20458__auto___22171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___22171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___22171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22108){
var state_val_22109 = (state_22108[(1)]);
if((state_val_22109 === (7))){
var inst_22026 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
var statearr_22110_22172 = state_22108__$1;
(statearr_22110_22172[(2)] = inst_22026);

(statearr_22110_22172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (20))){
var inst_22038 = (state_22108[(7)]);
var state_22108__$1 = state_22108;
var statearr_22111_22173 = state_22108__$1;
(statearr_22111_22173[(2)] = inst_22038);

(statearr_22111_22173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (27))){
var state_22108__$1 = state_22108;
var statearr_22112_22174 = state_22108__$1;
(statearr_22112_22174[(2)] = null);

(statearr_22112_22174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (1))){
var inst_22014 = (state_22108[(8)]);
var inst_22014__$1 = calc_state.call(null);
var inst_22016 = (inst_22014__$1 == null);
var inst_22017 = cljs.core.not.call(null,inst_22016);
var state_22108__$1 = (function (){var statearr_22113 = state_22108;
(statearr_22113[(8)] = inst_22014__$1);

return statearr_22113;
})();
if(inst_22017){
var statearr_22114_22175 = state_22108__$1;
(statearr_22114_22175[(1)] = (2));

} else {
var statearr_22115_22176 = state_22108__$1;
(statearr_22115_22176[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (24))){
var inst_22082 = (state_22108[(9)]);
var inst_22068 = (state_22108[(10)]);
var inst_22061 = (state_22108[(11)]);
var inst_22082__$1 = inst_22061.call(null,inst_22068);
var state_22108__$1 = (function (){var statearr_22116 = state_22108;
(statearr_22116[(9)] = inst_22082__$1);

return statearr_22116;
})();
if(cljs.core.truth_(inst_22082__$1)){
var statearr_22117_22177 = state_22108__$1;
(statearr_22117_22177[(1)] = (29));

} else {
var statearr_22118_22178 = state_22108__$1;
(statearr_22118_22178[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (4))){
var inst_22029 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
if(cljs.core.truth_(inst_22029)){
var statearr_22119_22179 = state_22108__$1;
(statearr_22119_22179[(1)] = (8));

} else {
var statearr_22120_22180 = state_22108__$1;
(statearr_22120_22180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (15))){
var inst_22055 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
if(cljs.core.truth_(inst_22055)){
var statearr_22121_22181 = state_22108__$1;
(statearr_22121_22181[(1)] = (19));

} else {
var statearr_22122_22182 = state_22108__$1;
(statearr_22122_22182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (21))){
var inst_22060 = (state_22108[(12)]);
var inst_22060__$1 = (state_22108[(2)]);
var inst_22061 = cljs.core.get.call(null,inst_22060__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22062 = cljs.core.get.call(null,inst_22060__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22063 = cljs.core.get.call(null,inst_22060__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22108__$1 = (function (){var statearr_22123 = state_22108;
(statearr_22123[(12)] = inst_22060__$1);

(statearr_22123[(11)] = inst_22061);

(statearr_22123[(13)] = inst_22062);

return statearr_22123;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22108__$1,(22),inst_22063);
} else {
if((state_val_22109 === (31))){
var inst_22090 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
if(cljs.core.truth_(inst_22090)){
var statearr_22124_22183 = state_22108__$1;
(statearr_22124_22183[(1)] = (32));

} else {
var statearr_22125_22184 = state_22108__$1;
(statearr_22125_22184[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (32))){
var inst_22067 = (state_22108[(14)]);
var state_22108__$1 = state_22108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22108__$1,(35),out,inst_22067);
} else {
if((state_val_22109 === (33))){
var inst_22060 = (state_22108[(12)]);
var inst_22038 = inst_22060;
var state_22108__$1 = (function (){var statearr_22126 = state_22108;
(statearr_22126[(7)] = inst_22038);

return statearr_22126;
})();
var statearr_22127_22185 = state_22108__$1;
(statearr_22127_22185[(2)] = null);

(statearr_22127_22185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (13))){
var inst_22038 = (state_22108[(7)]);
var inst_22045 = inst_22038.cljs$lang$protocol_mask$partition0$;
var inst_22046 = (inst_22045 & (64));
var inst_22047 = inst_22038.cljs$core$ISeq$;
var inst_22048 = (inst_22046) || (inst_22047);
var state_22108__$1 = state_22108;
if(cljs.core.truth_(inst_22048)){
var statearr_22128_22186 = state_22108__$1;
(statearr_22128_22186[(1)] = (16));

} else {
var statearr_22129_22187 = state_22108__$1;
(statearr_22129_22187[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (22))){
var inst_22068 = (state_22108[(10)]);
var inst_22067 = (state_22108[(14)]);
var inst_22066 = (state_22108[(2)]);
var inst_22067__$1 = cljs.core.nth.call(null,inst_22066,(0),null);
var inst_22068__$1 = cljs.core.nth.call(null,inst_22066,(1),null);
var inst_22069 = (inst_22067__$1 == null);
var inst_22070 = cljs.core._EQ_.call(null,inst_22068__$1,change);
var inst_22071 = (inst_22069) || (inst_22070);
var state_22108__$1 = (function (){var statearr_22130 = state_22108;
(statearr_22130[(10)] = inst_22068__$1);

(statearr_22130[(14)] = inst_22067__$1);

return statearr_22130;
})();
if(cljs.core.truth_(inst_22071)){
var statearr_22131_22188 = state_22108__$1;
(statearr_22131_22188[(1)] = (23));

} else {
var statearr_22132_22189 = state_22108__$1;
(statearr_22132_22189[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (36))){
var inst_22060 = (state_22108[(12)]);
var inst_22038 = inst_22060;
var state_22108__$1 = (function (){var statearr_22133 = state_22108;
(statearr_22133[(7)] = inst_22038);

return statearr_22133;
})();
var statearr_22134_22190 = state_22108__$1;
(statearr_22134_22190[(2)] = null);

(statearr_22134_22190[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (29))){
var inst_22082 = (state_22108[(9)]);
var state_22108__$1 = state_22108;
var statearr_22135_22191 = state_22108__$1;
(statearr_22135_22191[(2)] = inst_22082);

(statearr_22135_22191[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (6))){
var state_22108__$1 = state_22108;
var statearr_22136_22192 = state_22108__$1;
(statearr_22136_22192[(2)] = false);

(statearr_22136_22192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (28))){
var inst_22078 = (state_22108[(2)]);
var inst_22079 = calc_state.call(null);
var inst_22038 = inst_22079;
var state_22108__$1 = (function (){var statearr_22137 = state_22108;
(statearr_22137[(15)] = inst_22078);

(statearr_22137[(7)] = inst_22038);

return statearr_22137;
})();
var statearr_22138_22193 = state_22108__$1;
(statearr_22138_22193[(2)] = null);

(statearr_22138_22193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (25))){
var inst_22104 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
var statearr_22139_22194 = state_22108__$1;
(statearr_22139_22194[(2)] = inst_22104);

(statearr_22139_22194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (34))){
var inst_22102 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
var statearr_22140_22195 = state_22108__$1;
(statearr_22140_22195[(2)] = inst_22102);

(statearr_22140_22195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (17))){
var state_22108__$1 = state_22108;
var statearr_22141_22196 = state_22108__$1;
(statearr_22141_22196[(2)] = false);

(statearr_22141_22196[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (3))){
var state_22108__$1 = state_22108;
var statearr_22142_22197 = state_22108__$1;
(statearr_22142_22197[(2)] = false);

(statearr_22142_22197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (12))){
var inst_22106 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22108__$1,inst_22106);
} else {
if((state_val_22109 === (2))){
var inst_22014 = (state_22108[(8)]);
var inst_22019 = inst_22014.cljs$lang$protocol_mask$partition0$;
var inst_22020 = (inst_22019 & (64));
var inst_22021 = inst_22014.cljs$core$ISeq$;
var inst_22022 = (inst_22020) || (inst_22021);
var state_22108__$1 = state_22108;
if(cljs.core.truth_(inst_22022)){
var statearr_22143_22198 = state_22108__$1;
(statearr_22143_22198[(1)] = (5));

} else {
var statearr_22144_22199 = state_22108__$1;
(statearr_22144_22199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (23))){
var inst_22067 = (state_22108[(14)]);
var inst_22073 = (inst_22067 == null);
var state_22108__$1 = state_22108;
if(cljs.core.truth_(inst_22073)){
var statearr_22145_22200 = state_22108__$1;
(statearr_22145_22200[(1)] = (26));

} else {
var statearr_22146_22201 = state_22108__$1;
(statearr_22146_22201[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (35))){
var inst_22093 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
if(cljs.core.truth_(inst_22093)){
var statearr_22147_22202 = state_22108__$1;
(statearr_22147_22202[(1)] = (36));

} else {
var statearr_22148_22203 = state_22108__$1;
(statearr_22148_22203[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (19))){
var inst_22038 = (state_22108[(7)]);
var inst_22057 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22038);
var state_22108__$1 = state_22108;
var statearr_22149_22204 = state_22108__$1;
(statearr_22149_22204[(2)] = inst_22057);

(statearr_22149_22204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (11))){
var inst_22038 = (state_22108[(7)]);
var inst_22042 = (inst_22038 == null);
var inst_22043 = cljs.core.not.call(null,inst_22042);
var state_22108__$1 = state_22108;
if(inst_22043){
var statearr_22150_22205 = state_22108__$1;
(statearr_22150_22205[(1)] = (13));

} else {
var statearr_22151_22206 = state_22108__$1;
(statearr_22151_22206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (9))){
var inst_22014 = (state_22108[(8)]);
var state_22108__$1 = state_22108;
var statearr_22152_22207 = state_22108__$1;
(statearr_22152_22207[(2)] = inst_22014);

(statearr_22152_22207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (5))){
var state_22108__$1 = state_22108;
var statearr_22153_22208 = state_22108__$1;
(statearr_22153_22208[(2)] = true);

(statearr_22153_22208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (14))){
var state_22108__$1 = state_22108;
var statearr_22154_22209 = state_22108__$1;
(statearr_22154_22209[(2)] = false);

(statearr_22154_22209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (26))){
var inst_22068 = (state_22108[(10)]);
var inst_22075 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22068);
var state_22108__$1 = state_22108;
var statearr_22155_22210 = state_22108__$1;
(statearr_22155_22210[(2)] = inst_22075);

(statearr_22155_22210[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (16))){
var state_22108__$1 = state_22108;
var statearr_22156_22211 = state_22108__$1;
(statearr_22156_22211[(2)] = true);

(statearr_22156_22211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (38))){
var inst_22098 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
var statearr_22157_22212 = state_22108__$1;
(statearr_22157_22212[(2)] = inst_22098);

(statearr_22157_22212[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (30))){
var inst_22068 = (state_22108[(10)]);
var inst_22061 = (state_22108[(11)]);
var inst_22062 = (state_22108[(13)]);
var inst_22085 = cljs.core.empty_QMARK_.call(null,inst_22061);
var inst_22086 = inst_22062.call(null,inst_22068);
var inst_22087 = cljs.core.not.call(null,inst_22086);
var inst_22088 = (inst_22085) && (inst_22087);
var state_22108__$1 = state_22108;
var statearr_22158_22213 = state_22108__$1;
(statearr_22158_22213[(2)] = inst_22088);

(statearr_22158_22213[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (10))){
var inst_22014 = (state_22108[(8)]);
var inst_22034 = (state_22108[(2)]);
var inst_22035 = cljs.core.get.call(null,inst_22034,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22036 = cljs.core.get.call(null,inst_22034,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22037 = cljs.core.get.call(null,inst_22034,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22038 = inst_22014;
var state_22108__$1 = (function (){var statearr_22159 = state_22108;
(statearr_22159[(16)] = inst_22037);

(statearr_22159[(17)] = inst_22036);

(statearr_22159[(7)] = inst_22038);

(statearr_22159[(18)] = inst_22035);

return statearr_22159;
})();
var statearr_22160_22214 = state_22108__$1;
(statearr_22160_22214[(2)] = null);

(statearr_22160_22214[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (18))){
var inst_22052 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
var statearr_22161_22215 = state_22108__$1;
(statearr_22161_22215[(2)] = inst_22052);

(statearr_22161_22215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (37))){
var state_22108__$1 = state_22108;
var statearr_22162_22216 = state_22108__$1;
(statearr_22162_22216[(2)] = null);

(statearr_22162_22216[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (8))){
var inst_22014 = (state_22108[(8)]);
var inst_22031 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22014);
var state_22108__$1 = state_22108;
var statearr_22163_22217 = state_22108__$1;
(statearr_22163_22217[(2)] = inst_22031);

(statearr_22163_22217[(1)] = (10));


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
});})(c__20458__auto___22171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20346__auto__,c__20458__auto___22171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20347__auto__ = null;
var cljs$core$async$mix_$_state_machine__20347__auto____0 = (function (){
var statearr_22167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22167[(0)] = cljs$core$async$mix_$_state_machine__20347__auto__);

(statearr_22167[(1)] = (1));

return statearr_22167;
});
var cljs$core$async$mix_$_state_machine__20347__auto____1 = (function (state_22108){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_22108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e22168){if((e22168 instanceof Object)){
var ex__20350__auto__ = e22168;
var statearr_22169_22218 = state_22108;
(statearr_22169_22218[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22219 = state_22108;
state_22108 = G__22219;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20347__auto__ = function(state_22108){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20347__auto____1.call(this,state_22108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20347__auto____0;
cljs$core$async$mix_$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20347__auto____1;
return cljs$core$async$mix_$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___22171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20460__auto__ = (function (){var statearr_22170 = f__20459__auto__.call(null);
(statearr_22170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___22171);

return statearr_22170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___22171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18947__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v,ch);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22220 = [];
var len__19349__auto___22223 = arguments.length;
var i__19350__auto___22224 = (0);
while(true){
if((i__19350__auto___22224 < len__19349__auto___22223)){
args22220.push((arguments[i__19350__auto___22224]));

var G__22225 = (i__19350__auto___22224 + (1));
i__19350__auto___22224 = G__22225;
continue;
} else {
}
break;
}

var G__22222 = args22220.length;
switch (G__22222) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22220.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18946__auto__ = (((p == null))?null:p);
var m__18947__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18946__auto__)]);
if(!((m__18947__auto__ == null))){
return m__18947__auto__.call(null,p,v);
} else {
var m__18947__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18947__auto____$1 == null))){
return m__18947__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var args22228 = [];
var len__19349__auto___22353 = arguments.length;
var i__19350__auto___22354 = (0);
while(true){
if((i__19350__auto___22354 < len__19349__auto___22353)){
args22228.push((arguments[i__19350__auto___22354]));

var G__22355 = (i__19350__auto___22354 + (1));
i__19350__auto___22354 = G__22355;
continue;
} else {
}
break;
}

var G__22230 = args22228.length;
switch (G__22230) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22228.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18291__auto__)){
return or__18291__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18291__auto__,mults){
return (function (p1__22227_SHARP_){
if(cljs.core.truth_(p1__22227_SHARP_.call(null,topic))){
return p1__22227_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22227_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18291__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22231 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22232){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22232 = meta22232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22233,meta22232__$1){
var self__ = this;
var _22233__$1 = this;
return (new cljs.core.async.t_cljs$core$async22231(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22232__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22233){
var self__ = this;
var _22233__$1 = this;
return self__.meta22232;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22231.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22231.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22232","meta22232",-899738929,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22231";

cljs.core.async.t_cljs$core$async22231.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22231");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22231 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22231(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22232){
return (new cljs.core.async.t_cljs$core$async22231(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22232));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22231(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20458__auto___22357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___22357,mults,ensure_mult,p){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___22357,mults,ensure_mult,p){
return (function (state_22305){
var state_val_22306 = (state_22305[(1)]);
if((state_val_22306 === (7))){
var inst_22301 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22307_22358 = state_22305__$1;
(statearr_22307_22358[(2)] = inst_22301);

(statearr_22307_22358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (20))){
var state_22305__$1 = state_22305;
var statearr_22308_22359 = state_22305__$1;
(statearr_22308_22359[(2)] = null);

(statearr_22308_22359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (1))){
var state_22305__$1 = state_22305;
var statearr_22309_22360 = state_22305__$1;
(statearr_22309_22360[(2)] = null);

(statearr_22309_22360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (24))){
var inst_22284 = (state_22305[(7)]);
var inst_22293 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22284);
var state_22305__$1 = state_22305;
var statearr_22310_22361 = state_22305__$1;
(statearr_22310_22361[(2)] = inst_22293);

(statearr_22310_22361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (4))){
var inst_22236 = (state_22305[(8)]);
var inst_22236__$1 = (state_22305[(2)]);
var inst_22237 = (inst_22236__$1 == null);
var state_22305__$1 = (function (){var statearr_22311 = state_22305;
(statearr_22311[(8)] = inst_22236__$1);

return statearr_22311;
})();
if(cljs.core.truth_(inst_22237)){
var statearr_22312_22362 = state_22305__$1;
(statearr_22312_22362[(1)] = (5));

} else {
var statearr_22313_22363 = state_22305__$1;
(statearr_22313_22363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (15))){
var inst_22278 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22314_22364 = state_22305__$1;
(statearr_22314_22364[(2)] = inst_22278);

(statearr_22314_22364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (21))){
var inst_22298 = (state_22305[(2)]);
var state_22305__$1 = (function (){var statearr_22315 = state_22305;
(statearr_22315[(9)] = inst_22298);

return statearr_22315;
})();
var statearr_22316_22365 = state_22305__$1;
(statearr_22316_22365[(2)] = null);

(statearr_22316_22365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (13))){
var inst_22260 = (state_22305[(10)]);
var inst_22262 = cljs.core.chunked_seq_QMARK_.call(null,inst_22260);
var state_22305__$1 = state_22305;
if(inst_22262){
var statearr_22317_22366 = state_22305__$1;
(statearr_22317_22366[(1)] = (16));

} else {
var statearr_22318_22367 = state_22305__$1;
(statearr_22318_22367[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (22))){
var inst_22290 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22290)){
var statearr_22319_22368 = state_22305__$1;
(statearr_22319_22368[(1)] = (23));

} else {
var statearr_22320_22369 = state_22305__$1;
(statearr_22320_22369[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (6))){
var inst_22286 = (state_22305[(11)]);
var inst_22236 = (state_22305[(8)]);
var inst_22284 = (state_22305[(7)]);
var inst_22284__$1 = topic_fn.call(null,inst_22236);
var inst_22285 = cljs.core.deref.call(null,mults);
var inst_22286__$1 = cljs.core.get.call(null,inst_22285,inst_22284__$1);
var state_22305__$1 = (function (){var statearr_22321 = state_22305;
(statearr_22321[(11)] = inst_22286__$1);

(statearr_22321[(7)] = inst_22284__$1);

return statearr_22321;
})();
if(cljs.core.truth_(inst_22286__$1)){
var statearr_22322_22370 = state_22305__$1;
(statearr_22322_22370[(1)] = (19));

} else {
var statearr_22323_22371 = state_22305__$1;
(statearr_22323_22371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (25))){
var inst_22295 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22324_22372 = state_22305__$1;
(statearr_22324_22372[(2)] = inst_22295);

(statearr_22324_22372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (17))){
var inst_22260 = (state_22305[(10)]);
var inst_22269 = cljs.core.first.call(null,inst_22260);
var inst_22270 = cljs.core.async.muxch_STAR_.call(null,inst_22269);
var inst_22271 = cljs.core.async.close_BANG_.call(null,inst_22270);
var inst_22272 = cljs.core.next.call(null,inst_22260);
var inst_22246 = inst_22272;
var inst_22247 = null;
var inst_22248 = (0);
var inst_22249 = (0);
var state_22305__$1 = (function (){var statearr_22325 = state_22305;
(statearr_22325[(12)] = inst_22247);

(statearr_22325[(13)] = inst_22271);

(statearr_22325[(14)] = inst_22249);

(statearr_22325[(15)] = inst_22248);

(statearr_22325[(16)] = inst_22246);

return statearr_22325;
})();
var statearr_22326_22373 = state_22305__$1;
(statearr_22326_22373[(2)] = null);

(statearr_22326_22373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (3))){
var inst_22303 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22305__$1,inst_22303);
} else {
if((state_val_22306 === (12))){
var inst_22280 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22327_22374 = state_22305__$1;
(statearr_22327_22374[(2)] = inst_22280);

(statearr_22327_22374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (2))){
var state_22305__$1 = state_22305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22305__$1,(4),ch);
} else {
if((state_val_22306 === (23))){
var state_22305__$1 = state_22305;
var statearr_22328_22375 = state_22305__$1;
(statearr_22328_22375[(2)] = null);

(statearr_22328_22375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (19))){
var inst_22286 = (state_22305[(11)]);
var inst_22236 = (state_22305[(8)]);
var inst_22288 = cljs.core.async.muxch_STAR_.call(null,inst_22286);
var state_22305__$1 = state_22305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22305__$1,(22),inst_22288,inst_22236);
} else {
if((state_val_22306 === (11))){
var inst_22260 = (state_22305[(10)]);
var inst_22246 = (state_22305[(16)]);
var inst_22260__$1 = cljs.core.seq.call(null,inst_22246);
var state_22305__$1 = (function (){var statearr_22329 = state_22305;
(statearr_22329[(10)] = inst_22260__$1);

return statearr_22329;
})();
if(inst_22260__$1){
var statearr_22330_22376 = state_22305__$1;
(statearr_22330_22376[(1)] = (13));

} else {
var statearr_22331_22377 = state_22305__$1;
(statearr_22331_22377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (9))){
var inst_22282 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22332_22378 = state_22305__$1;
(statearr_22332_22378[(2)] = inst_22282);

(statearr_22332_22378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (5))){
var inst_22243 = cljs.core.deref.call(null,mults);
var inst_22244 = cljs.core.vals.call(null,inst_22243);
var inst_22245 = cljs.core.seq.call(null,inst_22244);
var inst_22246 = inst_22245;
var inst_22247 = null;
var inst_22248 = (0);
var inst_22249 = (0);
var state_22305__$1 = (function (){var statearr_22333 = state_22305;
(statearr_22333[(12)] = inst_22247);

(statearr_22333[(14)] = inst_22249);

(statearr_22333[(15)] = inst_22248);

(statearr_22333[(16)] = inst_22246);

return statearr_22333;
})();
var statearr_22334_22379 = state_22305__$1;
(statearr_22334_22379[(2)] = null);

(statearr_22334_22379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (14))){
var state_22305__$1 = state_22305;
var statearr_22338_22380 = state_22305__$1;
(statearr_22338_22380[(2)] = null);

(statearr_22338_22380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (16))){
var inst_22260 = (state_22305[(10)]);
var inst_22264 = cljs.core.chunk_first.call(null,inst_22260);
var inst_22265 = cljs.core.chunk_rest.call(null,inst_22260);
var inst_22266 = cljs.core.count.call(null,inst_22264);
var inst_22246 = inst_22265;
var inst_22247 = inst_22264;
var inst_22248 = inst_22266;
var inst_22249 = (0);
var state_22305__$1 = (function (){var statearr_22339 = state_22305;
(statearr_22339[(12)] = inst_22247);

(statearr_22339[(14)] = inst_22249);

(statearr_22339[(15)] = inst_22248);

(statearr_22339[(16)] = inst_22246);

return statearr_22339;
})();
var statearr_22340_22381 = state_22305__$1;
(statearr_22340_22381[(2)] = null);

(statearr_22340_22381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (10))){
var inst_22247 = (state_22305[(12)]);
var inst_22249 = (state_22305[(14)]);
var inst_22248 = (state_22305[(15)]);
var inst_22246 = (state_22305[(16)]);
var inst_22254 = cljs.core._nth.call(null,inst_22247,inst_22249);
var inst_22255 = cljs.core.async.muxch_STAR_.call(null,inst_22254);
var inst_22256 = cljs.core.async.close_BANG_.call(null,inst_22255);
var inst_22257 = (inst_22249 + (1));
var tmp22335 = inst_22247;
var tmp22336 = inst_22248;
var tmp22337 = inst_22246;
var inst_22246__$1 = tmp22337;
var inst_22247__$1 = tmp22335;
var inst_22248__$1 = tmp22336;
var inst_22249__$1 = inst_22257;
var state_22305__$1 = (function (){var statearr_22341 = state_22305;
(statearr_22341[(17)] = inst_22256);

(statearr_22341[(12)] = inst_22247__$1);

(statearr_22341[(14)] = inst_22249__$1);

(statearr_22341[(15)] = inst_22248__$1);

(statearr_22341[(16)] = inst_22246__$1);

return statearr_22341;
})();
var statearr_22342_22382 = state_22305__$1;
(statearr_22342_22382[(2)] = null);

(statearr_22342_22382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (18))){
var inst_22275 = (state_22305[(2)]);
var state_22305__$1 = state_22305;
var statearr_22343_22383 = state_22305__$1;
(statearr_22343_22383[(2)] = inst_22275);

(statearr_22343_22383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22306 === (8))){
var inst_22249 = (state_22305[(14)]);
var inst_22248 = (state_22305[(15)]);
var inst_22251 = (inst_22249 < inst_22248);
var inst_22252 = inst_22251;
var state_22305__$1 = state_22305;
if(cljs.core.truth_(inst_22252)){
var statearr_22344_22384 = state_22305__$1;
(statearr_22344_22384[(1)] = (10));

} else {
var statearr_22345_22385 = state_22305__$1;
(statearr_22345_22385[(1)] = (11));

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
});})(c__20458__auto___22357,mults,ensure_mult,p))
;
return ((function (switch__20346__auto__,c__20458__auto___22357,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_22349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22349[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_22349[(1)] = (1));

return statearr_22349;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_22305){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_22305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e22350){if((e22350 instanceof Object)){
var ex__20350__auto__ = e22350;
var statearr_22351_22386 = state_22305;
(statearr_22351_22386[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22387 = state_22305;
state_22305 = G__22387;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_22305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_22305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___22357,mults,ensure_mult,p))
})();
var state__20460__auto__ = (function (){var statearr_22352 = f__20459__auto__.call(null);
(statearr_22352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___22357);

return statearr_22352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___22357,mults,ensure_mult,p))
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
var args22388 = [];
var len__19349__auto___22391 = arguments.length;
var i__19350__auto___22392 = (0);
while(true){
if((i__19350__auto___22392 < len__19349__auto___22391)){
args22388.push((arguments[i__19350__auto___22392]));

var G__22393 = (i__19350__auto___22392 + (1));
i__19350__auto___22392 = G__22393;
continue;
} else {
}
break;
}

var G__22390 = args22388.length;
switch (G__22390) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22388.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22395 = [];
var len__19349__auto___22398 = arguments.length;
var i__19350__auto___22399 = (0);
while(true){
if((i__19350__auto___22399 < len__19349__auto___22398)){
args22395.push((arguments[i__19350__auto___22399]));

var G__22400 = (i__19350__auto___22399 + (1));
i__19350__auto___22399 = G__22400;
continue;
} else {
}
break;
}

var G__22397 = args22395.length;
switch (G__22397) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22395.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var args22402 = [];
var len__19349__auto___22473 = arguments.length;
var i__19350__auto___22474 = (0);
while(true){
if((i__19350__auto___22474 < len__19349__auto___22473)){
args22402.push((arguments[i__19350__auto___22474]));

var G__22475 = (i__19350__auto___22474 + (1));
i__19350__auto___22474 = G__22475;
continue;
} else {
}
break;
}

var G__22404 = args22402.length;
switch (G__22404) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22402.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20458__auto___22477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___22477,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___22477,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22443){
var state_val_22444 = (state_22443[(1)]);
if((state_val_22444 === (7))){
var state_22443__$1 = state_22443;
var statearr_22445_22478 = state_22443__$1;
(statearr_22445_22478[(2)] = null);

(statearr_22445_22478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (1))){
var state_22443__$1 = state_22443;
var statearr_22446_22479 = state_22443__$1;
(statearr_22446_22479[(2)] = null);

(statearr_22446_22479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (4))){
var inst_22407 = (state_22443[(7)]);
var inst_22409 = (inst_22407 < cnt);
var state_22443__$1 = state_22443;
if(cljs.core.truth_(inst_22409)){
var statearr_22447_22480 = state_22443__$1;
(statearr_22447_22480[(1)] = (6));

} else {
var statearr_22448_22481 = state_22443__$1;
(statearr_22448_22481[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (15))){
var inst_22439 = (state_22443[(2)]);
var state_22443__$1 = state_22443;
var statearr_22449_22482 = state_22443__$1;
(statearr_22449_22482[(2)] = inst_22439);

(statearr_22449_22482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (13))){
var inst_22432 = cljs.core.async.close_BANG_.call(null,out);
var state_22443__$1 = state_22443;
var statearr_22450_22483 = state_22443__$1;
(statearr_22450_22483[(2)] = inst_22432);

(statearr_22450_22483[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (6))){
var state_22443__$1 = state_22443;
var statearr_22451_22484 = state_22443__$1;
(statearr_22451_22484[(2)] = null);

(statearr_22451_22484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (3))){
var inst_22441 = (state_22443[(2)]);
var state_22443__$1 = state_22443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22443__$1,inst_22441);
} else {
if((state_val_22444 === (12))){
var inst_22429 = (state_22443[(8)]);
var inst_22429__$1 = (state_22443[(2)]);
var inst_22430 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22429__$1);
var state_22443__$1 = (function (){var statearr_22452 = state_22443;
(statearr_22452[(8)] = inst_22429__$1);

return statearr_22452;
})();
if(cljs.core.truth_(inst_22430)){
var statearr_22453_22485 = state_22443__$1;
(statearr_22453_22485[(1)] = (13));

} else {
var statearr_22454_22486 = state_22443__$1;
(statearr_22454_22486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (2))){
var inst_22406 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22407 = (0);
var state_22443__$1 = (function (){var statearr_22455 = state_22443;
(statearr_22455[(9)] = inst_22406);

(statearr_22455[(7)] = inst_22407);

return statearr_22455;
})();
var statearr_22456_22487 = state_22443__$1;
(statearr_22456_22487[(2)] = null);

(statearr_22456_22487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (11))){
var inst_22407 = (state_22443[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22443,(10),Object,null,(9));
var inst_22416 = chs__$1.call(null,inst_22407);
var inst_22417 = done.call(null,inst_22407);
var inst_22418 = cljs.core.async.take_BANG_.call(null,inst_22416,inst_22417);
var state_22443__$1 = state_22443;
var statearr_22457_22488 = state_22443__$1;
(statearr_22457_22488[(2)] = inst_22418);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22443__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (9))){
var inst_22407 = (state_22443[(7)]);
var inst_22420 = (state_22443[(2)]);
var inst_22421 = (inst_22407 + (1));
var inst_22407__$1 = inst_22421;
var state_22443__$1 = (function (){var statearr_22458 = state_22443;
(statearr_22458[(10)] = inst_22420);

(statearr_22458[(7)] = inst_22407__$1);

return statearr_22458;
})();
var statearr_22459_22489 = state_22443__$1;
(statearr_22459_22489[(2)] = null);

(statearr_22459_22489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (5))){
var inst_22427 = (state_22443[(2)]);
var state_22443__$1 = (function (){var statearr_22460 = state_22443;
(statearr_22460[(11)] = inst_22427);

return statearr_22460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22443__$1,(12),dchan);
} else {
if((state_val_22444 === (14))){
var inst_22429 = (state_22443[(8)]);
var inst_22434 = cljs.core.apply.call(null,f,inst_22429);
var state_22443__$1 = state_22443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22443__$1,(16),out,inst_22434);
} else {
if((state_val_22444 === (16))){
var inst_22436 = (state_22443[(2)]);
var state_22443__$1 = (function (){var statearr_22461 = state_22443;
(statearr_22461[(12)] = inst_22436);

return statearr_22461;
})();
var statearr_22462_22490 = state_22443__$1;
(statearr_22462_22490[(2)] = null);

(statearr_22462_22490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (10))){
var inst_22411 = (state_22443[(2)]);
var inst_22412 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22443__$1 = (function (){var statearr_22463 = state_22443;
(statearr_22463[(13)] = inst_22411);

return statearr_22463;
})();
var statearr_22464_22491 = state_22443__$1;
(statearr_22464_22491[(2)] = inst_22412);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22443__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22444 === (8))){
var inst_22425 = (state_22443[(2)]);
var state_22443__$1 = state_22443;
var statearr_22465_22492 = state_22443__$1;
(statearr_22465_22492[(2)] = inst_22425);

(statearr_22465_22492[(1)] = (5));


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
});})(c__20458__auto___22477,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20346__auto__,c__20458__auto___22477,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_22469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22469[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_22469[(1)] = (1));

return statearr_22469;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_22443){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_22443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e22470){if((e22470 instanceof Object)){
var ex__20350__auto__ = e22470;
var statearr_22471_22493 = state_22443;
(statearr_22471_22493[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22494 = state_22443;
state_22443 = G__22494;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_22443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_22443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___22477,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20460__auto__ = (function (){var statearr_22472 = f__20459__auto__.call(null);
(statearr_22472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___22477);

return statearr_22472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___22477,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22496 = [];
var len__19349__auto___22552 = arguments.length;
var i__19350__auto___22553 = (0);
while(true){
if((i__19350__auto___22553 < len__19349__auto___22552)){
args22496.push((arguments[i__19350__auto___22553]));

var G__22554 = (i__19350__auto___22553 + (1));
i__19350__auto___22553 = G__22554;
continue;
} else {
}
break;
}

var G__22498 = args22496.length;
switch (G__22498) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22496.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20458__auto___22556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___22556,out){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___22556,out){
return (function (state_22528){
var state_val_22529 = (state_22528[(1)]);
if((state_val_22529 === (7))){
var inst_22508 = (state_22528[(7)]);
var inst_22507 = (state_22528[(8)]);
var inst_22507__$1 = (state_22528[(2)]);
var inst_22508__$1 = cljs.core.nth.call(null,inst_22507__$1,(0),null);
var inst_22509 = cljs.core.nth.call(null,inst_22507__$1,(1),null);
var inst_22510 = (inst_22508__$1 == null);
var state_22528__$1 = (function (){var statearr_22530 = state_22528;
(statearr_22530[(7)] = inst_22508__$1);

(statearr_22530[(8)] = inst_22507__$1);

(statearr_22530[(9)] = inst_22509);

return statearr_22530;
})();
if(cljs.core.truth_(inst_22510)){
var statearr_22531_22557 = state_22528__$1;
(statearr_22531_22557[(1)] = (8));

} else {
var statearr_22532_22558 = state_22528__$1;
(statearr_22532_22558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (1))){
var inst_22499 = cljs.core.vec.call(null,chs);
var inst_22500 = inst_22499;
var state_22528__$1 = (function (){var statearr_22533 = state_22528;
(statearr_22533[(10)] = inst_22500);

return statearr_22533;
})();
var statearr_22534_22559 = state_22528__$1;
(statearr_22534_22559[(2)] = null);

(statearr_22534_22559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (4))){
var inst_22500 = (state_22528[(10)]);
var state_22528__$1 = state_22528;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22528__$1,(7),inst_22500);
} else {
if((state_val_22529 === (6))){
var inst_22524 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22535_22560 = state_22528__$1;
(statearr_22535_22560[(2)] = inst_22524);

(statearr_22535_22560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (3))){
var inst_22526 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22528__$1,inst_22526);
} else {
if((state_val_22529 === (2))){
var inst_22500 = (state_22528[(10)]);
var inst_22502 = cljs.core.count.call(null,inst_22500);
var inst_22503 = (inst_22502 > (0));
var state_22528__$1 = state_22528;
if(cljs.core.truth_(inst_22503)){
var statearr_22537_22561 = state_22528__$1;
(statearr_22537_22561[(1)] = (4));

} else {
var statearr_22538_22562 = state_22528__$1;
(statearr_22538_22562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (11))){
var inst_22500 = (state_22528[(10)]);
var inst_22517 = (state_22528[(2)]);
var tmp22536 = inst_22500;
var inst_22500__$1 = tmp22536;
var state_22528__$1 = (function (){var statearr_22539 = state_22528;
(statearr_22539[(10)] = inst_22500__$1);

(statearr_22539[(11)] = inst_22517);

return statearr_22539;
})();
var statearr_22540_22563 = state_22528__$1;
(statearr_22540_22563[(2)] = null);

(statearr_22540_22563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (9))){
var inst_22508 = (state_22528[(7)]);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22528__$1,(11),out,inst_22508);
} else {
if((state_val_22529 === (5))){
var inst_22522 = cljs.core.async.close_BANG_.call(null,out);
var state_22528__$1 = state_22528;
var statearr_22541_22564 = state_22528__$1;
(statearr_22541_22564[(2)] = inst_22522);

(statearr_22541_22564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (10))){
var inst_22520 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22542_22565 = state_22528__$1;
(statearr_22542_22565[(2)] = inst_22520);

(statearr_22542_22565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (8))){
var inst_22500 = (state_22528[(10)]);
var inst_22508 = (state_22528[(7)]);
var inst_22507 = (state_22528[(8)]);
var inst_22509 = (state_22528[(9)]);
var inst_22512 = (function (){var cs = inst_22500;
var vec__22505 = inst_22507;
var v = inst_22508;
var c = inst_22509;
return ((function (cs,vec__22505,v,c,inst_22500,inst_22508,inst_22507,inst_22509,state_val_22529,c__20458__auto___22556,out){
return (function (p1__22495_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22495_SHARP_);
});
;})(cs,vec__22505,v,c,inst_22500,inst_22508,inst_22507,inst_22509,state_val_22529,c__20458__auto___22556,out))
})();
var inst_22513 = cljs.core.filterv.call(null,inst_22512,inst_22500);
var inst_22500__$1 = inst_22513;
var state_22528__$1 = (function (){var statearr_22543 = state_22528;
(statearr_22543[(10)] = inst_22500__$1);

return statearr_22543;
})();
var statearr_22544_22566 = state_22528__$1;
(statearr_22544_22566[(2)] = null);

(statearr_22544_22566[(1)] = (2));


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
});})(c__20458__auto___22556,out))
;
return ((function (switch__20346__auto__,c__20458__auto___22556,out){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_22548 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22548[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_22548[(1)] = (1));

return statearr_22548;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_22528){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_22528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e22549){if((e22549 instanceof Object)){
var ex__20350__auto__ = e22549;
var statearr_22550_22567 = state_22528;
(statearr_22550_22567[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22568 = state_22528;
state_22528 = G__22568;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_22528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_22528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___22556,out))
})();
var state__20460__auto__ = (function (){var statearr_22551 = f__20459__auto__.call(null);
(statearr_22551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___22556);

return statearr_22551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___22556,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22569 = [];
var len__19349__auto___22618 = arguments.length;
var i__19350__auto___22619 = (0);
while(true){
if((i__19350__auto___22619 < len__19349__auto___22618)){
args22569.push((arguments[i__19350__auto___22619]));

var G__22620 = (i__19350__auto___22619 + (1));
i__19350__auto___22619 = G__22620;
continue;
} else {
}
break;
}

var G__22571 = args22569.length;
switch (G__22571) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22569.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20458__auto___22622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___22622,out){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___22622,out){
return (function (state_22595){
var state_val_22596 = (state_22595[(1)]);
if((state_val_22596 === (7))){
var inst_22577 = (state_22595[(7)]);
var inst_22577__$1 = (state_22595[(2)]);
var inst_22578 = (inst_22577__$1 == null);
var inst_22579 = cljs.core.not.call(null,inst_22578);
var state_22595__$1 = (function (){var statearr_22597 = state_22595;
(statearr_22597[(7)] = inst_22577__$1);

return statearr_22597;
})();
if(inst_22579){
var statearr_22598_22623 = state_22595__$1;
(statearr_22598_22623[(1)] = (8));

} else {
var statearr_22599_22624 = state_22595__$1;
(statearr_22599_22624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (1))){
var inst_22572 = (0);
var state_22595__$1 = (function (){var statearr_22600 = state_22595;
(statearr_22600[(8)] = inst_22572);

return statearr_22600;
})();
var statearr_22601_22625 = state_22595__$1;
(statearr_22601_22625[(2)] = null);

(statearr_22601_22625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (4))){
var state_22595__$1 = state_22595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22595__$1,(7),ch);
} else {
if((state_val_22596 === (6))){
var inst_22590 = (state_22595[(2)]);
var state_22595__$1 = state_22595;
var statearr_22602_22626 = state_22595__$1;
(statearr_22602_22626[(2)] = inst_22590);

(statearr_22602_22626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (3))){
var inst_22592 = (state_22595[(2)]);
var inst_22593 = cljs.core.async.close_BANG_.call(null,out);
var state_22595__$1 = (function (){var statearr_22603 = state_22595;
(statearr_22603[(9)] = inst_22592);

return statearr_22603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22595__$1,inst_22593);
} else {
if((state_val_22596 === (2))){
var inst_22572 = (state_22595[(8)]);
var inst_22574 = (inst_22572 < n);
var state_22595__$1 = state_22595;
if(cljs.core.truth_(inst_22574)){
var statearr_22604_22627 = state_22595__$1;
(statearr_22604_22627[(1)] = (4));

} else {
var statearr_22605_22628 = state_22595__$1;
(statearr_22605_22628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (11))){
var inst_22572 = (state_22595[(8)]);
var inst_22582 = (state_22595[(2)]);
var inst_22583 = (inst_22572 + (1));
var inst_22572__$1 = inst_22583;
var state_22595__$1 = (function (){var statearr_22606 = state_22595;
(statearr_22606[(10)] = inst_22582);

(statearr_22606[(8)] = inst_22572__$1);

return statearr_22606;
})();
var statearr_22607_22629 = state_22595__$1;
(statearr_22607_22629[(2)] = null);

(statearr_22607_22629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (9))){
var state_22595__$1 = state_22595;
var statearr_22608_22630 = state_22595__$1;
(statearr_22608_22630[(2)] = null);

(statearr_22608_22630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (5))){
var state_22595__$1 = state_22595;
var statearr_22609_22631 = state_22595__$1;
(statearr_22609_22631[(2)] = null);

(statearr_22609_22631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (10))){
var inst_22587 = (state_22595[(2)]);
var state_22595__$1 = state_22595;
var statearr_22610_22632 = state_22595__$1;
(statearr_22610_22632[(2)] = inst_22587);

(statearr_22610_22632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22596 === (8))){
var inst_22577 = (state_22595[(7)]);
var state_22595__$1 = state_22595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22595__$1,(11),out,inst_22577);
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
});})(c__20458__auto___22622,out))
;
return ((function (switch__20346__auto__,c__20458__auto___22622,out){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_22614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22614[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_22614[(1)] = (1));

return statearr_22614;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_22595){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_22595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e22615){if((e22615 instanceof Object)){
var ex__20350__auto__ = e22615;
var statearr_22616_22633 = state_22595;
(statearr_22616_22633[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22634 = state_22595;
state_22595 = G__22634;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_22595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_22595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___22622,out))
})();
var state__20460__auto__ = (function (){var statearr_22617 = f__20459__auto__.call(null);
(statearr_22617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___22622);

return statearr_22617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___22622,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22642 = (function (map_LT_,f,ch,meta22643){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22643 = meta22643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22644,meta22643__$1){
var self__ = this;
var _22644__$1 = this;
return (new cljs.core.async.t_cljs$core$async22642(self__.map_LT_,self__.f,self__.ch,meta22643__$1));
});

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22644){
var self__ = this;
var _22644__$1 = this;
return self__.meta22643;
});

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22645 = (function (map_LT_,f,ch,meta22643,_,fn1,meta22646){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22643 = meta22643;
this._ = _;
this.fn1 = fn1;
this.meta22646 = meta22646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22647,meta22646__$1){
var self__ = this;
var _22647__$1 = this;
return (new cljs.core.async.t_cljs$core$async22645(self__.map_LT_,self__.f,self__.ch,self__.meta22643,self__._,self__.fn1,meta22646__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22647){
var self__ = this;
var _22647__$1 = this;
return self__.meta22646;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22635_SHARP_){
return f1.call(null,(((p1__22635_SHARP_ == null))?null:self__.f.call(null,p1__22635_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22645.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22643","meta22643",1582062864,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22642","cljs.core.async/t_cljs$core$async22642",-897580066,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22646","meta22646",-1652975686,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22645";

cljs.core.async.t_cljs$core$async22645.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22645");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22645 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22645(map_LT___$1,f__$1,ch__$1,meta22643__$1,___$2,fn1__$1,meta22646){
return (new cljs.core.async.t_cljs$core$async22645(map_LT___$1,f__$1,ch__$1,meta22643__$1,___$2,fn1__$1,meta22646));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22645(self__.map_LT_,self__.f,self__.ch,self__.meta22643,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18279__auto__ = ret;
if(cljs.core.truth_(and__18279__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18279__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22642.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22643","meta22643",1582062864,null)], null);
});

cljs.core.async.t_cljs$core$async22642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22642";

cljs.core.async.t_cljs$core$async22642.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22642");
});

cljs.core.async.__GT_t_cljs$core$async22642 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22642(map_LT___$1,f__$1,ch__$1,meta22643){
return (new cljs.core.async.t_cljs$core$async22642(map_LT___$1,f__$1,ch__$1,meta22643));
});

}

return (new cljs.core.async.t_cljs$core$async22642(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22651 = (function (map_GT_,f,ch,meta22652){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22652 = meta22652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22653,meta22652__$1){
var self__ = this;
var _22653__$1 = this;
return (new cljs.core.async.t_cljs$core$async22651(self__.map_GT_,self__.f,self__.ch,meta22652__$1));
});

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22653){
var self__ = this;
var _22653__$1 = this;
return self__.meta22652;
});

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22651.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22652","meta22652",1217119904,null)], null);
});

cljs.core.async.t_cljs$core$async22651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22651";

cljs.core.async.t_cljs$core$async22651.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22651");
});

cljs.core.async.__GT_t_cljs$core$async22651 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22651(map_GT___$1,f__$1,ch__$1,meta22652){
return (new cljs.core.async.t_cljs$core$async22651(map_GT___$1,f__$1,ch__$1,meta22652));
});

}

return (new cljs.core.async.t_cljs$core$async22651(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22657 = (function (filter_GT_,p,ch,meta22658){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22658 = meta22658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22659,meta22658__$1){
var self__ = this;
var _22659__$1 = this;
return (new cljs.core.async.t_cljs$core$async22657(self__.filter_GT_,self__.p,self__.ch,meta22658__$1));
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22659){
var self__ = this;
var _22659__$1 = this;
return self__.meta22658;
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22658","meta22658",1268331184,null)], null);
});

cljs.core.async.t_cljs$core$async22657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22657";

cljs.core.async.t_cljs$core$async22657.cljs$lang$ctorPrWriter = (function (this__18889__auto__,writer__18890__auto__,opt__18891__auto__){
return cljs.core._write.call(null,writer__18890__auto__,"cljs.core.async/t_cljs$core$async22657");
});

cljs.core.async.__GT_t_cljs$core$async22657 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22657(filter_GT___$1,p__$1,ch__$1,meta22658){
return (new cljs.core.async.t_cljs$core$async22657(filter_GT___$1,p__$1,ch__$1,meta22658));
});

}

return (new cljs.core.async.t_cljs$core$async22657(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22660 = [];
var len__19349__auto___22704 = arguments.length;
var i__19350__auto___22705 = (0);
while(true){
if((i__19350__auto___22705 < len__19349__auto___22704)){
args22660.push((arguments[i__19350__auto___22705]));

var G__22706 = (i__19350__auto___22705 + (1));
i__19350__auto___22705 = G__22706;
continue;
} else {
}
break;
}

var G__22662 = args22660.length;
switch (G__22662) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22660.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20458__auto___22708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___22708,out){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___22708,out){
return (function (state_22683){
var state_val_22684 = (state_22683[(1)]);
if((state_val_22684 === (7))){
var inst_22679 = (state_22683[(2)]);
var state_22683__$1 = state_22683;
var statearr_22685_22709 = state_22683__$1;
(statearr_22685_22709[(2)] = inst_22679);

(statearr_22685_22709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (1))){
var state_22683__$1 = state_22683;
var statearr_22686_22710 = state_22683__$1;
(statearr_22686_22710[(2)] = null);

(statearr_22686_22710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (4))){
var inst_22665 = (state_22683[(7)]);
var inst_22665__$1 = (state_22683[(2)]);
var inst_22666 = (inst_22665__$1 == null);
var state_22683__$1 = (function (){var statearr_22687 = state_22683;
(statearr_22687[(7)] = inst_22665__$1);

return statearr_22687;
})();
if(cljs.core.truth_(inst_22666)){
var statearr_22688_22711 = state_22683__$1;
(statearr_22688_22711[(1)] = (5));

} else {
var statearr_22689_22712 = state_22683__$1;
(statearr_22689_22712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (6))){
var inst_22665 = (state_22683[(7)]);
var inst_22670 = p.call(null,inst_22665);
var state_22683__$1 = state_22683;
if(cljs.core.truth_(inst_22670)){
var statearr_22690_22713 = state_22683__$1;
(statearr_22690_22713[(1)] = (8));

} else {
var statearr_22691_22714 = state_22683__$1;
(statearr_22691_22714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (3))){
var inst_22681 = (state_22683[(2)]);
var state_22683__$1 = state_22683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22683__$1,inst_22681);
} else {
if((state_val_22684 === (2))){
var state_22683__$1 = state_22683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22683__$1,(4),ch);
} else {
if((state_val_22684 === (11))){
var inst_22673 = (state_22683[(2)]);
var state_22683__$1 = state_22683;
var statearr_22692_22715 = state_22683__$1;
(statearr_22692_22715[(2)] = inst_22673);

(statearr_22692_22715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (9))){
var state_22683__$1 = state_22683;
var statearr_22693_22716 = state_22683__$1;
(statearr_22693_22716[(2)] = null);

(statearr_22693_22716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (5))){
var inst_22668 = cljs.core.async.close_BANG_.call(null,out);
var state_22683__$1 = state_22683;
var statearr_22694_22717 = state_22683__$1;
(statearr_22694_22717[(2)] = inst_22668);

(statearr_22694_22717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (10))){
var inst_22676 = (state_22683[(2)]);
var state_22683__$1 = (function (){var statearr_22695 = state_22683;
(statearr_22695[(8)] = inst_22676);

return statearr_22695;
})();
var statearr_22696_22718 = state_22683__$1;
(statearr_22696_22718[(2)] = null);

(statearr_22696_22718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22684 === (8))){
var inst_22665 = (state_22683[(7)]);
var state_22683__$1 = state_22683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22683__$1,(11),out,inst_22665);
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
});})(c__20458__auto___22708,out))
;
return ((function (switch__20346__auto__,c__20458__auto___22708,out){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_22700 = [null,null,null,null,null,null,null,null,null];
(statearr_22700[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_22700[(1)] = (1));

return statearr_22700;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_22683){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_22683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e22701){if((e22701 instanceof Object)){
var ex__20350__auto__ = e22701;
var statearr_22702_22719 = state_22683;
(statearr_22702_22719[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22720 = state_22683;
state_22683 = G__22720;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_22683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_22683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___22708,out))
})();
var state__20460__auto__ = (function (){var statearr_22703 = f__20459__auto__.call(null);
(statearr_22703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___22708);

return statearr_22703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___22708,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22721 = [];
var len__19349__auto___22724 = arguments.length;
var i__19350__auto___22725 = (0);
while(true){
if((i__19350__auto___22725 < len__19349__auto___22724)){
args22721.push((arguments[i__19350__auto___22725]));

var G__22726 = (i__19350__auto___22725 + (1));
i__19350__auto___22725 = G__22726;
continue;
} else {
}
break;
}

var G__22723 = args22721.length;
switch (G__22723) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22721.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20458__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto__){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto__){
return (function (state_22893){
var state_val_22894 = (state_22893[(1)]);
if((state_val_22894 === (7))){
var inst_22889 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
var statearr_22895_22936 = state_22893__$1;
(statearr_22895_22936[(2)] = inst_22889);

(statearr_22895_22936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (20))){
var inst_22859 = (state_22893[(7)]);
var inst_22870 = (state_22893[(2)]);
var inst_22871 = cljs.core.next.call(null,inst_22859);
var inst_22845 = inst_22871;
var inst_22846 = null;
var inst_22847 = (0);
var inst_22848 = (0);
var state_22893__$1 = (function (){var statearr_22896 = state_22893;
(statearr_22896[(8)] = inst_22870);

(statearr_22896[(9)] = inst_22847);

(statearr_22896[(10)] = inst_22846);

(statearr_22896[(11)] = inst_22845);

(statearr_22896[(12)] = inst_22848);

return statearr_22896;
})();
var statearr_22897_22937 = state_22893__$1;
(statearr_22897_22937[(2)] = null);

(statearr_22897_22937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (1))){
var state_22893__$1 = state_22893;
var statearr_22898_22938 = state_22893__$1;
(statearr_22898_22938[(2)] = null);

(statearr_22898_22938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (4))){
var inst_22834 = (state_22893[(13)]);
var inst_22834__$1 = (state_22893[(2)]);
var inst_22835 = (inst_22834__$1 == null);
var state_22893__$1 = (function (){var statearr_22899 = state_22893;
(statearr_22899[(13)] = inst_22834__$1);

return statearr_22899;
})();
if(cljs.core.truth_(inst_22835)){
var statearr_22900_22939 = state_22893__$1;
(statearr_22900_22939[(1)] = (5));

} else {
var statearr_22901_22940 = state_22893__$1;
(statearr_22901_22940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (15))){
var state_22893__$1 = state_22893;
var statearr_22905_22941 = state_22893__$1;
(statearr_22905_22941[(2)] = null);

(statearr_22905_22941[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (21))){
var state_22893__$1 = state_22893;
var statearr_22906_22942 = state_22893__$1;
(statearr_22906_22942[(2)] = null);

(statearr_22906_22942[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (13))){
var inst_22847 = (state_22893[(9)]);
var inst_22846 = (state_22893[(10)]);
var inst_22845 = (state_22893[(11)]);
var inst_22848 = (state_22893[(12)]);
var inst_22855 = (state_22893[(2)]);
var inst_22856 = (inst_22848 + (1));
var tmp22902 = inst_22847;
var tmp22903 = inst_22846;
var tmp22904 = inst_22845;
var inst_22845__$1 = tmp22904;
var inst_22846__$1 = tmp22903;
var inst_22847__$1 = tmp22902;
var inst_22848__$1 = inst_22856;
var state_22893__$1 = (function (){var statearr_22907 = state_22893;
(statearr_22907[(9)] = inst_22847__$1);

(statearr_22907[(10)] = inst_22846__$1);

(statearr_22907[(11)] = inst_22845__$1);

(statearr_22907[(12)] = inst_22848__$1);

(statearr_22907[(14)] = inst_22855);

return statearr_22907;
})();
var statearr_22908_22943 = state_22893__$1;
(statearr_22908_22943[(2)] = null);

(statearr_22908_22943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (22))){
var state_22893__$1 = state_22893;
var statearr_22909_22944 = state_22893__$1;
(statearr_22909_22944[(2)] = null);

(statearr_22909_22944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (6))){
var inst_22834 = (state_22893[(13)]);
var inst_22843 = f.call(null,inst_22834);
var inst_22844 = cljs.core.seq.call(null,inst_22843);
var inst_22845 = inst_22844;
var inst_22846 = null;
var inst_22847 = (0);
var inst_22848 = (0);
var state_22893__$1 = (function (){var statearr_22910 = state_22893;
(statearr_22910[(9)] = inst_22847);

(statearr_22910[(10)] = inst_22846);

(statearr_22910[(11)] = inst_22845);

(statearr_22910[(12)] = inst_22848);

return statearr_22910;
})();
var statearr_22911_22945 = state_22893__$1;
(statearr_22911_22945[(2)] = null);

(statearr_22911_22945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (17))){
var inst_22859 = (state_22893[(7)]);
var inst_22863 = cljs.core.chunk_first.call(null,inst_22859);
var inst_22864 = cljs.core.chunk_rest.call(null,inst_22859);
var inst_22865 = cljs.core.count.call(null,inst_22863);
var inst_22845 = inst_22864;
var inst_22846 = inst_22863;
var inst_22847 = inst_22865;
var inst_22848 = (0);
var state_22893__$1 = (function (){var statearr_22912 = state_22893;
(statearr_22912[(9)] = inst_22847);

(statearr_22912[(10)] = inst_22846);

(statearr_22912[(11)] = inst_22845);

(statearr_22912[(12)] = inst_22848);

return statearr_22912;
})();
var statearr_22913_22946 = state_22893__$1;
(statearr_22913_22946[(2)] = null);

(statearr_22913_22946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (3))){
var inst_22891 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22893__$1,inst_22891);
} else {
if((state_val_22894 === (12))){
var inst_22879 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
var statearr_22914_22947 = state_22893__$1;
(statearr_22914_22947[(2)] = inst_22879);

(statearr_22914_22947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (2))){
var state_22893__$1 = state_22893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22893__$1,(4),in$);
} else {
if((state_val_22894 === (23))){
var inst_22887 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
var statearr_22915_22948 = state_22893__$1;
(statearr_22915_22948[(2)] = inst_22887);

(statearr_22915_22948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (19))){
var inst_22874 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
var statearr_22916_22949 = state_22893__$1;
(statearr_22916_22949[(2)] = inst_22874);

(statearr_22916_22949[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (11))){
var inst_22859 = (state_22893[(7)]);
var inst_22845 = (state_22893[(11)]);
var inst_22859__$1 = cljs.core.seq.call(null,inst_22845);
var state_22893__$1 = (function (){var statearr_22917 = state_22893;
(statearr_22917[(7)] = inst_22859__$1);

return statearr_22917;
})();
if(inst_22859__$1){
var statearr_22918_22950 = state_22893__$1;
(statearr_22918_22950[(1)] = (14));

} else {
var statearr_22919_22951 = state_22893__$1;
(statearr_22919_22951[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (9))){
var inst_22881 = (state_22893[(2)]);
var inst_22882 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22893__$1 = (function (){var statearr_22920 = state_22893;
(statearr_22920[(15)] = inst_22881);

return statearr_22920;
})();
if(cljs.core.truth_(inst_22882)){
var statearr_22921_22952 = state_22893__$1;
(statearr_22921_22952[(1)] = (21));

} else {
var statearr_22922_22953 = state_22893__$1;
(statearr_22922_22953[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (5))){
var inst_22837 = cljs.core.async.close_BANG_.call(null,out);
var state_22893__$1 = state_22893;
var statearr_22923_22954 = state_22893__$1;
(statearr_22923_22954[(2)] = inst_22837);

(statearr_22923_22954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (14))){
var inst_22859 = (state_22893[(7)]);
var inst_22861 = cljs.core.chunked_seq_QMARK_.call(null,inst_22859);
var state_22893__$1 = state_22893;
if(inst_22861){
var statearr_22924_22955 = state_22893__$1;
(statearr_22924_22955[(1)] = (17));

} else {
var statearr_22925_22956 = state_22893__$1;
(statearr_22925_22956[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (16))){
var inst_22877 = (state_22893[(2)]);
var state_22893__$1 = state_22893;
var statearr_22926_22957 = state_22893__$1;
(statearr_22926_22957[(2)] = inst_22877);

(statearr_22926_22957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22894 === (10))){
var inst_22846 = (state_22893[(10)]);
var inst_22848 = (state_22893[(12)]);
var inst_22853 = cljs.core._nth.call(null,inst_22846,inst_22848);
var state_22893__$1 = state_22893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22893__$1,(13),out,inst_22853);
} else {
if((state_val_22894 === (18))){
var inst_22859 = (state_22893[(7)]);
var inst_22868 = cljs.core.first.call(null,inst_22859);
var state_22893__$1 = state_22893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22893__$1,(20),out,inst_22868);
} else {
if((state_val_22894 === (8))){
var inst_22847 = (state_22893[(9)]);
var inst_22848 = (state_22893[(12)]);
var inst_22850 = (inst_22848 < inst_22847);
var inst_22851 = inst_22850;
var state_22893__$1 = state_22893;
if(cljs.core.truth_(inst_22851)){
var statearr_22927_22958 = state_22893__$1;
(statearr_22927_22958[(1)] = (10));

} else {
var statearr_22928_22959 = state_22893__$1;
(statearr_22928_22959[(1)] = (11));

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
});})(c__20458__auto__))
;
return ((function (switch__20346__auto__,c__20458__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20347__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20347__auto____0 = (function (){
var statearr_22932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22932[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20347__auto__);

(statearr_22932[(1)] = (1));

return statearr_22932;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20347__auto____1 = (function (state_22893){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_22893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e22933){if((e22933 instanceof Object)){
var ex__20350__auto__ = e22933;
var statearr_22934_22960 = state_22893;
(statearr_22934_22960[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22961 = state_22893;
state_22893 = G__22961;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20347__auto__ = function(state_22893){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20347__auto____1.call(this,state_22893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20347__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20347__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto__))
})();
var state__20460__auto__ = (function (){var statearr_22935 = f__20459__auto__.call(null);
(statearr_22935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto__);

return statearr_22935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto__))
);

return c__20458__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22962 = [];
var len__19349__auto___22965 = arguments.length;
var i__19350__auto___22966 = (0);
while(true){
if((i__19350__auto___22966 < len__19349__auto___22965)){
args22962.push((arguments[i__19350__auto___22966]));

var G__22967 = (i__19350__auto___22966 + (1));
i__19350__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var G__22964 = args22962.length;
switch (G__22964) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22962.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22969 = [];
var len__19349__auto___22972 = arguments.length;
var i__19350__auto___22973 = (0);
while(true){
if((i__19350__auto___22973 < len__19349__auto___22972)){
args22969.push((arguments[i__19350__auto___22973]));

var G__22974 = (i__19350__auto___22973 + (1));
i__19350__auto___22973 = G__22974;
continue;
} else {
}
break;
}

var G__22971 = args22969.length;
switch (G__22971) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22969.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22976 = [];
var len__19349__auto___23027 = arguments.length;
var i__19350__auto___23028 = (0);
while(true){
if((i__19350__auto___23028 < len__19349__auto___23027)){
args22976.push((arguments[i__19350__auto___23028]));

var G__23029 = (i__19350__auto___23028 + (1));
i__19350__auto___23028 = G__23029;
continue;
} else {
}
break;
}

var G__22978 = args22976.length;
switch (G__22978) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22976.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20458__auto___23031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___23031,out){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___23031,out){
return (function (state_23002){
var state_val_23003 = (state_23002[(1)]);
if((state_val_23003 === (7))){
var inst_22997 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23004_23032 = state_23002__$1;
(statearr_23004_23032[(2)] = inst_22997);

(statearr_23004_23032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (1))){
var inst_22979 = null;
var state_23002__$1 = (function (){var statearr_23005 = state_23002;
(statearr_23005[(7)] = inst_22979);

return statearr_23005;
})();
var statearr_23006_23033 = state_23002__$1;
(statearr_23006_23033[(2)] = null);

(statearr_23006_23033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (4))){
var inst_22982 = (state_23002[(8)]);
var inst_22982__$1 = (state_23002[(2)]);
var inst_22983 = (inst_22982__$1 == null);
var inst_22984 = cljs.core.not.call(null,inst_22983);
var state_23002__$1 = (function (){var statearr_23007 = state_23002;
(statearr_23007[(8)] = inst_22982__$1);

return statearr_23007;
})();
if(inst_22984){
var statearr_23008_23034 = state_23002__$1;
(statearr_23008_23034[(1)] = (5));

} else {
var statearr_23009_23035 = state_23002__$1;
(statearr_23009_23035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (6))){
var state_23002__$1 = state_23002;
var statearr_23010_23036 = state_23002__$1;
(statearr_23010_23036[(2)] = null);

(statearr_23010_23036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (3))){
var inst_22999 = (state_23002[(2)]);
var inst_23000 = cljs.core.async.close_BANG_.call(null,out);
var state_23002__$1 = (function (){var statearr_23011 = state_23002;
(statearr_23011[(9)] = inst_22999);

return statearr_23011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23002__$1,inst_23000);
} else {
if((state_val_23003 === (2))){
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23002__$1,(4),ch);
} else {
if((state_val_23003 === (11))){
var inst_22982 = (state_23002[(8)]);
var inst_22991 = (state_23002[(2)]);
var inst_22979 = inst_22982;
var state_23002__$1 = (function (){var statearr_23012 = state_23002;
(statearr_23012[(10)] = inst_22991);

(statearr_23012[(7)] = inst_22979);

return statearr_23012;
})();
var statearr_23013_23037 = state_23002__$1;
(statearr_23013_23037[(2)] = null);

(statearr_23013_23037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (9))){
var inst_22982 = (state_23002[(8)]);
var state_23002__$1 = state_23002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23002__$1,(11),out,inst_22982);
} else {
if((state_val_23003 === (5))){
var inst_22982 = (state_23002[(8)]);
var inst_22979 = (state_23002[(7)]);
var inst_22986 = cljs.core._EQ_.call(null,inst_22982,inst_22979);
var state_23002__$1 = state_23002;
if(inst_22986){
var statearr_23015_23038 = state_23002__$1;
(statearr_23015_23038[(1)] = (8));

} else {
var statearr_23016_23039 = state_23002__$1;
(statearr_23016_23039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (10))){
var inst_22994 = (state_23002[(2)]);
var state_23002__$1 = state_23002;
var statearr_23017_23040 = state_23002__$1;
(statearr_23017_23040[(2)] = inst_22994);

(statearr_23017_23040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23003 === (8))){
var inst_22979 = (state_23002[(7)]);
var tmp23014 = inst_22979;
var inst_22979__$1 = tmp23014;
var state_23002__$1 = (function (){var statearr_23018 = state_23002;
(statearr_23018[(7)] = inst_22979__$1);

return statearr_23018;
})();
var statearr_23019_23041 = state_23002__$1;
(statearr_23019_23041[(2)] = null);

(statearr_23019_23041[(1)] = (2));


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
});})(c__20458__auto___23031,out))
;
return ((function (switch__20346__auto__,c__20458__auto___23031,out){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_23023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23023[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_23023[(1)] = (1));

return statearr_23023;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_23002){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_23002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e23024){if((e23024 instanceof Object)){
var ex__20350__auto__ = e23024;
var statearr_23025_23042 = state_23002;
(statearr_23025_23042[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23043 = state_23002;
state_23002 = G__23043;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_23002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_23002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___23031,out))
})();
var state__20460__auto__ = (function (){var statearr_23026 = f__20459__auto__.call(null);
(statearr_23026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___23031);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___23031,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23044 = [];
var len__19349__auto___23114 = arguments.length;
var i__19350__auto___23115 = (0);
while(true){
if((i__19350__auto___23115 < len__19349__auto___23114)){
args23044.push((arguments[i__19350__auto___23115]));

var G__23116 = (i__19350__auto___23115 + (1));
i__19350__auto___23115 = G__23116;
continue;
} else {
}
break;
}

var G__23046 = args23044.length;
switch (G__23046) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23044.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20458__auto___23118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___23118,out){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___23118,out){
return (function (state_23084){
var state_val_23085 = (state_23084[(1)]);
if((state_val_23085 === (7))){
var inst_23080 = (state_23084[(2)]);
var state_23084__$1 = state_23084;
var statearr_23086_23119 = state_23084__$1;
(statearr_23086_23119[(2)] = inst_23080);

(statearr_23086_23119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (1))){
var inst_23047 = (new Array(n));
var inst_23048 = inst_23047;
var inst_23049 = (0);
var state_23084__$1 = (function (){var statearr_23087 = state_23084;
(statearr_23087[(7)] = inst_23049);

(statearr_23087[(8)] = inst_23048);

return statearr_23087;
})();
var statearr_23088_23120 = state_23084__$1;
(statearr_23088_23120[(2)] = null);

(statearr_23088_23120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (4))){
var inst_23052 = (state_23084[(9)]);
var inst_23052__$1 = (state_23084[(2)]);
var inst_23053 = (inst_23052__$1 == null);
var inst_23054 = cljs.core.not.call(null,inst_23053);
var state_23084__$1 = (function (){var statearr_23089 = state_23084;
(statearr_23089[(9)] = inst_23052__$1);

return statearr_23089;
})();
if(inst_23054){
var statearr_23090_23121 = state_23084__$1;
(statearr_23090_23121[(1)] = (5));

} else {
var statearr_23091_23122 = state_23084__$1;
(statearr_23091_23122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (15))){
var inst_23074 = (state_23084[(2)]);
var state_23084__$1 = state_23084;
var statearr_23092_23123 = state_23084__$1;
(statearr_23092_23123[(2)] = inst_23074);

(statearr_23092_23123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (13))){
var state_23084__$1 = state_23084;
var statearr_23093_23124 = state_23084__$1;
(statearr_23093_23124[(2)] = null);

(statearr_23093_23124[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (6))){
var inst_23049 = (state_23084[(7)]);
var inst_23070 = (inst_23049 > (0));
var state_23084__$1 = state_23084;
if(cljs.core.truth_(inst_23070)){
var statearr_23094_23125 = state_23084__$1;
(statearr_23094_23125[(1)] = (12));

} else {
var statearr_23095_23126 = state_23084__$1;
(statearr_23095_23126[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (3))){
var inst_23082 = (state_23084[(2)]);
var state_23084__$1 = state_23084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23084__$1,inst_23082);
} else {
if((state_val_23085 === (12))){
var inst_23048 = (state_23084[(8)]);
var inst_23072 = cljs.core.vec.call(null,inst_23048);
var state_23084__$1 = state_23084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23084__$1,(15),out,inst_23072);
} else {
if((state_val_23085 === (2))){
var state_23084__$1 = state_23084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23084__$1,(4),ch);
} else {
if((state_val_23085 === (11))){
var inst_23064 = (state_23084[(2)]);
var inst_23065 = (new Array(n));
var inst_23048 = inst_23065;
var inst_23049 = (0);
var state_23084__$1 = (function (){var statearr_23096 = state_23084;
(statearr_23096[(10)] = inst_23064);

(statearr_23096[(7)] = inst_23049);

(statearr_23096[(8)] = inst_23048);

return statearr_23096;
})();
var statearr_23097_23127 = state_23084__$1;
(statearr_23097_23127[(2)] = null);

(statearr_23097_23127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (9))){
var inst_23048 = (state_23084[(8)]);
var inst_23062 = cljs.core.vec.call(null,inst_23048);
var state_23084__$1 = state_23084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23084__$1,(11),out,inst_23062);
} else {
if((state_val_23085 === (5))){
var inst_23057 = (state_23084[(11)]);
var inst_23049 = (state_23084[(7)]);
var inst_23048 = (state_23084[(8)]);
var inst_23052 = (state_23084[(9)]);
var inst_23056 = (inst_23048[inst_23049] = inst_23052);
var inst_23057__$1 = (inst_23049 + (1));
var inst_23058 = (inst_23057__$1 < n);
var state_23084__$1 = (function (){var statearr_23098 = state_23084;
(statearr_23098[(11)] = inst_23057__$1);

(statearr_23098[(12)] = inst_23056);

return statearr_23098;
})();
if(cljs.core.truth_(inst_23058)){
var statearr_23099_23128 = state_23084__$1;
(statearr_23099_23128[(1)] = (8));

} else {
var statearr_23100_23129 = state_23084__$1;
(statearr_23100_23129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (14))){
var inst_23077 = (state_23084[(2)]);
var inst_23078 = cljs.core.async.close_BANG_.call(null,out);
var state_23084__$1 = (function (){var statearr_23102 = state_23084;
(statearr_23102[(13)] = inst_23077);

return statearr_23102;
})();
var statearr_23103_23130 = state_23084__$1;
(statearr_23103_23130[(2)] = inst_23078);

(statearr_23103_23130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (10))){
var inst_23068 = (state_23084[(2)]);
var state_23084__$1 = state_23084;
var statearr_23104_23131 = state_23084__$1;
(statearr_23104_23131[(2)] = inst_23068);

(statearr_23104_23131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23085 === (8))){
var inst_23057 = (state_23084[(11)]);
var inst_23048 = (state_23084[(8)]);
var tmp23101 = inst_23048;
var inst_23048__$1 = tmp23101;
var inst_23049 = inst_23057;
var state_23084__$1 = (function (){var statearr_23105 = state_23084;
(statearr_23105[(7)] = inst_23049);

(statearr_23105[(8)] = inst_23048__$1);

return statearr_23105;
})();
var statearr_23106_23132 = state_23084__$1;
(statearr_23106_23132[(2)] = null);

(statearr_23106_23132[(1)] = (2));


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
});})(c__20458__auto___23118,out))
;
return ((function (switch__20346__auto__,c__20458__auto___23118,out){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_23110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23110[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_23110[(1)] = (1));

return statearr_23110;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_23084){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_23084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e23111){if((e23111 instanceof Object)){
var ex__20350__auto__ = e23111;
var statearr_23112_23133 = state_23084;
(statearr_23112_23133[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23134 = state_23084;
state_23084 = G__23134;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_23084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_23084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___23118,out))
})();
var state__20460__auto__ = (function (){var statearr_23113 = f__20459__auto__.call(null);
(statearr_23113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___23118);

return statearr_23113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___23118,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23135 = [];
var len__19349__auto___23209 = arguments.length;
var i__19350__auto___23210 = (0);
while(true){
if((i__19350__auto___23210 < len__19349__auto___23209)){
args23135.push((arguments[i__19350__auto___23210]));

var G__23211 = (i__19350__auto___23210 + (1));
i__19350__auto___23210 = G__23211;
continue;
} else {
}
break;
}

var G__23137 = args23135.length;
switch (G__23137) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23135.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20458__auto___23213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20458__auto___23213,out){
return (function (){
var f__20459__auto__ = (function (){var switch__20346__auto__ = ((function (c__20458__auto___23213,out){
return (function (state_23179){
var state_val_23180 = (state_23179[(1)]);
if((state_val_23180 === (7))){
var inst_23175 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23181_23214 = state_23179__$1;
(statearr_23181_23214[(2)] = inst_23175);

(statearr_23181_23214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (1))){
var inst_23138 = [];
var inst_23139 = inst_23138;
var inst_23140 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23179__$1 = (function (){var statearr_23182 = state_23179;
(statearr_23182[(7)] = inst_23139);

(statearr_23182[(8)] = inst_23140);

return statearr_23182;
})();
var statearr_23183_23215 = state_23179__$1;
(statearr_23183_23215[(2)] = null);

(statearr_23183_23215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (4))){
var inst_23143 = (state_23179[(9)]);
var inst_23143__$1 = (state_23179[(2)]);
var inst_23144 = (inst_23143__$1 == null);
var inst_23145 = cljs.core.not.call(null,inst_23144);
var state_23179__$1 = (function (){var statearr_23184 = state_23179;
(statearr_23184[(9)] = inst_23143__$1);

return statearr_23184;
})();
if(inst_23145){
var statearr_23185_23216 = state_23179__$1;
(statearr_23185_23216[(1)] = (5));

} else {
var statearr_23186_23217 = state_23179__$1;
(statearr_23186_23217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (15))){
var inst_23169 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23187_23218 = state_23179__$1;
(statearr_23187_23218[(2)] = inst_23169);

(statearr_23187_23218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (13))){
var state_23179__$1 = state_23179;
var statearr_23188_23219 = state_23179__$1;
(statearr_23188_23219[(2)] = null);

(statearr_23188_23219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (6))){
var inst_23139 = (state_23179[(7)]);
var inst_23164 = inst_23139.length;
var inst_23165 = (inst_23164 > (0));
var state_23179__$1 = state_23179;
if(cljs.core.truth_(inst_23165)){
var statearr_23189_23220 = state_23179__$1;
(statearr_23189_23220[(1)] = (12));

} else {
var statearr_23190_23221 = state_23179__$1;
(statearr_23190_23221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (3))){
var inst_23177 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23179__$1,inst_23177);
} else {
if((state_val_23180 === (12))){
var inst_23139 = (state_23179[(7)]);
var inst_23167 = cljs.core.vec.call(null,inst_23139);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23179__$1,(15),out,inst_23167);
} else {
if((state_val_23180 === (2))){
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23179__$1,(4),ch);
} else {
if((state_val_23180 === (11))){
var inst_23147 = (state_23179[(10)]);
var inst_23143 = (state_23179[(9)]);
var inst_23157 = (state_23179[(2)]);
var inst_23158 = [];
var inst_23159 = inst_23158.push(inst_23143);
var inst_23139 = inst_23158;
var inst_23140 = inst_23147;
var state_23179__$1 = (function (){var statearr_23191 = state_23179;
(statearr_23191[(11)] = inst_23159);

(statearr_23191[(7)] = inst_23139);

(statearr_23191[(12)] = inst_23157);

(statearr_23191[(8)] = inst_23140);

return statearr_23191;
})();
var statearr_23192_23222 = state_23179__$1;
(statearr_23192_23222[(2)] = null);

(statearr_23192_23222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (9))){
var inst_23139 = (state_23179[(7)]);
var inst_23155 = cljs.core.vec.call(null,inst_23139);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23179__$1,(11),out,inst_23155);
} else {
if((state_val_23180 === (5))){
var inst_23140 = (state_23179[(8)]);
var inst_23147 = (state_23179[(10)]);
var inst_23143 = (state_23179[(9)]);
var inst_23147__$1 = f.call(null,inst_23143);
var inst_23148 = cljs.core._EQ_.call(null,inst_23147__$1,inst_23140);
var inst_23149 = cljs.core.keyword_identical_QMARK_.call(null,inst_23140,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23150 = (inst_23148) || (inst_23149);
var state_23179__$1 = (function (){var statearr_23193 = state_23179;
(statearr_23193[(10)] = inst_23147__$1);

return statearr_23193;
})();
if(cljs.core.truth_(inst_23150)){
var statearr_23194_23223 = state_23179__$1;
(statearr_23194_23223[(1)] = (8));

} else {
var statearr_23195_23224 = state_23179__$1;
(statearr_23195_23224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (14))){
var inst_23172 = (state_23179[(2)]);
var inst_23173 = cljs.core.async.close_BANG_.call(null,out);
var state_23179__$1 = (function (){var statearr_23197 = state_23179;
(statearr_23197[(13)] = inst_23172);

return statearr_23197;
})();
var statearr_23198_23225 = state_23179__$1;
(statearr_23198_23225[(2)] = inst_23173);

(statearr_23198_23225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (10))){
var inst_23162 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23199_23226 = state_23179__$1;
(statearr_23199_23226[(2)] = inst_23162);

(statearr_23199_23226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (8))){
var inst_23139 = (state_23179[(7)]);
var inst_23147 = (state_23179[(10)]);
var inst_23143 = (state_23179[(9)]);
var inst_23152 = inst_23139.push(inst_23143);
var tmp23196 = inst_23139;
var inst_23139__$1 = tmp23196;
var inst_23140 = inst_23147;
var state_23179__$1 = (function (){var statearr_23200 = state_23179;
(statearr_23200[(7)] = inst_23139__$1);

(statearr_23200[(14)] = inst_23152);

(statearr_23200[(8)] = inst_23140);

return statearr_23200;
})();
var statearr_23201_23227 = state_23179__$1;
(statearr_23201_23227[(2)] = null);

(statearr_23201_23227[(1)] = (2));


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
});})(c__20458__auto___23213,out))
;
return ((function (switch__20346__auto__,c__20458__auto___23213,out){
return (function() {
var cljs$core$async$state_machine__20347__auto__ = null;
var cljs$core$async$state_machine__20347__auto____0 = (function (){
var statearr_23205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23205[(0)] = cljs$core$async$state_machine__20347__auto__);

(statearr_23205[(1)] = (1));

return statearr_23205;
});
var cljs$core$async$state_machine__20347__auto____1 = (function (state_23179){
while(true){
var ret_value__20348__auto__ = (function (){try{while(true){
var result__20349__auto__ = switch__20346__auto__.call(null,state_23179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20349__auto__;
}
break;
}
}catch (e23206){if((e23206 instanceof Object)){
var ex__20350__auto__ = e23206;
var statearr_23207_23228 = state_23179;
(statearr_23207_23228[(5)] = ex__20350__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23229 = state_23179;
state_23179 = G__23229;
continue;
} else {
return ret_value__20348__auto__;
}
break;
}
});
cljs$core$async$state_machine__20347__auto__ = function(state_23179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20347__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20347__auto____1.call(this,state_23179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20347__auto____0;
cljs$core$async$state_machine__20347__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20347__auto____1;
return cljs$core$async$state_machine__20347__auto__;
})()
;})(switch__20346__auto__,c__20458__auto___23213,out))
})();
var state__20460__auto__ = (function (){var statearr_23208 = f__20459__auto__.call(null);
(statearr_23208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20458__auto___23213);

return statearr_23208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20460__auto__);
});})(c__20458__auto___23213,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1546505759972