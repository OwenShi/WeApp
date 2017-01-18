var app = getApp()
Page({
  data: {
    title:"",
    text:[
          'It\'s been a long day without you my friend',
          'And I\'ll tell you all about it when I see you again',
          'We\'ve come a long way from where we began',
          'Oh I\'ll tell you all about it when I see you again',
          'When I see you again',
          'Damn who knew all the planes we flew',
          'Good things we\'ve been through',
          'That I\'ll be standing right here',
          'Talking to you about another path',
          'I know we loved to hit the road and laugh',
          'But something told me that it wouldn\'t last',
          'Had to switch up look at things different see the bigger picture',
          'Those were the days hard work forever pays',
          'Now I see you in a better place',
          'Now I see you in a better place',
          'How could we not talk about family when family\'s all that we got?',
          'Everything I went through you were standing there by my side'
          ]

  },
  //事件处理函数
  onLoad: function (options) {
    console.log('onLoad')
    var that = this;
    var id=app.requestDetailid;
    that.setData({
      title:id
    });
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
      })
    });
  },
  showtable: function(){
    wx.request({
      url: 'https://apitest.bmkp.cn:370/enterprise/buspool/query',
      data: {
          city: '武汉市',
          pageIndex: -1,
          pageSize: 10,
          type: 1
      },
      header: {
          'content-type': 'application/json',
          'authorization': 'ef5f992e-3d16-4731-a7d7-ad2ede02a636'
      },
      method: 'POST',
      success: function(res) {
        console.log(res.data)
      }
    })
  }
})

