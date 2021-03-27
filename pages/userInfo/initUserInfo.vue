<template>
  <view class="get-authority-page">
    <view v-if="authpWindow" class="gray-bg">
      <button 
        type="primary"
        class="btn"
        open-type="getUserInfo"
        @getuserinfo="onGetUserInfo"
      >
        授权登陆
      </button>
    </view>
    <auth class="auth" v-if="initOpenId"/>
  </view>
</template>

<script>
	import api from '../../common/api';
	import {mapMutations, mapState} from 'vuex';
  import auth from './auth.vue'
  export default {
    components:{
      auth,
    },
    data(){
      return{
        initOpenId: false,
        authpWindow: true,
      }
    },
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
              that.authpWindow = false
              that.initOpenId = true
            }
          });
        }
      },
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
  .pop-up {
    background-color: #fff;
  }
  .auth {
    width: 100%;
    height: 100%;
  }
</style>
