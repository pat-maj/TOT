<script>
export default{
    methods: {
        navigate() {
            location.href = this.page_URL;
        }
    },
    props: {
        page_URL: String,
        text: String
    }
}
</script>

<template>
    <div class="d-grid col-4">
        <button id="button" @click="navigate" class="btn btn-primary">{{ text }}</button>
    </div>
</template>