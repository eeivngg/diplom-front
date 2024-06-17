import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
  state: {
    allUsers: null,
    currentUser: null
  }
})
