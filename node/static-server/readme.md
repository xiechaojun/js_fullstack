## static 
  koa-static
  为什么要配置。
  静态资源：图片 html css js （不会随着服务的运行改变内容）
  assets 资源

## path
  path.join 将路径的各个部分连接起来 处理了各个平台的分割符号 windows:\  类unix：/    

## formidable
  fields 非[type="file"] 提交的内容都会到里面
  files [type="file"]
## 静态资源服务 
  双击打开时： file://xxxx   本地文件读取
  服务器上：http://localhost:9090/ 访问图片的时候 发了一个请求
  里面html 里面引入的图片 js css 都会发出一个请求 然后这些都是静态资源 所以 url 和 服务器磁盘路径 一一对应。
  特点：
  1. 有index.html的时候 会自动打开      进来访问根目录的时候 / 自己加上 index.html
  2. 没有的话 列出所有文件 文件夹       fs.readDir()
  用 koa-static 的作用就是在 Html 里面正确引入 你指定目录下面的资源 
  处理static 目录下面的资源 映射为 请求路径
  访问/static/1.png 时返回 1.png 的内容 
  访问/static/2.png 时返回 2.png 的内容 
  (koa-static)

  业内擅长的静态资源服务器：Nginx