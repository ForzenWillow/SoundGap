<template>
  <footer class="mt-8 border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    <div class="container p-12 flex flex-col md:flex-row justify-between items-center">
      <!-- Svetainės logotipas -->
      <div class="text-white text-3xl font-bold mb-4 md:mb-0">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
          SoundGap
        </span>
      </div>

      <!-- Navigacijos nuorodos -->
      <nav class="flex flex-col md:flex-row gap-4">
        <a href="#herosection" class="text-slate-400 hover:text-white transition">Home</a>
        <a href="#about" class="text-slate-400 hover:text-white transition">About</a>
        <a href="#services" class="text-slate-400 hover:text-white transition">Services</a>
        <a href="#review" class="text-slate-400 hover:text-white transition">Review</a>
      </nav>

      <!-- Autorių teisės -->
      <p class="text-slate-600 text-sm mt-4 md:mt-0">
        © 2025 SoundGap. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: #1a1a1d; /* Poraštės fonas */
}
</style>
