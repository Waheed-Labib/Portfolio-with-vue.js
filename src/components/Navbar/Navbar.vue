<script setup lang="ts">
  const props = defineProps<{ selectedTheme: string }>()
  

</script>

<template>
  <nav class="flex items-center justify-end gap-8 bg-(--background-high) text-(--text-high) text-sm px-8 py-4">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/experience">Experience</router-link>
    <a href="https://substack.com/@waheedlabib" target="_blank" class="btn">Blog</a>
    <router-link to="/contact">Talk to Me</router-link>
    <select
        :value="props.selectedTheme"
        @change="$emit('update:selectedTheme', ($event.target as HTMLSelectElement).value)"
        class="rounded bg-(--background-low) text-(--text-high)"
      >
      <option value="forest-mist-theme">Forest Mist</option>
      <option value="midnight-neon-theme">Midnight Neon</option>
      <option value="honeymoon-suite-theme">Honeymoon Suite</option>
  </select>
  </nav>
</template>