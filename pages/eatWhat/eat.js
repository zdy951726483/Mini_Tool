// pages/eatWhat/eat.js
let timer = null;
let outTimer = null;
Page({

  /**
   * 页面的初始数据
   */
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    list: ['麻辣香锅', '肯德基', '麦当劳', '披萨', '米线', '小碗菜', '煎饼（手抓饼）', '炸鸡(韩式/叫了个鸡)', '鸡架', '烧烤', '火锅', '麻辣烫', '包子', '凉皮', '石锅拌饭', '饼+凉菜（猪头肉）', '烤鱼', '饺子', '方便面(酸辣粉)', '炒饼', '炒饭'],
    indicatorDots: false,
    vertical: true,
    autoplay: false,
    interval: 10,
    duration: 10,
    eatName: '',
    other: false,
    foodName: '',
    hp: 100,
    monster: false,
    img: 'img_01',
    text: '奶茶怪兽生气了！您被奶茶怪兽打屎了'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = wx.getStorage({
      key: 'foodList',
    });
    if (arr && arr.length > 0) {
      let arr1 = [...this.data.list, ...arr];
      this.setData({
        list: arr1
      });
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(timer);
    clearTimeout(outTimer);
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



  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  stop() {
    this.setData({
      autoplay: false
    });
    clearTimeout(outTimer);
  },

  start() {
    this.setData({
      autoplay: true
    });
    let time = Math.round(Math.random() * 10);
    outTimer = setTimeout(() => {
      let num = Math.random();
      if (num > 0.5) {
        clearTimeout(outTimer);
        this.meet();
      };
    }, time * 1000);
  },

  getNow(event) {
    this.setData({
      eatName: this.data.list[event.detail.current]
    })
  },

  add() {
    this.setData({
      other: true,
      foodName: ''
    });
  },

  cancel() {
    this.setData({
      other: false
    });
  },

  ok() {
    let foodList = wx.getStorage({
      key: 'foodList'
    });
    let arr = [];
    if (foodList && foodList.length > 0) {
      arr = foodList;
    }
    arr.push(this.data.foodName);
    let arr1 = [...this.data.list, ...arr]
    wx.setStorage({
      key: "foodList",
      data: arr
    });

    this.setData({
      other: false,
      list: arr1
    });
  },

  bindFd(e) {
    this.setData({
      foodName: e.detail.value
    })
  },

  meet() {
    timer = null;
    this.setData({
      monster: true,
      hp: 100
    });
    clearInterval(timer);
    let num = this.data.hp;
    timer = setInterval(() => {
      if (num > 0) {
        num--;
        this.setData({
          hp: num
        });
      } else {
        this.noBuy();
        clearInterval(timer);
      }
    }, 1000);
  },

  buy() {
    this.setData({
      monster: false
    });
    this.toast('img_02','恭喜，您贿赂了怪兽！活了下来！',2000);
  },

  noBuy() {
    this.setData({
      monster: false,
      autoplay: false
    });
    this.toast('img_01','奶茶怪兽生气了！您被奶茶怪兽打屎了',2000);
  },

  toast(img, text, time) {
    this.setData({
      result: true,
      img: img,
      text: text
    });
    setTimeout(() => {
      this.setData({
        result: false
      });
    }, time);
  }
})

