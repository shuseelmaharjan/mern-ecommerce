const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    password:{type:String, require:true},
    isAdmin:{type:Boolean, default:false},

});

module.exports = mongoose.model('Users', useSchema);