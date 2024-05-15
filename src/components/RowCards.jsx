import './../styles/CardRoyal.css'
import {FaWebAwesome,FaHeart, FaComment,FaScissors,FaSprayCan,FaSpa,FaClock,FaSquarePhoneFlip, FaFacebook,FaInstagram,FaTiktok,FaTwitter} from "react-icons/fa6";

export function RowsCards(props){
    const Data = [{
        id: 1,
        Name : 'El Tupé de Tintín',
        Type : 'Barber',
        State : 'NL',
        Town: 'Gpe',
        Schedules: '08:00 a 16:00',
        Tel: '8126156944'
    },{
        id: 2,
        Name : 'Razor Edge',
        Type : 'Barber',
        State : 'NL',
        Town : 'Mty',
        Schedules: '09:00 a 16:30',
        Tel: '8126156944' 
    },{
        id: 3,
        Name : 'Barba Urbana',
        Type : 'Barber',
        Town : 'Esc',
        Schedules: '0:00 a 15:00',
        Tel: '8126156944'
    },{
        id: 4,
        Name : 'Modern Fade Studio',
        Type : 'Barber',
        State : 'NL',
        Town : 'Gpe',
        Schedules: '08:00 a 16:00',
        Tel: '8126156944'
    },{
        id: 5,
        Name : 'Nombre',
        Type : 'Barber',
        State : 'NL',
        Town: 'Gpe',
        Schedules: '13:00 a 19:00',
        Tel: '8126156944'
    },{
        id: 6,
        Name : 'The Gentlemens Den',
        Type : 'Barber',
        State : 'NL',
        Town: 'Mty',
        Schedules: '10:00 a 18:00',
        Tel: '8126156944'
    },{
        id: 7,
        Name : 'Beard Haven',
        Type : 'Barber',
        State : 'Gpe',
        Schedules: '09:00 a 17:00',
        Tel: '8126156944'
    },{
        id: 8,
        Name : 'Cuts & Co.',
        Type : 'Barber',
        State : 'NL',
        Town: 'Santiago',
        Schedules: '11:00 a 19:00',
        Tel: '8126156944' 
    },{
        id: 9,
        Name : 'Classic Cuts',
        Type : 'Barber',
        State : 'Esc',
        Schedules: '08:30 a 16:30',
        Tel: '8126156944'
    },{
        id: 10,
        Name : 'Sharp Styles',
        Type : 'Barber',
        State : 'Gpe',
        Schedules: '10:00 a 18:00',
        Tel: '8126156944'
    }
]

    return (
        <>
        {
            Data.map((dit)=>(
                <div className='CardRoyal' key={dit.id}>

                    <div className='Insignia'>
                        <div className='Crown'>
                            <FaWebAwesome/>
                        </div> 
                        <h4>Royal Club</h4>
                    </div> 

                    <div className='NombreNegocio'>
                    <h2>{dit.Name}</h2>   
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
                        <div>
                            <FaScissors/>
                            <FaSprayCan/>
                            <FaSpa/>
                        </div>
                        
                        <h4 id='lblServicio'>Servicios</h4>  
                    </div>

                    <div className='Adrress'>
                    <FaClock/>
                        <h4>{dit.State +', '+ dit.Town} </h4>   
                    </div>

                    <div className='Horarios'>
                        <FaClock/>
                        <h4>{dit.Schedules}</h4>   
                    </div> 

                    <div className='Tel'>
                        <FaSquarePhoneFlip/>
                        <h4>{dit.Tel}</h4>   
                    </div> 

                    <div className='Redes'>
                        <div>
                            <a href="https://www.facebook.com/"><FaFacebook/></a>
                            <a href="https://www.instagram.com/"><FaInstagram/></a>
                            <a href="https://twitter.com/home"><FaTwitter/></a> 
                            <a href="https://www.tiktok.com/"><FaTiktok/></a>

                           
                        </div>
                        
                        <h4 id='lblServicio'>Redes</h4>  
                    </div> 

                </div>
            ))
        }
        </> 
    )




}





 
 