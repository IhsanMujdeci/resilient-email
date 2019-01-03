const auth = require('../http/auth');
const http = require('../http/request');

const url = process.env.MAILGUN_URL;
const domain = process.env.MAILGUN_DOMAIN;
const privateKey = process.env.MAILGUN_PRIVATE_KEY;
const paths = {
	messages: '/messages'
};
const fromEmail = `${url}${domain}${paths.messages}`;

const Mailgun = {
	send(to, subject = '', text = '', cc = [], bcc = []) {
        return http.post({
            url: this.sendUrl,
            form: {
                from: fromEmail,
                to: to,
                cc: cc,
                bcc: bcc,
                subject: subject,
                text: text
            },
            headers: {
                Authorization: auth.basic('api', privateKey)
            },
            json: true
        })
    },
    sendUrl:`${url}${domain}${paths.messages}`,
    emailClient:'mailgun'
};

module.exports = Mailgun;