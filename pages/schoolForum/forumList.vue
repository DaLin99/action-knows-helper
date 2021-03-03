<template>
	<view>
    <view class="forum-list">
      <card
      class="mt20"
      v-for="(item, index) in forumList"
      :item="item"
      :key="index" />
    </view>
    <!-- <button open-type="getUserInfo">ss</button>
		<image class="logo" :src="avatarUrl"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<text class="title">{{userInfo}}</text>
		</view>xw
		<text class="user-info" v-for="key in Object.keys(userInfo)">
			<text>
				{{key}}: {{userInfo[key]}}
			</text>
		</text> -->
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	import {mapState} from 'vuex'
  import card from './components/card.vue';
	export default {
    components:{card},
		data() {
			return {
				title: 'Hello',
        forumList: [
          {
            id: 1,
            title: '昨天为啥停水了',
            latestResponse: '听说爆水管了。。。。楼主不要慌',
            date: '2020-01-01'
          },{
            id: 1,
            title: '昨天为啥停水了',
            latestResponse: '听说爆水管了。。。。楼主不要慌',
            date: '2020-01-01'
          },{
            id: 1,
            title: '昨天为啥停水了',
            latestResponse: '',
            date: '2020-01-01'
          },
        ]
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
  .forum-list{
    padding: 0 50rpx;
  }
</style>
