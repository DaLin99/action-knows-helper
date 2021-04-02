<script>
	import api from './common/api';
	import {mapMutations, mapState} from 'vuex';
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		methods:{
		}
	};
</script>

<style>
  page {
    height: 100%;
  }
	/*每个页面公共css */
  .shadow-box {
    box-shadow: 0 4rpx 18rpx 0 #B0BEC5;
    border-radius: 20rpx;
    overflow: hidden;
  }
  .m-10 {
    margin: 10rpx;
  }
  .m-20 {
    margin: 20rpx;
  }
  
  .w50{ width: 50rpx; }
  .w80 {
      width: 80rpx;
      flex: none;
  }
  .w100 {
      width: 100rpx;
  }
  .w120 {
      width: 120rpx;
  }
  
  .w150 {
      width: 150rpx;
  }
  .w180 {
      width: 180rpx;
  }
  .w200 {
      width: 200rpx;
  }
  
  .w250 {
      width: 250rpx;
  }
  
  .w300 {
      width: 300rpx;
  }
  
  .w400 {
      width: 400rpx;
  }
  
  .w450 {
      width: 450rpx;
  }
  
  .w500 {
      width: 500rpx;
  }
  .mt6{ margin-top: 6rpx; }
  .mt10 {
      margin-top: 10rpx;
  }
  
  .mb10 {
      margin-bottom: 10rpx;
  }
  
  .mr10 {
      margin-right: 10rpx;
  }
  
  .mr10- {
      margin-right: -10rpx;
  }
  .ml5{ margin-left: 5rpx;}
  .mr5{ margin-right: 5rpx;}
  
  .ml10 {
      margin-left: 10rpx;
  }
  .ml15 {
      margin-left: 15rpx;
  }
  
  .mb10 {
      margin-bottom: 10rpx;
  }
  
  .mr15 {
      margin-right: 15rpx;
  }
  .mt15 {
      margin-top: 15rpx;
  }
  .mr20 {
      margin-right: 20rpx;
  }
  
  .ml20 {
      margin-left: 20rpx;
  }
  
  .mb20 {
      margin-bottom: 20rpx;
  }
  .mb25 {
      margin-bottom: 25rpx;
  }
  .mt15 {
      margin-top: 15rpx;
  }
  .mt20 {
      margin-top: 20rpx;
  }
  .mt30 {
      margin-top: 30rpx;
  }
  .ml40 {
      margin-left: 40rpx;
  }
  
  .mr40 {
      margin-right: 40rpx;
  }
  
  .mt40 {
      margin-top: 40rpx;
  }
  .mt70 {
      margin-top: 70rpx;
  }
  .mt80 {
      margin-top: 80rpx;
  }
  .mb80 {
      margin-bottom: 80rpx;
  }
  .mb40 {
      margin-bottom: 40rpx;
  }
  .ml50{
      margin-left: 50rpx;
  }
  .pl10 {
      padding-left: 10rpx;
  }
  
  .pl15 {
      padding-left: 15rpx;
  }
  
  .pl20 {
      padding-left: 20rpx;
  }
  
  .pr10 {
      padding-right: 10rpx;
  }
  
  .pr15 {
      padding-right: 15rpx;
  }
  
  .pr20 {
      padding-right: 20rpx;
  }
  

</style>
