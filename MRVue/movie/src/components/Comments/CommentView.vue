<template>
    <div>
<div class="card mb-3" style="max-width: 1770px;">
  <div class="row g-0">
    <div class="col-md-4">
     
      <CommentSubmit />
    </div>
    <div class="col-md-8">
      <div class="card-body">
       //comment Feed
     
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
import axios from 'axios'
import CommentSubmit from './CommentSubmit'
export default {
 data(){
   return{
         comment:''
   }
 },
 components:{CommentSubmit},
 methods:{
  
   }
 

}
</script>
<style scoped>
.card{
  margin-top:15px;
  border:none;
  background-color: whitesmoke;
  border-radius:15px;
}
</style>