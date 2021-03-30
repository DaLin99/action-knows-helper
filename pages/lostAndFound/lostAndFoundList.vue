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
        @onClick="goToDetail(item.id)"
      />
    </view>
    <view class="btn-list">
      <view 
        class="publish" 
        @click="goToPulbish">发布</view>
      <view
      class="my"
      @click="goToMyList"
      >我的</view>
    </view>
  </view>
</template>

<script>
import tabs from 'pages/component/tabs/tabs.vue';
import card from './components/card.vue';
import api from '../../common/api/'
import {mapMutations, mapState} from 'vuex'
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
	onLoad() {
    this.auth();
		// this.showDatasource = this.tabsList[0].dataSource;
	},
  created() {
    this.getList();
  },
	methods: {
    ...mapMutations([
      'initUserInfo',
    ]),
    /**
     * 登陆验证
     */ 
    async auth() {
      const that = this;
      console.log(123);
      uni.getStorage({
          key: 'userInfo',
          success: function (result) {
            uni.userId = result.data.openid
            console.log('设置成功');
            console.log(result);
            that.initUserInfo({
              ...result.data
            })
          },
          fail(result) {
            uni.navigateTo({
              url: '/pages/userInfo/initUserInfo'
            })
          }
      });
    },
		/**
     * 点击tab-nav-name进行切换
     * @param {String}  i 索引
     */
		async clcikTab(i) {
      this.activeTabIndex = i;
			// this.showDatasource = this.tabsList[i].dataSource;
      const params = {
        type: i === 0 ? 'lost' : 'found'
      };
      const res = await api.getLostAndFoundList(params);
      this.showDatasource = res?.data;
		},
    /**
     * 前往发布 0丢失1拾到
     */
    goToPulbish(){
      console.log(this.activeTabIndex);
      if(this.activeTabIndex === 0) {
        uni.navigateTo({
          url: './submitLost',
        });
      } else {
        uni.navigateTo({
          url: './submitFound',
        });
      }
    },
    /**
     * 获取列表
     */
    async getList(){
      const params = {
        type: this.activeTabIndex === 0 ? 'lost' : 'found'
      };
      const res = await api.getLostAndFoundList(params);
      this.showDatasource = res?.data;
      console.log(res)
    },
    /**
     * 查看详情
     */
    goToDetail(index) {
      console.log(index);
      uni.navigateTo({
        url: `./detail?id=${index}`,
      });
    },
    /**
     * 查看详情
     */
    goToMyList(index) {
      console.log(index);
      uni.navigateTo({
        url: './myList',
      });
    }
	},
};
</script>
<style lang="less" scoped>
  
  .card-list {
  	padding: 0px 36rpx;
  }
  .btn-list{
    position: fixed;
    right: 0;
    bottom: 50rpx;
    .publish, .my {
      width: 100rpx;
      height: 100rpx;
      text-align: center;
      line-height: 100rpx;
      border-radius: 50%;
      color: #fff;
    }
    .publish{
      background-color: #9773ff;
    }
    .my{
      background-color: #82d5e0;
    }
  }
</style>