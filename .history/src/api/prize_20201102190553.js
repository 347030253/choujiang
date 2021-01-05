import request from "@/util/request";
//抽奖奖项和规则
export function gzList() {
  return request({
    url: "/api/slxhCjgz/gzList",
    method: "get"
  });
}
//中奖列表
export function getHjmd(data) {
  return request({
    url: "/api/slxhCjphinfo/getHjmd",
    method: "get",
    params: data
  });
}
//抽奖
export function getCjCode(data) {
  return request({
    url: "/api/slxhCjphinfo/cj",
    method: "get",
    params: data
  });
}
//判断是否结束
export function GetIsJs(data) {
  return request({
    url: "/api/slxhCjphinfo/isJs",
    method: "get",
    params: data
  });
}
// 幸运奖规则
export function wsgzList(data) {
  return request({
    url: "/api/slxhCjgz/wsgzList",
    method: "get",
    params: data
  });
}
//幸运奖保存尾数
// export function saveWs(data) {
//   return request({
//     url: "/api/slxhHjws/saveWs",
//     method: "post",
//     params: data
//   });
// }
//幸运奖中奖名单
export function slxhHjws(data) {
  return request({
    url: "/api/slxhHjws",
    method: "get",
    params: data
  });
}
