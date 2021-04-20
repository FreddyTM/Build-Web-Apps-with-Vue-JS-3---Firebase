<template>
  <div class="backdrop">
    <div class="modal">
      <h1>Modal Title</h1>
      <p>modal content</p>
    </div>
  </div>
</template>

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
/* Another solution is making the style more specific, like so
.modal hi {
  color: #03cfb4;
  border: none;
  padding: 0;
} */
h1 {
  color: #03cfb4;
  border: none;
  padding: 0;
}
.modal p {
  font-style: normal;
}
</style>
