const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();

app.disable('x-powered-by');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// parse application/json
app.use(bodyParser.json())

//enable cors
app.use(cors())

app.use(cors({
    origin : ['http://localhost:8080'],
    optionsSuccessStatus: 200,
    methods: "GET,PUT,POST,DELETE",
    preflightContinue: false,
}));

// define a simple route
app.get('/',(req,res) => {
    return res.status(200).send({
      status: 200,
      message: 'Welcome to fundr backend ❤'
    });
     // res.sendFile('./public/index.html');
});


app.listen(process.env.PORT||3000);
