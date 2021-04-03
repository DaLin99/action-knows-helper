/**
 * utils.js  共用函数存放的地方
 * @Author: xqbzheng
 * @Date: 2021-2-21
 * @LastEditTime:
 * @LastEditors: xqbzheng
 * @Description:
 */
export function shuffle(a) {
  var length = a.length;
  var shuffled = Array(length);

  for (var index = 0, rand; index < length; index++) {
    rand = ~~(Math.random() * (index + 1));
    if (rand !== index) shuffled[index] = shuffled[rand];
    shuffled[rand] = a[index];
  }

  return shuffled;
}
