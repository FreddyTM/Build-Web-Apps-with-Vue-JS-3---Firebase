<template>
  <div class="block" v-if="showBlock" @click="showReaction">click me</div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
    showReaction() {
      this.stopTimer();
      console.log(
        this.reactionTime < 300
          ? 'Great!'
          : this.reactionTime < 350
          ? 'Good!'
          : this.reactionTime < 450
          ? 'Average'
          : 'Poor'
      );
      /* console.log(`Reaction time: ${this.reactionTime} milisecons`); */
      this.$emit('end', this.reactionTime);
    },
  },
  /* Lifecycle hooks. Methods to acces the component in different stages of the component creation & render*/
  mounted() {
    console.log('Component mounted');
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
      /* console.log(this.delay); */
    }, this.delay);
  },
  /*   updated() {
    console.log('Component updated');
  },
  unmounted() {
    console.log('Component unmounted');
  }, */
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
