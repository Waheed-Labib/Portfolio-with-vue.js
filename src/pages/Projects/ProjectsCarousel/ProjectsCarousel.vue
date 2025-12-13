<script setup>
    import { ref } from "vue";
    import ProjectCard from '../ProjectsCarousel/ProjectCard.vue';
    import { projectList } from '../../../data/projectList';

    const currentIndex = ref(0);

    const prev = () => {
        currentIndex.value = (currentIndex.value - 1 + projectList.length) %
        projectList.length;
    };

    const next = () => {
        currentIndex.value = (currentIndex.value + 1) % projectList.length;
    };
</script>

<template>
  <div class="max-w-xl mx-auto p-4 border rounded-lg bg-gray-500">
    <h2 class="text-xl font-bold mb-4 text-center">Project Carousel</h2>

    <div class="p-6 border rounded-lg text-center bg-green-400">
      <ProjectCard :project="projectList[currentIndex]" />

      <div class="flex justify-center gap-6 mt-6">
        <button @click="prev" class="px-3 py-1 border rounded text-2xl flex items-center justify-center">‹</button>
        <button @click="next" class="px-3 py-1 border rounded text-2xl flex items-center justify-center">›</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
    button {
        user-select: none;
    }
</style>
