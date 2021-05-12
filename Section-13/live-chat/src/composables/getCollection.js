import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getCollection = (collection) => {
  const documents = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore.collection(collection).orderBy('createdAt');

  /* onSnapshot() doesn't work with a try-catch block. It uses two callback functions, one for success & one for error */
  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      /* In order to get the data stored in the database, we need to call doc.data().createdAt. This means that the data comes from the database
    and not from the local snapshot of the data that the app uses to update the browser quickly, because the timestamp won't be defined yet */
      snap.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      /* if (documents.data().createdAt) {
        results.push({...doc.data(), id: doc.id});
      }*/
      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = 'Could not fetch the data';
    }
  );

  return { documents, error };
};

export default getCollection;
