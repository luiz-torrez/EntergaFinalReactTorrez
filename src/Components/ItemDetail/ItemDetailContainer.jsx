import ItemList from "../Items/ItemList";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { getItemById } from "../../helpers/firebase-queries";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ idItem }) => {
    const [product, setproduct] = useState({});
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      getItemById(idItem)
        .then((data) => setproduct(data))
        .finally(() => setLoading(false));
    }, []);
  
    return <><article className="conteiner">{loading ? <Loading /> : <ItemDetail product={product} />}</article>
    </>;
  };
  export default ItemDetailContainer;