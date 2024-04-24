<script>
export default{
    data() {
        return{
            
        }
    },
    methods: {
        // navigate() {
        //     location.href = this.page_URL;
        // }
    },
    props: {
        image_URL: String,
        title: String,
        description: String,
        //page_URL: String
    }
}
</script>

<template>
    <div class="border max-width-250 rounded mb-4 box p-3 clickable"> <!--@click="navigate"-->
        <img :src="image_URL" class="max-width-250"/>
        <div class="text-center mt-3">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style>
.box {
    max-width: 300px;
}
img {
    max-width: 250px;
}
.clickable {
    cursor: pointer;
}
</style>