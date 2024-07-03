function* generator() {
  yield 'generator';
}

async function doAsync() {
  await 'await';
}

generator();
doAsync();

// async function doAsync() {
//   return await new Promise((resolve) => resolve('await'));
// }
// generator().next();
// doAsync().then();

// Optimization/de-optimization test
// Run using v8 --trace-opt --trace-deopt ./generator.js
// const arr = new Array(4000);
// function myMax() {
//   return Math.max.apply(undefined, arguments);
// }
// for (let i = 0; i < 2000; i++) {
//   myMax(...arr)
// }
