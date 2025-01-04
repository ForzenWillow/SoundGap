<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="bg-[#111827] min-h-screen">
      <NavBar />
      <HeroSection />
      
      <Services />
      <Products />
      <Reviews />
      <!-- <EmployeeList /> -->
      <div class="flex justify-center space-x-4 mt-2">
      <!-- <Write /> -->
      </div>
      <shop />
      <div class="flex justify-center space-x-4 mt-2">
        <!-- <Register /> -->
        <!-- <Login /> -->
        
      </div>
      <Gallery />
      <Footer />
      <ButtonToTop />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';
import Gallery from './components/Gallery.vue';

// Asynchronously load components
const Products = defineAsyncComponent(() => import('@/components/Products.vue'));
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const Services = defineAsyncComponent(() => import('@/components/Services.vue'));
const Reviews = defineAsyncComponent(() => import('@/components/Reviews.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const ButtonToTop = defineAsyncComponent(() => import('@/components/ButtonToTop.vue'));
const EmployeeList = defineAsyncComponent(() => import('@/components/EmployeeList.vue'));
const Register = defineAsyncComponent(() => import('@/components/Register.vue'));
const Login = defineAsyncComponent(() => import('@/components/Login.vue'));
const shop = defineAsyncComponent(() => import('@/components/shop.vue'));
const Write = defineAsyncComponent(() => import('@/components/Write.vue'));


export default {
  components: {
    NavBar,
    HeroSection,
    Services,
    Products,
    Reviews,
    Footer,
    ButtonToTop,
    EmployeeList,
    Register,
    Login,
    shop,
    Write,
    Gallery,
  },
  setup() {
    const darkMode = ref(false);

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value;
      if (darkMode.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    return {
      darkMode,
      toggleDarkMode
    };
  }
}
</script>

<style>
/* Add any additional styles here */
</style>