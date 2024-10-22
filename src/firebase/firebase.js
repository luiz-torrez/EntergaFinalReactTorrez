import { initializeApp } from "firebase/app";
import {  getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    addDoc,
    updateDoc,
    writeBatch, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWsRC1yuoj1IRX3Mf9UN-MrmvTRZykfJk",
  authDomain: "m-movil.firebaseapp.com",
  projectId: "m-movil",
  storageBucket: "m-movil.appspot.com",
  messagingSenderId: "329445921322",
  appId: "1:329445921322:web:45846e6d162a479e05e953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)



//obtener un producto
export async function getSingeProduct(id) {
    const documentRef = doc(db, 'products', id);
  
    try {
      const snapshot = await getDoc(documentRef);
      if (snapshot.exists()) {
        return snapshot.data();
      } else {
        console.log('El documento no existe!');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }
  
  //obtener toda una coleccion
  export async function getProducts() {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }
  
  //filtros de precio
  export async function filterProductsByPrice(precio) {
    try {
      const filteredQuery = query(
        collection(db, 'products'),
         where('precio', '<=', precio)
      );
      const querySnapshot = await getDocs(filteredQuery);
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener el documento ', error);
    }
  }
  export async function filterProductsByCategory(category) {
    try {
      const filteredQuery = query(
        collection(db, 'products'), 
         where('category', '==', category)
      );
      const querySnapshot = await getDocs(filteredQuery);
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener el documento: ', error);
    }
  }
  // otros filtros 
  export const getProductsByCategory = async (category) => {
    const filteredQuery = query(category, where ("category", "==", category))
    const querySnapshot = await getDocs(filteredQuery);
    const productsList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return productsList;
  }
