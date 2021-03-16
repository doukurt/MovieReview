<template>
  <div>
        <div class="card"   >
   <div class="card-body" >
      <img :src="'http://localhost:3000/'+movie.poster_path"  :alt="movie.title"/>
        <p class="card-title">{{movie.title}}</p>
     <button  v-if="this.ownerLoggedIn" class="del" @click="deleteMovie">   <Delete /></button>
  </div>
        </div>
        </div>
</template>
<script>
import Delete from './icons/Delete'
import axios from 'axios'
export default {
    props:['movie','ownerLoggedIn'],
    components:{Delete}
    ,
    methods:{
       deleteMovie(){
        return axios.delete(
        `http://localhost:3000/user/myMovie/${this.$route.params.username}`,
        {
          data: {
            movieId: this.movie._id,
          },
        }
      );
    },
    }
}
</script>
<style scoped>

#overview{
  display:none;

}

img{
    width:100%;
    height:100%;
    border-radius:15px;
    
}
#toggle-btn{
     border:none;
     background-color: white;
     color:#98a6ad
 
}
.card{
  width:140px;
  border:none;
  margin:15px;
  display:inline-flex;

}

.card-title{
  font-size:12px;
  font-weight: 700;
  color:#f42f42;
  
}
.card-body{
  text-align: center;
}
.del{
   
  text-align: center;
  background-color: white;
  border: none;

}

</style>