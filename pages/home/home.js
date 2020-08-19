// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    show2: false,
    arr: [],
    timer: null,
    timerArr: null
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

  // 用户操作
  start: function () {
    this.setData({
      arr: []
    });
    this.draw();
    this.data.timer = setInterval(() => {
      this.draw();
    }, 300);
  },

  draw: function () {
    let width = wx.getSystemInfoSync().windowWidth;
    let left = Math.floor((Math.random() * width) + 1);
    let obj = {
      bg: `rgb(${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))})`,
      // bg: 'red',
      left: left,
      bottom: 0
    }
    let arr = this.data.arr;
    arr.push(obj);
    this.setData({
      show: true,
      show2: false,
      arr: arr
    });

    clearInterval(this.data.timerArr);
    this.data.timerArr = setInterval(() => {
      let arr = this.data.arr;
      arr.filter(item => {
        item.bottom += 1;
        item.left += (Math.random() - 0.5) * 2 * 10;
      });
      this.setData({
        arr: arr
      })
    }, 100);
  },

  // 进入不同系统
  into: function (event) {
    switch (event.currentTarget.dataset.type) {
      case '1':
        this.snow();
        break;
      case '2':
        this.start();
        break;
    }
  },

  // 下雪系统
  snow: function () {
    this.setData({
      arr: []
    });
    this.draw2();
    this.data.timer = setInterval(() => {
      this.draw2();
    }, 300);
  },

  draw2: function () {
    let width = wx.getSystemInfoSync().windowWidth;
    let left = Math.floor((Math.random() * width) + 1);
    let obj = {
      bg: '#fff',
      left: left,
      top: 0
    }
    let arr = this.data.arr;
    arr.push(obj);
    this.setData({
      show2: true,
      show1: false,
      arr: arr
    });

    clearInterval(this.data.timerArr);
    this.data.timerArr = setInterval(() => {
      let arr = this.data.arr;
      arr.filter(item => {
        item.top += 1;
        item.left += (Math.random() - 0.5) * 2 * 10;
      });
      this.setData({
        arr: arr
      })
    }, 100);
  }
})