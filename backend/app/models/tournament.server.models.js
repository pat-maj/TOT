const db = require("../../database");

const initTournament = (id, done) => {
    const sql = "INSERT INTO tournaments (tournament_id) VALUES(?)";

    db.run(sql, id, (err) => {
        if(err) {
            return done(err);
        }
        return done(null, id);
    });
}

const createTournament = (tournament, done) => {
    const sql = `UPDATE tournaments 
                SET tournament_name = ?, 
                    number_of_participants = ?, 
                    structure = ?, 
                    description = ?
                WHERE tournament_id = ?`;

    const values = [
        tournament.tournament_name, 
        tournament.number_of_participants, 
        tournament.structure, 
        tournament.description, 
        tournament.tournament_id
    ];
    
    db.run(sql, values, (err) => {
        if(err) {
            return done(err);
        }
        return done(null, tournament.tournament_id);
    });
}

module.exports = {
    initTournament,
    createTournament
}