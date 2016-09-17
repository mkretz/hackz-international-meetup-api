/**
 * Created by mathiskretz on 10/12/15.
 */
var rootName = 'root';
var rootPath = '/';

function addRoutes (server) {
    var rootController = require('./root-controller')(server);
    server.get({name : rootName, path : rootPath},rootController.getEntrypoint);
}

module.exports = {
    rootName: rootName,
    rootPath: rootPath,
    addRoutes: addRoutes
};