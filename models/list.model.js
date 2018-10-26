const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema=new Schema(
    {
        listIndex:{type:Number},
        listName:String,
    }
);
var Lists;
module.exports.Lists=mongoose.model("Lists",listSchema);