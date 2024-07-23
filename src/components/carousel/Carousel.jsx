import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <Slider {...settings} className="carousel">
      {slides.map((slide, index) => (
       <div
       key={index}
       className={`slide ${currentSlide === index ? "center" : "default"}` }
     >
       <blockquote className="flex w-fit h-fit flex-col justify-between py-2 shadow-sm sm:p-3 lg:px-5 lg:py-7">
         <div>
           <div className={`flex gap-0.5 ${currentSlide === index ? "text-[#013DC4]" : "text-[#E9AA1C]"}`}>
           {Array.from({ length: slide.rating }, (_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
           </div>
     
           <div className="mt-4">
             <p className={`text-xs font-normal ${currentSlide === index ? "text-white" : "text-white"}`}>
             {slide.text}
             </p>
           </div>
         </div>
     
         <footer className="mt-3 flex justify-space items-center gap-2 text-sm font-medium text-gray-700 sm:mt-6">
           <img
             alt=""
             src={slide.image}
             className="size-10 rounded-full object-cover"
           />
           <p className={`text-[13px] font-thick ${currentSlide === index ? "text-[#013DC4] " : "text-[#E9AA1C]"}`}>
           {slide.author} - <span className={`${currentSlide === index ? "text-white" : "text-white"} font-normal`}> {slide.position}</span>
           </p>
         </footer>
       </blockquote>
     </div>
     
      ))}
    </Slider>
  );
};

export default Carousel;
