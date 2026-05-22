import { Link } from "react-router";

export default function ProductCard({ product, viewMode }) {
  const {
    id,
    name,
    imageUrl,
    price,
    discount,
    countInStock,
    colors,
    imagesByColor,
  } = product;

  const isSoldOut = countInStock === 0;
  const hasDiscount = discount !== null && discount > 0;
  const oldPrice = hasDiscount ? price + price * (discount / 100) : null;

  const isList = viewMode === "list";

  const defaultHex = colors?.[0]?.hex || "";

  const displayImage = imagesByColor?.[defaultHex] || imageUrl;

  return (
    <article
      className={`w-full transition-all ${isList ? "flex gap-6 items-center border-b pb-6 border-gray-100" : "flex flex-col"}`}>
      <Link
        to={`/products/${id}?color=${encodeURIComponent(defaultHex)}`}
        className={`relative overflow-hidden block ${isList ? "h-48 shrink-0" : "w-full mb-5"}`}>
        <img
          className='w-full h-full object-cover mix-blend-multiply'
          src={displayImage}
          alt={name}
        />

        {isSoldOut && (
          <div className='absolute flex items-center justify-center inset-0 bg-black/5'>
            <div className='absolute flex items-center justify-center inset-0'>
              <p className='sold-out'>
                SOLD <br />
                OUT
              </p>
            </div>
          </div>
        )}
      </Link>

      <div className='flex-1'>
        <Link to={`/products/${id}?color=${encodeURIComponent(defaultHex)}`}>
          <h3 className='mb-1 font-volkhov text-lg hover:text-gray-700 transition-colors'>
            {name}
          </h3>
        </Link>

        <div className='flex gap-3 items-center mb-4'>
          <p className='font-jost font-medium text-black'>
            ${price.toFixed(2)}
          </p>
          {oldPrice && (
            <p className='font-jost text-gray-400 line-through text-sm'>
              ${oldPrice.toFixed(2)}
            </p>
          )}
        </div>

        <div className='flex gap-2' onClick={(e) => e.stopPropagation()}>
          {colors.map((colorObj, index) => {
            const isDefaultActive = index === 0;

            return (
              <Link
                key={`${id}-color-${index}`}
                to={`/products/${id}?color=${encodeURIComponent(colorObj.hex)}`}
                style={{ backgroundColor: colorObj.hex }}
                className={`block w-7 h-7 rounded-full box-border transition-all mr-1 hover:scale-110 ${
                  isDefaultActive
                    ? "border-4 border-white ring-1 ring-black"
                    : "border border-gray-200"
                }`}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
