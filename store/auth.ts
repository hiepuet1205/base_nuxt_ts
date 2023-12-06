import { defineStore } from 'pinia'
import type { User } from './types'

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    return {
      user: {name: 'abc'},
      token: '',
      isAuthenticated: false
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
    registerHandle(token: string){
      this.token = token
      this.isAuthenticated = true
    },
    loginHandle(token: string){
      this.token = token
      this.isAuthenticated = true
    },
    logoutHandle() {
      this.user = {name: ''}
      this.token = ''
      this.isAuthenticated = false
    }
  },
  getters: {
    getUser: state => state.user,
    getToken: state => state.token,
    getIsAuthenticated: state => state.isAuthenticated
  },
})