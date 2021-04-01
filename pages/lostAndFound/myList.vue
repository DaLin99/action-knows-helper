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
        :showLabel="true"
        :key="index"
        :item="item"
        @onClick="goToDetail(item.id)"
      />
    </view>
    </view>
  </view>
</template>

<script>
  import tabs from 'pages/component/tabs/tabs.vue';
import card from './components/card.vue';
import api from '../../common/api/'
export default {
	name: 'HelloWorld',
	components: { card, tabs },
	data() {
		return {
			showDatasource: [],
      activeTabIndex: 0,
      tabsList: [
        {
          tabName: '已发布',
        },
        {
          tabName: '审核中',
        },
        {
          tabName: '收藏',
        }
      ],
      types: {
        0: 'published',
        1: 'unpublish',
        2: 'favorite'
      }
    };
	},
	onLoad() {
	},
  onShow() {
    this.getList();
  },
	methods: {
		/**
     * 点击tab-nav-name进行切换
     * @param {String}  i 索引
     */
		async clcikTab(i) {
      this.activeTabIndex = i;
			// this.showDatasource = this.tabsList[i].dataSource;
      const params = {
        publishStatus: this.types[i]
      };
      const res = await api.getUserLostAndFoundList(params);
      this.showDatasource = res?.data;
		},
    /**
     * 获取列表
     */
    async getList(){
      const params = {
        publishStatus: this.types[this.activeTabIndex]
      };
      const res = await api.getUserLostAndFoundList(params);
      this.showDatasource = res?.data;
    },
    /**
     * 查看详情
     */
    goToDetail(index) {
      uni.navigateTo({
        url: `./detail?id=${index}`,
      });
    },
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