const nock = require('nock');
const sendgrid = require('./sendgrid');

function send (status = 200) {
	nock(sendgrid.sendUrl)
		.post('')
		.reply(status, {message: 'Email successfully sent', agent: 'sendgrid'});
}

module.exports = {
	send
};
