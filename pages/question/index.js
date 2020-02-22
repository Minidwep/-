// pages/question/index.js
import {
  request
} from "../../request/index";

import {
  showToast,showModal
} from "../../utils/asyncWx";
import regeneratorRuntime from '../../lib/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    question_paper: [],
    index: 0,
    radioItems: [
      {name: '干垃圾', value: '0',corrected :2,checked:false},
      {name: '湿垃圾', value: '1',corrected :2,checked:false},
      {name: '可回收垃圾', value: '2',corrected :2,checked:false},
      {name: '有害垃圾', value: '3',corrected :2,checked:false}
  ],
  correct:0,
  maskFlag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },
  // 加载数据
  async getTestPaper() {
    const res = await request({
      url: "/question/getTestPaper"
    });
    this.setData({
      questions: res.data.extend.questions
    });
  },
  // 单选框改变事件
  // 1.获取被选择按钮
  // 2.判断用户是否答对当前题目
  // 3.提示用户反馈信息(答案正确 or 答案错误)
  // 4.回写当前单选框信息到页面渲染
  // 5.延时1.5s (自定义mask+反馈延时)
  // 6.判断是否为最后一个题目 如果是 显示成绩
  // 7.重置单选框状态 并且题目号+1
  async radioChange(e) {
    // 用户点击的单选框的值
    let checked = e.detail.value;
    let {correct,questions,index,radioItems} = this.data;
    // 题目答案
    let answer = questions[index].answer
    // 用户是否最对改题
    let answerIsTrue = checked == answer;

    for (var i = 0, len = radioItems.length; i < len; ++i) {
      if(radioItems[i].value == checked){
        if(answerIsTrue){
          radioItems[i].corrected =1;
          correct++;
          await showToast({title:"答对了"});
        
        }else{
          radioItems[i].corrected =0;
          await showToast({title:"它是"+radioItems[answer].name});
        } 
      } else {
        radioItems[i].corrected =2;
      }
  }
    this.setData({
      radioItems,
      correct,
      questions,
      maskFlag:true
    });

    if(index == 9){
     let result = await showModal({title:"您的成绩为",content:""+(correct+1)*10,cancelText:"返回", confirmText:"再来一次"})
      if(result.confirm){
       this.getOrtherPaper();
      }else if (res.cancel) {
        console.log('用户点击取消')
      } 
    } else {
        //延时显示下一个题
    setTimeout(()=> {
    
        radioItems.forEach(element => {
          element.checked =false;
          element.corrected =2;
        });
        this.setData({
          radioItems
        })
        index++;
        this.setData({
          index,
          maskFlag:false
        });
     }, 2000) //延迟时间 这里是1秒
    }
        
  },
  // 加载新数据
  async getOrtherPaper(){
    this.getTestPaper();
    let radioItemsInit= [
      {name: '干垃圾', value: '0',corrected :2,checked:false},
      {name: '湿垃圾', value: '1',corrected :2,checked:false},
      {name: '可回收垃圾', value: '2',corrected :2,checked:false},
      {name: '有害垃圾', value: '3',corrected :2,checked:false}
    ]
    this.setData({
      correct:0,
      index:0,
      radioItems:radioItemsInit
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
    this.getOrtherPaper();
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