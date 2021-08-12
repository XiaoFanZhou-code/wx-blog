// components/mine/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    functionBar: [
      {
        name: "联系作者",
        link: "../../static/icon/rightArrow.png",
        icon: "../../static/icon/contact.png"
      },
      {
        name: "Github",
        link: "../../static/icon/rightArrow.png",
        icon: "../../static/icon/GitHub.png"
      },
      {
        name: "web端博客",
        link: "../../static/icon/rightArrow.png",
        icon: "../../static/icon/blog.png"
      },
      {
        name: "时间线",
        link: "../../static/icon/rightArrow.png",
        icon: "../../static/icon/timeLine.png"
      },
      {
        name: "分类",
        link: "../../static/icon/rightArrow.png",
        icon: "../../static/icon/classification.png"
      },
      {
        name: "消息",
        link: "../../static/icon/rightArrow.png",
        icon: "../../static/icon/message.png"
      },
      {
        name: "意见反馈",
        link: "../../static/icon/rightArrow.png",
        icon: "../../static/icon/feedBack.png"
      }
    ], // 功能栏
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 挑战界面
     * @param {*} e 侧栏名字
     */
    goTo(e) {
      console.log(e.currentTarget.dataset);
      let label = e.currentTarget.dataset.name;
      switch(label) {
        case label = "时间线":
          wx.navigateTo({
            url: '/pages/timeLime/index'
          })
          break;
        case label = "分类":
          wx.navigateTo({
            url: '/pages/classification/index'
          })
      }
    }
  }
})
