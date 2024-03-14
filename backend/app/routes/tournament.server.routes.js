const tournaments = require("../controllers/tournament.server.controllers");

module.exports = function(app) {
    app.route("/tournament")
        .post(tournaments.init_tournament);

    app.route("/:tournament_id/tournament")
        .post(tournaments.create_tournament)
        //.get(tournaments.get_tournament_details);
}