import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

import { INCREMENT, DECREMENT } from './mutation-types'

export default new Vuex.Store({
    state: {
        countSum: 0,
        countArray: []
    },
    mutations: {
        [INCREMENT] (state) {
            state.countSum++;
        },

        [DECREMENT] (state) {
            state.countSum--;
        }
    }
})