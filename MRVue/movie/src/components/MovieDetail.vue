<template>
  <div class="movieDetail">
    <div class="card" style="max-width: 1770px">
      <div class="row g-0">
        <div class="col-md-3">
          <img
            :src="'https://image.tmdb.org/t/p/w400' + movieDetails.poster_path"
            :alt="movieDetails.poster_path"
          />
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <div class="addFavorite">
              <span class="card-title" style="color: #f42f42">
                <strong>{{ movieDetails.title }}</strong>
                
              </span><button class="Favorites" v-on:click="postFavorite" ><Favorite /></button>
            </div>
            <p class="card-text">{{ movieDetails.overview }}</p>

            <div v-if="!trailer" class="Offical">
              <span v-on:click="playTrailer" class="playTr"
                ><PlayIcon /> Offical Trailer</span
              >
            </div>
            <div v-if="trailer" class="Trailer">
              <iframe
                width="500"
                height="315"
                :src="'https://www.youtube.com/embed/' + movieVideos"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="category">
              <p><strong>Genres </strong></p>

              <div v-for="genre in movieDetails.genres" :key="genre.id">
                <span>{{ genre.name }}</span>
              </div>
            </div>
            <div class="revenue">
              <p><Revenue /></p>
              <p><Equals /></p>
              <strong v-if="!movieDetails.revenue == 0" style="color: #85bb65"
                >${{ movieDetails.revenue }}</strong
              >
            </div>
            <div class="cast">
              <p><Cast /></p>
              <div class="casts" v-for="cast in movieCredits" :key="cast.id">
                <img
                  :src="'https://image.tmdb.org/t/p/w300' + cast.profile_path"
                  :alt="cast.profile_path"
                />
                <p>{{ cast.character }}</p>

                <p>{{ cast.original_name }}</p>
              </div>
            </div>
            <div class="production">
              <p style="color: #f42f42">
                <strong>Production Companies</strong>
              </p>

              <div class="companiesImg">
                <img
                  :src="
                    'https://image.tmdb.org/t/p/w300' +
                    movieDetails.production_companies[0].logo_path
                  "
                  :alt="movieDetails.production_companies[0].logo_path"
                />
              </div>
            </div>
            <p class="text-right">
              <small
                >Release Date:
                <strong>{{ movieDetails.release_date }}</strong></small
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PlayIcon from "../components/icons/PlayIcon";
import Revenue from "../components/icons/Revenue";
import Equals from "../components/icons/Equals";
import Cast from "../components/icons/Cast";
import Favorite from '../components/icons/Favorite'
import axios from 'axios'
export default {
  data() {
    return {
      trailer: false,
    };
  },
  computed:{
   currentUser(){
   return JSON.parse( this.$store.state.accounts.initialState.user)
   }
  },
  methods: {
    playTrailer() {
      this.trailer = !this.trailer;
    },
    postFavorite(){
      
      return axios.post(`http://localhost:3000/movie`,{
        movieId:this.movieDetails.id,
        username:this.currentUser.data.username})
    }
  },
  props: ["movieDetails", "movieVideos", "movieCredits"],
  components: { PlayIcon, Revenue, Equals, Cast,Favorite },
};
</script>
<style scoped>
.Favorites{
  border:none;
  background-color: white;
}


.addFavorite{
  display: flex;
}
.addFavorite>span {
  flex-grow:1;
  font-size: 20px;
  text-align: center;
}

.cast {
  display: flex;
}
.col-md-3 > img {
  object-fit: cover;
}
.cast > p {
  margin-right: 20px;
}
.casts > img {
  width: 20%;
  object-fit: cover;
  border-radius: 10%;
}

.card {
  width: 100%;
  height: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
/* .card-body{
    width: 100%;
    height: 100%;
      background: rgba( 255, 255, 255, 1 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
} */
.Offical {
  margin: 20px 0px 20px 0px;
}
.category {
  display: flex;
  margin: 20px 0px 20px 0px;
}
.category > p {
  margin-right: 20px;
}
.category > div > span {
  margin-right: 20px;
}
.revenue {
  margin: 20px 0px 20px 0px;
  display: flex;
}
.revenue > p > div {
  margin-right: 20px;
}

.production {
  display: block;
  margin: 20px 0px 20px 0px;
}

.companiesImg > img {
  width: 10%;
  height: 85%;
}

.movieDetail {
  margin-top: 100px;

  background-color: #cda94c;
}

@media screen {
  .card {
    max-width: 1770px;
    min-width: 325px;
  }
}
.playTr {
  cursor: pointer;
}
</style>
