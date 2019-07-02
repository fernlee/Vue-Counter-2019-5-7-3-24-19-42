<template>
    <div>Count Sum: {{countSum}}</div>
</template>

<script>
    import store from '../../store/store';
    import { EventBus } from '../helper/event-bus.js';

    export default {
        name: "CounterSum",

        data() {
            return {
                countSum: 0
            }
        },
        mounted() {
            EventBus.$on('update-sum', () => {
                this.countSum = store.fetchCountArray().reduce((sum, count) => sum + count, 0)
            });
        },

        destroyed() {
            EventBus.$off('update-sum');
        }

    }
</script>

<style scoped>
    div {
        margin-top: 40px;
    }
</style>