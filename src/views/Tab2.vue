<template>
  <ion-page>
    <ion-content :fullscreen="true"> 12 </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Tab2",
  components: {
    IonContent,
    IonPage,
  },
});
</script>
