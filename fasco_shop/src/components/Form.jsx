import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsletterMen from "../assets/images/newsletter-men.png";
import NewsletterWoman from "../assets/images/Newsletter-women.png";

export default function Form() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Будь ласка, введіть вашу електронну адресу!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(
        "Будь ласка, введіть коректний email (наприклад, michael@ymail.com)!",
      );
      return;
    }

    toast.success("Subscription to news is completed!");
    setEmail("");
  };

  return (
    <div>
      <section className='mx-auto flex items-center text-center justify-center font-poppins mb-12 gap-8 mt-34.5'>
        <div className='hidden md:block'>
          <img src={NewsletterMen} alt='newsletter' />
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col' noValidate>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='text-[22px] px-9 py-7 focus:outline-none focus:ring-2 focus:ring-gray-400'
          />
          <div className='bg-linear-to-b from-[#f2f2f2] to-transparent py-8'>
            <button
              type='submit'
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
        </form>

        <div className='hidden md:block'>
          <img src={NewsletterWoman} alt='newsletter' />
        </div>
      </section>
    </div>
  );
}
