<template>
  <view class="submit-info-container">
    <uni-forms 
      ref="form" 
      :value="formData" 
      :rules="rules">
      <uni-forms-item
        label="丢失时间" 
        name="time"
      >
        <uni-datetime-picker
          v-model="formData.time" 
          type="date" 
          start="2000-06-01 06:30:30" 
          end="2030-6-1" 
          return-type="timestamp"/>
      </uni-forms-item> 
      <uni-forms-item
        label="丢失地点"
        name="place"
      >
        <input
          v-model="formData.place"
          type="text"
          placeholder="请填写丢失地点"
          class="mt12"
        >
      </uni-forms-item>
      <uni-forms-item 
        label="物品名称"
        name="title"
        class="mt12">
        <input 
          v-model="formData.title" 
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
        name="tell"
        label="联系方式"
        class="mt12">
        <input
          v-model="formData.tell"
          type="text" 
          placeholder="请填写联系方式" 
          class="mt12">
      </uni-forms-item>
      <uni-forms-item 
        label="Wechat" 
        name="wechat"
        class="mt12">
        <input
          v-model="formData.wechat" 
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
            class="image-preview mb10"
            @click="previewImage(formData.imageUrl)"
          />
          <button
            type="default" 
            @click="pickFile"
          > +
          </button>
        </view>
      </uni-forms-item>
      <uni-forms-item 
        label="备注信息" 
        name="content">
        <textarea
          v-model="formData.content" 
          placeholder="请填写备注信息"
          class="mt12"/>
      </uni-forms-item>
    </uni-forms>
    <button 
      v-if="!isEdit"
      type="primary" 
      @click="submit">发布</button>
    <button 
      v-else
      type="primary" 
      @click="submitEdit">提交修改</button>
    <!-- <button 
      type="primary" 
      @click="mockBtn">mock</button>
    <view 
      v-for="(item, index) in Object.keys(formData)" 
      :key="index">
      {{ item }}: {{ formData[item] }}
    </view> -->
  </view>
</template>

<script>
import MxDatePicker from '@/components/mx-datepicker/mx-datepicker.vue';
import COS from 'cos-wx-sdk-v5';
import api from '../../common/api/index'
export default {
  components: {
    MxDatePicker,
  },
  data() {
    let formData = {};
    let formRules = {} ;
    const arr = [
      {
        name:'time',
        label:'丢失时间',
      },{
        name:'place',
        label:'丢失地点',
      },{
        name:'title',
        label:'物品名称',
      },{
        name:'lostType',
        label:'物品分类',
      },{
        name:'tell',
        label:'联系方式',
      }
      ,{
        name:'wechat',
        label:'wechat',
      },{
        name:'content',
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
    return {
      lostTypeList:['日用品', '学习书籍', '其他'],
      showPicker: false,
      formData,
      rules: formRules,
      isEdit: false,
    };
  },
  
  created() {
  },
  onLoad(obj) {
    if(obj.dataItem) {
      const res = JSON.parse(obj.dataItem);
      res.imageUrl = res.imgPath
      Object.assign(this.formData, res)
      this.isEdit = true;
    }
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
      const that = this;
      const Bucket = 'xqbzheng-1300584219';
      const Region = 'ap-guangzhou';
      const SecretId = 'AKIDve9XfEyiRxubz9wmEb8PORElCNQGnw96'; 
      const SecretKey= 'qUtGw7tkMipjaCdbQZSs0zoPyHYbZOrb';
      const cos = new COS({
        SecretId,
        SecretKey,
      });
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        success: (res)=>{
          const filePath = res.tempFiles[0].path;
          const filename = filePath.substr(filePath.lastIndexOf('/') + 1);
          uni.compressImage({
            src:filePath,
            success(res) {
              const compressImagePath = res.tempFilePath;
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
          })
        }
      });
    },
    // 点击发布按钮
    submit() {
       this.$refs.form.submit().then(res=>{
         api.submitLost({...res, type:'lost'}).then(()=>{
           uni.showToast({
             title: '发布成功'
           });
           // 页面回跳
           uni.navigateBack();
         });
         
       }).catch(err =>{
           console.log('表单错误信息：', err);
       });
    },
    // 点击提交编辑按钮
    submitEdit() {
       this.$refs.form.submit().then(res=>{
         console.log(res)
         api.submitLost({...res, id: this.formData.id}).then(()=>{
           uni.showToast({
             title: '修改成功',
             success() {
               // 页面回跳
               uni.navigateBack({
                 delta:2,
               });
             }
           });
         });
         
       }).catch(err =>{
           console.log('表单错误信息：', err);
       });
    },
    mockBtn() {
     const data = {"time":1616256000000,"place":"123","title":"11","lostType":"0","tell":"123","wechat":"123","imageUrl":"https://xqbzheng-1300584219.cos.ap-guangzhou.myqcloud.com/image/DzhAsb7wQC3Pae4cda8e885eff9157f7b377563d6c9b.jpg","content":"123123","type":"lost","userId":"omT555KQGwEZOtSyfm9XH2bN4wm4"};
     api.submitLost(data).then(()=>{
       uni.showToast({
         title: '修改成功',
         success() {
           // 页面回跳
           uni.navigateBack({
             delta:2,
           });
         }
       });
     });
    }
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
