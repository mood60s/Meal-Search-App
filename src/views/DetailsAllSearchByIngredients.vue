<template>
  <v-container fluid>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" v-for="(meal, i) in mystore.mealsByName" :key="i">
          <div class="meals-byname">
            <div class="info">
              <div class="thumbnail">
                <img :src="meal.strMealThumb" :alt="meal.strMealThumb" style="max-width: 100%" />
              </div>
              <div class="title">
                {{ meal.strMeal.slice(0,16) }}
              </div>
              <div class="country">Country:{{ meal.strCountry }}</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup>
import { store } from '@/stores/Meal'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
const route = useRoute()
const mystore = store()
onMounted(async () => {
  await mystore.getMealsByName(route.params.id)
})
</script>
