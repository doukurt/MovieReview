import axios from 'axios';
export default{
    getUser(username){
       return  axios.get(`http://localhost:3000/user/${username}`)
    },
    getMyMovies(username){
        return axios.get(`http://localhost:3000/user/myMovie/${username}`)
    }
  
}