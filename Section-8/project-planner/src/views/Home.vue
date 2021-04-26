<template>
  <div class="home">
    Home
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project.id">
        <!-- <p>{{ project.title }}</p> -->
        <SingleProject :project="project" @delete="handleDelete" />
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
  methods: {
    /* The id argument comes from the data passed with the event emitted from the SingleProject component */
    handleDelete(id) {
      this.projects = this.projects.filter((project) => id !== project.id);
    },
  },
  mounted() {
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
