<template>
  <view class="lost-found-container">
    <view class="card-list mt80">
      <card
        v-for="(item, index) in showDatasource"
        :key="index"
        :item="item"
        @onClick="goToDetail(item.id)"
      />
    </view>
    </view>
  </view>
</template>

<script>
import card from './components/card.vue';
import api from '../../common/api/'
export default {
	name: 'HelloWorld',
	components: { card },
	data() {
		return {
			showDatasource: [],
    };
	},
	onLoad() {
	},
  onShow() {
    this.getList();
  },
	methods: {
    /**
     * 获取列表
     */
    async getList(){
      const params = {
        type: this.activeTabIndex === 0 ? 'lost' : 'found'
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