import request from '../request.js';

const PORT = 'user';
// 登陆
const login = params => {
	console.log(123);
	return request.globalRequest(`${PORT}/login/`, 'get', params);
};
export default {
	login, 
};