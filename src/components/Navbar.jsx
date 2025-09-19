import { NavLink } from 'react-router-dom'


function Navbar(){
      return (
            <nav id="main-nav">
               <div>
                  <div id="logo"> 
                  <img src="https://www.clipartmax.com/png/middle/287-2873763_dog-and-cat-silhouettes-together-svg-png-icon-free-drawing-dog-cat.png" alt="Dog And Cat Silhouettes Together Svg Png Icon Free - Drawing Dog Cat Png@clipartmax.com"/>
                  <h1>Kleintierpraxis - Kammermeier</h1>

                  </div>
                  <div>
                     
                  </div>
                  <ul>
                     <NavLink to="/"> Home  </NavLink>
                     <NavLink to="/praxis" >Praxis </NavLink>
                     <NavLink to="/info" >Info </NavLink>
                  </ul>
               </div>
            </nav>
      )
}

export default Navbar