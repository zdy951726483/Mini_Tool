const app = getApp()

Page({
  data: {
    array: [{
      money: '',
      reality: 0
    }],
    hongbao: '',
    manjian: '',
    canhe: '',
    peisong: ''
  },
  onLoad: function () {
  },
  bindMoney: function(e) {
    let ind = e.target.dataset.id;
    let arr = this.data.array;
    arr[ind].money = e.detail.value;
    this.setData({
      array: arr
    })
  },
  addNew: function() {
    let arr = this.data.array;
    arr.push({
      money: '',
      reality: 0
    })
    this.setData({
      array: arr
    })
  },
  del: function(e) {
    let ind = e.target.dataset.id;
    let arr = this.data.array;
    arr.splice(ind,1);
    this.setData({
      array: arr
    })
  },
  bindPS: function(e) {
    this.setData({
      peisong: e.detail.value
    })
  },
  bindHB: function (e) {
    this.setData({
      hongbao: e.detail.value
    })
  },
  bindMJ: function (e) {
    this.setData({
      manjian: e.detail.value
    })
  },
  bindCH: function (e) {
    this.setData({
      canhe: e.detail.value
    })
  },
  count: function() {
    let btn = false;
    for(let item of this.data.array){
      if(!item.money || item.money===''){
        btn = true;
      }
    }
    if(btn){
      wx.showToast({
        title: '填写完整后才可以计算',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    // 外卖总额
    let allMoney = 0;
    let tMoney = 0;
    let len = this.data.array.length;

    let canhe = parseFloat(this.data.canhe);
    let peisong = parseFloat(this.data.peisong);
    let manjian = parseFloat(this.data.manjian);
    let hongbao = parseFloat(this.data.hongbao);

    let canhepeisong = (canhe + peisong) / len;
    let arr = this.data.array;
    for (let item of arr){
      item.money = parseFloat(item.money);
      allMoney += item.money;
      tMoney += item.money;
    }
    allMoney += peisong;
    allMoney += canhe;
    allMoney -= hongbao;
    allMoney -= manjian; 
    // 此时allmoney是最后的钱
    tMoney += peisong;
    tMoney += canhe;
    
    arr.filter( res =>{
      res.reality = ((res.money + canhepeisong) / tMoney * allMoney).toFixed(2);
    })
    this.setData({
      array: arr
    })
    
  }
})
