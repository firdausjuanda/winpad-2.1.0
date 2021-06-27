const  mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    companyCountry:{
        type: String,
        require: true,
    },
    companyCode:{
        type: String,
        require: true,
        unique: true,
        max:4,
    },
    companyProducts:{
        type: Array,
        default: [],
        require: true,
    },
    companyType:{
        type: String,
        require: true,
    },
    companyName:{
        type: String,
        require: true,
    },
    companyLoc:{
        type: String,
        require: true,
    },
    companyDept: {
        type: Array,
        default: [],
    },
    companyActive:{
        type: Boolean,
        default: true,
    },
    companyLogo:{
        type: String,
        default: "companyLogo.png",
    },
    companyLeader:{
        type: String,
        require: true,
    },
}, 
{ timestamps: true })

module.exports = mongoose.model('Company', CompanySchema);