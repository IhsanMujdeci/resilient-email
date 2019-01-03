const http = require('../http/request');

const privateKey = process.env.SENDGRID_PRIVATE_KEY;
const url = process.env.SENDGRID_URL;
const domain = process.env.SENDGRID_DOMAIN;
const path = {
	sendMail: '/mail/send'
};

const Sendgrid = {
    send(to = [], subject = '', text = '', cc = [], bcc = []){
        const body = {
            from: {email: domain},
            personalizations: [
                {
                    to: to.map(email => ({email}))
                }
            ],
            subject: subject,
            content: [{type: 'text/plain', value: text}]
        };

        if (cc && cc.length) {
            body.personalizations.cc = cc.map(email => ({email}));
        }

        if (bcc && bcc.length) {
            body.personalizations.bcc = bcc.map(email => ({email}));
        }

        return http.post({
            url: this.sendUrl,
            body: body,
            headers: {
                Authorization: 'Bearer ' + privateKey,
                'content-type': 'application/json'
            },
            json: true
        });
    },
    sendUrl:`${url}${path.sendMail}`,
	clientName: 'sendgrid'
};

module.exports = Sendgrid;
