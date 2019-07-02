<template>
    <div>
        <counter v-for="n in parseInt(counterNum)"></counter>
    </div>
</template>

<script>
    import Counter from "../atoms/Counter.vue";

    export default {
        name: 'CounterGroup',
        props: ['counterNum'],
        components: { Counter },

        data() {
            return {
                count: 0,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
