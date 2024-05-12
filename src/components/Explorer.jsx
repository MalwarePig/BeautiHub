import { Circles } from "./Circles";
import { RowsCards } from "./RowCards";
import "./../styles/Explorer.css";

export function Explorer() {
  return (
    <div className="FormCategory">
      <h2>Un mundo de estilos</h2>
      <h4>Diviertete, cómo quieres consentirte hoy?</h4>
      <div className="Category">
        <Circles />
        <Circles />
        <Circles />
        <Circles />
        <Circles />
      </div>

      <div className="TableRoyal"> 
        <RowsCards/>   
      </div>
    </div>
  );
}
