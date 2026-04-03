import { NavLink } from 'react-router';
import './../App.css'

function NavBar() {
  return (
    <nav className='navbar'>
        <h1>House of Mud</h1>
      
        <div>
        <NavLink className={'Nav'} to="/Home">Home</NavLink>
        <NavLink className={'Nav'} to="/About">About</NavLink>
        <NavLink className={'Nav'} to="/Contact">Contact</NavLink>
    
        </div>
      
    </nav>
  );
}
export default NavBar;