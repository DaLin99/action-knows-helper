<template>
  <view class="lost-found-container">
    <tabs
      :tabs-list="tabsList"
      :show-datasource="showDatasource"
      :active-tab-index="activeTabIndex"
      @clickTab="clcikTab"
    />
  </view>
</template>

<script>
import tabs from 'pages/component/tabs/tabs.vue';
export default {
	name: 'HelloWorld',
	components: { tabs },
	data() {
		return {
			showDatasource: [],
			activeTabIndex: 0,
			tabsList: [
				{
					tabName: '寻找失物',
					dataSource: [
						{
							imgPath: '../../static/image/activity-bgc.png',
							titleConfig: {
								style: {},
								value: '寻找一双鞋子',
							},
							content: {
								style: {},
								value:
									'我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以我的aj房子家门口突然就不见了，大家帮帮忙我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							},
							publisher: {
								style: {},
								value: '发布者名字',
							},
							publishDate: {
								style: {},
								value: '2021-1-2',
							},
						},
						{
							imgPath: '../../static/image/activity-bgc.png',
							titleConfig: {
								style: {},
								value: '寻找一双鞋子',
							},
							content: {
								style: {},
								value:
									'我的aj房子家门口突然就不见了，大家帮帮忙，救救孩子可以',
							},
							publisher: {
								style: {},
								value: '发布者名字',
							},
							publishDate: {
								style: {},
								value: '2021-1-2',
							},
						},
					],
				},
				{
					tabName: '寻找失主',
					dataSource: [
						{
							imgPath: '',
							titleConfig: {
								style: {},
								value: '',
							},
							content: {
								style: {},
								value: '',
							},
							publisher: {
								style: {},
								value: '',
							},
							publishDate: {
								style: {},
								value: '2021-1-2',
							},
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
