import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countSum: 0,
        countArray: []
    },
    mutations: {
        increment (state) {
            state.countSum++;
        },

        decrement (state) {
            state.countSum--;
        }
    }
})