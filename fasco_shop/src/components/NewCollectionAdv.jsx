export default function NewCollectionAdv() {
  return (
    <div>
      <section className='bg-style bg-no-repeat bg-center bg-cover max-w-480 mx-auto flex items-center justify-center xl: flex-wrap'>
        <div>
          <img src='src/images/bg-style-girl.png' alt='style-girl' />
        </div>

        <div className='font-poppins space-y-5 max-w-117.5 p-5 bg-white xl:bg-transparent'>
          <p className='text-[#767676]'>Women Collection</p>
          <h2 className='font-volkhov text-dark text-5xl'>Peaky Blinders</h2>
          <p className='underline decoration-solid'>DESCRIPTION</p>
          <p className='text-[#767676]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Scelerisque duis.
          </p>
          <div className='flex items-center gap-4'>
            <p className='text-[#767676]'>Size:</p>
            <button className='text-white bg-black px-5 py-1.5 rounded-[10px]'>
              M
            </button>
          </div>
          <p className='text-[28px]'>$100.00</p>
          <button className='text-white bg-black px-17.5 py-5 rounded-[10px] cursor-pointer shadow-2xl'>
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
}
