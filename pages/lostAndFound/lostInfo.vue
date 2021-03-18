<template>
  <view class="lostInfo-container">
    <view class="">
      <view
        v-for="(item,index) in showLostInfo.filter(item=>item.eName === 'remarkInfo')"
        :key="index" 
        class="info-item">
        <text>{{ item.value }}</text>
      </view>
    </view>
    <view 
      v-for="(item,index) in showLostInfo.filter(item=>item.eName !== 'remarkInfo')"
      :key="index"
      class="info-item">
      <text class="label">{{ item.label }}</text>
      <text 
        :style="{ color: ['lostName','status'].includes(item.eName) ? 'red' :'#6c6f6f' }"
        class="value">{{ item.value }}</text>
    </view>
    <button>什么按钮好呢</button>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				showLostInfo:[
					{
						label:'备注信息',
						value:'11.29地铁七号线北京西，七点，大概八点半左右丢失，到烦透才知道。',
						eName:'remarkInfo',
					},{
						label:'发布时间',
						value:'2020-11-13',
						eName:'sumbitTime'
					},{
						label:'物品名称',
						value:'耳机',
						eName:'lostName'
					},{
						label:'物品分类',
						value:'手机数码',
						eName:'lostType'
					},{
						label:'丢失地点',
						value:'北京西路地铁',
						eName:'place'
					},{
						label:'联系方式',
						value:'12342384294',
						eName:'losttell'
					},{
						label:'wechat',
						value:'32123212',
						eName:'wechat'
					},{
						label:'当前状态',
						value:'丢失',
						eName:'status'
					}
				]
			};
		},
		methods: {
			
		}
	};
</script>

<style lang="less" scoped>
  .lostInfo-container {
  	padding: 24rpx 36rpx;
  	.info-item {
  		display: flex;
  		justify-content: space-between;
  		align-items: center;
  		margin-top: 24rpx;
  		padding-bottom: 24rpx;
  		border-bottom: solid 1px #f3f3f3;
  		.value {
  			color: #6c6f6f;
  		}
  	}
  }
</style>
