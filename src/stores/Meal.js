import { defineStore } from 'pinia'
import axios from 'axios'
export const store = defineStore('store', {
  state: () => ({
    meals: [],
    searchInput: [],
    mealId: [],
    randomMeals: [],
    i: 0,
    MealsLetterOnly: null,
    Ingredient: [],
    LinksArr: [],
    mealsByName: [],
  }),
  getters: {},
  actions: {
    async getMeal() {
      try {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        this.meals = res.data
      } catch (err) {
        console.log(err)
      }
    },
    async searchMeal(keysearch) {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${keysearch}`,
        )
        this.searchInput = res.data.meals
      } catch (err) {
        console.log(err)
      }
    },
    async getMealById(id) {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        this.mealId = res.data.meals
      } catch (err) {
        console.log(err)
      }
    },
    async getRandom() {
      try {
        while (this.i < 6) {
          const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
          this.randomMeals.push(...res.data.meals)
          this.i++
        }
      } catch (err) {
        console.log(err)
      }
    },
    async getMealsByLetter(letter) {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
        )
        this.MealsLetterOnly = res.data
      } catch (err) {
        console.log(err)
      }
    },
    async MealsByGredient() {
      try {
        const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        this.LinksArr = res.data.meals;
      } catch (err) {
        console.log(err)
      }
    },
    async getMealsByName(name) {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
        this.mealsByName = res.data.meals
      } catch (err) {
        console.log(err)
      }
    },
  },
})
