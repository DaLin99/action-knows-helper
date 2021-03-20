<template>
  <view class="activity-container">
    <view
      v-for="(item, index) in activityList"
      :key="index"
      class="acitivity-item-container"
      @click="showDetail(item.id)"
    >
      <view class="activity-bgc-container">
        <image :src="item.activityBgcSrc" class="activity-bgc" />
      </view>
      <text class="activitity-title">{{ item.activityTitle }}</text>
      <text class="activitity-des">{{ item.activitityDes }}</text>
      <view class="holder-date-container">
        <view class="icon-and-hoder">
          <uni-icons class="icon" type="contact" size="20" />
          <text>{{ item.activityHolder }}</text>
        </view>
        <view class="date">
          <text>{{ item.activityDate }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activityList: [
        {
          activityBgcSrc: "../../static/image/avator3.png",
          activityTitle: "数据安全建设",
          activityDate: "2021-3-1",
          activityHolder: "Jermenis公司",
          activitityDes:
            "介绍详情本次大会以新形势下的企业数据安全建设”为主题,旨在增进蚂蚁金服与生态合作伙伴之间的相互了解、分享实践经验、共筑数据安全",
        },
        {
          activityBgcSrc: "../../static/image/activity1.jpg",
          activityTitle: "团干部招新报名开始了",
          activityDate: "2021-3-1",
          activityHolder: "团学干部",
          activitityDes:
            "团学干部换届招新活动火热进行中，你想不想要成为贡献自己的一部分力量",
        },
        {
          activityBgcSrc: "../../static/image/activity2.jpeg",
          activityTitle: "志愿者招募",
          activityDate: "2021-3-17",
          activityHolder: "志愿者协会",
          activitityDes:
            "招聘要求：1.无关端正。2.担任干部的经历有限。3.幽默有趣4.写bug多的4.会做菜做得很好吃的",
        },
        {
          activityBgcSrc: "../../static/image/activity3.jpeg",
          activityTitle: "更新旅游学院18届校友通讯录",
          activityDate: "2021-3-21",
          activityHolder: "组织名称",
          activitityDes:
            "为方便学院联系校友、紧密校友与学校的联系，现启动校友通讯录更新活动。诚邀旅游学院全体18届校友填写下方问卷，更新通讯录信息。",
        },
        {
          activityBgcSrc: "../../static/image/activity1.jpg",
          activityTitle: "志愿者招募2",
          activityDate: "2020-9-1",
          activityHolder: "志愿者协会2",
          activitityDes:
            "招聘要求：1.无关端正。2.担任干部的经历有限。3.幽默有趣4.写bug多的4.会做菜做得很好吃的",
        },
      ],
    };
  },
  methods: {
    showDetail(id) {
      console.log(id);
      uni.navigateTo({
        url: `../schoolActivity/schoolActivityDetail?info=${id}`,
      });
    },
  },
};
</script>

<style lang="less" scope>
.activity-container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #ffffff;
  padding-bottom: 48rpx;
  .acitivity-item-container {
    width: 45%;
    padding: 16rpx;
    display: flex;
    flex-direction: column;
    margin: 8rpx 16rpx;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    background: #ffffff;
    border-radius: 12rpx;

    .activity-bgc-container {
      width: 100%;
      height: 100%;
      .activity-bgc {
        width: 100%;
        height: 100%;
        border-radius: 12rpx;
      }
    }
    .activitity-title {
      font-weight: bolder;
      margin-top: 24rpx;
    }
    .activitity-des {
      margin-top: 24rpx;
      height: 315rpx;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      white-space: normal !important;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      opacity: 0.7;
      font-size: 14px;
    }
    .holder-date-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 48rpx;
      .icon-and-hoder {
        display: flex;
        align-items: center;
        .icon {
          color: #3b4144;
          margin-right: 8rpx;
        }
      }
    }
  }
  .acitivity-item-container:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 21, 41, 0.12);
  }
  .date,
  .icon-and-hoder {
    font-size: 14px;
  }
}
</style>
