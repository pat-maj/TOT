<script>
import ImageBox from '../components/ImageBox.vue'

export default {
    components: {
        ImageBox,
    },
    methods: {
        saveAndNavigate(structure) {
            localStorage.setItem("structure", JSON.stringify(structure));
            location.href = "/tournament-details"
        }
    }
}
</script>

<template>
    <div class="d-flex flex-column align-items-center mt-5">
        <div class="w-75 border rounded p-5 shadow">
            <div class="mb-5 text-center">
                <h1>Choose Tournament Structure</h1>
            </div>
            <div class="d-flex flex-row flex-wrap justify-content-around">
                <ImageBox @click="saveAndNavigate('single-elimination')" image_URL="src/assets/SingleElimination.png" title="Single Elimination" description="Participants compete in one-on-one matches; losers are immediately eliminated." />
                <ImageBox @click="saveAndNavigate('double-elimination')" image_URL="src/assets/DoubleElimination.png" title="Double Elimination" description="Participants get a second chance after their first loss, with a winners' and losers' bracket."/>
                <ImageBox @click="saveAndNavigate('round-robin')" image_URL="src/assets/RoundRobin.png" title="Round Robin" description="Each participant plays against every other participant, ensuring comprehensive competition."/>
                <ImageBox @click="saveAndNavigate('swiss')" image_URL="src/assets/Swiss.png" title="Swiss System" description="Players face others with similar scores in successive rounds without elimination."/>
                <ImageBox @click="saveAndNavigate('consolation')" image_URL="src/assets/Consolation.png" title="Consolation Bracket" description="A secondary competition for those knocked out early, ensuring more play opportunities."/>
                <ImageBox @click="saveAndNavigate('stableford')" image_URL="src/assets/Stableford.png" title="Stableford" description="A point-based scoring system that rewards performance on individual holes in golf."/>
                <ImageBox @click="saveAndNavigate('multilevel')" image_URL="src/assets/MultiLevel.png" title="Multilevel Tournament" description="A tiered competition format with participants moving between levels based on performance."/>
                <ImageBox @click="saveAndNavigate('league')" image_URL="src/assets/League.png" title="League" description="Teams or players compete in a scheduled series of games against each other."/>
            </div>
        </div>
    </div>
</template>

<style>
</style>
