<template>
    <div>
        <button>+</button>
        <span>{{count}}</span>
        <button>-</button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
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
