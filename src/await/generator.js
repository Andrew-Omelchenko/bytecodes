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
