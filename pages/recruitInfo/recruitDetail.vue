<template>
  <view class="recruit-detail-container">
    <!-- 卡片信息 -->
    <view class="card">
      <view class="workType-salary">
        <text>{{ info.jobType }}</text>
        <text class="salary">{{ info.salary }}</text>
      </view>
      <view class="requiredment-tags">
        <view
          v-for="(item, index) in educationRequirements"
          :key="index"
          class="requiredment-tag"
        >
          <text class="requiredment-tag-text">{{ item }}</text>
        </view>
      </view>
      <view class="skill-item-container">
        <view
          v-for="(skillItem, index) in skillTagLists"
          :key="index"
          class="skill-item"
        >
          {{ skillItem }}
        </view>
      </view>
      <view class="update-time">
        <text>更新于：{{ info.publisher }}-{{ info.publishDate }}</text>
      </view>
    </view>

    <div class="company">
      <p>公司名：{{ info.company }}</p>
      <p>地点： {{ info.address }}</p>
    </div>
    <view class="work-responsibility">
      <text>岗位责任</text>
      <view v-for="(workResItem, index) in jobResponsibilitys" :key="index">
        {{ index + 1 }}. {{ workResItem }}
      </view>
    </view>
    <!-- 职位描述 -->
    <text class="work-title">职位描述</text>
    <!-- 任职要求 -->
    <view class="work-requiredments">
      <text>任职要求</text>
      <view v-for="(workReqItem, index) in jobDescriptions" :key="index">
        {{ index + 1 }}. {{ workReqItem }}
      </view>
    </view>
    <!-- 投递方式 -->
    <view class="email-box">
      简历投递Email：
      <text class="email">{{ info.eMail }}</text>
    </view>
    <view>
      <button
        @click="handleCollect(info.isCollect)"
        class="collect-btn"
        type="primary"
      >
        {{ info.isCollect === 1 ? "取消收藏" : "收藏" }}
      </button>
      <button @click="handleThumbUp(info.isThumbUp)" class="collect-btn">
        {{ info.isThumbUp === 1 ? "取消点赞" : "点赞" }}
      </button>
    </view>
  </view>
</template>

<script>
import api from "../../common/api/";
export default {
  data() {
    return {
      info: {
        id: "1",
        company: "快手科技信息有限公司",
        workType: "前端工程师-校招实习",
        salary: "200/天",
        palce: "北京",
        requirement: ["在校应届", "本科"],
        imgPath: "../../static/image/activity-bgc.png",
        date: "2021-1-2",
        skills: ["前端开发", "Node.js", "WEB开发", "Vue", "Webpack"],
        email: "921859239@qq.com",
        workReq: [
          "1.2 年以上的工作经验",
          "2.较为扎实的计算机基础和前端基础知识",
          "3.独立完成模块或一般难度子系统的设计和开发",
          "4.对前端工程化方面，能够掌握业内常用工程化工具的使用（例如webpack，fis，rollup等",
          "5.对前端安全性有较为全面的掌握（xss、csrf等），开发过程中能够有意识的规避安全风险",
          "6.熟悉node，能够使用node搭建工具，提高效率",
          "7.熟悉目前比较流行的框架，如 react、vue 等",
        ],
        workRes: [
          "1. 负责前端开发工作，关注用户体验，综合产品逻辑和技术实现的考虑，推动产品用户体验的提升",
          "2. 对前端性能优化有深入的认知，能够根据项目特性选择合适的性能优化方案",
          "3. 能够根据需求，提前预测产品开发过程中的风险，确定排期计划",
          "4. 能够独立负责业务子项目研发进程或中项目团队主力，能够发现并解决技术问题",
        ],
        isCollect: true,
      },
    };
  },
  onLoad(opt) {
    this.getDetail(opt.id);
  },
  computed: {
    jobDescriptions() {
      return this.info.jobDescription?.split("，");
    },
    jobResponsibilitys() {
      return this.info.jobResponsibility?.split("，");
    },
    skillTagLists() {
      return this.info.skillTagLists?.split("，");
    },
    educationRequirements() {
      return this.info.educationRequirements?.split("，");
    },
  },
  methods: {
    async handleCollect(isCollect) {
      const res = await api.postCollectRecruitInfo({
        id: this.info.id,
        isCollect: isCollect === 1 ? "0" : "1",
      });
      console.log(isCollect, this.info.isCollect === 1 ? 0 : 1);
      if (res.code === 1) {
        uni.showToast({
          title: isCollect === 1 ? "取消收藏成功" : "收藏成功",
          duration: 2000,
          icon: "success",
        });
        this.getDetail(this.info.id);
      } else {
        uni.showToast({
          title: "失败",
          duration: 2000,
          icon: "fail",
        });
      }
    },
    async getDetail(id) {
      const res = await api.getRecruitInfoDetail({ id });
      this.info = res?.data[0];
      console.log("res:", res);
    },
    async handleThumbUp(isThumbUp) {
      const res = await api.postThumpUp({
        id: this.info.id,
        isThumbUp: isThumbUp === 1 ? 0 : 1,
      });
      if (res.code === 1) {
        uni.showToast({
          title: isThumbUp === 1 ? "取消点赞成功" : "点赞成功",
          duration: 2000,
          icon: "success",
        });
        this.getDetail(this.info.id);
      }
    },
  },
};
</script>

<style lang="less" scope>
.recruit-detail-container {
  display: flex;
  flex-direction: column;
  padding: 12rpx;
  .card {
    display: flex;
    flex-direction: column;
    padding: 24rpx;
    .workType-salary {
      display: flex;
      justify-content: space-between;
      .salary {
        font-weight: bolder;
      }
    }
    .requiredment-tags {
      display: flex;
      flex-direction: row;
      font-size: 24rpx;
      line-height: 20rpx;
      margin: 24rpx 0rpx;
      .requiredment-tag {
        border-right: solid 1px #ffffff;
        padding: 0px 24rpx;
      }
      .requiredment-tag:first-child {
        padding-left: 0px;
      }
      .requiredment-tag:last-child {
        border: none;
      }
    }
    .skill-item-container {
      display: flex;
      font-size: 28rpx;
      .skill-item {
        padding: 4rpx 16rpx;
        border: solid 1px #ffffff;
        border-radius: 24rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 16rpx;
        flex-wrap: wrap;
        margin-bottom: 16rpx;
        white-space: nowrap;
      }
    }
    .update-time {
      font-size: 24rpx;
    }
  }
  .email-box {
    padding: 24rpx 36rpx;
    color: #32394d;
    .email {
      color: #434e6b;
    }
  }
  .company {
    margin-top: 24rpx;
  }
  .work-title {
    margin: 24rpx 0rpx;
  }
  .work-requiredments,
  .work-responsibility {
    color: #7e8793;
    font-size: 26rpx;
    margin-bottom: 16rpx;
    overflow: auto;
  }
  .work-responsibility {
    margin-bottom: 200rpx;
  }
}
</style>
