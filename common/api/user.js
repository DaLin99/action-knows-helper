import request from '../request.js';

const PORT = 'user';
// 登陆
const login = async params => {
	return await request.globalRequest(`${PORT}/login/`, 'get', params);
};
export default {
	login, 
};