<script>
export default {
    // data() {

    // }
    mounted() {
        document.getElementById("tournament-structure-button").onclick = function () {
            location.href = "/tournament-structure";
        };
    },
}
</script>

<template>
    <div>
        <h1>Welcome to the Tournament Manager!</h1>
        <p>
            Ready to organise and run tournaments with much more ease? Look no further! Tournament Manager is the platform 
            that you'll use with ease to simply and flexibly organise and administer competitive events. It adapts to your needs, 
            whether you're hosting a small community tournament or an extensive professional competition.
        </p>
        <p>
            With Tournament Manager, here's what you can do:
            <ul>
                <li>
                    <b>Customise Your Tournament:</b> Single Elimination, Double Elimination, Round Robin and more tournament brackets. 
                    Thousands of bracket designs and customisable tee offs for any number of competitors and type of competition.
                </li>
                <li>
                    <b>Manage with Ease:</b> Enter the participants, monitor their progress, and update results in real-time. 
                    The user-friendly and intuitive interface allows for interruption-free management from the get-go to the end.
                </li>
                <li>
                    <b>Find the Champion:</b> You score a game and the bracket automatically advances. The system continues to identify 
                    the advancing competitors up to the Grand Final where the ultimate winner is declared. Whether you are a battle-scarred 
                    organiser or a novice planner, Tournament Manager has everything it needs to make your event memorable and productive. So jump right in and start organizing!
                </li>
            </ul>
        </p>
        <div>
            <button id="tournament-structure-button">Begin Your Tournament</button>
        </div>
    </div>
</template>
