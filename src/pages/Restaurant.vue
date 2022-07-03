<template>
<div>
  <div :key="index" v-for="(restaurants, index) in restaurants">
    <cardRestaurant
      :name="restaurants.attributes.name"
      :categorie="restaurants.attributes.categories"
      :image="restaurants.attributes.imgPath"
      :description="restaurants.attributes.description"
    ></cardRestaurant>
  </div>
  <q-item clickable :to="{ name: 'addRestaurant'}">
    <q-card style="width: 100%; max-width: 250px;">
      <p>+</p>
    </q-card>
  </q-item>
  
</div>

</template>

<script>


import axios from "axios";
import cardRestaurant from "components/cardRestaurant";
import CardRestaurant from '../components/cardRestaurant.vue';
import addRestaurant from '../components/addRestaurant.vue'
import IndexPage from './IndexPage.vue';
let token = 'eba7d9a55f821acde811ed17d79e3400bb27dd2f962c01383f39f10df0519f1144835512b54f9860529bbb35c42e3759f5185618b39c6a31287b6740d6c6b8d46ac876020d504cd376f4d573acb143220763f91396cb9e410ee9c5c46e0a415e57ff7f7a23105a99656a3333167d0c7f316ad7c1a3f502c866cf1037b6290b48'

export default {
  name: "NouvellePage",
  components:{
    cardRestaurant,
    CardRestaurant,
    IndexPage,
  },
  data(){
    return{
      restaurants :null,
    }
  },
  mounted () {
    axios.get('http://localhost:1337/api/restaurants',{ headers: {"Authorization" : `Bearer `+token} })
      .then(response => {
        this.restaurants = response.data.data


      })
  }
}



</script>


<style scoped>

</style>
