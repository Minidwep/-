// pages/index1/index.js
import regeneratorRuntime from '../../lib/runtime';
import {
  request ,uploadFile
} from "../../request/index";

import {
  showToast,showModal, chooseImage
} from "../../utils/asyncWx";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:'',
    showImgModal: false,
    showImgContent:true,
    rubbishList:[],
    resultList:[],
    isUploaded:false
  },
  params:{
    url:"/fileUpload",
    filePath:'',
    name: 'file',
    formData: {
      'user': 'test'
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  async handleUploadImg(){
    let res = await chooseImage({count:9});
    let tempFilePaths = res.tempFilePaths
    this.setData({
      tempFilePaths,
      showImgModal:true,
    })
  },
  modalCancel(){
    // 取消
    this.setData({
      showImgContent:true
    })
    console.log("取消上传");
  },
  async modalConfirm(){
    console.log("立刻上传");
    let {isUploaded} = this.data;
    if(!isUploaded){
      this.params.filePath=this.data.tempFilePaths[0];
      let result = await uploadFile(this.params);
      let rubbishResult = JSON.parse(result.data);
      console.log(rubbishResult);
      let {rubbishList,resultList} = rubbishResult.extend;
      rubbishList.forEach(element => {
        switch (element.type) {
          case 0:
            element.type = "干垃圾";
              break;
          case 1:
            element.type = "湿垃圾";
               break;
          case 2:
            element.type = "可回收垃圾";
               break;
          case 3:
            element.type = "有害垃圾";
               break;
        } 
        element.score = Math.ceil(element.score*100);
      });
      this.setData({
        isUploaded:!isUploaded,
        showImgContent:false,
        rubbishList:rubbishList,
        resultList
      })
    } else {
      console.log("取消");
      this.setData({
        showImgModal: false,
        isUploaded:!isUploaded,
        showImgContent:true
      })
    }
    

  },
  handleImgFeedback(e){
    wx.navigateTo({
      url: '../feedback/index?resultList='+JSON.stringify(this.data.resultList),
      success: (result)=>{
      },
      fail: ()=>{},
      complete: ()=>{}
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