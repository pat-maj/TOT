const tournaments = require("../models/tournament.server.models");

const init_tournament = (req, res) => {
    const random_id = generate_random_string(10);

    tournaments.initTournament(random_id, (err, id) => {
        if(err) return res.sendStatus(500);
        return res.status(201).send({tournament_id: id});
    })
}

const create_tournament = (req, res) => {
    // Can do validation here but need Joi first (npm install joi --saves)
    const tournament = {
        tournament_id: req.params.tournament_id,
        tournament_name: req.body.tournament_name,
        number_of_participants: parseInt(req.body.number_of_participants),
        structure: req.body.structure,
        description: req.body.description
    };

    tournaments.createTournament(tournament, (err, id) => {
        if(err) return res.sendStatus(500);
        return res.status(201).send({tournament_id: id});
    });
}

const get_tournament = (req,res) => {
    let tournament_id = req.params.tournament_id;
        tournaments.getTournament(tournament_id, (err, result) => {
            if(err === 404) return res.sendStatus(404)
            if(err) return res.sendStatus(500)
    
            return res.status(200).send(result)
        })
    
    }

function generate_random_string(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}


module.exports = {
    init_tournament,
    create_tournament,
    get_tournament
}