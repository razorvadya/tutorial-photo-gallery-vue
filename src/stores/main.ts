import { getUsers, getMessages, getChats, User } from '@/composables/useApi'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    accountId: '1',
    messages: getMessages(),
    chats: getChats(),
    users: getUsers(),
  }),
  getters: {
    accountProfile(): undefined | User {
      const user = this.getUserById(this.accountId)
      return user
    },
    users() {
      return getUsers()
    },
    getMessagesByChatId() {
      return (chatId: string) =>
        this.messages.filter((item) => item.chatId === chatId)
    },
    getChatById() {
      return (chatId: string) => this.chats.find((item) => item.id === chatId)
    },
    getUserById() {
      return (userId: string) => this.users.find((item) => item.id === userId)
    },
    getLastMessageByChatId() {
      return (chatId: string) => {
        const messages = this.getMessagesByChatId(chatId)

        return messages[messages.length - 1]
      }
    },
  },
  actions: {
    addMessage(message: string, chatId: string) {
      const date = new Date()
      const createdAt = `${date.getHours()}:${date.getMinutes()}`

      this.messages.push({
        message,
        audio: '',
        chatId,
        createdAt,
        id: `${+date}`,
        image: '',
        updatedAt: '',
        userId: this.accountId,
      })
    },
  },
})
