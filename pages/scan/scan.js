// pages/qrcode/qrcode.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  scan(){
    // 允许从相机和相册扫码
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })

    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        console.log(res)
      }
    })
  }


})