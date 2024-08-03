import React from "react";
import "../horizontalScroll/HorizScroll.css";

const HorizScroll = ({ customItems }) => {
  const items = customItems;
  return (
    <div className="con-rec mt-20 flex justify-center align-center">
      <div className="w-full inline-flex flex-nowrap justify-space gap-6">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll">
          {items.map((item, index) => (
            <li key={index} className="w-full max-w-[16vw] flex justify-center">
              <h1 className="items-center text-white font-bold gap-2 flex w-[31vw] text-[20px]">
                <img src={item.Productimage} alt="" className="w-[35px] h-[35px]" />
                {item.Productname}
              </h1>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll">
          {items.map((item, index) => (
            <li key={index} className="w-full max-w-[16vw]">
              <h1 className="items-center font-bold gap-2 text-white flex w-[31vw] text-[20px]">
                <img src={item.Productimage} alt="" className="w-[35px] h-[35px]" />
                {item.Productname}
              </h1>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll">
          {items.map((item, index) => (
            <li key={index} className="w-full max-w-[16vw]">
              <h1 className="items-center font-bold gap-2 text-white flex w-[31vw] text-[20px]">
                <img src={item.Productimage} alt="" className="w-[35px] h-[35px]" />
                {item.Productname}
              </h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizScroll;
