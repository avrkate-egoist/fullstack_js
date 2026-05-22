import { useState } from "react";
import iconBag from "../assets/images/icon-bag.svg";
import iconScroll from "../assets/images/icon-scroll.svg";
import CartModal from "./CartModal";

export default function FloatingActions() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className='fixed bottom-6 right-6 z-50 flex flex-col gap-3'>
        <button
          onClick={openCart}
          className='shadow-lg cursor-pointer flex items-center justify-center'
          aria-label='Open Cart'>
          <img src={iconBag} alt='cart-icon' className='w-15 h-15' />
        </button>

        <button
          onClick={scrollToTop}
          className='rounded-full shadow-lg cursor-pointer flex items-center justify-center'
          aria-label='Scroll to top'>
          <img src={iconScroll} alt='scroll-up-icon' className='w-15 h-15' />
        </button>
      </div>

      <CartModal isOpen={isCartOpen} onClose={closeCart} />
    </>
  );
}
