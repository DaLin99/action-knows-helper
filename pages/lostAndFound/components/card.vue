<template>
  <view
    class="card-item shadow-box"
  >
    <view class="card-top">
      <view class="card-top-left">
        <image 
          :src="item.imgPath"
          class="card-img" 
          alt="" />
      </view>
      <view class="card-top-right">
        <text class="title">{{ item.title }}</text>
        <view class="content">{{ item.content }}</view>
      </view>
    </view>
    <view class="card-bottom">
      <view class="icon-publisher">
        <uni-icons 
          class="icon" 
          type="contact" 
          size="18" />
        <text class="publisher-name ml10">{{
          item.publisher
        }}</text>
      </view>
      <text class="publish-date">{{
        item.publishDate
      }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      	item: {
      		type: Object,
      		default: () => ({}),
      	},
    }
  };
</script>

<style lang="less">
  .card-item {
    box-shadow: 0;
  	padding: 32rpx 32rpx 20rpx 32rpx;
  	margin-top: 20rpx;
  	border-radius: 8rpx;
  	display: flex;
  	flex-direction: column;
  	.card-top {
  		width: 100%;
  		display: flex;
  		margin-bottom: 16rpx;
  		.card-top-left {
  			width: 200rpx;
  			background-color: #c9c6c6;
  			display: flex;
  			align-items: center;
  			justify-content: center;
  			margin-right: 12rpx;
        border-radius: 12rpx;
        overflow: hidden;
  			.card-img {
  				width: 100%;
  				height: 100%;
  			}
  		}
  		.card-top-right {
  			width: 100%;
  			height: 158rpx;
        .title, .content, {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          white-space: normal !important;
          -webkit-box-orient: vertical;
        }
        .content {
          font-size: 28rpx;
          color: #6a6a68;
          -webkit-line-clamp: 3;
        }
        .title {
          -webkit-line-clamp: 1;
        }
  		}
  	}
  	.card-bottom {
  		display: flex;
  		justify-content: space-between;
  		align-items: center;
    
  		.icon-publisher {
  			display: flex;
  			align-items: center;
        font-size: 30rpx;
  			.publisher-name {
  				color: #c9c6c6;
          font-size: 26rpx;
  			}
  		}
  		.publish-date {
  			color: #7763ce;
        font-size: 24rpx;
  		}
  	}
  }
  .card-item:hover {
  	box-shadow: 0px 1px 3px 0px rgba(0, 21, 41, 0.12);
  	h4 {
  		color: rgb(37, 67, 235);
  	}
  }
</style>
