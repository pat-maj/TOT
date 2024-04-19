const db = require("../../database");

const addParticipant = (participant, done) => {

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


//////////////////

const getParticipants = (tournament_id, done) => {

    const sql = 'SELECT name, participant_id FROM participants WHERE tournament_id=?';
    const participants = [];
    
    db.each( sql, [tournament_id], (err, row) => {
        if(err) return done(err);

        participants.push({
            name: row.name,
            user_id: row.participant_id
        })
    },
    (err, num_rows) => {
        if(err) return done(err);

        return done(null, {
            participants
        })
    })
}

//////////////////

module.exports = {
    addParticipant,
    getParticipants
}