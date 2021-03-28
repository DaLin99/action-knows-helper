<template>
  <view class="forum-item">
    <view class="content-top"> </view>
    <title class="title mt10 mb5">标题：{{ item.topicTitle }}</title>
    <text>{{ item.topicContent }}</text>
    <text>{{ responseWords }}</text>
    <text class="date">{{ item.publishDate }}</text>
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
  .date {
    color: #ccc;
  }
  .response {
    font-size: 30rpx;
  }
  .date {
    font-size: 26rpx;
  }
}
</style>
