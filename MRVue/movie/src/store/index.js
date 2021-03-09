import Vue from 'vue';
import Vuex from 'vuex';
import {accounts} from './accounts'
import {movies} from './movies'

Vue.use(Vuex)
export const store=new Vuex.Store({
modules:{
movies,
accounts,
}
})