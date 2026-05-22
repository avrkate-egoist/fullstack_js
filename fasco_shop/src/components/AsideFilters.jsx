import { CirclePicker } from "react-color";

export default function AsideFilters({
  selectedSizes,
  setSelectedSizes,
  selectedColors,
  setSelectedColors,
  selectedPrice,
  setSelectedPrice,
  selectedBrands,
  setSelectedBrands,
  selectedCollections,
  setSelectedCollections,
  selectedTags,
  setSelectedTags,
  setCurrentPage,
}) {
  const toggleFilterArray = (currentArray, setArray, value) => {
    if (currentArray.includes(value)) {
      setArray(currentArray.filter((item) => item !== value));
    } else {
      setArray([...currentArray, value]);
    }

    if (setCurrentPage) {
      setCurrentPage(1);
    }
  };

  const handleColorChange = (color) => {
    toggleFilterArray(selectedColors, setSelectedColors, color.hex);
  };

  const colors = [
    "#000000", // Чорний
    "#f3f4f6", // Білий (з мікро-відтінком, щоб не губився на білому фоні)
    "#6b7280", // Сірий
    "#1d4ed8", // Синій
    "#0ea5e9", // Блакитний
    "#a855f7", // Фіолетовий
    "#ec4899", // Рожевий
    "#ef4444", // Червоний
    "#f97316", // Помаранчевий
    "#facc15", // Жовтий
    "#84cc16", // Салатовий
    "#22c55e", // Зелений
  ];

  const sizes = ["S", "M", "L", "XL"];
  const prices = ["$0-$50", "$50-$100", "$100-$150", "$150-$200", "$300-$400"];
  const brands = ["Minimog", "Retrolie", "Brook", "Learts", "Vagabond", "Abby"];
  const collections = [
    "All products",
    "Best sellers",
    "New arrivals",
    "Accessories",
  ];
  const tags = [
    "Fashion",
    "Hats",
    "Sandal",
    "Belt",
    "Bags",
    "Snacker",
    "Denim",
    "Minimog",
    "Vagabond",
    "Sunglasses",
    "Beachwear",
  ];

  return (
    <section className='mr-3'>
      <aside className='w-[320px] hidden lg:block text-left'>
        <h2 className='text-3xl font-volkhov pb-8'>Filters</h2>

        <section className='mb-7'>
          <h3 className='font-volkhov text-lg pb-6'>Size</h3>
          <div className='font-jost flex flex-wrap gap-3 max-w-40 '>
            {sizes.map((size) => {
              const isSizeSelected = selectedSizes.includes(size);
              return (
                <button
                  key={size}
                  onClick={() =>
                    toggleFilterArray(selectedSizes, setSelectedSizes, size)
                  }
                  className={`w-11 h-11 border text-sm font-medium transition-all duration-200 rounded-sm flex items-center justify-center 
            ${
              isSizeSelected
                ? "bg-black text-white border-black"
                : "bg-white text-black border-2 border-gray-300 hover:border-black"
            }`}>
                  {size}
                </button>
              );
            })}
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
              color={selectedColors[selectedColors.length - 1] || ""}
              onChangeComplete={handleColorChange}
            />
          </div>
        </section>

        <section className='mb-7'>
          <h3 className='font-[Volkhov-Font] text-lg pb-6'>Prices</h3>
          <div className='flex items-start flex-col gap-2.5 font-poppins text-light'>
            {prices.map((price) => (
              <button
                key={price}
                onClick={() =>
                  toggleFilterArray(selectedPrice, setSelectedPrice, price)
                }
                className={`filter-btn text-left  hover:text-black ${selectedPrice.includes(price) ? "text-black font-semibold underline" : ""}`}>
                {price}
              </button>
            ))}
          </div>
        </section>

        <section className='mb-7'>
          <h3 className='font-[Volkhov-Font] text-lg pb-6'>Brands</h3>
          <div className='font-poppins text-light flex flex-wrap gap-3 max-w-50'>
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() =>
                  toggleFilterArray(selectedBrands, setSelectedBrands, brand)
                }
                className={`filter-btn hover:text-black ${selectedBrands.includes(brand) ? "text-black font-semibold underline" : ""}`}>
                {brand}
              </button>
            ))}
          </div>
        </section>

        <section className='mb-7'>
          <h3 className='font-[Volkhov-Font] text-lg pb-6'>Collections</h3>
          <div className='flex items-start flex-col gap-2.5 font-poppins text-light'>
            {collections.map((collection) => (
              <button
                key={collection}
                onClick={() =>
                  toggleFilterArray(
                    selectedCollections,
                    setSelectedCollections,
                    collection,
                  )
                }
                className={`filter-btn text-left hover:text-black ${selectedCollections.includes(collection) ? "text-black font-semibold underline" : ""}`}>
                {collection}
              </button>
            ))}
          </div>
        </section>

        <section className='mb-7'>
          <h3 className='font-[Volkhov-Font] text-lg pb-6'>Tags</h3>
          <div className='font-poppins flex flex-wrap gap-3 text-light'>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  toggleFilterArray(selectedTags, setSelectedTags, tag)
                }
                className={`filter-btn hover:text-black ${selectedTags.includes(tag) ? "text-black font-semibold underline" : ""}`}>
                {tag}
              </button>
            ))}
          </div>
        </section>
      </aside>
    </section>
  );
}
