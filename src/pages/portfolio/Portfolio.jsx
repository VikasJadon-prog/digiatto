import React from "react";
import "../portfolio/Portfolio.css";
import { MdArrowOutward } from "react-icons/md";
import portCard from "../../JSON/portCard.json";
import { useState } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
const Portfolio = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const totalCards = portCard.length;

  const loadMoreCards = () => {
    if (visibleCards >= totalCards) {
      setVisibleCards(visibleCards - 4);
    } else {
      setVisibleCards(visibleCards + 4);
    }
  };
  return (
    <div className="portfolio">
      <div
        className="indus-st w-full h-full pb-9 bg-gradient-to-r from-blue-900 to-blue-700"
        // style={{
        //   backgroundImage:
        //     "radial-gradient(circle farthest-side, #0f1563, #001033)",
        // }}
      >
        <div
          className="home-des mt-0 py-6 pb-14 mx-auto max-w-5xl lg:text-center text-center"
          style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
        >
          <h2 className="text-lg mt-3 font-semibold leading-10 ">
            CASE STUDIES
          </h2>
          <p className="mt-8 text-6xl font-semibold  tracking-tight leading-14  text-white lg:text-5x1 ">
            Explore Our Recent<span className="text-[#013cc1]"> Work</span>
          </p>
          <div className="flex justify-center">
            <p className="mt-9 text-sm leading-4 text-white max-w-xl text-center">
              People expect more experience than ever before. Digiatto
              intersects customer experiences and design to create immersive
              solutions that shouts details. Making it easy and everlastingly
              memorable. Scroll to feel.
            </p>
          </div>
          <button
            type="button"
            className="mt-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{
              backgroundImage:
                "linear-gradient(60deg, #013DC4 0%, #0034A7 100%)",
            }}
          >
            Let's Talk
            <MdArrowOutward className="ml-2 text-lg" />
          </button>
        </div>
      </div>
      <div
        className="port-pages w-full p-4  "
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side, #0f1563, #001033)",
        }}
      >
        <div className="port-pages-inn w-full flex justify-content items-center p-6 pt-9">
          <div className="w-full grid grid-inline gap-y-[5em]">
            {portCard.slice(0, visibleCards).map((items, index) => (
              <div
                className={`port-card w-full grid lg:grid-cols-2 md:grid-cols-1 md:gap-y-8 gap-y-9  justify-center items-center p-6`}
                key={index + 1}
              >
                {index % 2 === 0 && (
                  <>
                    <div className="port-card-img lg:w-[85%] sm:w-[100%]  h-[350px] flex items-center justify-center">
                      <img
                        src={items.img}
                        alt=""
                        className="w-[100%] h-[100%] rounded-[10px]"
                      />
                    </div>
                    <div className="port-card-cont w-[100%]">
                      <span className="block font-semibold text-lg text-yellow-500 uppercase">
                        {items.title}
                      </span>
                      <h2 className="text-white font-semibold leading-[45px] mt-5 dark:text-white mb-6 text-[20px] font-semibold sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        {items.head}
                      </h2>
                      <p className="text-base mt-6 text-white leading-[20px] lg:text-[13px] w-3/4 mb-6 md:text-[10px]">
                        {items.descp}
                      </p>
                      <button
                        type="button"
                        className="mt-2 text-white rounded-md focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #FFC84D 0%, #FCB61A 100%)",
                        }}
                      >
                        View Casestudy
                        <MdArrowOutward className="ml-2 text-lg" />
                      </button>
                    </div>
                  </>
                )}
                {index % 2 !== 0 && (
                  <>
                    <div className="port-card-cont w-[100%] order-2 lg:order-none ">
                      <span className="block font-semibold text-lg text-yellow-500 uppercase">
                        {items.title}
                      </span>
                      <h2 className="text-white font-semibold leading-[45px] mt-5 dark:text-white mb-6 text-[20px] font-semibold sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                        {items.head}
                      </h2>
                      <p className="text-base mt-6 text-white leading-[20px] lg:text-[13px] w-3/4 mb-6 md:text-[10px]">
                        {items.descp}
                      </p>
                      <button
                        type="button"
                        className="mt-2 text-white rounded-md focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #FFC84D 0%, #FCB61A 100%)",
                        }}
                      >
                        View Casestudy
                        <MdArrowOutward className="ml-2 text-lg" />
                      </button>
                    </div>
                    <div className="port-card-img order-1 lg:order-none lg:w-[85%] sm:w-[100%] h-[350px] flex items-center justify-center">
                      <img
                        src={items.img}
                        alt=""
                        className="w-[100%] h-[100%] rounded-[10px]"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}

            <div className="w-full flex  justify-center items-center">
              <button
                type="button"
                className=" text-white bg-transparent border-[2.5px] border-[#013DC4] hover:bg-blue-800  font-sm rounded-md text-sm px-7 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={loadMoreCards}
              >
                {visibleCards >= totalCards ? "Show Less" : "Load More"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Portfolio;
