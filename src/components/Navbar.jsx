import { NavLink } from "react-router-dom"
import "/src/styles/navbar.css"
function Navbar(){

  return(
    <div id="nav-options">
      <NavLink to="/">
        <h3 id="homelink" className="nav-card">Home</h3>
      </NavLink>
      <NavLink to="/coinflip">
        <h3 className="nav-card">Coin</h3>
      </NavLink>
      <NavLink to="/armstrong">
        <h3 className="nav-card"> Armstrong </h3>
      </NavLink>
      <NavLink to="/counter">
        <h3 className="nav-card">Clicks</h3>
      </NavLink>
    </div>
  )
}

export default Navbar;