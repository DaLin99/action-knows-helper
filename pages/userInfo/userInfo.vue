<template>
  <view>
    <view class="user-msg shadow-box m-20">
      <image class="avator" :src="avatarUrl"></image>
      <text>{{ userInfo.nickName }}</text>
      <text class="self-words">{{ comeForm }}</text>
      <view class="overview">
        <view class="overview-item" v-for="(item, index) in overview">
          <text class="overview-count">{{ item.count }}</text>
          <text class="overview-title">{{ item.title }}</text>
        </view>
      </view>
    </view>

    <view class="feature-list shadow-box m-20">
      <uni-list-item
        v-for="(item, index) in featureList"
        :title="item.title"
        :key="index"
        clickable="true"
        @click="goToPage(item.url)"
      >
      </uni-list-item>
    </view>
  </view>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      title: "Hello",
      featureList: [
        // {
        //   title: '我的消息',
        //   url: 'myMsg'
        // },
        {
          title: "身份认证",
          url: "auth",
        },
        {
          title: "我的失物招领",
          url: "../lostAndFound/myList",
        },
        {
          title: "已发布的论坛",
          url: "auth",
        },
        {
          title: "收藏的招聘信息",
          url: "../recruitInfo/myList",
        },
        { 
          title: "报名的学院活动",
          url: "auth",
        },
        {
          title: "管理员入口",
          url: "admin",
        },
        {
          title: "关于",
          url: "about",
        },
      ],
      overview: [
        {
          title: "评论",
          count: 2,
        },
        {
          title: "点赞",
          count: 2,
        },
        {
          title: "收藏",
          count: 2,
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    getUserInfo(e) {
    },
    goToPage(url) {
      uni.navigateTo({
        url:url,
      });
    },
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.userInfo,
    }),
    // 头像地址
    avatarUrl() {
      return this.userInfo?.avatarUrl;
    },
    // 头像地址
    comeForm() {
      return `来自${this.userInfo.province || "神秘星球"}的用户`;
    },
  },
};
</script>

<style lang="less" scoped>
.user-msg {
  height: 400rpx;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #263238;
  .avator {
    height: 170rpx;
    width: 170rpx;
    margin-top: 24rpx;
    border-radius: 50%;
  }
  .self-words {
    font-size: 30rpx;
    color: #263238;
    font-weight: 300;
    margin-bottom: 20rpx;
  }
  .overview {
    display: flex;
    width: 420rpx;
    justify-content: space-between;
    .overview-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .overview-count {
        font-size: 30rpx;
        color: #b0bec5;
      }
      .overview-title {
        font-style: 17rpx;
        color: #455a64;
        font-weight: 400;
      }
    }
  }
}
</style>
