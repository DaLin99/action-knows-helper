<template>
  <view>
    <view class="forum-list">
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
  </view>
</template>

<script>
import api from "../../common/api/";
import { mapState } from "vuex";
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
    this.getList();
  },
  onShow() {
    this.getList();
  },
  methods: {
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
  background-color: #9773ff;
}
.my {
  background-color: #82d5e0;
}
</style>
