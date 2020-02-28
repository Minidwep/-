// pages/feedback/index.js
import regeneratorRuntime from '../../lib/runtime';
import {
  request 
} from "../../request/index";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      // resultList:[
      //       {score:"0.208986",root:"商品-食物",keyword:"黄河鲤鱼",value: '0', checked: true },
      //       {score:"0.189116",root:"商品-食物",keyword:"食物",value: '1'},
      //       {score:"0.143195",root:"商品-其他",keyword:"菜肴",value: '2'},
      //       {score:"0.074472",root:"商品-食物",keyword:"糖醋黄鱼",value: '3'}
      // ],
      rubbishList:[
        {name:"干垃圾",type:"0",value: '0', checked: true },
        {name:"湿垃圾",type:"1",value: '1' },
        {name:"可回收垃圾",type:"2",value: '2' },
        {name:"有害垃圾",type:"3",value: '3' },
        
      ],
      feedParam:{
        resultChecked:'',
        rubbishChecked:0
      },
      
      
  },
  params:{
    url: '/feedback',
    data: ''
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let resultList= JSON.parse(options.resultList);
    resultList.forEach((element,index) => {
      element.value=index;
    });
    resultList.splice(4, 1);
    this.setData({
      resultList
    })
    console.log(resultList);
  },
  resultItemRadioChange: function (e) {
    let {feedParam,resultList} = this.data;
    resultList.forEach(element => {
      element.checked = element.value == e.detail.value;
    });
    feedParam.resultChecked = resultList[e.detail.value].keyword;
    this.setData({
      resultList,
      feedParam
    });
  },

  rubbishItemRadioChange: function (e) {
    let {feedParam,rubbishList} = this.data;
    rubbishList.forEach(element => {
      element.checked = element.value == e.detail.value;
    });
    feedParam.rubbishChecked = e.detail.value;
    this.setData({
        rubbishList,
        feedParam
    });
  },
  async handleImgFeedback(){
    let {feedParam} = this.data;
    this.params.data=feedParam;
    let res =await request(this.params);
    if(res.data.code == 100){
      wx.navigateTo({
        url: '../msgSuccess/index',
      });

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