var port = 1337;

module.exports = {
	port: port,
	db: 'mongodb://localhost/todos',
	facebook: {
		clientID: '',
		clientSecret: '',
		callbackURL: 'http://localhost:' + port + '/oauth/facebook/callback'
	},
	twitter: {
		clientID: '',
		clientSecret: '',
		callbackURL: 'http://localhost:' + port + '/oauth/twitter/callback'
	}
};