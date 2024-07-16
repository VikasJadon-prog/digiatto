import React from "react";
import "../blog/Blog.css";
import { MdArrowOutward } from "react-icons/md";

const Blog = () => {
  return (
    <div className="blog">
      <div
        className="indus-st w-full h-full pb-[100px] "
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side, #0f1563, #001033)",
        }}
      >
        <div
          className="home-des mt-0 py-6 pb-14 mx-auto max-w-5xl lg:text-center text-center"
          style={{
            color: "rgba(252, 182, 26, 1)",
            fontSize: "clamp(16px, 4vw, 20px)",
          }}
        >
          <h2 className="text-lg mt-3 font-semibold leading-10">
            STARTUPS, DESIGN, TECHNOLOGY
          </h2>
          <p className="mt-8 text-5xl lg:text-6xl font-semibold tracking-tight leading-14 text-white">
            Digiatto <span className="text-[#013cc1]"> Insights</span>
          </p>
          <div className="flex justify-center">
            <p className="mt-9  lg:text-sm leading-6 text-white lg:max-w-xl sm:text-xs sm:max-w-sm text-center">
              View the latest stories, insights and our development experiences
              focusing on Digital Technologies, Enterprise Mobility, and Web
              Development.
            </p>
          </div>
        </div>
      </div>
      <div
        className="border p-10 border-[#013DC4]  rounded-sm shadow-[0px_0px_23.9px_0px_#013DC469]"
        style={{
          backgroundImage:
            "radial-gradient(circle farthest-side, #0f1563, #001033)",
        }}
      >
        <div className="blog-st grid mt-[40px] lg:flex  gap-y-[3em] justify-space items-center">
          <div className="port-card-img md:order-2  w-[100%]  h-[100%] flex items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/dd34/af04/88636d5a4247014c1d6c006927c84c2d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IpbmLooByvz393qP5yKXPOK5QXXflzuPkHrxpKPskT7xUAIIyUyMHMM~mrmOc9MgZzB~8SGtKbFzox5~VBXgOiwJiZS64qwSMd~x-qul9TPAfJTU4Mt04xw-YW4wr01OMRYxWRaY5VLnqX32xFKY3Hw8rPw3Npfvv8k9Zt7cEyicthlVU-~SoMylLHacnASOqhmbFSF3ZNUanjUg6KxxtgWZVxyoSQ-w9N5u6z9IIPcWz~l~2xLB-sOVspt4b-rXfnK4G2EoXcicGEnRqCfPETd2bq9T6hCvBWt7pZjCq5mxa3Oy9exKiYgoJ5tZv~z3UJGbmUz0ks5YjfnqyVOZbg__"
              alt=""
              className="w-[100%] h-[100%] rounded-[10px]"
            />
          </div>
          <div className="port-card-cont w-[100%] md:order-1 ">
            <div className="flex justify-start gap-1 items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/7d95/44fe/2b4314df3d2e4dcf4eb9840eec9590c1?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FEQDHd8fJO9cE0Ho28WuSi0GrBSUHjRBqyo4MNe98BVNDm4SULgxi-jms1IALZ6JHIGS1IDTARnXZat8NnwTugQhmUz1IO8N1aN3pRvJrt2kEbZeusxYyDaE2aMqvi97ZOuMJjQN9mRoGoZ7gvNQoE~GQpIlYbXDzyqQs7Dc2~1pt7ZxBYnzR7ePYsfPofZfre9EHXDqSAcYCnYj2UVzwQZlLOrL8SVH5H3tIhNZECkGePQ6VkrkvcdNxC~7AodtNYTk2Z1QVOeew6yGB15HUVJVQC8L46gO~Jgeo89bTVnxYXLbzdreWw~9gwKhXPvr-gQGMi0gtgEAVV3HPvDxpA__"
                className="w-[30px] h-[30px]"
              />
              <span className="block font-semibold text-sm text-white uppercase">
                Hot topic
              </span>
            </div>
            <h2 className="text-white font-semibold leading-[45px] mt-5 dark:text-white mb-6 text-[20px] font-semibold sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              This Long-Awaited Technology May Finally Change the World
            </h2>
            <p className="text-base mt-6 text-white leading-[20px] lg:text-[13px] w-3/4 mb-6 md:text-[10px]"></p>
            <div className="flex justify-start items-center text-xs font-semibold text-white gap-x-4">
              <span>Technology </span>
              <span>|</span>
              <span> 12 Hours Ago </span>
              <span>|</span>
              <div className="flex gap-x-6">
                <span className="flex justify-center items-center gap-1.5">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/0355/139f/b5022196a7d27c089a7f6eb6c3bb7c39?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nOOCzlzNysgRm91~KtQMAR6FZD3-9mX3naka3nKfJyC5syD93CDWxZKVtDNssBk8l6ao2VrWbmfn3Kp3HkYInj7hm10GGRBgcTjNH4O-~F3jir7qfcBffUJyrx9otxN8YZ8xo~zZ5vyt8kKNpy67~xxZWwmVJsMo7ei7VpGw3JlyjKUMgA7QlRAhL3eML9yFghAfWBiKRse-A-AgddhyPDd-G7wVDCybr11Dqm2LHDz34pjww62sOJOgp1hVJqz2p1L3bf7EEJ4qshsOLoF8~uy-CSlhzBLi~u9w7fReVr6zk8elodtgjvrUle8TQSbQQRb-tAh~HY5g5~NwyleCng__"
                    alt="like"
                    className="w-[20px] font-normal"
                  />
                  <span>05</span>
                </span>
                <span className="flex justify-center items-center gap-1.5">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/998a/0505/602a8f5214cf9cce64817d915bcb3f60?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QhHB3-wMxHh2EZSe0msbM35VdvCzeiN4lGgzE59FH3YvDSpw40cqYUNEsdOPDS469Gf8AnLJTPMqvM7TmVszbXElFueL8bX1HJLfPqlHJf0cM0Zg0339XA2yFKKtQgS~GHi9D4zIlcVeL0JS4WCnNM4TYyRVpJOwNTjrIqF4PGPbS5slp6GPvg8nb-xrllR~24sx~O1M2dpxE4~f5tT1O9SCTp6tvr5hWD1Q8JE388UFCKyPC-abU56UvJRXOQGxtcCW0QKpIRueWHjvOq8au9x5-wxrWk0pXW6x0VvgwNisKtYoakrmPcl7JRvcHy4RTx5FN-X6nHNG9rGVYilDiQ__"
                    alt="like"
                    className="w-[20px] font-normal"
                  />
                  <span>13</span>
                </span>
                <span className="flex justify-center items-center gap-1.5">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/fb49/74a0/e0bfb394260f20e73f81a2cd46c20adb?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MOuQyipfeKy3At~Spnl0M1bH67dFC4pYhYr--tP3VGRvkSP~S80mzUckisJj-jy0u8RQdoAPtl5rHaFJ5paIPyGXa9EbB7GAX2s-sjZ5gixDiKcct813tOX784a0P34inWM5FSLUaabbaGLeDI7pT2Ex3Yo0qNJxY6P-YiE8F2YTd3ekinMwb-Xzf9aDQE5cnMhvTGWvxXfx9OqfuMnDzLOIWxah333MaPjgZ8dF-rjf8ORFCXtwDhpIahXEk6gKJh8EfhXmFls5nE~HrAbdOCYEW92X-44DhZG09rdcUeRO565EN5SIGOOgxHUuida3dVvTzaMV1icAZd0gpULXAA__"
                    alt="like"
                    className="w-[20px] font-normal"
                  />
                  <span>15</span>
                </span>
              </div>
            </div>
            <button
              type="button"
              className="mt-10 text-white rounded-md focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFC84D 0%, #FCB61A 100%)",
              }}
            >
              Read More
              <MdArrowOutward className="ml-2 text-lg" />
            </button>
          </div>
        </div>
        <div className="w-full " >
        <h3 className="text-center text-white font-bold text-2xl">Popular Posts</h3>

      </div>
      </div>
      
    </div>
  );
};

export default Blog;
