<template>
  <!-- click event modifier to prevent that a click on any element inside the backdrop div could fire the event-->
  <!-- if we click on the modal, it won't close, only if we click outside of it -->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!-- <h1>{{ header }}</h1>
      <p>{{ text }}</p> -->
      <!-- use of slots instead of props -->
      <slot>
        <!-- whatever we put into the app's modal tag will go into the component's slot tag, except named slots-->
        <!-- if we put some content inside the slot, it will only show up if nothing is passed into it -->
        This text only appears if no content is sent to the slot
      </slot>
      <div class="actions">
        <!-- here we have our named slot -->
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* List of props that can be used in the component */
  /* props: ['header', 'text', 'theme'], */
  props: ['theme'],
  methods: {
    /* closeModal() will fire a custom event to tell App.vue that we want to close the modal */
    /* The name of the custom event can be whatever we want, in this case is 'close' */
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<!-- <style scoped></style> Styles only affect this component, otherwise styles will affect all components-->
<!-- Never add <style scoped> to the root component, or its styles won't work anywhere else in the app -->
<!-- To create global styles, add a global.css file to the assets folder -->

<style scoped>
/* .modal[data-v-701ac82d] Vue inserts a unique data attribute to label the scoped styles
  this has a little performance influence*/

.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
/* .backdrop[data-v-701ac82d] */
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
/* .h1[data-v-701ac82d] */
/* Another solution is making the style more specific, like so */
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
.modal.sale {
  background: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions {
  color: white;
}
.modal.sale .actions a {
  color: white;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
</style>
