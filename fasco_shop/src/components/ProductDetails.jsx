import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { getProducts } from "../services/productsService";

import iconEye from "../assets/images/icon-eye.svg";
import iconPlus from "../assets/images/plus.svg";
import iconMinus from "../assets/images/minus.svg";
import iconCompare from "../assets/images/icon-compare.svg";
import iconAskQuestion from "../assets/images/icon-ask-a-question.svg";
import iconShare from "../assets/images/icon-share.svg";
import iconDelivery from "../assets/images/icon-delivery.svg";
import iconShippingReturn from "../assets/images/icon-shipping-return.svg";
import iconBankCard from "../assets/images/bank-card.png";

export default function ProductDetails() {
  const { productId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const activeColor = searchParams.get("color") || "";

  useEffect(() => {
    async function loadProduct() {
      try {
        setIsLoading(true);
        const allProducts = await getProducts();

        const foundProduct = allProducts.find(
          (p) => p.id === Number(productId),
        );

        if (foundProduct) {
          setProduct(foundProduct);

          if (!selectedSize && foundProduct.sizes?.length > 0) {
            setSelectedSize(foundProduct.sizes[0]);
          }

          if (!searchParams.get("color") && foundProduct.colors?.length > 0) {
            setSearchParams(
              { color: foundProduct.colors[0].hex },
              { preventScrollReset: true },
            );
          }
        }
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProduct();
  }, [productId, searchParams, setSearchParams, selectedSize]);

  if (isLoading) {
    return (
      <div className='text-center py-20 font-volkhov text-xl'>
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className='text-center py-20 font-volkhov text-xl'>
        Product not found...
      </div>
    );
  }

  const hasDiscount = product.discount !== null && product.discount > 0;
  const oldPrice = hasDiscount
    ? product.price / (1 - product.discount / 100)
    : null;

  const currentMainImage =
    product.imagesByColor?.[activeColor] ||
    product.imagesByColor?.[product.colors[0]?.hex];

  const activeColorName =
    product.colors.find((c) => c.hex === activeColor)?.name || activeColor;

  return (
    <>
      <section className='mx-auto max-w-7xl flex justify-between gap-20 pb-10 px-4'>
        <div className='flex gap-6'>
          <div className='flex flex-col w-14 gap-4 pt-2'>
            {product.colors.map((colorObj) => {
              const isThumbActive = activeColor === colorObj.hex;
              return (
                <button
                  key={colorObj.hex}
                  onClick={() =>
                    setSearchParams(
                      { color: colorObj.hex },
                      { preventScrollReset: true },
                    )
                  }
                  className={`cursor-pointer transition-all ${
                    isThumbActive ? "scale-120" : "hover:scale-105"
                  }`}>
                  <img
                    src={product.imagesByColor[colorObj.hex]}
                    alt={`${product.name} color preview`}
                    className='w-full h-full object-cover'
                  />
                </button>
              );
            })}
          </div>

          <div
            onClick={() =>
              setSearchParams(
                { color: activeColor },
                { preventScrollReset: true },
              )
            }
            className='h-137.5 overflow-hidden flex bg-[#f8f8f8]  cursor-pointer'>
            <img
              src={currentMainImage}
              alt={product.name}
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        <div className='flex-1 text-left'>
          <div>
            <p className='text-light text-[12px] font-volkhov mb-3 uppercase tracking-wider'>
              {product.brand}
            </p>
            <h2 className='text-3xl font-volkhov text-gray-900 mb-1'>
              {product.name}
            </h2>
            <p className='font-jost text-black mb-5'>
              {"★".repeat(Math.floor(product.rating))}☆ ({product.rating})
            </p>
          </div>

          <div className='flex items-center gap-3 mb-9'>
            <p className='font-volkhov text-2xl text-black'>
              ${product.price.toFixed(2)}
            </p>
            {oldPrice && (
              <p className='line-through text-light font-jost'>
                ${oldPrice.toFixed(2)}
              </p>
            )}
            {hasDiscount && (
              <p className='font-jost bg-[#DA3F3F] text-white text-xs rounded-full px-2 py-1'>
                Save {product.discount}%
              </p>
            )}
          </div>

          <div className='flex items-center gap-2 font-poppins text-light mb-8 text-sm'>
            <img src={iconEye} alt='icon-eye' className='w-4 h-4' />
            <p>24 people are viewing this right now</p>
          </div>

          <div className='flex items-center justify-between bg-[#FDEFEE] p-4 gap-4 flex-wrap mb-7.5 rounded-md'>
            <h2 className='text-[#FF706B] font-volkhov text-lg font-medium'>
              Hurry up! Sale ends in:
            </h2>
            <div className='flex items-center gap-4 text-[#FF706B] font-jost text-xl font-bold'>
              <div>02</div>
              <span>:</span>
              <div>14</div>
              <span>:</span>
              <div>35</div>
              <span>:</span>
              <div>42</div>
            </div>
          </div>

          <div className='mb-7.5'>
            <p className='font-jost text-light mb-3.25 text-sm'>
              {product.countInStock > 0 ? (
                <>
                  Only <strong>{product.countInStock}</strong> item(s) left in
                  stock!
                </>
              ) : (
                <span className='text-red-500 font-bold'>SOLD OUT</span>
              )}
            </p>

            <div className='w-full h-1 bg-gray-300 rounded overflow-hidden'>
              <div
                className='h-full rounded bg-[#EF2D2D] transition-all duration-500'
                style={{
                  width: `${Math.min(product.countInStock, 100)}%`,
                }}></div>
            </div>
          </div>

          <div className='mb-5'>
            <h3 className='font-volkhov font-bold pb-4'>
              Color:{" "}
              <span className='font-normal text-black'>{activeColorName}</span>
            </h3>
            <form className='flex gap-3' onSubmit={(e) => e.preventDefault()}>
              {product.colors.map((colorObj) => (
                <label key={colorObj.hex} className='cursor-pointer'>
                  <input
                    type='radio'
                    name='color'
                    value={colorObj.hex}
                    className='hidden peer'
                    checked={activeColor === colorObj.hex}
                    onChange={() =>
                      setSearchParams(
                        { color: colorObj.hex },
                        { preventScrollReset: true },
                      )
                    }
                  />
                  <span
                    style={{ backgroundColor: colorObj.hex }}
                    className={`product-item-color-filter block transition-transform ${
                      activeColor === colorObj.hex
                        ? "scale-110"
                        : "hover:scale-110"
                    }`}></span>
                </label>
              ))}
            </form>
          </div>

          <div className='mb-5'>
            <h3 className='font-volkhov font-bold pb-4'>
              Size: {selectedSize}
            </h3>
            <div className='font-jost flex gap-3'>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`product-size-btn ${
                    selectedSize === size ? "product-size-btn-active" : ""
                  }`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className='mb-16'>
            <h3 className='font-volkhov font-bold pb-3'>Quantity</h3>
            <div className='flex items-center gap-8'>
              <div className='flex items-center rounded-md border border-gray-300 gap-4 bg-white'>
                <button className='cursor-pointer py-3 px-4 text-gray-500 hover:text-black transition-colors'>
                  <img src={iconMinus} alt='minus' />
                </button>
                <p className='font-jost py-3 text-sm font-medium text-gray-900'>
                  1
                </p>
                <button className='cursor-pointer py-3 px-5 text-gray-500 hover:text-black transition-colors'>
                  <img src={iconPlus} alt='plus' />
                </button>
              </div>
              <div className='flex-1'>
                <button
                  disabled={product.countInStock === 0}
                  className={`border border-black w-full py-3 rounded-md font-volkhov transition-all ${
                    product.countInStock === 0
                      ? "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                      : "cursor-pointer bg-transparent text-black hover:bg-black hover:text-white"
                  }`}>
                  {product.countInStock === 0 ? "Out of Stock" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>

          <div className='flex items-center gap-9 font-jost mb-5 text-gray-700'>
            <div className='flex gap-2 items-center cursor-pointer hover:opacity-50 transition-opacity'>
              <img src={iconCompare} alt='compare' />
              <p>Compare</p>
            </div>
            <div className='flex gap-2 items-center cursor-pointer hover:opacity-50 transition-opacity'>
              <img src={iconAskQuestion} alt='ask-a-question' />
              <p>Ask a question</p>
            </div>
            <div className='flex gap-2 items-center cursor-pointer hover:opacity-50 transition-opacity'>
              <img src={iconShare} alt='share' />
              <p>Share</p>
            </div>
          </div>
          <hr className='border-gray-300 mb-8' />

          <div className='flex items-center gap-2 mb-2.5 text-sm text-gray-800'>
            <img src={iconDelivery} alt='delivery' />
            <p className='font-volkhov font-bold'>Estimated Delivery:</p>
            <p className='font-jost'>2 - 5 business days</p>
          </div>
          <div className='flex items-center gap-2 mb-8 text-sm text-gray-800'>
            <img src={iconShippingReturn} alt='shipping-return' />
            <p className='font-volkhov font-bold'>Free Shipping & Returns:</p>
            <p className='font-jost'>On all orders over $75</p>
          </div>

          <div className='flex flex-col items-center bg-[#F8F8F8] py-5 gap-5 mb-14 rounded-md border border-gray-50'>
            <img src={iconBankCard} alt='bank-card' />
            <p className='font-volkhov text-sm text-gray-700'>
              Guarantee safe & secure checkout
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
