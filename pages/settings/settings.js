
const { request } = getApp().tools;
const baseObj = require('./baseObj.js')
function initTime() {
  let arr = [];
  for (let i = 1; i < 25; i++) {
    arr.push(i);
  }
  return arr;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    name: '',
    // 地址
    address: '', latitude: '', longitude: '',
    time: initTime(), begin: '', end: '',
    categories: [], shopType: '',// 用户类型
    workDates: '',
  },
  // phone,name
  valueHandler(e) {
    //console.log(e)
    this.setData({
      //[e.target.dataset.type]获取的是data-type
      [e.target.dataset.type]: e.detail.value
    });
    //console.log(this.data)
  },
  // 选择位置
  chooseLocation() {
    //打开腾讯地图插件
    wx.chooseLocation({
      success: (res) => {
        // address,latitude,longitude
        this.data.latitude = res.latitude;
        this.data.longitude = res.longitude;
        this.setData({
          address: res.address
        });
      }
    })
  },
  // 保存picker数据
  changeTime(e) {
    //console.log(e.detail.value); // 索引
    // 获取dataType 知道要改变谁
    //this.data[e.target.dataset.type] = this.data.time[e.detail.value];
    //console.log(e.target.dataset.type)
    this.setData({
      // begin
      [e.target.dataset.type]: this.data.time[e.detail.value]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // let res = await request({
    //   url: 'categories'
    // });
    //console.log(res.data)

    this.setData({
      categories: [
        {
          id: 0,
          name: '程序员'
        },
        {
          id: 1,
          name: '教师'
        },
        {
          id: 2,
          name: '医生'
        },
        {
          id: 3,
          name: '学者'
        }
      ]
    });
  },
  // 保存类型
  saveType(e) {
    // detail.value索引
    //console.log(this.data.categories[e.detail.value])
    this.setData({
      shopType: this.data.categories[e.detail.value].name,
    })

  },
  getWeek(e) {

    this.setData({
      workDates: e.detail.value,
    })
  },

  //提交操作
  async addShop(e) {
    // 将引入的基本对象与this.data来合并
    Object.assign(baseObj, this.data);
    // let { data } = await request({
    //   url: 'shops',
    //   data: baseObj,
    //   method: 'post'
    // });

    console.log(baseObj);
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