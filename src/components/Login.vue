<template>
  <section class="text-white mt-20" id="login" data-aos="zoom-in">
    <div class="px-4 xl:pl-16">
      <h2 class="text-4xl font-bold text-white mb-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
          Login
        </span>
      </h2>
    </div>
    <div class="px-4 xl:pl-16 mb-8">
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" v-model="email" id="email" class="mt-1 block w-full bg-[#111a3e] text-white p-2 rounded" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
          <input type="password" v-model="password" id="password" class="mt-1 block w-full bg-[#111a3e] text-white p-2 rounded" required>
        </div>
        <button type="submit" class="mt-4 px-6 py-2 rounded-full bg-primary text-white hover:bg-secondary transition">
          Login
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const email = ref('');
const password = ref('');

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('User logged in successfully');
  } catch (error) {
    console.error('Error logging in user:', error);
  }
};
</script>

