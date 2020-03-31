const router = require('koa-router')();
const  { 
  QUERY_TABLE,
  INSERT_TABLE,
  UPDATE_TABLE,
  DELETE_TABLE,
  FIND_USER
 } = require('../uitls/sql');
 const  { query } = require('../uitls/query');


router.prefix('/users');

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!';
});

router.post('/logout', async function(ctx, next) {
  ctx.body = {code: 20000};
});

router.get('/list', async function(ctx, next) {
  let list = await query(QUERY_TABLE('users'));
  list = list.filter((item) => {
    return item.user_id > 1;
  });
  return ctx.body = {
    code: 20000,
    data: list
  };
});

router.post('/editor', async function(ctx, next) {
  const body = ctx.body;
  let valStr = '';
  for (let item in body) {
    if (item !== 'user_id' && body[item]) {
      valStr += `${item}="${body[item]}", `; 
    }
  }
  valStr = valStr.substr(0, valStr.length - 2);
  const res = await query(UPDATE_TABLE('users', { primaryKey: 'user_id', primaryVal: ctx.body.user_id }, valStr));
  return ctx.body = {
    code: 20000,
    msg: ''
  };
});

router.post('/add', async function(ctx, next) {
  const body = ctx.body;
  const key = [];
  const val = [];
  for (let item in body) {
    if (body[item]) {
      key.push(item.trim());
      val.push(`"${body[item].trim()}"`);
    }
  }
  const keyStr = key.join(',');
  const valStr = val.join(',');
  const res = await query(INSERT_TABLE('users', { key: keyStr.trim(), val: valStr.trim() }));
  return ctx.body = {
    code: 20000,
    msg: ''
  };
});

router.post('/usersDelete', async function(ctx, next) {
  const userId = ctx.body.id;
  const res = query(DELETE_TABLE('users', { primaryKey: 'user_id', primaryVal: userId}));
  return ctx.body = {
    code: 20000,
    msg: ''
  };
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
  // const body = ctx.body;
  // if (!body.hasOwnProperty('user_name') || !body.hasOwnProperty('password')) {
  //   return  ctx.body = {code: 100, msg: '字段错误'};
  // }
  // if (!body.user_name || !body.password) {
  //   return  ctx.body = {code: 110, msg: '用户名或密码不能为空'};
  // }
  // const { user_name, password } = body;
  // const userInfo = await query(FIND_USER('users', {primaryKey: 'user_name', primaryVal: user_name}));
  // if (userInfo.length !== 0 && userInfo.length === 1) {
  //   const { user_password } = userInfo[0];
  //   if (user_password === password) {
      return ctx.body = {
        code: 20000,
        msg: '登录成功',
        data: {
          accessToken: "admin-token"
        }
      };
    // } else {
    //   return ctx.body = {
    //     code: 301,
    //     msg: '用户名或密码不正确',
    //     token: ''
    //   };
    // }
  // } else {
  //   return ctx.body = {
  //     code: 404,
  //     msg: '请输入正确的用户名或密码'
  //   };
  // }
});

module.exports = router;
