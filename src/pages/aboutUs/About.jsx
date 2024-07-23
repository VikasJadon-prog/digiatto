import React from "react";
import "../aboutUs/About.css";
import HorizScroll from "../../components/horizontalScroll/HorizScroll";
import Client from "../../components/client/Client.jsx";
import ContactForm from "../../components/contactForm/ContactForm.jsx";

const About = () => {
  return (
    <div className="about bg-[#001033]">
      <div className="about-inner">
        <div className="about-main-des">
          <div
            className="home-des mx-auto  lg:text-center"
            style={{ color: "rgba(252, 182, 26, 1)" }}
          >
            <h2 className="text-lg font-semibold leading-7 ">
              DIGIATTO IT SERVICES
            </h2>
            <p className="mt-8 w-full text-6xl max-w-[95%] font-semibold  tracking-tighter text-white lg:text-5x1 ">
            Your Trusted Technology <span className='text-[#013cc1]'>Partner</span>
          </p>
            
          <div className="flex justify-center items-center">
          <p className="mt-7 text-sm leading-4 text-white max-w-[50%]">
              In today's rapidly evolving digital landscape, having a reliable
              and innovative IT partner is crucial for success. At Digiatto IT
              Services, we understand the challenges businesses face and are
              dedicated to providing comprehensive IT solutions that empower you
              to achieve your goals.
            </p>
          </div>
          </div>
        </div>
        <div className="about-poster">
          <img
            src="https://s3-alpha-sig.figma.com/img/6aa5/4f0f/bd039f96e62f2b9c53b6d4a49bc12667?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLMFV19L5Z3IdILAIttnIRLHhM6QATuX~OLV39ZbYdEapzIRT6cWY820l-M~hUd8G4w6-mGWVPphj8CBGW6sCmzKGwqoPi14W1O9JzHw3dzIvrVbaKl3-JA8ZD6YrUf407Ialegxn0CVwYqzpOTJ78W2H9TdX2HgV-zcGgqTZkgC8QGs4h9lWbf571vQWMtmXDy8JaK-g-oOosoVu2VwgF8nMK8DZ~FH4mgDSMQmYlu4dd7K36k~kgDTpyjiZID-M9Mrj47aQLWD9Xq~b4CKuICayztP~3bRa3PnmALgxxmS4F9eY-3UWDRgB7SbCsLvSSRSP2-7xEdWP~DledEh1Q__"
            alt="about-imge"
          />
        </div>
        <div className="about-exce">
          <div className="about-excel-des">
            <div
              className="home-des mx-auto max-w-2xl lg:text-center"
              style={{ color: "rgba(252, 182, 26, 1)" }}
            >
              <p className="mt-7 text-5xl text-semibold tracking-tight text-white lg:text-5x1">
                Your Trusted Technology Partner
              </p>
              <p className="mt-7 text-sm  leading-4 text-white">
                We recognize the chaotic nature of business, and that’s
                precisely where our expertise shines. Our focus is on restoring
                balance amidst the chaos by establishing genuine partnerships
                with our clients. When you collaborate with us, you’re engaging
                with a team that comprehends your challenges and aspirations.
                Together, we navigate the chaos, bringing order to your business
                landscape.
              </p>
            </div>
          </div>
          <div className="about-exce-timeline mt-10">
            <ol className="items-center sm:flex">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.0.0
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 2, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.2.0
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 23, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.3.0
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on January 5, 2022
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="about-map">
          <div
            className="home-des mx-auto max-w-2xl lg:text-center"
            style={{ color: "rgba(252, 182, 26, 1)" }}
          >
            <p className="mt-7 text-5xl font-semibold tracking-tight text-white lg:text-5x1">
              Our Clients Around The World
            </p>
            <p className="mt-7 text-sm font-semibold leading-4 text-white">
              We understand the value of work, but we also appreciate the
              importance of play! We hold all our partnerships in high regard,
              and we actively seek enjoyable ways to tackle crucial challenges,
              leaving you with a solution and a smile. We are passionate about
              our work, dedicated to aiding our clients, and we firmly believe
              in savoring every moment because life is too short not to enjoy
              every minute!
            </p>
          </div>
          <div className="mt-14 w-full flex justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/b1de/a09e/53633b273328e2cd659b1e44cd33c9cd?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RFII7Yzh8I3dYL-9H9fKfwZyP~WtGhaEqXg53bgO~V2jEhK~UybdP6en3qRdUJUeuxPIaXH7IjfEnKQ~ElXRj5MO3IIRnHFvUCie0DxSaHR6izr~NkgSu6oJaz2Vv9kTocuzmUt5oCfyWNPh5eI~WRk-reFwpV~rPYiRbFBTuPUmxOzgvY~ysOAn986wTHiFIqOBy1ltkux-waNxeeDK99UScIkvUuWo8kQzZyOj~j7U9U8xYmrTns88hiGyAYBbgeiiGzPLv1Fecd7353xLZ2PpzCIZ~f1ZrNsmL7VqVCrPhiBpT39IYAAg1XMPpOaOeY2YOBLUIFHcOCOhsVjyUw__"
              alt=""
            />
          </div>
        </div>
        <div className="about-innovator w-full">
          <div className="about-innovator-desc w-full flex justify-between items-center">
            <div className="about-innovator-desc-cont w-half">
              <div
                className="home-des mt-[160px] lg:text-start"
                style={{ color: "rgba(252, 182, 26, 1)", fontSize: "20px" }}
              >
                <h2 className="text-lg font-semibold leading-7  text-[#FCB61A] text-[20p]">INNOVATORS</h2>
                <p className="mt-7 text-5xl font-bold tracking-tight text-white lg:text-5x1">
                  Company Built By A Global Team Of Innovators
                </p>
                <p className="mt-7 text-sm leading-4 text-white">
                  In blandit luctus proin mauris a commodo, dolor diam tempus,
                  aenean magna fusce eu. Id porttitor aliquam eget aliquet
                  sagittis eu aut diam utphasellus sed convallis iaculis neque
                  ultricies convallis sed enim
                </p>
              </div>
            </div>
            <div className="about-innov-card w-half ">
              <div className="about-innov-card-inner flex justify-end items-center gap-x-2 ">
                <div className="about-innov-card-inner-right-card ">
                  <div className="feedback-card">
                    <div className="feedback-header">
                      <div className="flex justify-center">
                        <svg
                          width="116"
                          height="32"
                          viewBox="0 0 116 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_224_188)">
                            <path
                              d="M31.4912 0.444092H36.4016V30.826H31.4912V0.444092Z"
                              fill="#D4D7E5"
                            />
                            <path
                              d="M53.4817 21.1979C53.4817 25.9049 49.6387 26.3328 48.3577 26.3328C45.3688 26.3328 44.9417 23.5514 44.9417 22.0537V10.2861H40.0312V21.8397C40.0312 24.6212 40.8853 27.1887 42.5933 28.6864C44.0878 30.1841 46.0093 30.8259 48.3577 30.8259C50.0657 30.8259 52.2007 30.398 53.4817 29.1143V30.8259H58.392V10.2861H53.4817V21.1979Z"
                              fill="#D4D7E5"
                            />
                            <path
                              d="M67.9989 2.79761H63.0884V10.2861H59.459V14.9932H63.0884V30.826H67.9989V14.9932H71.6283V10.2861H67.9989V2.79761Z"
                              fill="#D4D7E5"
                            />
                            <path
                              d="M87.0002 24.6215C85.9327 25.4773 84.4383 26.1192 82.9438 26.1192C79.5278 26.1192 77.1794 23.5517 77.1794 20.1284C77.1794 16.7051 79.5278 14.3515 82.9438 14.3515C84.4383 14.3515 85.9327 14.7794 87.0002 15.8492L87.6407 16.4911L91.0567 13.2817L90.2027 12.6399C88.2812 10.9282 85.7192 9.8584 82.9438 9.8584C76.9659 9.8584 72.4824 14.3515 72.4824 20.3423C72.4824 26.3331 76.9659 30.8262 82.9438 30.8262C85.7192 30.8262 88.2812 29.7564 90.2027 28.0448L91.0567 27.4029L87.6407 23.9796L87.0002 24.6215Z"
                              fill="#D4D7E5"
                            />
                            <path
                              d="M108.35 11.9978C106.856 10.5001 105.361 9.85821 103.013 9.85821C101.305 9.85821 99.5967 10.2861 98.3157 11.5699V0.444092H93.4053V30.826H98.3157V19.4863C98.3157 14.7792 101.518 14.3513 102.799 14.3513C105.788 14.3513 105.575 17.1328 105.575 18.6305V30.6121H110.485V18.8444C110.485 16.063 109.845 13.4955 108.35 11.9978Z"
                              fill="#D4D7E5"
                            />
                            <path
                              d="M82.7294 23.7655C84.616 23.7655 86.1454 22.2328 86.1454 20.3422C86.1454 18.4516 84.616 16.9189 82.7294 16.9189C80.8429 16.9189 79.3135 18.4516 79.3135 20.3422C79.3135 22.2328 80.8429 23.7655 82.7294 23.7655Z"
                              fill="#D4D7E5"
                            />
                            <path
                              d="M24.659 23.3376C22.9511 25.0493 20.3891 26.119 17.6136 26.119C12.2762 26.119 8.43326 21.8399 8.43326 16.0631C8.43326 10.2862 12.2762 6.00709 17.8271 6.00709C20.3891 6.00709 22.9511 7.07687 24.8725 9.00248L25.513 9.64435L28.7155 6.435L28.075 5.79313C25.2995 3.01168 21.6701 1.51399 17.8271 1.51399C9.71424 1.30003 3.73633 7.71874 3.73633 16.0631C3.73633 24.4074 9.71424 30.8261 17.6136 30.8261C21.4566 30.8261 25.2995 29.3284 27.8615 26.547L28.502 25.9051L25.2995 22.6957L24.659 23.3376Z"
                              fill="#D4D7E5"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_224_188">
                              <rect
                                width="116"
                                height="31"
                                fill="white"
                                transform="translate(0 0.0400391)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>

                      <h2 className="font-bold text-[25px]">100% </h2>
                      <p className="font-semibold">Positive Feedback</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <div className="mt-4 flex justify-center">
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="sdfd"
                      />
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="fsdfsdf"
                      />
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt="dfsdf"
                      />
                      <img
                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="dfds"
                      />
                    </div>
                  </div>
                </div>
                <div className="about-innov-left-card grid gap-y-2">
                  <div className="about-innov-left-card-up">
                    <div>
                      <img
                        src="https://s3-alpha-sig.figma.com/img/08a7/f53d/9e15f020a8cad1c5e4241f64c6e688f3?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VpddVggLjhbwYGywN0xQPvNPKPyHFApQOog8U1pyC-J25AhFy7kgwDK1i5SV6GvWY756wgtQEnPA0CU-RYybbnifp9nb3WWVagacy5Y9iorOVKCBdAYgvE86Ti~rhHo20GgD4ItIvbo284fy4U-~qL1etN5gMVuagv7PKNOYT1PRKmd-9msqeE7tRhNS2cFS-9cWSfc4v86wNoo2j1CLixCssq21lmTo-iYnoBVvebghQLhSkiaAK-zwSmQF2gOWA8Cn-9rlN31T7NGRub-rrLEBHP7ClZsOBIBg0SIPon6PNmSgo9BUSIBkemSkY8NesXgUH8qhga-fg2RE7CWtrg__"
                        alt="adksjlf"
                      />
                    </div>
                    <div className="item-center mt-12 justify-center">
                      <h2 className="font-bold text-[25px] flex justify-start">
                        24/7
                      </h2>
                      <p className="font-semibold flex justify-start">
                        Chat Support
                      </p>
                    </div>
                  </div>
                  <div className="about-innov-left-card-low">
                    <div className="flex justify-end item-center">
                      <svg
                        width="143"
                        height="85"
                        viewBox="0 0 143 85"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 81.034H5.443C5.64987 81.034 5.85165 80.9699 6.02054 80.8504C6.18943 80.731 6.31711 80.5621 6.386 80.367L9.343 71.996C9.40501 71.8207 9.5147 71.6661 9.65974 71.5496C9.80477 71.4332 9.9794 71.3595 10.164 71.3369C10.3486 71.3142 10.5359 71.3435 10.7048 71.4214C10.8736 71.4994 11.0174 71.6228 11.12 71.778L15.526 78.449C15.57 78.5155 15.606 78.587 15.633 78.662L16.742 81.744C17.065 82.643 18.344 82.62 18.635 81.71L25.938 58.887C26.22 58.007 27.442 57.947 27.808 58.795L30.2 64.334C30.2535 64.4578 30.3314 64.5696 30.4292 64.6625C30.527 64.7554 30.6426 64.8276 30.769 64.8746C30.8954 64.9217 31.03 64.9428 31.1647 64.9365C31.2995 64.9302 31.4315 64.8967 31.553 64.838L35.333 63.014C35.4675 62.949 35.5857 62.8548 35.679 62.7381C35.7722 62.6215 35.8382 62.4855 35.872 62.34L42.467 34.04C42.675 33.147 43.876 32.981 44.317 33.785L45.187 35.368C45.2732 35.525 45.4001 35.656 45.5543 35.7472C45.7085 35.8385 45.8843 35.8866 46.0635 35.8866C46.2427 35.8866 46.4185 35.8385 46.5727 35.7472C46.7269 35.656 46.8538 35.525 46.94 35.368L48.783 32.015C48.8693 31.8582 48.9961 31.7273 49.1502 31.6362C49.3043 31.5451 49.48 31.497 49.659 31.497H55.277C55.4723 31.497 55.6633 31.4397 55.8264 31.3324C55.9895 31.2251 56.1177 31.0723 56.195 30.893L59.978 22.133C60.35 21.271 61.597 21.351 61.857 22.253L63.92 29.42C63.9728 29.6035 64.0769 29.768 64.2202 29.8941C64.3634 30.0203 64.5398 30.1028 64.7285 30.1319C64.9171 30.1611 65.1102 30.1356 65.2848 30.0585C65.4594 29.9814 65.6084 29.856 65.714 29.697L67.626 26.82C67.7312 26.6615 67.8794 26.5363 68.0533 26.4591C68.2272 26.3819 68.4195 26.3558 68.6076 26.3841C68.7958 26.4123 68.9719 26.4937 69.1155 26.6185C69.259 26.7434 69.364 26.9066 69.418 27.089L73.779 41.817C73.8333 42.0004 73.939 42.1644 74.0836 42.2895C74.2282 42.4146 74.4057 42.4957 74.595 42.523L76.996 42.871C77.2518 42.9081 77.4834 43.0429 77.642 43.247L80.364 46.75C80.4635 46.878 80.5927 46.9799 80.7404 47.0469C80.8881 47.1139 81.0498 47.144 81.2117 47.1345C81.3736 47.1251 81.5308 47.0764 81.6697 46.9927C81.8086 46.909 81.925 46.7927 82.009 46.654L84.174 43.072C84.231 42.977 84.272 42.874 84.296 42.766L86.407 32.99L93.658 8.609C93.6881 8.50809 93.734 8.41258 93.794 8.326L96.214 4.823C96.3111 4.68247 96.4425 4.56914 96.5958 4.49382C96.7491 4.4185 96.9191 4.38369 97.0896 4.39271C97.2602 4.40174 97.4256 4.45429 97.5701 4.54537C97.7146 4.63645 97.8333 4.76301 97.915 4.913L102.248 12.856C102.274 12.9048 102.297 12.9556 102.315 13.008L105.704 22.819C106.006 23.694 107.233 23.724 107.577 22.865L111.756 12.444C111.807 12.316 111.885 12.1999 111.983 12.1032C112.081 12.0065 112.199 11.9311 112.327 11.8819C112.456 11.8327 112.594 11.8107 112.732 11.8172C112.869 11.8238 113.004 11.8588 113.128 11.92L114.485 12.593C114.68 12.6898 114.902 12.7203 115.116 12.6796C115.33 12.639 115.525 12.5296 115.671 12.368L123.649 3.55C123.757 3.43106 123.892 3.33982 124.042 3.28396C124.193 3.22811 124.354 3.20929 124.513 3.2291C124.673 3.24891 124.825 3.30677 124.957 3.39778C125.089 3.48879 125.198 3.61029 125.273 3.752L127.494 7.931C127.561 8.05799 127.655 8.16897 127.77 8.25635C127.884 8.34373 128.015 8.40548 128.156 8.43737C128.296 8.46926 128.441 8.47055 128.582 8.44114C128.723 8.41174 128.855 8.35235 128.971 8.267L131.456 6.436C131.593 6.33501 131.754 6.27077 131.923 6.24938C132.092 6.22799 132.264 6.25015 132.422 6.31377C132.58 6.37738 132.719 6.48034 132.826 6.61286C132.933 6.74539 133.005 6.90309 133.034 7.071L134.627 16.292C134.806 17.327 136.255 17.422 136.567 16.419L141.357 1"
                          stroke="#22C55E"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="item-center mt-2 justify-center">
                      <h2 className="font-bold text-[25px] flex justify-start">
                        +12K
                      </h2>
                      <p className="font-semibold flex justify-start">
                        New leads for clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-horizScroll">
            <HorizScroll />
          </div>
        </div>
        <div className="about-client">
          <Client />
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default About;
