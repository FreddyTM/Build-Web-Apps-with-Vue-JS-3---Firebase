<template>
  <!--   <h1>List of posts with tag #{{ tagValue }}</h1> -->
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
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
import TagCloud from '../components/TagCloud.vue';

export default {
  /*   props: ['tag'], */
  components: { PostList, Spinner, TagCloud },
  setup(props) {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();
    /* const tagValue = route.params.tag; */
    let tagValue = route.params.tag;
    const postsWithTag = computed(() => {
      /* It's not possible to use a const or variable to set the route tag, because it doesn't update */
      /* return posts.value.filter((post) => post.tags.includes(tagValue)); */
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
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

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
