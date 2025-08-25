<script setup lang="ts">
defineOptions({ name: "LoginPage" });
const { signIn, status } = useAuth();
const email = ref("");
const password = ref("");
const onSubmit = async () => {
  const res = await signIn("credentials", {
    redirect: false,
    email: email.value,
    password: password.value,
  });
  if (res?.error) alert(res.error);
  else await navigateTo("/profile");
};
</script>

<template>
  <div class="max-w-sm mx-auto py-10 space-y-3">
    <h1 class="text-2xl font-semibold">Sign in</h1>
    <input
      v-model="email"
      type="email"
      placeholder="email"
      class="border p-2 w-full">
    <input
      v-model="password"
      type="password"
      placeholder="password"
      class="border p-2 w-full">
    <button class="bg-black text-white px-4 py-2 rounded" @click="onSubmit">
      Login
    </button>
    <p v-if="status === 'loading'">Загрузка…</p>
  </div>
</template>
    