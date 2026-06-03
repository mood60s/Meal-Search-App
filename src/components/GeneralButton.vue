<template>
  <a :href="props.href" target="_blank" class="youtube" v-if="props.role == 'goyoutube'">
    <img :src="youtubeSvg" alt="" />
    <slot></slot>
  </a>
  <a :href="props.href" target="_blank" class="source-view" v-else-if="props.role == 'gosource'">
    <slot></slot>
  </a>
  <router-link v-else :to="href" class="source-view">
    <img :src="sourceSvg" alt="" />
    <slot></slot>
  </router-link>
</template>

<script setup>
const props = defineProps({
  href: [String, Object],
  role: String,
  svgName: String,
})
import youtubeSvg from '../CSS/youtube.svg'
import sourceSvg from '../CSS/source.svg'
</script>
