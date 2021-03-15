<template>
<div>
    <div class="profil" >
    
<div class="row" >
<div class="col-4 border-right"><ProfileDetails :user="user" /> </div>
<div class="col-4 border-right">  <CommentView  v-for="comment in user.comments" :key="comment.id" :comment=comment :user=user /></div>
<div id="favorite" class="col-4 border-right"><Favorite v-for="movie in user.favorite" :key="movie.id" :movie=movie  /></div>
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
        }
    },
    components:{
       ProfileDetails,CommentView,Favorite
      
    },
    computed:{
        user(){
            return this.$store.state.users.user
        }
      
    }
    
    ,created(){
        this.$store.dispatch('getUser',this.$route.params.username)
    
    }
}
</script>
<style scoped>

 .profil{
     align-content: center;
 }
</style>