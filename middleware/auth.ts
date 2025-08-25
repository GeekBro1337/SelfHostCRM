export default defineNuxtRouteMiddleware(async () => {
  const { status } = useAuth();
  if (import.meta.server) return; // проверим на клиенте (Auth.js хранит сессию в cookie/jwt)
  if (status.value === "unauthenticated") {
    return navigateTo("/login");
  }
});
