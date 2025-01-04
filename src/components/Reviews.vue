<template>
  <section class="text-white mt-20" id="reviews" data-aos="zoom-in">
    <!-- Antraštė -->
    <h2 class="text-4xl font-bold text-white text-left mb-4 px-4 xl:pl-16">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
        Reviews
      </span>
    </h2>

    <!-- Atsiliepimų pridėjimo forma -->
    <div class="px-4 xl:px-16 mb-8">
      <form @submit.prevent="addReview" class="bg-[#111a3e] p-6 rounded-lg shadow-md">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium mb-2">Full Name</label>
          <input
            id="name"
            v-model="newReview.fullName"
            type="text"
            placeholder="Your Name"
            maxlength="50"
            class="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
        </div>
        <div class="mb-4">
          <label for="comment" class="block text-sm font-medium mb-2">Comment</label>
          <textarea
            id="comment"
            v-model="newReview.comment"
            placeholder="Your Comment (max 50 characters)"
            class="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            rows="3"
            maxlength="50"
            required
          ></textarea>
          <!-- Character Counter -->
          <p class="text-sm text-gray-400 text-right mt-1">
            {{ newReview.comment.length }}/50
          </p>
        </div>
        <div class="mb-4">
          <label for="rating" class="block text-sm font-medium mb-2">Rating</label>
          <select
            id="rating"
            v-model="newReview.rating"
            class="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          >
            <option value="" disabled>Select Rating</option>
            <option v-for="star in 5" :key="star" :value="star">{{ star }} Stars</option>
          </select>
        </div>
        <button type="submit" class="bg-primary hover:bg-purple-500 text-white px-4 py-2 rounded">
          Submit Review
        </button>
      </form>
    </div>

    <!-- Carousel su atsiliepimais -->
    <div class="px-4 xl:px-16">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="element in reviews" :key="element.id">
          <div class="carousel__item p-4">
            <div class="w-full mx-auto bg-[#111a3e] shadow-lg border border-[#1f1641] p-5 text-white font-light mb-6">
              <div class="w-full flex mb-4 items-center">
                <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img :src="element.image" alt="testimonial image" loading="lazy" />
                </div>
                <h6 class="ml-4 font-bold text-sm uppercase text-white">
                  {{ element.fullName }}
                </h6>
              </div>
              <div class="w-full mb-3">
                <!-- Star Ratings -->
                <div class="flex items-center space-x-1">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="text-lg"
                    :class="{
                      'text-yellow-400': star <= element.rating,
                      'text-gray-400': star > element.rating
                    }"
                  >
                    ★
                  </span>
                </div>
              </div>
              <div class="w-full">
                <p class="text-sm leading-tight">
                  <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                  {{ element.comment }}
                  <span class="text-lg leading-none italic font-bold text-white mr-1">"</span>
                </p>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS for animations
AOS.init();

// Carousel settings
const settings = ref({
  itemsToShow: 3, // Rodyti 3 elementus vienu metu
  snapAlign: "start",
  wrapAround: false, // Naršymas tik į priekį ir atgal
  pauseAutoplayOnHover: true,
  transition: 300,
});

// Breakpoints
const breakpoints = ref({
  700: {
    itemsToShow: 2, // Mažesniems ekranams
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3, // Dideliems ekranams
    snapAlign: 'start',
  }
});

// Atsiliepimų duomenys iš localStorage
const reviews = ref(JSON.parse(localStorage.getItem('reviews')) || []);

// Naujas atsiliepimas
const newReview = ref({
  fullName: '',
  comment: '',
  rating: '',
  image: 'https://via.placeholder.com/100', // Numatytoji nuotrauka
});

// Pridėti naują atsiliepimą
const addReview = () => {
  if (!newReview.value.fullName || !newReview.value.comment || !newReview.value.rating) {
    alert('Please fill in all fields!');
    return;
  }

  // Pridedame atsiliepimą prie masyvo
  const newEntry = {
    ...newReview.value,
    id: Date.now(), // Unikalus ID
  };
  reviews.value.push(newEntry);

  // Išsaugome į localStorage
  localStorage.setItem('reviews', JSON.stringify(reviews.value));

  // Išvalome formą
  newReview.value.fullName = '';
  newReview.value.comment = '';
  newReview.value.rating = '';
};

// Įkeliame duomenis iš localStorage, kai komponentas užkraunamas
onMounted(() => {
  const savedReviews = JSON.parse(localStorage.getItem('reviews'));
  if (savedReviews) {
    reviews.value = savedReviews;
  }
});
</script>

<style scoped>
.carousel__prev, .carousel__next {
  color: white !important;
}
</style>
