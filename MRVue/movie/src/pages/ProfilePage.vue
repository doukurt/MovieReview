<template>
<div>
    <div class="profil" >
    
<div class="row" >
<div class="col-4 border-right"><ProfileDetails/> </div>
<div class="col-4 border-right">Comment</div>
<div class="col-4"><Favorites/></div>
</div>
</div>

</div>

</template>
<script>
import ProfileDetails from '../components/ProfileDetails'
import Favorites from '../components/Favorites'
export default {
    name:"ProfilePage",
    data(){
        return{
            isAuthor:false,
        }
    },
    components:{
       ProfileDetails,
       Favorites  
    }
}
</script>
<style scoped>
 
 .profil{
     align-content: center;
 }
</style>