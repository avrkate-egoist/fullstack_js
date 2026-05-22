import saleLeftPhoto from "../assets/images/sale-left.png";
import saleRightPhoto from "../assets/images/sale-right.png";
import saleTopPhoto from "../assets/images/sale-top.png";
import saleBottomPhoto from "../assets/images/sale-bottom.png";
import saleUltimatePhoto from "../assets/images/ultimate-sale.svg";

import { Link } from "react-router";

export default function UltimateSale() {
  const newArrivalsLink = { name: "New Arrivals", path: "/new-arrivals" };

  return (
    <>
      <section className='max-w-7xl mx-auto flex justify-center md:justify-between gap-2'>
        <div className='hidden md:block'>
          <img src={saleLeftPhoto} alt='sale-left-photo' />
        </div>
        <div className='flex flex-col justify-between text-center items-center gap-2'>
          <img src={saleTopPhoto} alt='sale-top-photo' />
          <img src={saleUltimatePhoto} alt='ultimate-sale' />
          <p className='font-poppins text-dark text-xl tracking-widest'>
            NEW COLLECTION
          </p>

          <Link
            to={newArrivalsLink.path}
            className='bg-black text-white w-52 h-12 rounded-[10px] cursor-pointer flex items-center justify-center font-medium'>
            SHOP NOW
          </Link>

          <img src={saleBottomPhoto} alt='sale-bottom-photo' />
        </div>
        <div className='hidden md:block'>
          <img src={saleRightPhoto} alt='sale-right-photo' />
        </div>
      </section>
    </>
  );
}
