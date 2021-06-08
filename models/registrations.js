// models/Registration.js

const mongoose = require('mongoose');
const RegistrationSchema = new mongoose.Schema({
        name: {type:String,default: "N/A"},
        address: {type:String},
        city: {type:String},
        zip: {type:String},
        Lag: {type:String},
        sizes: [{
            Skirt:{type:String},
            shorts: {type:String},
            socks: {type:String},
        }
        ],
        person: [{
            momname: {type:String},
            momephone: {type:String},
            momemail: {type:String},
            dadname: {type:String},
            dadphone: {type:String},
            dadmail: {type:String}
        }]
        ,
    })
;

module.exports = Registration = mongoose.model('Registration', RegistrationSchema);