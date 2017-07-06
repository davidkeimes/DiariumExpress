var mongoose = require('mongoose');
var Entry = mongoose.model('Entry');

exports.get_all_entries = function (req, res) {
    Entry.find({}, function (err, entries) {
        if (err)
            res.send(err);
        res.json(entries);
    });
};

exports.create_an_entry = function (req, res) {
    var newEntry = new Entry(req.body);
    newEntry.save(function (err, entry) {
        if (err)
            res.send(err);
        res.json(entry);
    });
};

exports.delete_all_entries = function (req, res) {
    Entry.remove({ }, function (err, journal) {
        if (err)
            res.send(err);
        res.json({ message: 'entries successfully deleted' });
    });
};

exports.get_an_entry = function (req, res) {
    Entry.findById(req.params._id, function (err, entry) {
        if (err)
            res.send(err);
        res.json(entry);
    });
};

exports.update_an_entry = function (req, res) {
    Entry.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true }, 
    function (err, entry) {
        if (err)
            res.send(err);
        res.json(entry);
    });
};

exports.delete_an_entry = function (req, res) {
    Entry.remove({
        _id: req.params._id
    }, function (err, entry) {
        if (err)
            res.send(err);
        res.json({ message: 'entry successfully deleted' });
    });
};

exports.get_entries_by_journal = function (req, res) {
    Entry.find({ journal: req.params.journal }, function (err, entries) {
        if (err)
            res.send(err);
        res.json(entries);
    });
}