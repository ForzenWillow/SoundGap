<template>
  <section class="text-white mt-20" id="employees" data-aos="zoom-in">
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold text-white mb-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
          Top Employees
        </span>
      </h2>
    </div>
    <div class="py-8 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
      <div v-for="employee in employees" :key="employee.id" class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border-[#1f1641]">
        <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
          <img :src="employee.image" alt="employee image" class="w-full h-full object-cover rounded-lg">
        </div>
        <div class="text-center mt-4">
          <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
            {{ employee.name }}
          </h3>
          <p class="text-gray-300 pt-4 text-sm md:text-base">
            {{ employee.position }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';




import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS for animations
AOS.init();

// Carousel settings
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

// Breakpoints
const breakpoints = ref({
  700: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'start',
  }
});



const employees = ref([
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    name: 'Employee 1',
    position: 'Staff'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    name: 'Employee 2',
    position: 'Store Manager'
  }
]);
</script>

