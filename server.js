function configureRoutes (server) {
    var root = require('./root/root-routes');
    var tag = require('./tag/tag-routes');
    root.addRoutes(server);
    tag.addRoutes(server);
}

function start(port, host, server) {
    server.listen(port, host, function () {
        console.log('server listening at %s on port %s', host, port);
    });
}

function connectToDatabase() {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/intmeet');
}

function StartServer () {
    connectToDatabase();
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