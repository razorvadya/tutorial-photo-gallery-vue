<template>
  <div v-if="user" class="message">
    <ion-avatar v-if="user.avatar && !isMyMessage" class="avatar-user">
      <img :src="user.avatar" />
    </ion-avatar>
    <div :class="isMyMessage ? 'content2' : 'content'">
      <img v-if="message.image" :src="message.image" />
      <div class="block-text">
        <div class="text">
          {{ message.message }}
        </div>
        <div v-if="message.audio" class="audio">
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
        <span>{{ message.createdAt }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IonAvatar, IonIcon } from "@ionic/vue";
import { playSharp } from "ionicons/icons";
import { PropType, computed, defineComponent } from "vue";
import { Message } from "@/composables/useApi";

import { useMainStore } from "@/stores/main";

export default defineComponent({
  components: { IonAvatar, IonIcon },
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
  },
  setup(props) {
    const main = useMainStore();
    const account = computed(() => main.accountProfile);

    const message = computed(() => props.message);
    const user = computed(() => main.getUserById(message.value.userId));

    const isMyMessage = computed(() => user.value?.id === account.value?.id);

    return {
      account,
      playSharp,
      user,
      isMyMessage,
    };
  },
});
</script>

<style scoped>
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

@media (prefers-color-scheme: dark) {
  .content {
    background: #272727;
  }
  .content:before {
    border-bottom: 8px solid #272727;
  }
  .content2 {
    background: #12223a;
    color: #fff;
  }
  .content2:before {
    border-bottom: 8px solid #12223a;
  }
}
</style>