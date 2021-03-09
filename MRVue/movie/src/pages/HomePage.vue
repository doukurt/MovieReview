<template>
<div>
<MovieCard  v-for="group in groupedMovies" :key="group.id " :movies=group />
</div>

</template>
<script>
import TopBar from '../components/TopBar'
import MovieCard from '../components/MovieCard'
import { mapGetters } from "vuex";
export default {
    data(){
        return{
          
        }
    },
    components:{
TopBar,MovieCard
    },
computed: {
    ...mapGetters([
      'groupedMovies',
    ])
  },
   created() {
    this.$store.dispatch("getMovies")}
}
    
</script>
