<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" ref="getFocus" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';

export default {
  /* The context object allow us to methods & properties that we can use inside the component*/
  setup(props, context) {
    const { error, login } = useLogin();
    // refs
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        console.log('User logged in');
        /* Instead of this.$emit() from the options API, we emit an event with context.emit() */
        /* the setup() function doesn't have access to this (composition API) */
        /* the data() function from the options API does have access to this */
        context.emit('login');
      }
    };

    return { email, password, handleSubmit, error };
  },
  mounted() {
    this.$refs.getFocus.focus();
  },
};
</script>

<style></style>
