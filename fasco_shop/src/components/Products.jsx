import AsideFilters from "./AsideFilters";
import ProductsList from "./ProductsLists";
import NewCollectionAdv from "./NewCollectionAdv";
import Advantages from "./Advantages";
import FollowInstagram from "./FollowInstagram";
import Form from "./Form";

export default function Products() {
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
      <div className='container mx-auto max-w-7xl flex'>
        <AsideFilters />
        <ProductsList />
      </div>
      <NewCollectionAdv />
      <Advantages />
      <FollowInstagram />
      <Form />
    </>
  );
}
