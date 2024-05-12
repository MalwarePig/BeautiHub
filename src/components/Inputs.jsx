import "./../styles/Inputs.css";
import {
  FaBug,
  FaHouse,
  FaMagnifyingGlassLocation,
  FaHeart,
  FaMagnifyingGlass
} from "react-icons/fa6";

export function InputSearch(props) {
  return (
    <div className="BarSearch">
      <FaMagnifyingGlass />
      <input
        type="text"
        className="inputSearch"
        placeholder=" Barberia, uñas, estilista..."
      />
    </div>
  );
}
