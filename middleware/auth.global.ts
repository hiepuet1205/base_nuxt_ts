import { useAuthStore } from '~/store/auth'
import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  const { isAuthenticated } = storeToRefs(authStore)

  const nonAuthRoutes = ['/', '/login', '/register', '/address', '/service', '/province', '/district'];

  
  if (!isAuthenticated.value && !nonAuthRoutes.includes(to.path as string)) {
    return navigateTo('/login')
  }  
  
  if (isAuthenticated.value && to.path === 'login') {
    return navigateTo('/')
  } 
  
  if (from.path === to.path) return
});
