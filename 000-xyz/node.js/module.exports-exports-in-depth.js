"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2022-04-26
 * @modified
 *
 * @description
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @time O(n)
 * @augments
 * @example
 * @link https://www.cnblogs.com/xgqfrms/p/16197024.html
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

// Node.js 中 exports 与 module.exports 实现原理剖析


// console.log('\n module =', module);
// console.log('module keys =', Object.keys(module));

// module.exports = {}, 导出的是一个对象，不要使用 module.exports = func 覆盖 ❌

// 简化版
((window) => {
  // namespace
  if(!window.module) {
    window.module = {};
  }
  // var module = {
  window.module = {
    exports: {},
    id: '',
    path: '/Users/xgqfrms-mbp/GitHub/cjs/node.js',
    filename: '/Users/xgqfrms-mbp/GitHub/cjs/module.exports-exports-in-depth.js',
    loaded: false,
    children: [],
    paths: [
      '/Users/xgqfrms-mbp/Documents/GitHub/cjs/node_modules',
      '/Users/xgqfrms-mbp/Documents/GitHub/node_modules',
      '/Users/xgqfrms-mbp/Documents/node_modules',
      '/Users/xgqfrms-mbp/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ],
  }
  // shorthand 引用类型
  var exports = module.exports;
  //
  const add = (a, b) => a + b;
  exports.add = add;
  // 等价于
  // module.exports.add = add;
  console.log('\nmodule.exports === exports', module.exports === exports);
  console.log('exports', exports);
  console.log('module.exports', module.exports);
  return window.module.exports;
})(window);
