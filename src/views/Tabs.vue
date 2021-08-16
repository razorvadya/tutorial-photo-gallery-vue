<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="homeOutline" />
          </ion-tab-button>

          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="chatbubbleOutline" />
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
} from "ionicons/icons";

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
    return {
      images,
      square,
      triangle,
      homeOutline,
      chatbubbleOutline,
    };
  },
};
</script>
