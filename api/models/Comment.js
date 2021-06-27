const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    },
    pict: {
        type: String,
    },
},
{ timestamps: true, });

module.exports = mongoose.model('Comment', CommentSchema);