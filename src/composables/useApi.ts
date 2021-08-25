import Chats from '@/assets/api/chats.json'
import Messages from '@/assets/api/messages.json'
import Users from '@/assets/api/users.json'
import { reactive } from 'vue'

function getChats() {
  return Chats
}

export type Message = typeof Messages[0]

function getMessages() {
  return Messages
}
function getUsers() {
  return Users
}

export function useApi() {
  const data = reactive({
    chats: getChats(),
    messages: getMessages(),
    users: getUsers(),
  })
  const findUserById = (userId: string) => {
    return data.users.find((item) => item.id === userId)
  }

  const getMessagesByChatId = (chatId: string) => {
    return data.messages.filter((item) => item.chatId === chatId)
  }

  return {
    data,
    findUserById,
    getMessagesByChatId,
    getChats,
    getMessages,
    getUsers,
  }
}
