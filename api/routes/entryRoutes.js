module.exports = function (app) {
    var entry = require('../controllers/entryController');

    // entry Routes
    app.route('/entries')
        .get(entry.get_all_entries)
        .post(entry.create_an_entry)
        .delete(entry.delete_all_entries);

    app.route('/entries/:_id')
        .get(entry.get_an_entry)
        .put(entry.update_an_entry)
        .delete(entry.delete_an_entry);

    app.route('/entries/journal/:journal')
        .get(entry.get_entries_by_journal);

    app.route('/entries/search')
        .post(entry.search_entries);
};