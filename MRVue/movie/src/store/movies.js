import MovieService from '../Services/MovieService'

const state={
movies:[],
grouped:[],
similarMovies:[],
movieDetails:{},
movieCredits:[],
movieVideos:{},
}
const actions={
    async getMovies({commit}) {
        return  await MovieService.getMovies().then((res) => {
          commit('setMovies', res.data[0]);
        });
      },
     async getSimilarMovies({commit},id){
        return  await MovieService.getSimilarMovies(id).then((res)=>{
          commit("setSimilarMovies",{id,similarMovies:res.data.results})
        })
      },
     async getMovieCredits({commit},id){
        return await MovieService.getMovieCredits(id).then((res)=>{
          commit("setMovieCredits",{id,movieCredits:res.data.cast})
        })
      }
      ,
     async getMovieDetails({commit},id){
        return await  MovieService.getMovieDetails(id).then((res)=>{
          commit('setMovieDetails',{id,movieDetails:res.data})
        })
      },async getMovieVideos({commit},id){
        return await MovieService.getMovieVideos(id).then((res)=>{
          commit("setMovieVideos",{id,movieVideos:res.data.results[0].key})
        })
      }
}
const getters = {
    groupedMovies(state) {
      const grouped = [];
  
      state.movies.map((item, index) => {
        if (index % 5 === 0) {
          grouped.push([]);
        }
        grouped[grouped.length - 1].push(item);
      });
  
      return grouped;
    },
    groupedSimilarMovies(state) {
      const grouped = [];
      for(var i=0;i<state.similarMovies.length;i++){
        grouped.push(state.similarMovies[i]) 
        if(i===4){
           break;
         }
       }
      return grouped;
    },
    groupedMovieCast(state) {
      const grouped = [];
  
     for(var i=0;i<state.movieCredits.length;i++){
      grouped.push(state.movieCredits[i]) 
      if(i===4){
         break;
       }
     }
  
      return grouped;
    }
  };
  
const mutations={
 
    setMovies(state, movies) {
        state.movies = movies;
      },
  setSimilarMovies(state,data){
    const {similarMovies} = data
    state.similarMovies=similarMovies
  },
  setMovieCredits(state,data){
    const {movieCredits}=data
    state.movieCredits=movieCredits
  },
  setMovieDetails(state,data){
    const{movieDetails}=data
    state.movieDetails=movieDetails
  },setMovieVideos(state,data){
    const{movieVideos}=data
    state.movieVideos=movieVideos
  }
}
export const movies = {
    state,
    getters,
    actions,
    mutations
};
