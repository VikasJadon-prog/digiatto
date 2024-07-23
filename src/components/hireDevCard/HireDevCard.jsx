import React from "react";
import { MdArrowOutward } from "react-icons/md";
import '../hireDevCard/HireDevCard.css'
export const HireDevCard = ({data}) => {
  let item=data;
  return (
    <div className="hire-dev-car">
      <div className="home-card  ">
        <div className="home-card-inner flex justify-center relative z-1 items-center bg-[#001035] overflow-visible rounded-[10px] border-[#012b89] border-[1.5px] p-[27px] w-[210px] h-[135px] ml-[20px] mb-[-35px] ">
            <img src={item.img} alt="" />
        </div>
        <div className="card-desc max-w-sm p-5 bg-[#001035] overflow-hidden rounded-[10px] border-[#012b89] border-[1.5px]">
          <a href="dffklfkd">
            <h5 className="mt-9 mb-2 text-md font-medium tracking-wide text-white dark:text-white">{item.name}</h5>
          </a>
          <p className="mb-4 text-xs tracking-wider font-normal max-w-xs text-white dark:text-gray-400">{item.desc}</p>
          <a
            href="sdsfsdkf"
            className=" card-desc-a inline-flex items-center text-sm font-normal text-center text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Hire Now
            <MdArrowOutward className="ml-2 text-lg"/>
          </a>
        </div>
      </div>
    </div>
  );
};
