// 开启进度条

// NProgress.start();
// setTimeout(function(){
//     //结束进度条
//     NProgress.done();
// }, 2000);

//实现在第一个ajax发送的时候,开启进度条
//在所有的ajax请求都完成的时候，结束进度条

//ajax 全局事件

//ajaxComplete 当每个ajax 请求完成的时候,调用(不管成功还是失败都调用)
// ajaxError 当 ajax 请求失败的时候，调用
// ajaxSuccess 当 ajax 请求成功的时候, 调用
// ajaxSend  在每个ajax 请求发送前,调用
// ajaxstart 在第一个 ajax 发送时, 调用
//akaxStop 在所有的ajax发送请求完成时，调用

//ajaxStart 在第一个 ajax 发送时，调用
$(document).ajaxStart(function(){
    //开启进度条
    NProgress.start();
})

//ajaxStop 在所有的ajax完成时，调用
$(document).ajaxStop(function(){ //关闭进度条
    //关闭进度条
    setTimeout(function(){
        NProgress.done();
    },2000)
});