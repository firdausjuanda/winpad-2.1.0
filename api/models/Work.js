const  mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    desc:{
        type: String,
        require: true,
    },
    userId:{
        type: String,
        require: true,
    },
    country: {
        type: String,
        required: true,
    },
    companyId:{
        type: String,
        require: true,
    },
    vendorId:{
        type: String,
        require: true,
    },
    deptId:{
        type: String,
        require: true,
    },
    area:{
        type: String,
        require: true,
    },
    status:{
        type: String,
        default: "OPN",
        require: true,
    },
    pict:{
        type: Array,
        require: true,
    },
    completePic:{
        type: Array,
        default:[],
    },
    closingPermit:{
        type: Array,
        default: [],
    },

}, 
{ timestamps: true })

module.exports = mongoose.model('Work', WorkSchema);