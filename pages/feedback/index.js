// pages/feedback/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        radioItems:[
            {score:"0.208986",root:"商品-食物",keyword:"黄河鲤鱼",value: '0', checked: true },
            {score:"0.189116",root:"商品-食物",keyword:"食物",value: '1'},
            {score:"0.143195",root:"商品-其他",keyword:"菜肴",value: '2'},
            {score:"0.074472",root:"商品-食物",keyword:"糖醋黄鱼",value: '3'}
      ],
      rubbishList:[
        {name:"干垃圾",type:"0",value: '0', checked: true },
        {name:"湿垃圾",type:"1",value: '1' },
        {name:"可回收垃圾",type:"2",value: '2' },
        {name:"有害垃圾",type:"3",value: '3' },
        
  ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let resultList= JSON.parse(options.resultList);
    // console.log(resultList);
  },
  resultItemRadioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
        radioItems: radioItems
    });
  },

  rubbishItemRadioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var rubbishList = this.data.rubbishList;
    for (var i = 0, len = rubbishList.length; i < len; ++i) {
        rubbishList[i].checked = rubbishList[i].value == e.detail.value;
    }

    this.setData({
        rubbishList: rubbishList
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