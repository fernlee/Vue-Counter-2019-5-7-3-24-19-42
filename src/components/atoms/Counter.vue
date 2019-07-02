<template>
    <div>
        <button @click="add">+</button>
        <span>{{count}}</span>
        <button @click="minus">-</button>
    </div>
</template>

<script>
    import store from "../../store/store.js";
    import { EventBus } from '../helper/event-bus.js';

    export default {
        name: 'Counter',
        props: ['index'],
        data() {
            return {
                count: 0,
            }
        },
        methods: {
            add: function() {
                this.count++;
                store.updateCount(this.index, this.count)
                EventBus.$emit('update-sum');
            },

            minus: function() {
                this.count--;
                store.updateCount(this.index, this.count)
                EventBus.$emit('update-sum');
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
