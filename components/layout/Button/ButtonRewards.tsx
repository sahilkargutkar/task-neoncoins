import React from "react";
import SvgCoinSmall from "../../svg/SvgCoinSmall";

interface ButtonRewardsProps {
  coin: boolean;
  value: string;
}

const ButtonRewards: React.FC<ButtonRewardsProps> = ({ coin, value }) => {
  return (
    <button className="bg-newblue drop-shadow-lg shadow-xl  rounded-md">
      {coin === true ? (
        <div className="flex px-4 py-1">
          <div className="my-[2px]">
            <SvgCoinSmall />
          </div>
          {value}
        </div>
      ) : (
        <div className="px-5 py-1">{value}</div>
      )}
    </button>
  );
};
export default ButtonRewards;
