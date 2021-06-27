const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    matNo: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    qty: {
        type: Number,
        require: true,
    },
    companyId: {
        type: Number,
        require: true,
    },
},
{ timestamps: true, });

module.exports = mongoose.model('Stock', StockSchema);