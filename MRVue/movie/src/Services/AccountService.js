import axios from 'axios'
export  default {
    login(user) {
        return axios
          .post('http://localhost:3000/login', {
            username: user.username,
            password: user.password
          })
          .then(response => {
            if (response.data.accessToken) {
              localStorage.setItem('user', JSON.stringify(response.data));
            }
    
            return response.data;
          });
    
    },
    
  logout() {
    localStorage.removeItem('user');
  }
    ,
    register(user){
        return axios
        .post('http://localhost:3000/signup', {
          username: user.username,
          displayName:user.displayName,
          password: user.password,
          isAuthor:user.isAuthor
        })
    }
}