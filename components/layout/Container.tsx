import Image from "next/image";
import React from "react";
import Userpic from "../images/Userpic.png";

const Container = () => {
  return (
    <div className="bg-darkgray py-8">
      <div className="flex justify-center pt-4">
        <div className="w-[100px] h-[100px] bg-rose-200 rounded-full flex justify-center items-center">
          <Image src={Userpic} alt="userpic" />
        </div>
      </div>
      <div className="font-bold text-center text-white text-3xl py-4">
        <div className="flex items-center justify-center ml-8">
          Sanjay Poojary{" "}
          <svg
            className="ml-4 h-5 w-5 "
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="9" fill="#3F3F3F" />
            <path
              d="M12.659 7.18937L7.20529 12.8579L5.36426 11.0866L10.7111 5.52957"
              fill="#73FDAA"
            />
            <path
              d="M10.9953 5.29436C10.9953 5.29436 11.4769 4.66109 11.7102 4.55118C12.4131 4.22005 13.9541 5.5755 13.5512 6.32221C13.4471 6.51529 12.9431 6.95413 12.9431 6.95413"
              fill="#73FDAA"
            />
            <path
              d="M5.15205 11.4113L6.89135 13.1692L5.14265 13.1596L5.15205 11.4113Z"
              fill="#73FDAA"
            />
          </svg>
        </div>

        <div className="text-sm font-normal mt-2 text-slate-400 py-2">
          sanjaypoojary1512@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Container;
