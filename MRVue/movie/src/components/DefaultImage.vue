<template>
<div>
 
    <img  :src="'http://localhost:3000/'+$attrs.profileImage" :alt="2" class="rounded-circle">
</div>
</template>
<script>

export default {
    data(){
        return{
             
        }
    },
    props:[{
        profileImage:{
            required:true,
            type:String,
        }
    }]
    ,
   
}
</script>
<style scoped>
img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-left: 15px;
  margin-right: 15px;
}
</style>