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

const submitLost = params => request.globalRequest(`${MODULE}/submitLost`, 'post', params);
const getLostList = params => request.globalRequest(`${MODULE}/getLostList`, 'get', params);

export default {
	submitLost, 
	getLostList, 
	getLostList, 
};