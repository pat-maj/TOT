<template>
  <div class="single-elimination-view">
    <h1>{{ tournamentName }}</h1>
    <h2>{{ gameName }}</h2>
    <div class="bracket">
      <div v-for="(round, roundIndex) in bracket" :key="roundIndex" class="round">
        <div v-for="(match, matchIndex) in round" :key="matchIndex" class="match">
          <div class="team" v-if="match.homeTeam" @click="selectWinner(roundIndex, matchIndex, 'home')">
            {{ match.homeTeam }}
          </div>
          <div class="team" v-if="match.awayTeam" @click="selectWinner(roundIndex, matchIndex, 'away')">
            {{ match.awayTeam }}
          </div>
          <div class="team winner" v-if="match.winner">
            {{ match.winner }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tournamentService } from '../services/tournament.service';

export default {
  data() {
    return {
      tournamentName: "",
      gameName: "",
      bracket: [],
    };
  },
  mounted() {
    const tournamentId = localStorage.getItem("tournament_id");

    this.getTournamentData(tournamentId);
  },
  methods: {
    getTournamentData(tournamentId) {
      tournamentService.getTournamentData(tournamentId)
        .then((data) => {
          this.tournamentName = data.tournament_name;
          this.gameName = data.game_name;
          this.generateBracket(data.number_of_participants);
        })
        .catch((error) => {
          console.error("Error retrieving tournament data:", error);
        });
    },
    generateBracket(numberOfParticipants) {
      const bracket = [];
      const rounds = Math.ceil(Math.log2(numberOfParticipants));
      const totalMatches = Math.pow(2, rounds - 1);
      let matchesPerRound = totalMatches;

      for (let i = 0; i < rounds; i++) {
        const round = [];

        for (let j = 0; j < matchesPerRound; j++) {
          round.push({
            homeTeam: "",
            awayTeam: "",
            winner: "",
          });
        }

        bracket.push(round);
        matchesPerRound /= 2;
      }

      this.bracket = bracket;
    },
    selectWinner(roundIndex, matchIndex, winner) {
      this.$set(this.bracket[roundIndex][matchIndex], "winner", winner);
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
  flex-direction: column;
  align-items: center;
}

.round {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.match {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.team {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border: 1px solid black;
  cursor: pointer;
}

.team.winner {
  font-weight: bold;
}
</style>