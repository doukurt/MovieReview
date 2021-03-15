<template>
<b-nav-item-dropdown  id="profile" right>
          <!-- Using 'button-content' slot -->
        
          <template template #button-content> 
             <strong>{{currentUser.data.username}}</strong>
          </template>
        <div class="text-center"> <DefaultImage :profileImage=currentUser.data.image /></div>
          <b-dropdown-item   :to="/user/+currentUser.data.username" > <span>Profile</span></b-dropdown-item>
          <b-dropdown-item @click="logOut" href="/"><span >Log Out</span>  </b-dropdown-item>
        </b-nav-item-dropdown>
</template>
<script>
import DefaultImage from '../components/DefaultImage'
import LogOut from '../components/icons/LogOut'
export default {
    props:['currentUser'],
    components:{
        LogOut,DefaultImage
    },
  methods: {
       logOut(){
           this.$store.dispatch('logout')
        
    }
  }}  
</script>
<style scoped>


span{
    color:#f42f42;
    font-weight: 700;
   
}

#profile{
    padding:2px;
}

strong{
    padding:10px;
    border-radius:5px;
    color:#f42f42
}
strong:hover{
    color:white;
    background-color: #f42f42;
}
.lan{
  display:inline-flex
}
</style>