<template>
  <section class="relative w-full" data-aos="zoom-in-up" id="herosection">
    <div class="absolute top-0 inset-x-0 h-64 flex items-start">
      <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
      <div class="h-20 w-2/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div> 
      <!-- above is the blue light under the header  -->
    </div>
    <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-2-screen-lg lg:max-w-screen-xl mx-auto relative">
      <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-3xl mx-auto">
        <div class="lg:py-6">
          <div class="text-center lg:text-left">
            <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
              Hello, and Welcome to 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                SoundGap
              </span>🎧
            </h1>
          </div>
          <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
            Discover premium sound, gear, and accessories designed for music lovers and creators.
          </p>
          <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">


            <button class="px-6 md:px-9 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
              <a href="https://www.linkedin.com " target="_blank">
              <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-[#3e3cbe] border-2 border-transparent"></span>
              <span class="relative flex items-center justify-center text-white">Linked In</span>
            </a>
            </button>
            
            <button class="px-6 md:px-9 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
              <a href="https://github.com" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-[#242436] border-2 border-transparent"></span>
              <span class="relative flex items-center justify-center text-white">Git Hub</span>
            </a>
            </button>
                

              

            
          </div>
        </div>
        <div class="lg:h-full md:flex">
          <div class="flex w-full h-96 min-h-[24rem] lg:w-full lg:h-full items-center relative">
            <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#7E1891] to-primary blur-3xl"></div>
            <!-- above is the fog around the Hero pfp -->
            <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary">
              <img src="@/assets/song.jpg" alt="hero pfp" width="500" height="auto" loading="lazy"
              class="w-full h-full rounded-full object-cover .autorotate">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>
