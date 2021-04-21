<template>
  <h1>Ninja Reaction Timer</h1>
  <!-- disabled is an html attribute, not a vue one -->
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results v-if="showResults" :score="score" />
  <!-- <p v-if="showResults">Reaction time: {{ score }} miliseconds</p> -->
</template>

<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    /* here we can access the value passed by the 'end' event of the Block component.
    We can call it whatever we want, in this case we'll use the same name as it has in the component*/
    endGame(reactionTime) {
      this.showResults = true;
      /* console.log(`We are back to app, and the reaction time is ${reactionTime}`); */
      this.score = reactionTime;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
