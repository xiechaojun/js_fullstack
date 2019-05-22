const request = require('request');
const cheerio = require('cheerio');
cheerio.prototype.removeTagText = function(){
    const html = this.html();
    // <span>123456</span>
    return html.replace(/<.*>.*<\/.*>/g,'');
}
request('https://www.smzdm.com/youhui/',(err,res) => {
    if (!err){
        const body = res.body;
        const $ = cheerio.load(body,{
            decodeEntities:false  //不解码
        })
        $('.list.list_preferential')
        .each(function(){
            const price = $('.itemName .red',this)
            .text().trim();//去空格?
            //js innerHTML
            // <span></span>  需要过滤掉  只能扩展
            let title = $('.itemName a',this).removeTagText();
            const img = $('img',this).attr('src');
            const desc = $('.lrInfo',this).text().trim();
            console.log({
                title,
                price,
                img,
                desc
            })
        });
    }
})