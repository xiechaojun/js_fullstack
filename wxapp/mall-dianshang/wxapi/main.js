// api封装模块，wx.request 也请封装一下，不要每次都重复调用
// data {}
// method get | post | PUT
// RESTFUL
// 通用的数据请求
// needSubDomain book.douban.com 

// movie.douban.com 

const CONFIG = require('./config.js');
const API_BASE_URL = 'https://api.it120.cc'
const request = (url, needSubDomain, method, data) => {
    let _url = API_BASE_URL + (needSubDomain ? '/' + CONFIG.subDomain : '') + url;
    console.log(_url)
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
          resolve(res.data)
      },
      fail: function (error) {
          reject(error)
      },
      complete() {}
    })
  })
}
module.exports = {
  // {page: 1, category_id=1}
  goods: (data) =>{ //商品列表
    // promise
    return request('/shop/goods/list', true, 'post', data)
    // return new Promise((resolve,reject) => {
        //     wx.request({
        //         url:'',
        //         success:function (res){
        //             resolve(res.data);  //异步变同步
        //         }
        //     })
        // })
  },
  // 后台添加的， 一个页面是有多个接口的
  banners: (data) => {
    return request('/banner/list', true, 'get', data)
  },
  noticeList:(data) => {
    //   request怎么传？ 问后端 根据后端的约定来
      return request('/notice/list',true,'post',data);
  }
}
