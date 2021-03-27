<template>
	<view class="content">
		<view class="login-bg">
			<view class="login-card">
				<view class="login-head">账号认证</view>
				<view class="login-input login-margin-b">
					<input type="number" v-model="cardId" placeholder="学号/一卡通账号" />
				</view>
				<view class="login-input">
					<input type="password" v-model="cardPassword" placeholder="密码" />
				</view>
				<view class="login-function">
					<view class="login-forget" >密码默认身份证后六位</view>
				</view>
			</view>
		</view>
		<view class="login-btn">
			<button class="landing" type="primary" @click="login">登陆</button>
		</view>
    <view class="next-time" @click="nextTimeAuth">
      下次再认证
    </view>
	</view>
</template>

<script>
  import api from '../../common/api';
	export default {
		data() {
			return {
				cardId: '',
				cardPassword: '',
			}
		},
		onLoad() {

		},
		methods: {
			go_forget(){
				uni.navigateTo({
				    url: '../../pages/forget/forget'
				})
			},
			go_register(){
				uni.navigateTo({
					url: '../../pages/register/register'
				})
			},
      async login(){
        if(!this.cardPassword && !this.cardId) {
          uni.showToast({
            title: '账号密码不能为空',
            icon: 'none'
          })
        }
        const res = await api.loginByCard({
          cardId:this.cardId,
          cardPassword: this.cardPassword
        });
        uni.navigateBack()
      },
      nextTimeAuth(){
        uni.navigateBack()
      }
		}
	}
</script>

<style>
	.landing{
		height: 84upx;
		line-height: 84upx;
		border-radius: 44upx;
		font-size: 32upx;
		background: linear-gradient(left,#b4b4f7, #a9c9fa);
	}
	.login-btn{
		padding: 10upx 20upx;
		margin-top: 350upx;
	}
	.login-function{
		overflow: auto;
		padding: 20upx 20upx 30upx 20upx;
	}
	.login-forget{
		float: left;
		font-size: 26upx;
		color: #999;
	}
	.login-register{
		color: #666;
		float: right;
		font-size: 26upx;

	}
	.login-input input{
		background: #F2F5F6;
		font-size: 28upx;
		padding: 10upx 25upx;
		height: 62upx;
		line-height: 62upx;
		border-radius: 8upx;
	}
	.login-margin-b{
		margin-bottom: 25upx;
	}
	.login-input{
		padding: 10upx 20upx;
	}
	.login-head{
		font-size: 34upx;
		text-align: center;
		padding: 25upx 10upx 55upx 10upx;
	}
	.login-card{
		background: #fff;
		border-radius: 12upx;
		padding: 10upx 25upx;
		box-shadow: 0 6upx 18upx rgba(0,0,0,0.12);
		position: relative;
		margin-top: 120upx;
	}
	.login-bg {
		height: 260upx;
		padding: 25upx;
		background: linear-gradient(left,#b4b4f7, #a9c9fa);
	}
  .next-time{
    text-align: center;
    color: #C0C0C0;
  }
</style>
