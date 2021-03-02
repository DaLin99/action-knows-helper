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
  </view>
</template>

<script>
export default {
	props: {
		tabsList: {
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
