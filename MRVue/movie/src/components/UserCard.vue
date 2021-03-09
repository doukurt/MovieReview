<template>
<b-nav-item-dropdown  id="profile" right>
          <!-- Using 'button-content' slot -->
          <template
         template #button-content>   <strong>{{currentUser.data.username}}</strong>
          </template>
          <b-dropdown-item  href="/profile"><span>Profile</span></b-dropdown-item>
          <b-dropdown-item @click="logOut" href="/login"><span >Log Out</span>  </b-dropdown-item>
        </b-nav-item-dropdown>
</template>
<script>
import LogOut from '../components/icons/LogOut'
export default {
    props:['currentUser'],
    components:{
        LogOut
    },computed: {
    loggedIn() {
      return this.$store.state.accounts.initialState.status.loggedIn;
    }
  },
// created(){
//      if (!this.loggedIn) {
//       this.$route.push("/login")
    
//     }
// },
  methods: {
       logOut(){
           this.$store.dispatch('logout')
        
    }
  },watch: {
    '$route': 'logOut'
  }
}
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
</style>