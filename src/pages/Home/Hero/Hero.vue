<script setup lang="ts">
  import Avatar from '../../../components/Avatar/Avatar.vue';
  import specializationList from '../../../data/specializationList';  
  import Rating from '../../../components/Rating/Rating.vue';
  import Delayed from '../../../components/Delayed/Delayed.vue';
  import Socials from '../../../components/Socials/Socials.vue';
</script>

<template>
  <div class="w-full bg-linear-to-b from-(--background-high) via-(--background-low) to-(--background-high) bg-fixed min-h-screen">
      <div class="flex justify-center gap-12 py-12 h-72">
        <div class="h-full text-(--text-low) text-end flex flex-col justify-center gap-2 w-1/2">
          <Delayed :delay="500">
            <p class="typewriter" style="--chars: 7">Hello !</p>
          </Delayed>
          
          <Delayed :delay="2000">
            <p class="typewriter" style="--chars: 20">This is <span class="text-(--primary) text-lg">Waheed Labib</span></p>
          </Delayed>

          <Delayed :delay="4500">
            <div class="flex justify-end mt-2">
              <Socials />
            </div>
          </Delayed>
        </div>
      
        <div class="w-1/2 h-full flex items-center">
          <Delayed :delay="3500">
            <div class="coin">
              <Avatar avatarImage="public/assets/images/labib_cat.jpg"/>
            </div>
          </Delayed>  
        </div>

        </div>
          
      <div class="text-(--text-high) text-lg flex flex-col items-center justify-center gap-4">
          <div v-for="(specialization, idx) in specializationList" :key="specialization.topic" class="w-full p-4 md:w-1/2 border-(--text-low)/30 text-center mx-8 flex flex-col items-center justify-center gap-4">
            
            <Delayed :delay="6000 + idx * 1000">
              <p class="mb-2 typewriter" :style="{ '--chars': specialization.topic.length }">{{ specialization.topic }}</p>
            </Delayed>
      
            <Delayed :delay="8000 + specializationList.length * 1000">
              <Rating :ratingLevel="specialization.expertiseLevel"></Rating>
            </Delayed>
          </div>
      </div>
      
      <Delayed :delay="9000 + specializationList.length * 1000">
        <div class="mt-24 pb-24 text-(--text-high) flex items-center justify-center gap-8 text-5xl">
          <span class="wing wing-left"></span>
          <p class="spring-text">Still Growing</p>
          <span class="wing wing-right"></span>
        </div>
      </Delayed>
  </div>
</template>

