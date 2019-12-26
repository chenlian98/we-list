const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    vertical: true,
    circular: true,
    imgs: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577191061881&di=3fc821ac39571cb8f8b9f8bd4e8adecf&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw870h562%2F20180226%2F588e-fyrwsqi3503146.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577191744982&di=0753c907e8634854022d36a332f700e9&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fb2096c6178bb20900bba1755c709409b.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577190233509&di=043214e4732bc936ade7ec16d6371d91&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F585a18eea4d61.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577190233508&di=02950e99a7a2957db6f3119b8a338e9a&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw1152h720%2F20180307%2F8b2e-fxpwyhv6409536.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577190676620&di=bb056eb9b5787db86ca1521cbbb67d73&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F15%2F20160915102018_cfZxn.jpeg'
    ],
    list: []
  },

  onShow() {
    const self = this //保存this
    // console.log(self)
    app.http({
      url: '/articles',
    }).then((res) => {
      self.setData({
        list:res.data
      })
    })
  },

  increase() {
    const self = this
    //console.log(self.data.itemVal)
    if (self.data.itemVal) {
      wx.showModal({
        title: '提示',
        content: '增加的数据',
        success (res) {
          if (res.confirm) {
            app.http({
              method: "POST",
              url: `/articles`,
              data: {
                title: self.data.itemVal
              }
           }).then((res) =>{
             self.onShow()
             // console.log(res)
            })
            self.setData({
              itemVal:''
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '不能为空！！！',
        icon: 'none',
        duration: 2000
      })
    }
  },
  //获得input value
  onInputChange(e) {
    this.setData({
      itemVal: e.detail.value
    })
  },

  //分页
  paging(){

  }
})
