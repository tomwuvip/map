// pages/map/details.js
let buildlData = require('../../resources/school')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tid: 0,
    bid: 0,
    building: {
      img: ['/img/loading.svg']//加载中图片地址
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bid = parseInt(options.bid);
    var tid = parseInt(options.tid);
    var data = buildlData.loadMap()[tid].data[bid];
    this.setData({
      bid: bid,
      tid: tid,
      building: data
    });
    wx.setNavigationBarTitle({
      title: data.name
    })
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.building.name + ' - 广东科技学院校园导览',
      path: "/pages/map/details?tid=" + this.data.tid + "&bid=" + this.data.bid,
      imageUrl: this.data.building.img[0],
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
})