import {ButtonHome,ButtonExplorer,ButtonFavorite,Separator} from './NavButtons.jsx'

export function App(params) {
  return (
    <div className="Container">
      <div className="NavBar">
        <h2>BeautiHub</h2>
        <ButtonHome/>
        <ButtonExplorer/>
        <ButtonFavorite/>
        <Separator/>
        
      </div>
      <div className="Search">Search</div>
      <div className="Place">Place</div>
    </div>
  );
}





