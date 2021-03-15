<template>
<div>
<div class="view" >
    <form>
      
      <fieldset>
        <div class="row">
          <div class="col-sm-3 col-lg-2 hidden-xs">
      <DefaultImage :profileImage="user.image"/>
          </div>
          <div class="form-group col-xs-12 col-sm-9 col-lg-10"> 
            <p class="card-title"><strong>{{user.displayName}}</strong>@<span style="color:smoke">{{user.username}}</span></p>
          
    <router-link :to="'/movie/'+comment.movie"><p class="card-text">{{comment.content}}</p></router-link>   
    <button class="del" @click="deleteComment"><Delete/></button>  
         
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</div>
</template>
<script>
import DefaultImage from '../DefaultImage'
import Delete from '../icons/Delete'
import axios from 'axios'
export default {
  props:['user','comment'],
  components:{DefaultImage,Delete},
  methods:{
  deleteComment(){
    return axios.delete(`http://localhost:3000/user/comment/${this.$route.params.username}`,{data: {
    commentId:this.comment._id,
    movieId:this.comment.movie
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
a{
  text-decoration: none;
  color:black
}
.view{
  border:1px solid #edededed;
  border-radius:15px;
  margin:5px;
}
fieldset{
  margin-top:20px;
}
.card-title>strong{
  font-weight: 700;
  color:#f42f42;
  
  
}
.card-title>span{
  font-size:14px;
  
}

.col-sm3>div>img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-left: 15px;
  margin-right: 15px;
}
@media screen {
  .profile {
    min-width: 379px;
  }
}
</style>