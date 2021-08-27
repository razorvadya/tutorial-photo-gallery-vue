<template>
  <ion-page>
    <ion-header>
      <ion-list-header class="head">My profile</ion-list-header>
    </ion-header>
    <ion-content>
      <div class="account" v-if="account">
        <img :src="account.avatar" />
        <div class="id"><span>id</span>{{ account.id }}</div>
        <div class="fName">{{ account.firstName }}</div>
        <div class="lName">{{ account.lastName }}</div>
        <div class="bday">{{ account.date }}</div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonHeader, IonListHeader } from "@ionic/vue";
import { computed, defineComponent } from "vue";
import { useMainStore } from "@/stores/main";

export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonListHeader,
  },
  setup() {
    const main = useMainStore();
    const account = computed(() => main.accountProfile);
    return {
      account,
    };
  },
});
</script>

<style scoped>
.account {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 65px;
}

.account img {
  width: 121px;
  border-radius: 10px;
}

.id {
  margin-top: 12px;
}
.fName {
  margin: 5px 0 10px;
  font-weight: 500;
  font-size: 36px;
  line-height: 43px;
}

.id,
.lName,
.bday {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  opacity: 0.5;
}

.bday {
  margin-top: 10px;
}
</style>