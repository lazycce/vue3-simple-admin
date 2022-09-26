import { defineStore } from 'pinia'

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
      sidebar: {
        opened: true
      }
    }),
    getters: {
    },
    actions: {
      closeSidebar() {
        this.sidebar.opened = false
      },
      toggleSideBar() {
        console.log('opened', this.sidebar.opened)
        this.sidebar.opened = !this.sidebar.opened
      }
    }
  })
  