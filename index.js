
module.exports = bindFast;

function proxyBindFast(thisArg) {
    var func = this;
    var boundFuncArgs = Array.prototype.slice.call(arguments, 1);
    if (boundFuncArgs.length > 0) {
        return function boundFastWithFuncArgs() {
            var funcArgs = boundFuncArgs.concat();
            for (var i = 0, length = arguments.length; i < length; i++) {
                funcArgs.push(arguments[i]);
            };
            return func.apply(thisArg, funcArgs);
        };
    } else {
        return function boundFast() {
            return func.apply(thisArg, arguments);
        };
    }
}

function bindFast(func) {
    return proxyBindFast.apply(func, Array.prototype.slice.call(arguments, 1));
}
