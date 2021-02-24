<template>
  <view class="recruit-info-container">
    <view
      v-for="(item, index) in recruitInfoList"
      :key="index"
      class="recruit-info-item"
    >
      <view class="container-left">
        <view class="left-top">
          <view class="flex-box hover-height-light">
            <text>{{ item.workType }}</text>
            <text>{{ item.salary }}</text>
          </view>
          <view class="flex-box">
            <text>{{ item.company }}</text>
            <text>{{ item.palce }}</text>
          </view>
        </view>
        <view class="left-bottom">
          <view class="flex-box">
            <text
              v-for="(
                requirementItem, requirementIndex
              ) in item.requirement"
              :key="requirementIndex"
            >
              {{ requirementItem }}
            </text>
            <text class="date">{{ item.date }}</text>
          </view>
        </view>
        
      </view>
      <view class="container-right">
        <image 
          :src="item.imgPath" 
          class="company-img" 
          alt="" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
	data() {
		return {
			recruitInfoList: [
				{
					company: '快手科技信息有限公司',
					workType: '前端工程师-校招实习',
					salary: '200/天',
					palce: '北京',
					requirement: ['在校应届', '本科'],
					imgPath: '../../static/image/activity-bgc.png',
					date: '2021-1-2',
				},
				{
					company: '快手科技信息有限公司',
					workType: '前端工程师-校招实习',
					salary: '200/天',
					palce: '北京',
					requirement: ['在校应届', '本科'],
					imgPath: '../../static/image/activity-bgc.png',
					date: '2021-1-2',
				},
			],
		};
	},
	methods: {},
};
</script>

<style lang="less" scope>
@import "./recruitInfo.less";
</style>
