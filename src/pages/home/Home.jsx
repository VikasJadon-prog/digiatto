import React, { useState, useEffect } from "react";
import "../home/Home.css";
import { MdArrowOutward } from "react-icons/md";
import HorizScroll from "../../components/horizontalScroll/HorizScroll";
import homeCard from "../../JSON/homeCard.json";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import expertCard from "../../JSON/expertsCard.json";
import homeTechCar from "../../JSON/home-tech-car.json";
import newArtCard from "../../JSON/newArtCard.json";
import Carousel from "../../components/carousel/Carousel.jsx";
import Client from "../../components/client/Client.jsx";
import homeCarRev from "../../JSON/homeCarRev.json";
import axios from "axios";
// import AOS from "aos";
// import "aos/dist/aos.css";
const Home = () => {
  const slides = homeCarRev;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ourProjData, setOurProjData] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(
    expertCard.detail[0].img
  );
  const handleMouseEnter = (index, img) => {
    setHoveredIndex(index);
    setBackgroundImage(img);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % expertCard.detail.length;
      setBackgroundImage(expertCard.detail[newIndex].img);
      return newIndex;
    });
    setHoveredIndex(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + expertCard.detail.length) % expertCard.detail.length;
      setBackgroundImage(expertCard.detail[newIndex].img);
      return newIndex;
    });
    setHoveredIndex(null);
  };
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://digiatto.onrender.com/project");
      setOurProjData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTech = async () => {
    try {
      const response = await axios.get(
        "https://digiatto.onrender.com/whatwedo"
      );
      // setOurProjData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    fetchTech();
  }, []);
  return (
    <div className="home-cont overflow-hidden flex mt-[0px] w-[100% bg-[#001033] justify-center items-center pb-[50px]">
      <div className="home-inner w-full mt-[70px] w-[100%]">
        <div className="home-des mx-auto text-center sm:max-w-[80%] md:max-w-[70%] lg:max-w-[55%] mt-[130px]  ">
          <h2 className=" customFont  text-lg tracking-wider font-normal leading-8 text-[#FCB61A] text-[20px] ">
            WE'RE THE EXPERTS
          </h2>
         <div className="flex text-center justify-center items-center">
         <p className=" customFont  mt-7 text-6xl font-500 leading-[90px] max-w-[90%] lg:max-w-[100%] md:max-w-[97%]  text-white lg:text-6xl ">
            We Develop <span className="text-[#013cc1] ">Creative</span> Website
            For Your Business
          </p>
         </div>
          <div className=" flex justify-center items-center">
            {" "}
            <p className="mt-7 text-[10.3px] leading-[15px]  tracking-widest font-semibold max-w-xl leading-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat duis aute irure dolor in.
            </p>
          </div>
          <button
            type="button"
            className="mt-10 text-white  hover:bg-blue-800 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #013DC4 0%, #0034A7 100%)",
            }}
          >
            Choose plan
            <MdArrowOutward className="ml-2 text-lg" />
          </button>
        </div>
        <div className="mt-[130px]">
          <HorizScroll />
        </div>
        <div className="home-des mx-auto max-w-2xl lg:text-center mt-[130px] customFont">
          <h2 className="text-lg font-semibold leading-7  text-[#FCB61A]">
            WHAT WE DO
          </h2>
          <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
            We Provide The Best Service For You
          </p>
          <p className="mt-7 text-sm leading-4 text-white">
            We’re helping clients to create with our talented expert.
          </p>
        </div>
        <div className="flex justify-center items-center p-5 mt-[60px]">
          <div className="home-cards grid lg:grid-cols-3 md:grid-cols-2 gap-[3em] sm:grid-cols-1">
            {homeCard.domain.map((item, index) => (
              <div className="home-card  hover:bg-transparent" key={index + 1}>
                <div className="home-card-inner  w-[76px] h-[70px] rounded-[10px] ml-[25px] mb-[-45px]  relative border-[#012b89] border-[1.5px] bg-[#001035]">
                  {/* <img
                    src="https://res.cloudinary.com/dalkzi1x8/image/upload/v1721639734/whatwedo/1721639733423-MobileAppDevelopemnt.avif.jpg"
                    alt=""
                    className="w-full h-full rounded-lg"
                  /> */}
                </div>
                <div className="card-desc max-w-sm p-6 rounded-[10px] bg-[#001035] border-[#012b89] border-[1.5px]">
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
        </div>
        <div className="our-Proj mt-[130px]">
          <div className="our-proj-inner flex justify-space items-center w-full">
            <div className="home-des lg:text-start   w-[60%]  text-[20px]">
              <h2 className="text-lg font-semibold leading-7 text-[#FCB61A]">
                OUR PROJECT
              </h2>
              <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
                The Work We Have Done
              </p>
              <p className="mt-7 text-sm leading-4 text-white">
                Customer Experience is everything! We design & create solutions
                by spotting customers’ actions, emotions, and unmet needs. We
                make enterprises that impact lives.
              </p>
            </div>
            <div className="w-[40%] flex  justify-end  items-center">
              <button className="customFont bg-[#013bbe] text-white px-[30px] py-[12px] rounded-[5px] text-[0.8rem] font-normal hover:bg-[#04287b] flex justify-space items-center">
                See More <MdArrowOutward className="ml-2 text-lg" />
              </button>
            </div>
          </div>
          <div className="our-proj-cards mt-[70px]  grid lg:grid-cols-3 gap-[3em] sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 justify-center mb-8">
            {ourProjData.map((item, index) => (
              <div
                className="our-proj-card lg:w-[370px] lg:h-[300px] rounded-[10px] sm:w-[390px] sm:h-[305px] "
                key={index + 1}
              >
                <div class="flip-card-inner relative w-full h-full text-center ">
                  <div class="flip-card-front rounded-[10px] bg-transparent">
                    <img
                      src={item.image}
                      alt="Avatar"
                      className="w-full h-full rounded-[10px]"
                    />
                  </div>

                  <div className="our-proj-card-des flex justify-center items-center bg-[#013dc4] rounded-[10px] border border-[#3A384F] hover:shadow-[0px_0px_23.9px_0px_#73708E69] flex items-center w-full h-full">
                    <div
                      className="home-des px-[15px] lg:text-center"
                      style={{
                        color: "rgba(252, 182, 26, 1)",
                        fontSize: "20px",
                      }}
                    >
                      <p className=" text-2xl font-semibold tracking-tight text-white lg:text-5x1">
                        {item.title}
                      </p>
                      <p className="mt-7 text-sm leading-4 text-white">
                        {item.description}
                      </p>

                      <button
                        type="button"
                        className="mt-8 text-white bg-[#FCB61A] hover:bg-yellow-800 focus:ring-10 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center  items-center"
                      >
                        <FaArrowRightLong />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Client />
        </div>
        <div className="expert mt-[130px]">
          <div className="expert-desc px-[5%] py-[2%] w-[100%] flex justify-between">
            <div className="home-des  lg:text-start">
              <h2 className="text-lg font-semibold leading-7 uppercase text-[#FCB61A]">
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
                className="mt-8 text-white bg-transparent  border border-white hover:bg-blue-800 focus:ring-10 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center items-center"
                onClick={handlePrev}
              >
                <FaArrowLeftLong style={{ fill: "white", fontSize: "20px" }} />
              </button>
              <button
                type="button"
                className="mt-8 text-white  focus:ring-10 focus:outline-none hover:bg-blue-800 border border-white focus:ring-blue-300 font-medium rounded-full text-sm p-3 text-center items-center"
                onClick={handleNext}
              >
                <FaArrowRightLong style={{ fill: "white", fontSize: "20px" }} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="expert-carous flex w-full relative divide-x-[1.5px] divide-transparent mt-[40px]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {expertCard.detail.map((item, index) => (
            <div
              className="expert-carous-inner w-[100%] h-[425px] relative max-w-xl mx-auto w-1/4 p-4"
              key={index}
              onMouseEnter={() => handleMouseEnter(index, item.img)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-[#000000] opacity-40"></div>
            
                <div className="absolute overflow-hidden inset-0 flex items-end justify-center">
                  <div
                    className={`expert-crrrr transform ${
                      hoveredIndex === index || currentIndex === index
                        ? "translate-y-[-40px]"
                        : "translate-y-[35px]"
                    } transition-transform duration-[.7s]`}
                  >
                    <h2 className="text-white font-semibold text-xl max-w-md mb-[40px] text-center">
                      {item.name}
                    </h2>
                    <div className="exper-carousel-but">
                      <button
                        type="button"
                        className="text-white bg-blue-800 focus:ring-10 focus:outline-none focus:ring-white mt-[-5px] font-medium rounded-full border-white border text-sm p-2 text-center items-center"
                      >
                        <FaArrowRightLong
                          style={{ fill: "white", fontSize: "17px" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              
            </div>
          ))}
        </div>
        <div className="home-tech  w-[100%] px-[2%] py-[5%] mt-[130px]">
          <div className="home-tech-desc">
            <div className="home-des mx-auto max-w-2xl text-center">
              <h2 className=" lg:text-lg font-semibold leading-7 text-[#FCB61A] ">
                TECHNOLOGIES
              </h2>
              <p className="mt-7 text-5xl w-full  font-bold tracking-tight text-white ">
                We’re the Masters of Next Generation Technologies
              </p>
              <p className="mt-7  text-sm leading-4 text-white">
                Feel the disruption. As we accelerate the technological
                revolution with our smart and simplified solutions- powered by
                next-gen technologies. Get started and engineer the unexpected
                for your better tomorrow.
              </p>
            </div>
            <div className="home-tech-carous mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 gap-5">
              {homeTechCar.domain.map((item, index) => (
                <div className="home-tech-carous-card" key={index + 1}>
                  <div className="home-tech-carous-inner">
                    <div className="flex justify-between text-[25px]">
                      <h2 className=" text-white text-[25px] leading-[25px] text-left font-bold xl:max-w-[200px] lg:max-w-[119px] sm:max-w-[80px]">
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
        <div className="new-art w-full mt-[130px]  px-[2%] py-[5%]">
          <div className="new-art-inn">
            <div className="home-des mx-auto max-w-2xl text-center text-[#FCB61A]">
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
            <div className="new-art-cards mt-12 grid grid-cols-3 gap-4">
              {newArtCard.detail.map((item, index) => (
                <div
                  className="new-art-card bg-[#001035] relative w-fit flex flex-col mt-6 text-gray-700  shadow-md bg-clip-border border-[#013DC4] border rounded-md w-96"
                  key={index + 1}
                >
                  <div className="new-art-card-img h-[200px] relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-md ">
                    <img
                      src={item.img}
                      className="w-[100%] h-[100%]"
                      alt="ui/ux review check"
                    />
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
        <div className="award w-[100%]  justify-space items-center grid lg:grid-cols-2  md:gap-y-[4em] gap-y-[5em] px-[06%]  mt-[100px]">
          <div className="home-des l mt-[0px] lg:w-half md:w-full text-center lg:text-start md:text-start sm:w-full ">
            <h2 className="text-lg font-semibold leading-7 text-[#FCB61A] ">
              AWARDS
            </h2>
            <p className="mt-6 text-5xl font-bold tracking-tight text-white lg:text-5x1">
              Awards and Recognitions
            </p>
            <p className="mt-6 text-sm leading-4 text-white">
              Making a difference by raising the benchmarks. Some of our
              noteworthy and recent recognitions.
            </p>
          </div>
          <div className="award-img-sec sm:w-full lg:w-half md:w-full md:justify-center sm:justify-center flex lg:justify-end gap-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/18c5/27d7/d20b5ab416b22d41fb0b0950e07ea938?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K3ZdmCSYrTsXQMvwXaPy0Eszo-2JIRd89R4vxcUuQ-QxIf2AABrT3XczR9uv9TX5zewGaAiM21gcD0K~xUuwhkpwIcLV14oo-SQQEbD8B3qLDw41xyRfhBdOdT5UMayPWPcBUR~elh8k1NNVWXzmvmDs0~y8HzTJNBBtgoOeJzdcdRqtUrN~Q84PMUgmSySBsAf0GKE3OXDiNk9U0f94Z0uRBhhkreY3PVBQs3Vbqnx-tMfLVlnMOaJ~kRBAm2pfM91e1TPiYkPvF4H7M9hmFqsuhel7IWCVO-bL4cF-7tQNdMWwc2rWYQZDWzcG5oVWmwcSGoshL84DIoS0kmKMdg__"
              alt=""
              className="w-[20%]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/18c5/27d7/d20b5ab416b22d41fb0b0950e07ea938?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K3ZdmCSYrTsXQMvwXaPy0Eszo-2JIRd89R4vxcUuQ-QxIf2AABrT3XczR9uv9TX5zewGaAiM21gcD0K~xUuwhkpwIcLV14oo-SQQEbD8B3qLDw41xyRfhBdOdT5UMayPWPcBUR~elh8k1NNVWXzmvmDs0~y8HzTJNBBtgoOeJzdcdRqtUrN~Q84PMUgmSySBsAf0GKE3OXDiNk9U0f94Z0uRBhhkreY3PVBQs3Vbqnx-tMfLVlnMOaJ~kRBAm2pfM91e1TPiYkPvF4H7M9hmFqsuhel7IWCVO-bL4cF-7tQNdMWwc2rWYQZDWzcG5oVWmwcSGoshL84DIoS0kmKMdg__"
              alt=""
              className="w-[20%]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/18c5/27d7/d20b5ab416b22d41fb0b0950e07ea938?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K3ZdmCSYrTsXQMvwXaPy0Eszo-2JIRd89R4vxcUuQ-QxIf2AABrT3XczR9uv9TX5zewGaAiM21gcD0K~xUuwhkpwIcLV14oo-SQQEbD8B3qLDw41xyRfhBdOdT5UMayPWPcBUR~elh8k1NNVWXzmvmDs0~y8HzTJNBBtgoOeJzdcdRqtUrN~Q84PMUgmSySBsAf0GKE3OXDiNk9U0f94Z0uRBhhkreY3PVBQs3Vbqnx-tMfLVlnMOaJ~kRBAm2pfM91e1TPiYkPvF4H7M9hmFqsuhel7IWCVO-bL4cF-7tQNdMWwc2rWYQZDWzcG5oVWmwcSGoshL84DIoS0kmKMdg__"
              alt=""
              className="w-[20%]"
            />
            <img
              src="https://s3-alpha-sig.figma.com/img/18c5/27d7/d20b5ab416b22d41fb0b0950e07ea938?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K3ZdmCSYrTsXQMvwXaPy0Eszo-2JIRd89R4vxcUuQ-QxIf2AABrT3XczR9uv9TX5zewGaAiM21gcD0K~xUuwhkpwIcLV14oo-SQQEbD8B3qLDw41xyRfhBdOdT5UMayPWPcBUR~elh8k1NNVWXzmvmDs0~y8HzTJNBBtgoOeJzdcdRqtUrN~Q84PMUgmSySBsAf0GKE3OXDiNk9U0f94Z0uRBhhkreY3PVBQs3Vbqnx-tMfLVlnMOaJ~kRBAm2pfM91e1TPiYkPvF4H7M9hmFqsuhel7IWCVO-bL4cF-7tQNdMWwc2rWYQZDWzcG5oVWmwcSGoshL84DIoS0kmKMdg__"
              alt=""
              className="w-[20%]"
            />
          </div>
        </div>
        <div className="home-testimonial">
          <div className="home-testimonial-inner">
            <div className="home-des mx-auto max-w-2xl lg:text-center mt-[50px]">
              <h2 className="text-lg font-semibold leading-7 text-[#FCB61A]">
                TESTIMONIAL
              </h2>
              <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
                This Is What Thers Have To Say
              </p>
              <p className="mt-7 text-sm leading-4 text-white">
                Discover what our clients are saying about their experiences.
              </p>
            </div>
            <div className="flex w-full justify-center items-center pt-5">
              <div
                className="slider-container p-5 overflow-visible"
                style={{ width: "90%" }}
              >
                <Carousel slides={slides} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
