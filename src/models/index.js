const { mongo, Mongoose } = require("mongoose");
module.exports = {
    User: require('./user.model'),
    Idea: require('./idea.model'),
    Comment: require('./comment.model'),
}