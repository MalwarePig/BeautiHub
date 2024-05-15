import { Circles } from "./Circles";
import { RowsCards } from "./RowCards";
import "./../styles/Explorer.css";

export function Explorer() {
  return (
    <div className="FormCategory">
      <h2>Un mundo de estilos</h2>
      <h4>Diviertete, cómo quieres consentirte hoy?</h4>
      <div className="Category">
        <Circles ruta = './images/barberia.png' Title="Barberia"/>
        <Circles ruta = './images/cabello.png' Title="Estilista"/>
        <Circles ruta = './images/manicura.png' Title="Manicura"/>
        <Circles ruta = './images/maquillaje.png' Title="Maquillaje"/>
        <Circles ruta = './images/masaje.png' Title="Spa"/>
      </div>

      <div className="TableRoyal"> 
       { <RowsCards Name="El Tupé de Tintín" Geo='Escobedo NL' Horarios='09:00 a 16:00'/>   
        /* <RowsCards Name="Razor Edge" Geo='Monterrey NL' Horarios='10:00 a 18:00'/>
        <RowsCards Name="Barba Urbana" Geo='Guadalupe NL' Horarios='13:00 a 20:00'/>
        <RowsCards Name="Modern Fade Studio" Geo='Juarez NL' Horarios='08:00 a 14:00'/>  */}
      </div>
    </div>
  );
}
