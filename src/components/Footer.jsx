import React from "react";
import Logo from "../assets/Logo.svg";

function Footer() {
  return (
    <div className="mx-auto pt-14 pb-14 pl-[99px] pr-[99px] max-w-[1440px] flex items-center justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img className="w-10 h-10" src={Logo} alt="logo icon" />
          <span className="flex gap-2 items-center">
            <p className="text-[#170F49] text-3xl">brix</p>
            <p className="text-[#4A3AFF] text-3xl">templates</p>
          </span>
        </div>
        <p>Copyright © 2021 BRIX Templates | All Rights Reserved</p>
      </div>
      <div className="flex  items-center border border-[#EFF0F6] rounded-[60px] shadow-custom p-4 w-[507.49px] h-[73.53px] ">
        <div className="input-group flex justify-between w-[507.49px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="input rounded-full"
          />
          <button className="btn btn-primary rounded-full w-32">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
