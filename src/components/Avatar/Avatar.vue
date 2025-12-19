<script setup lang="ts">
import type DelayedVue from '../Delayed/Delayed.vue';

    const props = defineProps<{ avatarImage?: string }>();
</script>

<template>
    <!-- Avatar Wrapper -->
        <div class="relative h-36 w-36">
          <div
            class="rounded overflow-hidden h-32 w-32 flex items-center justify-center border-2 border-(--text-low) shadow-(--background-low)"
          >
                <!-- Avatar Image -->
                <img
                    :src="props.avatarImage"
                    alt="Waheed Labib Avatar"
                    class="h-30 w-30 object-cover rounded"
                />

                <!-- Status Dot -->
               
                    <!-- <span
                        class="absolute top-4 right-6 rounded-full border-2 border-white w-4 h-4 bg-green-700 shadow-[0_0_0_3px_rgba(34,197,94,0.30)]"
                    ></span> -->
               
            </div>
        </div>
</template>