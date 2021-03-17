<template>
	<view >
		<image class="img" :src="itemDetail.imgPath" />
    <uni-list>
        <uni-list-item title="失物名称" :rightText="itemDetail.title"></uni-list-item>
        <uni-list-item title="丢失时间" :rightText="itemDetail.lostTime"></uni-list-item>
        <uni-list-item title="丢失地点" :rightText="itemDetail.lostPlace"></uni-list-item>
        <uni-list-item title="发布时间" :rightText="itemDetail.publishDate"></uni-list-item>
        <uni-list-item title="拾到者" :rightText="itemDetail.publisher"></uni-list-item>
        <uni-list-item title="联系微信" :rightText="itemDetail.wechat"></uni-list-item>
    </uni-list>
    <view class="content">
      <text >{{itemDetail.content}}</text>
    </view>

	</view>
</template>

<script>
  import api from '../../common/api/'
	export default {
    onLoad(opt) {
      this.getDetail(opt.id)
    },
		data() {
			return {
				itemDetail: {},
			};
		},
    methods:{
      /**
       * 获取列表
       */
      async getDetail(id){
        const res = await api.getdetail({id});
        this.itemDetail = res?.data[0];
        console.log(res.data)
      },
    }
	}
</script>

<style lang="less">
.img{
  // height: 400rpx;
  width: 100%;
}
.content {
  padding: 20rpx;
}
</style>
