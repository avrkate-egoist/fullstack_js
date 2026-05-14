export default function Advantages() {
  return (
    <div>
      <section className='flex justify-between py-18 flex-wrap gap-6 items-center max-w-7xl mx-auto'>
        <div className='flex gap-4'>
          <img src='src/images/icon-high-quality.svg' alt='high-quality' />
          <div className='font-poppins'>
            <h3 className='text-[20px]'>High Quality</h3>
            <p>Crafted from top materials</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <img
            src='src/images/icon-warrany-protection.svg'
            alt='warrany-protection'
          />
          <div className='font-poppins'>
            <h3 className='text-[20px]'>Warrany Protection</h3>
            <p>Over 2 years</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <img src='src/images/icon-free-shipping.svg' alt='free-shipping' />
          <div className='font-poppins'>
            <h3 className='text-[20px]'>Free Shipping</h3>
            <p>Order over 150 $</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <img src='src/images/icon-support.svg' alt='support' />
          <div className='font-poppins'>
            <h3 className='text-[20px]'>24 / 7 Support</h3>
            <p>Dedicated support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
