<template>

  <div class="container">
    <div class="card">
      <h5 class="card-title"><LoginLogo /></h5>
      <div class="card-body">
        <form class="form-group">
          <div class="row">
            <input
              type="text"
              v-model="username"
              class="form__input"
              placeholder="Username"
            />
          </div>
          <div class="row">
          
            <input
              type="password"
              v-model="password"
              class="form__input"
              placeholder="Password"
            />
          
          
          </div><div class="row">
        <button @click="login"><EnterLogo/></button>
                
            </div>
        </form>  
      </div>
    </div>
  </div>
</template>
<script>
import EnterLogo from '../components/icons/EnterLogo'
import LoginLogo from '../components/icons/LoginLogo'
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.accounts.initialState.status.loggedIn;
    }
  },
  components: {LoginLogo ,EnterLogo},
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    login: function() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
 body{
   background-image: url('../assets/bg-01.jpg');
   
 }
 .card-title>svg>path{
   fill:white
 }
 button{
   border:none;
   border-radius: 15px;
   background-color: transparent;
 }
 button>svg>path{
   fill:white
 }
button:hover>svg>path{
  fill:rgb(24, 189, 24)
}
.card:hover>.card-title>svg>path{
  fill:#f42f42
}
.container{
  margin-top:150px;
  height: 100%;
  width: 50%;
}
.card{
 align-items: center;
background: rgba( 255, 255, 255, 0.1 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5.0px );
-webkit-backdrop-filter: blur( 5.0px );
border-radius: 10px;

}
.card:hover{
  background: rgba( 255, 255, 255, 0.6 );
  backdrop-filter: blur( 8.0px );
-webkit-backdrop-filter: blur( 8.0px );
}
input:focus{
    outline: none;
}
form{
  padding:5px;
}
.card:hover>input{
background: rgba( 255, 255, 255, 0.6 );
margin:5px;
  padding:10px;
}
input{
  margin:5px;
  padding:10px;
background: rgba( 255, 255, 255, 0.4 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1.0px );
-webkit-backdrop-filter: blur( 1.0px );
border-radius: 10px;
border:none;


}
.card:hover>::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: black !important;
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: black !important;
}
</style>
