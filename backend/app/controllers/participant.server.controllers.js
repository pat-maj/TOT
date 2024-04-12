const participants = require("../models/participant.server.models");

const add_participant = (req, res) => {
    //validation?
    const participant = {
        tournament_id: req.params.tournament_id,
        participant_name: req.body.participant_name
    };

    participants.addParticipant(participant, (err, participant_info) => {
        if(err) {
            return res.sendStatus(500);
        }

        return res.status(201).send({
            participant_id: participant_info.participant_id,
            participant_name: participant_info.participant_name,
            tournament_id: participant_info.tournament_id
        });
    });
}

const get_participants = (req,res) => {
    let tournament_id = req.params.tournament_id;
        participants.getParticipants(tournament_id, (err, result) => {
            if(err === 404) return res.sendStatus(404)
            if(err) return res.sendStatus(500)
    
            return res.status(200).send(result)
        })
    
    }

module.exports = {
    add_participant,
    get_participants
}