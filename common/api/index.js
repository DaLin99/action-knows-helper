// 集合各个模块的请求
import user from './user.js';
import lostAndFound from './lostAndFound.js';

// 集中导出
export default {
	...user,
	...lostAndFound,
};;