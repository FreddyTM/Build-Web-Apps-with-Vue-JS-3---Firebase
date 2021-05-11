import { ref } from '@vue/reactivity';
import { projectAuth, projectFirestore } from '../firebase/config';

/* Initial value of user is the user logged in, or null if there's not any user */
const user = ref(projectAuth.currentUser);

/* This function listens to any authentication change in Firebase, and if there's a change it fires a function */
projectAuth.onAuthStateChanged((fUser) => {
  console.log('User state changed. Current user is: ', fUser);
  user.value = fUser;
});

const getUser = () => {
  return { user };
};

export default getUser;
