<template>
  <h3 class="text-center mt-10 mb-10 title-home" data-meal="Meal Search App">Meal Search App</h3>
  <p class="text-center random-meal">Random Meals</p>
  <v-container fluid class="pa-8">
    <v-container>
      <v-row v-if="isLoading">
        <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4">
          <v-skeleton-loader
            :elevation="5"
            type="image,paragraph"
            color="#393e46"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col
          class="text-center text-md-start"
          cols="12"
          md="6"
          lg="4"
          v-for="meal of mystore.randomMeals"
          :key="meal.idMeal"
        >
          <div class="meals">
            <h3 :title="meal.strMeal" class="title">{{ meal.strMeal.slice(0,11) }}</h3>
            <span class="category">{{ meal.strCategory }}</span>
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
const mystore = store()
const isLoading = ref(true)
import GeneralButton from '@/components/GeneralButton.vue'
onMounted(async () => {
  await mystore.getRandom()
  isLoading.value = false
})
</script>
