import Image from "next/image";
import React from "react";
import amazon from "../../images/amazon.png";
import starperformer from "../../images/starperformer.png";
import SvgCoinSmall from "../../svg/SvgCoinSmall";
import ButtonRewards from "../Button/ButtonRewards";

interface RewardContainerProps {
  //   coin: string;
}

const RewardContainer: React.FC<RewardContainerProps> = ({}) => {
  return (
    <>
      <div className="bg-darkblue rounded-2xl mx-4 text-white my-4 ">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="px-3 py-1 ml-[0.5px] bg-newviolet drop-shadow-lg flex">
              <div className="py-1 justify-between">
                <SvgCoinSmall />
              </div>
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
            <div className="absolute top-3 left-8 ">
              <Image src={amazon} alt="amazon logo" />
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

        <div className="  text-white">
          <div className="mx-5 my-4 mb-4 bg-lightgray">
            <Image src={starperformer} alt="starperformer" />

            <div className="font-bold text-lg text-center my-2">
              Amazon Gift Card Worth ₹5000
            </div>
            <p className="text-sm text-center mx-4 px-1">
              Amazon Pay Gift Cards are valid for 365 days from the date of
              purchase and carry no fees.Gift cards have great designs for every
              occasion.
            </p>

            <div className="grid grid-cols-2 justify-center gap-20 mx-9 my-4">
              <div className=" items-center">
                <p className="text-xs flex justify-center ">Neon Coins</p>
                <ButtonRewards coin={true} value="1500" />
              </div>
              <div>
                <p className="text-xs flex justify-center ">Neon Coins</p>
                <ButtonRewards coin={false} value="₹5000" />
              </div>
            </div>

            <div className=" mx-6">
              <input
                type="email"
                className="bg-transparent rounded-md border border-green-400 w-full py-2"
                placeholder=" Enter your preferred Email ID"
              />
              <div className="mx-4 ">
                <button className="font-Hubballi text-2xl font-extrabold w-full bg-green-400 my-4 py-2 rounded-md text-black ">
                  Redeem Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-1"></div>
      </div>
    </>
  );
};
export default RewardContainer;
