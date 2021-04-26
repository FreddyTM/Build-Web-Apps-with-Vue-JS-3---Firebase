<template>
  <div class="home">
    Home
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <!-- <p>{{ project.title }}</p> -->
        <SingleProject :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import SingleProject from '@/components/SingleProject.vue';
export default {
  name: 'Home',
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
