<script setup lang="ts">
  import Navbar from "/src/components/Navbar/Navbar.vue"
  import { ref } from "vue"
  import type { Theme } from "./types"

  const selectedTheme = ref<Theme>("midnight-neon-theme")
</script>

<template>
  <div :class="[selectedTheme, 'space-mono-regular bg-(--background-high) min-h-screen']">
    <Navbar :selectedTheme="selectedTheme" @update:selectedTheme="(value: Theme) => selectedTheme = value"/>
    <router-view/>
  </div>
</template>


