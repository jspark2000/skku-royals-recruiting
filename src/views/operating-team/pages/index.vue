<template>
  <Mobile v-if="screenWidth < mobile" />
  <Desktop v-else></Desktop>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Desktop from './Desktop.vue'
import Mobile from './Mobile.vue'

const screenWidth = ref(window.innerWidth)
const mobile = 460
</script>
<style scoped></style>
