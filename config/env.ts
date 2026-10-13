type Environment = 'dev' | 'staging' | 'prod';

const config = {
	dev: {
		baseURL: 'https://opensource-demo.orangehrmlive.com',
		username: 'Admin',
		password: 'admin123',
	},
	staging: {
		baseURL: 'https://opensource-demo.orangehrmlive.com',
		username: 'Admin',
		password: 'admin123',
	},
	prod: {
		baseURL: 'https://opensource-demo.orangehrmlive.com',
		username: 'Admin',
		password: 'admin123',
	},
};

const env = (process.env.ENV || 'dev') as Environment;

export default {
	...config[env],
	username: process.env.ORANGEHRM_USER || config[env].username,
	password: process.env.ORANGEHRM_PASSWORD || config[env].password,
	baseURL: process.env.ORANGEHRM_BASE_URL || config[env].baseURL,
};
