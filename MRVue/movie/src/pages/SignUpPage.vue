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
          <input type="text" class="form-control" v-model="displayName" placeholder="Displayname" />
        </div>
   
      
        <div class="col">
          <input type="password" class="form-control" placeholder="password" v-model="password" />
        </div>
    
       
   

      <button  @click="register" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Signup',
  data() {
    return {
     
        username: "",
        displayName: "",
        password: "",
        isAuthor:true
  
  ,
    }},
    methods:{
       register(){
           let newUser={
               username:this.username,
               displayName:this.displayName,
               password:this.password,
               isAuthor:this.isAuthor
           }
           axios.post('http://localhost:3000/signup',newUser).then((res=>{
               console.log(res.data)
           }))
       }
    }
};
</script>

<style scoped>
.container {
  border: 1px solid #3da1f2;
  padding: 10px;
  margin-top: 200px;
  width: 30%;
}
@media screen {
  .container {
    min-width: 300px;
    max-width: 573px;
  }
}
</style>
