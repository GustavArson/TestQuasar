<template>
  <h1>{{ $route.params.nom }}</h1>
  <h1>{{ restaurant }}</h1>

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

    axios.get('http://localhost:1337/api/restaurants/McDonald\'s',{ headers: {"Authorization" : `Bearer `+token} })
        .then(response => {
          this.restaurant = response.data.data
          console.log(response.data.data.attributes.name)
          // response['data']['data'].forEach(restaurant => {
          //   console.log(restaurant)
          //   console.log(restaurant.attributes.name)
          //   console.log(restaurant.id)
          // })
        })

        async function getUser() {
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  }
}


</script>

<style scoped>

</style>
