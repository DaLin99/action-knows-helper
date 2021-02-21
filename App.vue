<script>
	import api from './common/api'
	import {mapMutations} from 'vuex'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.auth();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			...mapMutations([
				'initUserInfo',
			]),
			/**
			 * 登陆验证
			 */
			async auth() {
				const that = this;
				uni.getUserInfo({
				  provider: 'weixin',
				  success: function (infoRes) {
					uni.login({
					  success: async function (loginRes) {
						const res = await api.login({code: loginRes.code});
						console.log(res)
						that.initUserInfo({
							...res.data,
							...infoRes.userInfo
						})
					  }
					}); 
				  }
				});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
