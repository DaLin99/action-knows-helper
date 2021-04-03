<template>
  <view
    :key="index"
    class="recruit-info-item shadow-box"
    @click="$emit('showDetail', item.id)"
  >
    <view class="container-left">
      <view class="left-top">
        <view class="flex-box hover-height-light">
          <text>{{ item.jobType }}</text>
          <text class="salary">{{ item.salary }}</text>
        </view>
        <view class="flex-box company">
          <text>{{ item.company }}</text>
          <text>{{ item.address }}</text>
        </view>
      </view>
      <view class="left-bottom">
        <view class="flex-box">
          <text
            class="requirement-item"
            v-for="(requirementItem, requirementIndex) in requirements"
            :key="requirementIndex"
          >
            {{ requirementItem }}
          </text>
          <!-- <text class="date">{{ item.publishDate.split(" ")[0] }}</text> -->
        </view>
      </view>
    </view>
    <view class="container-right">
      <image :src="item.imageUrl" class="company-img" alt="" />
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
    requirements() {
      return this.item.educationRequirement?.split("，") || [];
    },
  },
};
</script>

<style lang="less" scoped>
.recruit-info-item {
  display: flex;
  height: 200rpx;
  padding: 24rpx;
  border-bottom: solid 1px #f3e2e2;

  .container-left {
    width: 70%;
    margin-right: 24rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .flex-box {
      display: flex;
      justify-content: space-between;
    }
    .date {
      color: #9e9696;
    }
  }
  .container-right {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    .company-img {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
  }
}
.recruit-info-item:hover {
  box-shadow: 0px 1px 3px 0px rgba(0, 21, 41, 0.12);
  .hover-height-light {
    color: rgb(34, 145, 236);
  }
}
.company {
  margin-top: 8px;
  font-size: 26rpx;
}
.salary {
  font-size: 18px;
  color: #f58c37;
}
.requirement-item {
  font-size: 15px;
  color: #807b7b;
}
</style>
