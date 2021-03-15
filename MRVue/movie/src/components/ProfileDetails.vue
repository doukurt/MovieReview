<template>
  <div class="container">
    <div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-sm-4"></div>
          </div>
          <div class="row">
            <div class="col">
              <div class="text-center card-box">
                <div class="member-card pt-2 pb-2">
                  <br /><br /><br /><br />
                  <div class="thumb-lg member-thumb mx-auto">
                <DefaultImage :profileImage=user.image />
                  </div>
                      <h4>{{ user.username }}</h4>
                    <h4>{{ user.displayName }}</h4>
                     <label for="upload"><Share /></label>
                   
              
                   
       
     
      
                  </div>
   <input @change="handleImage" class="custom-input" id="upload" type="file" accept="image/*">
                  <div class="">
                    <p class="text-muted"><span> </span><span></span></p>
                  </div>
                  <ul class="social-links list-inline">
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Facebook"
                      >
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Twitter"
                      >
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        title=""
                        data-placement="top"
                        data-toggle="tooltip"
                        class="tooltips"
                        href=""
                        data-original-title="Skype"
                      >
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Edit Profile
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light"
                  >
                    Add Movies
                  </button>
                  <div class="mt-4">
                    <div class="row">
                      <div class="col-4">
                        <div class="mt-3">
                          <h4>{{user.favorite.length}}</h4>
                          <p class="mb-0 text-muted">Favorite</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-3">
                          <h4>6952</h4>
                          <p class="mb-0 text-muted">Income amounts</p>
                        </div>
                      </div>
                      <div class="col-4">
                        <div class="mt-3">
                          <h4>1125</h4>
                          <p class="mb-0 text-muted">Total Transactions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
import DefaultImage from './DefaultImage'
import Share from './icons/Share'
import axios from "axios";
export default {
  name: "ProfileDetail",
  data() {
    return {
      remoteUrl:"",
      image:""
    };
  },

  props: ["user"],
  components:{DefaultImage,Share},
  methods: {
  handleImage(e) {
      const selectedImage = e.target.files[0]; // get first file
      this.createBase64Image(selectedImage);
    },
    createBase64Image(fileObject) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
        this.uploadImage();
      };
      reader.readAsDataURL(fileObject);
    },
    uploadImage() {
      const { image } = this;
      axios.post(`http://127.0.0.1:3000/user/${this.$route.params.username}`
      , { image })
        .then((response) => {
          this.remoteUrl = response.data.url;
        })
        .catch((err) => {
          return new Error(err.message);
        })
    }
  },
}
</script>
<style scoped>
#upload{
  opacity:0;
  z-index: 1;
}
body {
  background: #dcdcdc;
  margin-top: 20px;
}
.card-box {
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 30px;
  background-color: #fff;
}
.social-links li a {
  border-radius: 50%;
  color: rgba(121, 121, 121, 0.8);
  display: inline-block;
  height: 30px;
  line-height: 27px;
  border: 2px solid rgba(121, 121, 121, 0.5);
  text-align: center;
  width: 30px;
}
.social-links li a:hover {
  color: #797979;
  border: 2px solid #797979;
}
.thumb-lg {
  height: 88px;
  width: 88px;
}
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  max-width: 100%;
  height: auto;
}
.btn-rounded {
  border-radius: 2em;
}
.text-muted {
  color: #98a6ad !important;
}
h4 {
  line-height: 22px;
  font-size: 18px;
}
</style>
