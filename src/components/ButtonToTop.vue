<template>
    <button v-if="isVisable" @click="scrollToTop" class="fixed bottom-4
     right-4 bg-gradient-to-r from-secondary to-[#570cac] text-white
    rounded-full w-12 h-12 flex items-center justify-center text-xl
     cursor-pointer transition-opacity duration-300 hover:bg-blue-600">
        <span class="text-lg">☂</span>

    </button>

</template>

<script setup>
  import { ref,onMounted,onUnmounted } from 'vue'; ///importing meeded functions
  const isVisable = ref(false); 
  const handleScroll = () => {  
          isVisable.value = window.scrollY > 300;   ///the button will appear when the user scrolls 300px down
      }
      const scrollToTop = ()=>{
    window.scrollTo({top:0,behavior:'smooth'}) ///scrolls to the top of the page
}
onMounted(()=>{
    window.addEventListener('scroll',handleScroll)  ///when the component is "mounted", the event listener is added
});

onUnmounted(()=>{
    window.removeEventListener('scroll',handleScroll);  ///when the component is "unmounted", the event listener is removed
})
</script>>