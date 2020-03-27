const fs = require('fs');
const path = require('path');

const downPath = path.resolve(__dirname, '/public/update-exel');

exports.default = (ctx) => {
	const file = ctx.request.files.file;
	const reader = fs.createReadStream(file.path);
	const filePath = `${downPath}/${file.name}`;
	const upStream = fs.createWriteStream(filePath);
	return new Promise((resolve, reject) => {
		let stream = reader.pipe(upStream);
		stream.on('finish', function (err) {
			if (err) {
				reject(err);
			} else {
				resolve(filePath);
			}
		});
	});
};