<template>
    <q-card style="width: 100%; max-width: 250px;">
        <q-form 
        @submit="onSubmit"
        @reset="onReset" 
        method="post" 
        action="addRestaurant">
            <q-input type="text" name="name" id="name" placeholder="Name of your Restaurant"></q-input>
            <q-select v-model="model" :options="options" label="Type of Restaurant" name="type" id="type"></q-select>
            <q-input type="file" name="img" id="img"></q-input>
            <q-input type="text" name="description" id="description" placeholder="Description of your Restaurant"></q-input>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
        </q-form>
    </q-card>
</template>

<script>

export default {
  name: "addRestaurant",
  data(){
    return{
    options: [
        'FrenchFood', 'FastFood',
      ]
    }
  },
}
</script>
