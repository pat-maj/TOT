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

// const getParticipants = (tournament_id, done) => {

//     const sql = 'SELECT name, user_id FROM participants WHERE tournament_id=?';
//     const participants = [];
//     console.log(tournament_id);
    

    
//     db.each(sql, [tournament_id], function(err, participant_details){
//         if(err) return done(err);
//         console.log(participant_details);
//         console.log("errorPos1");
//         if(!participant_details) return done(404);
//         participants.push({
//             name: participant_details.name,
//             user_id: participant_details.user_id
//         })
        

        

//         (err, num_rows) => {
//             return done(null, {
//                 participants
//             })
//         }
    
//     })
// }

//////////////////

const getParticipants = (tournament_id, done) => {

    const sql = 'SELECT name, user_id FROM participants WHERE tournament_id=?';
    const participants = [];
    console.log(tournament_id);
    
    db.each( sql, [tournament_id], (err, row) => {
        if(err) return done(err);
        console.log(row.name);
        //console.log("errorPos2");
        participants.push({
            name: row.name,
            user_id: row.user_id
        })
    },


    (err, num_rows) => {
        if(err) return done(err);
        //console.log(participants);
        console.log(participants);
        //console.log("errorPos3");



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