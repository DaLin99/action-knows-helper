<template>
  <view class="activity-container">
    <view
      v-for="(item, index) in activityList"
      :key="index"
      class="acitivity-item-container"
    >
      <view class="activity-bgc-container">
        <image 
          :src="item.activityBgcSrc" 
          class="activity-bgc" />
      </view>
      <text class="activitity-title">{{ item.activityTitle }}</text>
      <text class="activitity-des">{{ item.activitityDes }}</text>
      <view class="holder-date-container">
        <view class="icon-and-hoder">
          <uni-icons 
            class="icon" 
            type="contact" 
            size="20" />
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
          activityBgcSrc: '../../static/image/activity-bgc.jpeg',
          activityTitle: '志愿者招募',
          activityDate: '2020-9-1',
          activityHolder: '组织名称',
          activitityDes:
            '招聘要求：1.无关端正。2.担任干部的经历有限。3.幽默有趣4.写bug多的4.会做菜做得很好吃的',
        },
        {
          activityBgcSrc: '../../static/image/activity-bgc.jpeg',
          activityTitle: '志愿者招募',
          activityDate: '2020-9-1',
          activityHolder: '组织名称',
          activitityDes:
            '招聘要求：1.无关端正。2.担任干部的经历有限。3.幽默有趣4.写bug多的4.会做菜做得很好吃的',
        },
        {
          activityBgcSrc: '../../static/image/activity-bgc.jpeg',
          activityTitle: '志愿者招募',
          activityDate: '2020-9-1',
          activityHolder: '组织名称',
          activitityDes: '招聘要求：1.无关端正。2.担任干部的经历有限。吃的',
        },
        {
          activityBgcSrc: '../../static/image/activity-bgc.jpeg',
          activityTitle: '志愿者招募',
          activityDate: '2020-9-1',
          activityHolder: '组织名称',
          activitityDes:
            '招聘要求：1.无关端正。2.担任干部的经历有限。3.幽默有趣4.写bug多的4.会做菜做得很好吃的',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scope>
.activity-container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #FFFFFF;
  padding-bottom: 48rpx;
  .acitivity-item-container {
    width: 45%;
    padding: 16rpx;
    display: flex;
    flex-direction: column;
    margin: 8rpx 16rpx;
    box-sizing: border-box;
    border: 1px solid #f0f0f0;
    background: #FFFFFF;
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
      .activitity-des{
        margin-top: 24rpx;
        height: 315rpx;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal !important;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .holder-date-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 48rpx;
        .icon-and-hoder {
          display: flex;
          align-items: center;
          .icon{
            color: #3B4144;
            margin-right: 8rpx;
          }
        }
      }
    }
    .acitivity-item-container:hover {
      box-shadow: 0px 1px 3px 0px rgba(0, 21, 41, 0.12);
    }
  }
</style>
