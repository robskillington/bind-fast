var bindFast = require('../index');
var sinon = require('sinon');
var test = require('tape');

test('binds without args supplied', function t(assert) {
    var thisArg = new Object();
    var boundTo;
    var calledArgs;
    var returnValue = new Object();

    var bound = bindFast(function unbound() {
        boundTo = this;
        calledArgs = Array.prototype.slice.call(arguments);
        return returnValue;
    }, thisArg);

    var result = bound(1, 2, 3);
    assert.equal(thisArg, boundTo);
    assert.deepEqual(calledArgs, [1, 2, 3]);
    assert.equal(result, returnValue);
    assert.end();
});

test('binds with args supplied', function t(assert) {
    var thisArg = new Object();
    var boundTo;
    var calledArgs;
    var returnValue = new Object();

    var bound = bindFast(function unbound() {
        boundTo = this;
        calledArgs = Array.prototype.slice.call(arguments);
        return returnValue;
    }, thisArg, 1, 2, 3);

    var result = bound(4, 5, 6);
    assert.equal(thisArg, boundTo);
    assert.deepEqual(calledArgs, [1, 2, 3, 4, 5, 6]);
    assert.equal(result, returnValue);
    assert.end();
});

test('binds constructor\'s this and args correctly', function t(assert) {
    var thisArg = new Object();
    var boundTo;
    var calledArgs;

    var bound = bindFast(function TestConstructor() {
        boundTo = this;
        calledArgs = Array.prototype.slice.call(arguments);
    }, thisArg, 1, 2, 3);

    var testInstance = new bound(4, 5, 6);
    assert.equal(thisArg, boundTo);
    assert.notEqual(testInstance, boundTo);
    assert.deepEqual(calledArgs, [1, 2, 3, 4, 5, 6]);
    assert.end();
});
