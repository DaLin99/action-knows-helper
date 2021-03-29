<template>
  <view class="forum-item" @click="$emit('onClick')">
    <view class="content-top"> </view>
    <title class="title mt10 mb5">标题：{{ item.topicTitle }}</title>
    <text>{{ item.topicContent }}</text>
    <text>{{ responseWords }}</text>
    <view class="bottom">
      <view class="date">{{ item.publishDate }}</view>
      <view class="read-num">
        <text>已读{{item.readNums}}</text>
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
            this.item.commentList[this.item.commentList.length - 1]?.content
          }结束`
        : "呀～暂无人回复";
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
  height: 260rpx;
  border-bottom: 1rpx solid rgba(202, 199, 204, 0.5);
  .title {
    display: block;
    font-size: 34rpx;
    color: #000;
  }
  .response,
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
    font-size: 30rpx;
  }
}
</style>
