import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer";




const Detail =()=>{

  const{idItem} = useParams();


    return (
      <><div>
        < ItemDetailContainer idItem={idItem}/>
      </div>
      </>
    );
  };
  export default Detail;