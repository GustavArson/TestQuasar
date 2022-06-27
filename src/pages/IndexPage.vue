<template>
  <q-page>
    <h1>Hello World !</h1>
    <p>Bonjour, je souhaiterai vous présentez ici bas la liste de nos restaurants</p>
    <a href="#/PageTest.vue">Lien Test</a>
    <table>
      ici sera la liste des restaurants récupérés dans la bdd quand j'aurai réussi à le faire
    </table>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
