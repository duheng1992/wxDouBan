Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies : [],
    loading: true,
    start : 0,
    count : 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;   
    wx.request({
      // https://douban.uieee.com/v2/movie/subject/1292052
      url: 'https://douban.uieee.com/v2/movie/top250?start=' + that.data.start + '&count=' + that.data.count, //豆瓣数据
      method: "GET",
      header: {
        'content-type': 'json'//'application/xml' // 默认值
      },
      success: function (res) {
        //console.log(res.data)
        that.setData({
          movies: res.data.subjects,
          loading: false
        })
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
    console.log("xialai");
    //this.init();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    that.setData({
      count: that.data.count + 10,
      loading: true,
    });
    wx.request({
      // https://douban.uieee.com/v2/movie/subject/1292052
      url: 'https://douban.uieee.com/v2/movie/top250?start=' + that.data.start + '&count=' + that.data.count, //豆瓣数据
      method: "GET",
      header: {
        'content-type': 'json'//'application/xml' // 默认值
      },
      success: (res) => {
        //console.log(that.data.count)
        that.setData({
          movies: res.data.subjects,
          loading: false
        })

        console.log(res.data.subjects)
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  showDetail: (e) => {
    //console.log(e.currentTarget.id)
    if (e.currentTarget.id) {
      //跳转页面
      wx.navigateTo({
        url: '/pages/movieDetail/movieDetail?id=' + e.currentTarget.id,
      })
    } else {
      console.log("获取电影列表错误！")
    }
    
  }
})