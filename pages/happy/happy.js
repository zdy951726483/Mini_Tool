// pages/happy/happy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    happyNum: 0,
    awards: [{
      name: '现金红包1元',
      index: 0
    }, {
      name: '哇哈哈苏打水',
      index: 1
    }, {
      name: 'SK-Ⅱ (75ml)',
      index: 2
    }, {
      name: '雪碧 (250ml)',
      index: 3
    }, {
      name: '开始',
      index: 4
    }, {
      name: '现金红包10元',
      index: 5
    }, {
      name: 'RIO鸡尾酒（葡萄味）',
      index: 6
    }, {
      name: '菠萝啤2瓶',
      index: 7
    }, {
      name: '雪花1提',
      index: 8
    }],
    index: 0,
    btn: true
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
  // 快乐启动器
  startHappy: function () {
    let ind = this.data.index;
    let len = this.data.awards.length;
    let that = this;
    let inter = Math.random() * len;
    let timer = setInterval(() => {
      if (ind < len - 1) {
        if (ind === 3) {
          ind += 2;
        } else {
          ind += 1;
        }
      } else {
        ind = 0;
      }
      that.setData({
        index: ind
      });
    }, 100);
    let arr = this.data.awards;
    arr.forEach((item, index) => {
      if (index === 4) {
        item.name = '开始';
      }
    })
    setTimeout(() => {
      clearInterval(timer);
      that.setData({
        btn: true,
        awards: arr
      });
      let arr1 = that.data.awards;
      console.log(this.data.index)
      let str = arr1[this.data.index].name || '';
      wx.showModal({
        title: '中奖通知',
        content: `恭喜您获得了${str},请凭截图找赵先生领取`,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }, 5000 - inter * 100);
  },
  // 快乐加
  more: function () {
    let index = this.data.happyNum;
    index += 1;
    if (index > 10 && index <= 100) {
      let arr = [{
        name: '兰蔻极光水',
        index: 0
      }, {
        name: '哇哈哈苏打水',
        index: 1
      }, {
        name: 'SK-Ⅱ (75ml)',
        index: 2
      }, {
        name: 'SK-Ⅱ (230ml)',
        index: 3
      }, {
        name: '开始',
        index: 4
      }, {
        name: '现金红包10元',
        index: 5
      }, {
        name: 'YSL口红自选',
        index: 6
      }, {
        name: 'TF-16',
        index: 7
      }, {
        name: '迪奥#999',
        index: 8
      }];
      this.setData({
        awards: arr
      })
    } else if (index > 100) {
      let arr = [{
        name: '微信转账1000元',
        index: 0
      }, {
        name: '微信转账2000元',
        index: 1
      }, {
        name: 'SK-Ⅱ (230ml)',
        index: 2
      }, {
        name: '微信转账3000元',
        index: 3
      }, {
        name: '开始',
        index: 4
      }, {
        name: 'YSL口红6支大礼包',
        index: 5
      }, {
        name: 'SK-Two七夕大礼包',
        index: 6
      }, {
        name: 'TF口红自选*3',
        index: 7
      }, {
        name: '千元内眼影、水乳自选一',
        index: 8
      }];
      this.setData({
        awards: arr
      })
    }
    this.setData({
      happyNum: index
    });
  },
  // 判断是否开始
  start: function (event) {
    let ind = event.currentTarget.dataset.num;
    let arr = this.data.awards;
    arr.forEach((item, index) => {
      if (index === 4) {
        item.name = '抽奖中';
      }
    })
    if (ind === 4 && this.data.btn === true) {
      this.setData({
        btn: false,
        awards: arr
      });
      this.startHappy();
    }
  }
})