<template>
    <div id="app">
        <counter-group counter-num="3"/>
        <counter-sum></counter-sum>
    </div>
</template>

<script>
    import CounterGroup from './components/molecules/CounterGroup'
    import CounterSum from './components/atoms/CounterSum'

    export default {
        name: 'app',
        components: {
            CounterGroup,
            CounterSum
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
