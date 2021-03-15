<template>
<div class="favorite">
    
   <div class="card" >
   <div class="card-body" >
  <img :src="'https://image.tmdb.org/t/p/w92'+movie.poster_path" :alt="movie.poster_path">
        <span class="card-title">{{movie.title}}</span>
        <div v-if="this.ownerLoggedIn"><button class="del" @click="deleteFav"><Delete /></button></div>
      
  </div>
   </div>
   
    </div>
</template>
<script>
import axios from 'axios'
import Delete from './icons/Delete'
export default {
props:[
  'movie','ownerLoggedIn'
],
components:{Delete},
methods:{
  deleteFav(){
    return axios.delete(`http://localhost:3000/user/${this.$route.params.username}`,{data: {
    movie:this.movie._id
  }
    })
  }
}
}
</script>
<style scoped>
.del{
  text-align: center;
  background-color: white;
  border:none}
.favorite{
  display:inline-flex;
  flex-wrap:wrap;
}
.card{
  width:140px;
  border:none;
  margin:15px

}
img{
  border-radius: 15px;
}
.card-title{
  font-size:12px;
  font-weight: 700;
  color:#f42f42;
  
}
.card-body{
  text-align: center;
}

</style>