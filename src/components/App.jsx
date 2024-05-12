import {ButtonHome,ButtonExplorer,ButtonFavorite,Separator} from './NavButtons.jsx'
import {InputSearch} from './Inputs.jsx';
import {Explorer} from './Explorer.jsx';

export function App(params) {
  return (
    <div className="Container">
       
      <div className="NavBar">
        <h2 className='Title'>BeautiHub</h2>
        <ButtonHome/>
        <ButtonExplorer/>
        <ButtonFavorite/>
        <Separator/>
      </div>
     
      <div className="Search">
        <InputSearch/>
      </div>

      <div className="Place">
        <Explorer/>
      </div>
    </div>
  );
}





