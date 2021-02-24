<template>
  <view class="activity-container">
    111
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
          activityBgcSrc: '../../static/image/activity-bgc.png',
          activityTitle: '志愿者招募',
          activityDate: '2020-9-1',
          activityHolder: '组织名称',
          activitityDes:
            '招聘要求：1.无关端正。2.担任干部的经历有限。3.幽默有趣4.写bug多的4.会做菜做得很好吃的',
        },
        {
          activityBgcSrc: '../../static/image/activity-bgc.png',
          activityTitle: '志愿者招募',
          activityDate: '2020-9-1',
          activityHolder: '组织名称',
          activitityDes:
            '招聘要求：1.无关端正。2.担任干部的经历有限。3.幽默有趣4.写bug多的4.会做菜做得很好吃的',
        },
        {
          activityBgcSrc: '../../static/image/activity-bgc.png',
          activityTitle: '志愿者招募',
          activityDate: '2020-9-1',
          activityHolder: '组织名称',
          activitityDes: '招聘要求：1.无关端正。2.担任干部的经历有限。吃的',
        },
        {
          activityBgcSrc: '../../static/image/activity-bgc.png',
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
@import "./schoolActivity.less";
</style>
