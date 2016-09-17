var root = require('../root/root-routes');
var getTagsName = 'getTags';
var createTagsName = 'createTags';
var getTagName = 'getTag';
var deleteTagName = 'deleteTag';
var tagsPath = root.rootPath + 'tags';
var tagPath = tagsPath + '/:tagid';

function addRoutes (server) {
    var tagController = require('./tag-controller')(server);
    server.get({name : getTagsName, path : tagsPath}, tagController.getTags);
    server.post({name : createTagsName, path : tagsPath}, tagController.createTag);
    server.get({name : getTagName, path : tagPath}, tagController.getTag);
    server.del({name : deleteTagName, path : tagPath}, tagController.deleteTag);
}

module.exports = {
    tagPath: tagPath,
    addRoutes: addRoutes
};