const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const Routes = require('./routes/route'); // Imports routes
const cors = require('cors');
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    next();
});

// connect to our mongoDB database using mongoose========================
var url = "mongodb://localhost:27017/trellodb";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.on('error',function(err, db){
    console.log('mongodb connection Error. please make sure that mongodb is running.');
});

mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    //return start_up();
});

// parse application/json ================================
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/trello', Routes);

app.use(express.static(__dirname+"/views"));

app.listen(3000,()=> console.log('Listening on port 3000'));

