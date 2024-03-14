const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = 'db.sqlite';

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if(err) {
        console.log(err);
        throw err;
    } else {
        console.log('Connected to the SQLite database.')

        db.run(`CREATE TABLE participants (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                tournament_id TEXT, 
                name TEXT,
                FOREIGN KEY (tournament_id) REFERENCES tournaments(tournament_id)
                )`, (err) => {
                    if(err){
                        console.log('Participants table already created');
                    } else {
                        console.log('Participants table created');
                    }
                }
        );

        db.run(`CREATE TABLE games(
                game_id INTEGER PRIMARY KEY AUTOINCREMENT,
                tournament_id text,
                home_participant_id INTEGER,
                away_participant_id INTEGER,
                home_score INTEGER,
                away_score INTEGER,
                winner_participant_id INTEGER,
                FOREIGN KEY (tournament_id) REFERENCES tournaments(tournament_id),
                FOREIGN KEY (home_participant_id) REFERENCES participants(user_id),
                FOREIGN KEY (away_participant_id) REFERENCES participants(user_id),
                FOREIGN KEY (winner_participant_id) REFERENCES participants(user_id)
                )`, (err) => {
                    if(err){
                        console.log('Games table already created');
                    } else {
                        console.log('Games table created');
                    }
                }
        );


        db.run(`CREATE TABLE tournaments(
                tournament_id TEXT PRIMARY KEY,
                tournament_name TEXT,
                number_of_participants INTEGER,
                structure TEXT,
                description TEXT
                )`, (err) => {
                    if(err){
                        console.log('Tournaments table already created');
                    } else {
                        console.log('Tournaments table created');
                    }
                }
        );
    }
});

module.exports = db;