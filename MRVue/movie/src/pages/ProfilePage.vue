<template>
<div>
    <div class="profil" >
    
<div class="row" >
<div class="col-4 border-right"><ProfileDetails :ownerLoggedIn=ownerLoggedIn :user="user" /> </div>
<div class="col-4 border-right">  <CommentView :ownerLoggedIn=ownerLoggedIn v-for="comment in user.comments" :key="comment.id" :comment=comment :user=user /></div>
<div id="favorite" class="col-4 border-right"><Favorite :ownerLoggedIn=ownerLoggedIn v-for="movie in user.favorite" :key="movie.id" :movie=movie  /></div>
</div>
</div>

</div>

</template>
<script>
import ProfileDetails from '../components/ProfileDetails'
import CommentView from '../components/Comments/CommentView'
import Favorite from '../components/Favorite'
export default {
    name:"Profile",
    data(){
        return{
            isAuthor:false,
            ownerLoggedIn:false,
        }
    },
    components:{
       ProfileDetails,CommentView,Favorite
      
    },
    computed:{
        user(){
            return this.$store.state.users.user
        },currentUser() {
      return JSON.parse(this.$store.state.accounts.initialState.user);
    },
      
    }
    
    ,created(){
        this.$store.dispatch('getUser',this.$route.params.username)
        this.currentUser.data.username === this.$route.params.username
      ? (this.ownerLoggedIn = true)
      : (this.ownerLoggedIn = false);
    
    }
}

</script>
<style scoped>

 .profil{
     align-content: center;
 }
</style>