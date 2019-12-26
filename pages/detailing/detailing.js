const app = getApp()

Page({
  data: {
    article: {},
    isEdit: false,
    objectId: null
  },
  onInputChange(e) {
   // console.log(e)
    const {type} = e.currentTarget.dataset
    this.setData({
      [`article.${type}`]: e.detail.value
    })
  },
  onLoad: function (e) {
    const {objectId} = e
    const self = this
    self.setData({objectId})
    app.http({
      url: `/articles/${objectId}`
    }).then(res => {
      self.setData({
        article: res.data
      })
    })
    // console.log(objectId)
  },
  onEdit() {
    if (this.data.isEdit) {
      // console.log(this.data.article)
      app.http({
        url: `/articles/${this.data.objectId}`,
        method: 'PUT',
        data: this.data.article
      }).then(res => {
        wx.navigateBack({
          delta: 1  //小程序关闭当前页面返回上一页面
        })
        //console.log(res)
      })
    } else {
      this.setData({
        isEdit: true
      })
    }
  },

  del(){
    const  self = this;
    wx.showModal({
      title: '提示',
      content: '您是否要删除呢？',
      success (res) {
        if (res.confirm) {
          app.http({
            url: `/articles/${self.data.objectId}`,
            method: 'DELETE',
          }).then(res => {
            wx.navigateBack({
              delta: 1  //小程序关闭当前页面返回上一页面
            })
            //console.log(res)
          })
        }
      }
    })
  }
})
