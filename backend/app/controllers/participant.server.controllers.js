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

module.exports = {
    add_participant
}