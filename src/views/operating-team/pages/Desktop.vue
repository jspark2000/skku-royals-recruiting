<template>
  <div class="relative flex flex-col min-h-screen justify-center overflow-hidden font-mono">
    <div class="ms-40">
      <p class="text-3xl font-semibold">{{ year }} SKKU KINGO ROYALS RECRUITMENT</p>
      <p id="name" class="font-bold mt-2 text-green-600">Operating Team</p>
      <div class="flex flex-row mt-10 font-semibold text-2xl">
        <a
          class="px-14 py-3 rounded-md text-white bg-amber-400 shadow-xl shadow-amber-400/30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          href="https://forms.gle/1VQbmsJ321BppQa96"
        >
          🏈 JOIN US
        </a>
        <button
          class="px-14 py-3 ms-7 rounded-md text-white bg-teal-400 shadow-xl shadow-teal-400/30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          @click="router.push('/operating-team/about-us')"
        >
          😚 ABOUT US
        </button>
      </div>
    </div>
  </div>
  <div class="absolute img-container flex flex-row">
    <img src="/athletes.png" alt="athlete" class="brightness-110" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const year = ref(new Date().getFullYear())
const router = useRouter()
</script>
<style scoped>
#name {
  font-size: 5rem;
  line-height: 1;
}
.img-container {
  width: calc(40%);
  bottom: 0px;
  right: 0px;
}
</style>
