const router = require('koa-router')();
const controller = require('../controllers/c-signup');
// router -> controller -> model(模型层代表数据库) | view
router.get('./signup',controller.getSignup);   // render ejs
// router.post('./signup')    // model save 

module.exports = router