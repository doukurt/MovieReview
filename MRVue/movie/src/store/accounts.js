import axios from 'axios'
import AccountService from '../Services/AccountService'
const user = localStorage.getItem('user');
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
const state={
    initialState
}
const getters={

}
const actions={
    login({ commit }, user) {
        return AccountService.login(user).then(
          user => {
            commit('loginSuccess', user);
            return Promise.resolve(user);
          },
          error => {
            commit('loginFailure');
            return Promise.reject(error);
          }
        );
              
    },
    register({commit},user){
      return AccountService.register(user).then(
        user=> {
          commit('registerSuccess',user);
          return Promise.resolve(user)
        },
        error=>{
          commit('registerFailure');
          return Promise.reject(error);
        }
      )
    },
    logout({ commit }) {
      AccountService.logout();
      commit('logout');
    },
   
}
const mutations={
    loginSuccess(state, user) {
        state.status.loggedIn = true;
        state.user = user;
      },
      loginFailure(state) {
        state.status.loggedIn = false;
        state.user = null;
      },
      registerSuccess(state) {
        state.status.loggedIn = false;
      },
      registerFailure(state) {
        state.status.loggedIn = false;
      },
      logout(state) {
        state.status.loggedIn = false;
        state.user = null;
      },
}
export const accounts={
    state,getters,actions,mutations
}