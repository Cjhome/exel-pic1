let Service = require('node-windows').Service;

let svc = new Service({
	name: 'excel-pic1',
	description: 'excel图片',
	script: './bin/www',
	wait: '1',
	grow: '0.25',
	maxRestarts: '40'
});

svc.on('install', () => {
	svc.start();
	console.log('install complete');
})

svc.on('uninstall', () => {
	console.log('Uninstall complate.');
	console.log('The service exists:', svc.exists);
});

svc.on('alreadyinstalled', () => {
	console.log('The service is already installed.');
});

if (svc.exists) return svc.uninstall();

svc.install();
