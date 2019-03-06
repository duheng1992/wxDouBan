// pages/list/list.js
//const { formatTime } = getApp().tools;
const { request } = getApp().tools;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],// 电影列表
    start: 1,// 页码
    count: 20,
    id: '',// 路由参数
    viewCount: 6,// 页显示数
    hasMore: true,// 是否还有数

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1:获取路由参数
    this.data.id = options.id;
    this.loadShopListByPage();
  },

  async loadShopListByPage() {
    if (!this.data.hasMore) {
      wx.showToast({
        title: '没有更多数据啦！',
      });
      return;
    }
    // 2: 发起请求
    wx.request({
      // https://douban.uieee.com/v2/movie/subject/1292052
      url: 'https://douban.uieee.com/v2/movie/in_theaters?start=' + this.data.start + '&count=' + this.data.count, //豆瓣数据
      method: "GET",
      header: {
        'content-type': 'json'//'application/xml' // 默认值
      },
      success: (res) => {
       //console.log(res.data.subjects)
       var more = true;
       //判断是否没新数据了
        if (this.data.shopList.length == res.data.subjects.length){
          more = false;
        }
        // 视图更新
        this.setData({
          shopList: res.data.subjects,
          hasMore: more
        });
      }
    });

    // 当前页码是自增以后的，将这个页码计算总数，如果大于X-Total-Count
    // if ((startIndex + this.data.viewCount) > header['X-Total-Count']) {
    //   // 下次不必出发上啦触底
    //   this.data.hasMore = false;
    // }

    
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
    this.init();
    this.loadShopListByPage();
  },
  init() {
    this.data.shopList = [];
    //this.data.page = 1;
    this.data.hasMore = true;
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log("sdsd")
    //this.data.hasMore = true;
    if (this.data.hasMore){
      this.setData({
        count: this.data.count += 20
      });
      this.loadShopListByPage();
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})