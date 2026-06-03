<template>
  <v-container fluid class="pa-8">
    <v-container>
      <v-row class="justify-center">
        <v-col v-if="loading">
          <v-progress-linear color="primary" indeterminate :height="7"></v-progress-linear>
        </v-col>
        <v-col
          v-else
          class="text-center text-md-start"
          cols="12"
          md="6"
          lg="4"
          v-for="meal in MealsList"
          :key="meal.idMeal"
        >
          <div class="meals">
            <h3 :title="meal.strMeal" class="title">{{ meal.strMeal }}</h3>
            <span class="category">{{ meal.strMeal }}</span>
            <img class="thumbnail" :src="meal.strMealThumb" alt="strMeal" />
            <p class="description">
              {{
                meal.strInstructions.length > 100
                  ? meal.strInstructions.slice(0, 100) + '...'
                  : meal.strInstructions
              }}
            </p>
            <div class="youtube-source">
              <general-button :role="'goyoutube'" :href="meal.strYoutube" :svgName="'youtube'"
                >Youtube</general-button
              >
              <general-button
                :role="'routerLink'"
                :href="{ name: 'mealDeatils', params: { id: meal.idMeal } }"
                :svgName="'source'"
                >Source</general-button
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup>
import { store } from '@/stores/Meal'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const mystore = store()
const MealsList = ref([])
const loading = ref(true)
import GeneralButton from '@/components/GeneralButton.vue'
onMounted(async () => {
  await mystore.getMealsByLetter(route.params.letter)
  MealsList.value = mystore.MealsLetterOnly.meals
  setTimeout(() => {
    loading.value = false
  }, 300)
})
</script>
