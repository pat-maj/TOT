<script>
import LargeButton from '../components/LargeButton.vue';
import { tournamentService } from '../services/tournament.service'

export default{
    data() {
        return{
            tournament_name: "",
            number_of_participants: "",
            description: ""
        }
    },
    methods: {
        createTournament() {
            const data = {
                tournament_id: JSON.parse(localStorage.getItem("tournament_id")),
                tournament_name: this.tournament_name,
                number_of_participants: this.number_of_participants,
                structure: JSON.parse(localStorage.getItem("structure")),
                description: this.description
            }

            tournamentService.createTournament(data);
        }
    },
    components:{
        LargeButton
    }
}
</script>

<template>
    <div class="d-flex flex-column align-items-center mt-5">
        <div class="w-75 border rounded p-5 shadow">
            <div class="d-flex flex-column align-items-center">
                <div class="mb-5 text-center">
                    <h1>We just need a few details about your Tournament!</h1>
                </div>
                <div class="mb-4 width">
                    <label for="tournament_name" class="me-2">Tournament Name:</label>
                    <input type="text" id="tournament_name" name="tournament_name" v-model="tournament_name" size="50" placeholder="e.g. MMU Football Tournament"/>
                </div>
                <div class="mb-4 width">
                    <label for="descripton" class="mb-2">Description:</label>
                    <br/>
                    <textarea name="description" id="description" v-model="description" cols="70" rows="5"></textarea>
                </div>
                <div class="mb-4 width">
                    <label for="num_of_participants" class="me-2">Number of Participants:</label>
                    <input type="text" id="num_of_participants" name="num_of_participants" v-model="number_of_participants" size="10" placeholder="e.g. 8 or 16"/>
                </div>
                <div class="mb-4 width">
                    <label for="participants_names" class="mb-2">Participants Names (one per line):</label>
                    <br/>
                    <textarea name="participants_names" id="participants_names" v-model="participants_names" cols="70" rows="10"></textarea>
                </div>
                <div class="d-flex justify-content-center width" style="height: 70px;">
                    <LargeButton text="Create Tournament" @click="createTournament"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.width{
    width: 560px;
}
</style>