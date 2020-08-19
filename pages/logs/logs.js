//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: ["嘻嘻哈哈"]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
