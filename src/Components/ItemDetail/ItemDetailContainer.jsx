import Item from "../Items/Item";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { getSongById } from "../../helpers/firebase-queries";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ idSong }) => {
    const [product, setproduct] = useState({});
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      getSongById(idSong)
        .then((data) => setproduct(data))
        .finally(() => setLoading(false));
    }, []);
  
    return <>{loading ? <Loading /> : <ItemDetail product={product} />}</>;
  };
  export default ItemDetailContainer;