<template>
    <div>
        <button @click="add">+</button>
        <span>{{count}}</span>
        <button @click="minus">-</button>
    </div>
</template>

<script>
    import {DECREMENT, INCREMENT} from '../../store/mutation-types';

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
                this.$store.commit(INCREMENT);
            },

            minus: function () {
                this.count--;
                this.$store.commit(DECREMENT);
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
