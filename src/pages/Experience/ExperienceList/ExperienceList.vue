<script setup lang="ts">
    import { experienceList } from '../../../data/experienceList'
    import ExperienceCard from './ExperienceCard.vue'
</script>

<template>
    <div class="p-8 bg-amber-500">
        <h2>Experience List</h2>
        
        <div v-for="exp in experienceList" :key="exp.company">
            <ExperienceCard :experience="exp"/>
        </div>
        
    </div>
</template>


