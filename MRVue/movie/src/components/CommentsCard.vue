<template>
    <div class="card mb-3" style="max-width: 1770px;">
  <div class="row g-0">
    <div  class="col-md-4">
     <CommentSubmit v-if="!this.loggedIn==false" />
     <div v-if="this.loggedIn==false">
         Please Log IN  !!!
     </div>
    </div>
    <div class="col-md-8">
      <div class="card-body">
    <CommentsOfMovie v-for="reply in comments" :key="reply.id" :reply="reply" />
      </div>
    </div>
  </div>
</div>
</template>
<script>
import CommentsOfMovie from './Comments/CommentsOfMovie'
import CommentSubmit from './Comments/CommentSubmit'
export default {
    components:{CommentsOfMovie,CommentSubmit},
    props:['comments'],
    computed:{
        loggedIn() {
      return this.$store.state.accounts.initialState.status.loggedIn;
    }
            }
}
</script>