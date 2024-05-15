import './../styles/Favs.css'
export function Favorites(props) {
  return (
      <div className="QuadForm">
        <img id="FavPort"src={props.ruta}></img>
        <div id='FavData'>
            <p id='TituloFav'>{props.Title}</p>
            <p id="SubTituloFav">{props.SubTitle}</p>
        </div> 
      </div> 
  );
}
