<template>
<div class="view">
    <form>

      <fieldset>
        <div class="row">
          <div class="col-sm-3 col-lg-2 hidden-xs">
      <DefaultImage :profileImage="this.reply.user.image"/>
          </div>
          <div class="form-group col-xs-12 col-sm-9 col-lg-10"> 
 <router-link :to="'/user/'+this.reply.user.username">           <p class="card-title"><strong>{{this.reply.user.displayName}}</strong>@<span style="color:smoke">{{this.reply.user.username}}</span></p>
</router-link> 
         <p class="card-text">{{this.reply.content}}</p>

          </div>
        </div>
      </fieldset>
    </form>





 
  </div>

</template>
<script>
import DefaultImage from '../DefaultImage'
export default {
  props:['reply'],
  components:{DefaultImage}
}
</script>
<style scoped>
a{
  text-decoration: none;
  color:inherit
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