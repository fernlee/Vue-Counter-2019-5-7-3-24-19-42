<template>
    <div>Count Sum: {{countSum}}</div>
</template>

<script>
    export default {
        name: "CounterSum",
        props: ['countSum'],
    }
</script>

<style scoped>
    div {
        margin-top: 40px;
    }
</style>