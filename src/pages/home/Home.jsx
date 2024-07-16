import React, { Component } from "react";
import "../home/Home.css";
import { MdArrowOutward } from "react-icons/md";
import HorizScroll from "../../components/horizontalScroll/HorizScroll";
import homeCard from "../../JSON/homeCard.json";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import homeOurProj from "../../JSON/homeOurPro.json";
import expertCard from "../../JSON/expertsCard.json";
import homeTechCar from "../../JSON/home-tech-car.json";
import newArtCard from "../../JSON/newArtCard.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from "../../components/client/Client.jsx";
const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    centerPadding: "0px",
  };
  return (
    <div className="home-cont" >
      <div className="home-inner" style={{ width: "100%" }}>
        <div
          className="home-des mx-auto max-w-2xl lg:text-center"
          style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
        >
          <h2 className="text-lg mt-10 font-semibold leading-7 ">
            WE'RE THE EXPERTS
          </h2>
          <p className="mt-7 text-6xl font-semibold  tracking-tight text-white lg:text-5x1 ">
            We Develop  <span className='text-[#013cc1]'>Creative</span> Website For Your Business
          </p>
          <p className="mt-7 text-sm leading-4 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in.
          </p>
          <button
            type="button"
            className="mt-10 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{
              backgroundImage: 'linear-gradient(90deg, #013DC4 0%, #0034A7 100%)',
            }}
            >
            Choose plan
            <MdArrowOutward className="ml-2 text-lg" />
          </button>
        </div>
        <div className="" style={{marginTop:"135px"}}>
          <HorizScroll />
        </div>
        <div
          className="home-des mx-auto max-w-2xl lg:text-center"
          style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
        >
          
          <h2 className="text-lg font-semibold leading-7 ">WHAT WE DO</h2>
          <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
            We Provide The Best Service For You
          </p>
          <p className="mt-7 text-sm leading-4 text-white">
            We’re helping clients to create with our talented expert.
          </p>
        </div>
        <div className="home-cards">
          {homeCard.domain.map((item, index) => (
            <div className="home-card" key={index + 1}>
              <div className="home-card-inner "></div>
              <div className="card-desc max-w-sm p-6">
                <a href="#">
                  <h5 className="mt-9 mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-4 font-normal text-white dark:text-gray-400">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className=" card-desc-a inline-flex items-center text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <MdArrowOutward className="ml-2 text-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="our-Proj mt-10">
          <div className="our-proj-inner">
            <div
              className="home-des lg:text-start"
              style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
            >
              <h2 className="text-lg font-semibold leading-7 ">OUR PROJECT</h2>
              <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
              The Work We Have Done
              </p>
              <p className="mt-7 text-sm leading-4 text-white">
              Customer Experience is everything! We design & create solutions by spotting customers’ actions, emotions, and unmet needs. We make enterprises that impact lives.

              </p>
            </div>
          </div>
          <div className="our-proj-cards grid grid-cols-3 mb-8">
            {homeOurProj.detail.map((item, index) => (
              <div className="our-proj-card" key={index + 1}>
                <div className="our-proj-card-img relative max-w-xl mx-auto mt-20">
                  <img
                    className="h-64 w-full object-cover rounded-md"
                    src={item.img}
                    alt="Random"
                  />
                </div>

                {/* <div className="our-proj-card-des ">
                <div
                  className="home-des mx-auto max-w-2xl lg:text-center"
                  style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
                >
                  <p className=" text-2xl font-semibold tracking-tight text-white lg:text-5x1">
                    We Develop Creative
                  </p>
                  <p className="mt-7 text-sm leading-4 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <button
                    type="button"
                    className="mt-8 text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-10 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center  items-center"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div> */}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Client/>
        </div>
        <div className="expert">
          <div className="expert-desc">
            <div
              className="home-des  lg:text-start"
              style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
            >
              <h2 className="text-lg font-semibold leading-7 uppercase">
                We are experts in
              </h2>
              <p className="mt-6 text-5xl font-bold tracking-tight text-white lg:text-5x1">
                Industries We Serve
              </p>
              <p className="mt-6 text-sm leading-4 text-white">
                Customer Experience is everything! We design & create solutions
                by spotting customers’ actions, emotions, and unmet needs. We
                make enterprises that impact lives.
              </p>
            </div>
            <div className="exper-car-butt">
              <button
                type="button"
                className="mt-8 text-white bg-transparent hover:bg-blue-800 focus:ring-10 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center  items-center"
              >
                <FaArrowLeftLong style={{ fill: "white", fontSize: "20px" }} />
              </button>
              <button
                type="button"
                className="mt-8 text-white hover:bg-blue-800 focus:ring-10 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center  items-center"
              >
                <FaArrowRightLong style={{ fill: "white", fontSize: "20px" }} />
              </button>
            </div>
          </div>
          <div className="expert-carous flex w-full ">
            {expertCard.detail.map((item, index) => (
              <div
                className="expert-carous-inner relative max-w-xl mx-auto mt-20"
                key={index + 1}
              >
                <img
                  className="h-64 w-full object-cover rounded-md"
                  src={item.img}
                  alt="Random image"
                />
                <div className="absolute inset-0 bg-gray-700 opacity-30 rounded-md"></div>
                <div className="exper-carouse-inner ">
                  <div className="absolute overflow-hidden inset-0 flex items-end  justify-center">
                    <div className="expert-crrrr">
                      <h2 className="text-white font-semibold font-3">
                        {item.name}
                      </h2>
                      <div className="exper-carousel-but ">
                        <div className="mt-4">
                          <button
                            type="button"
                            className=" text-white bg-blue-800 focus:ring-10 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center  items-center"
                          >
                            <FaArrowRightLong
                              style={{ fill: "white", fontSize: "20px" }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="home-tech">
          <div className="home-tech-desc">
            <div
              className="home-des mx-auto max-w-2xl lg:text-center"
              style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
            >
              <h2 className="text-lg font-semibold leading-7 ">TECHNOLOGIES</h2>
              <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
                We’re the Masters of Next Generation Technologies
              </p>
              <p className="mt-7 text-sm leading-4 text-white">
                Feel the disruption. As we accelerate the technological
                revolution with our smart and simplified solutions- powered by
                next-gen technologies. Get started and engineer the unexpected
                for your better tomorrow.
              </p>
            </div>
            <div className="home-tech-carous mt-12 flex gap-5">
              {homeTechCar.domain.map((item, index) => (
                <div className="home-tech-carous-card" key={index + 1}>
                  <div className="home-tech-carous-inner">
                    <div className="flex justify-between">
                      <h2
                        className=" text-white  font-bold"
                        style={{
                          fontFamily: "Profanations",
                          fontSize: "20px",

                          lineHeight: " 25px",
                          textAlign: " left",
                        }}
                      >
                        {item.name}
                      </h2>
                      <div className="home-tech-card-div"></div>
                    </div>
                    <div>
                      <div className="mt-10">
                        <ul className="flex flex-col gap-4">
                          {item.desc.map((i, index) => (
                            <li
                              className="flex items-center justify-space w-full box-sizing: border-box;"
                              key={index + 1}
                            >
                              <div className="w-[80%]">
                              <p className=" font-sans antialiased font-semibold w-full text-white">
                                {i.tech}
                              </p>
                              </div>
                              <div className="w-[80%] home-tech-tech-logo flex justify-start align-center gap-1 box-sizing: border-box;">
                                <img
                                  src={i.img1}
                                  style={{ width: "20%" }}
                                  alt=""
                                />
                                <img
                                  src={i.img2}
                                  style={{ width: "20%" }}
                                  alt=""
                                />{" "}
                                <img
                                  src={i.img3}
                                  style={{ width: "20%" }}
                                  alt=""
                                />
                                <img
                                  src={i.img4}
                                  style={{ width: "20%" }}
                                  alt=""
                                />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-0 mt-12 flex justify-center item-center">
                        <button
                          className=" flex justify-center align-middle select-none font-sans font-semibold text-center uppercase transition-all  disabled:shadow-none disabled:pointer-events-none text-sm py-2 px-2 rounded-md bg-yellow text-white shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block size-3/4 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                          style={{ backgroundColor: "#fcb924" }}
                          type="button"
                        >
                          Buy Now
                          <MdArrowOutward className="ml-2 text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="new-art w-full">
          <div className="new-art-inn">
            <div
              className="home-des mx-auto max-w-2xl lg:text-center"
              style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
            >
              <h2 className="text-lg font-semibold leading-7 ">
                NEWS & ARTICLE
              </h2>
              <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
                Unveiling Digital Excellence
              </p>
              <p className="mt-7 text-sm leading-4 text-white">
                View the latest blogs, press releases, and stories on our
                development experiences focusing on digital technologies and
                leading market trends.
              </p>
            </div>
            <div className="new-art-cards mt-12 flex gap-4">
              {newArtCard.detail.map((item, index) => (
                <div
                  className="new-art-card relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-md w-96"
                  key={index + 1}
                >
                  <div className="new-art-card-img relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-md ">
                    <img src={item.img} alt="ui/ux review check" />
                  </div>
                  <div className="p-5">
                    <h5 className="block mb-2 font-sans text-md antialiased font-semibold leading-snug tracking-normal text-white">
                      {item.title}
                      <br />
                      {item.name}
                    </h5>
                    <p className="text-yellow-500 font-normal">
                      August 22, 2023 - No Comments
                    </p>
                    <p className="block font-sans  antialiased font-light leading-relaxed text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut quam ligula, sagittis a vulputate iaculis, consectetur
                      in tortor. Proin congue commodo enim. Vestibulum malesuada
                      auctor turpis, nec consectetur ex maximus et. Praesent
                      eget sem vel
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      type="button"
                      className=" text-white border-white border rounded hover:bg-blue-800 focus:ring-4 focus:outline-white focus:ring--300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Choose plan
                      <MdArrowOutward className="ml-2 text-lg" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="award w-full ">
          <div
            className="home-des  lg:text-start"
            style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
          >
            <h2 className="text-lg font-semibold leading-7 ">AWARDS</h2>
            <p className="mt-6 text-5xl font-bold tracking-tight text-white lg:text-5x1">
              Awards and Recognitions
            </p>
            <p className="mt-6 text-sm leading-4 text-white">
              Making a difference by raising the benchmarks. Some of our
              noteworthy and recent recognitions.
            </p>
          </div>
          <div className="award-img-sec w-half flex gap-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/18c5/27d7/d20b5ab416b22d41fb0b0950e07ea938?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dWSdnbmMCXO52jhT~dnkix7LecU1XqZw7IOT2io-G4IRCBZI2F7auCmIqbpWKeMEJeCZgi5R2GxMyBm7ELelnc2AZ0uSoIy71Q6Tub-i9vn8qg~Rlm8ZQYN3ePYwCG~ohmiFNwLbg6WIJI~qtzKe9yYy9EvTZOEmpbl3r0yvSjM79YwT6~U21K0CrGXuCznkTmWUgvWMkyfGqeDNi8pewyjf8r~mPTSQlE4cvJlmYBi4rf80bBJnitq7uwk5uA1Ih5ItwOGuK1S-FqbcJiSlKeRDYx-NxmzxTOdiZsv7M8oPbXiW1oxMvbgenlTEh8ju~eikugBHFKnilf9MAo8RZg__"
              alt=""
              style={{ width: "20%" }}
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/18c5/27d7/d20b5ab416b22d41fb0b0950e07ea938?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dWSdnbmMCXO52jhT~dnkix7LecU1XqZw7IOT2io-G4IRCBZI2F7auCmIqbpWKeMEJeCZgi5R2GxMyBm7ELelnc2AZ0uSoIy71Q6Tub-i9vn8qg~Rlm8ZQYN3ePYwCG~ohmiFNwLbg6WIJI~qtzKe9yYy9EvTZOEmpbl3r0yvSjM79YwT6~U21K0CrGXuCznkTmWUgvWMkyfGqeDNi8pewyjf8r~mPTSQlE4cvJlmYBi4rf80bBJnitq7uwk5uA1Ih5ItwOGuK1S-FqbcJiSlKeRDYx-NxmzxTOdiZsv7M8oPbXiW1oxMvbgenlTEh8ju~eikugBHFKnilf9MAo8RZg__"
              alt=""
              style={{ width: "20%" }}
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/18c5/27d7/d20b5ab416b22d41fb0b0950e07ea938?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dWSdnbmMCXO52jhT~dnkix7LecU1XqZw7IOT2io-G4IRCBZI2F7auCmIqbpWKeMEJeCZgi5R2GxMyBm7ELelnc2AZ0uSoIy71Q6Tub-i9vn8qg~Rlm8ZQYN3ePYwCG~ohmiFNwLbg6WIJI~qtzKe9yYy9EvTZOEmpbl3r0yvSjM79YwT6~U21K0CrGXuCznkTmWUgvWMkyfGqeDNi8pewyjf8r~mPTSQlE4cvJlmYBi4rf80bBJnitq7uwk5uA1Ih5ItwOGuK1S-FqbcJiSlKeRDYx-NxmzxTOdiZsv7M8oPbXiW1oxMvbgenlTEh8ju~eikugBHFKnilf9MAo8RZg__"
              alt=""
              style={{ width: "20%" }}
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/18c5/27d7/d20b5ab416b22d41fb0b0950e07ea938?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dWSdnbmMCXO52jhT~dnkix7LecU1XqZw7IOT2io-G4IRCBZI2F7auCmIqbpWKeMEJeCZgi5R2GxMyBm7ELelnc2AZ0uSoIy71Q6Tub-i9vn8qg~Rlm8ZQYN3ePYwCG~ohmiFNwLbg6WIJI~qtzKe9yYy9EvTZOEmpbl3r0yvSjM79YwT6~U21K0CrGXuCznkTmWUgvWMkyfGqeDNi8pewyjf8r~mPTSQlE4cvJlmYBi4rf80bBJnitq7uwk5uA1Ih5ItwOGuK1S-FqbcJiSlKeRDYx-NxmzxTOdiZsv7M8oPbXiW1oxMvbgenlTEh8ju~eikugBHFKnilf9MAo8RZg__"
              alt=""
              style={{ width: "20%" }}
            />
          </div>
        </div>
        <div className="home-testimonial">
          <div className="home-testimonial-inner">
            <div
              className="home-des mx-auto max-w-2xl lg:text-center"
              style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
            >
              <h2 className="text-lg font-semibold leading-7 ">TESTIMONIAL</h2>
              <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
                This Is What Thers Have To Say
              </p>
              <p className="mt-7 text-sm leading-4 text-white">
                Discover what our clients are saying about their experiences.
              </p>
            </div>
            <div className="flex w-full justify-center align-center pt-5">
              <div className="slider-container" style={{ width: "85%" }}>
                <Slider {...settings}>
                  <div className="p-6 rounded-lg mx-auto bg-gray-100 relative">
                    <div className="flex flex-wrap items-center gap-4">
                      <img
                        src="https://readymadeui.com/team-2.webp"
                        className="w-14 h-14 rounded-full border-4 border-white"
                        alt="fdsf"
                      />
                      <div>
                        <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
                          John Doe
                        </h4>
                        <p className="mt-0.5 text-xs text-gray-600">
                          Founder of Rubik
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-1 mt-4">
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    </div>

                    <div className="mt-6">
                      <p className="text-gray-800 text-sm leading-relaxed">
                        The service was amazing. I never had to wait that long
                        for my food. The staff was friendly and attentive, and
                        the delivery was impressively prompt.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 rounded-lg mx-auto bg-gray-100 relative">
                    <div className="flex flex-wrap items-center gap-4">
                      <img
                        src="https://readymadeui.com/team-2.webp"
                        className="w-14 h-14 rounded-full border-4 border-white"
                        alt="fdf"
                      />
                      <div>
                        <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
                          John Doe
                        </h4>
                        <p className="mt-0.5 text-xs text-gray-600">
                          Founder of Rubik
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-1 mt-4">
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    </div>

                    <div className="mt-6">
                      <p className="text-gray-800 text-sm leading-relaxed">
                        The service was amazing. I never had to wait that long
                        for my food. The staff was friendly and attentive, and
                        the delivery was impressively prompt.
                      </p>
                    </div>
                  </div>
                  <div className="p-6 rounded-lg mx-auto bg-gray-100 relative">
                    <div className="flex flex-wrap items-center gap-4">
                      <img
                        src="https://readymadeui.com/team-2.webp"
                        className="w-14 h-14 rounded-full border-4 border-white"
                        alt="fdklkdfg"
                      />
                      <div>
                        <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
                          John Doe
                        </h4>
                        <p className="mt-0.5 text-xs text-gray-600">
                          Founder of Rubik
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-1 mt-4">
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#facc15]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    </div>
                    <div className="mt-6">
                      <p className="text-gray-800 text-sm leading-relaxed">
                        The service was amazing. I never had to wait that long
                        for my food. The staff was friendly and attentive, and
                        the delivery was impressively prompt.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
