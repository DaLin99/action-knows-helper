/**
 * api/index.js  请求接口导出入口
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime: 
 * @LastEditors: xqbzheng
 * @Description:
 */

import user from './user.js';
import lostAndFound from './lostAndFound.js';

export default {
	...user,
	...lostAndFound,
};;