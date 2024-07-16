import React from "react";
import "../footer/Footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
// import logo from "../assets/navlogo.png"

const Footer = () => {
  return (
    <section>
      <hr className="border-0 h-[1px] bg-yellow-400" />
      <div className="bg-[#010D28] px-5 sm:px-10  pt-[25px] sm:pt-[40px]  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 text-white ">
          <div className=" grid grid-rows-2 ">
            <div>
              <img
                className="h-[45px] mb-[10px] sm:mb-[15px] w-auto"
                src="https://s3-alpha-sig.figma.com/img/907d/b132/18416053887fa3a59824c11193bc926d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJBmarmR1wSM9c~-jj197WdMw~nVRkgo8xRYdQavuLyQO68V8GgzUDf51Sc5oS-rqGc1OFNHzY5cMsZGVpMb0A4QnEDubbk86XT0-xEogaAbNyJR0Qopbr77Maqt4Hi7aNhMo7X0G22Y1TRQ8MCRC7LaonNZCC2LRf53c8zkSDyM5u6VE~4G4m0tf4npHHlLW-f2KrNZqynksXKAZm-4zlOtiIp9bIMkkbL6PbsPCq3sN2HhP3uuJCcTxkp8GX4Kx21nHGG6dEUDaHWGS~MQsBXslq8fAepzrTYdRMURHpshnZ~l4lZ9vc1EbMz7NORvRYG-jtsDip8JQMs8t9cWJQ__
                            "
                alt="sdfdsfsd"
              />
              <h5 className="text-[14px] sm:text-[14px] max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </h5>
            </div>

            <div className="flex inline-end gap-6 sm:gap-2 pt-[30px] sm:pt-[15px]">
              <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0]  hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                <FaXTwitter className="text-[#003CC4]   group-hover:text-[white]" />
              </div>
              <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                <FaInstagram className="text-[#003CC4]  group-hover:text-[white]" />
              </div>
              <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                <FaFacebookF className="text-[#003CC4]  group-hover:text-[white]" />
              </div>
              <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                <FaLinkedinIn className="text-[#003CC4]  group-hover:text-[white]" />
              </div>
              <div className="group rounded-full h-[42px] w-[42px] flex justify-center items-center bg-transparent border-2 border-[#0036B0] hover:border-yellow-400 hover:bg-yellow-400 p-2 cursor-pointer transition-colors duration-300">
                <FaBehance className="text-[#003CC4]  group-hover:text-[white]" />
              </div>
            </div>
          </div>

          <div className="leading-6 sm:leading-7 pb-[30px] sm:pb-[50px]">
            <h3 className="pb-[5px] sm:pb-[15px] text-[#FCB71B] font-bold">
              Services
            </h3>

            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              Mobile App Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              Web Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              Custom Software Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              UI/UX Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              E-Commerce Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              Digital Marketing
            </h6>
          </div>

          <div className="leading-6 sm:leading-7 pb-[30px] sm:pb-[50px]">
            <h3 className="pb-[5px] sm:pb-[15px] text-[#FCB71B] font-bold ">
              Industry Solutions
            </h3>

            <h6 className="text-[13px]  sm:text-[14px] max-w-[300px]">
              Mobile App Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              Web Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              Custom Software Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              UI/UX Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              E-Commerce Development
            </h6>
            <h6 className="text-[13px] sm:text-[14px] max-w-[300px]">
              Digital Marketing
            </h6>
          </div>

          <div className=" leading-6 sm:leading-7 relative pb-[30px] sm:pb-[50px]">
            <h1 className=" pb-[5px] sm:pb-[15px] text-[#FCB71B] font-bold">
              Digiatto Newsletter
            </h1>
            <h3 className="text-[13px] sm:text-[14px] max-w-[300px]  mb-[40px] sm:mb-[20px] leading-5">
              Don’t worry your email is secure with us, We will use to share
              latest updates straight to your inbox!
            </h3>

            <input
              className="mb-[8px] p-2 rounded w-full h-[40px] bg-transparent border-solid rounded border-2 border-[#003CC4]"
              type="text"
              placeholder="Enter Your Email Here"
            />

            <button className="hover:scale-110 duration-500 mt-3 sm:text-[17px] text-[12px] sm:px-[18px] px-[10px] rounded py-[5px] place-self-center flex justify-center items-center gap-x-1 mb-3 sm:mb-0"style={{
              backgroundImage:
                "linear-gradient(60deg, #013DC4 0%, #0034A7 100%)",
            }}>
              Subscribe
             </button>
          </div>
        </div>
        <hr className="border-0 h-[1px] bg-[#0036B0]" />
        <div className=" text-[10px] sm:text-[15px] font-semibold  md:flex justify-between text-white py-[25px] sm:flex-row text-xs sm:text-base ">
          <div className="">
            {" "}
            ©2024 Digiatto IT Services All Right Reserved.{" "}
          </div>
          <div className="flex w-50 justify-start sm:flex-end mt-4 sm:mt-0 gap-x-9">
            <div className="text-[12px] sm:text-[15px] font-semibold max-w-[300px]"> Privacy Policy</div>
            <div className="text-[12px] sm:text-[15px] font-semibold max-w-[300px] "> Terms Of Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
