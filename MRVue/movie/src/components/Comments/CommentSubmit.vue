<template>
  <div>
    <form>
      
      <fieldset>
        <div class="row">
          <div class="col-sm-3 col-lg-2 hidden-xs">
          <DefaultImage :profileImage=currentUser.data.image />
          </div>
          <div class="form-group col-xs-12 col-sm-9 col-lg-10">
            <textarea
              class="form-control"
              id="message"
              placeholder="Your comment"
              v-model="comment"
              required=""
            ></textarea>
            <div class="text-right">
              <button type="submit" @click="postComment" class="btn btn-normal">Submit</button>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
import DefaultImage from '../DefaultImage'
import axios from "axios";
export default {
  data() {
    return {
      comment: ""
    };
  },components:{DefaultImage},
  computed: {
    currentUser() {
      return JSON.parse(this.$store.state.accounts.initialState.user);
    }
  },

  methods: {
    postComment() {
      return axios.post(
        `http://localhost:3000/movie/${this.$route.params.id}`,
        { comment: this.comment, user: this.currentUser.data.username }
      );
    }
  }
};
</script>
<style scoped>
fieldset{
    margin-top:30px;
}
.btn{
    margin-top:10px;
    border:1px solid #f42f42;
    border-radius:15px;
    background-color: white;
    font-weight: 700;
    color:#f42f42;
}
textarea{
    border:none;
    border-radius:15px;
    background-color: whitesmoke;
    resize: none;
}
textarea:focus{
    outline: none;
}

@media screen {
  .profile {
    min-width: 379px;
  }
}
</style>
