//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World11',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    city: "武汉",
    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    imgUrls1: [

    ],
    dt1: [],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,



    index: 0,
    curHdIndex: 1,

    tab_txt: [
      {
        tab_name: '推荐'
      },
      {
        tab_name: '出境游'
      },
      {
        tab_name: '国内游'
      },
      {
        tab_name: '周边游'
      },
      {
        tab_name: '主题游'
      }



    ]
  },
  onLoad: function () {
    this.getdata1();
    this.getdata2();
    this.getdata3();

  },
  action_tit: function (e) {
    let _this = this
    _this.index = parseInt(e.currentTarget.id)
    this.setData({
      curHdIndex: e.currentTarget.id
    });
    wx.request({
      url: 'https://mapi.xinlv123.com/xltx/mobile/getDataList?paginate=10&type=1' + _this.curHdIndex,
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({
          dt1: res.data.data.data
        });
      }

    })

  },
  getdata1: function () {
    let _this = this
    wx.request({
      url: 'https://mapi.xinlv123.com/xltx/mobile/banner', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({
          imgUrls: res.data.data
        });
      }
    })
  },
  getdata2: function () {
    let _this = this
    wx.request({
      url: 'https://mapi.xinlv123.com/xltx/mobile/menu', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({
          imgUrls1: res.data.data
        });
      }
    })
  },
  getdata3: function () {
    let _this = this;
    wx.request({
      url: 'https://mapi.xinlv123.com/xltx/mobile/getDataList?paginate=10&type=1',
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        _this.setData({
          dt1: res.data.data.data
        });
      }

    })

  },
  go_xq:function(e){
    var nowid =e.currentTarget.id
   
    wx.navigateTo({
      url: '/pages/index_xq/index_xq?id='+nowid,
    })
  }

})
