

/*

exports.func = func;
// exports. 导出的是一个 对象 {func, ...}

exports = func;
// exports = 导出的不是一个对象，导致在模块外部不可以使用

*/

const add = (a, b) => a + b;

// 仅在该模块内可用使用
// exports 导出一个模块方法
// exports = add;
exports.add = add;

// 仅 module.exports 的模块方法，在 require 后才可以在模块外使用 ✅
// module.exports = add;

// module.exports = exports;

// console.log('module =', module);
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
