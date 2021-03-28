/**
 * lostAndFound.js  用户请求api
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime: 
 * @LastEditors: xqbzheng
 * @Description:
 */

import request from '../request.js';

const MODULE = 'user';

// 登陆
const login = async params => {
	return await request.globalRequest(`${MODULE}/login/`, 'post', params);
};

const loginByCard = async params => {
	return await request.globalRequest(`${MODULE}/loginByCard`, 'post', params);
};

const favoriteTotal = async params => {
	return await request.globalRequest(`${MODULE}/favoriteTotal`, 'get', params);
};

const thumbTotal = async params => {
	return await request.globalRequest(`${MODULE}/thumbTotal`, 'get', params);
};

const commentTotal = async params => {
	return await request.globalRequest(`${MODULE}/commentTotal`, 'get', params);
};

export default {
	login, 
	loginByCard, 
  favoriteTotal,
  commentTotal,
  thumbTotal,
};