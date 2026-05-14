import logo from "../images/fasco-logo.svg";

export default function Header() {
  return (
    <>
      <header className='font-poppins container mx-auto max-w-7xl '>
        <nav className='flex justify-between items-center py-16 text-dark flex-wrap'>
          <button className='md:hidden cursor-pointer' aria-label='menu'>
            {/* <img className='w-8' src='../src/images/icon-burg.svg' alt='menu' /> */}
          </button>
          <a href='homepage.html'>
            <img className='h-10 mr-6' src={logo} alt='fasco-logo' />
          </a>
          <div className='flex justify-between'>
            <div className='hidden md:flex justify-between items-center'>
              <ul className='flex justify-between gap-12 mr-6'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Deals</li>
                <li className='cursor-pointer'>New Arrivals</li>
                <li className='cursor-pointer'>Packages</li>
                <li className='cursor-pointer'>Sign in</li>
              </ul>
            </div>
            <button className='bg-black text-white px-11 py-5 rounded-[10px] shadow-2xl cursor-pointer'>
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
