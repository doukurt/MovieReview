<script>
import SimilarMovies from '../components/SimilarMovie'

import MovieDetail from "../components/MovieDetail";
import CommentView from '../components/Comments/CommentView'
import { mapGetters } from "vuex";
export default {
  name: "Movie",
  data() {
    return {
      
    };
  },
  components: { MovieDetail,CommentView,SimilarMovies},
computed: {
    ...mapGetters([
      'groupedSimilarMovies',
    ]),
    ...mapGetters([
      'groupedMovieCast'
    ]),
    movieVideos(){
      return this.$store.state.movies.movieVideos
    },
    movieDetails(){
      return this.$store.state.movies.movieDetails
    }
    
  },
   created() {
    this.$store.dispatch('getMovieDetails',this.$route.params.id)
    this.$store.dispatch("getSimilarMovies",this.$route.params.id)
    this.$store.dispatch('getMovieCredits',this.$route.params.id)
    this.$store.dispatch('getMovieVideos',this.$route.params.id)
    }

};
</script>
<template>
  <div>
   
    <MovieDetail
      :movieDetails="movieDetails"
    
      :movieCredits="groupedMovieCast"

      :movieVideos="movieVideos"
   />
   <CommentView />
   <SimilarMovies :similarMovies=groupedSimilarMovies />
  </div>
  </template>