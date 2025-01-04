<template>
  <section class="text-white mt-20" id="services">
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold text-white mb-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Our Services Provide:
        </span>
      </h2>
    </div>
    
    <div class="py-8 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lp:grid-cols-3">
      <div v-for="service in services" :key="service.id" data-aos="fade-up" 
        class="px-8 py-12 rounded-x1 bg-[#111a3e] shadow-lg border-[#1f1641]">
        <div class="mx-auto h-24 text-center xl:h-28 xl:w-28">
          <div>
            <img :src="service.icon" alt="service icon">
          </div>
        </div>
        <div class="text-center">
          <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
            {{ service.name }}
          </h3>
          <p class="text-gray-300 pt-4 text-sm group-hover:text-white md:text-base">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
  {
    id: 1,
    icon: 'https://img.icons8.com/?size=100&id=5ljMCeJufA7a&format=png&color=7950F2',
    name: 'Vinyl records',
    description: 'Rediscover the classics and explore new sounds with our exclusive collection of vinyl records.'
  },
  {
    id: 2,
    icon: 'https://img.icons8.com/?size=100&id=EKc45bPQKzyu&format=png&color=7950F2',
    name: 'Headphones',
    description: 'Experience crystal-clear audio with our range of premium headphones for every listener.'
  },
  {
    id: 3,
    icon: 'https://img.icons8.com/?size=100&id=q-ULN4GmL7GW&format=png&color=7950F2',
    name: 'Audio Accesories',
    description: 'Find the perfect cables, adapters, and accessories to complement your audio gear.'
  },
  {
    id: 4,
    icon: 'https://img.icons8.com/?size=100&id=85682&format=png&color=7950F2',
    name: 'Sound systems',
    description: 'Immerse yourself in high-quality sound with our state-of-the-art audio systems.'
  },
  {
    id: 5,
    icon: 'https://img.icons8.com/?size=100&id=12653&format=png&color=7950F2',
    name: 'Audio Capture Tools',
    description: 'Equip your studio with professional microphones and tools for perfect sound capture.'
  },
  {
    id: 6,
    icon: 'https://img.icons8.com/?size=100&id=VQxO1tmK8Lvf&format=png&color=7950F2',
    name: 'Repair Services',
    description: 'Keep your equipment in top shape with expert repairs.'
  },
  
]);
</script>