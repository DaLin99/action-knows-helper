<template>
  <view class="lost-found-container">
    <tabs
      :tabs-list="tabsList"
      :active-tab-index="activeTabIndex"
      class="mb10"
      @clickTab="clcikTab"
    />
    <view class="card-list mt80">
      <card
        v-for="(item, index) in showDatasource"
        :key="index"
        :item="item"
      />
    </view>
  </view>
</template>

<script>
import tabs from 'pages/component/tabs/tabs.vue';
import card from './component/card.vue';
export default {
	name: 'HelloWorld',
	components: { tabs, card },
	data() {
		return {
			showDatasource: [],
			activeTabIndex: 0,
			tabsList: [
				{
					tabName: '寻找失物',
					dataSource: [
						{
							imgPath: require('../../static/image/activity-bgc.jpeg'),
							title: '寻找一双鞋子',
							content: '我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							publisher: '发布者名字',
							publishDate: '2021-1-2'
						},{
							imgPath: require('../../static/image/activity-bgc.jpeg'),
							title: '寻找一双鞋子',
							content: '我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							publisher: '发布者名字',
							publishDate: '2021-1-2'
						},{
							imgPath: require('../../static/image/activity-bgc.jpeg'),
							title: '寻找一双鞋子',
							content: '我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							publisher: '发布者名字',
							publishDate: '2021-1-2'
						},{
							imgPath: require('../../static/image/activity-bgc.jpeg'),
							title: '寻找一双鞋子',
							content: '我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							publisher: '发布者名字',
							publishDate: '2021-1-2'
						},{
							imgPath: require('../../static/image/activity-bgc.jpeg'),
							title: '寻找一双鞋子',
							content: '我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							publisher: '发布者名字',
							publishDate: '2021-1-2'
						},
					],
				},
				{
					tabName: '寻找失主',
					dataSource: [
						{
							imgPath: require('../../static/image/activity-bgc.jpeg'),
							title: '寻找一双鞋子',
							content: '我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							publisher: '发布者名字',
							publishDate: '2021-1-2'
						},{
							imgPath: require('../../static/image/activity-bgc.jpeg'),
							title: '寻找一双鞋子',
							content: '我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							publisher: '发布者名字',
							publishDate: '2021-1-2'
						},{
							imgPath: require('../../static/image/activity-bgc.jpeg'),
							title: '寻找一双鞋子',
							content: '我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							publisher: '发布者名字',
							publishDate: '2021-1-2'
						},
					],
				},
			],
		};
	},
	created() {
		this.showDatasource = this.tabsList[0].dataSource;
	},
	methods: {
		// 点击tab-nav-name进行切换
		clcikTab(i) {
			this.activeTabIndex = i;
			this.showDatasource = this.tabsList[i].dataSource;
			console.log(this.activeTabIndex);
		},
	},
};
</script>
<style lang="less" scoped>
  
  .card-list {
  	padding: 0px 36rpx;
  }
</style>