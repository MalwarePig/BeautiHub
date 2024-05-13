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
        <RowsCards Name="El Tupé de Tintín"/>   
        <RowsCards Name="Razor Edge"/>
        <RowsCards Name="Barba Urbana"/>
        <RowsCards Name="Modern Fade Studio"/> 
      </div>
    </div>
  );
}
