const mongoose = require('mongoose');

const PermitSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
    },
    vendorId: {
        type:String,
        require: true,
    },
    workId: {
        type:String,
        require: true,
    },
    category: {
        type:String,
        require: true,
    },
    desc: {
        type:String,
        require: true,
    },
    number: {
        type:Number,
        require: true,
    },
    status: {
        type:String,
        default: "OPN",
    },
    giver: {
        type:String,
        default: null,
        require: true,
    },
    ppe: {
        type:Array,
        default:[],
        require: true,
    },
    tools: {
        type:Array,
        default:[],
        require: true,
    },
    attachment: {
        type:String,
    },
    completePict: {
        type:String,
    },
    isApprove1: {
        type:Boolean,
        default: false,
    },
    isApprove2: {
        type:Boolean,
        default: false,
    },
},
{ timestamps: true, });

module.exports = mongoose.model('Permit', PermitSchema);