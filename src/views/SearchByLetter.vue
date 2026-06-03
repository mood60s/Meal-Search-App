<template>
  <div class="d-flex flex-column justify-center w-50 mx-auto mt-10">
    <div class="alphabet pa-3 d-flex ga-2 justify-center flex-wrap">
      <router-link
        class="links"
        :to="{ name: 'ByLetter', params: { letter } }"
        v-for="(letter, i) of letters.split('')"
        :key="i"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
</template>
<script setup>
// AlphaBet
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
</script>
