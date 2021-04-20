<template>
  <view 
    class="forum-item" 
    @click="$emit('onClick')">
    <view class="content-top"/>
    <title class="title mt10 mb5">Topic：{{ item.topicTitle }}</title>
    <text class="main-content">{{ item.topicContent }}</text>
    <view class="bottom">
      <view class="date">{{ publishDate }}</view>
      <view class="read-num">
        <text>已读人数{{ item.readNums }}</text>
      </view>
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
  },
  computed: {
    publishDate() {
      return this.item.publishDate?.split('').slice(0, 10).join('')
    }
  },
};
</script>

<style lang="less" scoped>
.forum-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 240rpx;
  border-bottom: 1rpx solid rgba(202, 199, 204, 0.5);
  .title {
    display: block;
    font-size: 30rpx;
    color: #2f3245;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .main-content{
    font-size: 24rpx;
    color: #abaaac;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bottom {
    color: #ccc;
    font-size: 26rpx;
    // background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50rpx;
    .date {
      width: 60%;
    }
    .read-num{
      width: 110rpx;
      text-align: start;
    }
  }
  .response {
    font-size: 22rpx;
    color: #ccc;
  }
}
</style>
