<template>
  <div class="submit-info-container">
    <uni-forms ref="form" :value="formData" :rules="rules">
      <uni-forms-item label="论坛标题" name="title">
        <input
          v-model="formData.title"
          type="text"
          placeholder="请填论坛标题"
          class="mt12"
        />
      </uni-forms-item>

      <uni-forms-item label="话题类别" name="type">
        <picker
          :range="lostTypeList"
          mode="selector"
          class="mt12"
          @change="pickType"
          >{{ lostTypeList[formData.type] || "请选择分类" }}</picker
        >
      </uni-forms-item>

      <uni-forms-item label="论坛内容" name="context">
        <textarea
          v-model="formData.context"
          placeholder="请填写论坛内容"
          class="mt12"
        />
      </uni-forms-item>
    </uni-forms>

    <!-- <uni-forms-item label="选择图片" name="imageUrl">
      <view class="image-picker">
        <cover-image
          v-if="formData.imageUrl"
          :src="formData.imageUrl"
          class="image-preview mb10"
          @click="previewImage(formData.imageUrl)"
        />
        <button type="default" @click="pickFile">+</button>
      </view>
    </uni-forms-item> -->
    <!-- <view v-for="(item, index) in Object.keys(formData)" :key="index">
      {{ item }}: {{ formData[item] }}
    </view> -->
    <div class="submit-btn">
      <button type="primary" @click="submit">发布</button>
    </div>
  </div>
</template>

<script>
import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
import COS from "cos-wx-sdk-v5";
import api from "../../common/api/index";
export default {
  components: {
    MxDatePicker,
  },
  data() {
    let formData = {};
    let formRules = {};
    const arr = [
      {
        name: "title",
        label: "论坛标题",
      },
      {
        name: "type",
        label: "论坛分类",
      },

      {
        name: "context",
        label: "论坛内容",
      },
    ];
    arr.forEach((item) => (formData[item.name] = ""));
    arr.forEach((item, index) => {
      formRules[item.name] = {
        rules: [
          {
            required: true,
            errorMessage: `请选择/填写${item.label}`,
          },
        ],
      };
    });
    this.rules = formRules;
    this.formData = formData;
    return {
      lostTypeList: ["生活", "学习", "其他"],
      showPicker: false,
      formData: formData,
      rules: formRules,
    };
  },

  created() {},
  methods: {
    onShowDatePicker(type) {
      //显示
      this.type = type;
      this.showPicker = true;
      this.value = this[type];
    },
    // 点击下拉框选择
    pickType(e, value) {
      this.formData.type = e.detail.value;
    },

    pickFile() {
      const that = this;
      const Bucket = "xqbzheng-1300584219";
      const Region = "ap-guangzhou";
      const SecretId = "AKIDve9XfEyiRxubz9wmEb8PORElCNQGnw96";
      const SecretKey = "qUtGw7tkMipjaCdbQZSs0zoPyHYbZOrb";
      const cos = new COS({
        SecretId,
        SecretKey,
      });
      uni.chooseMessageFile({
        count: 1,
        type: "image",
        success: (res) => {
          const filePath = res.tempFiles[0].path;
          const filename = filePath.substr(filePath.lastIndexOf("/") + 1);
          uni.compressImage({
            src: filePath,
            success(res) {
              const compressImagePath = res.tempFilePath;
              cos.postObject(
                {
                  Bucket,
                  Region,
                  Key: "image/" + filename,
                  FilePath: filePath,
                  onProgress: function (progressData) {
                    console.log(JSON.stringify(progressData));
                  },
                },
                function (err, data) {
                  console.log(err, data);
                  if (!err) {
                    that.formData.imageUrl = `https://${data.Location}`;
                  }
                }
              );
            },
          });
        },
      });
    },
    // 点击发布按钮
    submit() {
      this.$refs.form
        .submit()
        .then((res) => {
          api.submitLost({ ...res, type: "found" }).then(() => {
            uni.showToast({
              title: "发布成功",
            });
            // 页面回跳
            uni.navigateBack();
          });
        })
        .catch((err) => {
          console.log("表单错误信息：", err);
        });
    },
  },
};
</script>

<style lang="less" scope>
.submit-info-container {
  padding: 36rpx 38rpx;
  .form-item {
    margin-top: 24rpx;
    display: flex;
    // justify-content: space-between;
    .form-title {
      width: 180rpx;
    }
  }
}
.image-picker {
  display: flex;
  flex-direction: row;
  button {
    display: inline-block;
    margin: 0;
    width: 100rpx;
    height: 100rpx;
    background-color: #e1e9ea;
    color: #ffffff;
    font-size: 40rpx;
  }
  .image-preview {
    width: 200rpx;
    height: 200rpx;
  }
}
.submit-btn {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
