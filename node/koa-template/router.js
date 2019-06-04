/**
 * 管理router
 */
const Router = require('koa-router');
const router = new Router();
const user = {
  name: '万万',
  posts: [
    {
      id: 0,
      title: '小程序踩坑指南'
    },
    {
      id: 1,
      title: 'vue.js'
    }
  ]
}
const postsDetail = [
  {
    id: 0,
    content: 'wechat app'
  },
  {
    id: 1,
    content: '<strong>react 表示不服</strong>'
  }
]

router.get('/user', async (ctx) => {
  await ctx.render('user', { user });
});
router.get('/posts', async (ctx) => {
  const { id } = ctx.query;
  const post = postsDetail.find(postItem => postItem.id == id);
  await ctx.render('post', { post });
})

module.exports = router;