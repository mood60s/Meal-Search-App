import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/components/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/Search/:name?',
          name: 'byName',
          component: () => import('../views/SearchMealByName.vue'),
        },
        {
          path: '/By-letter/:name?',
          name: 'byLetter',
          component: () => import('../views/SearchByLetter.vue'),
        },
        {
          path: '/By-ingrdient/:name?',
          name: 'byIngrdient',
          component: () => import('../views/SearchByIngredients.vue'),
        },
        {
          path: '/mealDeatils/:id',
          name: 'mealDeatils',
          component: () => import('../views/MealDeatils.vue'),
        },
        {
          path: '/letter/:letter',
          name: 'ByLetter',
          component: () => import('@/views/DetailsAllSearchByLetter.vue'),
        },
        {
          path: 'By-ingrdient/details/:id?',
          name: 'ingredientDeatils',
          component: () => import('@/views/DetailsAllSearchByIngredients.vue'),
        },
      ],
    },
  ],
})

export default router
