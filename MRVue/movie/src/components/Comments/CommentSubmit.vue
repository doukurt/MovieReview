<template>
    <div>
    <div class="card">
    <div class="card-body">
    <div class=row>
        <img src="../../assets/bg-01.jpg" alt="#" width="50" height="50" class="rounded-circle"> 
          </div>
    <div class="col">
     <input type="text">
      
    </div>
 <div class="row">
     <button>Comment</button>
 </div>
    </div>
    </div>
    </div>
</template>
<style scoped>
.card-body>.row{
    margin:5px;
    
}
.card-body>.col{
    margin:5px;
}
.card-body{
    display: flex;
  
}
.card{
    border: none;
    border-radius:15px;
    background-color:whitesmoke;
}
input:focus{
    outline: none;
}
button{
    border:1px solid #f42f42;
    border-radius:15px;
    background-color: white;
    color:#f42f42;
    font-weight: 700;
    padding:8px;
}
button:hover{
    color:green
}
input{
background: rgba( 255, 255, 255, 0.5 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
width: 100%;
height: 100%;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>