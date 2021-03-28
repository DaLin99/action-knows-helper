import request from "../request.js";

const MODULE = "schoolActivity";

// 获取学院活动信息
const fetchActivityList = () => request.globalRequest(`${MODULE}/list`);
const getActivityDetail = (params) =>
  request.globalRequest(`${MODULE}/detail`, "get", params);
// 报名
const applyActivity = (params) =>
  request.globalRequest(`${MODULE}/apply`, "post", params);
export default {
  fetchActivityList,
  getActivityDetail,
  applyActivity,
};
