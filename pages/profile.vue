<script setup lang="ts">
const { status, data, signOut } = useAuth();
definePageMeta({ middleware: "auth" }); // см. middleware ниже

const logout = async () => {
  await signOut({ redirect: false });
  await navigateTo("/login");
};
</script>

<template>
  <div class="max-w-xl mx-auto py-10 space-y-4">
    <h1 class="text-2xl font-semibold">Профиль</h1>
    <pre class="bg-gray-100 p-3 rounded">{{ data?.user }}</pre>
    <button @click="logout" class="bg-gray-800 text-white px-4 py-2 rounded">
      Выйти
    </button>
  </div>
</template>
