//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '你的时间账单',
    userInfo: {},
    billList: []
  },
  //事件处理函数
  bindBillViewTap: function(e) {
    var that = this;
    var target = e.currentTarget;
    var billId = target.id.split('-')[1];
    console.log('编辑账单'+billId);
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  bindBillLongTap: function(e) {
    //TODO 获取对应账单信息
    var that = this;
    var target = e.currentTarget;
    var billId = target.id.split('-')[1];
    wx.showModal({
      title: '提示',
      content: '是否删除该账单',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          that.deleteBill(billId);
        } else {
          console.log(res)
        }
      }
    });
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    that.getTodayBillList();
  },
  deleteBill: function(billId) {
    //TODO 删除对应账单
    console.log('删除账单'+billId);
  },
  getTodayBillList: function() {
    var that = this;
    // 模拟账单获取过程
    var billList = [{
      id: 1,
      text: 'name1',
      startTime: '2017-07-17 08:50:00',
      endTime: '2017-07-17 11:20:00',
      duration: 90
    }, {
      id: 2,
      text: 'name2',
      startTime: '2017-07-17 18:50:00',
      endTime: '2017-07-17 21:20:00',
      duration: 90
    }];
    that.setData({
      billList: billList
    });
  }
})
