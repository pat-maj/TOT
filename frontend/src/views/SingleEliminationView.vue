<template>
  <div class="single-elimination-view">
    <h1>{{ tournamentName }}</h1>
    <h2>{{ description }}</h2>
    <div class="bracket">
      <div v-for="(round, roundIndex) in bracket" :key="roundIndex" class="round">
        <div class="match" v-for="(match, matchIndex) in round" :key="matchIndex">
          <div class="team" v-if="match.winner !== match.homeTeam && match.winner !== match.awayTeam" @click="selectWinner(roundIndex, matchIndex, 'home')">
            {{ match.homeTeam }}
          </div>
          <div class="team" v-if="match.winner !== match.homeTeam && match.winner !== match.awayTeam" @click="selectWinner(roundIndex, matchIndex, 'away')">
            {{ match.awayTeam }}
          </div>
        </div>
      </div>
    </div>
    <div class="final-round" v-if="finalWinner">
      <h3>Final Winner</h3>
      <div class="team">{{ finalWinner }}</div>
    </div>
    <div v-else class="final-round-placeholder">Final Winner will be displayed here</div>
  </div>
</template>


<script>
import { tournamentService } from '../services/tournament.service';

export default {
  data() {
    return {
      tournamentName: "",
      description: "",
      bracket: [],
      finalRound: false,
    };
  },

  created() {
    const tournamentId = JSON.parse(localStorage.getItem("tournament_id"));
    this.getTournamentData(tournamentId);
  },

  computed: {
    finalWinner() {
      if (this.bracket.length > 0) {
        const finalMatch = this.bracket[this.bracket.length - 1][0];
        if (finalMatch && finalMatch.winner) {
          return finalMatch.winner;
        }
      }
      return null;
    }
  },

  methods: {
    getTournamentData(tournamentId) {
      tournamentService.getTournamentData(tournamentId)
        .then((data) => {
          this.tournamentName = data.tournament_name;
          this.description = data.description;
          this.generateBracket(data.participants);
        })
        .catch((error) => {
          console.error("Error retrieving tournament data:", error);
        });
    },

    generateBracket(participants) {
      const bracket = [];
      const numberOfParticipants = participants.length;
      const rounds = Math.log2(numberOfParticipants);
      const totalMatches = numberOfParticipants / 2;
  
      let participantsIndex = 0;
      for (let i = 0; i < rounds; i++) {
        const round = [];
        const matchesPerRound = totalMatches / Math.pow(2, i);
        for (let j = 0; j < matchesPerRound; j++) {
          const homeTeam = participants[participantsIndex] || null;
          participantsIndex++;
          const awayTeam = participants[participantsIndex] || null;
          participantsIndex++;
          round.push({
            homeTeam: homeTeam ? homeTeam.name : null,
            awayTeam: awayTeam ? awayTeam.name : null,
            winner: "",
          });
        }
        bracket.push(round);
      }
      this.bracket = bracket;
    },


    selectWinner(roundIndex, matchIndex, winner) {
      const currentMatch = this.bracket[roundIndex][matchIndex];
      const nextRoundIndex = roundIndex + 1;

      if (winner === 'home') {
        currentMatch.winner = currentMatch.homeTeam;
        if (this.bracket[nextRoundIndex]) {
          const opponentIndex = matchIndex % 2 === 0 ? matchIndex + 1 : matchIndex - 1;
          const opponentMatch = this.bracket[nextRoundIndex][Math.floor(opponentIndex / 2)];
          if (!opponentMatch.winner) {
            if (opponentIndex % 2 === 0) {
              opponentMatch.awayTeam = currentMatch.homeTeam;
            } else {
              opponentMatch.homeTeam = currentMatch.homeTeam;
            }
          }
        }
      } else if (winner === 'away') {
        currentMatch.winner = currentMatch.awayTeam;
        if (this.bracket[nextRoundIndex]) {
          const opponentIndex = matchIndex % 2 === 0 ? matchIndex + 1 : matchIndex - 1;
          const opponentMatch = this.bracket[nextRoundIndex][Math.floor(opponentIndex / 2)];
          if (!opponentMatch.winner) {
            if (opponentIndex % 2 === 0) {
              opponentMatch.awayTeam = currentMatch.awayTeam;
            } else {
              opponentMatch.homeTeam = currentMatch.awayTeam;
            }
          }
        }
      }
    },
  },
};
</script>


<style scoped>
.single-elimination-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bracket {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.round {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
}

.match {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.team {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 60px;
  border: 1px solid black;
  cursor: pointer;
}

.team:not(:last-child) {
  margin-bottom: 10px;
}

.team.winner {
  font-weight: bold;
}

.final-round {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.final-round .match {
  margin-bottom: 20px;
}

.final-round .team {
  width: 150px;
  height: 60px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.final-round .team.winner {
  font-weight: bold;
}

.final-round-placeholder {
  margin-top: 50px;
  font-weight: bold;
  font-size: 24px;
}
</style>