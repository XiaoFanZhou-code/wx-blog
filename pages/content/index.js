// pages/content/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prizeIntroduction: '<span style="font-family:微软雅黑;font-size:24px;">继徐翔之后，又出一股市奇才，自创"狙击涨停三板斧"，被散户称之为“草根股神”的</span><span style="font-family:微软雅黑;font-size:24px;">秦泽晨引大量媒体报道！</span>',
    showShare: false,
    options: [
      { name: '微信', icon: 'wechat', openType: 'share' },
      { name: '微博', icon: 'weibo' },
      { name: '复制链接', icon: 'link' },
      { name: '分享海报', icon: 'poster' },
      { name: '二维码', icon: 'qrcode' },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 分享面板
   */
  handleMore() {
    this.setData({
      showShare: true
    })
  },
  
  onClick(event) {
    this.setData({ showShare: true });
  },

  onClose() {
    this.setData({ showShare: false });
  },

  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },

})