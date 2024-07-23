import React from "react";
import "../dedicatedDev/DedicatedDev.css";
import { MdArrowOutward } from "react-icons/md";
import dediDevByo from "../../JSON/dediDevByo.json";
import { HireDevCard } from "../../components/hireDevCard/HireDevCard";
import ContactForm from "../../components/contactForm/ContactForm";

const DedicatedDev = () => {
  return (
    <div className="dedicated-dev bg-[#001033] ">
      <div
        className="dedi-dev-st w-full h-full pb-9" >
        <div
          className="home-des mt-0 py-6 pb-14 mx-auto max-w-5xl lg:text-center text-center"
          style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
        >
          <h2 className="text-lg mt-3 font-semibold leading-10 ">
            CRAFT YOUR VISION. CODE THE FUTURE
          </h2>
          <p className="mt-8 text-6xl font-semibold  tracking-tight leading-14  text-white lg:text-5x1 ">
            Dedicated <span className="text-[#013cc1]">Developers</span>
            <br />
            Who Become an Extension of Your Team
          </p>
          <div className="flex justify-center">
            {" "}
            <p className="mt-9 text-sm leading-4 text-white max-w-xl text-center">
              Building groundbreaking things requires a team that clicks. We
              provide highly skilled developers who work seamlessly alongside
              your team, understanding your goals and exceeding expectations.
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
            Let's Build Something Real
            <MdArrowOutward className="ml-2 text-lg" />
          </button>
        </div>
      </div>

      <div
        className="dedi-dev-beyond border p-10 border-[#013DC4]  bg- rounded-sm shadow-[0px_0px_23.9px_0px_#013DC469]"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side, #0f1563, #001033)",
        }}
       >
        <div
          className="home-des mt-0 py-6 pb-14 mx-auto max-w-5xl lg:text-center text-center "
          style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
        >
          <h2 className="text-lg mt-3 font-semibold leading-10 ">
            BEYOND THE BINARY
          </h2>
          <p className="mt-6  text-4xl font-semibold  tracking-tight leading-14  text-white lg:text-5x1 ">
            Where Vision Meets Innovation.
          </p>
          <div className="flex justify-center">
            <p className="mt-9 text-sm leading-4 text-white max-w-xl text-center">
              Shape the digital landscape with our team of pioneering tech
              experts. We craft cutting-edge solutions designed to propel your
              business forward.  Embrace a future brimming with possibilities –
              a future built on innovation and fueled by our expertise.
            </p>
          </div>
        </div>
        <div className="dedi-dev-beyond-cards flex justify-space items-center gap-x-[7em]  w-full mt-[90px]">
          <div className="dedi-dev-beyond-cards-pict flex gap-x-4 w-[40%]">
            <div className="dedi-dev-beyond-cards-pict1"></div>
            <div className="dedi-dev-beyond-cards-pict2 -mt-6"></div>
          </div>
          <div className="w-[60%]">
            <div className="outer-div">
              {dediDevByo.domain.map((item, index) => (
                <div key={item.id} className="main-div">
                  <div className="child-div left">
                    {(index === 0 || index === 2) && (
                      <>
                        <h2 className="text-white text-md font-bold max-w-sm ">
                          {item.name}
                        </h2>
                        <p className="text-white text-xs mt-3">{item.desc}</p>
                      </>
                    )}
                  </div>
                  <div className="child-div right ">
                    {index === 1 && (
                      <>
                        <h2 className="text-white text-md font-bold  ">
                          {item.name}
                        </h2>
                        <p className="text-white text-xs  mt-3 ">{item.desc}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      <div className="hire-dev  px-[3%]  py-[2%]">
          <div className="hire-dev-conte flex w-full justify-space items-center gap-x-[10em]">
            <div
              className="home-des  lg:text-start max-w-md"
              style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
            >
              <h2 className="text-lg font-semibold leading-7 ">
                HIRE DEVELOPER
              </h2>
              <p className="mt-6 text-4xl font-semibold tracking-tight text-white lg:text-5x1">
                Focus on what you do best, let us handle the code
              </p>
            </div>
            <div>
              <p className="mt-[100px] ml-[90px]  max-w-lg text-sm leading-6 font-medium text-white">
                Making a difference by raising the benchmarks. Some of our
                noteworthy and recent recognitions.
              </p>
            </div>
          </div>
          <div className="mt-[80px] hire-dev-cards grid grid-cols-3 lg:grid-cols-3 md:grid-2 sm:grid-cols-1 gap-[5em]">
            {dediDevByo.hire.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {index === 2 && (
                    <div className="special-image special-image-1 w-fit"></div>
                  )}
                  {index === 5 && (
                    <div className="special-image special-image-2 w-fit">
                      <div className="special-image special-image-21 w-fit "></div>
                      <div className="special-image special-image-22 w-fit"></div>
                    </div>
                  )}
                  <HireDevCard data={item} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div >
          <ContactForm/>
        </div>
    </div>
  );
};

export default DedicatedDev;
