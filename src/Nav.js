import './App.css';
import {NavLink} from 'react-router-dom';
function Nav() {
  return (
    <div className="nav-style">
      <h3> Logo </h3>
      <ul className="link-style">
          <li> <NavLink 
          style={({ isActive })=>{
            return {
                fontWeight : isActive ? 900 : "normal"
            }
          }} 
          to="/">Home</NavLink> </li>
          <li><NavLink
           style={({ isActive })=>{
            return {
                fontWeight : isActive ? 900 : "normal"
            }
          }} 
           to="/about" >About Us</NavLink> </li>
          <li><NavLink 
          style={({ isActive })=>{
            return {
                fontWeight : isActive ? 900 : "normal"
            }
          }} 
          to="/contactus" >Contactus Us</NavLink> </li>
      </ul>
    </div>
  );
}

export default Nav;
