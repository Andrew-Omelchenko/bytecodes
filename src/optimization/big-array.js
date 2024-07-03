// Optimization/de-optimization test
// Run using 'v8 --trace-opt --trace-deopt ./big-array.js' command
const arr = new Array(4000);

function myMax() {
  return Math.max.apply(undefined, arguments);
}

// Makes myMax 'hot' for the compiler
for (var i = 0; i < 2000; i++) {
  myMax(...arr);
}
