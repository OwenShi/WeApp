var app = getApp()
Page({
    data: {
        restaurants:[],
        title:'',
        restaurantsName:''
    },
    onLoad:function(){
        var that = this;
        var title = app.requestDetailid;
        that.setData({
            title:title
        })
        wx.getStorage({
            key:'resName',
            success:function(res){
                that.setData({
                    restaurants:res.data,
                })
                console.log(res.data)
            }
        })
    },
    addRestaurants:function(e){
        var that = this;
        if (!that.data.restaurantsName){
            wx.showModal({
                title:'╭(╯^╰)╮',
                content:'一个字都不写怎么行',
                showCancel:false,
                confirmText:'我写我写'
            })
            return;
        };
        if(that.data.restaurantsName.match(/^\s+$/)){
            wx.showModal({
                title:'╭(╯^╰)╮',
                content:'没有名字的餐厅和咸鱼有什么区别',
                showCancel:false,
                confirmText:'我是咸鱼'
            })
            return;
        }
        var restaurants = that.data.restaurants;
        restaurants.unshift(that.data.restaurantsName);
        that.setData({
            restaurants:restaurants
        })
        wx.setStorage({
            key:'resName',
            data:that.data.restaurants
        })
        console.log(restaurants)
        that.setData({
            restaurantsName:""
        })
    },
    addtorestaurantsName:function(e){
        //同步input的内容
        var that = this;
        that.setData({
            restaurantsName:e.detail.value
        })
        console.log(that.data.restaurantsName);
    },
    deleteOne:function(e){
        var that = this;
        console.log("delete");
        var index = e.target.dataset.index
        var res = that.data.restaurants;
        res.splice(index,1);
        console.log(that.data.restaurants)
        that.setData({
            restaurants:res
        })
        wx.setStorage({
            key:'resName',
            data:that.data.restaurants
        })
    },
    random:function(){
        var that = this;
        if(!that.data.restaurants.length){
            wx.showModal({
                title:'~\\(≧▽≦)/~',
                content:'一个餐厅都不填选你个头啦╭(╯^╰)╮',
                showCancel:false,
                confirmText:'我填我填'
            })
            return;
        }
        var index = Math.floor(Math.random()*that.data.restaurants.length);
        wx.showModal({
            title:'让我来告诉你吃什么╭(╯^╰)╮',
            content:that.data.restaurants[index],
            confirmText:'就吃这个',
            cancelText:'换一个咯',
            success:function(res){
                console.log(res)
                if(res.confirm){
                    wx.showToast({
                      title: 'OK就是他了',
                      icon: 'success',
                      duration: 2000
                    })
                }else{
                    that.random();
                }
            }
        })
    }
})