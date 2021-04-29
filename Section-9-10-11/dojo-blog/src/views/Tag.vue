<template>
  <h1>List of posts with tag #{{ tagValue }}</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="postsWithTag" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
// composable imports
import getPosts from '../composables/getPosts.js';
// component imports
import PostList from '../components/PostList.vue';
import Spinner from '../components/Spinner.vue';

export default {
  /*   props: ['tag'], */
  components: { PostList, Spinner },
  setup(props) {
    const { posts, error, load } = getPosts();
    load();
    const route = useRoute();
    const tagValue = route.params.tag;
    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(tagValue));
    });
    /* const postsWithTag = posts.value.filter((post) => post.tags.includes(routes.params.tag)); */
    /* const postsWithTag = computed(() => posts.filter((post) => post.tags.includes(route.params.tag))); */
    /* posts.tags.includes(route.params.tag)); */
    /* const postsWithTag = posts; */

    /*     console.log(posts.value);
    console.log(postsWithTag);
    console.log(tagValue);
    console.log(posts.value); */

    return { posts, postsWithTag, error, tagValue };
  },
};
</script>

<style></style>
