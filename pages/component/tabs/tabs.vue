<template>
  <view class="tab-list-container">
    <view class="tab-list">
      <view
        v-for="(item, index) in tabsList"
        :key="index"
        @click="$emit('clickTab', index)"
      >
        <!-- tab-nav-name -->
        <text class="tab-name">{{ item.tabName }}</text>
        <!-- tab-nav-block -->
        <text
          :style="{
            background:
              index == activeTabIndex ? '#4402ec' : 'transparent',
          }"
          class="tab-block"
        />
      </view>
    </view>
    <view class="card-list">
      <view
        v-for="(item, index) in showDatasource"
        :key="index"
        class="card-item"
      >
        <view class="card-top">
          <view class="card-top-left">
            <image 
              :src="item.imgPath" 
              alt="" />
          </view>
          <view class="card-top-right">
            <h4>{{ item.titleConfig.value }}</h4>
            <view>{{ item.content.value }}</view>
          </view>
        </view>
        <view class="card-bottom">
          <view class="icon-publisher">
            <uni-icons 
              class="icon" 
              type="contact" 
              size="24" />
            <text class="publisher-name">{{
              item.publisher.value
            }}</text>
          </view>
          <text class="publish-date">{{
            item.publishDate.value
          }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
	props: {
		tabsList: {
			type: Array,
			default: () => [],
		},
		showDatasource: {
			type: Array,
			default: () => [],
		},
		activeTabIndex: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {};
	},
	created() {
		// console.log(this.props.tabsList);
	},
};
</script>

<style lang="less" scope>
@import "./tabs.less";
</style>
