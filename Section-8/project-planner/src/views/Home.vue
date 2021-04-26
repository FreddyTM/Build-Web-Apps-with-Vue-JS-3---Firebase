<template>
  <div class="home">
    <!-- $event is the data sent in the event filterChange -->
    <FilterNav @filterChange="currentFilter = $event" :current="currentFilter" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <!-- <p>{{ project.title }}</p> -->
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import SingleProject from '@/components/SingleProject.vue';
import FilterNav from '../components/FilterNav.vue';
export default {
  name: 'Home',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      currentFilter: 'all',
    };
  },
  mounted() {
    /* 'http://localhost:3000/projects' is the endpoint to db.json. It's given by json-server by typing
      json-server --watch data/db.json in the console */
    fetch('http://localhost:3000/projects')
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    /* The id argument comes from the data passed with the event emitted from the SingleProject component */
    handleDelete(id) {
      this.projects = this.projects.filter((project) => id !== project.id);
    },
    handleComplete(id) {
      let p = this.projects.find((project) => project.id === id);
      p.complete = !p.complete;
      console.log(`Project ${p.id} complete: ${p.complete}`);
    },
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'completed') {
        return this.projects.filter((project) => project.complete);
      }
      if (this.currentFilter === 'ongoing') {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
  },
};
</script>
