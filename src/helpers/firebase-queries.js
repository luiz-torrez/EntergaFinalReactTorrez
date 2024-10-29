import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db} from "../db/db"


const songsRef = collection(db, "products")

export const getSongs = async () => {
  const responseDb = await getDocs(songsRef);
  const songs = responseDb.docs.map((user) => {
    return { id: user.id, ...user.data() };
  });
  return songs
}

export const getGenres = async () => {
  const responseDb = await getDocs(songsRef);
  const genres = responseDb.docs.map((user) => {
    return [...user.data().category]
  });
  const categorysPlanos = genres.reduce((acc, curr) => acc.concat(curr), []);
  const categorysUnicos = categorysPlanos.filter((category, index, array) => array.indexOf(category) === index);
  return categorysUnicos
}

export const getSongsByGenre = async (genre) => {
  const q = query(songsRef, where("category", "array-contains", genre))
  const responseDb = await getDocs(q);
  const songs = responseDb.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return songs;
}

export const getSongsByYear = async (year) => {
  const q = query(songsRef, where("año_lanzamiento", "<=", Number(year)))
  const responseDb = await getDocs(q);
  const songs = responseDb.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return songs;
}

export const getSongById = async (idSong) => {
  const songRef = doc(db, "products", idSong)
  const responseDb = await getDoc(songRef)
  const song = { id: responseDb.id, ...responseDb.data() }
  return song
}

// export const getCommentsByIdSong = async (idSong) => {
//   const songRef = doc(db, "products", idSong)
//   const collectionComments = collection(songRef, "comentarios")
//   const q = query(collectionComments)
//   const responseDb = await getDocs(q);
//   const comments = responseDb.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data()
//   }));
//   return comments;
// }




























// const itemsRef = collection(db, "products")

// export const getItems = async () => {
//   const responseDb = await getDocs(itemsRef);
//   const items = responseDb.docs.map((user) => {
//     return { id: user.id, ...user.data() };
//   });
//   return items
// }

// // export async function getProducts() {
// //   try {
// //     const querySnapshot = await getDocs(collection(db, 'products'));
// //     if (querySnapshot.size !== 0) {
// //       const productsList = querySnapshot.docs.map((docu) => {
// //         return {
// //           id: docu.id,
// //           ...docu.data(),
// //         };
// //       });
// //       return productsList;
// //     } else {
// //       console.log('Coleccion vacía !');
// //     }
// //   } catch (error) {
// //     console.error('Error al obtener el documento: ', error);
// //   }
// // }
// export const getCategoryes = async () => {
//   const responseDb = await getDocs(itemsRef);
//   const categoryes = responseDb.docs.map((user) => {
//     return [...user.data().category]
//   });
//   const categorysPlanos = categoryes.reduce((acc, curr) => acc.concat(curr), []);
//   const categorysUnicos = categorysPlanos.filter((category, index, array) => array
//   .indexOf(category) === index);
//   return categorysUnicos
// }

// export const getSongsByGenre = async (categoryes) => {
//   const q = query(itemsRef, where("category", "array-contains", categoryes))
//   const responseDb = await getDocs(q);
//   const itemss = responseDb.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data()
//   }));
//   return categoryes;
// }






// export const getSongById = async (idItem) => {
//     const itemsRef = doc(db, "products", idItem)
//     const responseDb = await getDoc(itemsRef)
//     const items = { id: responseDb.id, ...responseDb.data() }
//     return items
//   }