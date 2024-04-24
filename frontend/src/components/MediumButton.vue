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
    <div>
        <button id="button" @click="navigate" class="btn btn-primary btn-md">{{ text }}</button>
    </div>
</template>