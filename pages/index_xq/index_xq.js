var WxParse = require('../../wxParse/wxParse.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    price:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getdata1(options);
    
  },
  getdata1:function(options){
    let _this = this;
    let get_id = options.id
    wx.request({
      url: 'https://mapi.xinlv123.com/xltx/mobile/goods/details?id='+get_id,
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var content = res.data.data.content
        WxParse.wxParse('content', 'html', content, _this, 5)

        _this.setData({
          imgs: JSON.parse(res.data.data.thumb),
          title: res.data.data.title,
          suggest_price: res.data.data.suggest_price,
          price: res.data.data.price,
        });
      }

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
  onShareAppMessage: function () {
  
  }
})