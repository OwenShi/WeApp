var app = getApp();
Page({
    data: {
        add:true,
        title:"",
        diaryContent:"",
        diaryList:[],
        diaryThumbnailList:[],
        diaryThumbnail:"",
        diaryText:"",
        time:"12:01",
        timeList:[],
        date:"2017-01-01",
        dateList:[]
    },
    onLoad: function(){
        var that = this;
        var id = app.requestDetailid;
        that.setData({
            title:id,
        });
        wx.getStorage({
            key:'diaryList',
            success:function(res){
                that.setData({
                    diaryList:res.data
                })
            }
        });
        wx.getStorage({
            key:'diaryThumbnailList',
            success:function(res){
                that.setData({
                    diaryThumbnailList:res.data
                })
            }
        });
    },
    addDiary:function(){
        var that = this;
        that.setData({
            add:false,
            diaryText:"",
        })
        that.onLoad;
    },
    diarysubmit:function(e){
        var that = this;
        console.log(e.detail.value)
        if (!e.detail.value.diaryText){
            wx.showModal({
                title:'╭(╯^╰)╮',
                content:'一个字都不写是不行的哦',
                showCancel:false,
                confirmText:'好嘛我写'
            })
            return;
        }else if(e.detail.value.diaryText.match(/^\s+$/)){
            wx.showModal({
                title:'╭(╯^╰)╮',
                content:'只写空格是不行的哦',
                showCancel:false,
                confirmText:'好嘛我写'
            })
            return;
        }else{
            wx.showToast({
                title:"提交成功",
                icon:"success",
            });
        };
        var diaryList = that.data.diaryList;
        var diaryText = e.detail.value.diaryText;
        var diaryThumbnailList = that.data.diaryThumbnailList;
        var diaryThumbnail = that.data.diaryThumbnail;
        diaryList.unshift(diaryText);
        diaryText = that.trimLeft(diaryText);
        diaryThumbnail = diaryText.substring(0,9);
        diaryThumbnailList.unshift(diaryThumbnail);
        that.setData({
            diaryText:e.detail.value.diaryText,
            diaryList:diaryList,
            diaryThumbnailList:diaryThumbnailList,
            add:true
        });
        wx.setStorage({
            key:'diaryList',
            data:that.data.diaryList
        })
        wx.setStorage({
            key:'diaryThumbnailList',
            data:that.data.diaryThumbnailList
        })
        console.log(diaryList);
        console.log(diaryThumbnailList);
    },
    editdiary:function(e){
        var that = this;
        var index = e.target.dataset.index;
        console.log(index);
        var diaryText = that.data.diaryList[index];
        var diaryThumbnailList = that.data.diaryThumbnailList;
        that.data.diaryList.splice(index,1);
        that.data.diaryThumbnailList.splice(index,1);
        that.setData({
            diaryText:diaryText,
            diaryList:that.data.diaryList,
            diaryThumbnailList:that.data.diaryThumbnailList,
            add:false
        });
    },
    trimLeft:function(str){
        return str.replace(/(^\s*)/,"");
    },
    clearStorage:function(){
        var that = this;
        wx.clearStorage();
        that.onLoad();
    },
    bindTimeChange:function(e){
        var that = this;
        that.setData({
            time: e.detail.value.time
        })
    },
    bindDateChange:function(e){
        var that = this;
        that.setData({
            date: e.detail.value.date
        })
    }
})