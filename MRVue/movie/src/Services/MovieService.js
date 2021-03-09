import axios from 'axios';


export default {
   getMovies(){
 return  axios.get('http://localhost:3000/movie/all')
    
    }
,
getSimilarMovies(id){
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
    },
    getMovieCredits(id){
      return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
    },
    getMovieDetails(id){
      return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
    
    },getMovieVideos(id){
      return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=63c20ab0688ef19ee1cdf0eacf135738&language=en-US`)
    }
  }
  

