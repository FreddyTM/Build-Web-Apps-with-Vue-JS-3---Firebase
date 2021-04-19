'Use strict';

console.log('Hello Vue!');

const app = Vue.createApp({
  /* template: '<h2>I am the template</h2>', */
  data() {
    return {
      title: 'The final empire',
      author: 'Brandon Sanderson',
      age: 45,
    };
  },
});
app.mount('#app');
