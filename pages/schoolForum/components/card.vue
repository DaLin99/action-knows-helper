<template>
  <view 
    class="forum-item" 
    @click="$emit('onClick')">
    <view class="content-top"/>
    <title class="title mt10 mb5">Topic：{{ item.topicTitle }}</title>
    <text class="main-content">{{ item.topicContent }}</text>
    <text class="response">{{ responseWords }}</text>
    <view class="bottom">
      <view class="date">{{ item.publishDate.split('').slice(0, 10).join('') }}</view>
      <view class="read-num">
        <text>已读{{ item.readNums }}</text>
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
    responseWords() {
      return this.item.commentList.length > 0
        ? `最新回复：${
            this.item.commentList[this.item.commentList.length - 1].content
          }`
        : '呀～暂无人回复';
    },
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
    color: #C0C0C0;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 3;
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
    color: #b5d6e1;
  }
}
</style>
