//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎您！',
    userInfo: {},
    hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    categories: [
      {
        "id": 1,
        "name": "正在上映",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2onyj302u02umwz.jpg"
      },
      {
        "id": 2,
        "name": "洗浴足疗",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2j4dj302u02umwy.jpg"
      },
      {
        "id": 3,
        "name": "结婚啦",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i56i0j302u02u744.jpg"
      },
      {
        "id": 4,
        "name": "卡拉OK",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2uzvj302u02udfo.jpg"
      },
      {
        "id": 5,
        "name": "找工作",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2rnlj302u02umwz.jpg"
      },
      {
        "id": 6,
        "name": "辅导班",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i2zloj302u02udfn.jpg"
      },
      {
        "id": 7,
        "name": "汽车保养",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i69eij302u02ua9w.jpg"
      },
      {
        "id": 8,
        "name": "租房",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i6j2lj302u02u0sj.jpg"
      },
      {
        "id": 9,
        "name": "装修",
        "icon": "http://ww1.sinaimg.cn/large/006ThXL5ly1fj8w5i6z1pj302u02ua9u.jpg"
      }
    ],
  },
  /////轮播图事件///////
  //轮播图的切换事件
  swiperChange: function (e) {
    this.setData({
      //swiperCurrent: e.detail.current
    })
  },

  //点击指示点切换

  chuangEvent: function (e) {
    this.setData({
      //swiperCurrent: e.currentTarget.id
    })
  },

  //点击图片触发事件
  swipclick: function (e) {
    // console.log(this.data.swiperCurrent);
    // wx.switchTab({
    //   url: this.data.links[this.data.swiperCurrent]
    // })
  },
  ////////////////////////////
  onLoad: function () {
    //console.log(this.data.imgUrls)
  },
  getUserInfo: function(e) {
    console.log(e) //通过事件e可以获取到当前登录用户信息
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      //moto: e.detail.userInfo.nickName
    })
  },
  goToHome: (e) => {
    // console.log("taptap")
    // 带历史的
    // wx.navigateTo({
    //   url: '/pages/home/home',
    // })

    //跳转不同页签
    // wx.switchTab({
    //   url: '/pages/home/home',
    // })

    // 重定向
    wx.redirectTo({
      url: '/pages/home/home',
    })
  }
})
