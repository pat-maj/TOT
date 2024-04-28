const initialiseTournament = async () => {
    try {
        const response = await fetch("http://localhost:3333/tournament/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        if (response.status === 201) {
          const data = await response.json();
          localStorage.setItem("tournament_id", JSON.stringify(data.tournament_id));
          return data;
        } else {
          // Handle errors based on status code
          throw new Error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error("Error initializing tournament:", error);
        return Promise.reject(error);
      }
}

const createTournament = (data) => {
    return fetch("http://localhost:3333/"+ data.tournament_id +"/tournament", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "tournament_name": data.tournament_name,
            "number_of_participants": data.number_of_participants,
            "structure": data.structure,
            "description": data.description
        })
    })
    .then((response) => {
        if(response.status === 201){
            return 
        }else if(response.status === 400){
            throw "Bad request"
        }else if(response.status === 401){
            throw "Unauthorised"
        }else if(response.status === 500){
            throw "Server Error"
        }else{
            throw "Something went wrong"
        }
    })
    .catch((error) => {
        console.log(error)
        return Promise.reject(error)
    })
}

const addParticipant = (tournament_id, name) => {
    return fetch("http://localhost:3333/"+ tournament_id + "/participants/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "participant_name": name
        })
    })
    .then((response) => {
        if(response.status === 201){
            return 
        }else if(response.status === 400){
            throw "Bad request"
        }else if(response.status === 401){
            throw "Unauthorised"
        }else if(response.status === 500){
            throw "Server Error"
        }else{
            throw "Something went wrong"
        }
    })
    .catch((error) => {
        console.log(error)
        return Promise.reject(error)
    })
}

const getTournamentData = (tournament_id) => {
    return fetch("http://localhost:3333/"+ tournament_id +"/tournament", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
        if(response.status === 201){
            return response.json()
        }else if(response.status === 400){
            throw "Bad request"
        }else if(response.status === 401){
            throw "Unauthorised"
        }else if(response.status === 500){
            throw "Server Error"
        }else{
            throw "Something went wrong"
        }
    })
    .catch((error) => {
        console.log(error)
        return Promise.reject(error)
    })
}

export const tournamentService = {
    initialiseTournament,
    createTournament,
    addParticipant,
    getTournamentData
}