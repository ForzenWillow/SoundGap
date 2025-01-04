<template>
  <div class="min-h-screen bg-[#111827]">
    <!-- Navigation Bar -->
    <nav class="bg-[#111827] shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-bold text-gray-800">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                Employee Directory
              </span>
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="showRegister = true" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
            <button @click="showLogin = true" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Login</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="bg-primary text-white py-12">
      <div class="text-center">
        <h2 class="text-4xl font-bold">Welcome to the Employee Directory</h2>
        <p class="mt-4">Manage your team's information efficiently and securely.</p>
      </div>
    </header>

    <!-- Employee List -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Employee List</h3>
      <div v-if="employees.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="employee in employees" :key="employee.id" class="p-4 bg-white shadow rounded">
          <h4 class="text-xl font-bold">{{ employee.name }}</h4>
          <p>{{ employee.email }}</p>
        </div>
      </div>
      <p v-else class="text-gray-600">No employees found. Please register an account.</p>
    </main>

    <!-- Register Modal -->
    <div v-if="showRegister" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow w-96">
        <h3 class="text-lg font-bold mb-4">Register</h3>
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block text-gray-700">Name</label>
            <input v-model="registerForm.name" type="text" class="w-full px-3 py-2 border rounded" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input v-model="registerForm.email" type="email" class="w-full px-3 py-2 border rounded" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Password</label>
            <input v-model="registerForm.password" type="password" class="w-full px-3 py-2 border rounded" required />
          </div>
          <div class="flex justify-end space-x-2">
            <button @click="showRegister = false" type="button" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Register</button>
          </div>
        </form>
      </div>
    </div>

    <!-- Login Modal -->
    <div v-if="showLogin" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow w-96">
        <h3 class="text-lg font-bold mb-4">Login</h3>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input v-model="loginForm.email" type="email" class="w-full px-3 py-2 border rounded" required />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Password</label>
            <input v-model="loginForm.password" type="password" class="w-full px-3 py-2 border rounded" required />
          </div>
          <div class="flex justify-end space-x-2">
            <button @click="showLogin = false" type="button" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: [],
      showRegister: false,
      showLogin: false,
      registerForm: {
        name: "",
        email: "",
        password: "",
      },
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      const { name, email } = this.registerForm;
      this.employees.push({ id: Date.now(), name, email });
      this.showRegister = false;
      this.resetRegisterForm();
    },
    login() {
      this.showLogin = false;
      this.resetLoginForm();
      alert("Login successful (not implemented fully)");
    },
    resetRegisterForm() {
      this.registerForm = { name: "", email: "", password: "" };
    },
    resetLoginForm() {
      this.loginForm = { email: "", password: "" };
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
