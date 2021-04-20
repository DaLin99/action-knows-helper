<template>
  <view 
    class="card-item shadow-box" 
    @click="$emit('onClick')">
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
      <view class="check-times">
        <image :src="eyesImg" />
        <text>{{ item.checkTimes }}</text>
      </view>
      <text>{{ item.publishDate }}</text>
    </view>
    <view 
      v-if="showLabel" 
      :class="labelStyle">
      <view v-if="item.type === 'lost'">丢</view>
      <view v-else>拾</view>
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
    showLabel: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      eyesImg:
        'https://xqbzheng-1300584219.cos.ap-guangzhou.myqcloud.com/eyes.svg',
    };
  },
  computed: {
    labelStyle() {
      return `label ${this.item.type === 'lost' ? 'lost' : 'found'}`;
    },
  },
};
</script>

<style lang="less">
.card-item {
  position: relative;
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
      .title,
      .content {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal !important;
        -webkit-box-orient: vertical;
      }
      .content {
        font-size: 24rpx;
        color: #6a6a68;
        -webkit-line-clamp: 3;
      }
      .title {
        color: #122e0c;
        -webkit-line-clamp: 1;
      }
    }
  }
  .card-bottom {
    position: relative;
    align-items: center;

    .icon-publisher {
      display: flex;
      align-items: center;
      font-size: 30rpx;
      .publisher-name {
        color: #c9c6c6;
        font-size: 26rpx;
      }
      .publisher-avator {
        height: 40rpx;
        width: 40rpx;
        margin-left: 8rpx;
      }
    }
    .publish-date {
      color: #535252;
      font-size: 24rpx;
    }
    .check-times {
      display: flex;
      image {
        height: 40rpx;
        width: 50rpx;
      }
      text {
        color: #ccc;
        font-size: 24rpx;
      }
    }
  }
  .label {
    position: absolute;
    right: 0;
    top: 0;
    background-color: green;
    font-size: 30rpx;
    color: #fff;
    border-bottom-left-radius: 16rpx;
    padding: 10rpx;
  }
  .found {
    background-color: #8abafb;
  }
  .lost {
    background-color: #c6d9f2;
  }
}
.card-item:hover {
  box-shadow: 0px 1px 3px 0px rgba(0, 21, 41, 0.12);
  h4 {
    color: rgb(37, 67, 235);
  }
}
</style>
