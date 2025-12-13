<script setup lang="ts">
  interface Project {
    title: string;
  }

  const props = defineProps<{
    project: Project;
  }>();
</script>

<template>
  <p class="text-lg font-medium">
    {{ project.title }}
  </p>
</template>
  
