/**
 * config.js  请求方法封装
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime:
 * @LastEditors: xqbzheng
 * @Description:
 */

import urlConfig from "./config.js";

const request = {};
const headers = {};
uni.getStorage({
  key: "userInfo",
  success: (res) => {
    uni.userId = res?.data?.openid;
  },
  fail: () => {
    uni.userId = "mock";
  },
});
request.globalRequest = (url, method, data, power) => {
  return new Promise((resolve, reject) => {
    return uni
      .request({
        url: urlConfig + url,
        method,
        data: {
          ...data,
          userId: uni.userId, // 固定把openid带上
        },
        dataType: "json",
        header: headers,
      })
      .then((res) => {
        if (res[1].data && res[1].data.code == 1) {
          resolve(res[1].data);
        } else {
          uni.showToast({
            title: res[1].data.message,
            icon: 'none',
            duration: 3000,
          })
          reject(res[1].data);
        }
      })
      .catch((parmas) => {
        reject("小程序后台发生位置异常");
      });
  });
};
export default request;
