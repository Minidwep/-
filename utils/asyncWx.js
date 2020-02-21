/* promise 形式的 showToast */
export const showToast = ({
    title
}) => {
    return new Promise((resolve, reject) => {
        wx.showToast({
            title: title,
            icon: 'none',
            mask: true,
            success: (result) => {
                resolve(result);
            },
            fail: (error) => {
                reject(error);
            },
            complete: () => {}
        });
    })
}
/* promise 形式的 showModal */
export const showModal = ({
    title,content,cancelText,confirmText
}) => {
    return new Promise((resolve, reject) => {
        wx.showModal({
            title: title,
            content: content,
            showCancel: true,
            cancelText: cancelText,
            cancelColor: '#000000',
            confirmText: confirmText,
            confirmColor: '#3CC51F',
            success: (result) => {
                resolve(result);
             
            },
            fail: (error)=>{
                reject(error);
            },
            complete: ()=>{}
          });
    })
}

