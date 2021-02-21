import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		
	},
	mutations: {
		initUserInfo(state, userInfo) {
			state.hasLogin = true;
			state.userInfo = userInfo;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',  
			    data: userInfo  
			}); 
		},
	},
	actions: {
	}
});

export default store;
