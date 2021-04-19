'Use strict';

console.log('Hello Vue!');

const app = Vue.createApp({
  /* template: '<h2>I am the template</h2>', */
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: 'Name of the wind',
          author: 'Patrick Rothfuss',
          age: 45,
        },
        {
          title: 'The way of kings',
          author: 'Brandon Sanderson',
          age: 45,
        },
        {
          title: 'The final empire',
          author: 'Brandon Sanderson',
          age: 45,
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      console.log('You clicked me');
      /* this.title = 'Words of Randiance'; */
      this.title = title;
    },
    toggleShowButtons() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});
app.mount('#app');
