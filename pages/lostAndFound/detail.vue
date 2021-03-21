<template>
	<view >
		<image class="img" :src="itemDetail.imgPath" />
    <uni-list>
        <uni-list-item title="失物名称" :rightText="itemDetail.title"></uni-list-item>
        <uni-list-item title="丢失时间" :rightText="itemDetail.time"></uni-list-item>
        <uni-list-item title="丢失地点" :rightText="itemDetail.place"></uni-list-item>
        <uni-list-item title="发布时间" :rightText="itemDetail.publishDate"></uni-list-item>
        <uni-list-item title="拾到者" :rightText="itemDetail.publisher"></uni-list-item>
        <uni-list-item title="联系微信" :rightText="itemDetail.wechat"></uni-list-item>
        <uni-list-item title="电话" :rightText="itemDetail.tell"></uni-list-item>
    </uni-list>
    <view class="content">
      <text >{{itemDetail.content}}</text>
    </view>
     <button v-if="userInfo.openid === itemDetail.publisherId" type="primary" class="mt40" @click="edit">修改</button>
     <button v-else type="primary" class="mt40">收藏</button>
	</view>
</template>

<script>
  import api from '../../common/api/'
  import { mapState } from 'vuex'
	export default {
    onLoad(opt) {
      this.getDetail(opt.id)
    },
		data() {
			return {
				itemDetail: {},
			};
		},
    onshow(obj){
      console.log(obj);
    },
    methods:{
      /**
       * 获取列表
       */
      async getDetail(id){
        const res = await api.getdetail({id});
        this.itemDetail = res?.data[0];
      },
      edit() {
        if(this.itemDetail.type === 'found') {
          uni.navigateTo({
            url: './submitFound?dataItem=' +JSON.stringify(this.itemDetail)
          })
        } else {
          uni.navigateTo({
            url: './submitLost?dataItem=' +JSON.stringify(this.itemDetail)
          })
        }
      }
    },
    computed:{
      	...mapState({
      		'userInfo': state=>state.userInfo
      	}),
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
