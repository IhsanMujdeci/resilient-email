const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = [
    bodyParser.json({ limit: '5mb' }),
    bodyParser.urlencoded({extended: true}),
    function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS, PATCH');
        next();
    },
    morgan('combined'),
];

const Server = {
    listen: (app, port) =>
        new Promise( resolve =>{
            app.listen(port, () => {
                console.log(`App listening on port :${port}`);
                resolve(app)
            });
        })
    ,
    applyConfig(app){
        app.use(config)
    }
};

module.exports = Server;
