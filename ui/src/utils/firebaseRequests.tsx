// import { initializeApp } from 'firebase/app';
import { collection, getDocs, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';
import type { WordData } from '../types/vocabTypes';


import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';

export const config = {
  apiKey: "AIzaSyCsTIjDkD7PbVhwYcManDraDdlUkcLm3YA",
  authDomain: "vocabulario-ff473.firebaseapp.com",
  projectId: "vocabulario-ff473",
  storageBucket: "vocabulario-ff473.firebasestorage.app",
  messagingSenderId: "360325701842",
  appId: "1:360325701842:web:241cbbc8f5f8b8a1130d0b"
};

// doesn't work well from here for some reason
/*
export const initializeDatabase = () => {
  const app = initializeApp(config);
  const db = getFirestore(app);
  return db;
} */

export const authenticate = async (app: FirebaseApp, email: string, password: string) => {
  const auth = getAuth(app);
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential;
}

export async function fetchData(db: Firestore, collectionName: string): Promise<WordData[]> {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  // map to array of objects, including id property
  const dataArray = querySnapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() as WordData };
  });
  return dataArray;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateData(
  db: Firestore,
  collectionName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: any,
  propertyName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  newValue: any
) {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      [propertyName]: newValue,
    });
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
}

export async function addData(
  db: Firestore,
  collectionName: string,
  id: string,
  data: WordData,
): Promise<string | null> {
  try {
    const docRef = doc(db, collectionName, id);
    // Check if a document with this ID already exists
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return null;
    } else {
      await setDoc(docRef, data);
      return id;
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
}