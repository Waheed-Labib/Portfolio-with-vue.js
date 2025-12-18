<template>
  <div class="h-[90vh] w-full bg-linear-to-b from-(--background-high) via-(--background-low) to-(--background-high) bg-fixed">
      <div class="h-2/6 border-y border-(--primary)/10 border-dotted flex items-center justify-center gap-8">
        <div class="text-(--text-low) text-end">
          <p>Hello !</p>
          <p>This is <span class="text-(--primary) text-lg">Waheed Labib</span></p>
        </div>
      
        <!-- Avatar Wrapper -->
        <div class="relative h-36 w-36">
          <div
            class="rounded-full overflow-hidden h-32 w-32 flex items-center justify-center border-2 border-(--text-low)"
          >
          <!-- Avatar Image -->
          <img
            src="/public/assets/images/labib_cat.jpg"
            alt="Waheed Labib"
            class="h-26 w-26 object-cover rounded-full"
          />

          <!-- Status Dot -->
          <span
            class="absolute top-4 right-6 rounded-full border-2 border-white w-4 h-4 bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.35)]"
          ></span>
        </div>
      </div>

      </div>

      <div class="h-3/6 border-b border-(--primary)/10 border-dotted">

      </div>
      
      <div class="h-1/6">

      </div>
    </div>
</template>

