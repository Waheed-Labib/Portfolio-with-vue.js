<script setup lang="ts">
    const props = defineProps<{ ratingLevel:0 | 1 | 2 | 3 | 4 | 5 }>();
</script>

<template>
    <div class="flex h-6 w-72 border-2 rounded border-(--text-low) overflow-hidden">
        <div v-for="i in props.ratingLevel" :key="i" class="flex bg-(--primary) h-full w-1/5">
            
        </div>
    
        <div v-for="i in (5-props.ratingLevel)" :key="i" class="flex bg-(--text-low) h-full w-1/5">
            
        </div>
    </div>
</template>