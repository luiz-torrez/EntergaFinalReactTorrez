import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db} from "../db/db"


const itemsRef = collection(db, "products")

export const getItems = async () => {
  const responseDb = await getDocs(itemsRef);
  const items = responseDb.docs.map((user) => {
    return { id: user.id, ...user.data() };
  });
  return items
}

export const getGenres = async () => {
  const responseDb = await getDocs(itemsRef);
  const genres = responseDb.docs.map((user) => {
    return [...user.data().category]
  });
  const categorysPlanos = genres.reduce((acc, curr) => acc.concat(curr), []);
  const categorysUnicos = categorysPlanos.filter((category, index, array) => array.indexOf(category) === index);
  return categorysUnicos
}

export const getItemsByGenre = async (genre) => {
  const q = query(itemsRef, where("category", "array-contains", genre))
  const responseDb = await getDocs(q);
  const items = responseDb.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  return items;
}


export const getItemById = async (idItem) => {
  const itemRef = doc(db, "products", idItem)
  const responseDb = await getDoc(itemRef)
  const item = { id: responseDb.id, ...responseDb.data() }
  return item;
}

