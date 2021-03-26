/**
 * api/index.js  请求接口导出入口
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime:
 * @LastEditors: xqbzheng
 * @Description:
 */

import user from "./user.js";
import lostAndFound from "./lostAndFound.js";
import recruitInfo from "./recruitInfo.js";
import favorite from "./favorite.js";

export default {
  ...user,
  ...lostAndFound,
  ...favorite,
  ...recruitInfo,
};
