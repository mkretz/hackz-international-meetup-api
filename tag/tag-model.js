var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
    en   : String,
    de   : String,
    fr   : String,
    it   : String
});
mongoose.model('Tag', TagSchema);
var Tag = mongoose.model('Tag');

module.exports = {
    Tag : Tag,
    TagSchema : TagSchema
};