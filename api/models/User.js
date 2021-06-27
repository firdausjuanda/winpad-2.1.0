const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
        min:8,
    },
    country: {
        type: String,
        require: true,
    },
    companyId: {
        type: Array,
        default: [],
        require: true,
    },
    deptId: {
        type: Array,
        default: [],
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    isApprover1: {
        type: Boolean,
        default: false,
    },
    isApprover2: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    companyAdmin: {
        type: Boolean,
        default: false,
    },
    profilePict: {
        type: String,
    },
    coverPict: {
        type: String,
    },
},
{ timestamps: true, });

module.exports = mongoose.model('User', UserSchema);