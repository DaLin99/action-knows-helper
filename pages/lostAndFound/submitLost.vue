<template>
  <view class="submit-info-container">
    <uni-forms 
      ref="form" 
      :value="formData" 
      :rules="rules">
      <uni-forms-item
        label="丢失时间" 
        name="formData.lostTime"
      >
        <uni-datetime-picker
          v-model="formData.lostTime" 
          type="date" 
          start="2000-06-01 06:30:30" 
          end="2030-6-1" 
          return-type="timestamp"/>
      </uni-forms-item> 
      <uni-forms-item
        label="丢失地点"
        name="lostPlace"
      >
        <input
          v-model="formData.lostPlace"
          type="text"
          placeholder="请填写丢失地点"
          class="mt12"
        >
      </uni-forms-item>
      <uni-forms-item 
        label="物品名称"
        name="lostName"
        class="mt12">
        <input 
          v-model="formData.lostName" 
          type="text" 
          placeholder="请填写物品名称" >
      </uni-forms-item>
      <uni-forms-item 
        label="物品分类" 
        name="lostType">
        <picker
          :range="lostTypeList" 
          mode="selector"
          class="mt12"
          @change="pickType"
        >{{ lostTypeList[formData.lostType] || '请选择分类' }}</picker>
      </uni-forms-item>
      <uni-forms-item 
        name="losterTell" 
        label="联系方式"
        class="mt12">
        <input
          v-model="formData.losterTell" 
          type="text" 
          placeholder="请填写联系方式" 
          class="mt12">
      </uni-forms-item>
      <uni-forms-item 
        label="Wechat" 
        name="losterWechat"
        class="mt12">
        <input
          v-model="formData.losterWechat" 
          type="text" 
          class="mt12"
          placeholder="请填写Wechat" >
      </uni-forms-item>
      
      <uni-forms-item 
        label="选择图片" 
        name="imageUrl">
        <view class="image-picker">
          <cover-image 
            v-if="formData.imageUrl"
            :src="formData.imageUrl" 
            class="image-preview"
            @click="previewImage(formData.imageUrl)"
          />
          <button
            type="default" 
            @click="pickFile"
          > +
          </button>
        </view>
      </uni-forms-item>
      {{ formData.imageUrl }}
      <uni-forms-item 
        label="备注信息" 
        name="remarkInfo">
        <textarea
          v-model="formData.remarkInfo" 
          placeholder="请填写备注信息"
          class="mt12"/>
      </uni-forms-item>
    </uni-forms>
    <button 
      type="primary" 
      @click="submit">发布</button>
    <view 
      v-for="(item, index) in Object.keys(formData)" 
      :key="index">
      {{ item }}: {{ formData[item] }}
    </view>
  </view>
</template>

<script>
import MxDatePicker from '@/components/mx-datepicker/mx-datepicker.vue';
import COS from 'cos-wx-sdk-v5';
export default {
  components: {
    MxDatePicker,
  },
  data() {
    let formData = {};
    let formRules = {} ;
    const arr = [
      {
        name:'lostTime',
        label:'丢失时间',
      },{
        name:'lostPlace',
        label:'丢失地点',
      },{
        name:'lostName',
        label:'物品名称',
      },{
        name:'lostType',
        label:'物品分类',
      },{
        name:'losterTell',
        label:'联系方式',
      }
      ,{
        name:'losterWechat',
        label:'wechat',
      },{
        name:'remarkInfo',
        label:'备注信息',
      },{
        name:'imageUrl',
        label:'图片',
      }
    ];  
    arr.forEach(item => formData[item.name] = '' );
    arr.forEach((item,index) => {
      formRules[item.name] = {
        rules:[
          {
            required:true,
            errorMessage:`请选择/填写${item.label}`
          }
        ]
      };
    });
    this.rules = formRules;
    this.formData = formData;
    return {
      lostTypeList:['日用品', '学习书籍', '其他'],
      showPicker: false,
      formData: formData,
      rules: formRules
    };
  },
  
  created() {
  },
  methods: {
    onShowDatePicker(type) {
      //显示
      this.type = type;
      this.showPicker = true;
      this.value = this[type];
    },
    // 点击下拉框选择
    pickType(e,value) {
      this.formData.lostTime ='2020-12-12';
      this.formData.lostType = e.detail.value;
    },
    onSelected(e) {
      //选择
      this.showPicker = false;
      if (e) {
        this.lostTime = e.value;
        this[this.type] = e.value;
        //选择的值
        console.log('value => ' + e.value);
        //原始的Date对象
        console.log('date => ' + e.date);
      }
    },
    
    pickFile() {
      const Bucket = 'xqbzheng-1300584219';
      const Region = 'ap-guangzhou';
      const SecretId = 'AKIDve9XfEyiRxubz9wmEb8PORElCNQGnw96'; 
      const SecretKey= 'qUtGw7tkMipjaCdbQZSs0zoPyHYbZOrb';
      const cos = new COS({
        SecretId,
        SecretKey,
      });
      uni.chooseMessageFile({
        count: 1,
        type: 'image',
        success: (res)=>{
          const filePath = res.tempFiles[0].path;
          const filename = filePath.substr(filePath.lastIndexOf('/') + 1);
          const that = this;
          cos.postObject({
             Bucket,
             Region,
             Key: 'image/' + filename,
             FilePath: filePath,
             onProgress: function(progressData) {
                 console.log(JSON.stringify(progressData));
             }
          }, function(err, data) {
            console.log(err,data);
            if(!err) {
              that.formData.imageUrl = `https://${data.Location}`;
            }
          });
        }
      });
    },
    // 点击发布按钮
    submit() {
       this.$refs.form.submit().then(res=>{
           console.log('表单数据信息：', res);
       }).catch(err =>{
           console.log('表单错误信息：', err);
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
  height: 180rpx;
  display: flex;
  flex-direction: row;
  button{
    display: inline-block;
    margin: 0;
    width: 100rpx;
    height: 100rpx;
    background-color: #e1e9ea;
    color: #FFFFFF;
    font-size: 40rpx;
  }
  .image-preview {
    width: 200rpx;
    height: 200rpx;
  }
}
.mt12{
  margin-top: 12rpx;
}
</style>
