'Use strict';

console.log('Hello Vue!');

const app = Vue.createApp({
  /* template: '<h2>I am the template</h2>', */
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        {
          title: 'Name of the wind',
          author: 'Patrick Rothfuss',
          age: 45,
          img: 'assets/1.jpg',
          isFav: true,
        },
        {
          title: 'The way of kings',
          author: 'Brandon Sanderson',
          age: 45,
          img: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'The final empire',
          author: 'Brandon Sanderson',
          age: 45,
          img: 'assets/3.jpg',
          isFav: true,
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
