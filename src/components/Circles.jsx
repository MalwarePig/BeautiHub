import './../styles/Circles.css'


export function Circles(props) {
    return(
        <div className="CircleForm">
            <img src={props.ruta}  ></img>
            <p>{props.Title}</p>
        </div>
    )
    
}