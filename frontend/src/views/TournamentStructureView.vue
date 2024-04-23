<script>
import ImageBox from '../components/ImageBox.vue'
export default {
    components: {
        ImageBox
    }
}
</script>

<template>
    <div>
        <h1>Choose Tournament Structure</h1>
    </div>
    <div class="d-flex flex-row flex-wrap justify-content-around">
        <ImageBox image_URL="src/assets/image.png" title="Test" description="Nice short description just to ensure everything's great"/>
        <ImageBox image_URL="src/assets/image.png" title="Test" description="Nice short description just to ensure everything's great"/>
        <ImageBox image_URL="src/assets/image.png" title="Test" description="Nice short description just to ensure everything's great"/>
    </div>
</template>

<style>
</style>