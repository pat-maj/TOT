<script>
export default{
    data() {
        return{
            
        }
    },
    props: {
        image_URL: String,
        title: String,
        description: String
    }
}
</script>

<template>
    <div class="border max-width-250 rounded mb-4">
        <img :src="image_URL" class="max-width-250"/>
        <div class="text-center">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style>
.max-width-250{
    max-width: 250px;
}
</style>