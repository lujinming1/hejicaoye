const express = require('express');
const path = require('path');
const logger = require('morgan')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const modelIndex = require('./models/index');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/hejicaoye',{ useMongoClient: true});

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../build')));

app.use((req,res,next) => {
  req.getModel = (modelName) => {
    return modelIndex[modelName];
  }
  next();
})
require('./routers/index')(app);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  })
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});



var port = process.env.PORT || 8080;

/* 启动服务 */
app.listen(port, 'localhost', function() {
    console.log('成功开启'+ port +'端口');
    var uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n');
});
