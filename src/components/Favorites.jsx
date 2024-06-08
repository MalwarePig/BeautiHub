import './../styles/Favs.css'
export function Favorites(props) {
  return (
      <div className="QuadForm">
        <div id="FavPort">
          <img src={props.ruta}></img>
        </div>

        <div id='TituloFav'>
          <span>{props.Title}</span>
          <h6>{props.SubTitle}</h6>
        </div>  
      </div> 
  );
}
