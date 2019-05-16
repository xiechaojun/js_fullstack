攻防 
攻：SQL 前端SQL是什么？
前端处理着表单，SQL
攻击者就是带着目的来的（黑客）， 输入SQL  形成 输入字符串 有可能带来SQL的麻烦
表单 ->onsubmit->/login POST 数据{email:'user@email.com',password：'123456''}
->后端形成SQL拼接
SELECT * from users WHERE email = 'user@email.com' and password = '123456'';

怎么录入进银行账号，把钱给拿走
先要 登录进去 账号，密码是不知道的，
SQL 一种是破坏 SQL语法 导致服务器挂了
还有一种是窃取账户 '表示(把前面的都结束)   ' or 1=1--

session
