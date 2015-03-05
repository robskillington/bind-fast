# bind-fast

Bind methods fast without deoptimized native bind().

### When you want to use bind but you do not want it to be deoptimized

If you keep writing code like this:

```js
    this.on('eventName', function eventHandler() {
        this.a = 1;
        this.doThing();
    }.bind(this));
```

But are upset with about the tenth of the performance compared to the use of a capture closure reference to `this` in Node 0.10.x, 0.12.x and iojs then this module is for you!

Now just:

```js
    var bindFast = require('bind-fast');
    this.on('eventName', bindFast(function eventHandler() {
        this.a = 1;
        this.doThing();
    }, this));
```

Also supports bound arguments like native bind.

## Installation

`npm install bind-fast`

## Tests

`npm test`

## MIT Licensed
