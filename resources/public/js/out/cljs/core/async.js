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
var args39393 = [];
var len__38239__auto___39399 = arguments.length;
var i__38240__auto___39400 = (0);
while(true){
if((i__38240__auto___39400 < len__38239__auto___39399)){
args39393.push((arguments[i__38240__auto___39400]));

var G__39401 = (i__38240__auto___39400 + (1));
i__38240__auto___39400 = G__39401;
continue;
} else {
}
break;
}

var G__39395 = args39393.length;
switch (G__39395) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39393.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39396 = (function (f,blockable,meta39397){
this.f = f;
this.blockable = blockable;
this.meta39397 = meta39397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39398,meta39397__$1){
var self__ = this;
var _39398__$1 = this;
return (new cljs.core.async.t_cljs$core$async39396(self__.f,self__.blockable,meta39397__$1));
});

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39398){
var self__ = this;
var _39398__$1 = this;
return self__.meta39397;
});

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39397","meta39397",1782713907,null)], null);
});

cljs.core.async.t_cljs$core$async39396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39396";

cljs.core.async.t_cljs$core$async39396.cljs$lang$ctorPrWriter = (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async39396");
});

cljs.core.async.__GT_t_cljs$core$async39396 = (function cljs$core$async$__GT_t_cljs$core$async39396(f__$1,blockable__$1,meta39397){
return (new cljs.core.async.t_cljs$core$async39396(f__$1,blockable__$1,meta39397));
});

}

return (new cljs.core.async.t_cljs$core$async39396(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args39405 = [];
var len__38239__auto___39408 = arguments.length;
var i__38240__auto___39409 = (0);
while(true){
if((i__38240__auto___39409 < len__38239__auto___39408)){
args39405.push((arguments[i__38240__auto___39409]));

var G__39410 = (i__38240__auto___39409 + (1));
i__38240__auto___39409 = G__39410;
continue;
} else {
}
break;
}

var G__39407 = args39405.length;
switch (G__39407) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39405.length)].join('')));

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
var args39412 = [];
var len__38239__auto___39415 = arguments.length;
var i__38240__auto___39416 = (0);
while(true){
if((i__38240__auto___39416 < len__38239__auto___39415)){
args39412.push((arguments[i__38240__auto___39416]));

var G__39417 = (i__38240__auto___39416 + (1));
i__38240__auto___39416 = G__39417;
continue;
} else {
}
break;
}

var G__39414 = args39412.length;
switch (G__39414) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39412.length)].join('')));

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
var args39419 = [];
var len__38239__auto___39422 = arguments.length;
var i__38240__auto___39423 = (0);
while(true){
if((i__38240__auto___39423 < len__38239__auto___39422)){
args39419.push((arguments[i__38240__auto___39423]));

var G__39424 = (i__38240__auto___39423 + (1));
i__38240__auto___39423 = G__39424;
continue;
} else {
}
break;
}

var G__39421 = args39419.length;
switch (G__39421) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39419.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39426 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39426);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39426,ret){
return (function (){
return fn1.call(null,val_39426);
});})(val_39426,ret))
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
var args39427 = [];
var len__38239__auto___39430 = arguments.length;
var i__38240__auto___39431 = (0);
while(true){
if((i__38240__auto___39431 < len__38239__auto___39430)){
args39427.push((arguments[i__38240__auto___39431]));

var G__39432 = (i__38240__auto___39431 + (1));
i__38240__auto___39431 = G__39432;
continue;
} else {
}
break;
}

var G__39429 = args39427.length;
switch (G__39429) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39427.length)].join('')));

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
var n__38084__auto___39434 = n;
var x_39435 = (0);
while(true){
if((x_39435 < n__38084__auto___39434)){
(a[x_39435] = (0));

var G__39436 = (x_39435 + (1));
x_39435 = G__39436;
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

var G__39437 = (i + (1));
i = G__39437;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39441 = (function (alt_flag,flag,meta39442){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta39442 = meta39442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39443,meta39442__$1){
var self__ = this;
var _39443__$1 = this;
return (new cljs.core.async.t_cljs$core$async39441(self__.alt_flag,self__.flag,meta39442__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39443){
var self__ = this;
var _39443__$1 = this;
return self__.meta39442;
});})(flag))
;

cljs.core.async.t_cljs$core$async39441.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39441.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39442","meta39442",-1850936372,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39441";

cljs.core.async.t_cljs$core$async39441.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async39441");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39441 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39441(alt_flag__$1,flag__$1,meta39442){
return (new cljs.core.async.t_cljs$core$async39441(alt_flag__$1,flag__$1,meta39442));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39441(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39447 = (function (alt_handler,flag,cb,meta39448){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta39448 = meta39448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39449,meta39448__$1){
var self__ = this;
var _39449__$1 = this;
return (new cljs.core.async.t_cljs$core$async39447(self__.alt_handler,self__.flag,self__.cb,meta39448__$1));
});

cljs.core.async.t_cljs$core$async39447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39449){
var self__ = this;
var _39449__$1 = this;
return self__.meta39448;
});

cljs.core.async.t_cljs$core$async39447.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39448","meta39448",-643171800,null)], null);
});

cljs.core.async.t_cljs$core$async39447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39447";

cljs.core.async.t_cljs$core$async39447.cljs$lang$ctorPrWriter = (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async39447");
});

cljs.core.async.__GT_t_cljs$core$async39447 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39447(alt_handler__$1,flag__$1,cb__$1,meta39448){
return (new cljs.core.async.t_cljs$core$async39447(alt_handler__$1,flag__$1,cb__$1,meta39448));
});

}

return (new cljs.core.async.t_cljs$core$async39447(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39450_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39450_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39451_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39451_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__37181__auto__ = wport;
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39452 = (i + (1));
i = G__39452;
continue;
}
} else {
return null;
}
break;
}
})();
var or__37181__auto__ = ret;
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__37169__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__37169__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__37169__auto__;
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
var args__38246__auto__ = [];
var len__38239__auto___39458 = arguments.length;
var i__38240__auto___39459 = (0);
while(true){
if((i__38240__auto___39459 < len__38239__auto___39458)){
args__38246__auto__.push((arguments[i__38240__auto___39459]));

var G__39460 = (i__38240__auto___39459 + (1));
i__38240__auto___39459 = G__39460;
continue;
} else {
}
break;
}

var argseq__38247__auto__ = ((((1) < args__38246__auto__.length))?(new cljs.core.IndexedSeq(args__38246__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__38247__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39455){
var map__39456 = p__39455;
var map__39456__$1 = ((((!((map__39456 == null)))?((((map__39456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39456):map__39456);
var opts = map__39456__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39453){
var G__39454 = cljs.core.first.call(null,seq39453);
var seq39453__$1 = cljs.core.next.call(null,seq39453);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39454,seq39453__$1);
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
var args39461 = [];
var len__38239__auto___39511 = arguments.length;
var i__38240__auto___39512 = (0);
while(true){
if((i__38240__auto___39512 < len__38239__auto___39511)){
args39461.push((arguments[i__38240__auto___39512]));

var G__39513 = (i__38240__auto___39512 + (1));
i__38240__auto___39512 = G__39513;
continue;
} else {
}
break;
}

var G__39463 = args39461.length;
switch (G__39463) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39461.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39348__auto___39515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___39515){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___39515){
return (function (state_39487){
var state_val_39488 = (state_39487[(1)]);
if((state_val_39488 === (7))){
var inst_39483 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
var statearr_39489_39516 = state_39487__$1;
(statearr_39489_39516[(2)] = inst_39483);

(statearr_39489_39516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (1))){
var state_39487__$1 = state_39487;
var statearr_39490_39517 = state_39487__$1;
(statearr_39490_39517[(2)] = null);

(statearr_39490_39517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (4))){
var inst_39466 = (state_39487[(7)]);
var inst_39466__$1 = (state_39487[(2)]);
var inst_39467 = (inst_39466__$1 == null);
var state_39487__$1 = (function (){var statearr_39491 = state_39487;
(statearr_39491[(7)] = inst_39466__$1);

return statearr_39491;
})();
if(cljs.core.truth_(inst_39467)){
var statearr_39492_39518 = state_39487__$1;
(statearr_39492_39518[(1)] = (5));

} else {
var statearr_39493_39519 = state_39487__$1;
(statearr_39493_39519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (13))){
var state_39487__$1 = state_39487;
var statearr_39494_39520 = state_39487__$1;
(statearr_39494_39520[(2)] = null);

(statearr_39494_39520[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (6))){
var inst_39466 = (state_39487[(7)]);
var state_39487__$1 = state_39487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39487__$1,(11),to,inst_39466);
} else {
if((state_val_39488 === (3))){
var inst_39485 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39487__$1,inst_39485);
} else {
if((state_val_39488 === (12))){
var state_39487__$1 = state_39487;
var statearr_39495_39521 = state_39487__$1;
(statearr_39495_39521[(2)] = null);

(statearr_39495_39521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (2))){
var state_39487__$1 = state_39487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39487__$1,(4),from);
} else {
if((state_val_39488 === (11))){
var inst_39476 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
if(cljs.core.truth_(inst_39476)){
var statearr_39496_39522 = state_39487__$1;
(statearr_39496_39522[(1)] = (12));

} else {
var statearr_39497_39523 = state_39487__$1;
(statearr_39497_39523[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (9))){
var state_39487__$1 = state_39487;
var statearr_39498_39524 = state_39487__$1;
(statearr_39498_39524[(2)] = null);

(statearr_39498_39524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (5))){
var state_39487__$1 = state_39487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39499_39525 = state_39487__$1;
(statearr_39499_39525[(1)] = (8));

} else {
var statearr_39500_39526 = state_39487__$1;
(statearr_39500_39526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (14))){
var inst_39481 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
var statearr_39501_39527 = state_39487__$1;
(statearr_39501_39527[(2)] = inst_39481);

(statearr_39501_39527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (10))){
var inst_39473 = (state_39487[(2)]);
var state_39487__$1 = state_39487;
var statearr_39502_39528 = state_39487__$1;
(statearr_39502_39528[(2)] = inst_39473);

(statearr_39502_39528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39488 === (8))){
var inst_39470 = cljs.core.async.close_BANG_.call(null,to);
var state_39487__$1 = state_39487;
var statearr_39503_39529 = state_39487__$1;
(statearr_39503_39529[(2)] = inst_39470);

(statearr_39503_39529[(1)] = (10));


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
});})(c__39348__auto___39515))
;
return ((function (switch__39236__auto__,c__39348__auto___39515){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_39507 = [null,null,null,null,null,null,null,null];
(statearr_39507[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_39507[(1)] = (1));

return statearr_39507;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_39487){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_39487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e39508){if((e39508 instanceof Object)){
var ex__39240__auto__ = e39508;
var statearr_39509_39530 = state_39487;
(statearr_39509_39530[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39531 = state_39487;
state_39487 = G__39531;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_39487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_39487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___39515))
})();
var state__39350__auto__ = (function (){var statearr_39510 = f__39349__auto__.call(null);
(statearr_39510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___39515);

return statearr_39510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___39515))
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
return (function (p__39715){
var vec__39716 = p__39715;
var v = cljs.core.nth.call(null,vec__39716,(0),null);
var p = cljs.core.nth.call(null,vec__39716,(1),null);
var job = vec__39716;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__39348__auto___39898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___39898,res,vec__39716,v,p,job,jobs,results){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___39898,res,vec__39716,v,p,job,jobs,results){
return (function (state_39721){
var state_val_39722 = (state_39721[(1)]);
if((state_val_39722 === (1))){
var state_39721__$1 = state_39721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39721__$1,(2),res,v);
} else {
if((state_val_39722 === (2))){
var inst_39718 = (state_39721[(2)]);
var inst_39719 = cljs.core.async.close_BANG_.call(null,res);
var state_39721__$1 = (function (){var statearr_39723 = state_39721;
(statearr_39723[(7)] = inst_39718);

return statearr_39723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39721__$1,inst_39719);
} else {
return null;
}
}
});})(c__39348__auto___39898,res,vec__39716,v,p,job,jobs,results))
;
return ((function (switch__39236__auto__,c__39348__auto___39898,res,vec__39716,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0 = (function (){
var statearr_39727 = [null,null,null,null,null,null,null,null];
(statearr_39727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__);

(statearr_39727[(1)] = (1));

return statearr_39727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1 = (function (state_39721){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_39721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e39728){if((e39728 instanceof Object)){
var ex__39240__auto__ = e39728;
var statearr_39729_39899 = state_39721;
(statearr_39729_39899[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39900 = state_39721;
state_39721 = G__39900;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = function(state_39721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1.call(this,state_39721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___39898,res,vec__39716,v,p,job,jobs,results))
})();
var state__39350__auto__ = (function (){var statearr_39730 = f__39349__auto__.call(null);
(statearr_39730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___39898);

return statearr_39730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___39898,res,vec__39716,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39731){
var vec__39732 = p__39731;
var v = cljs.core.nth.call(null,vec__39732,(0),null);
var p = cljs.core.nth.call(null,vec__39732,(1),null);
var job = vec__39732;
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
var n__38084__auto___39901 = n;
var __39902 = (0);
while(true){
if((__39902 < n__38084__auto___39901)){
var G__39733_39903 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__39733_39903) {
case "compute":
var c__39348__auto___39905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39902,c__39348__auto___39905,G__39733_39903,n__38084__auto___39901,jobs,results,process,async){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (__39902,c__39348__auto___39905,G__39733_39903,n__38084__auto___39901,jobs,results,process,async){
return (function (state_39746){
var state_val_39747 = (state_39746[(1)]);
if((state_val_39747 === (1))){
var state_39746__$1 = state_39746;
var statearr_39748_39906 = state_39746__$1;
(statearr_39748_39906[(2)] = null);

(statearr_39748_39906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (2))){
var state_39746__$1 = state_39746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39746__$1,(4),jobs);
} else {
if((state_val_39747 === (3))){
var inst_39744 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39746__$1,inst_39744);
} else {
if((state_val_39747 === (4))){
var inst_39736 = (state_39746[(2)]);
var inst_39737 = process.call(null,inst_39736);
var state_39746__$1 = state_39746;
if(cljs.core.truth_(inst_39737)){
var statearr_39749_39907 = state_39746__$1;
(statearr_39749_39907[(1)] = (5));

} else {
var statearr_39750_39908 = state_39746__$1;
(statearr_39750_39908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (5))){
var state_39746__$1 = state_39746;
var statearr_39751_39909 = state_39746__$1;
(statearr_39751_39909[(2)] = null);

(statearr_39751_39909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (6))){
var state_39746__$1 = state_39746;
var statearr_39752_39910 = state_39746__$1;
(statearr_39752_39910[(2)] = null);

(statearr_39752_39910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (7))){
var inst_39742 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
var statearr_39753_39911 = state_39746__$1;
(statearr_39753_39911[(2)] = inst_39742);

(statearr_39753_39911[(1)] = (3));


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
});})(__39902,c__39348__auto___39905,G__39733_39903,n__38084__auto___39901,jobs,results,process,async))
;
return ((function (__39902,switch__39236__auto__,c__39348__auto___39905,G__39733_39903,n__38084__auto___39901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0 = (function (){
var statearr_39757 = [null,null,null,null,null,null,null];
(statearr_39757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__);

(statearr_39757[(1)] = (1));

return statearr_39757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1 = (function (state_39746){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_39746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e39758){if((e39758 instanceof Object)){
var ex__39240__auto__ = e39758;
var statearr_39759_39912 = state_39746;
(statearr_39759_39912[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39913 = state_39746;
state_39746 = G__39913;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = function(state_39746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1.call(this,state_39746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__;
})()
;})(__39902,switch__39236__auto__,c__39348__auto___39905,G__39733_39903,n__38084__auto___39901,jobs,results,process,async))
})();
var state__39350__auto__ = (function (){var statearr_39760 = f__39349__auto__.call(null);
(statearr_39760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___39905);

return statearr_39760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(__39902,c__39348__auto___39905,G__39733_39903,n__38084__auto___39901,jobs,results,process,async))
);


break;
case "async":
var c__39348__auto___39914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39902,c__39348__auto___39914,G__39733_39903,n__38084__auto___39901,jobs,results,process,async){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (__39902,c__39348__auto___39914,G__39733_39903,n__38084__auto___39901,jobs,results,process,async){
return (function (state_39773){
var state_val_39774 = (state_39773[(1)]);
if((state_val_39774 === (1))){
var state_39773__$1 = state_39773;
var statearr_39775_39915 = state_39773__$1;
(statearr_39775_39915[(2)] = null);

(statearr_39775_39915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39774 === (2))){
var state_39773__$1 = state_39773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39773__$1,(4),jobs);
} else {
if((state_val_39774 === (3))){
var inst_39771 = (state_39773[(2)]);
var state_39773__$1 = state_39773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39773__$1,inst_39771);
} else {
if((state_val_39774 === (4))){
var inst_39763 = (state_39773[(2)]);
var inst_39764 = async.call(null,inst_39763);
var state_39773__$1 = state_39773;
if(cljs.core.truth_(inst_39764)){
var statearr_39776_39916 = state_39773__$1;
(statearr_39776_39916[(1)] = (5));

} else {
var statearr_39777_39917 = state_39773__$1;
(statearr_39777_39917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39774 === (5))){
var state_39773__$1 = state_39773;
var statearr_39778_39918 = state_39773__$1;
(statearr_39778_39918[(2)] = null);

(statearr_39778_39918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39774 === (6))){
var state_39773__$1 = state_39773;
var statearr_39779_39919 = state_39773__$1;
(statearr_39779_39919[(2)] = null);

(statearr_39779_39919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39774 === (7))){
var inst_39769 = (state_39773[(2)]);
var state_39773__$1 = state_39773;
var statearr_39780_39920 = state_39773__$1;
(statearr_39780_39920[(2)] = inst_39769);

(statearr_39780_39920[(1)] = (3));


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
});})(__39902,c__39348__auto___39914,G__39733_39903,n__38084__auto___39901,jobs,results,process,async))
;
return ((function (__39902,switch__39236__auto__,c__39348__auto___39914,G__39733_39903,n__38084__auto___39901,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0 = (function (){
var statearr_39784 = [null,null,null,null,null,null,null];
(statearr_39784[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__);

(statearr_39784[(1)] = (1));

return statearr_39784;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1 = (function (state_39773){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_39773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e39785){if((e39785 instanceof Object)){
var ex__39240__auto__ = e39785;
var statearr_39786_39921 = state_39773;
(statearr_39786_39921[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39922 = state_39773;
state_39773 = G__39922;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = function(state_39773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1.call(this,state_39773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__;
})()
;})(__39902,switch__39236__auto__,c__39348__auto___39914,G__39733_39903,n__38084__auto___39901,jobs,results,process,async))
})();
var state__39350__auto__ = (function (){var statearr_39787 = f__39349__auto__.call(null);
(statearr_39787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___39914);

return statearr_39787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(__39902,c__39348__auto___39914,G__39733_39903,n__38084__auto___39901,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39923 = (__39902 + (1));
__39902 = G__39923;
continue;
} else {
}
break;
}

var c__39348__auto___39924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___39924,jobs,results,process,async){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___39924,jobs,results,process,async){
return (function (state_39809){
var state_val_39810 = (state_39809[(1)]);
if((state_val_39810 === (1))){
var state_39809__$1 = state_39809;
var statearr_39811_39925 = state_39809__$1;
(statearr_39811_39925[(2)] = null);

(statearr_39811_39925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39810 === (2))){
var state_39809__$1 = state_39809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39809__$1,(4),from);
} else {
if((state_val_39810 === (3))){
var inst_39807 = (state_39809[(2)]);
var state_39809__$1 = state_39809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39809__$1,inst_39807);
} else {
if((state_val_39810 === (4))){
var inst_39790 = (state_39809[(7)]);
var inst_39790__$1 = (state_39809[(2)]);
var inst_39791 = (inst_39790__$1 == null);
var state_39809__$1 = (function (){var statearr_39812 = state_39809;
(statearr_39812[(7)] = inst_39790__$1);

return statearr_39812;
})();
if(cljs.core.truth_(inst_39791)){
var statearr_39813_39926 = state_39809__$1;
(statearr_39813_39926[(1)] = (5));

} else {
var statearr_39814_39927 = state_39809__$1;
(statearr_39814_39927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39810 === (5))){
var inst_39793 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39809__$1 = state_39809;
var statearr_39815_39928 = state_39809__$1;
(statearr_39815_39928[(2)] = inst_39793);

(statearr_39815_39928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39810 === (6))){
var inst_39790 = (state_39809[(7)]);
var inst_39795 = (state_39809[(8)]);
var inst_39795__$1 = cljs.core.async.chan.call(null,(1));
var inst_39796 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39797 = [inst_39790,inst_39795__$1];
var inst_39798 = (new cljs.core.PersistentVector(null,2,(5),inst_39796,inst_39797,null));
var state_39809__$1 = (function (){var statearr_39816 = state_39809;
(statearr_39816[(8)] = inst_39795__$1);

return statearr_39816;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39809__$1,(8),jobs,inst_39798);
} else {
if((state_val_39810 === (7))){
var inst_39805 = (state_39809[(2)]);
var state_39809__$1 = state_39809;
var statearr_39817_39929 = state_39809__$1;
(statearr_39817_39929[(2)] = inst_39805);

(statearr_39817_39929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39810 === (8))){
var inst_39795 = (state_39809[(8)]);
var inst_39800 = (state_39809[(2)]);
var state_39809__$1 = (function (){var statearr_39818 = state_39809;
(statearr_39818[(9)] = inst_39800);

return statearr_39818;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39809__$1,(9),results,inst_39795);
} else {
if((state_val_39810 === (9))){
var inst_39802 = (state_39809[(2)]);
var state_39809__$1 = (function (){var statearr_39819 = state_39809;
(statearr_39819[(10)] = inst_39802);

return statearr_39819;
})();
var statearr_39820_39930 = state_39809__$1;
(statearr_39820_39930[(2)] = null);

(statearr_39820_39930[(1)] = (2));


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
});})(c__39348__auto___39924,jobs,results,process,async))
;
return ((function (switch__39236__auto__,c__39348__auto___39924,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0 = (function (){
var statearr_39824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__);

(statearr_39824[(1)] = (1));

return statearr_39824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1 = (function (state_39809){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_39809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e39825){if((e39825 instanceof Object)){
var ex__39240__auto__ = e39825;
var statearr_39826_39931 = state_39809;
(statearr_39826_39931[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39932 = state_39809;
state_39809 = G__39932;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = function(state_39809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1.call(this,state_39809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___39924,jobs,results,process,async))
})();
var state__39350__auto__ = (function (){var statearr_39827 = f__39349__auto__.call(null);
(statearr_39827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___39924);

return statearr_39827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___39924,jobs,results,process,async))
);


var c__39348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto__,jobs,results,process,async){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto__,jobs,results,process,async){
return (function (state_39865){
var state_val_39866 = (state_39865[(1)]);
if((state_val_39866 === (7))){
var inst_39861 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39867_39933 = state_39865__$1;
(statearr_39867_39933[(2)] = inst_39861);

(statearr_39867_39933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (20))){
var state_39865__$1 = state_39865;
var statearr_39868_39934 = state_39865__$1;
(statearr_39868_39934[(2)] = null);

(statearr_39868_39934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (1))){
var state_39865__$1 = state_39865;
var statearr_39869_39935 = state_39865__$1;
(statearr_39869_39935[(2)] = null);

(statearr_39869_39935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (4))){
var inst_39830 = (state_39865[(7)]);
var inst_39830__$1 = (state_39865[(2)]);
var inst_39831 = (inst_39830__$1 == null);
var state_39865__$1 = (function (){var statearr_39870 = state_39865;
(statearr_39870[(7)] = inst_39830__$1);

return statearr_39870;
})();
if(cljs.core.truth_(inst_39831)){
var statearr_39871_39936 = state_39865__$1;
(statearr_39871_39936[(1)] = (5));

} else {
var statearr_39872_39937 = state_39865__$1;
(statearr_39872_39937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (15))){
var inst_39843 = (state_39865[(8)]);
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39865__$1,(18),to,inst_39843);
} else {
if((state_val_39866 === (21))){
var inst_39856 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39873_39938 = state_39865__$1;
(statearr_39873_39938[(2)] = inst_39856);

(statearr_39873_39938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (13))){
var inst_39858 = (state_39865[(2)]);
var state_39865__$1 = (function (){var statearr_39874 = state_39865;
(statearr_39874[(9)] = inst_39858);

return statearr_39874;
})();
var statearr_39875_39939 = state_39865__$1;
(statearr_39875_39939[(2)] = null);

(statearr_39875_39939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (6))){
var inst_39830 = (state_39865[(7)]);
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39865__$1,(11),inst_39830);
} else {
if((state_val_39866 === (17))){
var inst_39851 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
if(cljs.core.truth_(inst_39851)){
var statearr_39876_39940 = state_39865__$1;
(statearr_39876_39940[(1)] = (19));

} else {
var statearr_39877_39941 = state_39865__$1;
(statearr_39877_39941[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (3))){
var inst_39863 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39865__$1,inst_39863);
} else {
if((state_val_39866 === (12))){
var inst_39840 = (state_39865[(10)]);
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39865__$1,(14),inst_39840);
} else {
if((state_val_39866 === (2))){
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39865__$1,(4),results);
} else {
if((state_val_39866 === (19))){
var state_39865__$1 = state_39865;
var statearr_39878_39942 = state_39865__$1;
(statearr_39878_39942[(2)] = null);

(statearr_39878_39942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (11))){
var inst_39840 = (state_39865[(2)]);
var state_39865__$1 = (function (){var statearr_39879 = state_39865;
(statearr_39879[(10)] = inst_39840);

return statearr_39879;
})();
var statearr_39880_39943 = state_39865__$1;
(statearr_39880_39943[(2)] = null);

(statearr_39880_39943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (9))){
var state_39865__$1 = state_39865;
var statearr_39881_39944 = state_39865__$1;
(statearr_39881_39944[(2)] = null);

(statearr_39881_39944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (5))){
var state_39865__$1 = state_39865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39882_39945 = state_39865__$1;
(statearr_39882_39945[(1)] = (8));

} else {
var statearr_39883_39946 = state_39865__$1;
(statearr_39883_39946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (14))){
var inst_39845 = (state_39865[(11)]);
var inst_39843 = (state_39865[(8)]);
var inst_39843__$1 = (state_39865[(2)]);
var inst_39844 = (inst_39843__$1 == null);
var inst_39845__$1 = cljs.core.not.call(null,inst_39844);
var state_39865__$1 = (function (){var statearr_39884 = state_39865;
(statearr_39884[(11)] = inst_39845__$1);

(statearr_39884[(8)] = inst_39843__$1);

return statearr_39884;
})();
if(inst_39845__$1){
var statearr_39885_39947 = state_39865__$1;
(statearr_39885_39947[(1)] = (15));

} else {
var statearr_39886_39948 = state_39865__$1;
(statearr_39886_39948[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (16))){
var inst_39845 = (state_39865[(11)]);
var state_39865__$1 = state_39865;
var statearr_39887_39949 = state_39865__$1;
(statearr_39887_39949[(2)] = inst_39845);

(statearr_39887_39949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (10))){
var inst_39837 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39888_39950 = state_39865__$1;
(statearr_39888_39950[(2)] = inst_39837);

(statearr_39888_39950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (18))){
var inst_39848 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39889_39951 = state_39865__$1;
(statearr_39889_39951[(2)] = inst_39848);

(statearr_39889_39951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (8))){
var inst_39834 = cljs.core.async.close_BANG_.call(null,to);
var state_39865__$1 = state_39865;
var statearr_39890_39952 = state_39865__$1;
(statearr_39890_39952[(2)] = inst_39834);

(statearr_39890_39952[(1)] = (10));


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
});})(c__39348__auto__,jobs,results,process,async))
;
return ((function (switch__39236__auto__,c__39348__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0 = (function (){
var statearr_39894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39894[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__);

(statearr_39894[(1)] = (1));

return statearr_39894;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1 = (function (state_39865){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_39865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e39895){if((e39895 instanceof Object)){
var ex__39240__auto__ = e39895;
var statearr_39896_39953 = state_39865;
(statearr_39896_39953[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39954 = state_39865;
state_39865 = G__39954;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__ = function(state_39865){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1.call(this,state_39865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39237__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto__,jobs,results,process,async))
})();
var state__39350__auto__ = (function (){var statearr_39897 = f__39349__auto__.call(null);
(statearr_39897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto__);

return statearr_39897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto__,jobs,results,process,async))
);

return c__39348__auto__;
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
var args39955 = [];
var len__38239__auto___39958 = arguments.length;
var i__38240__auto___39959 = (0);
while(true){
if((i__38240__auto___39959 < len__38239__auto___39958)){
args39955.push((arguments[i__38240__auto___39959]));

var G__39960 = (i__38240__auto___39959 + (1));
i__38240__auto___39959 = G__39960;
continue;
} else {
}
break;
}

var G__39957 = args39955.length;
switch (G__39957) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39955.length)].join('')));

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
var args39962 = [];
var len__38239__auto___39965 = arguments.length;
var i__38240__auto___39966 = (0);
while(true){
if((i__38240__auto___39966 < len__38239__auto___39965)){
args39962.push((arguments[i__38240__auto___39966]));

var G__39967 = (i__38240__auto___39966 + (1));
i__38240__auto___39966 = G__39967;
continue;
} else {
}
break;
}

var G__39964 = args39962.length;
switch (G__39964) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39962.length)].join('')));

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
var args39969 = [];
var len__38239__auto___40022 = arguments.length;
var i__38240__auto___40023 = (0);
while(true){
if((i__38240__auto___40023 < len__38239__auto___40022)){
args39969.push((arguments[i__38240__auto___40023]));

var G__40024 = (i__38240__auto___40023 + (1));
i__38240__auto___40023 = G__40024;
continue;
} else {
}
break;
}

var G__39971 = args39969.length;
switch (G__39971) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39969.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__39348__auto___40026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___40026,tc,fc){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___40026,tc,fc){
return (function (state_39997){
var state_val_39998 = (state_39997[(1)]);
if((state_val_39998 === (7))){
var inst_39993 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
var statearr_39999_40027 = state_39997__$1;
(statearr_39999_40027[(2)] = inst_39993);

(statearr_39999_40027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (1))){
var state_39997__$1 = state_39997;
var statearr_40000_40028 = state_39997__$1;
(statearr_40000_40028[(2)] = null);

(statearr_40000_40028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (4))){
var inst_39974 = (state_39997[(7)]);
var inst_39974__$1 = (state_39997[(2)]);
var inst_39975 = (inst_39974__$1 == null);
var state_39997__$1 = (function (){var statearr_40001 = state_39997;
(statearr_40001[(7)] = inst_39974__$1);

return statearr_40001;
})();
if(cljs.core.truth_(inst_39975)){
var statearr_40002_40029 = state_39997__$1;
(statearr_40002_40029[(1)] = (5));

} else {
var statearr_40003_40030 = state_39997__$1;
(statearr_40003_40030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (13))){
var state_39997__$1 = state_39997;
var statearr_40004_40031 = state_39997__$1;
(statearr_40004_40031[(2)] = null);

(statearr_40004_40031[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (6))){
var inst_39974 = (state_39997[(7)]);
var inst_39980 = p.call(null,inst_39974);
var state_39997__$1 = state_39997;
if(cljs.core.truth_(inst_39980)){
var statearr_40005_40032 = state_39997__$1;
(statearr_40005_40032[(1)] = (9));

} else {
var statearr_40006_40033 = state_39997__$1;
(statearr_40006_40033[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (3))){
var inst_39995 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39997__$1,inst_39995);
} else {
if((state_val_39998 === (12))){
var state_39997__$1 = state_39997;
var statearr_40007_40034 = state_39997__$1;
(statearr_40007_40034[(2)] = null);

(statearr_40007_40034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (2))){
var state_39997__$1 = state_39997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39997__$1,(4),ch);
} else {
if((state_val_39998 === (11))){
var inst_39974 = (state_39997[(7)]);
var inst_39984 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39997__$1,(8),inst_39984,inst_39974);
} else {
if((state_val_39998 === (9))){
var state_39997__$1 = state_39997;
var statearr_40008_40035 = state_39997__$1;
(statearr_40008_40035[(2)] = tc);

(statearr_40008_40035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (5))){
var inst_39977 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39978 = cljs.core.async.close_BANG_.call(null,fc);
var state_39997__$1 = (function (){var statearr_40009 = state_39997;
(statearr_40009[(8)] = inst_39977);

return statearr_40009;
})();
var statearr_40010_40036 = state_39997__$1;
(statearr_40010_40036[(2)] = inst_39978);

(statearr_40010_40036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (14))){
var inst_39991 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
var statearr_40011_40037 = state_39997__$1;
(statearr_40011_40037[(2)] = inst_39991);

(statearr_40011_40037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (10))){
var state_39997__$1 = state_39997;
var statearr_40012_40038 = state_39997__$1;
(statearr_40012_40038[(2)] = fc);

(statearr_40012_40038[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39998 === (8))){
var inst_39986 = (state_39997[(2)]);
var state_39997__$1 = state_39997;
if(cljs.core.truth_(inst_39986)){
var statearr_40013_40039 = state_39997__$1;
(statearr_40013_40039[(1)] = (12));

} else {
var statearr_40014_40040 = state_39997__$1;
(statearr_40014_40040[(1)] = (13));

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
});})(c__39348__auto___40026,tc,fc))
;
return ((function (switch__39236__auto__,c__39348__auto___40026,tc,fc){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_40018 = [null,null,null,null,null,null,null,null,null];
(statearr_40018[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_40018[(1)] = (1));

return statearr_40018;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_39997){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_39997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e40019){if((e40019 instanceof Object)){
var ex__39240__auto__ = e40019;
var statearr_40020_40041 = state_39997;
(statearr_40020_40041[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40042 = state_39997;
state_39997 = G__40042;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_39997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_39997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___40026,tc,fc))
})();
var state__39350__auto__ = (function (){var statearr_40021 = f__39349__auto__.call(null);
(statearr_40021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___40026);

return statearr_40021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___40026,tc,fc))
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
var c__39348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto__){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto__){
return (function (state_40106){
var state_val_40107 = (state_40106[(1)]);
if((state_val_40107 === (7))){
var inst_40102 = (state_40106[(2)]);
var state_40106__$1 = state_40106;
var statearr_40108_40129 = state_40106__$1;
(statearr_40108_40129[(2)] = inst_40102);

(statearr_40108_40129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (1))){
var inst_40086 = init;
var state_40106__$1 = (function (){var statearr_40109 = state_40106;
(statearr_40109[(7)] = inst_40086);

return statearr_40109;
})();
var statearr_40110_40130 = state_40106__$1;
(statearr_40110_40130[(2)] = null);

(statearr_40110_40130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (4))){
var inst_40089 = (state_40106[(8)]);
var inst_40089__$1 = (state_40106[(2)]);
var inst_40090 = (inst_40089__$1 == null);
var state_40106__$1 = (function (){var statearr_40111 = state_40106;
(statearr_40111[(8)] = inst_40089__$1);

return statearr_40111;
})();
if(cljs.core.truth_(inst_40090)){
var statearr_40112_40131 = state_40106__$1;
(statearr_40112_40131[(1)] = (5));

} else {
var statearr_40113_40132 = state_40106__$1;
(statearr_40113_40132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (6))){
var inst_40093 = (state_40106[(9)]);
var inst_40089 = (state_40106[(8)]);
var inst_40086 = (state_40106[(7)]);
var inst_40093__$1 = f.call(null,inst_40086,inst_40089);
var inst_40094 = cljs.core.reduced_QMARK_.call(null,inst_40093__$1);
var state_40106__$1 = (function (){var statearr_40114 = state_40106;
(statearr_40114[(9)] = inst_40093__$1);

return statearr_40114;
})();
if(inst_40094){
var statearr_40115_40133 = state_40106__$1;
(statearr_40115_40133[(1)] = (8));

} else {
var statearr_40116_40134 = state_40106__$1;
(statearr_40116_40134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (3))){
var inst_40104 = (state_40106[(2)]);
var state_40106__$1 = state_40106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40106__$1,inst_40104);
} else {
if((state_val_40107 === (2))){
var state_40106__$1 = state_40106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40106__$1,(4),ch);
} else {
if((state_val_40107 === (9))){
var inst_40093 = (state_40106[(9)]);
var inst_40086 = inst_40093;
var state_40106__$1 = (function (){var statearr_40117 = state_40106;
(statearr_40117[(7)] = inst_40086);

return statearr_40117;
})();
var statearr_40118_40135 = state_40106__$1;
(statearr_40118_40135[(2)] = null);

(statearr_40118_40135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (5))){
var inst_40086 = (state_40106[(7)]);
var state_40106__$1 = state_40106;
var statearr_40119_40136 = state_40106__$1;
(statearr_40119_40136[(2)] = inst_40086);

(statearr_40119_40136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (10))){
var inst_40100 = (state_40106[(2)]);
var state_40106__$1 = state_40106;
var statearr_40120_40137 = state_40106__$1;
(statearr_40120_40137[(2)] = inst_40100);

(statearr_40120_40137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (8))){
var inst_40093 = (state_40106[(9)]);
var inst_40096 = cljs.core.deref.call(null,inst_40093);
var state_40106__$1 = state_40106;
var statearr_40121_40138 = state_40106__$1;
(statearr_40121_40138[(2)] = inst_40096);

(statearr_40121_40138[(1)] = (10));


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
});})(c__39348__auto__))
;
return ((function (switch__39236__auto__,c__39348__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__39237__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39237__auto____0 = (function (){
var statearr_40125 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40125[(0)] = cljs$core$async$reduce_$_state_machine__39237__auto__);

(statearr_40125[(1)] = (1));

return statearr_40125;
});
var cljs$core$async$reduce_$_state_machine__39237__auto____1 = (function (state_40106){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_40106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e40126){if((e40126 instanceof Object)){
var ex__39240__auto__ = e40126;
var statearr_40127_40139 = state_40106;
(statearr_40127_40139[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40140 = state_40106;
state_40106 = G__40140;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39237__auto__ = function(state_40106){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39237__auto____1.call(this,state_40106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39237__auto____0;
cljs$core$async$reduce_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39237__auto____1;
return cljs$core$async$reduce_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto__))
})();
var state__39350__auto__ = (function (){var statearr_40128 = f__39349__auto__.call(null);
(statearr_40128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto__);

return statearr_40128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto__))
);

return c__39348__auto__;
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
var args40141 = [];
var len__38239__auto___40193 = arguments.length;
var i__38240__auto___40194 = (0);
while(true){
if((i__38240__auto___40194 < len__38239__auto___40193)){
args40141.push((arguments[i__38240__auto___40194]));

var G__40195 = (i__38240__auto___40194 + (1));
i__38240__auto___40194 = G__40195;
continue;
} else {
}
break;
}

var G__40143 = args40141.length;
switch (G__40143) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40141.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto__){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto__){
return (function (state_40168){
var state_val_40169 = (state_40168[(1)]);
if((state_val_40169 === (7))){
var inst_40150 = (state_40168[(2)]);
var state_40168__$1 = state_40168;
var statearr_40170_40197 = state_40168__$1;
(statearr_40170_40197[(2)] = inst_40150);

(statearr_40170_40197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (1))){
var inst_40144 = cljs.core.seq.call(null,coll);
var inst_40145 = inst_40144;
var state_40168__$1 = (function (){var statearr_40171 = state_40168;
(statearr_40171[(7)] = inst_40145);

return statearr_40171;
})();
var statearr_40172_40198 = state_40168__$1;
(statearr_40172_40198[(2)] = null);

(statearr_40172_40198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (4))){
var inst_40145 = (state_40168[(7)]);
var inst_40148 = cljs.core.first.call(null,inst_40145);
var state_40168__$1 = state_40168;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40168__$1,(7),ch,inst_40148);
} else {
if((state_val_40169 === (13))){
var inst_40162 = (state_40168[(2)]);
var state_40168__$1 = state_40168;
var statearr_40173_40199 = state_40168__$1;
(statearr_40173_40199[(2)] = inst_40162);

(statearr_40173_40199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (6))){
var inst_40153 = (state_40168[(2)]);
var state_40168__$1 = state_40168;
if(cljs.core.truth_(inst_40153)){
var statearr_40174_40200 = state_40168__$1;
(statearr_40174_40200[(1)] = (8));

} else {
var statearr_40175_40201 = state_40168__$1;
(statearr_40175_40201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (3))){
var inst_40166 = (state_40168[(2)]);
var state_40168__$1 = state_40168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40168__$1,inst_40166);
} else {
if((state_val_40169 === (12))){
var state_40168__$1 = state_40168;
var statearr_40176_40202 = state_40168__$1;
(statearr_40176_40202[(2)] = null);

(statearr_40176_40202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (2))){
var inst_40145 = (state_40168[(7)]);
var state_40168__$1 = state_40168;
if(cljs.core.truth_(inst_40145)){
var statearr_40177_40203 = state_40168__$1;
(statearr_40177_40203[(1)] = (4));

} else {
var statearr_40178_40204 = state_40168__$1;
(statearr_40178_40204[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (11))){
var inst_40159 = cljs.core.async.close_BANG_.call(null,ch);
var state_40168__$1 = state_40168;
var statearr_40179_40205 = state_40168__$1;
(statearr_40179_40205[(2)] = inst_40159);

(statearr_40179_40205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (9))){
var state_40168__$1 = state_40168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40180_40206 = state_40168__$1;
(statearr_40180_40206[(1)] = (11));

} else {
var statearr_40181_40207 = state_40168__$1;
(statearr_40181_40207[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (5))){
var inst_40145 = (state_40168[(7)]);
var state_40168__$1 = state_40168;
var statearr_40182_40208 = state_40168__$1;
(statearr_40182_40208[(2)] = inst_40145);

(statearr_40182_40208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (10))){
var inst_40164 = (state_40168[(2)]);
var state_40168__$1 = state_40168;
var statearr_40183_40209 = state_40168__$1;
(statearr_40183_40209[(2)] = inst_40164);

(statearr_40183_40209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40169 === (8))){
var inst_40145 = (state_40168[(7)]);
var inst_40155 = cljs.core.next.call(null,inst_40145);
var inst_40145__$1 = inst_40155;
var state_40168__$1 = (function (){var statearr_40184 = state_40168;
(statearr_40184[(7)] = inst_40145__$1);

return statearr_40184;
})();
var statearr_40185_40210 = state_40168__$1;
(statearr_40185_40210[(2)] = null);

(statearr_40185_40210[(1)] = (2));


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
});})(c__39348__auto__))
;
return ((function (switch__39236__auto__,c__39348__auto__){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_40189 = [null,null,null,null,null,null,null,null];
(statearr_40189[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_40189[(1)] = (1));

return statearr_40189;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_40168){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_40168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e40190){if((e40190 instanceof Object)){
var ex__39240__auto__ = e40190;
var statearr_40191_40211 = state_40168;
(statearr_40191_40211[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40212 = state_40168;
state_40168 = G__40212;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_40168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_40168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto__))
})();
var state__39350__auto__ = (function (){var statearr_40192 = f__39349__auto__.call(null);
(statearr_40192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto__);

return statearr_40192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto__))
);

return c__39348__auto__;
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
var x__37836__auto__ = (((_ == null))?null:_);
var m__37837__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,_);
} else {
var m__37837__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,_);
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
var x__37836__auto__ = (((m == null))?null:m);
var m__37837__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__37837__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__37836__auto__ = (((m == null))?null:m);
var m__37837__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,m,ch);
} else {
var m__37837__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,m,ch);
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
var x__37836__auto__ = (((m == null))?null:m);
var m__37837__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,m);
} else {
var m__37837__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async40434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40434 = (function (mult,ch,cs,meta40435){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta40435 = meta40435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40436,meta40435__$1){
var self__ = this;
var _40436__$1 = this;
return (new cljs.core.async.t_cljs$core$async40434(self__.mult,self__.ch,self__.cs,meta40435__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40436){
var self__ = this;
var _40436__$1 = this;
return self__.meta40435;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40435","meta40435",445903017,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40434";

cljs.core.async.t_cljs$core$async40434.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async40434");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40434 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40434(mult__$1,ch__$1,cs__$1,meta40435){
return (new cljs.core.async.t_cljs$core$async40434(mult__$1,ch__$1,cs__$1,meta40435));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40434(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__39348__auto___40655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___40655,cs,m,dchan,dctr,done){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___40655,cs,m,dchan,dctr,done){
return (function (state_40567){
var state_val_40568 = (state_40567[(1)]);
if((state_val_40568 === (7))){
var inst_40563 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40569_40656 = state_40567__$1;
(statearr_40569_40656[(2)] = inst_40563);

(statearr_40569_40656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (20))){
var inst_40468 = (state_40567[(7)]);
var inst_40478 = cljs.core.first.call(null,inst_40468);
var inst_40479 = cljs.core.nth.call(null,inst_40478,(0),null);
var inst_40480 = cljs.core.nth.call(null,inst_40478,(1),null);
var state_40567__$1 = (function (){var statearr_40570 = state_40567;
(statearr_40570[(8)] = inst_40479);

return statearr_40570;
})();
if(cljs.core.truth_(inst_40480)){
var statearr_40571_40657 = state_40567__$1;
(statearr_40571_40657[(1)] = (22));

} else {
var statearr_40572_40658 = state_40567__$1;
(statearr_40572_40658[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (27))){
var inst_40439 = (state_40567[(9)]);
var inst_40515 = (state_40567[(10)]);
var inst_40510 = (state_40567[(11)]);
var inst_40508 = (state_40567[(12)]);
var inst_40515__$1 = cljs.core._nth.call(null,inst_40508,inst_40510);
var inst_40516 = cljs.core.async.put_BANG_.call(null,inst_40515__$1,inst_40439,done);
var state_40567__$1 = (function (){var statearr_40573 = state_40567;
(statearr_40573[(10)] = inst_40515__$1);

return statearr_40573;
})();
if(cljs.core.truth_(inst_40516)){
var statearr_40574_40659 = state_40567__$1;
(statearr_40574_40659[(1)] = (30));

} else {
var statearr_40575_40660 = state_40567__$1;
(statearr_40575_40660[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (1))){
var state_40567__$1 = state_40567;
var statearr_40576_40661 = state_40567__$1;
(statearr_40576_40661[(2)] = null);

(statearr_40576_40661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (24))){
var inst_40468 = (state_40567[(7)]);
var inst_40485 = (state_40567[(2)]);
var inst_40486 = cljs.core.next.call(null,inst_40468);
var inst_40448 = inst_40486;
var inst_40449 = null;
var inst_40450 = (0);
var inst_40451 = (0);
var state_40567__$1 = (function (){var statearr_40577 = state_40567;
(statearr_40577[(13)] = inst_40448);

(statearr_40577[(14)] = inst_40449);

(statearr_40577[(15)] = inst_40485);

(statearr_40577[(16)] = inst_40451);

(statearr_40577[(17)] = inst_40450);

return statearr_40577;
})();
var statearr_40578_40662 = state_40567__$1;
(statearr_40578_40662[(2)] = null);

(statearr_40578_40662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (39))){
var state_40567__$1 = state_40567;
var statearr_40582_40663 = state_40567__$1;
(statearr_40582_40663[(2)] = null);

(statearr_40582_40663[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (4))){
var inst_40439 = (state_40567[(9)]);
var inst_40439__$1 = (state_40567[(2)]);
var inst_40440 = (inst_40439__$1 == null);
var state_40567__$1 = (function (){var statearr_40583 = state_40567;
(statearr_40583[(9)] = inst_40439__$1);

return statearr_40583;
})();
if(cljs.core.truth_(inst_40440)){
var statearr_40584_40664 = state_40567__$1;
(statearr_40584_40664[(1)] = (5));

} else {
var statearr_40585_40665 = state_40567__$1;
(statearr_40585_40665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (15))){
var inst_40448 = (state_40567[(13)]);
var inst_40449 = (state_40567[(14)]);
var inst_40451 = (state_40567[(16)]);
var inst_40450 = (state_40567[(17)]);
var inst_40464 = (state_40567[(2)]);
var inst_40465 = (inst_40451 + (1));
var tmp40579 = inst_40448;
var tmp40580 = inst_40449;
var tmp40581 = inst_40450;
var inst_40448__$1 = tmp40579;
var inst_40449__$1 = tmp40580;
var inst_40450__$1 = tmp40581;
var inst_40451__$1 = inst_40465;
var state_40567__$1 = (function (){var statearr_40586 = state_40567;
(statearr_40586[(18)] = inst_40464);

(statearr_40586[(13)] = inst_40448__$1);

(statearr_40586[(14)] = inst_40449__$1);

(statearr_40586[(16)] = inst_40451__$1);

(statearr_40586[(17)] = inst_40450__$1);

return statearr_40586;
})();
var statearr_40587_40666 = state_40567__$1;
(statearr_40587_40666[(2)] = null);

(statearr_40587_40666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (21))){
var inst_40489 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40591_40667 = state_40567__$1;
(statearr_40591_40667[(2)] = inst_40489);

(statearr_40591_40667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (31))){
var inst_40515 = (state_40567[(10)]);
var inst_40519 = done.call(null,null);
var inst_40520 = cljs.core.async.untap_STAR_.call(null,m,inst_40515);
var state_40567__$1 = (function (){var statearr_40592 = state_40567;
(statearr_40592[(19)] = inst_40519);

return statearr_40592;
})();
var statearr_40593_40668 = state_40567__$1;
(statearr_40593_40668[(2)] = inst_40520);

(statearr_40593_40668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (32))){
var inst_40509 = (state_40567[(20)]);
var inst_40507 = (state_40567[(21)]);
var inst_40510 = (state_40567[(11)]);
var inst_40508 = (state_40567[(12)]);
var inst_40522 = (state_40567[(2)]);
var inst_40523 = (inst_40510 + (1));
var tmp40588 = inst_40509;
var tmp40589 = inst_40507;
var tmp40590 = inst_40508;
var inst_40507__$1 = tmp40589;
var inst_40508__$1 = tmp40590;
var inst_40509__$1 = tmp40588;
var inst_40510__$1 = inst_40523;
var state_40567__$1 = (function (){var statearr_40594 = state_40567;
(statearr_40594[(20)] = inst_40509__$1);

(statearr_40594[(21)] = inst_40507__$1);

(statearr_40594[(11)] = inst_40510__$1);

(statearr_40594[(12)] = inst_40508__$1);

(statearr_40594[(22)] = inst_40522);

return statearr_40594;
})();
var statearr_40595_40669 = state_40567__$1;
(statearr_40595_40669[(2)] = null);

(statearr_40595_40669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (40))){
var inst_40535 = (state_40567[(23)]);
var inst_40539 = done.call(null,null);
var inst_40540 = cljs.core.async.untap_STAR_.call(null,m,inst_40535);
var state_40567__$1 = (function (){var statearr_40596 = state_40567;
(statearr_40596[(24)] = inst_40539);

return statearr_40596;
})();
var statearr_40597_40670 = state_40567__$1;
(statearr_40597_40670[(2)] = inst_40540);

(statearr_40597_40670[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (33))){
var inst_40526 = (state_40567[(25)]);
var inst_40528 = cljs.core.chunked_seq_QMARK_.call(null,inst_40526);
var state_40567__$1 = state_40567;
if(inst_40528){
var statearr_40598_40671 = state_40567__$1;
(statearr_40598_40671[(1)] = (36));

} else {
var statearr_40599_40672 = state_40567__$1;
(statearr_40599_40672[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (13))){
var inst_40458 = (state_40567[(26)]);
var inst_40461 = cljs.core.async.close_BANG_.call(null,inst_40458);
var state_40567__$1 = state_40567;
var statearr_40600_40673 = state_40567__$1;
(statearr_40600_40673[(2)] = inst_40461);

(statearr_40600_40673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (22))){
var inst_40479 = (state_40567[(8)]);
var inst_40482 = cljs.core.async.close_BANG_.call(null,inst_40479);
var state_40567__$1 = state_40567;
var statearr_40601_40674 = state_40567__$1;
(statearr_40601_40674[(2)] = inst_40482);

(statearr_40601_40674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (36))){
var inst_40526 = (state_40567[(25)]);
var inst_40530 = cljs.core.chunk_first.call(null,inst_40526);
var inst_40531 = cljs.core.chunk_rest.call(null,inst_40526);
var inst_40532 = cljs.core.count.call(null,inst_40530);
var inst_40507 = inst_40531;
var inst_40508 = inst_40530;
var inst_40509 = inst_40532;
var inst_40510 = (0);
var state_40567__$1 = (function (){var statearr_40602 = state_40567;
(statearr_40602[(20)] = inst_40509);

(statearr_40602[(21)] = inst_40507);

(statearr_40602[(11)] = inst_40510);

(statearr_40602[(12)] = inst_40508);

return statearr_40602;
})();
var statearr_40603_40675 = state_40567__$1;
(statearr_40603_40675[(2)] = null);

(statearr_40603_40675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (41))){
var inst_40526 = (state_40567[(25)]);
var inst_40542 = (state_40567[(2)]);
var inst_40543 = cljs.core.next.call(null,inst_40526);
var inst_40507 = inst_40543;
var inst_40508 = null;
var inst_40509 = (0);
var inst_40510 = (0);
var state_40567__$1 = (function (){var statearr_40604 = state_40567;
(statearr_40604[(20)] = inst_40509);

(statearr_40604[(21)] = inst_40507);

(statearr_40604[(11)] = inst_40510);

(statearr_40604[(12)] = inst_40508);

(statearr_40604[(27)] = inst_40542);

return statearr_40604;
})();
var statearr_40605_40676 = state_40567__$1;
(statearr_40605_40676[(2)] = null);

(statearr_40605_40676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (43))){
var state_40567__$1 = state_40567;
var statearr_40606_40677 = state_40567__$1;
(statearr_40606_40677[(2)] = null);

(statearr_40606_40677[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (29))){
var inst_40551 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40607_40678 = state_40567__$1;
(statearr_40607_40678[(2)] = inst_40551);

(statearr_40607_40678[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (44))){
var inst_40560 = (state_40567[(2)]);
var state_40567__$1 = (function (){var statearr_40608 = state_40567;
(statearr_40608[(28)] = inst_40560);

return statearr_40608;
})();
var statearr_40609_40679 = state_40567__$1;
(statearr_40609_40679[(2)] = null);

(statearr_40609_40679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (6))){
var inst_40499 = (state_40567[(29)]);
var inst_40498 = cljs.core.deref.call(null,cs);
var inst_40499__$1 = cljs.core.keys.call(null,inst_40498);
var inst_40500 = cljs.core.count.call(null,inst_40499__$1);
var inst_40501 = cljs.core.reset_BANG_.call(null,dctr,inst_40500);
var inst_40506 = cljs.core.seq.call(null,inst_40499__$1);
var inst_40507 = inst_40506;
var inst_40508 = null;
var inst_40509 = (0);
var inst_40510 = (0);
var state_40567__$1 = (function (){var statearr_40610 = state_40567;
(statearr_40610[(29)] = inst_40499__$1);

(statearr_40610[(20)] = inst_40509);

(statearr_40610[(21)] = inst_40507);

(statearr_40610[(11)] = inst_40510);

(statearr_40610[(12)] = inst_40508);

(statearr_40610[(30)] = inst_40501);

return statearr_40610;
})();
var statearr_40611_40680 = state_40567__$1;
(statearr_40611_40680[(2)] = null);

(statearr_40611_40680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (28))){
var inst_40507 = (state_40567[(21)]);
var inst_40526 = (state_40567[(25)]);
var inst_40526__$1 = cljs.core.seq.call(null,inst_40507);
var state_40567__$1 = (function (){var statearr_40612 = state_40567;
(statearr_40612[(25)] = inst_40526__$1);

return statearr_40612;
})();
if(inst_40526__$1){
var statearr_40613_40681 = state_40567__$1;
(statearr_40613_40681[(1)] = (33));

} else {
var statearr_40614_40682 = state_40567__$1;
(statearr_40614_40682[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (25))){
var inst_40509 = (state_40567[(20)]);
var inst_40510 = (state_40567[(11)]);
var inst_40512 = (inst_40510 < inst_40509);
var inst_40513 = inst_40512;
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40513)){
var statearr_40615_40683 = state_40567__$1;
(statearr_40615_40683[(1)] = (27));

} else {
var statearr_40616_40684 = state_40567__$1;
(statearr_40616_40684[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (34))){
var state_40567__$1 = state_40567;
var statearr_40617_40685 = state_40567__$1;
(statearr_40617_40685[(2)] = null);

(statearr_40617_40685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (17))){
var state_40567__$1 = state_40567;
var statearr_40618_40686 = state_40567__$1;
(statearr_40618_40686[(2)] = null);

(statearr_40618_40686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (3))){
var inst_40565 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40567__$1,inst_40565);
} else {
if((state_val_40568 === (12))){
var inst_40494 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40619_40687 = state_40567__$1;
(statearr_40619_40687[(2)] = inst_40494);

(statearr_40619_40687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (2))){
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(4),ch);
} else {
if((state_val_40568 === (23))){
var state_40567__$1 = state_40567;
var statearr_40620_40688 = state_40567__$1;
(statearr_40620_40688[(2)] = null);

(statearr_40620_40688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (35))){
var inst_40549 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40621_40689 = state_40567__$1;
(statearr_40621_40689[(2)] = inst_40549);

(statearr_40621_40689[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (19))){
var inst_40468 = (state_40567[(7)]);
var inst_40472 = cljs.core.chunk_first.call(null,inst_40468);
var inst_40473 = cljs.core.chunk_rest.call(null,inst_40468);
var inst_40474 = cljs.core.count.call(null,inst_40472);
var inst_40448 = inst_40473;
var inst_40449 = inst_40472;
var inst_40450 = inst_40474;
var inst_40451 = (0);
var state_40567__$1 = (function (){var statearr_40622 = state_40567;
(statearr_40622[(13)] = inst_40448);

(statearr_40622[(14)] = inst_40449);

(statearr_40622[(16)] = inst_40451);

(statearr_40622[(17)] = inst_40450);

return statearr_40622;
})();
var statearr_40623_40690 = state_40567__$1;
(statearr_40623_40690[(2)] = null);

(statearr_40623_40690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (11))){
var inst_40448 = (state_40567[(13)]);
var inst_40468 = (state_40567[(7)]);
var inst_40468__$1 = cljs.core.seq.call(null,inst_40448);
var state_40567__$1 = (function (){var statearr_40624 = state_40567;
(statearr_40624[(7)] = inst_40468__$1);

return statearr_40624;
})();
if(inst_40468__$1){
var statearr_40625_40691 = state_40567__$1;
(statearr_40625_40691[(1)] = (16));

} else {
var statearr_40626_40692 = state_40567__$1;
(statearr_40626_40692[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (9))){
var inst_40496 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40627_40693 = state_40567__$1;
(statearr_40627_40693[(2)] = inst_40496);

(statearr_40627_40693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (5))){
var inst_40446 = cljs.core.deref.call(null,cs);
var inst_40447 = cljs.core.seq.call(null,inst_40446);
var inst_40448 = inst_40447;
var inst_40449 = null;
var inst_40450 = (0);
var inst_40451 = (0);
var state_40567__$1 = (function (){var statearr_40628 = state_40567;
(statearr_40628[(13)] = inst_40448);

(statearr_40628[(14)] = inst_40449);

(statearr_40628[(16)] = inst_40451);

(statearr_40628[(17)] = inst_40450);

return statearr_40628;
})();
var statearr_40629_40694 = state_40567__$1;
(statearr_40629_40694[(2)] = null);

(statearr_40629_40694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (14))){
var state_40567__$1 = state_40567;
var statearr_40630_40695 = state_40567__$1;
(statearr_40630_40695[(2)] = null);

(statearr_40630_40695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (45))){
var inst_40557 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40631_40696 = state_40567__$1;
(statearr_40631_40696[(2)] = inst_40557);

(statearr_40631_40696[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (26))){
var inst_40499 = (state_40567[(29)]);
var inst_40553 = (state_40567[(2)]);
var inst_40554 = cljs.core.seq.call(null,inst_40499);
var state_40567__$1 = (function (){var statearr_40632 = state_40567;
(statearr_40632[(31)] = inst_40553);

return statearr_40632;
})();
if(inst_40554){
var statearr_40633_40697 = state_40567__$1;
(statearr_40633_40697[(1)] = (42));

} else {
var statearr_40634_40698 = state_40567__$1;
(statearr_40634_40698[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (16))){
var inst_40468 = (state_40567[(7)]);
var inst_40470 = cljs.core.chunked_seq_QMARK_.call(null,inst_40468);
var state_40567__$1 = state_40567;
if(inst_40470){
var statearr_40635_40699 = state_40567__$1;
(statearr_40635_40699[(1)] = (19));

} else {
var statearr_40636_40700 = state_40567__$1;
(statearr_40636_40700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (38))){
var inst_40546 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40637_40701 = state_40567__$1;
(statearr_40637_40701[(2)] = inst_40546);

(statearr_40637_40701[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (30))){
var state_40567__$1 = state_40567;
var statearr_40638_40702 = state_40567__$1;
(statearr_40638_40702[(2)] = null);

(statearr_40638_40702[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (10))){
var inst_40449 = (state_40567[(14)]);
var inst_40451 = (state_40567[(16)]);
var inst_40457 = cljs.core._nth.call(null,inst_40449,inst_40451);
var inst_40458 = cljs.core.nth.call(null,inst_40457,(0),null);
var inst_40459 = cljs.core.nth.call(null,inst_40457,(1),null);
var state_40567__$1 = (function (){var statearr_40639 = state_40567;
(statearr_40639[(26)] = inst_40458);

return statearr_40639;
})();
if(cljs.core.truth_(inst_40459)){
var statearr_40640_40703 = state_40567__$1;
(statearr_40640_40703[(1)] = (13));

} else {
var statearr_40641_40704 = state_40567__$1;
(statearr_40641_40704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (18))){
var inst_40492 = (state_40567[(2)]);
var state_40567__$1 = state_40567;
var statearr_40642_40705 = state_40567__$1;
(statearr_40642_40705[(2)] = inst_40492);

(statearr_40642_40705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (42))){
var state_40567__$1 = state_40567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40567__$1,(45),dchan);
} else {
if((state_val_40568 === (37))){
var inst_40439 = (state_40567[(9)]);
var inst_40526 = (state_40567[(25)]);
var inst_40535 = (state_40567[(23)]);
var inst_40535__$1 = cljs.core.first.call(null,inst_40526);
var inst_40536 = cljs.core.async.put_BANG_.call(null,inst_40535__$1,inst_40439,done);
var state_40567__$1 = (function (){var statearr_40643 = state_40567;
(statearr_40643[(23)] = inst_40535__$1);

return statearr_40643;
})();
if(cljs.core.truth_(inst_40536)){
var statearr_40644_40706 = state_40567__$1;
(statearr_40644_40706[(1)] = (39));

} else {
var statearr_40645_40707 = state_40567__$1;
(statearr_40645_40707[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40568 === (8))){
var inst_40451 = (state_40567[(16)]);
var inst_40450 = (state_40567[(17)]);
var inst_40453 = (inst_40451 < inst_40450);
var inst_40454 = inst_40453;
var state_40567__$1 = state_40567;
if(cljs.core.truth_(inst_40454)){
var statearr_40646_40708 = state_40567__$1;
(statearr_40646_40708[(1)] = (10));

} else {
var statearr_40647_40709 = state_40567__$1;
(statearr_40647_40709[(1)] = (11));

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
});})(c__39348__auto___40655,cs,m,dchan,dctr,done))
;
return ((function (switch__39236__auto__,c__39348__auto___40655,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__39237__auto__ = null;
var cljs$core$async$mult_$_state_machine__39237__auto____0 = (function (){
var statearr_40651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40651[(0)] = cljs$core$async$mult_$_state_machine__39237__auto__);

(statearr_40651[(1)] = (1));

return statearr_40651;
});
var cljs$core$async$mult_$_state_machine__39237__auto____1 = (function (state_40567){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_40567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e40652){if((e40652 instanceof Object)){
var ex__39240__auto__ = e40652;
var statearr_40653_40710 = state_40567;
(statearr_40653_40710[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40711 = state_40567;
state_40567 = G__40711;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39237__auto__ = function(state_40567){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39237__auto____1.call(this,state_40567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39237__auto____0;
cljs$core$async$mult_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39237__auto____1;
return cljs$core$async$mult_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___40655,cs,m,dchan,dctr,done))
})();
var state__39350__auto__ = (function (){var statearr_40654 = f__39349__auto__.call(null);
(statearr_40654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___40655);

return statearr_40654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___40655,cs,m,dchan,dctr,done))
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
var args40712 = [];
var len__38239__auto___40715 = arguments.length;
var i__38240__auto___40716 = (0);
while(true){
if((i__38240__auto___40716 < len__38239__auto___40715)){
args40712.push((arguments[i__38240__auto___40716]));

var G__40717 = (i__38240__auto___40716 + (1));
i__38240__auto___40716 = G__40717;
continue;
} else {
}
break;
}

var G__40714 = args40712.length;
switch (G__40714) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40712.length)].join('')));

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
var x__37836__auto__ = (((m == null))?null:m);
var m__37837__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,m,ch);
} else {
var m__37837__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,m,ch);
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
var x__37836__auto__ = (((m == null))?null:m);
var m__37837__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,m,ch);
} else {
var m__37837__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,m,ch);
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
var x__37836__auto__ = (((m == null))?null:m);
var m__37837__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,m);
} else {
var m__37837__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,m);
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
var x__37836__auto__ = (((m == null))?null:m);
var m__37837__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,m,state_map);
} else {
var m__37837__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,m,state_map);
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
var x__37836__auto__ = (((m == null))?null:m);
var m__37837__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,m,mode);
} else {
var m__37837__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__38246__auto__ = [];
var len__38239__auto___40729 = arguments.length;
var i__38240__auto___40730 = (0);
while(true){
if((i__38240__auto___40730 < len__38239__auto___40729)){
args__38246__auto__.push((arguments[i__38240__auto___40730]));

var G__40731 = (i__38240__auto___40730 + (1));
i__38240__auto___40730 = G__40731;
continue;
} else {
}
break;
}

var argseq__38247__auto__ = ((((3) < args__38246__auto__.length))?(new cljs.core.IndexedSeq(args__38246__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__38247__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40723){
var map__40724 = p__40723;
var map__40724__$1 = ((((!((map__40724 == null)))?((((map__40724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40724):map__40724);
var opts = map__40724__$1;
var statearr_40726_40732 = state;
(statearr_40726_40732[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__40724,map__40724__$1,opts){
return (function (val){
var statearr_40727_40733 = state;
(statearr_40727_40733[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40724,map__40724__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_40728_40734 = state;
(statearr_40728_40734[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40719){
var G__40720 = cljs.core.first.call(null,seq40719);
var seq40719__$1 = cljs.core.next.call(null,seq40719);
var G__40721 = cljs.core.first.call(null,seq40719__$1);
var seq40719__$2 = cljs.core.next.call(null,seq40719__$1);
var G__40722 = cljs.core.first.call(null,seq40719__$2);
var seq40719__$3 = cljs.core.next.call(null,seq40719__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40720,G__40721,G__40722,seq40719__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40898 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40899){
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
this.meta40899 = meta40899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40900,meta40899__$1){
var self__ = this;
var _40900__$1 = this;
return (new cljs.core.async.t_cljs$core$async40898(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40899__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40900){
var self__ = this;
var _40900__$1 = this;
return self__.meta40899;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40898.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40898.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40899","meta40899",1279077642,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40898";

cljs.core.async.t_cljs$core$async40898.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async40898");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40898 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40898(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40899){
return (new cljs.core.async.t_cljs$core$async40898(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40899));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40898(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39348__auto___41061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___41061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___41061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40998){
var state_val_40999 = (state_40998[(1)]);
if((state_val_40999 === (7))){
var inst_40916 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
var statearr_41000_41062 = state_40998__$1;
(statearr_41000_41062[(2)] = inst_40916);

(statearr_41000_41062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (20))){
var inst_40928 = (state_40998[(7)]);
var state_40998__$1 = state_40998;
var statearr_41001_41063 = state_40998__$1;
(statearr_41001_41063[(2)] = inst_40928);

(statearr_41001_41063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (27))){
var state_40998__$1 = state_40998;
var statearr_41002_41064 = state_40998__$1;
(statearr_41002_41064[(2)] = null);

(statearr_41002_41064[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (1))){
var inst_40904 = (state_40998[(8)]);
var inst_40904__$1 = calc_state.call(null);
var inst_40906 = (inst_40904__$1 == null);
var inst_40907 = cljs.core.not.call(null,inst_40906);
var state_40998__$1 = (function (){var statearr_41003 = state_40998;
(statearr_41003[(8)] = inst_40904__$1);

return statearr_41003;
})();
if(inst_40907){
var statearr_41004_41065 = state_40998__$1;
(statearr_41004_41065[(1)] = (2));

} else {
var statearr_41005_41066 = state_40998__$1;
(statearr_41005_41066[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (24))){
var inst_40958 = (state_40998[(9)]);
var inst_40951 = (state_40998[(10)]);
var inst_40972 = (state_40998[(11)]);
var inst_40972__$1 = inst_40951.call(null,inst_40958);
var state_40998__$1 = (function (){var statearr_41006 = state_40998;
(statearr_41006[(11)] = inst_40972__$1);

return statearr_41006;
})();
if(cljs.core.truth_(inst_40972__$1)){
var statearr_41007_41067 = state_40998__$1;
(statearr_41007_41067[(1)] = (29));

} else {
var statearr_41008_41068 = state_40998__$1;
(statearr_41008_41068[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (4))){
var inst_40919 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
if(cljs.core.truth_(inst_40919)){
var statearr_41009_41069 = state_40998__$1;
(statearr_41009_41069[(1)] = (8));

} else {
var statearr_41010_41070 = state_40998__$1;
(statearr_41010_41070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (15))){
var inst_40945 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
if(cljs.core.truth_(inst_40945)){
var statearr_41011_41071 = state_40998__$1;
(statearr_41011_41071[(1)] = (19));

} else {
var statearr_41012_41072 = state_40998__$1;
(statearr_41012_41072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (21))){
var inst_40950 = (state_40998[(12)]);
var inst_40950__$1 = (state_40998[(2)]);
var inst_40951 = cljs.core.get.call(null,inst_40950__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40952 = cljs.core.get.call(null,inst_40950__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40953 = cljs.core.get.call(null,inst_40950__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40998__$1 = (function (){var statearr_41013 = state_40998;
(statearr_41013[(12)] = inst_40950__$1);

(statearr_41013[(10)] = inst_40951);

(statearr_41013[(13)] = inst_40952);

return statearr_41013;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40998__$1,(22),inst_40953);
} else {
if((state_val_40999 === (31))){
var inst_40980 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
if(cljs.core.truth_(inst_40980)){
var statearr_41014_41073 = state_40998__$1;
(statearr_41014_41073[(1)] = (32));

} else {
var statearr_41015_41074 = state_40998__$1;
(statearr_41015_41074[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (32))){
var inst_40957 = (state_40998[(14)]);
var state_40998__$1 = state_40998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40998__$1,(35),out,inst_40957);
} else {
if((state_val_40999 === (33))){
var inst_40950 = (state_40998[(12)]);
var inst_40928 = inst_40950;
var state_40998__$1 = (function (){var statearr_41016 = state_40998;
(statearr_41016[(7)] = inst_40928);

return statearr_41016;
})();
var statearr_41017_41075 = state_40998__$1;
(statearr_41017_41075[(2)] = null);

(statearr_41017_41075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (13))){
var inst_40928 = (state_40998[(7)]);
var inst_40935 = inst_40928.cljs$lang$protocol_mask$partition0$;
var inst_40936 = (inst_40935 & (64));
var inst_40937 = inst_40928.cljs$core$ISeq$;
var inst_40938 = (inst_40936) || (inst_40937);
var state_40998__$1 = state_40998;
if(cljs.core.truth_(inst_40938)){
var statearr_41018_41076 = state_40998__$1;
(statearr_41018_41076[(1)] = (16));

} else {
var statearr_41019_41077 = state_40998__$1;
(statearr_41019_41077[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (22))){
var inst_40957 = (state_40998[(14)]);
var inst_40958 = (state_40998[(9)]);
var inst_40956 = (state_40998[(2)]);
var inst_40957__$1 = cljs.core.nth.call(null,inst_40956,(0),null);
var inst_40958__$1 = cljs.core.nth.call(null,inst_40956,(1),null);
var inst_40959 = (inst_40957__$1 == null);
var inst_40960 = cljs.core._EQ_.call(null,inst_40958__$1,change);
var inst_40961 = (inst_40959) || (inst_40960);
var state_40998__$1 = (function (){var statearr_41020 = state_40998;
(statearr_41020[(14)] = inst_40957__$1);

(statearr_41020[(9)] = inst_40958__$1);

return statearr_41020;
})();
if(cljs.core.truth_(inst_40961)){
var statearr_41021_41078 = state_40998__$1;
(statearr_41021_41078[(1)] = (23));

} else {
var statearr_41022_41079 = state_40998__$1;
(statearr_41022_41079[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (36))){
var inst_40950 = (state_40998[(12)]);
var inst_40928 = inst_40950;
var state_40998__$1 = (function (){var statearr_41023 = state_40998;
(statearr_41023[(7)] = inst_40928);

return statearr_41023;
})();
var statearr_41024_41080 = state_40998__$1;
(statearr_41024_41080[(2)] = null);

(statearr_41024_41080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (29))){
var inst_40972 = (state_40998[(11)]);
var state_40998__$1 = state_40998;
var statearr_41025_41081 = state_40998__$1;
(statearr_41025_41081[(2)] = inst_40972);

(statearr_41025_41081[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (6))){
var state_40998__$1 = state_40998;
var statearr_41026_41082 = state_40998__$1;
(statearr_41026_41082[(2)] = false);

(statearr_41026_41082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (28))){
var inst_40968 = (state_40998[(2)]);
var inst_40969 = calc_state.call(null);
var inst_40928 = inst_40969;
var state_40998__$1 = (function (){var statearr_41027 = state_40998;
(statearr_41027[(7)] = inst_40928);

(statearr_41027[(15)] = inst_40968);

return statearr_41027;
})();
var statearr_41028_41083 = state_40998__$1;
(statearr_41028_41083[(2)] = null);

(statearr_41028_41083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (25))){
var inst_40994 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
var statearr_41029_41084 = state_40998__$1;
(statearr_41029_41084[(2)] = inst_40994);

(statearr_41029_41084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (34))){
var inst_40992 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
var statearr_41030_41085 = state_40998__$1;
(statearr_41030_41085[(2)] = inst_40992);

(statearr_41030_41085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (17))){
var state_40998__$1 = state_40998;
var statearr_41031_41086 = state_40998__$1;
(statearr_41031_41086[(2)] = false);

(statearr_41031_41086[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (3))){
var state_40998__$1 = state_40998;
var statearr_41032_41087 = state_40998__$1;
(statearr_41032_41087[(2)] = false);

(statearr_41032_41087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (12))){
var inst_40996 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40998__$1,inst_40996);
} else {
if((state_val_40999 === (2))){
var inst_40904 = (state_40998[(8)]);
var inst_40909 = inst_40904.cljs$lang$protocol_mask$partition0$;
var inst_40910 = (inst_40909 & (64));
var inst_40911 = inst_40904.cljs$core$ISeq$;
var inst_40912 = (inst_40910) || (inst_40911);
var state_40998__$1 = state_40998;
if(cljs.core.truth_(inst_40912)){
var statearr_41033_41088 = state_40998__$1;
(statearr_41033_41088[(1)] = (5));

} else {
var statearr_41034_41089 = state_40998__$1;
(statearr_41034_41089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (23))){
var inst_40957 = (state_40998[(14)]);
var inst_40963 = (inst_40957 == null);
var state_40998__$1 = state_40998;
if(cljs.core.truth_(inst_40963)){
var statearr_41035_41090 = state_40998__$1;
(statearr_41035_41090[(1)] = (26));

} else {
var statearr_41036_41091 = state_40998__$1;
(statearr_41036_41091[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (35))){
var inst_40983 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
if(cljs.core.truth_(inst_40983)){
var statearr_41037_41092 = state_40998__$1;
(statearr_41037_41092[(1)] = (36));

} else {
var statearr_41038_41093 = state_40998__$1;
(statearr_41038_41093[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (19))){
var inst_40928 = (state_40998[(7)]);
var inst_40947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40928);
var state_40998__$1 = state_40998;
var statearr_41039_41094 = state_40998__$1;
(statearr_41039_41094[(2)] = inst_40947);

(statearr_41039_41094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (11))){
var inst_40928 = (state_40998[(7)]);
var inst_40932 = (inst_40928 == null);
var inst_40933 = cljs.core.not.call(null,inst_40932);
var state_40998__$1 = state_40998;
if(inst_40933){
var statearr_41040_41095 = state_40998__$1;
(statearr_41040_41095[(1)] = (13));

} else {
var statearr_41041_41096 = state_40998__$1;
(statearr_41041_41096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (9))){
var inst_40904 = (state_40998[(8)]);
var state_40998__$1 = state_40998;
var statearr_41042_41097 = state_40998__$1;
(statearr_41042_41097[(2)] = inst_40904);

(statearr_41042_41097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (5))){
var state_40998__$1 = state_40998;
var statearr_41043_41098 = state_40998__$1;
(statearr_41043_41098[(2)] = true);

(statearr_41043_41098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (14))){
var state_40998__$1 = state_40998;
var statearr_41044_41099 = state_40998__$1;
(statearr_41044_41099[(2)] = false);

(statearr_41044_41099[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (26))){
var inst_40958 = (state_40998[(9)]);
var inst_40965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40958);
var state_40998__$1 = state_40998;
var statearr_41045_41100 = state_40998__$1;
(statearr_41045_41100[(2)] = inst_40965);

(statearr_41045_41100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (16))){
var state_40998__$1 = state_40998;
var statearr_41046_41101 = state_40998__$1;
(statearr_41046_41101[(2)] = true);

(statearr_41046_41101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (38))){
var inst_40988 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
var statearr_41047_41102 = state_40998__$1;
(statearr_41047_41102[(2)] = inst_40988);

(statearr_41047_41102[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (30))){
var inst_40958 = (state_40998[(9)]);
var inst_40951 = (state_40998[(10)]);
var inst_40952 = (state_40998[(13)]);
var inst_40975 = cljs.core.empty_QMARK_.call(null,inst_40951);
var inst_40976 = inst_40952.call(null,inst_40958);
var inst_40977 = cljs.core.not.call(null,inst_40976);
var inst_40978 = (inst_40975) && (inst_40977);
var state_40998__$1 = state_40998;
var statearr_41048_41103 = state_40998__$1;
(statearr_41048_41103[(2)] = inst_40978);

(statearr_41048_41103[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (10))){
var inst_40904 = (state_40998[(8)]);
var inst_40924 = (state_40998[(2)]);
var inst_40925 = cljs.core.get.call(null,inst_40924,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40926 = cljs.core.get.call(null,inst_40924,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40927 = cljs.core.get.call(null,inst_40924,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40928 = inst_40904;
var state_40998__$1 = (function (){var statearr_41049 = state_40998;
(statearr_41049[(16)] = inst_40926);

(statearr_41049[(7)] = inst_40928);

(statearr_41049[(17)] = inst_40925);

(statearr_41049[(18)] = inst_40927);

return statearr_41049;
})();
var statearr_41050_41104 = state_40998__$1;
(statearr_41050_41104[(2)] = null);

(statearr_41050_41104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (18))){
var inst_40942 = (state_40998[(2)]);
var state_40998__$1 = state_40998;
var statearr_41051_41105 = state_40998__$1;
(statearr_41051_41105[(2)] = inst_40942);

(statearr_41051_41105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (37))){
var state_40998__$1 = state_40998;
var statearr_41052_41106 = state_40998__$1;
(statearr_41052_41106[(2)] = null);

(statearr_41052_41106[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40999 === (8))){
var inst_40904 = (state_40998[(8)]);
var inst_40921 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40904);
var state_40998__$1 = state_40998;
var statearr_41053_41107 = state_40998__$1;
(statearr_41053_41107[(2)] = inst_40921);

(statearr_41053_41107[(1)] = (10));


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
});})(c__39348__auto___41061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__39236__auto__,c__39348__auto___41061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__39237__auto__ = null;
var cljs$core$async$mix_$_state_machine__39237__auto____0 = (function (){
var statearr_41057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41057[(0)] = cljs$core$async$mix_$_state_machine__39237__auto__);

(statearr_41057[(1)] = (1));

return statearr_41057;
});
var cljs$core$async$mix_$_state_machine__39237__auto____1 = (function (state_40998){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_40998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e41058){if((e41058 instanceof Object)){
var ex__39240__auto__ = e41058;
var statearr_41059_41108 = state_40998;
(statearr_41059_41108[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41109 = state_40998;
state_40998 = G__41109;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39237__auto__ = function(state_40998){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39237__auto____1.call(this,state_40998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39237__auto____0;
cljs$core$async$mix_$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39237__auto____1;
return cljs$core$async$mix_$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___41061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__39350__auto__ = (function (){var statearr_41060 = f__39349__auto__.call(null);
(statearr_41060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___41061);

return statearr_41060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___41061,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__37836__auto__ = (((p == null))?null:p);
var m__37837__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__37837__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__37836__auto__ = (((p == null))?null:p);
var m__37837__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,p,v,ch);
} else {
var m__37837__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args41110 = [];
var len__38239__auto___41113 = arguments.length;
var i__38240__auto___41114 = (0);
while(true){
if((i__38240__auto___41114 < len__38239__auto___41113)){
args41110.push((arguments[i__38240__auto___41114]));

var G__41115 = (i__38240__auto___41114 + (1));
i__38240__auto___41114 = G__41115;
continue;
} else {
}
break;
}

var G__41112 = args41110.length;
switch (G__41112) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41110.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__37836__auto__ = (((p == null))?null:p);
var m__37837__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,p);
} else {
var m__37837__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,p);
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
var x__37836__auto__ = (((p == null))?null:p);
var m__37837__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__37836__auto__)]);
if(!((m__37837__auto__ == null))){
return m__37837__auto__.call(null,p,v);
} else {
var m__37837__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__37837__auto____$1 == null))){
return m__37837__auto____$1.call(null,p,v);
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
var args41118 = [];
var len__38239__auto___41243 = arguments.length;
var i__38240__auto___41244 = (0);
while(true){
if((i__38240__auto___41244 < len__38239__auto___41243)){
args41118.push((arguments[i__38240__auto___41244]));

var G__41245 = (i__38240__auto___41244 + (1));
i__38240__auto___41244 = G__41245;
continue;
} else {
}
break;
}

var G__41120 = args41118.length;
switch (G__41120) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41118.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__37181__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__37181__auto__)){
return or__37181__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__37181__auto__,mults){
return (function (p1__41117_SHARP_){
if(cljs.core.truth_(p1__41117_SHARP_.call(null,topic))){
return p1__41117_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41117_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__37181__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41121 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41122){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41122 = meta41122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41123,meta41122__$1){
var self__ = this;
var _41123__$1 = this;
return (new cljs.core.async.t_cljs$core$async41121(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41122__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41123){
var self__ = this;
var _41123__$1 = this;
return self__.meta41122;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41121.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41121.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41122","meta41122",-1600628980,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41121";

cljs.core.async.t_cljs$core$async41121.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async41121");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41121 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41121(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41122){
return (new cljs.core.async.t_cljs$core$async41121(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41122));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41121(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__39348__auto___41247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___41247,mults,ensure_mult,p){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___41247,mults,ensure_mult,p){
return (function (state_41195){
var state_val_41196 = (state_41195[(1)]);
if((state_val_41196 === (7))){
var inst_41191 = (state_41195[(2)]);
var state_41195__$1 = state_41195;
var statearr_41197_41248 = state_41195__$1;
(statearr_41197_41248[(2)] = inst_41191);

(statearr_41197_41248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (20))){
var state_41195__$1 = state_41195;
var statearr_41198_41249 = state_41195__$1;
(statearr_41198_41249[(2)] = null);

(statearr_41198_41249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (1))){
var state_41195__$1 = state_41195;
var statearr_41199_41250 = state_41195__$1;
(statearr_41199_41250[(2)] = null);

(statearr_41199_41250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (24))){
var inst_41174 = (state_41195[(7)]);
var inst_41183 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41174);
var state_41195__$1 = state_41195;
var statearr_41200_41251 = state_41195__$1;
(statearr_41200_41251[(2)] = inst_41183);

(statearr_41200_41251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (4))){
var inst_41126 = (state_41195[(8)]);
var inst_41126__$1 = (state_41195[(2)]);
var inst_41127 = (inst_41126__$1 == null);
var state_41195__$1 = (function (){var statearr_41201 = state_41195;
(statearr_41201[(8)] = inst_41126__$1);

return statearr_41201;
})();
if(cljs.core.truth_(inst_41127)){
var statearr_41202_41252 = state_41195__$1;
(statearr_41202_41252[(1)] = (5));

} else {
var statearr_41203_41253 = state_41195__$1;
(statearr_41203_41253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (15))){
var inst_41168 = (state_41195[(2)]);
var state_41195__$1 = state_41195;
var statearr_41204_41254 = state_41195__$1;
(statearr_41204_41254[(2)] = inst_41168);

(statearr_41204_41254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (21))){
var inst_41188 = (state_41195[(2)]);
var state_41195__$1 = (function (){var statearr_41205 = state_41195;
(statearr_41205[(9)] = inst_41188);

return statearr_41205;
})();
var statearr_41206_41255 = state_41195__$1;
(statearr_41206_41255[(2)] = null);

(statearr_41206_41255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (13))){
var inst_41150 = (state_41195[(10)]);
var inst_41152 = cljs.core.chunked_seq_QMARK_.call(null,inst_41150);
var state_41195__$1 = state_41195;
if(inst_41152){
var statearr_41207_41256 = state_41195__$1;
(statearr_41207_41256[(1)] = (16));

} else {
var statearr_41208_41257 = state_41195__$1;
(statearr_41208_41257[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (22))){
var inst_41180 = (state_41195[(2)]);
var state_41195__$1 = state_41195;
if(cljs.core.truth_(inst_41180)){
var statearr_41209_41258 = state_41195__$1;
(statearr_41209_41258[(1)] = (23));

} else {
var statearr_41210_41259 = state_41195__$1;
(statearr_41210_41259[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (6))){
var inst_41176 = (state_41195[(11)]);
var inst_41174 = (state_41195[(7)]);
var inst_41126 = (state_41195[(8)]);
var inst_41174__$1 = topic_fn.call(null,inst_41126);
var inst_41175 = cljs.core.deref.call(null,mults);
var inst_41176__$1 = cljs.core.get.call(null,inst_41175,inst_41174__$1);
var state_41195__$1 = (function (){var statearr_41211 = state_41195;
(statearr_41211[(11)] = inst_41176__$1);

(statearr_41211[(7)] = inst_41174__$1);

return statearr_41211;
})();
if(cljs.core.truth_(inst_41176__$1)){
var statearr_41212_41260 = state_41195__$1;
(statearr_41212_41260[(1)] = (19));

} else {
var statearr_41213_41261 = state_41195__$1;
(statearr_41213_41261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (25))){
var inst_41185 = (state_41195[(2)]);
var state_41195__$1 = state_41195;
var statearr_41214_41262 = state_41195__$1;
(statearr_41214_41262[(2)] = inst_41185);

(statearr_41214_41262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (17))){
var inst_41150 = (state_41195[(10)]);
var inst_41159 = cljs.core.first.call(null,inst_41150);
var inst_41160 = cljs.core.async.muxch_STAR_.call(null,inst_41159);
var inst_41161 = cljs.core.async.close_BANG_.call(null,inst_41160);
var inst_41162 = cljs.core.next.call(null,inst_41150);
var inst_41136 = inst_41162;
var inst_41137 = null;
var inst_41138 = (0);
var inst_41139 = (0);
var state_41195__$1 = (function (){var statearr_41215 = state_41195;
(statearr_41215[(12)] = inst_41136);

(statearr_41215[(13)] = inst_41138);

(statearr_41215[(14)] = inst_41139);

(statearr_41215[(15)] = inst_41161);

(statearr_41215[(16)] = inst_41137);

return statearr_41215;
})();
var statearr_41216_41263 = state_41195__$1;
(statearr_41216_41263[(2)] = null);

(statearr_41216_41263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (3))){
var inst_41193 = (state_41195[(2)]);
var state_41195__$1 = state_41195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41195__$1,inst_41193);
} else {
if((state_val_41196 === (12))){
var inst_41170 = (state_41195[(2)]);
var state_41195__$1 = state_41195;
var statearr_41217_41264 = state_41195__$1;
(statearr_41217_41264[(2)] = inst_41170);

(statearr_41217_41264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (2))){
var state_41195__$1 = state_41195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41195__$1,(4),ch);
} else {
if((state_val_41196 === (23))){
var state_41195__$1 = state_41195;
var statearr_41218_41265 = state_41195__$1;
(statearr_41218_41265[(2)] = null);

(statearr_41218_41265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (19))){
var inst_41176 = (state_41195[(11)]);
var inst_41126 = (state_41195[(8)]);
var inst_41178 = cljs.core.async.muxch_STAR_.call(null,inst_41176);
var state_41195__$1 = state_41195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41195__$1,(22),inst_41178,inst_41126);
} else {
if((state_val_41196 === (11))){
var inst_41136 = (state_41195[(12)]);
var inst_41150 = (state_41195[(10)]);
var inst_41150__$1 = cljs.core.seq.call(null,inst_41136);
var state_41195__$1 = (function (){var statearr_41219 = state_41195;
(statearr_41219[(10)] = inst_41150__$1);

return statearr_41219;
})();
if(inst_41150__$1){
var statearr_41220_41266 = state_41195__$1;
(statearr_41220_41266[(1)] = (13));

} else {
var statearr_41221_41267 = state_41195__$1;
(statearr_41221_41267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (9))){
var inst_41172 = (state_41195[(2)]);
var state_41195__$1 = state_41195;
var statearr_41222_41268 = state_41195__$1;
(statearr_41222_41268[(2)] = inst_41172);

(statearr_41222_41268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (5))){
var inst_41133 = cljs.core.deref.call(null,mults);
var inst_41134 = cljs.core.vals.call(null,inst_41133);
var inst_41135 = cljs.core.seq.call(null,inst_41134);
var inst_41136 = inst_41135;
var inst_41137 = null;
var inst_41138 = (0);
var inst_41139 = (0);
var state_41195__$1 = (function (){var statearr_41223 = state_41195;
(statearr_41223[(12)] = inst_41136);

(statearr_41223[(13)] = inst_41138);

(statearr_41223[(14)] = inst_41139);

(statearr_41223[(16)] = inst_41137);

return statearr_41223;
})();
var statearr_41224_41269 = state_41195__$1;
(statearr_41224_41269[(2)] = null);

(statearr_41224_41269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (14))){
var state_41195__$1 = state_41195;
var statearr_41228_41270 = state_41195__$1;
(statearr_41228_41270[(2)] = null);

(statearr_41228_41270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (16))){
var inst_41150 = (state_41195[(10)]);
var inst_41154 = cljs.core.chunk_first.call(null,inst_41150);
var inst_41155 = cljs.core.chunk_rest.call(null,inst_41150);
var inst_41156 = cljs.core.count.call(null,inst_41154);
var inst_41136 = inst_41155;
var inst_41137 = inst_41154;
var inst_41138 = inst_41156;
var inst_41139 = (0);
var state_41195__$1 = (function (){var statearr_41229 = state_41195;
(statearr_41229[(12)] = inst_41136);

(statearr_41229[(13)] = inst_41138);

(statearr_41229[(14)] = inst_41139);

(statearr_41229[(16)] = inst_41137);

return statearr_41229;
})();
var statearr_41230_41271 = state_41195__$1;
(statearr_41230_41271[(2)] = null);

(statearr_41230_41271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (10))){
var inst_41136 = (state_41195[(12)]);
var inst_41138 = (state_41195[(13)]);
var inst_41139 = (state_41195[(14)]);
var inst_41137 = (state_41195[(16)]);
var inst_41144 = cljs.core._nth.call(null,inst_41137,inst_41139);
var inst_41145 = cljs.core.async.muxch_STAR_.call(null,inst_41144);
var inst_41146 = cljs.core.async.close_BANG_.call(null,inst_41145);
var inst_41147 = (inst_41139 + (1));
var tmp41225 = inst_41136;
var tmp41226 = inst_41138;
var tmp41227 = inst_41137;
var inst_41136__$1 = tmp41225;
var inst_41137__$1 = tmp41227;
var inst_41138__$1 = tmp41226;
var inst_41139__$1 = inst_41147;
var state_41195__$1 = (function (){var statearr_41231 = state_41195;
(statearr_41231[(12)] = inst_41136__$1);

(statearr_41231[(13)] = inst_41138__$1);

(statearr_41231[(14)] = inst_41139__$1);

(statearr_41231[(17)] = inst_41146);

(statearr_41231[(16)] = inst_41137__$1);

return statearr_41231;
})();
var statearr_41232_41272 = state_41195__$1;
(statearr_41232_41272[(2)] = null);

(statearr_41232_41272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (18))){
var inst_41165 = (state_41195[(2)]);
var state_41195__$1 = state_41195;
var statearr_41233_41273 = state_41195__$1;
(statearr_41233_41273[(2)] = inst_41165);

(statearr_41233_41273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41196 === (8))){
var inst_41138 = (state_41195[(13)]);
var inst_41139 = (state_41195[(14)]);
var inst_41141 = (inst_41139 < inst_41138);
var inst_41142 = inst_41141;
var state_41195__$1 = state_41195;
if(cljs.core.truth_(inst_41142)){
var statearr_41234_41274 = state_41195__$1;
(statearr_41234_41274[(1)] = (10));

} else {
var statearr_41235_41275 = state_41195__$1;
(statearr_41235_41275[(1)] = (11));

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
});})(c__39348__auto___41247,mults,ensure_mult,p))
;
return ((function (switch__39236__auto__,c__39348__auto___41247,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_41239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41239[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_41239[(1)] = (1));

return statearr_41239;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_41195){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_41195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e41240){if((e41240 instanceof Object)){
var ex__39240__auto__ = e41240;
var statearr_41241_41276 = state_41195;
(statearr_41241_41276[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41277 = state_41195;
state_41195 = G__41277;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_41195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_41195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___41247,mults,ensure_mult,p))
})();
var state__39350__auto__ = (function (){var statearr_41242 = f__39349__auto__.call(null);
(statearr_41242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___41247);

return statearr_41242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___41247,mults,ensure_mult,p))
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
var args41278 = [];
var len__38239__auto___41281 = arguments.length;
var i__38240__auto___41282 = (0);
while(true){
if((i__38240__auto___41282 < len__38239__auto___41281)){
args41278.push((arguments[i__38240__auto___41282]));

var G__41283 = (i__38240__auto___41282 + (1));
i__38240__auto___41282 = G__41283;
continue;
} else {
}
break;
}

var G__41280 = args41278.length;
switch (G__41280) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41278.length)].join('')));

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
var args41285 = [];
var len__38239__auto___41288 = arguments.length;
var i__38240__auto___41289 = (0);
while(true){
if((i__38240__auto___41289 < len__38239__auto___41288)){
args41285.push((arguments[i__38240__auto___41289]));

var G__41290 = (i__38240__auto___41289 + (1));
i__38240__auto___41289 = G__41290;
continue;
} else {
}
break;
}

var G__41287 = args41285.length;
switch (G__41287) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41285.length)].join('')));

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
var args41292 = [];
var len__38239__auto___41363 = arguments.length;
var i__38240__auto___41364 = (0);
while(true){
if((i__38240__auto___41364 < len__38239__auto___41363)){
args41292.push((arguments[i__38240__auto___41364]));

var G__41365 = (i__38240__auto___41364 + (1));
i__38240__auto___41364 = G__41365;
continue;
} else {
}
break;
}

var G__41294 = args41292.length;
switch (G__41294) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41292.length)].join('')));

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
var c__39348__auto___41367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___41367,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___41367,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41333){
var state_val_41334 = (state_41333[(1)]);
if((state_val_41334 === (7))){
var state_41333__$1 = state_41333;
var statearr_41335_41368 = state_41333__$1;
(statearr_41335_41368[(2)] = null);

(statearr_41335_41368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (1))){
var state_41333__$1 = state_41333;
var statearr_41336_41369 = state_41333__$1;
(statearr_41336_41369[(2)] = null);

(statearr_41336_41369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (4))){
var inst_41297 = (state_41333[(7)]);
var inst_41299 = (inst_41297 < cnt);
var state_41333__$1 = state_41333;
if(cljs.core.truth_(inst_41299)){
var statearr_41337_41370 = state_41333__$1;
(statearr_41337_41370[(1)] = (6));

} else {
var statearr_41338_41371 = state_41333__$1;
(statearr_41338_41371[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (15))){
var inst_41329 = (state_41333[(2)]);
var state_41333__$1 = state_41333;
var statearr_41339_41372 = state_41333__$1;
(statearr_41339_41372[(2)] = inst_41329);

(statearr_41339_41372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (13))){
var inst_41322 = cljs.core.async.close_BANG_.call(null,out);
var state_41333__$1 = state_41333;
var statearr_41340_41373 = state_41333__$1;
(statearr_41340_41373[(2)] = inst_41322);

(statearr_41340_41373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (6))){
var state_41333__$1 = state_41333;
var statearr_41341_41374 = state_41333__$1;
(statearr_41341_41374[(2)] = null);

(statearr_41341_41374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (3))){
var inst_41331 = (state_41333[(2)]);
var state_41333__$1 = state_41333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41333__$1,inst_41331);
} else {
if((state_val_41334 === (12))){
var inst_41319 = (state_41333[(8)]);
var inst_41319__$1 = (state_41333[(2)]);
var inst_41320 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41319__$1);
var state_41333__$1 = (function (){var statearr_41342 = state_41333;
(statearr_41342[(8)] = inst_41319__$1);

return statearr_41342;
})();
if(cljs.core.truth_(inst_41320)){
var statearr_41343_41375 = state_41333__$1;
(statearr_41343_41375[(1)] = (13));

} else {
var statearr_41344_41376 = state_41333__$1;
(statearr_41344_41376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (2))){
var inst_41296 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41297 = (0);
var state_41333__$1 = (function (){var statearr_41345 = state_41333;
(statearr_41345[(7)] = inst_41297);

(statearr_41345[(9)] = inst_41296);

return statearr_41345;
})();
var statearr_41346_41377 = state_41333__$1;
(statearr_41346_41377[(2)] = null);

(statearr_41346_41377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (11))){
var inst_41297 = (state_41333[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41333,(10),Object,null,(9));
var inst_41306 = chs__$1.call(null,inst_41297);
var inst_41307 = done.call(null,inst_41297);
var inst_41308 = cljs.core.async.take_BANG_.call(null,inst_41306,inst_41307);
var state_41333__$1 = state_41333;
var statearr_41347_41378 = state_41333__$1;
(statearr_41347_41378[(2)] = inst_41308);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (9))){
var inst_41297 = (state_41333[(7)]);
var inst_41310 = (state_41333[(2)]);
var inst_41311 = (inst_41297 + (1));
var inst_41297__$1 = inst_41311;
var state_41333__$1 = (function (){var statearr_41348 = state_41333;
(statearr_41348[(7)] = inst_41297__$1);

(statearr_41348[(10)] = inst_41310);

return statearr_41348;
})();
var statearr_41349_41379 = state_41333__$1;
(statearr_41349_41379[(2)] = null);

(statearr_41349_41379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (5))){
var inst_41317 = (state_41333[(2)]);
var state_41333__$1 = (function (){var statearr_41350 = state_41333;
(statearr_41350[(11)] = inst_41317);

return statearr_41350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41333__$1,(12),dchan);
} else {
if((state_val_41334 === (14))){
var inst_41319 = (state_41333[(8)]);
var inst_41324 = cljs.core.apply.call(null,f,inst_41319);
var state_41333__$1 = state_41333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41333__$1,(16),out,inst_41324);
} else {
if((state_val_41334 === (16))){
var inst_41326 = (state_41333[(2)]);
var state_41333__$1 = (function (){var statearr_41351 = state_41333;
(statearr_41351[(12)] = inst_41326);

return statearr_41351;
})();
var statearr_41352_41380 = state_41333__$1;
(statearr_41352_41380[(2)] = null);

(statearr_41352_41380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (10))){
var inst_41301 = (state_41333[(2)]);
var inst_41302 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41333__$1 = (function (){var statearr_41353 = state_41333;
(statearr_41353[(13)] = inst_41301);

return statearr_41353;
})();
var statearr_41354_41381 = state_41333__$1;
(statearr_41354_41381[(2)] = inst_41302);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41334 === (8))){
var inst_41315 = (state_41333[(2)]);
var state_41333__$1 = state_41333;
var statearr_41355_41382 = state_41333__$1;
(statearr_41355_41382[(2)] = inst_41315);

(statearr_41355_41382[(1)] = (5));


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
});})(c__39348__auto___41367,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__39236__auto__,c__39348__auto___41367,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_41359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41359[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_41359[(1)] = (1));

return statearr_41359;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_41333){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_41333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e41360){if((e41360 instanceof Object)){
var ex__39240__auto__ = e41360;
var statearr_41361_41383 = state_41333;
(statearr_41361_41383[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41384 = state_41333;
state_41333 = G__41384;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_41333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_41333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___41367,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__39350__auto__ = (function (){var statearr_41362 = f__39349__auto__.call(null);
(statearr_41362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___41367);

return statearr_41362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___41367,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args41386 = [];
var len__38239__auto___41442 = arguments.length;
var i__38240__auto___41443 = (0);
while(true){
if((i__38240__auto___41443 < len__38239__auto___41442)){
args41386.push((arguments[i__38240__auto___41443]));

var G__41444 = (i__38240__auto___41443 + (1));
i__38240__auto___41443 = G__41444;
continue;
} else {
}
break;
}

var G__41388 = args41386.length;
switch (G__41388) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41386.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39348__auto___41446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___41446,out){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___41446,out){
return (function (state_41418){
var state_val_41419 = (state_41418[(1)]);
if((state_val_41419 === (7))){
var inst_41397 = (state_41418[(7)]);
var inst_41398 = (state_41418[(8)]);
var inst_41397__$1 = (state_41418[(2)]);
var inst_41398__$1 = cljs.core.nth.call(null,inst_41397__$1,(0),null);
var inst_41399 = cljs.core.nth.call(null,inst_41397__$1,(1),null);
var inst_41400 = (inst_41398__$1 == null);
var state_41418__$1 = (function (){var statearr_41420 = state_41418;
(statearr_41420[(9)] = inst_41399);

(statearr_41420[(7)] = inst_41397__$1);

(statearr_41420[(8)] = inst_41398__$1);

return statearr_41420;
})();
if(cljs.core.truth_(inst_41400)){
var statearr_41421_41447 = state_41418__$1;
(statearr_41421_41447[(1)] = (8));

} else {
var statearr_41422_41448 = state_41418__$1;
(statearr_41422_41448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (1))){
var inst_41389 = cljs.core.vec.call(null,chs);
var inst_41390 = inst_41389;
var state_41418__$1 = (function (){var statearr_41423 = state_41418;
(statearr_41423[(10)] = inst_41390);

return statearr_41423;
})();
var statearr_41424_41449 = state_41418__$1;
(statearr_41424_41449[(2)] = null);

(statearr_41424_41449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (4))){
var inst_41390 = (state_41418[(10)]);
var state_41418__$1 = state_41418;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41418__$1,(7),inst_41390);
} else {
if((state_val_41419 === (6))){
var inst_41414 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41425_41450 = state_41418__$1;
(statearr_41425_41450[(2)] = inst_41414);

(statearr_41425_41450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (3))){
var inst_41416 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41418__$1,inst_41416);
} else {
if((state_val_41419 === (2))){
var inst_41390 = (state_41418[(10)]);
var inst_41392 = cljs.core.count.call(null,inst_41390);
var inst_41393 = (inst_41392 > (0));
var state_41418__$1 = state_41418;
if(cljs.core.truth_(inst_41393)){
var statearr_41427_41451 = state_41418__$1;
(statearr_41427_41451[(1)] = (4));

} else {
var statearr_41428_41452 = state_41418__$1;
(statearr_41428_41452[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (11))){
var inst_41390 = (state_41418[(10)]);
var inst_41407 = (state_41418[(2)]);
var tmp41426 = inst_41390;
var inst_41390__$1 = tmp41426;
var state_41418__$1 = (function (){var statearr_41429 = state_41418;
(statearr_41429[(11)] = inst_41407);

(statearr_41429[(10)] = inst_41390__$1);

return statearr_41429;
})();
var statearr_41430_41453 = state_41418__$1;
(statearr_41430_41453[(2)] = null);

(statearr_41430_41453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (9))){
var inst_41398 = (state_41418[(8)]);
var state_41418__$1 = state_41418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41418__$1,(11),out,inst_41398);
} else {
if((state_val_41419 === (5))){
var inst_41412 = cljs.core.async.close_BANG_.call(null,out);
var state_41418__$1 = state_41418;
var statearr_41431_41454 = state_41418__$1;
(statearr_41431_41454[(2)] = inst_41412);

(statearr_41431_41454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (10))){
var inst_41410 = (state_41418[(2)]);
var state_41418__$1 = state_41418;
var statearr_41432_41455 = state_41418__$1;
(statearr_41432_41455[(2)] = inst_41410);

(statearr_41432_41455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41419 === (8))){
var inst_41399 = (state_41418[(9)]);
var inst_41397 = (state_41418[(7)]);
var inst_41398 = (state_41418[(8)]);
var inst_41390 = (state_41418[(10)]);
var inst_41402 = (function (){var cs = inst_41390;
var vec__41395 = inst_41397;
var v = inst_41398;
var c = inst_41399;
return ((function (cs,vec__41395,v,c,inst_41399,inst_41397,inst_41398,inst_41390,state_val_41419,c__39348__auto___41446,out){
return (function (p1__41385_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41385_SHARP_);
});
;})(cs,vec__41395,v,c,inst_41399,inst_41397,inst_41398,inst_41390,state_val_41419,c__39348__auto___41446,out))
})();
var inst_41403 = cljs.core.filterv.call(null,inst_41402,inst_41390);
var inst_41390__$1 = inst_41403;
var state_41418__$1 = (function (){var statearr_41433 = state_41418;
(statearr_41433[(10)] = inst_41390__$1);

return statearr_41433;
})();
var statearr_41434_41456 = state_41418__$1;
(statearr_41434_41456[(2)] = null);

(statearr_41434_41456[(1)] = (2));


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
});})(c__39348__auto___41446,out))
;
return ((function (switch__39236__auto__,c__39348__auto___41446,out){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_41438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41438[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_41438[(1)] = (1));

return statearr_41438;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_41418){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_41418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e41439){if((e41439 instanceof Object)){
var ex__39240__auto__ = e41439;
var statearr_41440_41457 = state_41418;
(statearr_41440_41457[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41458 = state_41418;
state_41418 = G__41458;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_41418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_41418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___41446,out))
})();
var state__39350__auto__ = (function (){var statearr_41441 = f__39349__auto__.call(null);
(statearr_41441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___41446);

return statearr_41441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___41446,out))
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
var args41459 = [];
var len__38239__auto___41508 = arguments.length;
var i__38240__auto___41509 = (0);
while(true){
if((i__38240__auto___41509 < len__38239__auto___41508)){
args41459.push((arguments[i__38240__auto___41509]));

var G__41510 = (i__38240__auto___41509 + (1));
i__38240__auto___41509 = G__41510;
continue;
} else {
}
break;
}

var G__41461 = args41459.length;
switch (G__41461) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41459.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39348__auto___41512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___41512,out){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___41512,out){
return (function (state_41485){
var state_val_41486 = (state_41485[(1)]);
if((state_val_41486 === (7))){
var inst_41467 = (state_41485[(7)]);
var inst_41467__$1 = (state_41485[(2)]);
var inst_41468 = (inst_41467__$1 == null);
var inst_41469 = cljs.core.not.call(null,inst_41468);
var state_41485__$1 = (function (){var statearr_41487 = state_41485;
(statearr_41487[(7)] = inst_41467__$1);

return statearr_41487;
})();
if(inst_41469){
var statearr_41488_41513 = state_41485__$1;
(statearr_41488_41513[(1)] = (8));

} else {
var statearr_41489_41514 = state_41485__$1;
(statearr_41489_41514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (1))){
var inst_41462 = (0);
var state_41485__$1 = (function (){var statearr_41490 = state_41485;
(statearr_41490[(8)] = inst_41462);

return statearr_41490;
})();
var statearr_41491_41515 = state_41485__$1;
(statearr_41491_41515[(2)] = null);

(statearr_41491_41515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (4))){
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41485__$1,(7),ch);
} else {
if((state_val_41486 === (6))){
var inst_41480 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
var statearr_41492_41516 = state_41485__$1;
(statearr_41492_41516[(2)] = inst_41480);

(statearr_41492_41516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (3))){
var inst_41482 = (state_41485[(2)]);
var inst_41483 = cljs.core.async.close_BANG_.call(null,out);
var state_41485__$1 = (function (){var statearr_41493 = state_41485;
(statearr_41493[(9)] = inst_41482);

return statearr_41493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41485__$1,inst_41483);
} else {
if((state_val_41486 === (2))){
var inst_41462 = (state_41485[(8)]);
var inst_41464 = (inst_41462 < n);
var state_41485__$1 = state_41485;
if(cljs.core.truth_(inst_41464)){
var statearr_41494_41517 = state_41485__$1;
(statearr_41494_41517[(1)] = (4));

} else {
var statearr_41495_41518 = state_41485__$1;
(statearr_41495_41518[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (11))){
var inst_41462 = (state_41485[(8)]);
var inst_41472 = (state_41485[(2)]);
var inst_41473 = (inst_41462 + (1));
var inst_41462__$1 = inst_41473;
var state_41485__$1 = (function (){var statearr_41496 = state_41485;
(statearr_41496[(8)] = inst_41462__$1);

(statearr_41496[(10)] = inst_41472);

return statearr_41496;
})();
var statearr_41497_41519 = state_41485__$1;
(statearr_41497_41519[(2)] = null);

(statearr_41497_41519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (9))){
var state_41485__$1 = state_41485;
var statearr_41498_41520 = state_41485__$1;
(statearr_41498_41520[(2)] = null);

(statearr_41498_41520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (5))){
var state_41485__$1 = state_41485;
var statearr_41499_41521 = state_41485__$1;
(statearr_41499_41521[(2)] = null);

(statearr_41499_41521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (10))){
var inst_41477 = (state_41485[(2)]);
var state_41485__$1 = state_41485;
var statearr_41500_41522 = state_41485__$1;
(statearr_41500_41522[(2)] = inst_41477);

(statearr_41500_41522[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41486 === (8))){
var inst_41467 = (state_41485[(7)]);
var state_41485__$1 = state_41485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41485__$1,(11),out,inst_41467);
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
});})(c__39348__auto___41512,out))
;
return ((function (switch__39236__auto__,c__39348__auto___41512,out){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_41504 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41504[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_41504[(1)] = (1));

return statearr_41504;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_41485){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_41485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e41505){if((e41505 instanceof Object)){
var ex__39240__auto__ = e41505;
var statearr_41506_41523 = state_41485;
(statearr_41506_41523[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41524 = state_41485;
state_41485 = G__41524;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_41485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_41485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___41512,out))
})();
var state__39350__auto__ = (function (){var statearr_41507 = f__39349__auto__.call(null);
(statearr_41507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___41512);

return statearr_41507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___41512,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41532 = (function (map_LT_,f,ch,meta41533){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41533 = meta41533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41534,meta41533__$1){
var self__ = this;
var _41534__$1 = this;
return (new cljs.core.async.t_cljs$core$async41532(self__.map_LT_,self__.f,self__.ch,meta41533__$1));
});

cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41534){
var self__ = this;
var _41534__$1 = this;
return self__.meta41533;
});

cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41535 = (function (map_LT_,f,ch,meta41533,_,fn1,meta41536){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41533 = meta41533;
this._ = _;
this.fn1 = fn1;
this.meta41536 = meta41536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41537,meta41536__$1){
var self__ = this;
var _41537__$1 = this;
return (new cljs.core.async.t_cljs$core$async41535(self__.map_LT_,self__.f,self__.ch,self__.meta41533,self__._,self__.fn1,meta41536__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41537){
var self__ = this;
var _41537__$1 = this;
return self__.meta41536;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41525_SHARP_){
return f1.call(null,(((p1__41525_SHARP_ == null))?null:self__.f.call(null,p1__41525_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41535.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41533","meta41533",2059409973,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41532","cljs.core.async/t_cljs$core$async41532",-1075739317,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41536","meta41536",-1503908143,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41535";

cljs.core.async.t_cljs$core$async41535.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async41535");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41535 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41535(map_LT___$1,f__$1,ch__$1,meta41533__$1,___$2,fn1__$1,meta41536){
return (new cljs.core.async.t_cljs$core$async41535(map_LT___$1,f__$1,ch__$1,meta41533__$1,___$2,fn1__$1,meta41536));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41535(self__.map_LT_,self__.f,self__.ch,self__.meta41533,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__37169__auto__ = ret;
if(cljs.core.truth_(and__37169__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__37169__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41533","meta41533",2059409973,null)], null);
});

cljs.core.async.t_cljs$core$async41532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41532";

cljs.core.async.t_cljs$core$async41532.cljs$lang$ctorPrWriter = (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async41532");
});

cljs.core.async.__GT_t_cljs$core$async41532 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41532(map_LT___$1,f__$1,ch__$1,meta41533){
return (new cljs.core.async.t_cljs$core$async41532(map_LT___$1,f__$1,ch__$1,meta41533));
});

}

return (new cljs.core.async.t_cljs$core$async41532(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41541 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41541 = (function (map_GT_,f,ch,meta41542){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41542 = meta41542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41543,meta41542__$1){
var self__ = this;
var _41543__$1 = this;
return (new cljs.core.async.t_cljs$core$async41541(self__.map_GT_,self__.f,self__.ch,meta41542__$1));
});

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41543){
var self__ = this;
var _41543__$1 = this;
return self__.meta41542;
});

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41542","meta41542",-970245881,null)], null);
});

cljs.core.async.t_cljs$core$async41541.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41541";

cljs.core.async.t_cljs$core$async41541.cljs$lang$ctorPrWriter = (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async41541");
});

cljs.core.async.__GT_t_cljs$core$async41541 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41541(map_GT___$1,f__$1,ch__$1,meta41542){
return (new cljs.core.async.t_cljs$core$async41541(map_GT___$1,f__$1,ch__$1,meta41542));
});

}

return (new cljs.core.async.t_cljs$core$async41541(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41547 = (function (filter_GT_,p,ch,meta41548){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41548 = meta41548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41549,meta41548__$1){
var self__ = this;
var _41549__$1 = this;
return (new cljs.core.async.t_cljs$core$async41547(self__.filter_GT_,self__.p,self__.ch,meta41548__$1));
});

cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41549){
var self__ = this;
var _41549__$1 = this;
return self__.meta41548;
});

cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41547.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41548","meta41548",1687565624,null)], null);
});

cljs.core.async.t_cljs$core$async41547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41547";

cljs.core.async.t_cljs$core$async41547.cljs$lang$ctorPrWriter = (function (this__37779__auto__,writer__37780__auto__,opt__37781__auto__){
return cljs.core._write.call(null,writer__37780__auto__,"cljs.core.async/t_cljs$core$async41547");
});

cljs.core.async.__GT_t_cljs$core$async41547 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41547(filter_GT___$1,p__$1,ch__$1,meta41548){
return (new cljs.core.async.t_cljs$core$async41547(filter_GT___$1,p__$1,ch__$1,meta41548));
});

}

return (new cljs.core.async.t_cljs$core$async41547(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args41550 = [];
var len__38239__auto___41594 = arguments.length;
var i__38240__auto___41595 = (0);
while(true){
if((i__38240__auto___41595 < len__38239__auto___41594)){
args41550.push((arguments[i__38240__auto___41595]));

var G__41596 = (i__38240__auto___41595 + (1));
i__38240__auto___41595 = G__41596;
continue;
} else {
}
break;
}

var G__41552 = args41550.length;
switch (G__41552) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41550.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39348__auto___41598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___41598,out){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___41598,out){
return (function (state_41573){
var state_val_41574 = (state_41573[(1)]);
if((state_val_41574 === (7))){
var inst_41569 = (state_41573[(2)]);
var state_41573__$1 = state_41573;
var statearr_41575_41599 = state_41573__$1;
(statearr_41575_41599[(2)] = inst_41569);

(statearr_41575_41599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41574 === (1))){
var state_41573__$1 = state_41573;
var statearr_41576_41600 = state_41573__$1;
(statearr_41576_41600[(2)] = null);

(statearr_41576_41600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41574 === (4))){
var inst_41555 = (state_41573[(7)]);
var inst_41555__$1 = (state_41573[(2)]);
var inst_41556 = (inst_41555__$1 == null);
var state_41573__$1 = (function (){var statearr_41577 = state_41573;
(statearr_41577[(7)] = inst_41555__$1);

return statearr_41577;
})();
if(cljs.core.truth_(inst_41556)){
var statearr_41578_41601 = state_41573__$1;
(statearr_41578_41601[(1)] = (5));

} else {
var statearr_41579_41602 = state_41573__$1;
(statearr_41579_41602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41574 === (6))){
var inst_41555 = (state_41573[(7)]);
var inst_41560 = p.call(null,inst_41555);
var state_41573__$1 = state_41573;
if(cljs.core.truth_(inst_41560)){
var statearr_41580_41603 = state_41573__$1;
(statearr_41580_41603[(1)] = (8));

} else {
var statearr_41581_41604 = state_41573__$1;
(statearr_41581_41604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41574 === (3))){
var inst_41571 = (state_41573[(2)]);
var state_41573__$1 = state_41573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41573__$1,inst_41571);
} else {
if((state_val_41574 === (2))){
var state_41573__$1 = state_41573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41573__$1,(4),ch);
} else {
if((state_val_41574 === (11))){
var inst_41563 = (state_41573[(2)]);
var state_41573__$1 = state_41573;
var statearr_41582_41605 = state_41573__$1;
(statearr_41582_41605[(2)] = inst_41563);

(statearr_41582_41605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41574 === (9))){
var state_41573__$1 = state_41573;
var statearr_41583_41606 = state_41573__$1;
(statearr_41583_41606[(2)] = null);

(statearr_41583_41606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41574 === (5))){
var inst_41558 = cljs.core.async.close_BANG_.call(null,out);
var state_41573__$1 = state_41573;
var statearr_41584_41607 = state_41573__$1;
(statearr_41584_41607[(2)] = inst_41558);

(statearr_41584_41607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41574 === (10))){
var inst_41566 = (state_41573[(2)]);
var state_41573__$1 = (function (){var statearr_41585 = state_41573;
(statearr_41585[(8)] = inst_41566);

return statearr_41585;
})();
var statearr_41586_41608 = state_41573__$1;
(statearr_41586_41608[(2)] = null);

(statearr_41586_41608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41574 === (8))){
var inst_41555 = (state_41573[(7)]);
var state_41573__$1 = state_41573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41573__$1,(11),out,inst_41555);
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
});})(c__39348__auto___41598,out))
;
return ((function (switch__39236__auto__,c__39348__auto___41598,out){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_41590 = [null,null,null,null,null,null,null,null,null];
(statearr_41590[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_41590[(1)] = (1));

return statearr_41590;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_41573){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_41573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e41591){if((e41591 instanceof Object)){
var ex__39240__auto__ = e41591;
var statearr_41592_41609 = state_41573;
(statearr_41592_41609[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41610 = state_41573;
state_41573 = G__41610;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_41573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_41573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___41598,out))
})();
var state__39350__auto__ = (function (){var statearr_41593 = f__39349__auto__.call(null);
(statearr_41593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___41598);

return statearr_41593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___41598,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args41611 = [];
var len__38239__auto___41614 = arguments.length;
var i__38240__auto___41615 = (0);
while(true){
if((i__38240__auto___41615 < len__38239__auto___41614)){
args41611.push((arguments[i__38240__auto___41615]));

var G__41616 = (i__38240__auto___41615 + (1));
i__38240__auto___41615 = G__41616;
continue;
} else {
}
break;
}

var G__41613 = args41611.length;
switch (G__41613) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41611.length)].join('')));

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
var c__39348__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto__){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto__){
return (function (state_41783){
var state_val_41784 = (state_41783[(1)]);
if((state_val_41784 === (7))){
var inst_41779 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
var statearr_41785_41826 = state_41783__$1;
(statearr_41785_41826[(2)] = inst_41779);

(statearr_41785_41826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (20))){
var inst_41749 = (state_41783[(7)]);
var inst_41760 = (state_41783[(2)]);
var inst_41761 = cljs.core.next.call(null,inst_41749);
var inst_41735 = inst_41761;
var inst_41736 = null;
var inst_41737 = (0);
var inst_41738 = (0);
var state_41783__$1 = (function (){var statearr_41786 = state_41783;
(statearr_41786[(8)] = inst_41737);

(statearr_41786[(9)] = inst_41736);

(statearr_41786[(10)] = inst_41735);

(statearr_41786[(11)] = inst_41738);

(statearr_41786[(12)] = inst_41760);

return statearr_41786;
})();
var statearr_41787_41827 = state_41783__$1;
(statearr_41787_41827[(2)] = null);

(statearr_41787_41827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (1))){
var state_41783__$1 = state_41783;
var statearr_41788_41828 = state_41783__$1;
(statearr_41788_41828[(2)] = null);

(statearr_41788_41828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (4))){
var inst_41724 = (state_41783[(13)]);
var inst_41724__$1 = (state_41783[(2)]);
var inst_41725 = (inst_41724__$1 == null);
var state_41783__$1 = (function (){var statearr_41789 = state_41783;
(statearr_41789[(13)] = inst_41724__$1);

return statearr_41789;
})();
if(cljs.core.truth_(inst_41725)){
var statearr_41790_41829 = state_41783__$1;
(statearr_41790_41829[(1)] = (5));

} else {
var statearr_41791_41830 = state_41783__$1;
(statearr_41791_41830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (15))){
var state_41783__$1 = state_41783;
var statearr_41795_41831 = state_41783__$1;
(statearr_41795_41831[(2)] = null);

(statearr_41795_41831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (21))){
var state_41783__$1 = state_41783;
var statearr_41796_41832 = state_41783__$1;
(statearr_41796_41832[(2)] = null);

(statearr_41796_41832[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (13))){
var inst_41737 = (state_41783[(8)]);
var inst_41736 = (state_41783[(9)]);
var inst_41735 = (state_41783[(10)]);
var inst_41738 = (state_41783[(11)]);
var inst_41745 = (state_41783[(2)]);
var inst_41746 = (inst_41738 + (1));
var tmp41792 = inst_41737;
var tmp41793 = inst_41736;
var tmp41794 = inst_41735;
var inst_41735__$1 = tmp41794;
var inst_41736__$1 = tmp41793;
var inst_41737__$1 = tmp41792;
var inst_41738__$1 = inst_41746;
var state_41783__$1 = (function (){var statearr_41797 = state_41783;
(statearr_41797[(8)] = inst_41737__$1);

(statearr_41797[(9)] = inst_41736__$1);

(statearr_41797[(14)] = inst_41745);

(statearr_41797[(10)] = inst_41735__$1);

(statearr_41797[(11)] = inst_41738__$1);

return statearr_41797;
})();
var statearr_41798_41833 = state_41783__$1;
(statearr_41798_41833[(2)] = null);

(statearr_41798_41833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (22))){
var state_41783__$1 = state_41783;
var statearr_41799_41834 = state_41783__$1;
(statearr_41799_41834[(2)] = null);

(statearr_41799_41834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (6))){
var inst_41724 = (state_41783[(13)]);
var inst_41733 = f.call(null,inst_41724);
var inst_41734 = cljs.core.seq.call(null,inst_41733);
var inst_41735 = inst_41734;
var inst_41736 = null;
var inst_41737 = (0);
var inst_41738 = (0);
var state_41783__$1 = (function (){var statearr_41800 = state_41783;
(statearr_41800[(8)] = inst_41737);

(statearr_41800[(9)] = inst_41736);

(statearr_41800[(10)] = inst_41735);

(statearr_41800[(11)] = inst_41738);

return statearr_41800;
})();
var statearr_41801_41835 = state_41783__$1;
(statearr_41801_41835[(2)] = null);

(statearr_41801_41835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (17))){
var inst_41749 = (state_41783[(7)]);
var inst_41753 = cljs.core.chunk_first.call(null,inst_41749);
var inst_41754 = cljs.core.chunk_rest.call(null,inst_41749);
var inst_41755 = cljs.core.count.call(null,inst_41753);
var inst_41735 = inst_41754;
var inst_41736 = inst_41753;
var inst_41737 = inst_41755;
var inst_41738 = (0);
var state_41783__$1 = (function (){var statearr_41802 = state_41783;
(statearr_41802[(8)] = inst_41737);

(statearr_41802[(9)] = inst_41736);

(statearr_41802[(10)] = inst_41735);

(statearr_41802[(11)] = inst_41738);

return statearr_41802;
})();
var statearr_41803_41836 = state_41783__$1;
(statearr_41803_41836[(2)] = null);

(statearr_41803_41836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (3))){
var inst_41781 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41783__$1,inst_41781);
} else {
if((state_val_41784 === (12))){
var inst_41769 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
var statearr_41804_41837 = state_41783__$1;
(statearr_41804_41837[(2)] = inst_41769);

(statearr_41804_41837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (2))){
var state_41783__$1 = state_41783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41783__$1,(4),in$);
} else {
if((state_val_41784 === (23))){
var inst_41777 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
var statearr_41805_41838 = state_41783__$1;
(statearr_41805_41838[(2)] = inst_41777);

(statearr_41805_41838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (19))){
var inst_41764 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
var statearr_41806_41839 = state_41783__$1;
(statearr_41806_41839[(2)] = inst_41764);

(statearr_41806_41839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (11))){
var inst_41749 = (state_41783[(7)]);
var inst_41735 = (state_41783[(10)]);
var inst_41749__$1 = cljs.core.seq.call(null,inst_41735);
var state_41783__$1 = (function (){var statearr_41807 = state_41783;
(statearr_41807[(7)] = inst_41749__$1);

return statearr_41807;
})();
if(inst_41749__$1){
var statearr_41808_41840 = state_41783__$1;
(statearr_41808_41840[(1)] = (14));

} else {
var statearr_41809_41841 = state_41783__$1;
(statearr_41809_41841[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (9))){
var inst_41771 = (state_41783[(2)]);
var inst_41772 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41783__$1 = (function (){var statearr_41810 = state_41783;
(statearr_41810[(15)] = inst_41771);

return statearr_41810;
})();
if(cljs.core.truth_(inst_41772)){
var statearr_41811_41842 = state_41783__$1;
(statearr_41811_41842[(1)] = (21));

} else {
var statearr_41812_41843 = state_41783__$1;
(statearr_41812_41843[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (5))){
var inst_41727 = cljs.core.async.close_BANG_.call(null,out);
var state_41783__$1 = state_41783;
var statearr_41813_41844 = state_41783__$1;
(statearr_41813_41844[(2)] = inst_41727);

(statearr_41813_41844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (14))){
var inst_41749 = (state_41783[(7)]);
var inst_41751 = cljs.core.chunked_seq_QMARK_.call(null,inst_41749);
var state_41783__$1 = state_41783;
if(inst_41751){
var statearr_41814_41845 = state_41783__$1;
(statearr_41814_41845[(1)] = (17));

} else {
var statearr_41815_41846 = state_41783__$1;
(statearr_41815_41846[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (16))){
var inst_41767 = (state_41783[(2)]);
var state_41783__$1 = state_41783;
var statearr_41816_41847 = state_41783__$1;
(statearr_41816_41847[(2)] = inst_41767);

(statearr_41816_41847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41784 === (10))){
var inst_41736 = (state_41783[(9)]);
var inst_41738 = (state_41783[(11)]);
var inst_41743 = cljs.core._nth.call(null,inst_41736,inst_41738);
var state_41783__$1 = state_41783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41783__$1,(13),out,inst_41743);
} else {
if((state_val_41784 === (18))){
var inst_41749 = (state_41783[(7)]);
var inst_41758 = cljs.core.first.call(null,inst_41749);
var state_41783__$1 = state_41783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41783__$1,(20),out,inst_41758);
} else {
if((state_val_41784 === (8))){
var inst_41737 = (state_41783[(8)]);
var inst_41738 = (state_41783[(11)]);
var inst_41740 = (inst_41738 < inst_41737);
var inst_41741 = inst_41740;
var state_41783__$1 = state_41783;
if(cljs.core.truth_(inst_41741)){
var statearr_41817_41848 = state_41783__$1;
(statearr_41817_41848[(1)] = (10));

} else {
var statearr_41818_41849 = state_41783__$1;
(statearr_41818_41849[(1)] = (11));

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
});})(c__39348__auto__))
;
return ((function (switch__39236__auto__,c__39348__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39237__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39237__auto____0 = (function (){
var statearr_41822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41822[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39237__auto__);

(statearr_41822[(1)] = (1));

return statearr_41822;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39237__auto____1 = (function (state_41783){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_41783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e41823){if((e41823 instanceof Object)){
var ex__39240__auto__ = e41823;
var statearr_41824_41850 = state_41783;
(statearr_41824_41850[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41851 = state_41783;
state_41783 = G__41851;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39237__auto__ = function(state_41783){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39237__auto____1.call(this,state_41783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39237__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39237__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto__))
})();
var state__39350__auto__ = (function (){var statearr_41825 = f__39349__auto__.call(null);
(statearr_41825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto__);

return statearr_41825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto__))
);

return c__39348__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args41852 = [];
var len__38239__auto___41855 = arguments.length;
var i__38240__auto___41856 = (0);
while(true){
if((i__38240__auto___41856 < len__38239__auto___41855)){
args41852.push((arguments[i__38240__auto___41856]));

var G__41857 = (i__38240__auto___41856 + (1));
i__38240__auto___41856 = G__41857;
continue;
} else {
}
break;
}

var G__41854 = args41852.length;
switch (G__41854) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41852.length)].join('')));

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
var args41859 = [];
var len__38239__auto___41862 = arguments.length;
var i__38240__auto___41863 = (0);
while(true){
if((i__38240__auto___41863 < len__38239__auto___41862)){
args41859.push((arguments[i__38240__auto___41863]));

var G__41864 = (i__38240__auto___41863 + (1));
i__38240__auto___41863 = G__41864;
continue;
} else {
}
break;
}

var G__41861 = args41859.length;
switch (G__41861) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41859.length)].join('')));

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
var args41866 = [];
var len__38239__auto___41917 = arguments.length;
var i__38240__auto___41918 = (0);
while(true){
if((i__38240__auto___41918 < len__38239__auto___41917)){
args41866.push((arguments[i__38240__auto___41918]));

var G__41919 = (i__38240__auto___41918 + (1));
i__38240__auto___41918 = G__41919;
continue;
} else {
}
break;
}

var G__41868 = args41866.length;
switch (G__41868) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41866.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39348__auto___41921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___41921,out){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___41921,out){
return (function (state_41892){
var state_val_41893 = (state_41892[(1)]);
if((state_val_41893 === (7))){
var inst_41887 = (state_41892[(2)]);
var state_41892__$1 = state_41892;
var statearr_41894_41922 = state_41892__$1;
(statearr_41894_41922[(2)] = inst_41887);

(statearr_41894_41922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (1))){
var inst_41869 = null;
var state_41892__$1 = (function (){var statearr_41895 = state_41892;
(statearr_41895[(7)] = inst_41869);

return statearr_41895;
})();
var statearr_41896_41923 = state_41892__$1;
(statearr_41896_41923[(2)] = null);

(statearr_41896_41923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (4))){
var inst_41872 = (state_41892[(8)]);
var inst_41872__$1 = (state_41892[(2)]);
var inst_41873 = (inst_41872__$1 == null);
var inst_41874 = cljs.core.not.call(null,inst_41873);
var state_41892__$1 = (function (){var statearr_41897 = state_41892;
(statearr_41897[(8)] = inst_41872__$1);

return statearr_41897;
})();
if(inst_41874){
var statearr_41898_41924 = state_41892__$1;
(statearr_41898_41924[(1)] = (5));

} else {
var statearr_41899_41925 = state_41892__$1;
(statearr_41899_41925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (6))){
var state_41892__$1 = state_41892;
var statearr_41900_41926 = state_41892__$1;
(statearr_41900_41926[(2)] = null);

(statearr_41900_41926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (3))){
var inst_41889 = (state_41892[(2)]);
var inst_41890 = cljs.core.async.close_BANG_.call(null,out);
var state_41892__$1 = (function (){var statearr_41901 = state_41892;
(statearr_41901[(9)] = inst_41889);

return statearr_41901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41892__$1,inst_41890);
} else {
if((state_val_41893 === (2))){
var state_41892__$1 = state_41892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41892__$1,(4),ch);
} else {
if((state_val_41893 === (11))){
var inst_41872 = (state_41892[(8)]);
var inst_41881 = (state_41892[(2)]);
var inst_41869 = inst_41872;
var state_41892__$1 = (function (){var statearr_41902 = state_41892;
(statearr_41902[(7)] = inst_41869);

(statearr_41902[(10)] = inst_41881);

return statearr_41902;
})();
var statearr_41903_41927 = state_41892__$1;
(statearr_41903_41927[(2)] = null);

(statearr_41903_41927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (9))){
var inst_41872 = (state_41892[(8)]);
var state_41892__$1 = state_41892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41892__$1,(11),out,inst_41872);
} else {
if((state_val_41893 === (5))){
var inst_41869 = (state_41892[(7)]);
var inst_41872 = (state_41892[(8)]);
var inst_41876 = cljs.core._EQ_.call(null,inst_41872,inst_41869);
var state_41892__$1 = state_41892;
if(inst_41876){
var statearr_41905_41928 = state_41892__$1;
(statearr_41905_41928[(1)] = (8));

} else {
var statearr_41906_41929 = state_41892__$1;
(statearr_41906_41929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (10))){
var inst_41884 = (state_41892[(2)]);
var state_41892__$1 = state_41892;
var statearr_41907_41930 = state_41892__$1;
(statearr_41907_41930[(2)] = inst_41884);

(statearr_41907_41930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41893 === (8))){
var inst_41869 = (state_41892[(7)]);
var tmp41904 = inst_41869;
var inst_41869__$1 = tmp41904;
var state_41892__$1 = (function (){var statearr_41908 = state_41892;
(statearr_41908[(7)] = inst_41869__$1);

return statearr_41908;
})();
var statearr_41909_41931 = state_41892__$1;
(statearr_41909_41931[(2)] = null);

(statearr_41909_41931[(1)] = (2));


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
});})(c__39348__auto___41921,out))
;
return ((function (switch__39236__auto__,c__39348__auto___41921,out){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_41913 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41913[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_41913[(1)] = (1));

return statearr_41913;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_41892){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_41892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e41914){if((e41914 instanceof Object)){
var ex__39240__auto__ = e41914;
var statearr_41915_41932 = state_41892;
(statearr_41915_41932[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41933 = state_41892;
state_41892 = G__41933;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_41892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_41892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___41921,out))
})();
var state__39350__auto__ = (function (){var statearr_41916 = f__39349__auto__.call(null);
(statearr_41916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___41921);

return statearr_41916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___41921,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41934 = [];
var len__38239__auto___42004 = arguments.length;
var i__38240__auto___42005 = (0);
while(true){
if((i__38240__auto___42005 < len__38239__auto___42004)){
args41934.push((arguments[i__38240__auto___42005]));

var G__42006 = (i__38240__auto___42005 + (1));
i__38240__auto___42005 = G__42006;
continue;
} else {
}
break;
}

var G__41936 = args41934.length;
switch (G__41936) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41934.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39348__auto___42008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___42008,out){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___42008,out){
return (function (state_41974){
var state_val_41975 = (state_41974[(1)]);
if((state_val_41975 === (7))){
var inst_41970 = (state_41974[(2)]);
var state_41974__$1 = state_41974;
var statearr_41976_42009 = state_41974__$1;
(statearr_41976_42009[(2)] = inst_41970);

(statearr_41976_42009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (1))){
var inst_41937 = (new Array(n));
var inst_41938 = inst_41937;
var inst_41939 = (0);
var state_41974__$1 = (function (){var statearr_41977 = state_41974;
(statearr_41977[(7)] = inst_41938);

(statearr_41977[(8)] = inst_41939);

return statearr_41977;
})();
var statearr_41978_42010 = state_41974__$1;
(statearr_41978_42010[(2)] = null);

(statearr_41978_42010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (4))){
var inst_41942 = (state_41974[(9)]);
var inst_41942__$1 = (state_41974[(2)]);
var inst_41943 = (inst_41942__$1 == null);
var inst_41944 = cljs.core.not.call(null,inst_41943);
var state_41974__$1 = (function (){var statearr_41979 = state_41974;
(statearr_41979[(9)] = inst_41942__$1);

return statearr_41979;
})();
if(inst_41944){
var statearr_41980_42011 = state_41974__$1;
(statearr_41980_42011[(1)] = (5));

} else {
var statearr_41981_42012 = state_41974__$1;
(statearr_41981_42012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (15))){
var inst_41964 = (state_41974[(2)]);
var state_41974__$1 = state_41974;
var statearr_41982_42013 = state_41974__$1;
(statearr_41982_42013[(2)] = inst_41964);

(statearr_41982_42013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (13))){
var state_41974__$1 = state_41974;
var statearr_41983_42014 = state_41974__$1;
(statearr_41983_42014[(2)] = null);

(statearr_41983_42014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (6))){
var inst_41939 = (state_41974[(8)]);
var inst_41960 = (inst_41939 > (0));
var state_41974__$1 = state_41974;
if(cljs.core.truth_(inst_41960)){
var statearr_41984_42015 = state_41974__$1;
(statearr_41984_42015[(1)] = (12));

} else {
var statearr_41985_42016 = state_41974__$1;
(statearr_41985_42016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (3))){
var inst_41972 = (state_41974[(2)]);
var state_41974__$1 = state_41974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41974__$1,inst_41972);
} else {
if((state_val_41975 === (12))){
var inst_41938 = (state_41974[(7)]);
var inst_41962 = cljs.core.vec.call(null,inst_41938);
var state_41974__$1 = state_41974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41974__$1,(15),out,inst_41962);
} else {
if((state_val_41975 === (2))){
var state_41974__$1 = state_41974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41974__$1,(4),ch);
} else {
if((state_val_41975 === (11))){
var inst_41954 = (state_41974[(2)]);
var inst_41955 = (new Array(n));
var inst_41938 = inst_41955;
var inst_41939 = (0);
var state_41974__$1 = (function (){var statearr_41986 = state_41974;
(statearr_41986[(7)] = inst_41938);

(statearr_41986[(8)] = inst_41939);

(statearr_41986[(10)] = inst_41954);

return statearr_41986;
})();
var statearr_41987_42017 = state_41974__$1;
(statearr_41987_42017[(2)] = null);

(statearr_41987_42017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (9))){
var inst_41938 = (state_41974[(7)]);
var inst_41952 = cljs.core.vec.call(null,inst_41938);
var state_41974__$1 = state_41974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41974__$1,(11),out,inst_41952);
} else {
if((state_val_41975 === (5))){
var inst_41938 = (state_41974[(7)]);
var inst_41942 = (state_41974[(9)]);
var inst_41947 = (state_41974[(11)]);
var inst_41939 = (state_41974[(8)]);
var inst_41946 = (inst_41938[inst_41939] = inst_41942);
var inst_41947__$1 = (inst_41939 + (1));
var inst_41948 = (inst_41947__$1 < n);
var state_41974__$1 = (function (){var statearr_41988 = state_41974;
(statearr_41988[(11)] = inst_41947__$1);

(statearr_41988[(12)] = inst_41946);

return statearr_41988;
})();
if(cljs.core.truth_(inst_41948)){
var statearr_41989_42018 = state_41974__$1;
(statearr_41989_42018[(1)] = (8));

} else {
var statearr_41990_42019 = state_41974__$1;
(statearr_41990_42019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (14))){
var inst_41967 = (state_41974[(2)]);
var inst_41968 = cljs.core.async.close_BANG_.call(null,out);
var state_41974__$1 = (function (){var statearr_41992 = state_41974;
(statearr_41992[(13)] = inst_41967);

return statearr_41992;
})();
var statearr_41993_42020 = state_41974__$1;
(statearr_41993_42020[(2)] = inst_41968);

(statearr_41993_42020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (10))){
var inst_41958 = (state_41974[(2)]);
var state_41974__$1 = state_41974;
var statearr_41994_42021 = state_41974__$1;
(statearr_41994_42021[(2)] = inst_41958);

(statearr_41994_42021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41975 === (8))){
var inst_41938 = (state_41974[(7)]);
var inst_41947 = (state_41974[(11)]);
var tmp41991 = inst_41938;
var inst_41938__$1 = tmp41991;
var inst_41939 = inst_41947;
var state_41974__$1 = (function (){var statearr_41995 = state_41974;
(statearr_41995[(7)] = inst_41938__$1);

(statearr_41995[(8)] = inst_41939);

return statearr_41995;
})();
var statearr_41996_42022 = state_41974__$1;
(statearr_41996_42022[(2)] = null);

(statearr_41996_42022[(1)] = (2));


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
});})(c__39348__auto___42008,out))
;
return ((function (switch__39236__auto__,c__39348__auto___42008,out){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_42000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42000[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_42000[(1)] = (1));

return statearr_42000;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_41974){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_41974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e42001){if((e42001 instanceof Object)){
var ex__39240__auto__ = e42001;
var statearr_42002_42023 = state_41974;
(statearr_42002_42023[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42024 = state_41974;
state_41974 = G__42024;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_41974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_41974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___42008,out))
})();
var state__39350__auto__ = (function (){var statearr_42003 = f__39349__auto__.call(null);
(statearr_42003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___42008);

return statearr_42003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___42008,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42025 = [];
var len__38239__auto___42099 = arguments.length;
var i__38240__auto___42100 = (0);
while(true){
if((i__38240__auto___42100 < len__38239__auto___42099)){
args42025.push((arguments[i__38240__auto___42100]));

var G__42101 = (i__38240__auto___42100 + (1));
i__38240__auto___42100 = G__42101;
continue;
} else {
}
break;
}

var G__42027 = args42025.length;
switch (G__42027) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42025.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__39348__auto___42103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__39348__auto___42103,out){
return (function (){
var f__39349__auto__ = (function (){var switch__39236__auto__ = ((function (c__39348__auto___42103,out){
return (function (state_42069){
var state_val_42070 = (state_42069[(1)]);
if((state_val_42070 === (7))){
var inst_42065 = (state_42069[(2)]);
var state_42069__$1 = state_42069;
var statearr_42071_42104 = state_42069__$1;
(statearr_42071_42104[(2)] = inst_42065);

(statearr_42071_42104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (1))){
var inst_42028 = [];
var inst_42029 = inst_42028;
var inst_42030 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42069__$1 = (function (){var statearr_42072 = state_42069;
(statearr_42072[(7)] = inst_42029);

(statearr_42072[(8)] = inst_42030);

return statearr_42072;
})();
var statearr_42073_42105 = state_42069__$1;
(statearr_42073_42105[(2)] = null);

(statearr_42073_42105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (4))){
var inst_42033 = (state_42069[(9)]);
var inst_42033__$1 = (state_42069[(2)]);
var inst_42034 = (inst_42033__$1 == null);
var inst_42035 = cljs.core.not.call(null,inst_42034);
var state_42069__$1 = (function (){var statearr_42074 = state_42069;
(statearr_42074[(9)] = inst_42033__$1);

return statearr_42074;
})();
if(inst_42035){
var statearr_42075_42106 = state_42069__$1;
(statearr_42075_42106[(1)] = (5));

} else {
var statearr_42076_42107 = state_42069__$1;
(statearr_42076_42107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (15))){
var inst_42059 = (state_42069[(2)]);
var state_42069__$1 = state_42069;
var statearr_42077_42108 = state_42069__$1;
(statearr_42077_42108[(2)] = inst_42059);

(statearr_42077_42108[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (13))){
var state_42069__$1 = state_42069;
var statearr_42078_42109 = state_42069__$1;
(statearr_42078_42109[(2)] = null);

(statearr_42078_42109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (6))){
var inst_42029 = (state_42069[(7)]);
var inst_42054 = inst_42029.length;
var inst_42055 = (inst_42054 > (0));
var state_42069__$1 = state_42069;
if(cljs.core.truth_(inst_42055)){
var statearr_42079_42110 = state_42069__$1;
(statearr_42079_42110[(1)] = (12));

} else {
var statearr_42080_42111 = state_42069__$1;
(statearr_42080_42111[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (3))){
var inst_42067 = (state_42069[(2)]);
var state_42069__$1 = state_42069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42069__$1,inst_42067);
} else {
if((state_val_42070 === (12))){
var inst_42029 = (state_42069[(7)]);
var inst_42057 = cljs.core.vec.call(null,inst_42029);
var state_42069__$1 = state_42069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42069__$1,(15),out,inst_42057);
} else {
if((state_val_42070 === (2))){
var state_42069__$1 = state_42069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42069__$1,(4),ch);
} else {
if((state_val_42070 === (11))){
var inst_42037 = (state_42069[(10)]);
var inst_42033 = (state_42069[(9)]);
var inst_42047 = (state_42069[(2)]);
var inst_42048 = [];
var inst_42049 = inst_42048.push(inst_42033);
var inst_42029 = inst_42048;
var inst_42030 = inst_42037;
var state_42069__$1 = (function (){var statearr_42081 = state_42069;
(statearr_42081[(7)] = inst_42029);

(statearr_42081[(8)] = inst_42030);

(statearr_42081[(11)] = inst_42049);

(statearr_42081[(12)] = inst_42047);

return statearr_42081;
})();
var statearr_42082_42112 = state_42069__$1;
(statearr_42082_42112[(2)] = null);

(statearr_42082_42112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (9))){
var inst_42029 = (state_42069[(7)]);
var inst_42045 = cljs.core.vec.call(null,inst_42029);
var state_42069__$1 = state_42069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42069__$1,(11),out,inst_42045);
} else {
if((state_val_42070 === (5))){
var inst_42037 = (state_42069[(10)]);
var inst_42030 = (state_42069[(8)]);
var inst_42033 = (state_42069[(9)]);
var inst_42037__$1 = f.call(null,inst_42033);
var inst_42038 = cljs.core._EQ_.call(null,inst_42037__$1,inst_42030);
var inst_42039 = cljs.core.keyword_identical_QMARK_.call(null,inst_42030,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42040 = (inst_42038) || (inst_42039);
var state_42069__$1 = (function (){var statearr_42083 = state_42069;
(statearr_42083[(10)] = inst_42037__$1);

return statearr_42083;
})();
if(cljs.core.truth_(inst_42040)){
var statearr_42084_42113 = state_42069__$1;
(statearr_42084_42113[(1)] = (8));

} else {
var statearr_42085_42114 = state_42069__$1;
(statearr_42085_42114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (14))){
var inst_42062 = (state_42069[(2)]);
var inst_42063 = cljs.core.async.close_BANG_.call(null,out);
var state_42069__$1 = (function (){var statearr_42087 = state_42069;
(statearr_42087[(13)] = inst_42062);

return statearr_42087;
})();
var statearr_42088_42115 = state_42069__$1;
(statearr_42088_42115[(2)] = inst_42063);

(statearr_42088_42115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (10))){
var inst_42052 = (state_42069[(2)]);
var state_42069__$1 = state_42069;
var statearr_42089_42116 = state_42069__$1;
(statearr_42089_42116[(2)] = inst_42052);

(statearr_42089_42116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42070 === (8))){
var inst_42029 = (state_42069[(7)]);
var inst_42037 = (state_42069[(10)]);
var inst_42033 = (state_42069[(9)]);
var inst_42042 = inst_42029.push(inst_42033);
var tmp42086 = inst_42029;
var inst_42029__$1 = tmp42086;
var inst_42030 = inst_42037;
var state_42069__$1 = (function (){var statearr_42090 = state_42069;
(statearr_42090[(7)] = inst_42029__$1);

(statearr_42090[(8)] = inst_42030);

(statearr_42090[(14)] = inst_42042);

return statearr_42090;
})();
var statearr_42091_42117 = state_42069__$1;
(statearr_42091_42117[(2)] = null);

(statearr_42091_42117[(1)] = (2));


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
});})(c__39348__auto___42103,out))
;
return ((function (switch__39236__auto__,c__39348__auto___42103,out){
return (function() {
var cljs$core$async$state_machine__39237__auto__ = null;
var cljs$core$async$state_machine__39237__auto____0 = (function (){
var statearr_42095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42095[(0)] = cljs$core$async$state_machine__39237__auto__);

(statearr_42095[(1)] = (1));

return statearr_42095;
});
var cljs$core$async$state_machine__39237__auto____1 = (function (state_42069){
while(true){
var ret_value__39238__auto__ = (function (){try{while(true){
var result__39239__auto__ = switch__39236__auto__.call(null,state_42069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__39239__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39239__auto__;
}
break;
}
}catch (e42096){if((e42096 instanceof Object)){
var ex__39240__auto__ = e42096;
var statearr_42097_42118 = state_42069;
(statearr_42097_42118[(5)] = ex__39240__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__39238__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42119 = state_42069;
state_42069 = G__42119;
continue;
} else {
return ret_value__39238__auto__;
}
break;
}
});
cljs$core$async$state_machine__39237__auto__ = function(state_42069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39237__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39237__auto____1.call(this,state_42069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39237__auto____0;
cljs$core$async$state_machine__39237__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39237__auto____1;
return cljs$core$async$state_machine__39237__auto__;
})()
;})(switch__39236__auto__,c__39348__auto___42103,out))
})();
var state__39350__auto__ = (function (){var statearr_42098 = f__39349__auto__.call(null);
(statearr_42098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__39348__auto___42103);

return statearr_42098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__39350__auto__);
});})(c__39348__auto___42103,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1459924594442