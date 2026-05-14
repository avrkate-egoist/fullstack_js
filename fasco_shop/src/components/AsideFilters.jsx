import { CirclePicker } from "react-color";
import { useState } from "react";

export default function AsideFilters() {
  const [activeColor, setActiveColor] = useState("");
  const handleColorChange = (color) => {
    setActiveColor(color.hex);
  };
  const colors = [
    "#ef4444",
    "#fb923c",
    "#facc15",
    "#84cc16",
    "#22c55e",
    "#10b981",
    "#14b8a6",
    "#0ea5e9",
    "#3b82f6",
    "#6366f1",
    "#8b5cf6",
    "#a855f7",
    "#d946ef",
    "#ec4899",
  ];
  return (
    <>
      <section>
        <aside className='w-[320px] hidden lg:block text-left'>
          <h2 className='text-3xl font-volkhov pb-8'>Filters</h2>

          <section className='mb-7'>
            <h3 className='font-volkhov text-lg pb-6'>Size</h3>
            <div className='font-jost flex flex-wrap gap-3 max-w-40'>
              <button className='size-btn size-btn-active'>S</button>
              <button className='size-btn'>M</button>
              <button className='size-btn'>L</button>
              <button className='size-btn'>XL</button>
            </div>
          </section>

          <section className='mb-7 flex flex-col flex-wrap'>
            <h3 className='font-volkhov text-lg pb-6'>Colors</h3>
            <div className='flex flex-wrap gap-3'>
              <CirclePicker
                width='320px'
                circleSize={30}
                circleSpacing={12}
                colors={colors}
                color={activeColor}
                onChangeComplete={handleColorChange}
              />
            </div>
          </section>

          <section className='mb-7'>
            <h3 className='font-[Volkhov-Font] text-lg pb-6'>Prices</h3>
            <div className='flex items-start flex-col gap-2.5 font-poppins text-light'>
              <button className='filter-btn focus:text-black'>$0-$50</button>
              <button className='filter-btn focus:text-black'>$50-$100</button>
              <button className='filter-btn focus:text-black'>$100-$150</button>
              <button className='filter-btn focus:text-black'>$150-$200</button>
              <button className='filter-btn focus:text-black'>$300-$400</button>
            </div>
          </section>

          <section className='mb-7'>
            <h3 className='font-[Volkhov-Font] text-lg pb-6'>Brands</h3>
            <div className='font-poppins text-light flex flex-wrap gap-3 max-w-50'>
              <button className='filter-btn focus:text-black'>Minimog</button>
              <button className='filter-btn focus:text-black'>Retrolie</button>
              <button className='filter-btn focus:text-black'>Brook</button>
              <button className='filter-btn focus:text-black'>Learts</button>
              <button className='filter-btn focus:text-black'>Vagabond</button>
              <button className='filter-btn focus:text-black'>Abby</button>
            </div>
          </section>

          <section className='mb-7'>
            <h3 className='font-[Volkhov-Font] text-lg pb-6'>Collections</h3>
            <div className='flex items-start flex-col gap-2.5 font-poppins text-light'>
              <button className='filter-btn focus:text-black'>
                All products
              </button>
              <button className='filter-btn focus:text-black'>
                Best sellers
              </button>
              <button className='filter-btn focus:text-black'>
                New arrivals
              </button>
              <button className='filter-btn focus:text-black'>
                Accessories
              </button>
            </div>
          </section>

          <section className='mb-7'>
            <h3 className='font-[Volkhov-Font] text-lg pb-6'>Brands</h3>
            <div className='font-poppins text-light flex flex-wrap gap-3'>
              <button className='filter-btn focus:text-black'>Tags</button>
              <button className='filter-btn focus:text-black'>Hats</button>
              <button className='filter-btn focus:text-black'>Sandal</button>
              <button className='filter-btn focus:text-black'>Belt</button>
              <button className='filter-btn focus:text-black'>Bags</button>
              <button className='filter-btn focus:text-black'>Snacker</button>
              <button className='filter-btn focus:text-black'>Denim</button>
              <button className='filter-btn focus:text-black'>Minimog</button>
              <button className='filter-btn focus:text-black'>Vagabond</button>
              <button className='filter-btn focus:text-black'>
                Sunglasses
              </button>
              <button className='filter-btn focus:text-black'>Beachwear</button>
            </div>
          </section>
        </aside>
      </section>
    </>
  );
}
