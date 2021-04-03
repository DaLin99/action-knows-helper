<template>
  <view class="school-activity-detail">
    <view class="bgc-container">
      <image :src="info.imageUrl" mode="" />
    </view>
    <view class="date-and-btn">
      <view class="date-container">
        <text class="date-title">报名时间</text>
        <text class="date-info"
          >{{ info.enterStartDate }}-{{ info.enterEndDate }}</text
        >
      </view>
      <view class="btn-container" @click="handle(info.isApply === 1 ? 0 : 1)">
        <text>{{ info.isApply === 1 ? "取消报名" : "我要报名" }}</text>
      </view>
    </view>
    <view class="info-container">
      <view class="info-item">
        <text class="label">组织者</text>
        <text>{{ info.holder }}</text>
      </view>
      <view class="info-item">
        <text class="label">时间</text>
        <view class="flex-box">
          <text>{{ info.activityStartDate }}</text>
          <text>{{ info.activityEndDate }}</text>
        </view>
      </view>
      <view class="info-item">
        <text class="label">地点</text>
        <text>{{ info.activityPlace }}</text>
      </view>
      <view class="info-item">
        <text class="label">发布</text>
        <text>{{ info.publisher }}</text>
      </view>
      <!-- </view> -->
      <!-- 如果是讲座类型活动有老师介绍？ -->
      <view class="introduce-box">
        <view class="header-img-container">
          <!-- <image :src="info.imageUrl" class="header-img" mode="" /> -->
        </view>
        <text class="activity-title">{{ info.activityTitle }}</text>
        <!-- <text class="company-name">地点{{info.activityPlace}}</text> -->
        <text>{{ info.activityContent }}</text>
      </view>
      <!-- <view class="des-container">
      <view
        v-for="(item, index) in activityContent"
        :key="index"
        class="des-item"
      >
        {{ item }}
      </view> -->
    </view>
  </view>
</template>

<script>
import api from "../../common/api/";

export default {
  onLoad(opt) {
    console.log(opt);
    this.getDetail(opt.info);
  },
  data() {
    return {
      info: {
        activityContent: "",
        activityEndDate: "",
        activityPlace: "",
        activityStartDate: "",
        activityTitle: "",
        enterEndDate: "",
        enterNums: "",
        enterStartDate: "",
        holder: "",
        id: "",
        isApply: "",
        isCollect: "",
        publisher: "",
        readNums: "",
        list: [],
      },
    };
  },
  methods: {
    async handle(isEnter) {
      const { code } = await api.applyActivity({
        id: this.info.id,
        isApply: isEnter,
      });
      if (code === 1) {
        this.getDetail(this.info.id);
        uni.showToast({
          title: isEnter === 0 ? "取消报名成功" : "报名成功",
          duration: 2000,
          icon: "success",
        });
      }
    },
    async getDetail(id) {
      const res = await api.getActivityDetail({ id });
      this.info = res?.data[0];
      console.log("res:", res?.data[0]);
    },
  },
};
</script>

<style lang="less">
.school-activity-detail {
  width: 100%;
  height: 100vh;
  background-color: #ebebf2;
  .bgc-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebebf2;
  }
  .date-and-btn {
    display: flex;
    margin-bottom: 20rpx;
    .date-container {
      width: 65%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #ffffff;
      padding-left: 36rpx;
      .date-title {
        font-size: 24rpx;
        color: gray;
      }
    }
    .btn-container {
      width: 35%;
      background-color: green;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 12rpx;
      .retain-nums {
        font-size: 24rpx;
      }
    }
  }
  .info-container {
    background-color: #ffffff;
    padding: 24rpx;
    border-bottom: solid 1px #f3f3f3;
    color: #a6a6a6;
    .info-item {
      display: flex;
      margin: 16rpx 0rpx;
      .label {
        width: 200rpx;
      }
      .flex-box {
        display: flex;
        flex-direction: column;
      }
    }
  }
  // 头像卡片
  .introduce-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    border: 1pt solid #f7f7f7;
    border-radius: 5pt;
    box-shadow: 0pt 4pt 8pt 1pt rgba(10, 64, 115, 0.18);
    padding: 36rpx;
    margin: 48rpx;
    .header-img-container {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      .header-img {
        border-radius: 50%;
      }
    }
    .company-name {
      color: #8d8d93;
    }
  }
  .des-container {
    background-color: #ffffff;
    padding-bottom: 240rpx;
    .des-item {
      padding: 16rpx 0rpx 12rpx 24rpx;
      background-color: #ffffff;
    }
  }
}
.activity-title {
  color: #444446;
}
</style>
