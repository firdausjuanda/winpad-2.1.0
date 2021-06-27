const mongoose = require('mongoose');

const MaterialSchema = new mongoose.Schema({
    matNo: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    unit: {
        type: String,
        require: true,
    },
},
{ timestamps: true, });

module.exports = mongoose.model('Material', MaterialSchema);