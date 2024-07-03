// Optimization/de-optimization test
// Run using 'v8 --trace-opt --trace-deopt ./optimization.js' command
const arr = new Array(4000);

function myMax() {
  return Math.max.apply(undefined, arguments);
}

// Makes myMax 'hot' for the compiler
for (let i = 0; i < 2000; i++) {
  myMax(...arr);
}
