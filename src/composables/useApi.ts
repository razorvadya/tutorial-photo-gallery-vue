import chats from '@/assets/api/chats.json'
import messages from '@/assets/api/messages.json'
import users from '@/assets/api/users.json'

export function getChats() {
  return chats
}

export type Message = typeof messages[0]

export type User = typeof users[0]

export function getMessages() {
  return messages
}
export function getUsers() {
  return users
}
