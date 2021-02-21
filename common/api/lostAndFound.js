import request from '../request.js';

const api = {};
const PORT = 'lostAndFound';
const fun1 = params => request.globalRequest(`${PORT}/mobile/signUp` , params, 1);
export default {
	fun1, 
};