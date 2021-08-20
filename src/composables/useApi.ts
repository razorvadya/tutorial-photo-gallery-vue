import Chats from '@/assets/api/chats.json'
import Messages from '@/assets/api/messages.json'
import Users from '@/assets/api/users.json'
import { reactive } from 'vue'

function getChats() {
  return Chats
}

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

  return { data, getChats, getMessages, getUsers }
}
