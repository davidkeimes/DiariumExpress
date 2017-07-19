module.exports = function (app) {
    var journal = require('../controllers/journalController');

    // journal Routes
    app.route('/journals')
        .get(journal.get_all_journals)
        .post(journal.create_a_journal)
        .delete(journal.delete_all_journals);

    app.route('/journals/:_id')
        .get(journal.get_a_journal)
        .put(journal.update_a_journal)
        .delete(journal.delete_a_journal);

    app.route('/journals/search')
        .post(journal.search_journals);
};