const { getUrl } = require('../lib/crealer')

const getUrlHtml = (head, data) => {
	console.log(head, data);
	return new Promise((resovle, reject) => {
		for (let i = 0; i < data.length; i++) {
			const item = data[i];
			for (let j = 0; j < head.length; j++) {
				if (!item.hasOwnProperty(head[j])) {
					item[head[j]] = '';
				}
			}
			if (item.Link) {
				setTimeout(function() {
					getUrl(item.Link).then(function(picurl) {
						item['图片'] = picurl;
						if (i === data.length - 1) {
							console.log('getUrl', data);
							resovle(data);
						}
					}).catch(function (err) {
						console.log(err);
					});
				}, 1000);
			}
		}
	});
};

module.exports = {
	getUrlHtml
};