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
              <div class="online">Last message at 13:02</div>
            </div>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div v-if="messagesData">
        <div class="message" v-if="usersData">
          <ion-avatar class="avatar-user">
            <img :src="usersData.avatar" />
          </ion-avatar>
          <div class="content">
            <img src="https://source.unsplash.com/rW-I87aPY5Y/214x100" />
            <div class="block-text">
              <div class="text">
                {{ messagesData.message1 }}
              </div>
              <span>12:00</span>
            </div>
          </div>
        </div>
        <div class="message" v-if="usersData">
          <ion-avatar class="avatar-user">
            <img :src="usersData.avatar" />
          </ion-avatar>
          <div class="content">
            <div class="block-text">
              <div class="text">
                {{ messagesData.message1 }}
              </div>
              <span>12:00</span>
            </div>
          </div>
        </div>
        <div class="message" v-if="usersData">
          <div class="content2">
            <div class="textme">
              <span>12:00</span>
              {{ messagesData.message2 }}
            </div>
          </div>
        </div>
        <div class="message" v-if="usersData">
          <ion-avatar class="avatar-user">
            <img :src="usersData.avatar" />
          </ion-avatar>
          <div class="content">
            <div class="block-text">
              <div class="audio">
                <ion-icon class="icon-play" :icon="playSharp"></ion-icon>
                <span>0:20</span>
                <div class="audio-message">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <span>12:00</span>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
    <ion-footer class="footer">
      <div class="footer-cont">
        <ion-icon class="icon" :icon="attachOutline"></ion-icon>
        <ion-icon class="icon" :icon="micOutline"></ion-icon>
        <ion-input
          class="input"
          placeholder="Type your message ..."
        ></ion-input>
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
} from "@ionic/vue";
import { useRoute } from "vue-router";
import {
  arrowBackOutline,
  attachOutline,
  micOutline,
  playSharp,
} from "ionicons/icons";
import { computed, defineComponent, ref } from "vue";
import { useApi } from "@/composables/useApi";
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
  },
  setup() {
    const route = useRoute();
    const { data } = useApi();

    const messages = ref(data.messages);
    const users = ref(data.users);

    const chatId = computed(() => route.params.id);
    const messagesId = computed(() => route.params.id);
    const usersId = computed(() => route.params.id);
    const chatData = data.chats.find((item) => item.id === chatId.value);
    const messagesData = data.messages.find(
      (item) => item.id === messagesId.value
    );
    const usersData = data.users.find((item) => item.id === usersId.value);
    console.log(chatData);
    console.log(messagesData);
    console.log(usersData);
    return {
      route,
      chatId,
      chatData,
      arrowBackOutline,
      messages,
      messagesData,
      users,
      usersData,
      attachOutline,
      micOutline,
      playSharp,
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
.message {
  margin: 20px 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.avatar-user img {
  min-width: 48px;
  height: 48px;
  border-radius: 10px;
}

.content {
  margin-left: 16px;
  background: #f4f6f9;
  border-radius: 15px;
  width: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
}

.content img {
  margin-bottom: 10px;
}

.content span {
  color: #5b687b;
  font-size: 12px;
}

.content2 {
  margin-left: 16px;
  background: #e7effc;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #0c5eda;
}

.content2 span {
  color: rgba(12, 94, 218, 0.5);
  font-size: 12px;
}

.block-text {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.text {
  font-weight: 500;
  word-break: break-word;
  padding-right: 10px;
}

.text img {
  margin-bottom: 10px;
}

.content:before {
  transform: rotate(-30deg);
  content: "";
  position: absolute;
  bottom: -3px;
  border: 8px solid transparent;
  border-bottom: 8px solid #f4f6f9;
}

.textme span {
  color: rgba(12, 94, 218, 0.5);
  margin-right: 20px;
}

.content2:before {
  transform: rotate(30deg);
  content: "";
  position: absolute;
  bottom: -3px;
  border: 8px solid transparent;
  border-bottom: 8px solid #e7effc;
  right: 8px;
}

.input {
  border-bottom: 1px solid rgb(182 194 210 / 50%);
  max-width: 220px;
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

.footer {
  background: #ffffff;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0 0 10px 4px rgb(182 194 210 / 20%);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.footer-cont {
  display: flex;
  padding: 11px 34px 10px 30px;
  align-items: center;
}

.audio {
  display: flex;
  align-items: center;
  background: #375fff;
  border-radius: 4px;
  height: 37px;
  color: #fff;
  padding: 8px;
}

.audio span {
  color: #fff;
  font-size: 10px;
  line-height: 16px;
  padding: 0 16px 0 4px;
}

.icon-play {
  color: #fff;
}

.audio-message {
  display: flex;
  align-items: center;
}

.audio-message div {
  width: 2px;
  background: #fff;
  border-radius: 2px;
  margin-right: 2px;
}

.audio-message div:nth-child(1) {
  height: 5px;
}
.audio-message div:nth-child(2) {
  height: 15px;
}
.audio-message div:nth-child(3) {
  height: 19px;
}
.audio-message div:nth-child(4) {
  height: 15px;
}
.audio-message div:nth-child(5) {
  height: 21px;
}
.audio-message div:nth-child(6) {
  height: 5px;
}
.audio-message div:nth-child(7) {
  height: 15px;
}
.audio-message div:nth-child(8) {
  height: 19px;
}
.audio-message div:nth-child(9) {
  height: 15px;
}
.audio-message div:nth-child(10) {
  height: 21px;
}
</style>
