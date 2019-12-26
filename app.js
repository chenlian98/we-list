import {apiBaseUrl} from "./config.js"


App({
  http({url, method = "GET", data = {} }){
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${apiBaseUrl}${url}`,
        method,
        data,
        success(res){
          resolve(res)
        },
        fail(error) {
          reject(error)
        }
      })
    })
  },
})