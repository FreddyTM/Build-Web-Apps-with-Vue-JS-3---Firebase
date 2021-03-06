<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="scrollMessages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'; /* External package */
import getCollection from '../composables/getCollection.js';
import { computed, onUpdated, ref } from 'vue';
export default {
  setup() {
    const { documents, error } = getCollection('messages');

    /* Data formatting */
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate(), { addSuffix: true });
          /* Overriding the createdAt attribute with the updated value */
          return { ...doc, createdAt: time };
        });
      }
    });

    /* Auto-scroll to bottom of messages*/
    const scrollMessages = ref(null);
    onUpdated(() => {
      scrollMessages.value.scrollTop = scrollMessages.value.scrollHeight;
    });

    return { documents, error, formattedDocuments, scrollMessages };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
