<script>
	import api from './common/api'
	export default {
		onLaunch: function() {
			console.log('App Launch')
			api.login()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
