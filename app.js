const express = require('express');
const mongoose = require('mongoose');
const View = require('./models/View');
const app = express();
const path = require('path');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname + './public')));
app.use(express.static(path.join(__dirname, 'public')));
const dbUri = 'mongodb+srv://readAndWriteUser:hadassah@infoparkcluster.ly4uj.mongodb.net/DB?retryWrites=true&w=majority';
const port = process.env.PORT || 3000;
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('connected to DB'))
    .then(() => app.listen(port))
    .catch((err) => console.log(err));

app.get('/',(req,res)=>{
    let userAgent = req.get('User-Agent');
    const filter = {};
    const update = { $inc: { viewsCounter: 1 } };
    let numOfViews = 0;
    console.log(userAgent);
    // Get number of Views
    View.findOne({},function(err,view){
        if(err){
            console.log(err);
        }else{
            numOfViews = view.viewsCounter;
            // if the userAgent != ELB-HealthChecker/2.0 which is aws health check --> append counter
            if(userAgent != 'ELB-HealthChecker/2.0'){
                View.updateOne(filter,update,{returnOriginal: false}, function(err,view2){
                    if(err){
                        console.log(err);
                    }else{
                        res.render('index',{views: numOfViews});
                    }
                });
            }
            else{
                res.render('index',{views: numOfViews});
            }
        }
    });
});
