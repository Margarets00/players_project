const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/main/make', {
            target: 'http://localhost:8080/'
        })
    );
}