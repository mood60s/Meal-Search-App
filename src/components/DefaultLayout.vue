<template>
  <v-layout class="flex-wrap">
    <navBar />
    <v-main>
      <RouterView />
    </v-main>
    <button :class="`back-to-top ${showButton ? 'active' : ''}`" @click="scrollTop">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        class="arrow-up"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967L18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303C18.2374 10.8232 17.7626 10.8232 17.4697 10.5303L12.75 5.81066L12.75 20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20L11.25 5.81066L6.53033 10.5303C6.23744 10.8232 5.76256 10.8232 5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967L11.4697 3.46967Z"
          fill="white"
        />
      </svg>
    </button>
  </v-layout>
</template>
<script setup>
import NavBar from './NavBar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const showButton = ref(false)
const handleScroll = () => {
  showButton.value = window.scrollY > 10
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>
