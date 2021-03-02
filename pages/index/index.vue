<template>
	<view class="content">
    <button open-type="getUserInfo">ss</button>
		<image class="logo" :src="avatarUrl"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text class="title">{{userInfo}}</text>
		</view>
		<text class="user-info" v-for="key in Object.keys(userInfo)">
			<text>
				{{key}}: {{userInfo[key]}}
			</text>
		</text>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		onLoad() {

		},
		methods: {
      getUserInfo(e){
        console.log(e)
      }
		},
		computed: {
			...mapState({
				'userInfo': state=>state.userInfo
			}),
			// 头像地址
			avatarUrl() {
				return this.userInfo?.avatarUrl
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.user-info {
		display: flex;
		flex-direction: column;
		font-size: .5rem;
		align-self: flex-start;
	}
</style>
