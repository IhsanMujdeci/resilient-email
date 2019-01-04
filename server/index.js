const server = require('./http/server');
const app = require('express')();
const routes = require('./route/router');

async function main () {
    try {
        server.applyConfig(app);
        routes.mount(app);
        await server.listen(app, process.env.PORT || 3001);
    } catch (err) {
        console.log(err);
    }
};

module.exports = main();