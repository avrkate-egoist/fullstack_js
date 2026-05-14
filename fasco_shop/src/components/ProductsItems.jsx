import roundedHat from "../images/rounded-hat.png";
import linenBlendShirt from "../images/linen-blend-shirt.png";
import longSleeveCoat from "../images/long-sleeve-coat.png";
import BoxyDenimHat from "../images/boxy-denim-hat.png";
import LinenPlainTop from "../images/linen-plain-top.png";
import OversizedTShirt from "../images/oversized-t-shirt.png";
import shirt from "../images/shirt.png";
import rockstarJacket from "../images/rockstar-jacket.png";
import dottedBlackDress from "../images/dotted-black-dress.png";

export default function ProductsItems() {
  return (
    <div>
      <section className='grid grid-cols-3 gap-7 mb-20'>
        <article>
          <div className='relative'>
            <img className='mb-5 w-full' src={roundedHat} alt='rounded-hat' />
          </div>
          <h3 className='mb-1 font-volkhov'>Rounded Hat</h3>
          <p className='mb-5 font-jost'>$8.00</p>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='red'
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-red-600 item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='black'
                className='hidden peer'
              />
              <span className='bg-black item-color-filter'></span>
            </label>
          </form>
        </article>

        <article>
          <div className='relative'>
            <img
              className='mb-5 w-full'
              src={linenBlendShirt}
              alt='linen-blend-shirt'
            />
            <div className='absolute flex items-center justify-center inset-0'>
              <p className='sold-out'>
                SOLD <br />
                OUT
              </p>
            </div>
          </div>
          <h3 className='mb-1 font-volkhov'>Linen-blend Shirt</h3>
          <p className='mb-5 font-jost'>$17.00</p>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='black'
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-black item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='yellow'
                className='hidden peer'
              />
              <span className='bg-orange-400 item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='blue'
                className='hidden peer'
              />
              <span className='bg-sky-400 item-color-filter'></span>
            </label>
          </form>
        </article>

        <article>
          <div className='relative'>
            <img
              className='mb-5 w-full'
              src={longSleeveCoat}
              alt='long-sleeve-coat'
            />
          </div>
          <h3 className='mb-1 font-volkhov'>long-sleeve-coat</h3>
          <p className='mb-5 font-jost'>$106.00</p>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='black'
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-black item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='amber'
                className='hidden peer'
              />
              <span className='bg-amber-50 item-color-filter'></span>
            </label>
          </form>
        </article>

        <article>
          <div className='relative'>
            <img
              className='mb-5 w-full'
              src={BoxyDenimHat}
              alt='boxy-denim-hat'
            />
          </div>
          <h3 className='mb-1 font-volkhov'>Boxy Denim Hat</h3>
          <p className='mb-5 font-jost'>$25.00</p>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='blue'
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-blue-800 item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='red'
                className='hidden peer'
              />
              <span className='bg-red-500 item-color-filter'></span>
            </label>
          </form>
        </article>

        <article>
          <div className='relative'>
            <img
              className='mb-5 w-full'
              src={LinenPlainTop}
              alt='linen-plain-top'
            />
          </div>
          <h3 className='mb-1 font-volkhov'>Linen Plain Top</h3>
          <p className='mb-5 font-jost'>$25.00</p>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='black'
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-black item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='emerald'
                className='hidden peer'
              />
              <span className='bg-emerald-800 item-color-filter'></span>
            </label>
          </form>
        </article>

        <article>
          <div className='relative'>
            <img
              className='mb-5 w-full'
              src={OversizedTShirt}
              alt='oversized-t-shirt'
            />
          </div>
          <h3 className='mb-1 font-volkhov'>Oversized T-shirt</h3>
          <p className='mb-5 font-jost'>$8.00</p>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='red'
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-red-600 item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='black'
                className='hidden peer'
              />
              <span className='bg-black item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='lime'
                className='hidden peer'
              />
              <span className='bg-lime-500 item-color-filter'></span>
            </label>
          </form>
        </article>

        <article>
          <div className='relative'>
            <img className='mb-5 w-full' src={shirt} alt='rounded-hat' />
          </div>
          <h3 className='mb-1 font-volkhov'>Shirt</h3>
          <div className='flex gap-3'>
            <p className='mb-5 font-jost'>$18.00</p>
            <p className='mb-5 font-jost text-light line-through'>$21.00</p>
          </div>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='grid'
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-[url(./images/squares-texture.svg)] item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='black'
                className='hidden peer'
              />
              <span className='bg-black item-color-filter'></span>
            </label>
          </form>
        </article>

        <article>
          <div className='relative'>
            <img
              className='mb-5 w-full'
              src={rockstarJacket}
              alt='rockstar-jacket'
            />
          </div>
          <h3 className='mb-1 font-volkhov'>Rockstar Jacket</h3>
          <p className='mb-5 font-jost'>$22.00</p>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='black'
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-black item-color-filter'></span>
            </label>
          </form>
        </article>

        <article>
          <div className='relative'>
            <img
              className='mb-5 w-full'
              src={dottedBlackDress}
              alt='dotted-black-dress'
            />
          </div>
          <h3 className='mb-1 font-volkhov'>Dotted Black Dress</h3>
          <p className='mb-5 font-jost'>$20.00</p>
          <form className='flex gap-3'>
            <label>
              <input
                type='radio'
                name='color'
                value='black  '
                className='hidden peer'
                defaultChecked
              />
              <span className='bg-black item-color-filter'></span>
            </label>
            <label>
              <input
                type='radio'
                name='color'
                value='black'
                className='hidden peer'
              />
              <span className='bg-amber-50 item-color-filter'></span>
            </label>
          </form>
        </article>
      </section>
    </div>
  );
}
