import axios from 'axios';


export default {
   getMovies(){
 return  axios.get('http://localhost:3000/movie/all')
    
    }
,
getSimilarMovies(id){
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=YOUR_API_KEY&language=en-US`)
    },
    getMovieCredits(id){
      return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=YOUR_API_KEY&language=en-US`)
    },
    getMovieDetails(id){
      return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`)
    
    },
    getMovieVideos(id){
      return axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=YOUR_API_KEY&language=en-US`)
    },
    getCommentsOfMovie(id){
      return axios.get(`http://localhost:3000/movie/${id}`)
    }
    // postCommentToMovie(id,body){
    //   return  axios.post(`http://localhost:3000/movie/${id}`,body)
    // }
  }
  

