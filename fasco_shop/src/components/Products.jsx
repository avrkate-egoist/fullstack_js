import { useEffect, useState, useRef, useMemo } from "react";
import { getProducts } from "../services/productsService";
import ProductCard from "./ProductCard";
import AsideFilters from "./AsideFilters";
import NewCollectionAdv from "./NewCollectionAdv";
import Advantages from "./Advantages";
import FollowInstagram from "./FollowInstagram";
import Form from "./Form";

import buttonList from "../assets/images/button-list-view.svg";
import buttonGrid from "../assets/images/button-3-column-grid.svg";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  const [sortBy, setSortBy] = useState("newest");

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const productsTopRef = useRef(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const processedProducts = useMemo(() => {
    let result = products.filter((product) => {
      if (
        selectedSizes.length > 0 &&
        !selectedSizes.some((size) => product.sizes?.includes(size))
      )
        return false;

      if (
        selectedColors.length > 0 &&
        !selectedColors.some((color) => product.colors?.includes(color))
      )
        return false;

      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand))
        return false;

      if (
        selectedCollections.length > 0 &&
        !selectedCollections.includes("All products") &&
        !selectedCollections.includes(product.collection)
      )
        return false;

      if (
        selectedTags.length > 0 &&
        !selectedTags.some((tag) => product.tags?.includes(tag))
      )
        return false;

      if (selectedPrice.length > 0) {
        const price = product.price;
        const matchPrice = selectedPrice.some((range) => {
          if (range === "$0-$50" && price >= 0 && price <= 50) return true;
          if (range === "$50-$100" && price >= 50 && price <= 100) return true;
          if (range === "$100-$150" && price >= 100 && price <= 150)
            return true;
          if (range === "$150-$200" && price >= 150 && price <= 200)
            return true;
          if (range === "$300-$400" && price >= 300 && price <= 400)
            return true;
          return false;
        });
        if (!matchPrice) return false;
      }

      return true;
    });

    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "newest":
          return new Date(b.date) - new Date(a.date);
        case "bestselling":
        default:
          return (b.rating ) - (a.rating);
      }
    });
  }, [
    products,
    selectedSizes,
    selectedColors,
    selectedBrands,
    selectedCollections,
    selectedTags,
    selectedPrice,
    sortBy,
  ]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = processedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(processedProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    productsTopRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className='mx-auto max-w-7xl text-center pb-24'>
        <h1 className='text-5xl pb-5 font-volkhov'>Fashion</h1>
        <div className='text-base flex justify-center gap-4 font-jost'>
          <a href='index.html'>Home</a>
          <span>&gt;</span>
          <a href='#'>Fashion</a>
        </div>
      </div>

      <div
        ref={productsTopRef}
        className='container mx-auto max-w-7xl flex scroll-mt-6'>
        <AsideFilters
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedCollections={selectedCollections}
          setSelectedCollections={setSelectedCollections}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          setCurrentPage={setCurrentPage}
        />

        <div className='flex flex-col w-full'>
          <div className='flex justify-between mb-5 w-full items-start'>
            <div>
              <select
                className='font-volkhov bg-transparent border-none outline-none cursor-pointer'
                name='filter'
                id='filter'
                value={sortBy}
                onChange={handleSortChange}>
                <option value='bestselling'>Best Selling</option>
                <option value='newest'>Newest</option>
                <option value='price-low'>Price: Low to High</option>
                <option value='price-high'>Price: High to Low</option>
              </select>
            </div>

            <div className='flex gap-1'>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1 rounded ${viewMode === "list" ? "bg-gray-100" : ""}`}>
                <img
                  className='cursor-pointer'
                  src={buttonList}
                  alt='button-list-view'
                />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1 rounded ${viewMode === "grid" ? "bg-gray-100" : ""}`}>
                <img
                  className='cursor-pointer'
                  src={buttonGrid}
                  alt='button-3-column-grid'
                />
              </button>
            </div>
          </div>

          {loading ? (
            <div className='text-center py-10 font-jost'>
              Loading products...
            </div>
          ) : currentProducts.length === 0 ? (
            <div className='text-center py-10 font-jost text-gray-400'>
              No products found with active filters.
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-3 gap-x-7 gap-y-15 mb-15"
                  : "flex flex-col gap-6 mb-10"
              }>
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav className='flex justify-center gap-2 mb-18'>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`w-11 h-11 rounded-full font-jost transition-all duration-200 ${
                    currentPage === index + 1
                      ? "bg-black text-white border border-black"
                      : "bg-white text-black border border-transparent hover:border-black focus:bg-gray-100"
                  }`}>
                  {index + 1}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>

      <NewCollectionAdv />
      <Advantages />
      <FollowInstagram />
      <Form />
    </>
  );
}
