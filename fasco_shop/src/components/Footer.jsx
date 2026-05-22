import { Link, NavLink } from "react-router";
import logo from "../assets/images/fasco-logo.svg";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <>
      <hr className='border-t-2 border-gray-300 mb-8' />

      <footer className='container mx-auto max-w-7xl font-poppins text-dark'>
        <div className='flex justify-between flex-wrap items-center'>
          <Link to='/'>
            <img className='h-8 mb-8 mr-8' src={logo} alt='fasco-logo' />
          </Link>

          <nav>
            <ul className='flex gap-17.5 mb-8'>
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block pb-1 transition-all duration-200 cursor-pointer border-b-2 ${
                        isActive
                          ? "border-black font-semibold"
                          : "border-transparent hover:border-gray-400 text-gray-600 hover:text-black"
                      }`
                    }>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className='mb-5 mt-12 text-xs flex justify-center'>
          Copyright © FASCO. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
