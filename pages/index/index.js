// pages/index1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:'',
    showImgModal: 0,
    showImgContent:1,
    rusult:{
      list:[{
        keyWord:'玉米棒',
        type:'干垃圾'
      },{
        keyWord:'玉米粒',
        type:'湿垃圾'
      },{
        keyWord:'塑料袋',
        type:'可回收'
      },{
        keyWord:'电池',
        type:'有害垃圾'
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handleUploadImg(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res)=> {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        this.setData({
          tempFilePaths,
          showImgModal:1,
        })
      }
    })
  },
  modalCancel(){
    // 取消
    this.setData({
      showImgContent:1
    })
    console.log("取消上传");
  },
  modalConfirm(){
    console.log("立刻上传");
    // 1上传
    // 2上传后返回后台数据 加载动画
    // 3加载完成 填装数据
    this.setData({
      showImgContent:0
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