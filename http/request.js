const requestPromise = require('request-promise');

function httpRequest (options) {
    return requestPromise(options);
}

const Request = {
    post: (reqOptions) => {
        reqOptions.method = 'POST';
        return httpRequest(reqOptions);
    }
};

module.exports = Request;