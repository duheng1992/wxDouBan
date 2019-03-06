const { request } = getApp().tools;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id : "",
    data : {},
    loading: true
  },

  //预览图片
  previewImage: function (e) {
    console.log(this.data)
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: [this.data.data.images.large] // 需要预览的图片http链接列表
    })
  },

  playVideo: function(e){
    //console.log(this.data.data.blooper_urls[0])
    wx.navigateTo({
      url: '/pages/video/video?path=' + this.data.data.trailer_urls[0]
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let info = await request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.id,
      header: {
        'content-type': 'json'//'application/xml' // 默认值
      },
    });
    let comments = await request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + options.id + '/comments',
      header: {
        'content-type': 'json'//'application/xml' // 默认值
      },
    });
    ///console.log(info)
    //console.log(comments)
    var obj = info.data;
    obj.comments = comments.data.comments;
    //console.log(obj)
    this.setData({
      id: options.id,
      data: obj,
      loading: false
    });
    //console.log(this.data.data)
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