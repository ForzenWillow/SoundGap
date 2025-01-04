<template>
  <section class="text-white mt-20" id="review">
    <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
        Write a Review
      </span>
  </h2>
    <div class="md:grid-cols-2 gap-4 justify-center px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
      <div>
        <p class="text-gray-300">
          We would love to hear your feedback! Please take a moment to write a review of our services.
        </p>
        <div
          style="background: #111a3e; width: 100%;height: 100%; border-radius: 20px;
          overflow: hidden;border: 1px solid #111a3e;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
          <form class="flex flex-col p-2" data-aos="zoom-in-up">
            <div class="mb-6">
              <label for="email" class="text-white block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="email@gmail.com"
                name="email"
              />
            </div>

            <!-- Star Rating -->
            <div class="mb-6">
              <label for="rating" class="text-white block mb-2 text-sm font-medium">Rating</label>
              <div class="flex space-x-2">
                <span
                  v-for="star in 5"
                  :key="star"
                  @click="setRating(star)"
                  class="cursor-pointer text-xl"
                >
                  <span :class="rating >= star ? 'text-yellow-400' : 'text-gray-400'">&#9733;</span>
                </span>
              </div>
            </div>

            <div class="mb-6">
              <label for="message" class="text-white block mb-2 text-sm font-medium">Message</label>
              <textarea
                id="Message"
                class="bg-[#111827] placeholder:[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Write here thank you ..."
                name="Message"
              ></textarea>
            </div>

            <button
              type="submit"
              class="z-1 w-[100%!important] px-6 md:px-7 py-3 rounded-full sm:w-max flex justify-center text-white bg-primary border-2 border-transparent"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <div
      class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 z-0 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-1/2"
    ></div>
  </section>
</template>

<script>
export default {
  name: "Write",
  data() {
    return {
      rating: 0, 
    };
  },
  methods: {
    
    setRating(star) {
      this.rating = star;
    },
  },
};
</script>

<style scoped>

.star:hover {
  color: #ffd700 !important;
}
</style>
 