<script>
export default{
    methods: {
        // navigate() {
        //     location.href = this.page_URL;
        // }
    },
    props: {
        //page_URL: String,
        text: String
    }
}
</script>

<template>
    <div class="d-grid col-5">
        <button id="button"  class="btn btn-primary" style="font-size: large;"><b>{{ text }}</b></button>
    </div>
</template>