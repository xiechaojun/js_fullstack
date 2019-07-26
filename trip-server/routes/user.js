var express = require('express')
var router = express.Router()
var mysql = require('mysql')

var data = {
  code:200,
  msg:'success'
}

var pool = mysql.createPool({  // mysql创建连接
  host:'localhost',
  user:'root',
  password:'a123456',
  database:'trip'
})
// 开始请求