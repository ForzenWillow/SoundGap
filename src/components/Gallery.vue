<template>
  <div class="gallery-container p-4 sm:p-8 bg-[#111827]" id="gallery">
    <div class="gallery-grid grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item cursor-pointer transition-transform hover:scale-105"
        @click="openViewer(index)"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>

    <!-- Image Viewer -->
    <div
      v-if="viewerOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    >
      <div class="viewer-content relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <button
          class="close-btn absolute top-4 right-4 text-white text-2xl hover:text-red-500"
          @click="closeViewer"
        >
          &times;
        </button>
        <button
          class="arrow left-arrow absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          @click.stop="prevImage"
        >
          &lt;
        </button>
        <div class="zoom-container overflow-hidden relative">
          <img
            :src="images[currentIndex].src"
            :alt="images[currentIndex].alt"
            ref="zoomImage"
            :style="zoomStyle"
            class="transition-transform duration-300 ease-in-out max-h-screen mx-auto"
          />
        </div>
        <button
          class="arrow right-arrow absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
          @click.stop="nextImage"
        >
          &gt;
        </button>
        <p class="text-center text-white mt-4">
          {{ images[currentIndex].alt }}
        </p>

        <!-- Slideshow toggle -->
        <div class="text-center mt-4">
          <button
            class="slideshow-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
            @click="toggleSlideshow"
          >
            {{ slideshowActive ? "Stop Slideshow" : "Start Slideshow" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "https://www.shutterstock.com/shutterstock/videos/3438942789/thumb/1.jpg?ip=x480",
          alt: "Image 1",
        },
        {
          src: "https://diffusionart.co/wp-content/uploads/2023/04/Lofi-Music-Anime-Graphics-Wallpapers8.png",
          alt: "Image 2",
        },
        { src: "data:image/jpeg;base64,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", alt: "Image 3" },
        
      ],
      viewerOpen: false,
      currentIndex: 0,
      zoomLevel: 1,
      zoomStyle: { transform: "scale(1)" },
      slideshowActive: false,
      slideshowInterval: null,
    };
  },
  methods: {
    openViewer(index) {
      this.currentIndex = index;
      this.viewerOpen = true;
      this.addKeyboardListeners();
    },
    closeViewer() {
      this.viewerOpen = false;
      this.zoomLevel = 1;
      this.zoomStyle = { transform: "scale(1)" };
      this.removeKeyboardListeners();
      this.stopSlideshow();
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    zoomImage(event) {
      const zoomIncrement = 0.1;
      if (event.deltaY < 0) {
        this.zoomLevel = Math.min(this.zoomLevel + zoomIncrement, 3);
      } else {
        this.zoomLevel = Math.max(this.zoomLevel - zoomIncrement, 1);
      }
      this.zoomStyle = { transform: `scale(${this.zoomLevel})` };
    },
    toggleSlideshow() {
      if (this.slideshowActive) {
        this.stopSlideshow();
      } else {
        this.startSlideshow();
      }
    },
    startSlideshow() {
      this.slideshowActive = true;
      this.slideshowInterval = setInterval(() => {
        this.nextImage();
      }, 3000);
    },
    stopSlideshow() {
      this.slideshowActive = false;
      clearInterval(this.slideshowInterval);
      this.slideshowInterval = null;
    },
    addKeyboardListeners() {
      window.addEventListener("keydown", this.handleKeydown);
    },
    removeKeyboardListeners() {
      window.removeEventListener("keydown", this.handleKeydown);
    },
    handleKeydown(event) {
      if (event.key === "ArrowLeft") this.prevImage();
      else if (event.key === "ArrowRight") this.nextImage();
      else if (event.key === "Escape") this.closeViewer();
    },
  },
};
</script>

<style>
/* Papildomos animacijos, jei reikia */
</style>
