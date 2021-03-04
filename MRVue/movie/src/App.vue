<template>
  <div id="app">
<router-view/>
</div>
</template>

<script>
import TopBar from './components/TopBar'
import MovieCard from './components/MovieCard';
export default {
  name: 'App',
  components:{TopBar,MovieCard},
  data(){
    return{
      movies:[]
    }
  },
  created(){

  }

}
</script>
    

<style>

</style>

