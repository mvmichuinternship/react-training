import React from "react";
import IconButton from "../components/basic-components/IconButton";
import Card from "../components/basic-components/OutlineCard";
import Topbar from "../components/Topbar";
import HomePage from "./HomePage";
import MiniCard from "../components/MiniCard";
import InfoCards from "./InfoCards";
import EcomCards from "./EcomCards";
import cn from "clsx";
import WideCards from "./WideCards";
import FeedbackCards from "./FeedbackCards";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="w-[100%] ">
      {/* <img src="background.png" alt="" className="w-full h-full z-1000" /> */}
      <div className="w-[100%] h-screen px-10 py-5 bg-gradient-to-r from-amber-100 from-50% to-emerald-100 ">
        <Topbar />
        <HomePage />
        <MiniCard />
      </div>
      <span className="w-[100%] ">
        <InfoCards />
        <span className="flex flex-col justify-center items-center gap-y-4">
          <span className="text-3xl">
            New <span className="underline">Organic</span> Add-ons
          </span>
          <span className="w-full flex justify-center items-center">
            <IconButton
              className={cn(
                "w-fit bg-emerald-400 px-8 rounded-md text-white text-lg mt-4"
              )}
              isIcon={false}
              title={"Breakfast"}
            />
            <IconButton
              className={cn(
                "w-fit bg-white px-8 rounded-md text-black text-lg mt-4"
              )}
              isIcon={false}
              title={"Fruits"}
            />
            <IconButton
              className={cn(
                "w-fit bg-white px-8 rounded-md text-black text-lg mt-4"
              )}
              isIcon={false}
              title={"Salads"}
            />
          </span>
          <EcomCards />
        </span>
        <span className="flex flex-col justify-center items-center gap-y-4">
          <span className="text-3xl">
            Fresh <span className="underline">Organic</span> Products
          </span>
          <span className="w-full flex justify-center items-center gap-x-8 pb-10">
            <img src="fresh.png" alt="fresh img" className="w-60 " />
            <WideCards />
          </span>
        </span>
      </span>
      <div className="w-full bg-emerald-400 px-20 py-10">
      <span className="flex flex-col justify-center items-center gap-y-4">
          <span className="text-3xl text-white">
            What <span className="underline ">Our Customers</span> Say
          </span>
          <FeedbackCards/>
          </span>
      </div>
      <div className="w-full   bg-emerald-100 flex flex-col justify-center items-center">
        <Footer/>
        <hr className="border-1 w-full border-slate-400"/>
        <div className="flex justify-center items-center text-sm py-3">
            Copyright 2021 Farmiest All Rights Reserved.
        </div>
      </div>

      {/* <InfoCards/> */}
      {/* <Card cardType={"ecom"} dishName={"Chips"} dishPrice={"10"} dishType={"Breakfast"} imgAlt={"food"} imgSrc={"food/fries.png"} avatarClassName={""}/>
      <Card cardType={"feedback"} feedback={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."} userName={"Mridula Vinod"} userOccupation={"Associate Engineer"} imgAlt={"profile"} imgSrc={"avatars/avatar1.png"} avatarClassName={""}/>
      <Card cardType={"wide"} wideName={"Bread"} widePrice={10} imgAlt={"imgAlt"} imgSrc={"food/bread.png"}/>
      <Card cardType={"info"} infoData={"flat 20% off"} infoName={"VEGETABLES"} classNameLeft={"bg-emerald-100"} classNameRight={"bg-emerald-400 "} buttonClass={"bg-emerald-500"} imgAlt={"info-food"} imgSrc={"food/info-card/veg.png"} avatarClassName={""}/> */}
    </div>
  );
}
export default Layout;
