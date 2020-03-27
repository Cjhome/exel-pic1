const router = require('koa-router')();
const  { 
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE,
  CREATE_TABLE,
  FIND_USER
 } = require('../uitls/sql');
 const  { query } = require('../uitls/query');


router.prefix('/users');

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!';
});

router.post('/logout', async function(ctx, next) {
  ctx.body = {code: 20000}
});

router.post('/info', async function(ctx, next) {
  return ctx.body = {
    code: 20000,
    data: {
      user: {
        id: 0,
        username: "admin",
        password: "any",
        name: "Super Admin",
        avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        introduction: "I am a super administrator",
        email: "admin@test.com",
        phone: "1234567890",
        roles: ["admin"]
      }
    }
  }
});

router.post('/login', async function(ctx, next) {
  const body = ctx.body;
  if (!body.hasOwnProperty('user_name') || !body.hasOwnProperty('password')) {
    return  ctx.body = {code: 100, msg: '字段错误'};
  }
  if (!body.user_name || !body.password) {
    return  ctx.body = {code: 110, msg: '用户名或密码不能为空'};
  }
  const { user_name, password } = body;
  const userInfo = await query(FIND_USER('users', {primaryKey: 'user_name', primaryVal: user_name}));
  if (userInfo.length !== 0 && userInfo.length === 1) {
    const { user_password } = userInfo[0];
    if (user_password === password) {
      return ctx.body = {
        code: 20000,
        msg: '登录成功',
        data: {
          accessToken: "admin-token"
        }
      };
    } else {
      return ctx.body = {
        code: 301,
        msg: '用户名或密码不正确',
        token: ''
      };
    }
  } else {
    return ctx.body = {
      code: 404,
      msg: '请输入正确的用户名或密码'
    };
  }
});

module.exports = router;
