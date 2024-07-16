import React from "react";
import "../services/Services.css";
import { MdArrowOutward } from "react-icons/md";
import HorizScroll from "../../components/horizontalScroll/HorizScroll";
import { ServiceCard } from "../../components/serviceCard/ServiceCard";
import serviceSoftEngCard from "../../JSON/serviceSoftEngCard.json";
import serviceDigital from "../../JSON/serviceDigital.json";
import ContactForm from "../../components/contactForm/ContactForm";
const Services = () => {
  return (
    <div className="service w-full ">
      <div className="service-inner inline w-full  overflow-visible">
        <div
          className="home-des py-6 pb-14 mx-auto max-w-3xl lg:text-center"
          style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
        >
          <h2 className="text-lg mt-3 font-semibold leading-10 ">
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
          <HorizScroll customItems={true} />
        </div>
          <div className="w-full grid grid-col-2">
            <div className="service-soft-eng px-9  justify-between ">
              <div className="flex justify-between">
                <div
                  className="home-des mt-0 w-[30%] lg:text-start"
                  style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
                >
                  <h2 className="text-md font-semibold leading- ">
                    SOFTWARE ENGINEERING
                  </h2>
                  <p className="mt-7 text-3xl font-semibold tracking-tight text-white lg:text-5x1">
                    Level Up Your Tech Stack
                  </p>
                  <p className="mt-7 text-sm leading-3 text-white">
                    Expert Software Engineering Services
                  </p>
                </div>
                <div className="w-[60%] flex justify-center items-center">
                  <div className="service-soft-eng-lay-pic1"></div>

                  <div className="service-soft-eng-lay-pic2"></div>
                </div>
              </div>

              <ServiceCard customData={serviceSoftEngCard.domain} />
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
          <div className="service-digital-cards">
            <div className="flex justify-center items-center w-full">
              <ServiceCard customData={serviceDigital.domain[0]} />
            </div>
            <div className="flex justify-center items-center w-full">
              <ServiceCard customData={serviceDigital.domain[1]} />
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
