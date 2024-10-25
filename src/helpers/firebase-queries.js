import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db} from "../db/db"


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






export const getSongById = async (idSong) => {
    const songRef = doc(db, "canciones", idSong)
    const responseDb = await getDoc(songRef)
    const song = { id: responseDb.id, ...responseDb.data() }
    return song
  }