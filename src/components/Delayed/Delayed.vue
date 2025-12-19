<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    const props = defineProps<{ delay: number }>();
    const visible = ref(false);

    onMounted(() => {
        setTimeout(() => {
        visible.value = true;
  }, props.delay);
});
</script>

<template>
    <div v-if="visible">
        <slot />
    </div>
</template>