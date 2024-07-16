import React from "react";
import "../industries/Industries.css";
import { MdArrowOutward } from "react-icons/md";
import indusExep from "../../JSON/indusExep.json"
import ContactForm from "../../components/contactForm/ContactForm";
const Industries = () => {
  return (
    <div className="industries w-full">
      <div
        className="indus-st w-full h-full pb-9 "
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side, #0f1563, #001033)",
        }}
      >
        <div
          className="home-des mt-0 py-6 pb-14 mx-auto max-w-5xl lg:text-center text-center"
          style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
        >
          <h2 className="text-lg mt-3 font-semibold leading-10 ">
            SAFER & SMARTER
          </h2>
          <p className="mt-8 text-6xl font-semibold  tracking-tight leading-14  text-white lg:text-5x1 ">
            A Glance to <span className="text-[#013cc1]">Industries</span>
          </p>
          <div className="flex justify-center">
            <p className="mt-9 text-sm leading-4 text-white max-w-xl text-center">
              Explore our hands-on expertise in creating tailor-made digital
              solutions packed with strategy, operations and technologies.
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
        className=""
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side, #0f1563, #001033)",
        }}
      >
        <div
          className="home-des mt-0 py-6 pb-14 mx-auto max-w-5xl lg:text-center text-center "
          style={{
            color: "rgba(252, 182, 26, 1)",
            fontSize: "20px",
            marginTop: "0px",
          }}
        >
          <h2 className="text-lg mt-3 font-semibold leading-10 ">
            WE ARE IN EXPERTS
          </h2>
          <p className="mt-6  text-4xl font-semibold  tracking-tight leading-14  text-white lg:text-5x1 ">
            Industries We Serve
          </p>
          <div className="flex justify-center">
            <p className="mt-9 text-sm leading-4 text-white max-w-xl text-center">
              Customer Experience is everything! We design & create solutions by
              spotting customers’ actions, emotions, and unmet needs. We make
              enterprises that impact lives.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center item-center p-6 pb-[60px]">

        <div className="indus-expert-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-[5rem] justify-center items-center w-full ">
          {indusExep.data.map((item,index)=>(
           <div className="w-full flex justify-center items-center " key={index+1}>
             <div className="indus-expert-card text-center w-[257px] relative text-center" >
            <div
              className="indus-exp-card-img relative"
              style={{
                backgroundImage:
                  `url("${item.img}")`,
              }}
            >
              <div className="absolute inset-0 flex rounded-lg  items-end justify-center bg-gradient-to-b from-transparent to-blue-900 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  className="flex items-center justify-center select-none font-sans font-semibold text-center uppercase transition-all disabled:shadow-none disabled:pointer-events-none text-sm py-2 px-4 rounded-md bg-yellow-500 text-white shadow-md hover:shadow-lg focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none "
                  type="button"
                  style={{ backgroundColor: "#fcb924" }}
                >
                  Buy Now <MdArrowOutward className="ml-2 text-lg" />
                </button>
              </div>
            </div>
            <div className="">
              <h5 className="mt-5 mb-2 text-md font-medium tracking-wide text-white dark:text-white">
                {item.name}
              </h5>
              <p className="mb-4 text-xs tracking-wider font-normal h-[65px] max-w-xs text-white dark:text-gray-400">
              {item.desc}
              </p>
            </div>
          </div>
           </div>
          ))}
        </div>
        </div>
      </div>
      <div className="indus-contact">
        <ContactForm/>
      </div>
    </div>
  );
};

export default Industries;
