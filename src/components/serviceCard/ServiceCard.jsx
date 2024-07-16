import React from "react";
import "../serviceCard/ServiceCard.css";
import { MdArrowOutward } from "react-icons/md";

export const ServiceCard = ({ customData }) => {
  const items = customData;
  return (
    <div className="service-soft-eng-cards">
      <div className="home-cards flex justify-between w-full gap-x-8 gap-y-9">
        {items.map((item, index) => (
          <div
            className="home-card flex justify-space gap-x-4 w-full"
            key={index + 1}
          >
            <div
              className="home-card-inner w-[20%]"
              style={{ width: "60px", height: "60px", marginLeft: "0px" }}
            ></div>
            <div className="card-desc max-w-sm w-[80%]">
              <a href="fdgdg">
                <h5 className=" mb-2 text-md font-semibold tracking-tight text-white dark:text-white">
                  {item.name}
                </h5>
              </a>
              <p className="mb-4 text-xs text-white dark:text-gray-400">
                {item.desc}
              </p>
              <a
                href="#"
                className=" card-desc-a inline-flex items-center text-sm font-medium text-center text-[#013DC4]  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <MdArrowOutward className="ml-2 text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
