<script>
import SimilarMovies from '../components/SimilarMovie'

import MovieDetail from "../components/MovieDetail";
import CommentsCard from '../components/CommentsCard'
import { mapGetters } from "vuex";
export default {
  name: "Movie",
  data() {
    return {
      
    };
  },
  components: { MovieDetail,CommentsCard,SimilarMovies},
computed: {
    ...mapGetters([
      'groupedSimilarMovies',
    ]),
    ...mapGetters([
      'groupedMovieCast'
    ]),
    movieDetails(){
      return this.$store.state.movies.movieDetails
    },
    movieVideos(){
      return this.$store.state.movies.movieVideos
    },
    comments(){
     return this.$store.state.movies.comments
    }
    
  },
   created() {
    this.$store.dispatch('getMovieDetails',this.$route.params.id)
    this.$store.dispatch("getSimilarMovies",this.$route.params.id)
    this.$store.dispatch('getMovieCredits',this.$route.params.id)
    this.$store.dispatch('getMovieVideos',this.$route.params.id)
    this.$store.dispatch('getCommentsOfMovie',this.$route.params.id)
 } 

};
</script>
<template>
  <div>
   
    <MovieDetail
      :movieDetails="movieDetails"
      :movieVideos="movieVideos"
      :movieCredits="groupedMovieCast"
   />
   <CommentsCard :comments="comments" />

   <SimilarMovies :similarMovies="groupedSimilarMovies" />
  </div>
  </template>