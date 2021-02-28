/**
 * lostAndFound.js  失物招领请求api
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime: 
 * @LastEditors: xqbzheng
 * @Description:
 */

import request from '../request.js';

const MODULE = 'lostAndFound';

const fun1 = params => request.globalRequest(`${MODULE}/mobile/signUp` , params, 1);

export default {
	fun1, 
};