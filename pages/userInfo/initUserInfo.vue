<template>
  <view class="get-authority-page">
    <uni-popup ref="popup" type="bottom"  class="pop-up">
      <button 
        type="primary"
        class="btn"
        open-type="getUserInfo"
        @getuserinfo="onGetUserInfo"
      >
        授权登陆
      </button>
    </uni-popup>

  </view>
</template>

<script>
	import api from '../../common/api';
	import {mapMutations, mapState} from 'vuex';
  export default {
    methods:{
			...mapMutations([
				'initUserInfo',
			]),
      async onGetUserInfo(res){
        const userInfo = res?.detail?.userInfo
        if(userInfo) {
          const that = this;
          uni.login({
            success: async function (loginRes) {
              const res = await api.login({code: loginRes.code, ...userInfo});
              console.log(res)
              // debugger
              that.initUserInfo({
                ...res.data,
                ...userInfo
              })
              uni.userId = res.data.openid
              uni.setStorage({
                key: 'userInfo',
                data: {
                  ...res.data,
                  ...userInfo
                },
              });
              that.goBackToHome();
            }
          });
        }
      },
      goBackToHome(){
        uni.navigateBack()
      }
    },
    onShow() {
     this.$refs.popup.open()
    }
  };
</script>

<style>
  .get-authority-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  .pop-up {
    background-color: #fff;
  }
</style>
