<template>
  <v-container fluid class="pa-8">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12">
          <v-text-field
            v-model="keyword"
            label="search for Meals"
            variant="underlined"
            hide-details
            class="search-input px-3 w-100"
            @change="searchMeals"
          ></v-text-field>
        </v-col>
        <v-col v-if="loading">
          <v-progress-linear color="primary" indeterminate :height="7"></v-progress-linear>
        </v-col>
        <v-col
          v-else-if="!loading && mystore.searchInput != null"
          class="text-center text-md-start"
          cols="12"
          md="6"
          lg="4"
          v-for="meal of mystore.searchInput"
          :key="meal.idMeal"
        >
          <div class="meals">
            <h3 :title="meal.strMeal" class="title">{{ meal.strMeal }}</h3>
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
        <div v-else>
          <div class="not-found">
            <h3>whoops, 404 food not found</h3>
            <img :src="NotFound" alt="">
            <p>The food You were looking for does not exist</p>
          </div>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
//  Bulit In Functions
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { store } from '@/stores/Meal'
import GeneralButton from '@/components/GeneralButton.vue'
import NotFound from '@/CSS/NotFound.svg'
// Cache Route In Const <==
const route = useRoute()
// const router = useRouter()
console.log(route)
const mystore = store()
// * Loading
const loading = ref(false)
// connect Keyword With Input via v-modedl
const keyword = ref('')
// Call This function every Change
const searchMeals = async () => {
  loading.value = true
  await mystore.searchMeal(keyword.value)
  setTimeout(() => {
    loading.value = false
    keyword.value = ''
  }, 1000)
}
onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchMeals()
  }
})
</script>
