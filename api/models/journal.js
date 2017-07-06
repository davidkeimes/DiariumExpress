var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JournalSchema = new Schema({
    name: {
        type: String
    },
    img_url: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Journal', JournalSchema);