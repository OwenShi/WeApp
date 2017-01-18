var app = getApp();
Page({
    data: {
        title:""
    },
    onLoad: function(){
        var that = this;
        var id = app.requestDetailid;
        that.setData({
            title:id
        })
    }
})