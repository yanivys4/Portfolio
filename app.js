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
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("listening for requests");
});

const cors = require('cors');
app.use(cors({
    origin: 'https://www.section.io'
}));

app.get('/',(req,res)=>{
    res.render('index');
});
