// Optimization/de-optimization test
// Run using 'v8 --trace-opt --trace-deopt ./different-hidden-classes.js' command
var callbacks = [
  function sloppy() {},
  function strict() { 'use strict' },
];

function dispatch() {
  for (var length = callbacks.length, i = 0; i < length; ++i) {
    callbacks[i].apply(null, arguments);
  }
}

// Makes dispatch 'hot' for the compiler
for (var i = 0; i < 2000; i++) {
  dispatch();
}
