<script setup lang="ts">
const email = ref("");
const password = ref("");
const submit = async () => {
  const res = await $fetch("/api/auth/register", {
    method: "POST",
    body: { email: email.value, password: password.value },
  });
  if ((res as any).ok) await navigateTo("/login");
};
</script>

<template>
  <div class="max-w-sm mx-auto py-10 space-y-3">
    <h1 class="text-2xl font-semibold">Create account</h1>
    <input
      v-model="email"
      type="email"
      placeholder="email"
      class="border p-2 w-full"
    />
    <input
      v-model="password"
      type="password"
      placeholder="password"
      class="border p-2 w-full"
    />
    <button @click="submit" class="bg-black text-white px-4 py-2 rounded">
      Register
    </button>
    <p class="text-sm">
      Уже есть аккаунт? <NuxtLink to="/login" class="underline">Войти</NuxtLink>
    </p>
  </div>
</template>
