import Modal from "react-modal";

Modal.setAppElement("#modalCart");

export default function CartModal({ isOpen, onClose }) {
  const customStyles = {
    overlay: {
      backgroundColor: "#000000aa",
      zIndex: 100,
    },
    content: {
      top: "0",
      right: "0",
      left: "auto",
      bottom: "0",
      width: "40%",
      minWidth: "340px",
      height: "100vh",
      overflow: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel='Shopping Cart Modal'>
      <div className='font-poppins flex flex-col h-full relative'>
        <button
          onClick={onClose}
          className='absolute top-0 right-0 text-2xl text-gray-500 hover:text-black cursor-pointer'
          aria-label='Close cart'>
          ✕
        </button>

        <div>
          <h1 className='font-volkhov text-3xl'>Shopping Cart</h1>
        </div>

        <div className='grow flex flex-col justify-center items-center text-center py-12'>
          <p className='text-gray-400 text-lg mb-2'>
            Your cart is currently empty.
          </p>
          <p className='text-gray-400 text-sm'>
            Add items to your cart to see them here.
          </p>
        </div>

        <div className='border-t pt-6 mt-6'>
          <button
            onClick={onClose}
            className='w-full bg-black text-white py-4 rounded-[10px]   cursor-pointer hover'>
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    </Modal>
  );
}
