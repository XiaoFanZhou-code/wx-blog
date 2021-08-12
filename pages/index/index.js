//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // showModal(e) {
  //   console.log(e)
  //   this.setData({
  //     modalName: e.currentTarget.dataset.target
  //   })
  // },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  /**
   * 触摸开始
   * @param {*} e 
   */
   touchStart: function (e) {
    if (e.touches.length == 1) {
      this.setData({
        startX: e.touches[0].clientX
      });
    }
  },

  /**
   * 手指移动
   * @param {*} e 
   */
  touchMove: function (e) {
    if (e.touches.length == 1) {
      var moveX = e.touches[0].clientX;
      var towards = this.data.startX - moveX;
      this.setData({
        towards: towards
      })
    }
  },

  /**
   * 触摸结束
   * @param {*} e 
   */
  touchEnd: function (e) {
    let that = this
    if (that.data.towards != '') {
      if (that.data.towards < 0) {//向右
        console.log('向右')
        this.setData({
          modalName: "viewModal"
        })
      }
      if(that.data.towards > 0) {
        this.setData({
          modalName: null
        })
      }
    }
    that.setData({
      towards: ''
    })
  },
})
