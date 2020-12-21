// pages/surprise/surprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    happyNum: 0,
    show: false,
    awards: [{
      name: '兰蔻极光水'
    }, {
      name: '哇哈哈苏打水'
    }, {
      name: '神仙水50ml'
    }, {
      name: '神仙水150ml'
    }, {
      name: '神仙水100ml'
    }, {
      name: '现金红包1元'
    }, {
      name: 'YSL口红自选'
    }, {
      name: '香奈儿口红经典'
    },{
      name: '迪奥999'
    }],
    index: 0
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  // 得到快乐
  getHappy: function () {
    let that = this;
    wx.showModal({
      title: '提示',
      cancelText: '刮刮乐',
      confirmText: '转盘抽奖',
      content: '请选择快乐系统',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '../happy/happy',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          wx.navigateTo({
            url: '../scratch/scratch',
          })
        }
      }
    })
  },

  // 更多快乐
  moreHappy: function () {
    this.setData({
      happyNum: this.data.happyNum += 1
    })
  },

  // 快乐启动器
  startHappy: function () {
    let ind = this.data.index;
    let len = this.data.awards.length;
    let that = this;
    let inter = Math.floor(Math.random()) * len;
    let timer = setInterval(() => {
      if(ind < len) {
        ind += 1;
      }else{
        ind = 0;
      }
      that.setData({
        index: ind
      });
    }, 100);
    setTimeout(() => {
      clearInterval(timer);
    }, 5000 - inter * 100);
  }
})