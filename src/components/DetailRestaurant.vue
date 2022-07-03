<template>

<!--  <p>{{restaurant}}</p>-->
<!--  <p>{{restaurant.name}}</p>-->
<!--  <p>{{restaurant}}</p>-->


<!--  <p v-for="restaurant in restaurant">{{restaurant.name}}</p>-->
  <div :key="index" v-for="(restaurant, index) in restaurant">
    <h1>{{ restaurant.name }}</h1>
    <img class="my-card" :src="'/img/'+ restaurant.imgPath" :alt="restaurant.name">
    <p>{{ restaurant.description }}</p>
  </div>


  <p></p>
</template>

<script>
import axios from 'axios';
let token = 'eba7d9a55f821acde811ed17d79e3400bb27dd2f962c01383f39f10df0519f1144835512b54f9860529bbb35c42e3759f5185618b39c6a31287b6740d6c6b8d46ac876020d504cd376f4d573acb143220763f91396cb9e410ee9c5c46e0a415e57ff7f7a23105a99656a3333167d0c7f316ad7c1a3f502c866cf1037b6290b48'

export default {
  name: "DetailRestaurant",
  data(){
    return{
      restaurant :null,
    }
  },

  mounted () {
    let url = 'http://localhost:1337/api/restaurantByName/'+this.$route.params.nom;
    axios.get(url,{ headers: {"Authorization" : `Bearer `+token} })
        .then(response => {
          this.restaurant = response
          console.log(response.data)
          console.log(this.restaurant)
          // console.log(response.data)
        })
  }
}


</script>

<style scoped>

.my-card{
  width: 100%;
  max-width: 250px;
}

</style>
