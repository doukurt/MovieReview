<template>
  <div class="glass">
    <nav class="navbar ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><logo></logo></a>
        <a class="navbar-brand" href="#">Home</a>
        <a class="navbar-brand" href="#">Movies</a>
        <a class="navbar-brand" href="#">Log In</a>
        <a class="navbar-brand" href="#">Sign Up</a>
      </div>
    </nav>
  </div>
</template>
<script>
import logo from "./icons/logo";
export default {
  data() {
    return {
    
    };
  },
  components: { logo }
};
</script>
<style >
.navbar{
 padding: 10px;
}
a{
  color:#f42f42;
  font-weight: 700;
  text-decoration: none;
  
}
a:hover{
  color:white;
  border:0px solid #f42f42;
  background-color:#f42f42;
  border-radius: 5px;
 
}
</style>