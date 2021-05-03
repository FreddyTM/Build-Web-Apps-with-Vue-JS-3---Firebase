<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';
export default {
  setup() {
    const posts = ref([]);
    //Realtime listener to the firestore collection
    projectFirestore
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        let docs = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        console.log('Documents: ', docs);
        posts.value = docs;
      });
    return { posts };
  },
};
</script>

<style></style>
