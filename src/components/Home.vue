<template>
    <div id="home">
        <h1>Home</h1>
    </div>
</template>

<script>
    import { baseURL } from "../ajax/axios";
    export default {
        name: "Home",
        data() {
            return {

            };
        },
        created(){
            console.log(baseURL);
            console.log([1, 2, 3].includes(2));
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>