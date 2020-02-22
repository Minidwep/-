// pages/index1/index.js
import {
  request ,uploadFile
} from "../../request/index";

import {
  showToast,showModal, chooseImage
} from "../../utils/asyncWx";
import regeneratorRuntime from '../../lib/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:'',
    showImgModal: false,
    showImgContent:true,
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
    },
    isUploaded:false
  },
  params:{
    url: '',
    filePath: '',
    name: '',
    formData: {
      'user': 'test'
    },
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
      this.params={
        url:"/fileUpload",
        filePath:this.data.tempFilePaths[0],
        name: 'file',
        formData: {
          'user': 'test'
        }
      }
      let result = await uploadFile(this.params);
      
      if(result.statusCode == 500){
        isUploaded = !isUploaded;
      }
      this.setData({
        isUploaded,
        showImgContent:false
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