<template>
   
  <div class="movies">
    <h4 class="text-center">Similar Movies You May Like</h4>
    <div class="row row-cols-1 row-cols-md-6 g-4">
      <div class="col" :key="movie.id" v-for="movie in similarMovies">
        <div class="card h-100">
          <div class="card-body">
            <img
              :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
              :alt="movie.poster_path"
            />
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ movie.release_date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['similarMovies']
}
</script>
<style scoped>
.movies{
  margin-top:100px;
  background-color: #f42f42;
  border-radius: 0px 50px 50px 0px;
}
h4{
    padding-top: 10px;
    color:#fff;
}

h5{

  color:#f42f42
}
.card {

  width: 340px;
  height: 300px;
  margin-left:60px;
  background-color:#fff;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
border-radius:15px;

  transition: 0.4s;
  transform: scale(0.89,0.89);

}


.card-title{
  text-align: center;
}


.card:hover {
  z-index: 1;
  transform: scale(0.99,0.99);
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

}
img{
  object-fit: cover;
}

.card:hover>div>h5{
  color:#fff;
}
.card:hover>small{
  color:#fff
}
.card:hover>div>p{
  color:black;
}
@media all and (max-width: 500px) {
  .card {
    
    flex-direction: column;
  }
}

</style>