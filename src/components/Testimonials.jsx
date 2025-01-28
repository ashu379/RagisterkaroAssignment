import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import coma from "../assets/coma.png";
import { useRef } from "react";

const testimonials = [
    {
      id: 1,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 4.5,
    },
    {
      id: 4,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 4.5,
    },
    {
      id: 5,
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip...",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 4.5,
    },
  ];

const Testimonials = () => {
    const swiperRef = useRef(null);
  return (
   <>
    <div className="bg-[#0f3b66] py-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-between">
        <h2 className="text-white text-3xl font-bold mb-6">
          What people say about us
        </h2>

         {/* Custom Navigation Buttons */}
         <div className="mt-8 flex justify-center mb-[2rem] space-x-4">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()}
            className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-yellow-600  transition"
          >
            ❮ 
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()}
            className="bg-white text-black px-4 py-2 rounded-full shadow hover:bg-yellow-600 transition"
          >
            ❯
          </button>
        </div>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          className="px-4 text-left"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between">
                  <div>
                    <img src={coma} className="w-[2rem]" alt="coma" loading="lazy"/>
                  </div>
                  <div className="mt-3 ">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`text-yellow-400 text-lg ${
                          index + 1 <= Math.floor(testimonial.rating)
                            ? "fa fa-star"
                            : index < testimonial.rating
                            ? "fa fa-star-half-alt"
                            : "fa fa-star text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <p className="text-gray-700">{testimonial.quote}</p>
                </div>
                <div className="mt-4 flex ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                    loading="lazy"
                  />
                  <div className="ml-3 text-left">
                    <h3 className="text-lg font-bold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

       
      </div>
    </div>
   </>
  )
}

export default Testimonials