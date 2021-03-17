<template>
  <view class="get-authority-page">
    <button 
      type="primary"
      class="btn"
      open-type="getUserInfo"
      @getuserinfo="onGetUserInfo"
    >
      授权登陆
    </button>
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
        console.log(userInfo)
        if(userInfo) {
          const that = this;
          uni.login({
            success: async function (loginRes) {
              const res = await api.login({code: loginRes.code, ...userInfo});
              console.log(res)
              debugger
              that.initUserInfo({
                ...res.data,
                ...userInfo
              })
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
        uni.redirectTo({
          url:'pages/lostAndFound/lostAndFoundList',
        });
      }
    },
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
</style>
