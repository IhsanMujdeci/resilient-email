const Joi = require('joi');
const email = require('../../email/email');

async function send (req, res, next) {
	try {
		const schema = Joi.object().keys({
			to: Joi.array().items(
				Joi.string().email().required().label('To should be a valid email')
			).required().label('Please include at least one to email'),
			subject: Joi.string().required().label('Please include a subject'),
			text: Joi.string().required().label('Please include some text'),
			cc: Joi.array().items(
				Joi.string().email().label('Please include valid email in cc')
			),
			bcc: Joi.array().items(
				Joi.string().email().label('Please include valid email in bcc')
			)
		});

		const {error, value} = Joi.validate(req.body, schema);
		if (error) {
			return next(error);
		}
		const sentEmail = await email.send(value.to, value.subject, value.text, value.cc, value.bcc);

		res.status(200).send(sentEmail);
	} catch (err) {
		return next(err);
	}
}

module.exports = {
	send
};
