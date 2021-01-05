import axios from "axios";
// 创建axios实例
const service = axios.create({
  baseURL: "http://124.71.9.4/slxhnhptservice",
  // baseURL: "http://192.168.33.164:8086",
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // request timeout
});

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      const res = response.data;
      return res;
    } else {
      return Promise.reject(response.statusText);
    }
  },
  error => {
    console.log("网络错误");
    return Promise.reject(error);
  }
);

export default service;
