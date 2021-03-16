import UserService from '../Services/UserService'
const state={
user:{},
myMovies:[],
}
const actions={
    async getMyMovies({commit},username){
        return UserService.getMyMovies(username).then((res)=>{
            commit('setmyMovies',{username,myMovies:res.data})
        })
    },
   
async getUser({commit},username){
    return UserService.getUser(username).then((res)=>{
        commit('setUser',{username,user:res.data})
    })
}

}
const getters={

}
const mutations={
setmyMovies(state,data){
    const{username,myMovies}=data
    state.myMovies=myMovies
},
setUser(state,data){
    const {user}=data;
    state.user=user
}
}
export const users = {
    state,
    getters,
    actions,
    mutations
  };
  