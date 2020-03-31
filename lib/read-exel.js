// 生成excel
const Excel = require('exceljs');
const path = require('path');
const fetch = require('node-fetch');

const downPath = path.resolve('./public/create-excel');

const createExcel = (head, data, sheetname, excelname) => {
	return new Promise(async(resovle, reject) => {
		const wb = new Excel.Workbook();
		wb.creator = 'me';
		wb.lastModifiedBy = 'Her';
		wb.created = new Date(1985, 8, 30);
		wb.modified = new Date();
		wb.lastPrinted = new Date(2020,3,27);
		wb.properties.date1904 = true;
		wb.views = [
			{
				x:0, y: 0, width: 10000, height: 20000,
				firstSheet: 0, activeTab: 1, visibility: 'visible'
			}
		];
		const sheetName = sheetname ? sheetname : 'sheet1';
		const sheet = wb.addWorksheet(sheetName);
		const ws = wb.getWorksheet(sheetName);
		const columns = [];
		for (let i = 0; i < head.length; i++) {
			const item  = head[i];
			if (item === 'Link') {
				columns.push({
					header: item,
					key: item,
					width: item.charCodeAt(0) > 255 ? item.length * 2 * 20 : item.length * 20
				})
			} else {
				columns.push({
					header: item,
					key: item,
					width: item.charCodeAt(0) > 255 ? item.length * 2 * 5 : item.length * 5
				})
			}
		}
		ws.columns = [
			...columns
		];
		for (let i=0; i < data.length; i++) {
			const item  = data[i];
			if (item['图片']) {
				item['图片'] = item['图片'].replace(/[\r\n]/g,"")
			}
			if (/^(data:image\/(jpeg|png|gif);base64,|(https:|http:))/.test(item['图片'])) {
				let colIndex = head.indexOf('图片');
				if (/^(https:|http:)/.test(item['图片'])) {
					const url = item['图片'];
					const ret = await fetch(url);
					const bufferData = await ret.arrayBuffer();
					var imageId2 = wb.addImage({
						buffer: Buffer.from(bufferData),
						extension: 'jpeg',
					});
				} else {
					var imageId2 = wb.addImage({
						base64: item['图片'],
						extension: 'jpeg',
					});
				}
				ws.addImage(imageId2, {
					tl: { col: colIndex + 0.5, row: i + 1.5 },
					ext: { width: 100, height: 100 },
					hyperlinks: {
						hyperlink: item.Link,
						tooltip: item.Link
					}
				});
			}
			item['图片'] = '';
			ws.addRow(item);
			const row = ws.getRow(i + 2);
			row.height = 100;
		}
		const excelnames = `${excelname ? excelname : ''}${+new Date()}.xlsx`;
		const xlsxName = `${downPath}/${excelnames}`;
		wb.xlsx.writeFile(xlsxName)
			.then(function(){
					console.log('生成 xlsx');
					resovle(`/public/create-excel/${excelnames}`);
			});
	})
};


module.exports = {
	createExcel
};