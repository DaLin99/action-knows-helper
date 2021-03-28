<template>
  <view>
    <view class="forum-list">
      <card
        class="mt20"
        v-for="(item, index) in forumList"
        :item="item"
        :key="index"
        @onClick="showDetail(item.id)"
      />
    </view>
    <view class="btn-list">
      <view class="publish" @click="goToSubmit">发布</view>
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
import api from "../../common/api/";
import { mapState } from "vuex";
import card from "./components/card.vue";
export default {
  components: { card },
  data() {
    return {
      title: "Hello",
      forumList: [],
    };
  },
  created() {
    this.getList();
  },
  onLoad() {},
  methods: {
    async getList() {
      const { code, data } = await api.fetchForumList();
      this.forumList = data;
      console.log(data);
    },
    goToSubmit() {
      uni.navigateTo({
        url: "./submitForum",
      });
    },
    showDetail(id) {
      console.log(id);
      uni.navigateTo({
        url: `../schoolForum/forumDetail?id=${id}`,
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
  },
};
</script>

<style scope>
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
  font-size: 0.5rem;
  align-self: flex-start;
}
.forum-list {
  padding: 0 50rpx;
}
.btn-list {
  position: fixed;
  right: 0rpx;
  bottom: 50rpx;
}
.publish,
.my {
  width: 100rpx;
  height: 100rpx;
  text-align: center;
  line-height: 100rpx;
  border-radius: 50%;
  color: #fff;
}
.publish {
  background-color: #9773ff;
}
.my {
  background-color: #82d5e0;
}
</style>
