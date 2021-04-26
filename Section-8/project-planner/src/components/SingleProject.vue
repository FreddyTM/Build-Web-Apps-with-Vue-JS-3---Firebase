<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleCompleted">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-icons" @click="">edit</span>
        <span class="material-icons" @click="deleteProject">delete</span>
        <span class="material-icons" @click="">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      /* completed: this.project.complete, */
      showDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id,
    };
  },
  methods: {
    toggleCompleted() {
      this.showDetails = !this.showDetails;
      console.log(this.showDetails);
    },
    deleteProject() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 10px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
</style>
