<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="display name" v-model="displayName" ref="getFocus" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';
export default {
  setup(props, context) {
    const { error, signup } = useSignup();
    // refs
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        console.log('User signed up');
        /* Instead of this.$emit() from the options API, we emit an event with context.emit() */
        /* the setup() function doesn't have access to this (composition API) */
        /* the data() function from the options API does have access to this */
        context.emit('signup');
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
  mounted() {
    this.$refs.getFocus.focus();
  },
};
</script>

<style></style>
