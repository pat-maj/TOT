<script>
import ImageBox from '../components/ImageBox.vue'
import LargeButton from '../components/LargeButton.vue';
export default {
    components: {
        ImageBox,
        LargeButton
    }
}
</script>

<template>
    <div>
        <h1>Choose Tournament Structure</h1>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-around">
        <ImageBox image_URL="src/assets/SingleElimination.png" title="Single Elimination" description="Participants compete in one-on-one matches; losers are immediately eliminated." page_URL="/single-elimination"/>
        <ImageBox image_URL="src/assets/image.png" title="Double Elimination" description="Participants get a second chance after their first loss, with a winners' and losers' bracket."/>
        <ImageBox image_URL="src/assets/image.png" title="Round Robin" description="Each participant plays against every other participant, ensuring comprehensive competition."/>
        <ImageBox image_URL="src/assets/image.png" title="Swiss System" description="Players face others with similar scores in successive rounds without elimination."/>
        <ImageBox image_URL="src/assets/image.png" title="League" description="Teams or players compete in a scheduled series of games against each other."/>
        <ImageBox image_URL="src/assets/image.png" title="Knockout" description="A direct elimination contest where only the winners advance to the next round."/>
        <ImageBox image_URL="src/assets/image.png" title="Multilevel Tournament" description="A tiered competition format with participants moving between levels based on performance."/>
        <ImageBox image_URL="src/assets/image.png" title="Consolation Bracket" description="A secondary competition for those knocked out early, ensuring more play opportunities."/>
        <ImageBox image_URL="src/assets/image.png" title="Stableford" description="A point-based scoring system that rewards performance on individual holes in golf."/>
    </div>
    <div class="d-flex justify-content-center">
        <LargeButton page_URL="/tournament-details" text="Next"/>
    </div>
</template>

<style>
</style>
