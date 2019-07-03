<template>
    <div>
        <button @click="add">+</button>
        <span>{{count}}</span>
        <button @click="minus">-</button>
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        props: ['index'],
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            add: function () {
                this.count++;
                this.$store.commit('increment');
            },

            minus: function () {
                this.count--;
                this.$store.commit('decrement');
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
