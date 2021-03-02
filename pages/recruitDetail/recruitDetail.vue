<template>
  <view class="recruit-detail-container">
    <!-- 卡片信息 -->
    <view class="card">
      <view class="workType-salary">
        <text>{{ info.workType }}</text>
        <text class="salary">{{ info.salary }}</text>
      </view>
      <view class="requiredment-tags">
        <view
          v-for="(item,index) in info.requirement"
          :key="index" 
          class="requiredment-tag">
          <text class="requiredment-tag-text">{{ item }}</text>
        </view>
      </view>
      <view class="skill-item-container">
        <view
          v-for="(skillItem,index) in info.skills"
          :key="index" 
          class="skill-item">
          {{ skillItem }}
        </view>
      </view>
      <view class="update-time">
        <text>更新于：{{ info.date }}</text>
      </view>
    </view>
    <!-- 投递方式 -->
    <view class="email-box">
      简历投递Email：
      <text class="email">{{ info.email }}</text>
    </view>

    <!-- 职位描述 -->
    <text class="work-title">职位描述</text>
    <!-- 任职要求 -->
    <view class="work-requiredments">
      <text>任职要求</text>
      <view 
        v-for="(workReqItem,index) in info.workReq" 
        :key="index">
        {{ workReqItem }}
      </view>
    </view>
	
    <view class="work-responsibility">
      <text>岗位责任</text>
      <view 
        v-for="(workResItem,index) in info.workRes" 
        :key="index">
        {{ workResItem }}
      </view>
    </view>
    <view class="btn-container">
      <button 
        class="collect-btn" 
        type="primary">收藏</button>
    </view>
  </view>
  
</template>

<script>
	export default {
		data() {
			return {
				info:{	
					id:'1',
					company: '快手科技信息有限公司',
					workType: '前端工程师-校招实习',
					salary: '200/天',
					palce: '北京',
					requirement: ['在校应届', '本科'],
					imgPath: '../../static/image/activity-bgc.png',
					date: '2021-1-2',
					skills:['前端开发','Node.js', 'WEB开发','Vue', 'Webpack'],
					email:'921859239@qq.com',
					workReq:[
						'1.2 年以上的工作经验',
						'2.较为扎实的计算机基础和前端基础知识',
						'3.独立完成模块或一般难度子系统的设计和开发',
						'4.对前端工程化方面，能够掌握业内常用工程化工具的使用（例如webpack，fis，rollup等',
						'5.对前端安全性有较为全面的掌握（xss、csrf等），开发过程中能够有意识的规避安全风险',
						'6.熟悉node，能够使用node搭建工具，提高效率',
						'7.熟悉目前比较流行的框架，如 react、vue 等'
					],
					workRes:[
						'1. 负责前端开发工作，关注用户体验，综合产品逻辑和技术实现的考虑，推动产品用户体验的提升',
						'2. 对前端性能优化有深入的认知，能够根据项目特性选择合适的性能优化方案',
						'3. 能够根据需求，提前预测产品开发过程中的风险，确定排期计划',
						'4. 能够独立负责业务子项目研发进程或中项目团队主力，能够发现并解决技术问题',
					]
				},
			};
		},
		created(options) {
			console.log(options);
		},
		methods: {
			
		}
	};
</script>


<style lang="less" scope>
@import "./recruitDetail.less";
</style>

