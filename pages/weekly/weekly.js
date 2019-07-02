// pages/weekly/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[
      {
        name:"泰坦尼克号",
        comment:"失去的才是永恒的。",
        imagePath:"/images/icons/titan.jpg",
        id:0
      },
      {
        name: "教父",
        comment: "最真实的黑帮电影",
        imagePath: "/images/icons/jf.jpg",
        id:1
      },
      {
        name: "阿甘正传",
        comment: "生活就像巧克力",
        imagePath: "/images/icons/agan.jpg",
        id:2
      }
    ]
  },
  f1:function(event){
    var movieId = event.currentTarget.dataset.movieId
    console.log(movieId);

    wx.navigateTo({
      url:'/pages/detail/detail?id=' + movieId
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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