<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar class="toolbar">
        <ion-buttons slot="start">
          <ion-back-button
            class="backbutton"
            :icon="arrowBackOutline"
            text=""
            default-href="/chats"
          >
          </ion-back-button>
        </ion-buttons>
        <ion-title class="block-title">
          <div class="title" v-if="chatData">
            <ion-avatar class="avatar">
              <img :src="chatData.img" />
            </ion-avatar>
            <div>
              <div class="name">{{ chatData.title }}</div>
              <div v-if="lastMessage" class="online">
                Last message at {{ lastMessage.createdAt }}
              </div>
            </div>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content
      class="content"
      :scroll-events="true"
      :fullscreen="true"
      ref="content"
    >
      <div v-if="messages.length">
        <chat-message
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
      </div>
      <div class="nomessage" v-else>No messages</div>
    </ion-content>
    <ion-footer class="footer">
      <div class="footer-cont">
        <div style="display: none">
          <ion-icon class="icon" :icon="attachOutline"></ion-icon>
          <ion-icon class="icon" :icon="micOutline"></ion-icon>
        </div>
        <ion-input
          class="input"
          placeholder="Type your message ..."
          v-model="message"
        ></ion-input>
        <ion-button class="buttonsend" @click="addMessage()">
          <ion-icon class="icon send" :icon="sendSharp"></ion-icon>
        </ion-button>
      </div>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonContent,
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonFooter,
  IonInput,
  IonIcon,
  onIonViewWillEnter,
  IonButton,
} from "@ionic/vue";
import { useRoute } from "vue-router";
import {
  arrowBackOutline,
  attachOutline,
  micOutline,
  playSharp,
  sendSharp,
} from "ionicons/icons";
import { computed, defineComponent, ref, onMounted } from "vue";
import ChatMessage from "@/components/ChatMessage.vue";
import { useMainStore } from "@/stores/main";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonButtons,
    IonBackButton,
    IonToolbar,
    IonTitle,
    IonAvatar,
    IonFooter,
    IonInput,
    IonIcon,
    ChatMessage,
    IonButton,
  },
  setup() {
    const route = useRoute();
    const main = useMainStore();

    const message = ref("");
    const content = ref();

    const chatId = computed(() => `${route.params.id}`);
    const messages = computed(() => main.getMessagesByChatId(chatId.value));
    const chatData = computed(() => main.getChatById(chatId.value));

    const scrollBottom = () => {
      content.value?.$el?.scrollToBottom();
    };

    const addMessage = () => {
      if (!message.value.length) {
        return;
      }
      main.addMessage(message.value, chatId.value);
      scrollBottom();
    };

    onIonViewWillEnter(() => {
      scrollBottom();
    });

    onMounted(() => {
      setTimeout(() => {
        scrollBottom();
      }, 1000);
    });

    const lastMessage = computed(() =>
      main.getLastMessageByChatId(chatId.value)
    );

    return {
      route,
      chatId,
      chatData,
      arrowBackOutline,
      messages,
      attachOutline,
      micOutline,
      playSharp,
      sendSharp,
      message,
      addMessage,
      content,
      lastMessage,
    };
  },
});
</script>

<style scoped>
.toolbar {
  --min-height: 54px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 0 10px 4px rgb(182 194 210 / 20%);
  --border-width: 0 !important;
  --padding-start: 30px;
}
.backbutton {
  --icon-font-size: 24px;
}
.avatar {
  --border-radius: 10px;
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.title {
  display: flex;
}

.block-title {
  display: flex;
  align-items: center;
  padding-inline: 69px;
  --color: #0c5eda;
}

.name {
  font-size: 16px;
  color: #06152b;
  text-align: left;
}
.online {
  font-size: 12px;
  color: #5b687b;
}

.input {
  border-bottom: 1px solid rgb(182 194 210 / 50%);
  max-width: 100%;
  --padding-bottom: 10px;
  --padding-top: 0;
  --padding-end: 0;
  --padding-start: 0;
  --placeholder-color: #b6c2d2;
  color: #b6c2d2;
  margin-left: 25px;
  font-size: 14px;
}

.icon {
  background: #f4f6f9;
  padding: 6px;
  border-radius: 15px;
  color: #0c5eda;
}

.icon:nth-child(1) {
  margin-right: 10px;
}

.footer-cont .send {
  margin-left: 10px;
  background: none;
}

.footer {
  background: #ffffff;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0 0 10px 4px rgb(182 194 210 / 20%);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.footer-cont {
  display: flex;
  padding: 11px 30px 10px 30px;
  align-items: center;
}

@media (prefers-color-scheme: dark) {
  .name {
    color: #ffffff;
  }
  .footer {
    background: #272727;
  }
  .icon {
    background: #0c5eda;
    color: #fff;
  }
}

.nomessage {
  text-align: center;
  margin: 50px 0 0;
  font-size: 14px;
}

.buttonsend {
  --background: none;
  --padding-start: 0;
  --padding-end: 0;
  --background-activated: none;
}
</style>
