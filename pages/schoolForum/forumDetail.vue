<template>
  <view class="forum-detail-container">
    <view
      class="delete-btn"
      v-if="canBeDelete"
      @click="deleteForum(info.id)">
      删除
    </view>
    <view class="flex-top">
      <view class="avator-name-container">
        <img :src="info.avatorUrl" class="avator" />
        <text>{{ info.userName }}</text>
        <text class="date">发表于{{ info.publishDate }}</text>
      </view>
      <view class="title">
        Topic:{{info.topicTitle}}
      </view>
      <view class="content-container">
        <view>
          {{ info.topicContent }}
        </view>
      </view>
      <view
        class="icon-nums-container"
      >
        <view class="thumb">
            <img
              src="../../static/thumbs-up.svg"
              alt=""
              @click="thumbUp(info.isThumbUp === 1 ? 0 : 1)"
              :style="{ background: info.isThumbUp === 1 ? 'yellow' : '' }"
              class="thumbs-up"
            />
            <text class="thumbs-up-nums">{{ info.thumbUpNums }}</text>
        </view>
        <view class="thumb">
          <img src="../../static/see.svg" alt="" class="see" />
          <text class="see-nums">{{ info.readNums }}</text>
        </view>
      </view>
      <view class="comment-container">
        <h3>评论</h3>
        <view
          class="comment-item-container"
          v-for="(item, index) in info.commentList"
          :key="index"
        >
          <view class="left">
            <img :src="item.avatorUrl" alt="" class="see" />
          </view>
          <view class="right">
            <h5>
              <text class="name">{{ item.userName }}</text>
              在{{ item.publishDate }}说
            </h5>
            <p class="comment">{{ item.content }}</p>
          </view>
        </view>
      </view>
    </view>
    <view class="input-container">
      <view class="input-btn">
        <Input
          class="input-comment"
          placeholder="想说什么就说出来吧"
          v-model="commentValue"
        />
        <button class="comment-btn" type="primary" size="mini" @click="submitComment">
          评论
        </button>
      </view>
    </view>
  </view>
</template>
<script>
import api from "../../common/api/";
import { mapState } from 'vuex' 
export default {
  data() {
    return {
      info: {},
      commentValue: "",
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
  onLoad(opt) {
    console.log(this.userInfo);
    this.getDetail(opt.id);
  },
  computed:{
      ...mapState({
        'userInfo': state=>state.userInfo
      }),
      canBeDelete() {
        if(!this.userInfo?.openid || !this.info.userId) return false;
        return this.userInfo?.openid === this.info.userId
      }
  },
  methods: {
    async getDetail(id) {
      const { data } = await api.fetchForumDetail({
        id: Number(id),
      });
      this.info = data[0];
    },
    zeroFill(i) {
      if (i >= 0 && i <= 9) {
        return "0" + i;
      } else {
        return i;
      }
    },
    async submitComment() {
      let date = new Date(); //当前时间
      const month = this.zeroFill(date.getMonth() + 1); //月
      const day = this.zeroFill(date.getDate()); //日
      const hour = this.zeroFill(date.getHours()); //时
      const minute = this.zeroFill(date.getMinutes()); //分
      const second = this.zeroFill(date.getSeconds()); //秒

      //当前时间
      const curTime =
        date.getFullYear() +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;

      if (this.commentValue) {
        await api.submitComment({
          topicId: this.info.id,
          content: this.commentValue,
          publishDate: curTime,
        });
        this.getDetail(this.info.id);
        uni.showToast({
          title: "评论成功",
          duration: 2000,
          icon: "success",
        });
      } else {
        uni.showToast({
          title: "请输入评论内容",
          duration: 2000,
          icon: "none",
        });
      }
    },
    async thumbUp(isThumbUp) {
      await api.postThumbUp({
        id: this.info.id,
        isThumbUp: isThumbUp,
      });
      uni.showToast({
        title: isThumbUp === 1 ? "点赞成功" : "取消点赞成功",
        duration: 1000,
        icon: "success",
      });
      this.getDetail(this.info.id);
    },
    show() {
      uni.showToast({
        title: "评论成功",
        duration: 1000,
        icon: "success",
      });
    },
    async deleteForum(id) {
      await api.deleteForum(id)
      uni.navigateBack()
    }
  },
};
</script>
<style lang="less" scoped>
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
.title{
  font-size: 36rpx;
  color: #9eabc2;
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
  justify-content: space-between;
  .thumb{
    display: flex;
    align-items: center;
  }
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
  color: #9eabc2;
}
.name {
  color: rgb(1, 2, 2);
  margin-right: 16rpx;
}
.input-container {
  width: 100%;
  background: rgb(233, 235, 242);
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 3;
  padding: 24rpx 0;
}
.input-comment {
  width: 600rpx;
  color: #ccc;
  border: solid 1px #fff;
  border-radius: 20rpx;
}
.input-btn {
  display: flex;
  align-items: center;
}
.comment-btn {
  background-color: #adc4fb;
}
.delete-btn{
  position: absolute;
  right: 20rpx;
  top: 20rpx;
  color: #d7d7d7;
}
</style>
