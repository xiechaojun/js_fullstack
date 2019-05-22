// 云函数入口文件
const cloud = require('wx-server-sdk');
const request = require('request');
const cheerio = require('cheerio');

cheerio.prototype.removeTagText = function () {
  const html = this.html();
  // <span>123456</span>
  return html.replace(/<.*>.*<\/.*>/g, '');
}

cloud.init();
const db = cloud.database();
function youhuiSpider() {
  return new Promise((resolve, reject) => {
    request('https://www.smzdm.com/youhui/', (err, res) => {
      if(err){
        reject('net error');
      }
      if (!err) {
        const body = res.body;
        const $ = cheerio.load(body, {
          decodeEntities: false  //不解码
        })
        let youhuiLists = []
        $('.list.list_preferential')
          .each(function () {
            const price = $('.itemName .red', this)
              .text().trim();//去空格?
            //js innerHTML
            // <span></span>  需要过滤掉  只能扩展
            let title = $('.itemName a', this).removeTagText();
            const img = $('img', this).attr('src');
            const desc = $('.lrInfo', this).text().trim();
            youhuiLists.push({
              title,
              price,
              img,
              desc
            })
            console.log({
              title,
              price,
              img,
              desc
            })
          });
          resolve(youhuiLists);
      }
    })
  });
}
// 返回resolve()时候的值;
// async + await
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    const youhuiLists = await youhuiSpider();
    const c = await db.collection('smzdmYouhuiLists')
    .add({
      data:{
        youhuiLists
      }
    })
    return{
      code:200,
      id:insertRes._id
    }
  }catch(error){
    return {
      code:500
    }
  }
}