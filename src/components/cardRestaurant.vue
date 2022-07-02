<template>

  <div class="q-pa-md row items-start q-gutter-md">
    <q-item clickable :to="{ name: 'detailRestaurant', params: { nom: name }}">
      <q-card class="my-card">
        <img class="md" :src="'/img/'+image" alt="logoRestaurant">

        <q-card-section>
          <div class="text-h6">{{ name }}</div>
          <div class="text-subtitle2">{{ categorie }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ description }}
        </q-card-section>
      </q-card>
    </q-item>
  </div>

</template>

<script>

export default {
  name: "cardRestaurant",
  data(){
    return{

    }
  },
  props: {
    name: String,
    categorie: String,
    image: String,
    description: String,
  },
}
</script>

<style scoped>
.my-card{
  width: 100%;
  max-width: 250px;
}
</style>
