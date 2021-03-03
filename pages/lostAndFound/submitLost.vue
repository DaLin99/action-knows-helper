<template>
  <view class="submit-info-container">
    {{ formData }}
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
        {{ formData.lostTime }}
        <!-- <picker mode="date">请选择丢失时间</picker> -->
      </uni-forms-item>
     
      <uni-forms-item
        label="丢失地点"
        name="lostPlace"
      >
        <input
          v-model="formData.lostPlace"
          type="text"
          placeholder="请填写丢失地点"
        >
      </uni-forms-item>
      <uni-forms-item 
        label="物品名称"
        name="lostName">
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
          :value="formData.lostType"
          v-model="formData.lostType"
          mode="selector"
        
        >请选择物品分类-{{ formData.lostType }}-</picker>
      </uni-forms-item>
      <uni-forms-item 
        name="losterTell" 
        label="联系方式">
        <input
          v-model="formData.losterTell" 
          type="text" 
         
          placeholder="请填写联系方式" >
      </uni-forms-item>
      <uni-forms-item 
        label="Wechat" 
        name="losterWechat">
        <input
          v-model="formData.losterWechat" 
          type="text" 
          
          placeholder="请填写Wechat" >
      </uni-forms-item>
      <uni-forms-item 
        label="备注信息" 
        name="remarkInfo"/>
      <textarea
        v-model="formData.remarkInfo" 
        placeholder="请填写备注信息" />
    </uni-forms>   
    <text style="color: red;">分类绑定值 & 差上传图片</text>
    <button 
      type="primary" 
      @click="submit">发布</button>
  
  </view>
</template>

<script>
import MxDatePicker from '@/components/mx-datepicker/mx-datepicker.vue';
export default {
  components: {
    MxDatePicker,
  },
  data() {
    return {
		lostTypeList:[1,2,3],
      showPicker: false,
      formData: {},
	  rules:{}
		
    };
  },
  
  created() {
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
		}
	];  
	  arr.forEach(item => formData[item.name]='' );
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
	console.log(1111);
	console.log(formRules);
	this.rules = formRules;
	this.formData = formData;
  },
  methods: {
    onShowDatePicker(type) {
      //显示
      this.type = type;
      this.showPicker = true;
      this.value = this[type];
    },
	// 点击下拉框选择
	bindPickerChange(e,value) {
	console.log(value,1111,e);	
	this.formData.lostTime ='2020-12-12';
	 this.$refs.form.setValue(this.formData.lostType,1);
	
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
	// 点击发布按钮
	submit() {
	           this.$refs.form.submit().then(res=>{
	               console.log('表单数据信息：', res);
	           }).catch(err =>{
	               console.log('表单错误信息：', err);
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

</style>
