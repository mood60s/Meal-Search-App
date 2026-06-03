<template>
  <header class="d-none d-md-flex header-navbar justify-space-between align-center w-100 pa-4">
    <router-link class="px-4" :to="{ name: 'home' }">Home</router-link>
    <div>
      <router-link class="px-4" :to="{ name: 'byName' }"> Search Meals </router-link>
      <router-link class="px-4" :to="{ name: 'byLetter' }"> Meals By Letter </router-link>
      <router-link class="px-4" :to="{ name: 'byIngrdient' }"> Meals By Ingradients </router-link>
    </div>
  </header>
  <div class="mobile-navbar d-md-none">
    <v-app-bar class="app-bar">
      <div class="holder-icon" :class="{ active: isOpen }" @click="openMenu">
        <span class="icon"></span>
        <span class="icon"></span>
        <span class="icon"></span>
      </div>
      <div :class="`myLinksMobile ${isOpen ? 'active' : ''}`">
        <router-link @click="isOpen = false"  class="px-4" :to="{ name: 'home' }">Home</router-link>
        <router-link @click="isOpen = false" class="px-4" :to="{ name: 'byName' }"> Search Meals </router-link>
        <router-link @click="isOpen = false" class="px-4" :to="{ name: 'byLetter' }"> Meals By Letter </router-link>
        <router-link @click="isOpen = false" class="px-4" :to="{ name: 'byIngrdient' }"> Meals By Ingradients </router-link>
      </div>
    </v-app-bar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const openMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
