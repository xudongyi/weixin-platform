import axios from "axios";
import Qs from "qs";
let http,isDebug = true;
let hostname = location.hostname,port = location.port;
//let realUrl = "http://"+hostname+":"+port;//使用本地自己的服务
let realUrl = "http://127.0.0.1:8081";//使用本地自己的服务
let imgPath = realUrl+"/mobile/";//图片服务地址
/******URL配置开始******/
http = axios.create({
  baseURL: realUrl + "/weixin-platform/",
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
});

//添加请求拦截器
initInterceptors(http);
//初始化拦截器
function initInterceptors(instance) {
  instance.interceptors.request.use(function (config) {
    //在发送请求之前做某事
    if (config.data) {
      if (isDebug) {
        console.log("请求参数:", config.data)
      }
    }
    return config;
  }, function (error) {
    //请求错误时做些事
    console.log("请求发生异常!", error);
    return Promise.reject(error);
  });

  //添加响应拦截器
  instance.interceptors.response.use(function (response) {

    //对响应数据做些事
    if (response) {
      var status = response.status;
      if (status === 200 || status === 304) {
        if (isDebug) {
          console.log("请求url:" + response.config.url)
          console.log("返回结果:", response.data)
        }
        return response.data;
      } else if (status == 500) {
        alert("服务器内部错误!")
      } else {
        console.log("response结果:", response)
      }
      return response;
    }
  }, function (error) {
    //请求错误时做些事
    if (!isEmptyObject(error)) {
      console.log("发生异常:", error)
    }
    return Promise.reject(error);
  });
}

function isEmptyObject(e) {
  var t;
  for (t in e)
    return !1;
  return !0
}
export { http, imgPath};
