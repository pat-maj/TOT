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

export const tournamentService = {
    initialiseTournament
}