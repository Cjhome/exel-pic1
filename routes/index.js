const router = require('koa-router')()
const  { query } = require('../uitls/query')
const  { 
  CREATE_TABLE
 } = require('../uitls/sql')

query(CREATE_TABLE)
router.get('/', async (ctx, next) => {
  ctx.set('Content-Type', 'text/html');
  await ctx.render('index.html');
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/getExcelData', async (ctx, next) => {
  const body = ctx.body;
  console.log(body);
  return ctx.body = {
    status: 0,
    msg: '数据提交成功'
  };
});

module.exports = router
