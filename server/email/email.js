const sendgrid = require('./sendgrid');
const mailgun = require('./mailgun');

const emailServices = [
    sendgrid,
	mailgun
];

const Email = {
    send: async (to, subject = '', text = '', cc = [], bcc = []) => {
        for (let emailService of emailServices) {
            try {
                const sentEmail = await emailService.send(to, subject, text, cc, bcc);
                return {message: 'Email successfully sent', response: sentEmail, agent: emailService.agent};
            } catch (err) {
                if (err.statusCode && err.statusCode === 400) {
                    throw Error('Some fields weren\'t entered correctly' + JSON.stringify(err.response.body));
                }
            }
        }

        throw Error('No email clients worked');
    }
};

module.exports = Email;
