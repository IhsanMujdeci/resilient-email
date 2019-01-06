const path = require('path')
require('dotenv').config(path.resolve(process.cwd(), 'example.env'));
const { describe, it, before } = require('mocha');
const chai = require('chai');
const request = require('supertest');
const mailgunNock = require('../../email/mailgun_nock');
const sendgridNock = require('../../email/sendgrid_nock');
const nock = require('nock');
const routes = require('../router');
const server = require('../../http/server');
const app = require('express')();
const should = chai.should();

before(function () {
    server.applyConfig(app);
    routes.mount(app);
});

beforeEach(nock.cleanAll);

describe('Integration tests for /email', function () {
	it('Should send email', async function () {
		sendgridNock.send();

		const {body, statusCode} = await request(app)
			.post('/email/send')
			.send({
				to: ['ihsanmujdeci.im@gmail.com'],
				subject: 'test',
				text: 'body'
			})
			.expect(200)
			.then(res => res);
	});

	it('Should fail to send email because there is no to field', async function () {
		const {body, statusCode} = await request(app)
			.post('/email/send')
			.send({
				subject: 'test',
				text: 'body'
			})
			.expect(400)
			.then(res => res);

		body.should.have.property('message', 'Please include at least one to email');
	});

	it('Should fail to send email because to isn\'t an email', async function () {
		const {body} = await request(app)
			.post('/email/send')
			.send({
				to: ['hey'],
				subject: 'test',
				text: 'body'
			})
			.expect(400)
			.then(res => res);

		body.should.have.property('message', 'To should be a valid email');
	});

	it('Should fail to send from mailgun and fallback to sendgrid', async function () {
		mailgunNock.send(500);
		sendgridNock.send();

		const {body, statusCode} = await request(app)
			.post('/email/send')
			.send({
				to: ['ihsanmujdeci.im@gmail.com'],
				subject: 'test',
				text: 'body'
			})
			.expect(200)
			.then(res => res);

		body.response.should.have.property('agent', 'sendgrid');
	});

	it('Should fail to send from mailgun and fallback to mailgun', async function () {
		mailgunNock.send();
		sendgridNock.send(500);

		const {body, statusCode} = await request(app)
			.post('/email/send')
			.send({
				to: ['ihsanmujdeci.im@gmail.com'],
				subject: 'test',
				text: 'body'
			})
			.expect(200)
			.then();

		body.response.should.have.property('agent', 'mailgun');
	});

	it('Should fail to send from mailgun and sendgrid', async function () {
		mailgunNock.send(500);
		sendgridNock.send(500);

		const {body, statusCode} = await request(app)
			.post('/email/send')
			.send({
				to: ['ihsanmujdeci.im@gmail.com'],
				subject: 'test',
				text: 'body'
			})
			.expect(500)
			.then();

		body.should.have.property('message', 'No email clients worked');
	});
});
