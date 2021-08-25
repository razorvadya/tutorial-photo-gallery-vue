<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar v-show="isShowBar" slot="bottom">
          <ion-tab-button tab="home" href="/home">
            <ion-icon class="icon" :icon="homeOutline" />
          </ion-tab-button>

          <ion-tab-button tab="chats" href="/chats">
            <ion-icon class="icon" :icon="chatbubbleOutline" />
          </ion-tab-button>
          <ion-tab-button tab="profile" href="/profile">
            <ion-icon class="icon" :icon="personOutline" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import {
  images,
  square,
  triangle,
  homeOutline,
  chatbubbleOutline,
  personOutline,
} from "ionicons/icons";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Tabs",
  components: {
    IonContent,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
  },
  setup() {
    const route = useRoute();
    const isShowBar = computed(() => route.name !== "chatId");

    return {
      images,
      square,
      triangle,
      homeOutline,
      chatbubbleOutline,
      isShowBar,
      personOutline,
    };
  },
};
</script>

<style scoped>
.icon {
  width: 24px;
}
</style>
