//index.js
Page({
  data: {
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../static/images/WechatIMG56.jpeg"
        },
        {
          "id": 2,
          "imgurl": "../../static/images/WechatIMG57.jpeg"
        },
        {
          "id": 3,
          "imgurl": "../../static/images/WechatIMG57.jpeg"
        }
      ]
    }; 
    that.setData({
      lunboData: data.datas
    })
  }
})