<script setup lang="ts">
  import Navbar from "/src/components/Navbar/Navbar.vue"
</script>

<template>
  <div class="midnight-neon-theme space-mono-regular bg-(--background-high) min-h-screen">
    <Navbar/>
    <router-view/>
  </div>
</template>


