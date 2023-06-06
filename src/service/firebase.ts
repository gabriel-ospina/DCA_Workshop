import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs} from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    setPersistence,
    browserSessionPersistence 
  } from "firebase/auth";
import { Posts } from '../types/Posts';
import { dispatch } from "../store";
import { navigate } from "../store/actions";
import { Screens } from "../types/navigation";

const firebaseConfig = {
    apiKey: "AIzaSyC177u4NEfvr8fBANURw_J88WrWlhjfz8Q",
    authDomain: "dcaproject-b602a.firebaseapp.com",
    projectId: "dcaproject-b602a",
    storageBucket: "dcaproject-b602a.appspot.com",
    messagingSenderId: "961761563191",
    appId: "1:961761563191:web:c826dadbc972046adb65b2",
    measurementId: "G-K93Z10P1MW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

const registerUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    }
  };

  const loginUser = async ({
    email,
    password,
    pageIni, 
  }: {
    email: string;
    password: string;
    pageIni: Screens;
  }) => {
     setPersistence(auth, browserSessionPersistence)
    .then(() => {
      const xx: any = signInWithEmailAndPassword(auth, email, password);
      alert(JSON.stringify(xx, null, 3));
      dispatch(navigate(pageIni));
    })
    .catch((error) => {
      // Handle Errors here.
      alert(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };
  

export const addPost = async (product: Omit<Posts, "id">) => {
    try {
        const where = collection(db, "posts");
        await addDoc(where, product);
        console.log("Se añadio un nuevo post");
    } catch (error) {
        console.error(error);
    }
};

export const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const transformed: Array<Posts> = [];

    querySnapshot.forEach((doc) => {
        const data: Omit<Posts, "id"> = doc.data() as any;
        transformed.push({id: doc.id, ...data})
    });
    return transformed;
}

export default {
    addPost,
    getPosts,
    registerUser,
    loginUser
};