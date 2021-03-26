import request from "../request.js";

const MODULE = "recruitInfo";

// 获取招聘list
const getRecruitInfoList = (params) => request.globalRequest(`${MODULE}/list`);
// 获取招聘详情
const getRecruitInfoDetail = (params) =>
  request.globalRequest(`${MODULE}/detail`, "get", params);
// 收藏
const postCollectRecruitInfo = (data) =>
  request.globalRequest(`${MODULE}/favoriteEdit`, "post", data);
export default {
  getRecruitInfoList,
  getRecruitInfoDetail,
  postCollectRecruitInfo,
};
