<template>
  <view class="school-activity-detail">
    <view class="bgc-container">
      <image 
        :src="imgPath"
        mode=""/>
    </view>
    <view class="date-and-btn">
      <view class="date-container">
        <text class="date-title">报名时间</text>
        <text class="date-info">1天02时00分40秒</text>
      </view>
      <view class="btn-container">
        <text>我要报名</text>
        <text class="retain-nums" >还剩50人</text>
      </view>
    </view>
    <view class="info-container">
      <view class="info-item">
        <text class="label">组织者</text>
        <text >{{ organizer }}</text>
      </view>
      <view class="info-item">
        <text class="label">时间</text>
        <view class="flex-box">
          <text >{{ date.start }}</text>
          <text >{{ date.end }}</text>
        </view>
      </view>
      <view class="info-item">
        <text class="label">地点</text>
        <text >{{ place }}</text>
      </view>
      <view class="info-item">
        <text class="label">发布</text>
        <text >{{ publisher }}</text>
      </view>
    </view>
    <!-- 如果是讲座类型活动有老师介绍？ -->
    <view class="introduce-box">
      <view class="header-img-container">
        <image 
          :src="imgPath"
          class="header-img"
          mode=""/>
      </view>
      <text >Mariano Rasgado</text>
      <text class="company-name">公司名Jermenis</text>
      <text>介绍详情本次大会以 “新形势下的企业数据安全建设”为主题，
      旨在增进蚂蚁金服与生态合作伙伴之间的相互了解、分享实践经验、共筑数据安全</text>
    </view>
    <view class="des-container">
      <view
        v-for="(item,index) in des"
        :key="index" 
        class="des-item">
        {{ item }} 
      </view>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				imgPath: '../../static/image/activity-bgc.png',
				organizer:'马玉',
				 date:{
					 start:'2021年2月2日 周日 14：00',
					 end:'2021年2月2日 周日 18：00'
				 },
				 place:'亿万中国上海总部',
				publisher:'梅子',
				des:[
					'1.负责人是食品安全第一责任人，应当依照法律、法规和食品安全标准组织开展食品经营活动。',
					'2.经营食品应当符合环境卫生要求，具备食品销售、储存、运输和装卸的卫生条件。',
					'3.从事食品经营的人员应当遵守卫生要求，不符合法律规定健康要求的人员，不得参加接触直接入口食品的'
				]
			};
		},
		methods: {
			
		}
	};
</script>

<style lang="less">
.school-activity-detail {
	width: 100%;
	height: 100vh;
	background-color: #ebebf2;
	.bgc-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #ebebf2;
	}
	.date-and-btn {
		display: flex;
		margin-bottom: 20rpx;
		.date-container {
			width: 65%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background-color: #FFFFFF;
			padding-left: 36rpx;
			.date-title {
				font-size: 24rpx;
				color: gray;
			}
		}
		.btn-container {
			width: 35%;
			background-color: green;
			color: #FFFFFF;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 12rpx;
			.retain-nums {
				font-size: 24rpx;
			}
		}
	}
	.info-container {
		background-color: #FFFFFF;
		padding: 24rpx;
		border-bottom: solid 1px #f3f3f3;
		color: #a6a6a6;
		.info-item {
			display: flex;
			margin:16rpx 0rpx ;
			.label {
				width: 200rpx;
			}
			.flex-box {
				display: flex;
				flex-direction: column;
			}
		}
	}
	// 头像卡片
	.introduce-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		background: #ffffff;
		border: 1pt solid #f7f7f7;
		border-radius: 5pt;
		box-shadow: 0pt 4pt 8pt 1pt rgba(10,64,115,0.18); 
		padding: 36rpx;
		margin: 48rpx ;
		.header-img-container{
			width: 100%;
			height: 100%;
			border-radius: 50%;
			.header-img {
				border-radius: 50%;
			}
		}
		.company-name{
			color:#8d8d93 ;
		}
	}
	.des-container {
		background-color: #FFFFFF;
		padding-bottom: 240rpx;
		.des-item {
			padding: 16rpx 0rpx 12rpx 24rpx;
			background-color: #FFFFFF;
		}
	}
	
}
</style>
