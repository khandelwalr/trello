const Models = require('../models/list.model');
const productRoutes = require('../routes/route'); // Imports routes

exports.getListData = function(req,res)
{
    try {
        Models.Lists.find({}, function(err, data) {
            if (err) return res.status(500).send(err)
            res.jsonp(data);
        });
    }
    catch (e) {
        console.log(e.message);
    }
}

exports.insertLists = function (req,res) {

    try {
        var listObj = new Models.Lists({
            listIndex:req.body.listIndex,
            listName: req.body.listName
        });

        listObj.save(function(error) {
            console.log("Your List has been saved!");
            if (error) {
                console.error(error);
            }
        });

        res.status(201).json(
            {
                messge: " List Created",
                list:listObj
            }
        );
    }
    catch (e) {
        console.log(e.message);
    }
}

exports.updateListName = function(req,res) {
    try {
        console.log("inside update list", req.body.listName)
        var query = {listIndex:req.params.listId};
        Models.Lists.updateOne(query,{listName:req.body.listName},null,callback);
    }
    catch (e) {
        console.log(e.message);
    }
}

function callback (err, numAffected) {
    try {

    }
    catch (e) {
        console.log(e.message);
    }
}

