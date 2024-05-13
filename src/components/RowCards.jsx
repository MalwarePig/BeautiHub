import './../styles/CardRoyal.css'
import {FaWebAwesome,FaHeart, FaComment,FaScissors,FaSprayCan,FaSpa} from "react-icons/fa6";

export function RowsCards(props){
    const Data = {
        Name : 'Nombre',
        Type : 'Barber',
        State : 'NL' 
    }

    return (
        <div  className='CardRoyal'>
            <div className='Insignia'>
                <FaWebAwesome/> 
                <h4>Royal Club</h4>
            </div> 

            <div className='NombreNegocio'>
                <h2>{props.Name}</h2>   
            </div>
               
            <div className='Likes'>
                <FaHeart/>
                <h4>18</h4>
            </div> 
 

            <div className='Comentarios'>
                <FaComment/>
                <h4>34</h4>
            </div>

            <div className='Servicios'>
                <FaScissors/>
                <FaSprayCan/>
                <FaSpa/>
            </div>
          
        </div> 
    )
}





