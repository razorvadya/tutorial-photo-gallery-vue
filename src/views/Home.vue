<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="content">
        <ion-img
          class="illustration"
          :src="require('@/assets/Illustration.svg')"
        />
        <ion-text color="dark">
          <h1>Connect easily with your family and friends over countries</h1>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonImg, IonText } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonImg,
    IonText,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 142px;
}
h1 {
  margin: 42px 0 0;
  padding: 0 48px;
  text-align: center;
}
.illustration {
  max-width: 262px;
  margin: 0 auto;
}
</style>
