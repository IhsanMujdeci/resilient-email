const nock = require('nock');
const mailgun = require('./mailgun');

function send (status = 200) {
	nock(mailgun.sendUrl)
		.post('')
		.reply(status, {message: 'Email successfully sent', agent: 'mailgun'});
}

module.exports = {
	send
};
