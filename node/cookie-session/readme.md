## why 

无状态 

## cookie
本地存储 
怎么来:
1. js document.cookie 可读 可写
2. 服务端 通过Set-Cookie 响应头设置 cookie 

内容：
name:
value:
path: cookie在哪个路径下生效 

/            生效范围是/所有路径
/user         /user user以及user下面的    
/user/abc     /user/abc user/abc 以及下面的

domain：

httpOnly:true/false 如果设置为true 就不能通过js获取 cookie的值
maxAge:在几秒之后 cookie被删除
secure:安全 只会在https协议下传输
koa:ms js:s

作用范围：
domain + path 
在什么域名什么路径下面生效
浏览器检查存储的 cookie,会发送给服务端的 
而且：http 传输报文的大小。放在cookie请求头里面发送


用途 ：
状态管理，true
用户个性化设置，false

cookie是规定死的

## session 
会话
靠后台语言自己实现的
很多个用户 产生很多个 session 

userId
sessionId 用户会话的时候 通过自己的 sessionId 查询自己的状态 
cookie ：sessionID = id 