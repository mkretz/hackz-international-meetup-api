function configureRoutes (server) {
    var root = require('./root/root-routes');
    root.addRoutes(server);
}

function start(port, host, server) {
    server.listen(port, host, function () {
        console.log('server listening at %s on port %s', host, port);
    });

}

function StartServer () {
    var restify = require('restify');
    var server = restify.createServer();
    server.use(restify.queryParser());
    server.use(restify.bodyParser());
    configureRoutes(server);
    start(6001, 'localhost', server);
}

module.exports = {
    StartServer: StartServer
};