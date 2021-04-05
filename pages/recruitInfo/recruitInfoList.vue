<template>
  <view>
    <!-- <tabs
      :tabs-list="tabsList"
      :active-tab-index="activeTabIndex"
      class="mb10"
      @clickTab="clcikTab"
    /> -->
    <view class="recruit-info-container">
      <card
        v-for="(item, index) in recruitInfoList"
        :item="item"
        :key="index"
        class="mt20"
        @showDetail="showDetail(item.id)"
      />
    </view>
  </view>
</template>

<script>
import tabs from "../component/tabs/tabs.vue";
import card from "./components/card.vue";
import api from "../../common/api/";
import { mapMutations } from "vuex";
export default {
  components: { tabs, card },
  onload(opt) {
    console.log(opt);
  },
  created() {},
  onShow() {
    this.auth();
    this.getList();
  },
  data() {
    return {
      recruitInfoList: [
        {
          id: "1",
          company: "快手科技信息有限公司",
          workType: "前端工程师-校招实习",
          salary: "200/天",
          palce: "北京",
          requirement: ["在校应届", "本科"],
          imgPath:
            "https://xqbzheng-1300584219.cos.ap-guangzhou.myqcloud.com/image/kuaishou.png",
          date: "2021-3-12",
        },
        {
          id: "2",
          company: "腾讯有限公司",
          workType: "前端工程师-校招实习",
          salary: "5000/月",
          palce: "深圳",
          requirement: ["在校应届", "本科", "Vue"],
          imgPath:
            "https://xqbzheng-1300584219.cos.ap-guangzhou.myqcloud.com/image/tengxun.png",
          date: "2021-3-2",
        },
        {
          id: "3",
          company: "滴滴有限公司",
          workType: "后端开发-校招实习",
          salary: "4000/月",
          palce: "杭州",
          requirement: ["在校应届", "本科", "Java"],
          imgPath:
            "https://xqbzheng-1300584219.cos.ap-guangzhou.myqcloud.com/image/didi.jpeg",
          date: "2021-4-2",
        },
      ],
      activeTabIndex: 0,
      tabsList: [
        {
          tabName: "最新招聘",
        },
        {
          tabName: "我的收藏",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["initUserInfo"]),
    /**
     * 登陆验证
     */
    async auth() {
      const that = this;
      uni.getStorage({
        key: "userInfo",
        success: function (result) {
          uni.userId = result.data.openid;
          that.initUserInfo({
            ...result.data,
          });
        },
        fail(result) {
          uni.navigateTo({
            url: "/pages/userInfo/initUserInfo",
          });
        },
      });
    },
    async getList() {
      const res = await api.getRecruitInfoList();
      this.recruitInfoList = res.data.filter((item) => item.status === "1");
    },
    showDetail(id) {
      uni.navigateTo({
        url: `../recruitInfo/recruitDetail?id=${id}`,
      });
    },
    // 点击tab-nav-name进行切换
    clcikTab(i) {
      this.activeTabIndex = i;
      // this.showDatasource = this.tabsList[i].dataSource;
    },
  },
};
</script>

<style lang="less" scope>
.recruit-info-container {
  display: flex;
  flex-direction: column;
  padding: 0rpx 24rpx;
}
</style>
