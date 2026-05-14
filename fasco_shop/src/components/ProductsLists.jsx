import buttonList1 from "../images/button-list-view.svg";
import buttonList2 from "../images/button-2-column-grid.svg";
import buttonList3 from "../images/button-3-column-grid.svg";
import buttonList4 from "../images/button-5-column-grid.svg";
import buttonList5 from "../images/button-list-view.svg";
import ProductsItems from "./ProductsItems";

export default function ProductsList() {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex justify-between mb-5 w-full items-start'>
        <form method='get'>
          <select className='font-volkhov' name='filter' id='filter'>
            <option value='bestselling'>Best Selling</option>
            <option value='newest'>Newest</option>
            <option value='price-low'>Price: Low to High</option>
            <option value='price-high'>Price: High to Low</option>
          </select>
        </form>
        <div className='flex gap-1'>
          <button>
            <img src={buttonList1} alt='button-list-view' />
          </button>
          <button>
            <img src={buttonList2} alt='button-2-column-grid' />
          </button>
          <button>
            <img src={buttonList3} alt='button-3-column-grid' />
          </button>
          <button>
            <img src={buttonList4} alt='button-4-column-grid' />
          </button>
          <button>
            <img src={buttonList5} alt='button-5-column-grid' />
          </button>
        </div>
      </div>

      <ProductsItems />

      <div>
        <nav className='flex justify-center gap-2 mb-18'>
          <button className='w-11 h-11 rounded-full font-jost bg-white text-black hover:border hover:border-black focus:bg-gray-100'>
            <a href='#'>1</a>
          </button>
          <button className='w-11 h-11 rounded-full font-jost bg-white text-black hover:border hover:border-black focus:bg-gray-100'>
            <a href='#'>2</a>
          </button>
          <button className='w-11 h-11 rounded-full font-jost bg-white text-black hover:border hover:border-black focus:bg-gray-100'>
            <a href='#'>3</a>
          </button>
          <button className='w-11 h-11 rounded-full font-jost bg-white text-black hover:border hover:border-black focus:bg-gray-100'>
            <a href='#'>»</a>
          </button>
        </nav>
      </div>
    </div>
  );
}
