<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-list-header class="head">Chats</ion-list-header>
        <div class="items">
          <ion-item
            class="item"
            v-for="chat in chats"
            :key="chat.id"
            button
            @click="goTo(`/chats/${chat.id}`)"
          >
            <ion-avatar class="avatar" slot="start">
              <img :src="chat.img" />
            </ion-avatar>
            <ion-label class="label">
              <div>
                <h2>{{ chat.title }}</h2>
                <p>{{ chat.text }}</p>
              </div>
              <div class="new-time">
                <span>11:20</span>
                <div class="new-message">2</div>
              </div>
            </ion-label>
          </ion-item>
        </div>
      </ion-list>

      <ion-button @click="addChat">add</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useApi } from "@/composables/useApi";
import {
  IonPage,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonButton,
  IonLabel,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonLabel,
    IonList,
    IonListHeader,
    IonItem,
    IonAvatar,
  },
  setup() {
    const { data } = useApi();
    const router = useRouter();
    const chats = ref(data.chats);

    const addChat = () => {
      chats.value.push(data.chats[0]);
    };
    const goTo = (url: string) => {
      router.push({ path: url });
    };
    return {
      addChat,
      chats,
      goTo,
    };
  },
});
</script>

<style scoped>
.items {
  margin-top: 41px;
}
.item {
  --padding-end: 0;
  --padding-start: 0;
  --inner-border-width: 0;
  border-bottom: 1px solid rgb(182 194 210 / 25%);
  margin: 0 30px;
  --detail-icon-font-size: 0;
  --inner-padding-end: 0;
}

.item-native {
  border: 1px solid #b6c2d2;
}

.avatar {
  width: 48px;
  height: 48px;
  margin-right: 20px;
  --border-radius: 10px;
}

.label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.new-time {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.new-time span {
  font-weight: 500;
  font-size: 12px;
}

.new-message {
  background: #0c5eda;
  display: flex;
  align-content: center;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  border-radius: 100%;
  width: 19px;
  align-items: center;
  height: 19px;
  margin-top: 13px;
}
</style>