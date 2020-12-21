// pages/setData/setData.js
import { wxData6, wxData5, wxData4, wxData7 } from '../datas/hd';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '0',
    list: [],
    show: false,
    foodName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
    });
    let arr = [];
    switch (options.type) {
      case '0':
        // 食物
        arr = wx.getStorageSync('foodList');
        if (!arr || arr.length === 0) {
          arr = wxData4;
        };
        wx.setNavigationBarTitle({title: '吃什么设置'})
        break;
      case '1':
        // 业哥哥
        arr = wx.getStorageSync('yeList');
        if (!arr || arr.length === 0) {
          arr = wxData6;
        };
        wx.setNavigationBarTitle({title: '惩罚业哥哥设置'})
        break;
      case '2':
        // 欣妹妹
        arr = wx.getStorageSync('xinList');
        if (!arr || arr.length === 0) {
          arr = wxData5;
        };
        wx.setNavigationBarTitle({title: '奖励欣妹妹设置'})
        break;
      case '3':
        // 快乐大抽奖
        arr = wx.getStorageSync('happyList');
        if (!arr || arr.length === 0) {
          arr = wxData7;
        };
        wx.setNavigationBarTitle({title: '快乐大抽奖设置'})
        break;
      case '4':
        arr = wx.getStorageSync('foodList');
        break;
    }
    this.setData({
      list: arr
    });
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

  delete(e) {
    let ind = e.currentTarget.dataset.item;
    let that = this;
    wx.showModal({
      title: '您确定要删除吗',
      content: '删除后不可恢复，请谨慎操作！',
      success(res) {
        if (res.confirm) {
          let list = that.data.list;
          list.splice(ind, 1);
          that.setData({
            list: list
          });
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          })
          that.cache();
        } else if (res.cancel) {

        }
      }
    });
  },

  cache() {
    let arr = this.data.list;
    switch (this.data.type) {
      case '0':
        wx.setStorage({
          data: arr,
          key: 'foodList',
        })
        break;
      case '1':
        wx.setStorage({
          data: arr,
          key: 'yeList',
        })
        break;
      case '2':
        wx.setStorage({
          data: arr,
          key: 'xinList',
        })
        break;
      case '3':
        wx.setStorage({
          data: arr,
          key: 'happyList',
        })
        break;
    }
  },

  add() {
    this.setData({
      foodName: '',
      show: true
    })
  },

  cancelModal() {
    this.setData({
      show: false
    })
  },

  okModal() {
    let arr = this.data.list;
    arr.push({
      name: this.data.foodName,
      index: this.data.list.length
    });
    this.setData({
      list: arr,
      show: false
    });
    this.cache();
  },

  bindFd(e) {
    this.setData({
      foodName: e.detail.value
    })
  }
})