/**
 * config.js  请求地址
 * config.js  请求地址
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime:
 * @LastEditors: xqbzheng
 * @Description:
 */

let urlConfig = '';

if (process.env.NODE_ENV === 'development') {
  // 开发环境
  // urlConfig = 'http://127.0.0.1:8000/';
  // urlConfig = 'http://47.112.174.173/';
  // urlConfig = 'https://www.xiaoqingb.top/';
} else {
  // 生产环境
  urlConfig = 'https://www.xiaoqingb.top/';
}

export default urlConfig;
