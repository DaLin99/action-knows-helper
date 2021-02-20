<template>
  <div class="tab-list-container">
    <div class="tab-list">
      <div
        v-for="(item, index) in tabsList"
        :key="index"
        @click="$emit('clickTab', index)"
      >
        <!-- tab-nav-name -->
        <span class="tab-name">{{ item.tabName }}</span>
        <!-- tab-nav-block -->
        <span
          :style="{
            background:
              index == activeTabIndex ? '#4402ec' : 'transparent',
          }"
          class="tab-block"
        />
      </div>
    </div>
    <div class="card-list">
      <div
        v-for="(item, index) in showDatasource"
        :key="index"
        class="card-item"
      >
        <div class="card-top">
          <div class="card-top-left">
            <img 
              :src="item.imgPath" 
              alt="" >
          </div>
          <div class="card-top-right">
            <h4>{{ item.titleConfig.value }}</h4>
            <div>{{ item.content.value }}</div>
          </div>
        </div>
        <div class="card-bottom">
          <div class="icon-publisher">
            <uni-icons 
              class="icon" 
              type="contact" 
              size="24" />
            <span class="publisher-name">{{
              item.publisher.value
            }}</span>
          </div>
          <span class="publish-date">{{
            item.publishDate.value
          }}</span>
        </div>
      </div>
    </div>
  </div>
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
