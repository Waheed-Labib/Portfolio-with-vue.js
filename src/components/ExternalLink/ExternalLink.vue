<script setup lang="ts">
import { computed } from "vue"

type Variant = "primary" | "secondary"

const props = defineProps<{
  href: string
  variant?: Variant
  tooltip?: string
  style?: Record<string, string>
}>()

const baseClasses = computed(() => [
  "group relative inline-flex items-center justify-center",
  "rounded-full border",
  "bg-transparent",
  "transition-colors duration-200",
  "p-2 h-8 w-8",
  "slide-in-left",
  props.variant === "secondary"
    ? "border-(--text-low)/60 text-(--text-low)/60 hover:border-(--text-high) hover:text-(--text-high)"
    : "border-(--primary)/60 text-(--primary)/60 hover:bg-(--primary)/60 hover:text-(--background-high)/60",
])
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="baseClasses"
    :style="props.style"
    :aria-label="tooltip"
  >
    <slot />

    <!-- Tooltip -->
    <span
      v-if="tooltip"
      class="
        pointer-events-none absolute bottom-full left-1/2 mb-2
        -translate-x-1/2 whitespace-nowrap
        rounded-md bg-(--text-high)
        px-2 py-1 text-xs text-(--background-high)
        opacity-0 scale-95
        transition-all duration-150
        group-hover:opacity-100 group-hover:scale-100
        group-focus-within:opacity-100 group-focus-within:scale-100
      "
    >
      {{ tooltip }}
    </span>
  </a>
</template>
