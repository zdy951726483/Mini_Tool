// pages/ball/ball.js
const app = getApp();
let timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: ['#8cc540', '#009f5d', '#019fa0', '#019fde', '#007cdc', '#887ddd', '#cd7bdd', '#ff5675', '#ff1244', '#ff8345', '#f8bd0b'],
    bgcolor: '#8cc540',
    bgcolor1: '#009f5d',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
    // timer = setInterval(() => {
    //   this.bgRandow();
    // }, 200);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearTimeout(timer);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  goIn: function () {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  goEat: function () {
    wx.navigateTo({
      url: '../eatWhat/eat',
    })
  },

  bgRandow() {
    let len = this.data.colorList.length;
    let num = Math.round(Math.random() * len);
    let num1 = Math.round(Math.random() * len);
    this.setData({
      bgcolor: this.data.colorList[num],
      bgcolor1: this.data.colorList[num1]
    });
  },

  goMy() {
    wx.navigateTo({
      url: '../setting/setting',
    })
  }
})