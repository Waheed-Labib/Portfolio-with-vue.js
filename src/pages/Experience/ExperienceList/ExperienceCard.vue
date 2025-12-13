<script setup lang="ts">
  export interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string;
  }

  const props = defineProps<{
    experience: Experience;
  }>();
</script>

<template>
    <div class="p-8 bg-gray-400 my-8">
        <h2>{{experience.company}}</h2>
    </div>
</template>