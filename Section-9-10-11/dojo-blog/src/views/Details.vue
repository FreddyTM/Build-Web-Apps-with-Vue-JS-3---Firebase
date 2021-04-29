<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
// modules imports
import { useRoute } from 'vue-router';
// composable imports
import getPost from '@/composables/getPost';
// component imports
import Spinner from '../components/Spinner.vue';

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute();
    console.log(route);

    /* we can get the id from the props, or from the route
    const { error, post, load } = getPost(props.id); */
    const { error, post, load } = getPost(route.params.id);

    load();

    return { error, post };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
