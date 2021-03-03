<template>
  <view class="forum-item">
    <view class="content-top">
      <title class="title mt10 mb5">{{ item.title }}</title>
      <text class="response">{{ responseWords }}</text>
    </view>
    <text class="date">{{ item.date }}</text>
  </view>
</template>

<script>
  export default {
    props:{
      item: {
        type: Object,
        default:()=>({})
      }
    },
    computed: {
      responseWords() {
        return this.item.latestResponse
        ? `最新回复：${this.item.latestResponse}`
        : '呀～暂无人回复'
      }
    }
  };
</script>

<style lang="less" scoped>
  .forum-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 160rpx;
    border-bottom: 1rpx solid rgba(202, 199, 204, 0.5);
    .title{
      display: block;
      font-size: 34rpx;
      color: #000;
    }
    .response, .date{
      color: #ccc;
    }
    .response {
      font-size: 30rpx;
    }
    .date{
      font-size: 26rpx;
    }
  }
</style>
