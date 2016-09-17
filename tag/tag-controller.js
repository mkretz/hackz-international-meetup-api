var Tag = require('./tag-model.js').Tag;
var tagPath = require('./tag-routes').tagPath;


function TagController (server) {

    return {

        getTags : function (req, res) {
            Tag.find(function (err, data) {
                res.send(data);
            });
        },

        getTag : function (req, res) {

        },

        createTag : function (req, res) {
            var pathParams = {};
            var tag = new Tag();
            tag.en = req.body.en;
            tag.de = req.body.de;
            tag.fr = req.body.fr;
            tag.it = req.body.it;
            tag.save(function (err, savedTag) {
                pathParams['tagid'] = savedTag._id;
                res.header('Location', server.router.render(tagPath, pathParams));
                res.send(204);
            });
        },

        deleteTag : function (req, res) {

        }
    };
}

module.exports = TagController;
