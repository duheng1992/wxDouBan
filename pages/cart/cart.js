const { request } = getApp().tools;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [],
    inputShowed: false, // 是否显示input搜索框
    searchValue: '',//查找值

  },

  // 点击label切换input显示
  showInput() {
    console.log('准备显示Input');
    // inputShowed 进行变更
    this.setData({
      inputShowed: true
    })
  },
  // 接收查找输入的值
  inputTyping(e) {
    let value = e.detail.value;
    // 获取本地存储的数据
    // wx.getStorageSync(key)
    let info = wx.getStorageInfoSync();
    //console.log(value);

    // info.keys是数据数组

    let newTextList = info.keys.filter(key => key.includes(value));
    //console.log(newTextList)
    this.setData({
      searchValue: value,
      newTextList
    })
    //wx.setStorageSync(this.data.searchValue, '');
  },

  searchBefore(e) {
    console.log("------searchBefore被调用了-------")
    console.log(e)
    //console.log(e.target.dataset.text)
    // data-value
    if (e.detail.value) {
      this.data.searchValue = e.detail.value;
    } else {
      this.data.searchValue = e.target.dataset.text;
    }
    // 调用下面函数
    this.doSearch()
  },
  // 搜索
  async doSearch(e) {
   
    //this.searchBefore(e);
    console.log(this.data.searchValue);
    // 发请求
    let searchInfo = await request({
      url: 'https://douban.uieee.com/v2/movie/search?q=\{' + this.data.searchValue + '\}',
      method: "GET",
      header: {
        'content-type': 'json',//'application/xml' // 默认值
        //加入cookie
        'cookie': wx.getStorageSync(this.data.searchValue)
      },
    });

    //console.log(searchInfo)
    //});
    // 更新视图
    this.setData({
      shopList: searchInfo.data.subjects
    });
    // 存储本地数据
    //console.log(this.data.searchValue)
    wx.setStorageSync(this.data.searchValue, '');

  },

  // 隐藏
  hideInput() {
    this.setData({
      inputShowed: false,
      searchValue: '',
    })
  },
  // 清除Input
  clearInput() {
    this.setData({
      searchValue: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let piaofang = await request({
      url: 'https://douban.uieee.com/v2/movie/us_box',
      header: {
        'content-type': 'json'//'application/xml' // 默认值
      },
    });
    console.log(piaofang)
    var ds = piaofang.data.subjects;

    this.setData({
      shopList: ds.map((d) => {
        return d.subject;
      })
    });
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
  onPullDownRefresh: async function () {
    let piaofang = await request({
      url: 'https://douban.uieee.com/v2/movie/us_box',
      header: {
        'content-type': 'json'//'application/xml' // 默认值
      },
    });
    //console.log(piaofang)
    var ds = piaofang.data.subjects;

    this.setData({
      shopList: ds.map((d) => {
        return d.subject;
      })
    });
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