const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema( {
    title: {type:String,required:true}, 
    body: {type:String,required:true},
     authorId: {type:mongoose.Schema.Types.ObjectId,ref:"Author",required:true},
    tags: [ String ],
    category: {type:String,required:true},
     subcategory: [String] ,
     publishedAt:Date,
     deletedAt:Date,
      isDeleted: {type:Boolean, default: false}, 
     isPublished: {type:Boolean, default: false}

}, { timestamps: true });

module.exports = mongoose.model('Blogs', blogsSchema) 



