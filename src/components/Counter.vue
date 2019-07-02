<template>
    <div>
        <button @click="count++">+</button>
        <span>{{count}}</span>
        <button @click="count--">-</button>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        data() {
            return {
                count: 0,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button {
        margin: 40px 40px 0;
    }

</style>
