const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const viewSchema = new Schema({
    viewsCounter:{
        type:Number,
        required: true
    }
});

const View = mongoose.model('View', viewSchema);

module.exports = View;