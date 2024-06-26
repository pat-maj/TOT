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

const getTournament = (tournament_id, done) => {

    const sql = 'SELECT * FROM tournaments WHERE tournament_id = ?';

    db.get(sql, [tournament_id], function(err, tournament_details){
        if(err) return done(err);
        if(!tournament_details) return done(404);

        const sql = 'SELECT name, participant_id FROM participants WHERE tournament_id=?';
        const participants = [];
    
        db.each( sql, [tournament_id], (err, row) => {
            if(err) return done(err);

            participants.push({
                name: row.name,
                participant_id: row.participant_id
            })
        },
        (err, num_rows) => {
            if(err) return done(err);

            return done(null, {
                tournament_id: tournament_details.tournament_id,
                tournament_name: tournament_details.tournament_name,
                number_of_participants: tournament_details.number_of_participants,
                structure: tournament_details.structure,
                description: tournament_details.description,
                participants
            })
        })
    })
}

module.exports = {
    initTournament,
    createTournament,
    getTournament
}