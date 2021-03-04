<template>
<div>
<TopBar/>
<MovieCard :movies=movies />
<MovieCard :movies=movies2 />
</div>

</template>
<script>
import TopBar from '../components/TopBar'
import MovieCard from '../components/MovieCard'
import axios from 'axios'
export default {
    data(){
        return{
            movies:[],
            movies2:[]
        }
    },
    components:{
TopBar,MovieCard
    },
    created(){
        axios.get('http://localhost:3000/movie/all')
           .then((res)=>{
               for( var i=5 ;i<=9;i++){

                   this.movies.push(res.data[0][i])
                   this.movies2.push(res.data[0][i-5])

               }                  
                
               })

    }
}
</script>
<style scoped>

</style>