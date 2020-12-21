// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      name: '今天吃什么_奖池设置',
      type: '0'
    }, {
      name: '惩罚业哥哥_奖池设置',
      type: '1'
    }, {
      name: '奖励欣妹妹_奖池设置',
      type: '2'
    }]
  },
  // {
  //   name: '快乐大抽奖_奖池设置',
  //   type: '3'
  // }
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

  goSet(row) {
    console.log(row)
    let type = row.currentTarget.dataset.item.type;
    wx.navigateTo({
      url: `../setData/setData?type=${type}`,
    })
  }
})