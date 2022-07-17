import React from "react";
import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar";
import RewardBox from "../components/layout/RewardContainer/RewardBox";
import RewardContainer from "../components/layout/RewardContainer/RewardContainer";
import pizzahut from "../components/images/pizzahut.png";
import disneyplus from "../components/images/disneyplus.png";
import flipkart from "../components/images/flipkart.png";

interface RewardProps {
  //   logo: string;
}

const rewards: React.FC<RewardProps> = ({}) => {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="flex justify-center text-center text-white text-6xl my-6">
          <h1 className="font-Hubballi font-bold text-green-400">Rewards</h1>
        </div>
        <div className="text-white text-center mx-14">
          predict the price movements & earn neon coins to claim your rewards
        </div>
        <div>
          <RewardContainer />
        </div>
        <div>
          <RewardBox
            color="bg-green-600"
            buttonColor="bg-green-700"
            logo={pizzahut}
          />
        </div>
        <div>
          <RewardBox
            color="bg-gradient-to-t from-lightbrown to-darkbrown"
            buttonColor="bg-amber-800"
            logo={disneyplus}
          />
        </div>
        <div>
          <RewardBox
            color="bg-gradient-to-t from-lightgray to-darkgray"
            buttonColor="bg-gray-500"
            logo={flipkart}
            locked={true}
          />
        </div>

        <Footer />
      </div>
    </>
  );
};
export default rewards;
