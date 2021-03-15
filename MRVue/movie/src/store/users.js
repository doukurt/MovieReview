import UserService from '../Services/UserService'
const state={
user:{},

}
const actions={
    
   
async getUser({commit},username){
    return UserService.getUser(username).then((res)=>{
        commit('setUser',{username,user:res.data})
    })
}

}
const getters={

}
const mutations={

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
  