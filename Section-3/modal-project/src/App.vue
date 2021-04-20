<template>
  <h1>{{ title }}</h1>
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
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'My First Vue App :)',
    };
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
