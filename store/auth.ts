import { defineStore } from 'pinia'
import type { User } from './types'

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    return {
      user: {name: 'abc'},
      token: '',
      isAuthenticated: false,
      redirectPath: '/',
    }
  },
  actions: {
    setUser(user: User) {
      this.user = user
    },
    setToken(token: string) {
      this.token = token
    },
    setIsAuthenticated(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated
    },
    setRedirectPath(redirectPath: string) {
      this.redirectPath = redirectPath
    },
    logout() {
      this.user = {name: 'abc'}
      this.token = ''
      this.isAuthenticated = false
      console.log(`User logged out`)
    }
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.token,
    getIsAuthenticated: state => state.isAuthenticated,
    getRedirectPath: state => state.redirectPath,
  },
})