const games = require("../models/game.server.models");

const addGame = (participant, done) => {
    const sql = "INSERT INTO participants (tournament_id, name) VALUES (?, ?)";
    const values = [
        participant.tournament_id, 
        participant.participant_name
    ];

    db.run(sql, values, function (err) {
        if(err){
            return done(err);
        }

        const participant_info = {
            participant_id: this.lastID,
            participant_name: participant.participant_name,
            tournament_id: participant.tournament_id 
        }

        return done(null, participant_info);
    })
}