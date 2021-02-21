import request from '../request.js';

const api = {};
const PORT = 'lostAndFound';
const fun1 = params => request.globalRequest(`${PORT}/mobile/signUp` , params, 1);// GET请求方式
export default {
	fun1, 
};