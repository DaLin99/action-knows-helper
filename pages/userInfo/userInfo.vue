<template>
  <view>
    <view class="user-msg shadow-box">
      <image class="avator" :src="avatarUrl"></image>
      <text>{{userInfo.nickName}}</text>
      <text class="self-words">{{comeForm}}</text>
      <view class="overview">
        <view class="overview-item" v-for="(item, index) in overview">
          <text class="overview-count">{{item.count}}</text>
          <text class="overview-title">{{item.title}}</text>
        </view>
      </view>
    </view>
    <view class="feature-list shadow-box">
      <uni-list-item
      v-for="(item, index) in featureList"
      :title="item"
      :key="index"
      >
        item
      </uni-list-item>
    </view>
  </view>
</template>

<script>
	import {mapMutations} from 'vuex'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello',
        featureList: [
          '我的消息',
          '我的失物招领',
          '收藏的招聘活动',
          '参与的学院活动',
          '收藏的帖子',
          '管理员入口',
          '意见反馈',
          '关于'
        ],
        overview: [
          {
            title: '评论',
            count: 2,
          },
          {
            title: '点赞',
            count: 2,
          },
          {
            title: '收藏',
            count: 2,
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
			},
      // 头像地址
			comeForm() {
				return `来自${this.userInfo.province||'神秘星球'}的用户`;
			},
		}
	}
</script>

<style lang="less" scoped>
  .user-msg{
    height: 400rpx;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #263238;
    .avator {
      height: 170rpx;
      width: 170rpx;
    }
    .self-words{
      font-size: 30rpx;
      color: #263238;
      font-weight: 300;
      margin-bottom: 20rpx;
    }
    .overview{
      display: flex;
      width: 420rpx;
      justify-content: space-between;
      .overview-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        .overview-count{
          font-size: 30rpx;
          color: #B0BEC5;
        }
        .overview-title{
          font-style: 17rpx;
          color: #455A64;
          font-weight: 400;
        }
      }
    }
  }
  .shadow-box {
    box-shadow: 0 4rpx 18rpx 0 #B0BEC5;
    border-radius: 20rpx;
    margin: 20rpx;
    overflow: hidden;
  }
</style>
