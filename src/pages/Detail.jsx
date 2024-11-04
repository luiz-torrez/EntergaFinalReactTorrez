import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetail/ItemDetailContainer";




const Detail =()=>{

  const{idSong} = useParams();

    return (
      <><div>
        < ItemDetailContainer idSong={idSong}/>
      </div>
      </>
    );
  };
  export default Detail;