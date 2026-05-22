import { useState, useEffect } from "react";
import carousalPhoto from "../assets/images/carousal-photo.png";
import carousalPhoto1 from "../assets/images/carousal-photo1.png";
import carousalPhoto2 from "../assets/images/carousal-photo2.png";
import carousalPhoto3 from "../assets/images/carousal-photo3.png";

import arrowLeft from "../assets/images/arrow-left.svg";
import arrowRight from "../assets/images/arrow-right.svg";

export default function DealsOfTheMonth() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTargetDate = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  };

  const calculateTimeLeft = (targetDate) => {
    const difference = +targetDate - +new Date();
    let timeLeftValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeftValues = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeftValues;
  };

  useEffect(() => {
    const targetDate = getTargetDate();

    const updateTimer = () => {
      const nextTime = calculateTimeLeft(targetDate);
      setTimeLeft(nextTime);
    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(2, "0");

  const slides = [
    {
      src: carousalPhoto,
      title: "01 — Dress",
      discount: "30% OFF",
    },
    {
      src: carousalPhoto1,
      title: "02 — Rounded Hat",
      discount: "40% OFF",
    },
    {
      src: carousalPhoto2,
      title: "03 — Glasses",
      discount: "25% OFF",
    },
    {
      src: carousalPhoto3,
      title: "04 — T-Shirt",
      discount: "50% OFF",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideIndex = (offset) => {
    return (currentIndex + offset) % slides.length;
  };

  return (
    <>
      <section className='bg-[#fafafa] overflow-x-hidden w-full mb-37.5'>
        <div className='py-36 flex justify-start max-w-7xl mx-auto gap-5 flex-col xl:flex-row relative'>
          <div className='z-10 bg-[#fafafa] pr-4'>
            <div>
              <h2 className='font-volkhov text-dark text-5xl mb-5'>
                Deals Of The Month
              </h2>
              <p className='max-w-108.75 font-poppins text-light mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
                duis ultrices sollicitudin
              </p>
              <button className='bg-black text-white font-poppins py-5 px-17.5 rounded-[10px] shadow-2xl cursor-pointer'>
                Buy Now
              </button>
            </div>

            <div className='h-65'>
              <h3 className='font-poppins text-dark text-[28px] py-8'>
                Hurry, Before It’s Too Late!
              </h3>
              <div className='flex gap-7 text-center'>
                <div>
                  <p className='font-digital text-dark text-[32px] bg-white w-19 h-19 flex items-center justify-center shadow-md rounded-[10px] mb-4'>
                    {formatTime(timeLeft.days)}
                  </p>
                  <p className='font-poppins text-dark text-2xl mb-4'>Days</p>
                </div>
                <div>
                  <p className='font-digital text-dark text-[32px] bg-white w-19 h-19 flex items-center justify-center shadow-md rounded-[10px] mb-4'>
                    {formatTime(timeLeft.hours)}
                  </p>
                  <p className='font-poppins text-dark text-2xl mb-4'>Hr</p>
                </div>
                <div>
                  <p className='font-digital text-dark text-[32px] bg-white w-19 h-19 flex items-center justify-center shadow-md rounded-[10px] mb-4'>
                    {formatTime(timeLeft.minutes)}
                  </p>
                  <p className='font-poppins text-dark text-2xl mb-4'>Mins</p>
                </div>
                <div>
                  <p className='font-digital text-dark text-[32px] bg-white w-19 h-19 flex items-center justify-center shadow-md rounded-[10px] mb-4'>
                    {formatTime(timeLeft.seconds)}
                  </p>
                  <p className='font-poppins text-dark text-2xl mb-4'>Sec</p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-end gap-4 z-10 bg-[#fafafa] pb-2'>
            <button
              onClick={prevSlide}
              className='shadow-2xl rounded-full cursor-pointer'>
              <img src={arrowLeft} alt='arrow-left' />
            </button>
            <button
              onClick={nextSlide}
              className='shadow-2xl rounded-full cursor-pointer'>
              <img src={arrowRight} alt='arrow-right' />
            </button>
          </div>

          <div className='relative grow pb-112.5'>
            <div className='flex gap-5 absolute top-0 bottom-0 min-w-max items-start'>
              <div className='relative shrink-0'>
                <img
                  src={slides[getSlideIndex(0)].src}
                  alt='carousal'
                  className='h-145 object-cover transition-all duration-500'
                />
                <div className='absolute bottom-3 left-5 bg-white text-dark px-8 py-7 font-poppins shadow-md'>
                  <p>{slides[getSlideIndex(0)].title}</p>
                  <p className='text-[28px]'>
                    {slides[getSlideIndex(0)].discount}
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-start shrink-0'>
                <img
                  src={slides[getSlideIndex(1)].src}
                  alt='carousal'
                  className='h-121 object-cover transition-all duration-500'
                />

                <div className='flex gap-2 justify-center mt-8 w-67.5'>
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                        index === currentIndex ? "bg-black" : "bg-gray-400"
                      }`}></span>
                  ))}
                </div>
              </div>

              <div className='shrink-0'>
                <img
                  src={slides[getSlideIndex(2)].src}
                  alt='carousal'
                  className='h-121 object-cover transition-all duration-500'
                />
              </div>

              <div className='shrink-0'>
                <img
                  src={slides[getSlideIndex(3)].src}
                  alt='carousal'
                  className='h-121 object-cover transition-all duration-500'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
