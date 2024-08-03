import React from "react";
import "../services/Services.css";
import { MdArrowOutward } from "react-icons/md";
import HorizScroll from "../../components/horizontalScroll/HorizScroll";
import serviceSoftEngCard from "../../JSON/serviceSoftEngCard.json";

import ContactForm from "../../components/contactForm/ContactForm";
import ServiceCard from "../../components/serviceCard/ServiceCard.jsx";
import "../../components/serviceCard/ServiceCard.css";
import { useDispatch, useSelector } from "react-redux";
import "../../components/serviceCard/ServiceCard.css";

const Services = () => {
  const { serviceslider, digiautomation,whatwedo, loading, error } = useSelector(
    (state) => state.api
  );
  const items = serviceSoftEngCard.domain;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="service w-full bg-[#001033] ">
      <div className="service-inner inline w-full  overflow-visible">
        <div className="home-des mt-[180px] py-6 pb-14 mx-auto max-w-3xl lg:text-center  text-[20px]">
          <h2 className="text-lg mt-3 font-semibold leading-10  text-[#FCB61A] ">
            OUR SERVICES
          </h2>
          <p className="mt-8 text-6xl font-semibold  tracking-tighter text-white lg:text-5x1 ">
            Craft. Refine. <span className="text-[#013cc1]">Dominate</span>
          </p>
          <p className="mt-9 text-sm leading-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in.
          </p>
          <button
            type="button"
            className="mt-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #013DC4 0%, #0034A7 100%)",
            }}
          >
            Let's Analyze Your Needs
            <MdArrowOutward className="ml-2 text-lg" />
          </button>
        </div>
        <div className="service-hori">
          <HorizScroll customItems={serviceslider} />
        </div>
        <div className="w-full grid grid-cols-3 gap-[4em]  p-[3%] ">
          <div className="service-soft-eng  justify-between col-span-1 row-span-1">
            <div
              className="home-des mt-0"
              style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
            >
              <h2 className="text-md font-semibold leading-none">
                SOFTWARE ENGINEERING
              </h2>
              <p className="mt-7 text-3xl font-semibold tracking-tight text-white lg:text-5x1">
                Level Up Your Tech Stack
              </p>
              <p className="mt-7 text-sm leading-3 text-white">
                Expert Software Engineering Services
              </p>
            </div>
          </div>
          <div className="service-soft-eng-lay-picuter flex justify-center items-center col-span-2 row-span-3">
            <div className="service-soft-eng-lay-pic1 w-full h-36 bg-gray-400"></div>
            <div className="service-soft-eng-lay-pic2 w-full h-36 bg-gray-400"></div>
          </div>

          <div className="service-soft-eng-cards col-span-1 row-start-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-[5em] mb-[-2em] ">
            {whatwedo.slice(0, 2).map((item, index) => (
              <ServiceCard key={index} customData={{ item, index }} />
            ))}
          </div>
          <div className="service-soft-eng-cards col-span-3 row-start-4 grid grid-cols-3 gap-[5em] mt-[-01em]">
            {whatwedo.slice(2).map((item, index) => (
              <ServiceCard key={index} customData={{ item, index }} />
            ))}
          </div>
        </div>
        <div className="service-digital">
          <div
            className="home-des py-6 pb-14 mx-auto max-w-3xl lg:text-center"
            style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
          >
            <h2 className="text-md mt-3 font-semibold leading-10 ">
              From Manual to Magic{" "}
            </h2>
            <p className="mt-8 text-4xl font-semibold  tracking-tigh text-white  lg:text-5x1 ">
              Unleash the Power of Digital Automation
            </p>
            <p className="mt-7 text-sm leading-4 text-white">
              Automate Your Way to Success
            </p>
          </div>
          <div className="service-digital-cards w-full  flex justify-center items-center">
            <div className="w-[90%] justify-center">
              <div className="flex justify-center items-center w-[100%]">
                <div className="flex justify-space items-center gap-x-[30%] w-[95%]">
                  {digiautomation.slice(0, 2).map((item, index) => (
                    <ServiceCard key={index} customData={{ item, index }} />
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center w-[100%] mt-[90px]">
                <div className="flex justify-space items-center gap-x-[20%] w-[80%]">
                  {digiautomation.slice(2).map((item, index) => (
                    <ServiceCard key={index} customData={{ item, index }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
