/**
 * lostAndFound.js  失物招领请求api
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime:
 * @LastEditors: xqbzheng
 * @Description:
 */

import request from "../request.js";

const MODULE = "lostAndFound";

const submitLost = (params) =>
  request.globalRequest(`${MODULE}/submitLost`, "post", params);
const getLostAndFoundList = (params) =>
  request.globalRequest(`${MODULE}/list`, "get", params);
// const getLostAndFoundList = params => request.globalRequest('admin/recruitInfo/publish', 'post', {
//   id: '8',
//   jodDescription: '213123',
//   jodResponsibility: '213123',
//   jodRequirement: '213123',
//   jodType: '213123',
//   salary: '213123',
//   publishDate: '213123',
//   recuritEndDate: '213123',
//   eMail: '213123',
//   skillTagList: '213123',
//   educationRequirement: '213123',
//   publisher: '213123',
// });
const getUserLostAndFoundList = (params) =>
  request.globalRequest(`${MODULE}/userList`, "get", params);
const getdetail = (params) =>
  request.globalRequest(`${MODULE}/detail`, "get", params);

export default {
  submitLost,
  getLostAndFoundList,
  getUserLostAndFoundList,
  getdetail,
};
