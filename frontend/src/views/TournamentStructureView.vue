<script>
import ImageBox from '../components/ImageBox.vue'

export default {
    components: {
        ImageBox,
    }
}
</script>

<template>
    <div class="d-flex flex-column align-items-center mt-5">
        <div class="w-50">
            <div class="mb-5 text-center">
                <h1>Choose Tournament Structure</h1>
            </div>
            <div class="d-flex flex-row flex-wrap justify-content-around">
                <ImageBox page_URL="/tournament-details" image_URL="src/assets/SingleElimination.png" title="Single Elimination" description="Participants compete in one-on-one matches; losers are immediately eliminated." />
                <ImageBox page_URL="/tournament-details" image_URL="src/assets/DoubleElimination.png" title="Double Elimination" description="Participants get a second chance after their first loss, with a winners' and losers' bracket."/>
                <ImageBox page_URL="/tournament-details" image_URL="src/assets/RoundRobin.png" title="Round Robin" description="Each participant plays against every other participant, ensuring comprehensive competition."/>
                <ImageBox page_URL="/tournament-details" image_URL="src/assets/Swiss.png" title="Swiss System" description="Players face others with similar scores in successive rounds without elimination."/>
                <ImageBox page_URL="/tournament-details" image_URL="src/assets/Consolation.png" title="Consolation Bracket" description="A secondary competition for those knocked out early, ensuring more play opportunities."/>
                <ImageBox page_URL="/tournament-details" image_URL="src/assets/Stableford.png" title="Stableford" description="A point-based scoring system that rewards performance on individual holes in golf."/>
                <ImageBox page_URL="/tournament-details" image_URL="src/assets/image.png" title="Multilevel Tournament" description="A tiered competition format with participants moving between levels based on performance."/>
                <ImageBox page_URL="/tournament-details" image_URL="src/assets/image.png" title="League" description="Teams or players compete in a scheduled series of games against each other."/>
            </div>
        </div>
    </div>
</template>

<style>
</style>
