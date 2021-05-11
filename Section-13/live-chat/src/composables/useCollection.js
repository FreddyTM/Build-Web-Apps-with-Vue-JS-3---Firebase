import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const useCollection = (collection) => {
  /* const error created here because we can use different collections, and each one can create an error */
  const error = ref(null);
  const addDoc = async (doc) => {
    /* Reset previous errors */
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err.message);
      error.value = 'Error. Could not send the message';
    }
  };
  return { error, addDoc };
};

export default useCollection;
