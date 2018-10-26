const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema(
    {
        cardIndex:{type:Number},
        cardValue:String,
        cardState:Number,
    }
);
var Cards;
module.exports.Cards = mongoose.model("Cards",cardSchema);
