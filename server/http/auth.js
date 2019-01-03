const Auth = {
    basic: (userName, password) => `Basic ${Buffer.from(userName + ':' + password).toString('base64')}`
};

module.exports = Auth;
