import {ButtonHome,ButtonExplorer,ButtonFavorite,Separator} from './NavButtons.jsx'
import {InputSearch} from './Inputs.jsx';
import {Explorer} from './Explorer.jsx';
import {Favorites} from './Favorites.jsx';

export function App(params) {
  return (
    <div className="Container">
       
      <div className="NavBar">
        <h2 className='Title'>BeautiHub</h2>
        <ButtonHome/>
        <ButtonExplorer/>
        <ButtonFavorite/>
        <Separator/>
        <Favorites  ruta = './images/masaje.png' Title="Spa" SubTitle="Chida"/>
        
      </div>
     
      <div className="Search">
        <InputSearch/>
      </div>

      <div className="Place">
        <Explorer ruta = './images/barberia.png' Title="Barberia" />
      </div>
    </div>
  );
}





