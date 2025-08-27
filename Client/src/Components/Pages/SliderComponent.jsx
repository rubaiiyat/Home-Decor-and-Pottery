import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const SliderComponent = () => {
  const slides = [
    {
      id: 1,
      title: "Artisanal Pottery Collection",
      description:
        "Handcrafted pottery pieces that bring elegance and natural beauty to your home. Each piece is uniquely crafted with care and attention to detail.",
      buttonText: "Explore Collection",
      image:
        "https://images.unsplash.com/photo-1578775887800-4b11732c2bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    },
    {
      id: 2,
      title: "Modern Home Decor",
      description:
        "Transform your living space with our contemporary pottery designs that blend functionality with artistic expression.",
      buttonText: "Shop Now",
      image:
        "https://images.unsplash.com/photo-1588850790165-5d517ead7875?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    },
    {
      id: 3,
      title: "Handcrafted Excellence",
      description:
        "Discover the perfect blend of traditional craftsmanship and modern design in our exclusive pottery collection.",
      buttonText: "View Products",
      image:
        "https://images.unsplash.com/photo-1598407307310-7b288f3d091c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    },
    {
      id: 4,
      title: "Sustainable Homeware",
      description:
        "Eco-friendly pottery made with sustainable practices, bringing natural elegance to your everyday life.",
      buttonText: "Learn More",
      image:
        "https://images.unsplash.com/photo-1631443885455-2c7f3e143491?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
    },
  ];

  return (
    <div className="w-full h-screen bg-[#F4F0ED]">
      {/* Add Maven Pro font import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&display=swap');
          * {
            font-family: 'Maven Pro', sans-serif;
          }
        `}
      </style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        effect="fade"
        speed={1000}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full bg-[#F4F0ED]">
              {/* Content Container */}
              <div className="flex flex-col lg:flex-row items-center justify-between h-full px-6 lg:px-28 py-10">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-[#415765] text-center lg:text-left mb-10 lg:mb-0">
                  <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight ">
                    {slide.title}
                  </h2>
                  <p className="text-lg lg:text-xl mb-6 lg:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed ">
                    {slide.description}
                  </p>
                  <button className="px-6 lg:px-8 py-2 lg:py-3 bg-[#757B66] text-[#F4F0ED] font-semibold rounded-full hover:bg-[#656B56] transition-all text-xl">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full max-w-sm lg:max-w-lg object-cover"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iODAwIiBmaWxsPSIjRjRGMERFRCIvPgo8cGF0aCBkPSJNMzAwIDQwMEMzMzEuMzcgNDAwIDM2MCAzNzEuMzcgMzYwIDM0MEMzNjAgMzA4LjYzIDMzMS4zNyAyODAgMzAwIDI4MEMyNjguNjMgMjgwIDI0MCAzMDguNjMgMjQwIDM0MEMyNDAgMzcxLjM3IDI2OC42MyA0MDAgMzAwIDQwMFoiIGZpbGw9IiM3NTdCNjYiLz4KPHBhdGggZD0iTTI1MCA1MDBDMjUwIDUyNy42MSAyMjcuNjEgNTUwIDIwMCA1NTBDMTcyLjM5IDU1MCAxNTAgNTI3LjYxIDE1MCA1MDBDMTUwIDQ3Mi4zOSAxNzIuMzkgNDUwIDIwMCA0NTBDMjI3LjYxIDQ1MCAyNTAgNDcyLjM5IDI1MCA1MDBaIiBmaWxsPSIjNDE1NzY1Ii8+CjxwYXRoIGQ9Ik00NTAgNTAwQzQ1MCA1MjcuNjEgNDI3LjYxIDU1MCA0MDAgNTUwQzM3Mi4zOSA1NTAgMzUwIDUyNy42MSAzNTAgNTAwQzM1MCA0NzIuMzkgMzcyLjM5IDQ1MCA0MDAgNDUwQzQyNy42MSA0NTAgNDUwIDQ3Mi4zOSA0NTAgNTAwWiIgZmlsbD0iIzQxNTc2NSIvPgo8L3N2Zz4K";
                    }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
