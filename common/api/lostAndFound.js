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
const getLostAndFoundList = params => request.globalRequest(`${MODULE}/list`, 'get', params);

export default {
	submitLost, 
	getLostAndFoundList, 
};