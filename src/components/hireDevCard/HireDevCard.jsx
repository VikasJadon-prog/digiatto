import React from "react";
import { MdArrowOutward } from "react-icons/md";
import '../hireDevCard/HireDevCard.css'
export const HireDevCard = ({data}) => {
  let item=data;
  return (
    <div className="hire-dev-car">
      <div className="home-card  ">
        <div className="home-card-inner flex justify-center items-cener p-[27px]">
            <img src={item.img} alt="" />
        </div>
        <div className="card-desc max-w-sm p-5">
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
