<template>
  <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
    <div class="text-white text-3xl font-bold dark:text-black">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
        SoundGap
      </span>
    </div>
    
    <div class="md:hidden z-30">
      <button type="button" class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <span v-if="isMenuOpen" class="text-5xl">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50" height="50">
        </span>
        <span v-else class="text-5xl">
          <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50" height="50">
        </span>
      </button>
    </div>
    
    <nav :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row', isMenuOpen ? 'block' : 'hidden']">
      <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
        <li v-for="item in Menu" :key="item.name">
          <a :href="item.href" class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg" @click="scrollToSection(item.href)">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
    
    <button @click="toggleTheme" class="ml-4 p-2 rounded-full dark:bg-secondary bg-darkBg" :aria-label="`Switch to ${isDarkMode ? 'light' : 'dark'} mode`">
      <img v-if="isDarkMode" src="https://img.icons8.com/ios-filled/50/000000/sun--v1.png" alt="Sun Icon" class="h-6 w-6" />
      <img v-else src="https://img.icons8.com/ios-filled/50/000000/moon-symbol.png" alt="Moon Icon" class="h-6 w-6" />
    </button>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const Menu = ref([
  { name: 'Services', href: '#services' },
  { name: 'Our Products', href: '#products' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Images', href: '#gallery' },
  { name: 'Sign Up', href: '#register' },
]);

const isMenuOpen = ref(false);
const isDarkMode = ref(false);

const scrollToSection = (href) => {
  isMenuOpen.value = false;
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  isDarkMode.value = document.documentElement.classList.contains('dark');
});
</script>


