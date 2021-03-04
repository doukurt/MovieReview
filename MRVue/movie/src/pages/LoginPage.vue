<template>
 <div class="container">
    <form  @event.prevent>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            v-model="username"
          />
        </div>
 
        
        
        <div class="col">
          <input type="password" class="form-control" placeholder="password" v-model="password" />
        </div>
    
       
   

      <button  @click="login" class="btn btn-primary">Sign in</button>
    </form>
  </div>
   
</template>
<script>
import axios from 'axios'
export default {
    name:"Login",
    data(){
    return{
        username:'',
        password:''
    }
    }
    ,
    methods:{
        login(){
            let newUser={
                username:this.username
                ,
                password:this.password
            }
            axios.post('http://localhost:3000/login',newUser).then((res=>{res.status(200)?console.log('Hiew'):console.log("Fiew")}))
        }

    }
}
</script>