import React, { useEffect, useState } from "react";
import "../footer/Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
  const { footer, loading, error } = useSelector((state) => state.api);

  return (
    <section>
      <hr className="border-0 h-[1px] bg-yellow-400" />
      <div className="bg-[#010D28] px-5 sm:px-10 pt-[25px] sm:pt-[40px]">
        {footer.map((item, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 text-white">
              <div className="grid grid-rows-2">
                <div>
                  <img
                    className="h-[45px] mb-[10px] sm:mb-[15px] w-auto"
                    src={item.logo}
                    alt="sdfdsfsd"
                  />
                  <h5 className="text-[14px] sm:text-[14px] max-w-[300px]">
                    {item.description}
                  </h5>
                </div>

                <div className="flex inline-end gap-6 sm:gap-2 pt-[30px] sm:pt-[15px]">
                  <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                    <FaXTwitter className="text-[#003CC4] group-hover:text-[white]" />
                  </div>
                  <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                    <FaInstagram className="text-[#003CC4] group-hover:text-[white]" />
                  </div>
                  <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                    <FaFacebookF className="text-[#003CC4] group-hover:text-[white]" />
                  </div>
                  <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                    <FaLinkedinIn className="text-[#003CC4] group-hover:text-[white]" />
                  </div>
                  <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                    <FaBehance className="text-[#003CC4] group-hover:text-[white]" />
                  </div>
                </div>
              </div>

              <div className="leading-6 sm:leading-7 pb-[30px] sm:pb-[50px]">
                <h3 className="pb-[5px] sm:pb-[15px] text-[#FCB71B] font-bold">
                  Services
                </h3>
                {item.services.map((det, serviceIndex) => (
                  <h6
                    className="text-[13px] sm:text-[14px] max-w-[300px]"
                    key={serviceIndex}
                  >
                    {det.text}
                  </h6>
                ))}
              </div>

              <div className="leading-6 sm:leading-7 pb-[30px] sm:pb-[50px]">
                <h3 className="pb-[5px] sm:pb-[15px] text-[#FCB71B] font-bold">
                  Industry Solutions
                </h3>
                {item.industry_solutions.map((det, solutionIndex) => (
                  <h6
                    className="text-[13px] sm:text-[14px] max-w-[300px]"
                    key={solutionIndex}
                  >
                    {det.text}
                  </h6>
                ))}
              </div>

              <div className="leading-6 sm:leading-7 relative pb-[30px] sm:pb-[50px]">
                <h1 className="pb-[5px] sm:pb-[15px] text-[#FCB71B] font-bold">
                  Digiatto Newsletter
                </h1>
                <h3 className="text-[13px] sm:text-[14px] max-w-[300px] mb-[40px] sm:mb-[20px] leading-5">
                  Don’t worry your email is secure with us, We will use to share
                  latest updates straight to your inbox!
                </h3>

                <input
                  className="mb-[8px] p-2 rounded w-full h-[40px] bg-transparent border-solid rounded border-2 border-[#003CC4]"
                  type="text"
                  placeholder="Enter Your Email Here"
                />

                <button
                  className="hover:scale-110 duration-500 mt-3 sm:text-[17px] text-[12px] sm:px-[18px] px-[10px] rounded py-[5px] place-self-center flex justify-center items-center gap-x-1 mb-3 sm:mb-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(60deg, #013DC4 0%, #0034A7 100%)",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <hr className="border-0 h-[1px] bg-[#0036B0]" />
            <div className="text-[10px] sm:text-[15px] font-semibold md:flex justify-between text-white py-[25px] sm:flex-row text-xs sm:text-base">
              <div>
                ©2024 Digiatto IT Services All Right Reserved.
              </div>
              <div className="flex w-50 justify-start sm:flex-end mt-4 sm:mt-0 gap-x-9">
                <div className="text-[12px] sm:text-[15px] font-semibold max-w-[300px]">
                  Privacy Policy
                </div>
                <div className="text-[12px] sm:text-[15px] font-semibold max-w-[300px]">
                  Terms Of Service
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Footer;
