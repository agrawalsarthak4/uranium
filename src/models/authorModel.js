const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema( {
    fname: {type:String, required:true,trim:true},
     lname: {type:String, required:true,trim:true},
    title: {type:String, required:true, enum:["Mr", "Mrs", "Miss"]},
    email: {type:String, required:true,trim:true,lowercase:true, validate:{
        validator:function(v){
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message:"Please enter a valid email"
    } 
    , unique:true}, 
     password: {type:String, required:true} 
     

}, { timestamps: true });


module.exports = mongoose.model('Author', authorSchema) 
