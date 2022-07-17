import Image, { StaticImageData } from "next/image";
import React from "react";
import SvgCoinSmall from "../../svg/SvgCoinSmall";
import amazon from "../../images/amazon.png";
import lockedimage from "../../images/locked.png";

interface RewardBoxProps {
  color: string;
  buttonColor: string;
  logo: string | StaticImageData;
  locked?: boolean;
}

const RewardBox: React.FC<RewardBoxProps> = ({
  color,
  buttonColor,
  logo,
  locked,
}) => {
  return (
    <>
      <div className={`${color} rounded-2xl mx-4 text-white my-4 `}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div
              className={`px-3 py-1 ml-[0.5px] ${buttonColor} drop-shadow-lg flex`}
            >
              {locked ? (
                <>
                  <Image src={lockedimage} className="h-2" alt="locked image" />
                </>
              ) : (
                <div className="py-1 justify-between">
                  <SvgCoinSmall />
                </div>
              )}
              <p className="text-lg ml-2">3500 </p>
            </div>
          </div>
          <div className="relative">
            <svg
              width="120"
              height="65"
              viewBox="0 0 120 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M123.011 -2.815C123.011 34.6382 95.5289 65 61.6276 65C27.7263 65 0.243939 34.6382 0.243939 -2.815C0.243939 -40.2682 27.7263 -70.63 61.6276 -70.63C95.5289 -70.63 123.011 -40.2682 123.011 -2.815Z"
                fill="#2F2F2F"
                fillOpacity="0.21"
              />
            </svg>
            <div className="absolute top-2 left-8 ">
              <Image src={logo} alt="amazon logo" />
            </div>
          </div>
        </div>
        <div className="mx-5 flex justify-between">
          <div>
            <div className="text-2xl font-Hubballi font-bold">
              Amazon gift card worth ₹5000
            </div>
            <p className="text-xs my-2">
              Amazon pay gift Cards are valid for 365 days from the date of
              purpose and carry no fees{" "}
            </p>
          </div>
          <div className=" mt-[78px]">
            <button className="rounded-full px-4 bg-newpurple drop-shadow-lg">
              Unlock
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RewardBox;
