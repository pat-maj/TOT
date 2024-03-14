const participants = require("../controllers/participant.server.controllers");

module.exports = function(app) {
    app.route("/:tournament_id/participants")
        .post(participants.add_participant)
        //.get(tournaments.get_tournament_details);
}