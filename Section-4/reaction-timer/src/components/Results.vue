<template>
  <div class="results">{{ rank }} Reaction time (Results): {{ score }} miliseconds</div>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    this.score < 270
      ? (this.rank = 'Great! 🤩.')
      : this.score < 350
      ? (this.rank = 'Good! 👍.')
      : this.score < 450
      ? (this.rank = 'Average 😐.')
      : (this.rank = 'Poor 🙁.');
  },
};
</script>

<style>
.results {
  margin: 20px;
  padding: 20px;
  color: red;
}
</style>
