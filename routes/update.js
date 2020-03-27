const router = require('koa-router')();
const Excel = require('exceljs')
const  { 
		QUERY_TABLE,
		INSERT_TABLE,
		UPDATE_TABLE,
		DELETE_TABLE,
		CREATE_TABLE,
		FIND_USER
	} = require('../uitls/sql');
const  { query } = require('../uitls/query');
const updateExcel = require('../lib/update-excel');
const { createExcel } = require('../lib/read-exel');
const { getUrlHtml } = require('../controller/update-excel');

router.prefix('/update');

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!';
});

let heads = [];
let datas = [];

router.post('/excel', async function (ctx, next) {
	// const update = await updateExcel(ctx);
	const { head, data } = ctx.body;
	const picData = await getUrlHtml(head, data);
	console.log(picData);
	heads = head;
	datas = picData;
	ctx.body = {
		status: 20000,
		msg: '上传成功',
		data: []
	};
});

router.get('/test', async function (ctx, next) {
	const excelUrl = await createExcel(heads, datas);
	console.log(excelUrl);
	ctx.body = {
		status: 20000,
		msg: '上传成功',
		data: []
	};
});

module.exports = router;
