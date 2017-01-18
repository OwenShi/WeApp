//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    txt: 'xxx',
    project:['WHAT TO EAT','TODAY','WHAT TO SAY','I AM','A BEAR'],
    index:[1,2,3,4,5],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    wx.login({
      success:function(res){
        if (res.code) {
          console.log(res.code);
          console.log('onLoad')
          //调用应用实例的方法获取全局数据
          wx.getUserInfo({
            success: function(res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女 
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country

              console.log(userInfo);
              console.log(nickName);
              console.log(avatarUrl);
              console.log(gender);
              console.log(province);
              console.log(city);
              console.log(country);
            }
          })
        }else{
          console.log('false');
        };
      }
    })
  },
  project1:function(e){
    var that = this;
    var id = e.currentTarget.id;
    app.requestDetailid = id;
    console.log(id);
    wx.navigateTo({
      url: '../eat/eat'
    })
  },
  project2:function (e) {
    var that = this;
    var id = e.currentTarget.id;
    app.requestDetailid = id;
    console.log(id);
    wx.navigateTo({
      url:'../diary/diary'
    })
  },
  search:function(e){
    var that = this;
    wx.navigateTo({
      url: '../search/search'
    })
  },
  showtips:function(e){
    wx.showActionSheet({
      itemList: ['作者好帅啊', '点我和点第一个一样', '听楼上两个的'],
      success: function(res) {
        wx.showToast({
          title: '您的选择非常正确',
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(res) {
        console.log(res.errMsg)
      }
    })
  },
  testInput:function(){
    var that = this;
    wx.navigateTo({
      url:'../input/input'
    })
  }
  // showmsg:function(e){
  //   wx.showToast({
  //     title: '您的选择非常正确',
  //     icon: 'success',
  //     duration: 2000
  //   })
  // }
})
