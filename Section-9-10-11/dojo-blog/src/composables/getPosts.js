import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      //Fetching data from firestore database. We'll get the posts collection
      const res = await projectFirestore.collection('posts').get();
      /* console.log(res.docs); */
      //Extracting data from the posts collection of the firestore database.
      //We'll assign the data to the posts attribute
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
        /* console.log(doc.data()); */
      });
      /*       let data = await fetch('http://localhost:3000/posts')
      if(!data.ok) {
        throw Error('no available data')
      }
      posts.value = await data.json() */
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
