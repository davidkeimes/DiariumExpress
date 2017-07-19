var mongoose = require('mongoose');
var Journal = mongoose.model('Journal');

exports.get_all_journals = function (req, res) {
    Journal.find({}, function (err, journals) {
        if (err)
            res.send(err);
        res.json(journals);
    });
};

exports.create_a_journal = function (req, res) {
    var newJournal = new Journal(req.body);
    newJournal.save(function (err, journal) {
        if (err)
            res.send(err);
        res.json(journal);
    });
};

exports.delete_all_journals = function (req, res) {
    Journal.remove({ }, function (err, journal) {
        if (err)
            res.send(err);
        res.json({ message: 'journals successfully deleted' });
    });
};

exports.get_a_journal = function (req, res) {
    Journal.findById(req.params._id, function (err, journal) {
        if (err)
            res.send(err);
        res.json(journal);
    });
};

exports.update_a_journal = function (req, res) {
    Journal.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true }, 
    function (err, journal) {
        if (err)
            res.send(err);
        res.json(journal);
    });
};

exports.delete_a_journal = function (req, res) {
    Journal.remove({
        _id: req.params._id
    }, function (err, journal) {
        if (err)
            res.send(err);
        res.json({ message: 'journal successfully deleted' });
    });
};

exports.search_journals = function (req, res) {
    var re = '.*' + req.body.search + '.*';
    Journal.find( { name: {'$regex': re, '$options': 'i'} }, function (err, journals) {
        if (err)
            res.send(err);
        res.json(journals);
    });
}