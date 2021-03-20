<template>
  <div class="forum-detail-container">
    <div class="flex-top">
      <div class="avator-name-container">
        <img src="../../static/logo.png" class="avator" />
        <span>Joyce</span>
      </div>
      <div class="content-container">
        <span class="date">2021-3-12</span>
        <div>
          时间过得太快了，没想到我们即将离开大学的校园，走入社会，现在有些紧张和焦虑的心情，有朋友也是这样的吗？我们如何过渡这个身份的转变呢？有朋友愿意分享吗？
        </div>
      </div>
      <div class="icon-nums-container" @click="thumbUp(true)">
        <img src="../../static/thumbs-up.svg" alt="" class="thumbs-up" />
        <span class="thumbs-up-nums">312</span>
        <img src="../../static/see.svg" alt="" class="see" />
        <span class="see-nums">502</span>
      </div>
      <div class="comment-container">
        <h3>评论</h3>
        <div
          class="comment-item-container"
          v-for="(item, index) in commentList"
          :key="index"
        >
          <div class="left">
            <img :src="item.avator" alt="" class="see" />
          </div>
          <div class="right">
            <h5>
              <span class="name">{{ item.name }}</span>
              在{{ item.date }}说
            </h5>
            <p class="comment">{{ item.comment }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="input-container">
      <div class="input-btn">
        <Input class="input-comment" placeholder="想说什么就说出来吧" />
        <button class="btn" type="primary" size="mini">评论</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commentList: [
        {
          avator: "../../static/image/avator1.png",
          name: "黄圳",
          comment: "顺利答辩结束是第一步，接下来好好工作。",
          date: "2021-3-12",
        },
        {
          avator: "../../static/image/avator2.png",
          name: "林子",
          comment: "如果心里有不开心的还是需要找朋友们聊聊天，开心才是最重要~",
          date: "2021-3-13",
        },
        {
          avator: "../../static/image/avator3.png",
          name: "李想可",
          comment:
            "我身边的同学们都是这样的心情，但是很少人敢勇敢的说出来，你说出来也很棒了！",
          date: "2021-3-13",
        },
        {
          avator: "../../static/image/avator4.png",
          name: "陈浩南",
          comment: "顺利答辩结束是第一步，接下来好好工作。",
          date: "2021-3-12",
        },
        {
          avator: "../../static/logo.png",
          name: "林同学",
          comment: "好好学习天天向上！",
          date: "2021-3-13",
        },
        {
          avator: "../../static/logo.png",
          name: "李想可",
          comment:
            "我身边的同学们都是这样的心情，但是很少人敢勇敢的说出来，你说出来也很棒了！",
          date: "2021-3-13",
        },
      ],
    };
  },
  methods: {
    thumbUp(isBoolean) {
      uni.showToast({
        title: isBoolean ? "取消点赞成功" : "点赞成功",
        duration: 20000,
        icon: "success",
      });
    },
    show() {
      uni.showToast({
        title: "评论成功",
        duration: 20000,
        icon: "success",
      });
    },
  },
};
</script>
<style scoped>
.forum-detail-container {
  padding: 48rpx;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flex-top {
  margin-bottom: 48rpx;
}
.avator-name-container {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}
.avator {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  margin-right: 16rpx;
}
.date {
  color: rgb(71, 70, 68);
  opacity: 0.5;
}
.content-container {
  padding: 24rpx 0rpx;
  border-top: solid 1px #f3f3f3;
  border-bottom: solid 1px #f3f3f3;
  opacity: 0.6;
  margin-bottom: 24rpx;
}
.icon-nums-container {
  display: flex;
  align-items: center;
}
.thumbs-up,
.see {
  width: 40rpx;
  height: 40rpx;
}
.thumbs-up-nums,
.see-nums {
  font-size: 12px;
  margin: 0rpx 16rpx;
}
.comment-container {
  margin-top: 36rpx;
  padding: 16rpx 0rpx;
  border-top: solid 1px #f3f3f3;
}
.comment-item-container {
  display: flex;
  color: rgb(59, 56, 56);
  border-bottom: solid 1px #f3f3f3;
  padding: 16rpx 0rpx;
  opacity: 0.7;
}
.left {
  margin-right: 16rpx;
}
.comment {
  font-size: 14px;
}
.name {
  color: rgb(1, 2, 2);
  margin-right: 16rpx;
}
.input-container {
  width: 100%;
  background: rgb(180, 236, 206);
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 3;
  padding: 24rpx 0;
}
.input-comment {
  width: 600rpx;
  border: solid 1px black;
  border-radius: 20rpx;
}
.input-btn {
  display: flex;
  align-items: center;
}
.btn {
}
</style>
