<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/nouvellePage">Nouvelle Page</router-link> |
    <router-link :to="{name: 'Restaurant'}">Nouvelle Page 2</router-link>
  </nav>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})

</script>
