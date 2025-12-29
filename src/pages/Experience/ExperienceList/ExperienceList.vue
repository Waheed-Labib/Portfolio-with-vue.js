<script setup lang="ts">
    import { experienceList } from '../../../data/experienceList'
    import ExperienceCard from './ExperienceCard.vue'
</script>

<template>
    <div class="">
    
        <div v-for="exp in experienceList" :key="exp.companyName">
            <ExperienceCard :experience="exp"/>
        </div>
        
    </div>
</template>


