import request from "../request.js";

const MODULE = "schoolForum";

// 获取校园论坛信息
const fetchForumList = () => request.globalRequest(`${MODULE}/list`);
// 发布帖子
const submitForum = (params) =>
  request.globalRequest(`${MODULE}/publish`, "post", params);

export default {
  fetchForumList,
  submitForum,
};
