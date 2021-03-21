/**
 * lostAndFound.js  失物招领请求api
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime: 
 * @LastEditors: xqbzheng
 * @Description:
 */

import request from '../request.js';

const MODULE = 'favorite';

const addFavorite = params => request.globalRequest(`${MODULE}/add`, 'post', params);
const cancelFavorite = params => request.globalRequest(`${MODULE}/cancel`, 'post', params);

export default {
	addFavorite, 
	cancelFavorite, 
};