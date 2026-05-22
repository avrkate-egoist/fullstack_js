import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/images/fasco-logo.svg";
import iconBurg from "../assets/images/icon-burg.svg";
import RegistrationModal from "./RegistrationModal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleOpenModal = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
    navigate("/products");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "New Arrivals", path: "/new-arrivals" },
  ];

  return (
    <>
      <header className='font-poppins container mx-auto max-w-7xl'>
        <nav className='flex justify-between items-center py-16 text-dark flex-wrap'>
          <button className='md:hidden cursor-pointer' aria-label='menu'>
            <img className='w-8' src={iconBurg} alt='menu' />
          </button>

          <Link to='/'>
            <img className='h-10 mr-6' src={logo} alt='fasco-logo' />
          </Link>

          <div className='flex justify-between items-center'>
            <div className='hidden md:flex justify-between items-center'>
              <ul className='flex justify-between gap-12 mr-6'>
                {navLinks.map((page) => (
                  <li key={page.name}>
                    <NavLink
                      to={page.path}
                      className={({ isActive }) =>
                        `block pb-1 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "border-b-2 border-black font-semibold"
                            : "border-b-2 border-transparent hover:border-gray-400"
                        }`
                      }>
                      {page.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleOpenModal}
              className='bg-black text-white px-11 py-5 rounded-[10px] shadow-2xl cursor-pointer min-w-37.5 text-center'>
              {isLoggedIn ? "Sign Out" : "Sign Up"}
            </button>

            <RegistrationModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
