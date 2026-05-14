import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const handleShowToast = () => {
    toast.success("Subscription to news is completed!");
  };
  return (
    <div>
      <section className='mx-auto flex items-center text-center justify-center font-poppins mb-12 gap-8'>
        <div className='hidden md:block'>
          <img src='src/images/newsletter-men.png' alt='newsletter' />
        </div>

        <div className='flex flex-col'>
          <h2 className='font-volkhov text-5xl text-dark mb-5'>
            Subscribe To Our Newsletter
          </h2>
          <p className='text-light max-w-153.75 mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
          <input
            type='email'
            placeholder='michael@ymail.com'
            className='text-[22px] px-9 py-7 focus:outline-none focus:ring-2 focus:ring-gray-400'
            required
          />
          <div className='bg-linear-to-b from-[#f2f2f2] to-transparent py-8'>
            <button
              onClick={handleShowToast}
              className='text-white bg-black px-11 py-5 rounded-[10px] shadow-2xl'>
              Subscribe Now
            </button>
            <ToastContainer
              position='bottom-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
          </div>
        </div>
        <div className='hidden md:block'>
          <img src='src/images/Newsletter-women.png' alt='newsletter' />
        </div>
      </section>
    </div>
  );
}
