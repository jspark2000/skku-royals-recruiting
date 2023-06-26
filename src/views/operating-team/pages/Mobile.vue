<template>
  <div
    class="relative flex flex-col min-h-screen text-center justify-center overflow-hidden font-mono px-10"
  >
    <p class="text-xl font-semibold">{{ year }} SKKU KINGO ROYALS RECRUITMENT</p>
    <p class="text-4xl font-bold mt-2 text-green-600">Operating Team</p>
    <div class="flex flex-col gap-3 mt-10 font-semibold text-xl">
      <a
        class="w-full px-14 py-3 rounded-md text-white bg-amber-400 shadow-xl shadow-amber-400/30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        href="https://forms.gle/1VQbmsJ321BppQa96"
      >
        🏈 JOIN US
      </a>
      <button
        class="px-14 py-3 rounded-md text-white bg-teal-400 shadow-xl shadow-teal-400/30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        @click="router.push('/operation-team/about-us')"
      >
        😚 ABOUT US
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const year = ref(new Date().getFullYear())
const router = useRouter()
</script>
