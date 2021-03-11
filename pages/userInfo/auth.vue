<template>
  <view class="auth-form">
    <form 
      @submit="formSubmit" 
      @reset="formReset">
      <view class="uni-form-item uni-column">
        <view class="title">一卡通账号</view>
        <input
          class="uni-input" 
          name="account" 
          placeholder="请输入账号" >
      </view>
      <view class="uni-form-item uni-column">
        <view class="title">密码</view>
        <input 
          class="uni-input" 
          name="password" 
          placeholder="请输入密码" >
      </view>
      <view class="uni-btn-v mt20">
        <button form-type="submit">提交认证</button>
      </view>
    </form>
  </view>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            formSubmit: function(e) {
                console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value));
                var formdata = e.detail.value;
                uni.showModal({
                    content: '表单数据内容：' + JSON.stringify(formdata),
                    showCancel: false
                });
            },
            formReset: function(e) {
                console.log('清空数据');
            }
        }
    };
</script>

<style>
  .auth-form{
    margin-top: 40%;
    padding: 0 40rpx;
    box-sizing: border-box;
    border: 4rpx;
  }
    .uni-form-item .title {
        padding: 20rpx 0;
    }
</style>