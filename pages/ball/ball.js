// pages/ball/ball.js
let timer = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: ['#8cc540', '#009f5d', '#019fa0', '#019fde', '#007cdc', '#887ddd', '#cd7bdd', '#ff5675', '#ff1244', '#ff8345', '#f8bd0b'],
    bgcolor: '#8cc540',
    bgcolor1: '#009f5d'
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
    timer = setInterval(() => {
      this.bgRandow();
    }, 200);
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
  }
})