const Models = require('../models/card.model');
const productRoutes = require('../routes/route'); // Imports routes

exports.getCardData = function(req,res)
{
    try {
        console.log("Inside card data");
        Models.Cards.find({}, function(err, data){
            // Note that this error doesn't mean nothing was found,
            // it means the database had an error while searching, hence the 500 status
            if (err) return res.status(500).send(err)
            res.jsonp(data);
        });
    }
    catch (e) {
         console.log(e.message);
    }
}

exports.insertCards = function (req,res) {

    try {
        var cardObj = new Models.Cards({
            cardIndex:req.body.cardIndex,
            cardValue: req.body.cardValue,
            cardState: req.body.cardState
        });
        cardObj.save(function(error) {
            console.log("Your cards has been saved!");
            if (error) {
                console.error(error);
            }
        });
        res.status(201).json(
            {
                messge: " cards Created",
                Card:cardObj
            }
        );

    }
    catch (e) {
        console.log(e.message);
    }
}

exports.updateCards = function(req,res){

    try {
        console.log("raghavkh",req.params.cardId);
        var query = { cardIndex: req.params.cardId};
        Models.Cards.updateOne(query, { cardValue: req.body.cardValue }, null, callback);
    }
    catch (e) {
        console.log(e.message);
    }
}

exports.updateCardState = function (req,res) {

    try {
        console.log("raghav",req.body.cardState);
        var query = { cardIndex: req.params.cardId};
        Models.Cards.updateOne(query, { cardState: req.body.cardState }, null, callback);
        res.send(req.params.cardId);
    }
    catch (e) {
        console.log(e.message);
    }
}

function callback (err, numAffected) {
    // numAffected is the number of updated documents
    try {

    }
    catch (e) {
        console.log(e.message);
    }
}

exports.deleteCards = function(req,res) {
    try {
        console.log("Deleted id is",req.params.cardId);
        Models.Cards.deleteOne({ cardIndex: req.params.cardId }, function (err) {
            if (err) return handleError(err);
            // deleted at most one tank document
            console.log("Deleting............");
        });

        // Models.Cards.find({cardIndex:{$gt : req.params.cardId}},function(err, res) {
        //     res.forEach(function(device) {
        //         device.cardIndex = device.cardIndex-1;
        //         device.save();
        //     });
        //     console.log("Updating.........");
        // });

    }
    catch (e) {
        console.log(e.message);
    }

}


