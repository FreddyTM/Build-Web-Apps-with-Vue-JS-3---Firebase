<!-- [vue/no-multiple-template-root]
The template root requires exactly one element.eslint-plugin-vue -->

<!-- Ok I finally got it to work.
I would suggest adding something to the docs for this:

First install eslint and eslint-plugin-vue locally:

npm install --dev eslint eslint-plugin-vue
Then add a .eslintrc.js file in the root with the following settings:

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
  ],
  plugins: ['vue'],
} -->

<!-- Another option is to turn off this Vetur setting:
Vetur > Validation: Template
Validate vue-html <template> using eslint-plugin-vue -->

<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name" />
  <button @click="handleClick">click me</button> -->

  <!-- Use of Proos to pass data into the components -->
  <!-- <Modal header="Sign up for the Giveaway" text="Grab your ninja swag for half the price! " /> -->
  <!-- But it's better to bind the attributes -->
  <!-- <Modal header="Sign up for the Giveaway" text="Grab your ninja swag for half the price!" /> -->
  <Modal :header="header" :text="text" theme="sale" />
</template>

<script>
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      header: 'Sign up for the Giveaway',
      text: 'Grab your ninja swag for half the price!',
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
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
h1 {
  border-bottom: 2px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
