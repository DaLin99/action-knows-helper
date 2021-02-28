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
	return await request.globalRequest(`${MODULE}/login/`, 'get', params);
};

export default {
	login, 
};