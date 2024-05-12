import { FaBug,FaHouse,FaMagnifyingGlassLocation,FaHeart } from "react-icons/fa6";
import './../styles/NavButtons.css'

export function ButtonsSucces(props) {
    return <button>Acceptar  {props.Prueba}</button>;
  }
  
  export function ButtonsCancel() {
      return (
          <button>Cancelar</button>
      );
  }
  

  export function ButtonHome(props) {
    return ( 
        <button><FaHouse/> Home</button> 
    )
    
    
    
  }

  export function ButtonExplorer(props) {
    return <button><FaMagnifyingGlassLocation/> Explorer</button>;
  }

  export function ButtonFavorite(props) {
    return <button><FaHeart/> Favorite</button>;
  }
  
  export function Separator() {
    return <div className="Separator"></div>
  }
  



  