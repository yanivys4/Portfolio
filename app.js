const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/static', express.static(path.join(__dirname + './public')));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000,'localhost',()=>{
    console.log("listening for requests on localhost 3000");
});





app.get('/',(req,res)=>{
    res.render('index');
});