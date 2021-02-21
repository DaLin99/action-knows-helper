import urlConfig from './config.js';

const request = {};
const headers = {};
    
request.globalRequest = (url, method, data, power) => {
     return new Promise((resolve, reject) => {
		 return uni.request({
		         url: urlConfig + url,
		         method,
		         data: data,
		         dataType: 'json',
		         header: headers
		     }).then(res => {
				 console.log(res);
		         if (res[1].data && res[1].data.code == 1) {
		             resolve(res[1].data);
		         } else {
		             reject(res[1].data);
		         }
		     }).catch(parmas => {
				console.warn(parmas);
				reject('小程序后台发生位置异常');
		 　　});
	 });
    
 };
 export default request;