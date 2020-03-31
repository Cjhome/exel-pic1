const router = require('koa-router')();
const Excel = require('exceljs');
const send = require('koa-send');
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
	heads = head;
	datas = data;
	ctx.body = {
		code: 20000,
		msg: '上传成功',
		data: []
	};
});

router.get('/create-excel', async function (ctx, next) {
	if (heads.length === 0 && datas.length === 0) {
		return ctx.body = {
			code: 20000,
			msg: '请上传excel文件',
			data: []
		}
	}
	const picData = await getUrlHtml(heads, datas);
	console.log('picData', picData);
	const excelUrl = await createExcel(heads, datas);
	excelUrl.replace(/\\/g, '/');
	ctx.body = {
		code: 20000,
		msg: '生成成功, 请下载',
		data: {
			url: excelUrl
		}
	};
});

router.get('/download/excel', async function (ctx, next) {
	const url = ctx.query.url;
	ctx.attachment(url);
	await send(ctx, url);
});

module.exports = router;
