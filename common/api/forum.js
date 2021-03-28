import request from "../request.js";

const MODULE = "schoolForum";

// 获取校园论坛信息
const fetchForumList = () => request.globalRequest(`${MODULE}/list`);
// 发布帖子
const submitForum = (params) =>
  request.globalRequest(`${MODULE}/publish`, "post", params);
// 获取详情
const fetchForumDetail = (params) =>
  request.globalRequest(`${MODULE}/detail`, "get", params);
// 发布评论
const submitComment = (params) =>
  request.globalRequest(`${MODULE}/comment`, "post", params);
export default {
  fetchForumList,
  submitForum,
  fetchForumDetail,
  submitComment,
};
