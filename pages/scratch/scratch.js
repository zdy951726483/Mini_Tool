// pages/scratch/scratch.js
import { wxData5, wxData6 } from '../datas/hd';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    color_list: ['#ef3429', '#f68f25', '#4ba846', '#0476c2', '#c077af', '#f8d29d', '#b4a87f', '#d0e4a8', '#4dc7ec'],
    title: '奖品',
    award: ['谢谢惠顾', '亲亲一下', '可乐一瓶', '火锅一顿', '抱抱一次', '口红一根', '啪啪一次', '再刮一次', '520红包'],
    punishment: ['不许吃饭', '打屁屁', '掐大腿根', '拖地一次', '做饭', '免受惩罚', '咬一口', '说二十遍"我爱你"', '不许上床'],
    bridge: [],
    pattern: '1',
    name: '欣妹妹',
    tit: '中奖啦',
    fir: '恭喜',
    roate: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = wx.getStorageSync('yeList');
    let arr1 = wx.getStorageSync('xinList');
    if (arr && arr.length > 0) {
      this.setData({
        punishment: arr
      })
    } else {
      this.setData({
        punishment: wxData6
      })
    }
    if (arr1 && arr1.length > 0) {
      this.setData({
        award: arr1
      })
    } else {
      this.setData({
        award: wxData5
      })
    }
    this.data.bridge = this.data.award;
    this.disorganize();
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

  // 打开刮奖
  open(e) {
    let num = e.currentTarget.dataset.item;
    let arr = this.data.list;

    if (!arr[num].show) {
      return wx.showToast({
        title: '请选择其他',
        icon: 'none',
        duration: 2000
      })
    }
    arr.filter((item, index) => {
      if (index === num) {
        item.show = false
      }
    });
    this.setData({
      list: arr
    })
    let text = arr[num].text;
    let name = this.data.name;
    wx.showModal({
      title: `${this.data.tit}`,
      content: `${this.data.fir}${name}中了 “${text}”`,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 打乱数组
  disorganize() {
    let arr = JSON.parse(JSON.stringify(this.data.bridge));
    Array.prototype.shuffle = function () {
      var array = this;
      var m = array.length,
        t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    };

    arr.shuffle();
    arr.splice(9);
    arr = arr.map((item, index) => { return { text: item.name, show: true, color: this.data.color_list[index] } });
    // arr = arr.shuffle();
    this.setData({
      list: arr
    });
    console.log(arr);
  },

  // 惩罚业哥哥模式
  punish() {
    this.data.bridge = this.data.punishment;
    this.setData({
      pattern: '2',
      title: '惩罚方式',
      name: '业哥哥',
      tit: '非常抱歉',
      fir: '倒霉的',
      roate: true
    });
    setTimeout(() => {
      this.setData({
        roate: false
      })
    }, 2000);
    this.disorganize();
  },
  // 奖励欣妹妹模式
  give() {
    this.data.bridge = this.data.award;
    this.setData({
      pattern: '1',
      title: '奖品',
      name: '欣妹妹',
      tit: '中奖啦',
      fir: '恭喜',
      roate: true
    });
    setTimeout(() => {
      this.setData({
        roate: false
      })
    }, 2000);
    this.disorganize();
  }
})