<template>
  <div class="text-center">
 
     <div class="container" v-if="this.ownerLoggedIn">
       <form>
  <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Title</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="title" v-model="title">
    </div>
  </div>
   <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Overview</label>
    <div class="col-sm-10">
      <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Overview" v-model="overview">
    </div>
  </div>
  
     <div class="form-group row">
    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Poster</label>
      
    <div class="col-sm-1">  <label for="upload"><Share /></label>
 
    </div>
  </div>
       <div class="form-group row">
      
    <div class="col-sm-5">  
  <button @click="uploadImage">Save Movie</button> 
    </div>
  </div>
  </form>
     
  
            
 <input @change="handleImage" class="custom-input" id="upload" type="file" accept="image/*">
    
    </div>
     
  </div>

  
 
</template>
<script>
import axios from 'axios'
import Share from './icons/Share'
export default {
  data() {
    return {
      title: "",
      overview: "",
      ownerLoggedIn:''
    };
  },
  components:{Share}
  ,
  methods: {
  
    handleImage(e) {
      const selectedImage = e.target.files[0]; 
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
  
      };
      reader.readAsDataURL(fileObject);
    },
    uploadImage() {
      const { image } = this;
      const body = {
           title: this.title,
        overview: this.overview,
      };
      axios
        .post(`http://127.0.0.1:3000/user/movie/${this.$route.params.username}`, {
          body,image
        })       
        .catch((err) => {
          return new Error(err.message);
        });
    },
  }, computed:{
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

};
</script>
<style scoped>
.container{
  display: block;
}
input{
 border:1px solid #f42f42;
 border-radius:15px;
 box-shadow: #f42f42;
 width:30%;
}
input:focus{
  outline: none;
}
#toggle-btn{
    border:none;
    background-color:#f42f42;
    color:white;
    font-weight: 700;
    border-radius: 15px;
}
.form {
    display:block
    
}
.text-center{
  margin-top:100px;
  margin-left:50px;
}
#upload{
    display:none}
</style>