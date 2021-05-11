<template>
  <p>Chatroom</p>
  <div class="container">
    <Navbar />
    <!-- <Navbar @logout="redirect" /> -->
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue';
import Navbar from '../components/Navbar.vue';
import getUser from '../composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    /* If the user is logged out, we go back to the welcome page */
    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' });
      }
    });
    /* We can do the same emmiting an event from the Navbar (where the logout is triggered),
    and then calling the redirect() function to go back to Welcome
    const redirect = () => {
      router.push({ name: 'Welcome' });
    };
    return { redirect }; */
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
