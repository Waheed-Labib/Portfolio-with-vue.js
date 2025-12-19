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
          
      <!-- <div class="text-(--text-high) text-lg flex flex-col items-center justify-center gap-4 py-12">
          <div v-for="specialization in specializationList" :key="specialization.topic" class="w-full px-8 md:w-1/2 lg:w-1/3">
            
            <p class="mb-4 typewriter" :style="{ '--chars': specialization.topic.length }">{{ specialization.topic }}</p>
      
            <div>
              <Rating :ratingLevel="specialization.expertiseLevel"></Rating>
            </div>
          </div>
      </div>
      
      <div class="py-12 text-(--text-high) flex items-center justify-center gap-8 text-5xl">
          <span class="wing wing-left"></span>
          <p class="spring-text">Still Growing</p>
          <span class="wing wing-right"></span>
      </div> -->
  </div>
</template>

<style scoped>
  .wing {
    width: 100px;
    height: 64px;
    border-top: 4px solid currentColor;
    opacity: 0.8;
  }

  .wing-left {
    border-radius: 0 100% 0 100%;
    transform-origin: right center;
    animation: flap 5s ease-in-out infinite;
  }

  .wing-right {
    border-radius: 100% 0 100% 0;
    transform-origin: left center;
    transform: scaleX(-1);
    animation: flap 5s ease-in-out infinite;
  }

  @keyframes flap {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(18deg); }
    100% { transform: rotate(0deg); }
  }
</style>