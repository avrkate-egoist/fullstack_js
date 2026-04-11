import { NavLink } from "react-router";

export default function NavigationMenu() {
  return (
    <ul className='nav-menu'>
      <li>
        <NavLink to='/'>HOME</NavLink>
      </li>
      <li>
        <NavLink to='/about'>ABOUT</NavLink>
      </li>
      <li>
        <NavLink to='/contacts'>CONTACTS</NavLink>{" "}
      </li>
    </ul>
  );
}
