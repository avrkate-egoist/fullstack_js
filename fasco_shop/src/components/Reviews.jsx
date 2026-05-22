import { useState } from "react";

import response1 from "../assets/images/response-1.png";
import response2 from "../assets/images/response-2.png";
import response3 from "../assets/images/response-3.png";
import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";

export default function Reviews() {
  const reviewData = [
    {
      src: response1,
      text: '"Items That I ordered were the best investment I ever made. I can\'t say enough about your quality service."',
      name: "Suzan B.",
      role: "UI Designer",
    },
    {
      src: response2,
      text: '"You won\'t regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"',
      name: "James K.",
      role: "Traveler",
    },
    {
      src: response3,
      text: '"Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great."',
      name: "Megen W.",
      role: "Marketer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviewData.length) % reviewData.length,
    );
  };

  const getReviewIndex = (offset) => {
    return (currentIndex + offset + reviewData.length) % reviewData.length;
  };

  const leftReview = reviewData[getReviewIndex(-1)];
  const centerReview = reviewData[getReviewIndex(0)];
  const rightReview = reviewData[getReviewIndex(1)];

  return (
    <>
      <section className='bg-[#fafafa] overflow-x-hidden w-full mb-37.5'>
        <div className='flex flex-col items-center pt-24 pb-17.5'>
          <h2 className='font-volkhov text-dark text-[48px] mb-5 text-center'>
            This Is What Our Customers Say
          </h2>
          <p className='text-light font-poppins text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
        </div>

        <div className='grid grid-cols-3 items-center justify-items-center max-w-360 mx-auto font-poppins text-dark gap-5'>
          <div className='z-0 transition-all duration-500'>
            <div className='bg-white shadow-lg rounded-[10px] p-10 flex gap-10 w-161.25 items-center'>
              <img
                className='h-48.75 w-48.75 object-cover'
                src={leftReview.src}
                alt={leftReview.name}
              />
              <div>
                <p className='text-xs'>{leftReview.text}</p>
                <p className='my-4 text-lg text-amber-500'>★★★★★</p>
                <hr className='w-1/2' />
                <p className='py-3 font-volkhov text-2xl'>{leftReview.name}</p>
                <p className='text-xs'>{leftReview.role}</p>
              </div>
            </div>
          </div>

          <div className='z-10 transition-all duration-500'>
            <div className='bg-white shadow-2xl rounded-[10px] p-10 flex gap-10 w-216 items-center'>
              <img
                className='h-66.25 w-66.25 object-cover'
                src={centerReview.src}
                alt={centerReview.name}
              />
              <div>
                <p className='text-base'>{centerReview.text}</p>
                <p className='my-4 text-2xl text-amber-500'>★★★★★</p>
                <hr className='w-1/2' />
                <p className='py-3 font-volkhov text-[32px]'>
                  {centerReview.name}
                </p>
                <p className='text-base'>{centerReview.role}</p>
              </div>
            </div>
          </div>

          <div className='z-0 transition-all duration-500'>
            <div className='bg-white shadow-lg rounded-[10px] p-10 flex gap-10 w-161.25 items-center'>
              <img
                className='h-48.75 w-48.75 object-cover'
                src={rightReview.src}
                alt={rightReview.name}
              />
              <div>
                <p className='text-xs'>{rightReview.text}</p>
                <p className='my-4 text-lg text-amber-500'>★★★★★</p>
                <hr className='w-1/2' />
                <p className='py-3 font-volkhov text-2xl'>{rightReview.name}</p>
                <p className='text-xs'>{rightReview.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-4 py-14'>
          <button
            onClick={prevSlide}
            className='rounded-full shadow-2xl cursor-pointer hover:scale-105 transition-transform'>
            <img
              className='shrink-0 h-auto w-auto'
              src={arrowLeft}
              alt='arrow-left'
            />
          </button>
          <button
            onClick={nextSlide}
            className='rounded-full shadow-2xl cursor-pointer hover:scale-105 transition-transform'>
            <img
              className='shrink-0 h-auto w-auto'
              src={arrowRight}
              alt='arrow-right'
            />
          </button>
        </div>
      </section>
    </>
  );
}
