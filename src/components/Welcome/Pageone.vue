<template>
    <img :src="imageSource" />
    <div class="text-center py-5">
        <b class="title">{{ title }}</b>
        <p class="subtitle">{{ subtitle }}</p>
        <p>{{ description }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "PageOne",
    props: ["imageSource", "title", "subtitle", "description"]
})
</script>

<style>
.title{
    padding-top: 10%;
    font-size: large;
    font-weight: bold;
    color: green;
}
.subtitle{
    font-weight: bold;
    font-size: larger;
    color: green;
}
</style>