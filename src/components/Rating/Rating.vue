<script setup lang="ts">
    const props = defineProps<{ ratingLevel:0 | 1 | 2 | 3 | 4 | 5 }>();
</script>

<template>
    <div class="flex h-6 w-72 md:w-96 border-2 rounded border-(--text-low) overflow-hidden bg-(--secondary)">
        <div 
            v-for="(i, idx) in props.ratingLevel" 
            :key="i" 
            class="rating-fill flex bg-(--primary) h-full w-1/5"
            :style="{ '--delay': `${idx * 120}ms` }"
        >
            
        </div>
    
        <div v-for="i in (5-props.ratingLevel)" :key="i" class="flex h-full w-1/5">
            
        </div>
    </div>
</template>