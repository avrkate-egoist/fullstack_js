import { NavLink } from "react-router";

export default function NavagationFooter() {
  return (
    <ul className='nav-footer'>
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
