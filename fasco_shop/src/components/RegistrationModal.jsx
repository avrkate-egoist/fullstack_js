import { useState } from "react";
import Modal from "react-modal";
import registrationImg from "../assets/images/registration-img.png";

Modal.setAppElement("#modalRegistration");

export default function RegistrationModal({ isOpen, onClose, onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setUsername("");
      setEmail("");
      setErrors({});
      onLoginSuccess();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      preventScroll={true}
      contentLabel='Registration Form'
      overlayClassName='fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4'
      className='bg-white rounded-[20px] w-full max-w-300 max-h-[calc(100vh-32px)] overflow-y-auto p-6 sm:p-8 md:p-10 outline-none dynamic-modal'>
      <div className='font-poppins relative flex justify-between items-stretch gap-9'>
        <button
          onClick={onClose}
          className='absolute top-0 right-0 text-2xl text-gray-400 hover:text-black cursor-pointer z-10'
          aria-label='Close modal'>
          ✕
        </button>

        <div className='hidden md:block w-1/2'>
          <img
            src={registrationImg}
            alt='registration image'
            className='w-full h-full object-cover rounded-l-lg'
          />
        </div>

        <div className='flex-1 flex flex-col justify-between min-h-87.5 md:min-h-100'>
          <div className='mt-30'>
            <div className='text-2xl font-semibold mb-6 text-center font-volkhov'>
              Sign Up To FASCO
            </div>

            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-7 max-w-md mx-auto w-full'>
              <div className='flex flex-col gap-1'>
                <input
                  type='text'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`border p-3 rounded-lg outline-none ${errors.username ? "border-red-500" : "focus:border-black"}`}
                />
                {errors.username && (
                  <span className='text-red-500 text-xs pl-1'>
                    {errors.username}
                  </span>
                )}
              </div>

              <div className='flex flex-col gap-1'>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border p-3 rounded-lg outline-none ${errors.email ? "border-red-500" : "focus:border-black"}`}
                />
                {errors.email && (
                  <span className='text-red-500 text-xs pl-1'>
                    {errors.email}
                  </span>
                )}
              </div>

              <button
                type='submit'
                className='bg-black text-white p-3 rounded-lg cursor-pointer'>
                Submit
              </button>
            </form>
          </div>
          <p className='text-start mt-6 text-sm text-gray-500 max-w-md mx-auto w-full'>
            FASCO Terms & Conditions
          </p>
        </div>
      </div>
    </Modal>
  );
}
