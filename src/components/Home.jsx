import { NavLink } from "react-router-dom";
import '/src/styles/home.css';
function Home(){
  return(
    <div id="options">
      <NavLink to="/coinflip">
        <h3 className="card">Flip a Coin</h3>
      </NavLink>
      <NavLink to="/armstrong">
        <h3 className="card">Check Armstrong Number</h3>
      </NavLink>
      <NavLink to="/counter">
        <h3 className="card">Count clicks</h3>
      </NavLink>
    </div>

  )
}
export default Home;