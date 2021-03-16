<template>
  <div>
    <div>
      <b-button id="toggle-btn" @click="toggleModal">My Movies</b-button>

      <b-modal ref="my-modal" hide-footer  title="My Movies"  >
        <div class="myMovies">
          <MyMovieCard
            v-for="movie in $attrs.myMovies"
            :key="movie.id"
            :movie="movie"
            :ownerLoggedIn="ownerLoggedIn"
          />
       </div>
            </b-modal>
    </div>
  </div>
</template>
<script>
import Share from "./icons/Share";
import DefaultImage from "./DefaultImage";
import MyMovieCard from "./MyMovieCard";
export default {
  components: { Share, DefaultImage, MyMovieCard },
  props: [
    {
      myMovies: [
        {
          type: Array,
          required: true,
        },
       
      ], 
        
    },'ownerLoggedIn'
  ],
  methods: {
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
};
</script>
<style scoped>
.myMovies{
  display:flex;
}
#toggle-btn{
  border:none;
  background-color: white;
  color:#98a6ad 
}
#toggle-btn:focus{
 outline: none !important;
 box-shadow: none;
}
</style>