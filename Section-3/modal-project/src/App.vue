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
  <p>Welcome...</p>
  <!-- <input type="text" ref="name" />
  <button @click="handleClick">click me</button> -->

  <div v-if="showModal">
    <!-- Use of Props to pass data into the components -->
    <!-- <Modal header="Sign up for the Giveaway" text="Grab your ninja swag for half the price! " /> -->
    <!-- But it's better to bind the attributes -->
    <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal" /> -->
    <!-- with props you can only pass simple data, like strings or numbers -->
    <!-- to pass complex data, we use slots -->
    <Modal theme="sale" @close="toggleModal">
      <!-- the slot it's a template, a sort of subcomponent -->
      <!-- whatever we put into the app's modal tag will go into the component's slot tag -->
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half the price!</p>
      <p>Bonus</p>
      <!-- if we need a special structure to go in the slot, we have to use named slots -->
      <!-- we can create them anywhere inside the component tag, and give them a name, in this case 'links' -->
      <!-- named slots WON'T GO into the component's slot tag -->
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal theme="" @close="toggleModalTwo">
      <h1>Sign up for the newsletter</h1>
      <p>For updates and promo codes</p>
    </Modal>
  </div>
  <!-- this modal will teleport to index.html outside de app div and into the modals div -->
  <teleport to=".modals" v-if="showModal">
    <Modal @close="toggleModal">
      <h2>I'm a teleported modal outside de app div</h2>
    </Modal>
  </teleport>
  <!-- the close event fires the function, but @close="toggleModal affects also the modal, because is inside the backdrop.
    So we need a click event modifier to customize when we want the event to be fired -->
  <button @click="toggleModal">Show modal</button>
  <button @click="toggleModalTwo">Show modal 2</button>
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
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
.modals {
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
