// 爬取图片

const https = require('https');
const cheerio = require('cheerio');

const getUrl = (url) => {
	return new Promise((resovle, reject) => {
		console.log('url', url);
		https.get(url, function (res) {
			let chunks = '';
			res.on('data', function (chunk) {
				chunks += chunk;
			});
			res.on('end', function (err) {
				if (err) {
					reject(err);
				} else {
					const $ = cheerio.load(chunks);
					const picUrl = $('#landingImage').attr("src");
					resovle(picUrl);
				}
			});
		});
	});
};

module.exports = {
	getUrl
};