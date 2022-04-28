
const add = (a, b) => a + b;
const minus = (a, b) => a - b;


const sum1 = (a, b) => {
  console.log('sum1 =', a + b);
  return a + b;
};
const sum2 = (a, b) => {
  console.log('sum2 =', a + b);
  return a + b;
};


// module.exports.sum2 = sum2;
// module.exports.sum = sum2;
// module.exports = { sum2: [Function: sum2], sum: [Function: sum2] }

// exports 仅在该模块内可用使用

// exports 导出多个模块方法
exports.add = add;
exports.minus = minus;
exports.sum = sum1;
// 等价于
// exports = {
//   add,
//   minus,
//   sum: sum1,
// };

// require 后，仅 module.exports 模块外可用使用
// module.exports.add = add;
// module.exports.minus = minus;
// // 等价于
// module.exports = {
//   add,
//   minus,
// };

module.exports.sum = sum2;
// module.exports 覆盖 exports 的同名方法 ✅
module.exports.sum2 = sum2;
// exports 是 module.exports 的引用，在 module.exports 上面新增的方法，也会出现在 exports 上面 ✅


// console.log('\n module =', module);
// console.log('module keys =', Object.keys(module));
// module keys = [
//   'id',
//   'path',
//   'exports',
//   'filename',
//   'loaded',
//   'children',
//   'paths'
// ]
console.log('exports =', exports);
console.log('module.exports =', module.exports);

// module.exports = exports = function () {};
// return module.exports;
