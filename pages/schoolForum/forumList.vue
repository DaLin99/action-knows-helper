<template>
  <view>
    <tabs
      :tabs-list="tabsList"
      :active-tab-index="activeTabIndex"
      class="mb10"
      @clickTab="clcikTab"
    />
    <view class="forum-list mt80">
      <card
        class="mt20"
        v-for="(item, index) in forumList"
        :item="item"
        :key="item.id"
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
import {mapMutations, mapState} from 'vuex'
import card from "./components/card.vue";
import tabs from "../component/tabs/tabs.vue"
export default {
  components: { card, tabs },
  data() {
    return {
      title: "Hello",
      forumList: [],
			activeTabIndex: 0,
			tabsList: [
				{
					tabName: '最新',
				},
				{
					tabName: '最热',
				},
			],
    };
  },
  created() {
    this.auth();
    this.getList();
  },
  onShow() {
    this.getList();
  },
  methods: {
    ...mapMutations([
      'initUserInfo',
    ]),
    /**
     * 登陆验证
     */ 
    async auth() {
      const that = this;
      console.log(123);
      uni.getStorage({
          key: 'userInfo',
          success: function (result) {
            uni.userId = result.data.openid
            that.initUserInfo({
              ...result.data
            })
          },
          fail(result) {
            uni.navigateTo({
              url: '/pages/userInfo/initUserInfo'
            })
          }
      });
    },
    async getList() {
      const { code, data } = await api.fetchForumList();
      this.activeTabIndex = 0;
      this.forumList = data.sort(function(a,b){
        return b.publishDate > a.publishDate ? 1 : -1;
      })
    },
    clcikTab(i) {
      this.activeTabIndex = i;
      if(i === 0) {
        this.forumList = this.forumList.sort(function(a,b){
          return b.publishDate > a.publishDate ? 1 : -1;
        })
      } else {
        this.forumList = this.forumList.sort(function(a,b){
          return +b.readNums > +a.readNums  ? 1 : -1;
        })
      }
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
  background-color: #adc4fb;
}
.my {
  background-color: #82d5e0;
}
</style>
