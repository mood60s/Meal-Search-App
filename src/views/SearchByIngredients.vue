<template>
  <v-container class="ingredients" fluid>
    <v-container>
      <h3 class="title">Search By Ingredients</h3>
      <div class="search-block">
        <v-text-field
          v-model="search"
          hide-details
          class="search-input"
          label="Search Ingredient"
        ></v-text-field>
        <div class="container-ingred d-flex align-center ga-4 flex-wrap">
          <div class="boxs-grad flex-grow-1">
            <div class="box" v-for="(link, i) in filteredMeals" :key="i">
              <router-link
                :to="{
                  name: 'ingredientDeatils',
                  params: { id: link.strIngredient },
                }"
              >
                {{ link.strIngredient }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-container>
</template>
<script setup>
// * Import Bulit in Functons
import { onMounted, ref, computed } from 'vue'
// Import Store
import { store } from '@/stores/Meal'
// Declare Store
const myStore = store()
// Declare array To Hold Values Meals
const myArrMeals = ref([])
// Declare Search Variable to Held Value input V-model
const search = ref('')
onMounted(async () => {
  // Call Store
  await myStore.MealsByGredient()
  // Assign Values and slice to my Array
  myArrMeals.value = myStore.LinksArr
})
// Filter my Array
const filteredMeals = computed(() => {
  // Filter, => Return Item Include Search Input Only
  return myArrMeals.value.filter((item) =>
    item.strIngredient.toLowerCase().includes(search.value.toLowerCase()),
  )
})
</script>
