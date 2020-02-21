let ajaxTimes=0;
export const request=(params)=>{
    ajaxTimes++;
    // 显示加载中
    wx.showLoading({
        title: '加载中',
        mask:true
      });
     
    // 定义功能的url
    const baseUrl ="http://localhost:8080";
    console.log(params);
    
    return new Promise((resolve,reject)=>{
        wx.request({
           ...params,
           url:baseUrl+params.url,
           success:(result)=>{
            resolve(result);
           },
           fail:(err)=>{
            reject(err);
           },
           complete:()=>{
            ajaxTimes--;
            if(ajaxTimes === 0) {
                wx.hideLoading();
            }
         
           }
        });
          
    });
}