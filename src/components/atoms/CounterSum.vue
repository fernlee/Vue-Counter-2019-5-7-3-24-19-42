<template>
    <div>Count Sum: {{countSum}}</div>
</template>

<script>
    export default {
        name: "CounterSum",

        computed: {
            countSum() {
                return this.$store.state.countSum;
            }
        }
    }
</script>

<style scoped>
    div {
        margin-top: 40px;
    }
</style>