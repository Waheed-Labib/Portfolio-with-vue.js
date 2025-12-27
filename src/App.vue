<script setup lang="ts">
  import Navbar from "/src/components/Navbar/Navbar.vue"
  import { ref } from "vue"
  import type { Theme } from "./types"

  const theme = ref<Theme>("midnight-neon-theme")
</script>

<template>
  <div :class="[theme, 'space-mono-regular bg-(--background-high) min-h-screen']">
    <Navbar/>
    <router-view/>
  </div>
</template>


