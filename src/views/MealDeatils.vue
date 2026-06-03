<template>
  <v-container fluid class="pa-8">
    <div v-if="!loading" class="text-blue-darken-3 text-center mt-15">
      <v-progress-linear color="blue-darken-3" indeterminate></v-progress-linear>
      Loading
    </div>
    <v-container v-else-if="meal && loading">
      <v-row>
        <v-col col="12" lg="6">
          <div class="thumbnail" v-if="mystore.mealId">
            <img :src="mystore.mealId[0].strMealThumb" alt="" />
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="information-meal">
            <div class="cat d-flex flex-column" v-for="myMeal in meal" :key="myMeal.idMeal">
              <div class="category-area-tags d-flex flex-column ga-2 flex-wrap">
                <h3 class="ma-0 pa-0">{{ myMeal.strMeal }}</h3>
                <strong>Category: {{ myMeal.strCategory }}</strong>
                <div>
                  <strong>Tags:</strong>
                  <template v-if="myMeal.strTags">
                    <v-chip
                      v-for="tag in myMeal.strTags.split(',')"
                      :key="tag"
                      size="small"
                      color="#948979"
                      variant="text"
                      class="d-inline-flex"
                    >
                      {{ tag.trim() }}
                    </v-chip>
                  </template>
                  <span v-else class="text-grey"> No Tags</span>
                </div>
              </div>
              <p class="instructions">{{ myMeal.strInstructions }}</p>
              <div class="ingredients d-flex flex-wrap align-center">
                <div class="flex-grow-1">
                  <h3>Ingredients</h3>
                  <v-list class="bg-transparent">
                    <template v-for="(el, ind) of new Array(20)" :key="ind">
                      <v-list-item v-if="myMeal[`strIngredient${ind + 1}`]" class="pa-0">
                        {{ myMeal[`strIngredient${ind + 1}`] }}
                      </v-list-item>
                    </template>
                  </v-list>
                </div>
                <div class="flex-grow-1">
                  <h3>Measures</h3>
                  <v-list class="bg-transparent">
                    <template v-for="(el, ind) of new Array(20)" :key="ind">
                      <v-list-item
                        v-if="myMeal[`strMeasure${ind + 1}`]?.trim().length > 0"
                        class="pa-0"
                      >
                        {{ myMeal[`strMeasure${ind + 1}`] }}
                      </v-list-item>
                    </template>
                  </v-list>
                </div>
              </div>
              <div class="youtube-source">
                <general-button :role="'goyoutube'" :href="myMeal.strYoutube" :svgName="'youtube'"
                  >Youtube</general-button
                >
                <general-button :role="'gosource'" :href="myMeal.strSource"
                  >View Original Source</general-button
                >
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- Random Product -->
    <v-container v-else>
      <div>params</div>
    </v-container>
    <!-- End Random Product -->
  </v-container>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '@/stores/Meal'
import GeneralButton from '@/components/GeneralButton.vue'
const mystore = store()
const route = useRoute()
const meal = ref(null)
const loading = ref(false)
onMounted(async () => {
  await mystore.getMealById(route.params.id)
  meal.value = mystore.mealId
  setTimeout(() => {
    loading.value = true
  }, 300)
})
</script>
