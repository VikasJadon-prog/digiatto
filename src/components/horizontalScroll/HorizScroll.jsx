import React from "react";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { SiAmazoncloudwatch } from "react-icons/si";
import { FaRegHourglass } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import "../horizontalScroll/HorizScroll.css";

const HorizScroll = ({ customItems }) => {
  const origiItems = [
    { text: "Sisyphus", icon: <SlEnergy /> },
    { text: "Hourglass", icon: <FaRegHourglass /> },
    { text: "CloudWatch", icon: <SiAmazoncloudwatch /> },
    { text: "Layers", icon: <HiOutlineSquare3Stack3D /> },
    { text: "Sisyphus", icon: <SlEnergy /> },
    { text: "Hourglass", icon: <FaRegHourglass /> },
    { text: "CloudWatch", icon: <SiAmazoncloudwatch /> },
    { text: "Layers", icon: <HiOutlineSquare3Stack3D /> },
  ];
  const customItem = [
    { text: "Mobile App Development", icon: "" },
    { text: "Web Development", icon: "" },
    { text: "Hire Dedicated Teams", icon: "" },
    { text: "UI/UX Design & Development", icon: "" },
    { text: "Mobile App Development", icon: "" },
    { text: "Web Development", icon: "" },
    { text: "Hire Dedicated Teams", icon: "" },
    { text: "UI/UX Design & Development", icon: "" },
  ];
  const items = customItems ? customItem : origiItems;
  return (
    <div className="con-rec mt-20 flex justify-center align-center">
      <div className="w-full inline-flex flex-nowrap">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll">
          {items.map((item, index) => (
            <li key={index} className="w-full">
              <h1 className="block items-center text-white font-bold gap-2 flex w-[19vw] text-lg">
                {item.icon}
                {item.text}
              </h1>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll">
          {items.map((item, index) => (
            <li key={index} className="w-full">
              <h1 className="block items-center font-bold gap-2 text-white flex w-[19vw] text-lg">
                {item.icon}
                {item.text}
              </h1>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 [&_img]:max-w-none animate-infinite-scroll">
          {items.map((item, index) => (
            <li key={index} className="w-full">
              <h1 className="block items-center font-bold gap-2 text-white flex w-[19vw] text-lg">
                {item.icon}
                {item.text}
              </h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HorizScroll;
