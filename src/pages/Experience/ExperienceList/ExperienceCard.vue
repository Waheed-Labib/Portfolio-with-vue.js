<script setup lang="ts">
  
  import { CalendarDaysIcon } from '@heroicons/vue/24/outline'

  export interface Experience {
    companyName: string
    companyLogo: string
    role: string
    startDate: string
    endDate?: string
    description: string[]
  }

  const props = defineProps<{
    experience: Experience;
  }>();
</script>

<template>
    <div class="bg-(--background-low) text-(--text-high) m-8 p-6 rounded-xl shadow-lg">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-4">
      <img
        :src="experience.companyLogo"
        :alt="experience.companyName + ' logo'"
        class="w-14 h-14 object-contain rounded bg-white p-1"
      />

      <div>
        <h2 class="text-lg font-semibold leading-tight">
          {{ experience.companyName }}
        </h2>
        <h3 class="text-sm text-(--text-low)">
          {{ experience.role }}
        </h3>
      </div>
    </div>

    <!-- Date with Calendar Icon -->
    <p class="flex items-center gap-2 text-xs text-(--text-low) mb-4">
      <CalendarDaysIcon class="w-4 h-4" />
      <span>
        {{ experience.startDate }} — {{ experience.endDate || 'Present' }}
      </span>
    </p>

    <!-- Description -->
    <ul class="list-disc list-inside space-y-2 text-sm">
      <li
        v-for="(item, index) in experience.description"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>


</template>