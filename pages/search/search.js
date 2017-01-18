//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  //事件处理函数
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    //canvas
    const ctx = wx.createCanvasContext('Mycanvas');
    for (var i=0;i<6;i++){
      for (var j=0;j<6;j++){
        ctx.setFillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + 
                         Math.floor(255-42.5*j) + ',0)';
        ctx.fillRect(j*25,i*25,25,25);
      }
    }
    ctx.draw();

  },

})
