<script setup lang="ts">
  import Avatar from '../../../components/Avatar/Avatar.vue';
  import specializationList from '../../../data/specializationList';  
  import Rating from '../../../components/Rating/Rating.vue';
</script>

<template>
  <div class="w-full bg-linear-to-b from-(--background-high) via-(--background-low) to-(--background-high) bg-fixed">
      <div class="border-y border-(--primary)/10 border-dotted flex items-center justify-center gap-8 py-12">
        <div class="text-(--text-low) text-end">
          <p>Hello !</p>
          <p>This is <span class="text-(--primary) text-lg">Waheed Labib</span></p>
        </div>
      
          <Avatar avatarImage="public/assets/images/labib_cat.jpg"/>
        </div>

      <div class="border-b border-(--primary)/10 border-dotted text-(--text-high) text-lg flex flex-col items-center justify-center gap-4 py-12">
          <div v-for="specialization in specializationList" :key="specialization.topic" class="w-full px-8 md:w-1/2 lg:w-1/3">
            <p class="mb-4">{{ specialization.topic }}</p>
            <div>
              <Rating :ratingLevel="specialization.expertiseLevel"></Rating>
            </div>
          </div>
      </div>
      
      <div class="py-12">

      </div>
    </div>
</template>

