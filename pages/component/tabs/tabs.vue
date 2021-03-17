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
.tab-list-container {
  position: fixed;
  top: 0;
  height: 70rpx;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: -1;
}
	.tab-list {
    height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.tab-name {
			display: block;
		}
		.tab-block {
			display: block;
			width: 100%;
			height: 4rpx;
			background: transparent;
			border-radius: 4rpx;
		}
	}
}

</style>
