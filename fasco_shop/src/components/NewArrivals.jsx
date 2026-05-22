import newArrivals1 from "../assets/images/arrivals-grid-1.png";
import newArrivals2 from "../assets/images/arrivals-grid-2.png";
import newArrivals3 from "../assets/images/arrivals-grid-3.png";
import newArrivals4 from "../assets/images/arrivals-grid-4.png";
import newArrivals5 from "../assets/images/arrivals-grid-5.png";
import newArrivals6 from "../assets/images/arrivals-grid-6.png";

export default function NewArrivals() {
  return (
    <>
      <main className='max-w-7xl mx-auto mb-37.5'>
        <section className='flex flex-col text-center items-center mb-12'>
          <h2 className='font-volkhov text-dark text-5xl mb-5'>New Arrivals</h2>
          <p className='max-w-153.75 font-poppins text-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </section>

        <section className='flex justify-center gap-8 mb-12'>
          <button className='w-51.25 h-14 bg-[#fafafa] font-poppins text-dark rounded-[10px] hover:text-black btn-active cursor-pointer'>
            Men’s Fashion
          </button>
          <button className='w-51.25 h-14 bg-[#fafafa] font-poppins text-dark rounded-[10px] hover:text-black btn-active cursor-pointer'>
            Women’s Fashion
          </button>
          <button className='w-51.25 h-14 bg-[#fafafa] font-poppins text-dark rounded-[10px] hover:text-black btn-active cursor-pointer'>
            Women Accessories
          </button>
          <button className='w-51.25 h-14 bg-[#fafafa] font-poppins text-dark rounded-[10px] hover:text-black btn-active cursor-pointer'>
            Men Accessories
          </button>
          <button className='w-51.25 h-14 bg-[#fafafa] font-poppins text-dark rounded-[10px] hover:text-black btn-active cursor-pointer'>
            Discount Deals
          </button>
        </section>

        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15'>
          <a href='#'>
            <div className='p-5 bg-white shadow-xl rounded-[10px]'>
              <div className='w-fit mx-auto'>
                <img
                  src={newArrivals1}
                  alt='new-arrivals'
                  className='mx-auto'
                />
                <div className='flex justify-between my-3 font-poppins text-dark'>
                  <div>
                    <h3 className='text-xl font-bold'>Shiny Dress</h3>
                    <p className='text-light text-xs mb-6'>Al Karam</p>
                    <p className='text-xs font-bold mb-6'>
                      (4.1k) Customer Reviews
                    </p>
                    <p className='text-2xl font-bold'>$95.50</p>
                  </div>
                  <div className='flex flex-col justify-between text-right'>
                    <p className='text-amber-500 text-2xl'>★★★★★</p>
                    <p className='text-red-600 text-xs'>Almost Sold Out</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href='#'>
            <div className='p-5 bg-white shadow-xl rounded-[10px]'>
              <div className='w-fit mx-auto'>
                <img
                  src={newArrivals2}
                  alt='new-arrivals'
                  className='mx-auto'
                />
                <div className='flex justify-between my-3 font-poppins text-dark'>
                  <div>
                    <h3 className='text-xl font-bold'>Long Dress</h3>
                    <p className='text-light text-xs mb-6'>Al Karam</p>
                    <p className='text-xs font-bold mb-6'>
                      (4.1k) Customer Reviews
                    </p>
                    <p className='text-2xl font-bold'>$110.50</p>
                  </div>
                  <div className='flex flex-col justify-between text-right'>
                    <p className='text-amber-500 text-2xl'>★★★★★</p>
                    <p className='text-red-600 text-xs'>Almost Sold Out</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href='#'>
            <div className='p-5 bg-white shadow-xl rounded-[10px]'>
              <div className='w-fit mx-auto'>
                <img
                  src={newArrivals3}
                  alt='new-arrivals'
                  className='mx-auto'
                />
                <div className='flex justify-between my-3 font-poppins text-dark'>
                  <div>
                    <h3 className='text-xl font-bold'>Full Sweater</h3>
                    <p className='text-light text-xs mb-6'>Al Karam</p>
                    <p className='text-xs font-bold mb-6'>
                      (4.1k) Customer Reviews
                    </p>
                    <p className='text-2xl font-bold'>$80</p>
                  </div>
                  <div className='flex flex-col justify-between text-right'>
                    <p className='text-amber-500 text-2xl'>★★★★★</p>
                    <p className='text-red-600 text-xs'>Almost Sold Out</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href='#'>
            <div className='p-5 bg-white shadow-xl rounded-[10px]'>
              <div className='w-fit mx-auto'>
                <img
                  src={newArrivals4}
                  alt='new-arrivals'
                  className='mx-auto'
                />
                <div className='flex justify-between my-3 font-poppins text-dark'>
                  <div>
                    <h3 className='text-xl font-bold'>White Dress</h3>
                    <p className='text-light text-xs mb-6'>Al Karam</p>
                    <p className='text-xs font-bold mb-6'>
                      (4.1k) Customer Reviews
                    </p>
                    <p className='text-2xl font-bold'>$75</p>
                  </div>
                  <div className='flex flex-col justify-between text-right'>
                    <p className='text-amber-500 text-2xl'>★★★★★</p>
                    <p className='text-red-600 text-xs'>Almost Sold Out</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href='#'>
            <div className='p-5 bg-white shadow-xl rounded-[10px]'>
              <div className='w-fit mx-auto'>
                <img
                  src={newArrivals5}
                  alt='new-arrivals'
                  className='mx-auto'
                />
                <div className='flex justify-between my-3 font-poppins text-dark'>
                  <div>
                    <h3 className='text-xl font-bold'>Colorful Dress</h3>
                    <p className='text-light text-xs mb-6'>Al Karam</p>
                    <p className='text-xs font-bold mb-6'>
                      (4.1k) Customer Reviews
                    </p>
                    <p className='text-2xl font-bold'>$50.50</p>
                  </div>
                  <div className='flex flex-col justify-between text-right'>
                    <p className='text-amber-500 text-2xl'>★★★★★</p>
                    <p className='text-red-600 text-xs'>Almost Sold Out</p>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href='#'>
            <div className='p-5 bg-white shadow-xl rounded-[10px]'>
              <div className='w-fit mx-auto'>
                <img
                  src={newArrivals6}
                  alt='new-arrivals'
                  className='mx-auto'
                />
                <div className='flex justify-between my-3 font-poppins text-dark'>
                  <div>
                    <h3 className='text-xl font-bold'>White Shirt</h3>
                    <p className='text-light text-xs mb-6'>Al Karam</p>
                    <p className='text-xs font-bold mb-6'>
                      (4.1k) Customer Reviews
                    </p>
                    <p className='text-2xl font-bold'>$45</p>
                  </div>
                  <div className='flex flex-col justify-between text-right'>
                    <p className='text-amber-500 text-2xl'>★★★★★</p>
                    <p className='text-red-600 text-xs'>Almost Sold Out</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </section>

        <button className='font-poppins text-white bg-black py-5 px-16 rounded-[10px] flex justify-center mx-auto mt-12 shadow-2xl cursor-pointer'>
          View More
        </button>
      </main>
    </>
  );
}
