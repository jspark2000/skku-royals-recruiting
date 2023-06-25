<template>
  <div
    class="relative flex flex-col min-h-screen text-center justify-center overflow-hidden mx-auto font-mono px-10 max-w-screen-md"
  >
    <p class="text-5xl font-bold">SKKU KINGO ROYALS RECRUITMENT PAGE</p>
    <div class="flex flex-wrap gap-4 mt-10 font-semibold text-xl">
      <a
        class="w-full px-14 py-3 rounded-md text-white bg-amber-400 shadow-xl shadow-amber-400/30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
        @click="router.push('/operating-team')"
      >
        🚀 operating team
      </a>
      <a
        class="w-full px-14 py-3 rounded-md text-white bg-indigo-400 shadow-xl shadow-indigo-400/30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
        @click="hello"
      >
        🚀 athletes
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function hello() {
  alert('준비중입니다')
}
</script>
