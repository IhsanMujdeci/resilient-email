const error = require('./error.router');
const emailRouter = require('./email/email.router');

const Router = {
    mount(app){
        app.use(this.ROUTE_PATHS.email, emailRouter);
        app.use(error)
    },
    ROUTE_PATHS: {
        email: "/email"
    }
};

module.exports = Router;