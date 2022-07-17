import Image from "next/image";
import React from "react";
import bitcoin from "../images/bitcoin.png";

interface HistoryProps {
  data: DataProps;
}

interface DataProps {
  id: number;
  predictedPrice: string;
  resultPrice: string;
  currency: string;
  predictionStatus: string;
}

const HistoryContainer: React.FC<HistoryProps> = ({ data }) => {
  console.log(data, "data");

  return (
    <div>
      <div className="bg-darkgray rounded-2xl  shadow-2xl text-white my-4 border-t-2 border-x-[1px] border-green-400">
        <div className=" flex justify-between">
          <div className="">
            <div className="flex my-2 mx-2">
              <div className="my-1">
                <Image
                  src={bitcoin}
                  className="object-fill h-2 w-2"
                  alt="logo"
                />
              </div>
              <div className=" text-lg ml-2">{data.currency}</div>
            </div>
            <div className=" mx-9  flex space-x-8">
              <div className="">
                <p className="text-a4a4a4a text-sm">Predicted Price</p>
                <p>{data.predictedPrice}</p>
              </div>
              <div className="mx-4">
                <p className="text-a4a4a4a text-sm">Result Price</p>
                <p>{data.resultPrice}</p>
              </div>
            </div>
          </div>
          {/* <div className="flex "></div> */}

          <div className=" my-8 mr-8">
            {data.predictionStatus === "Win" ? (
              <svg
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.9998" cy="12.0001" r="12" fill="#18DE67" />
                <rect
                  x="17.275"
                  y="6.85729"
                  width="1.71429"
                  height="12.3083"
                  rx="0.857143"
                  transform="rotate(45 17.275 6.85729)"
                  fill="white"
                />
                <rect
                  x="5.14265"
                  y="12.3548"
                  width="1.71429"
                  height="6.2907"
                  rx="0.857143"
                  transform="rotate(-45 5.14265 12.3548)"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                className="h-10 w-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11.9998" cy="12.0001" r="12" fill="#E64A4A" />
                <rect
                  x="15.8347"
                  y="6.46186"
                  width="1.84615"
                  height="13.2551"
                  rx="0.923077"
                  transform="rotate(45 15.8347 6.46186)"
                  fill="white"
                />
                <rect
                  x="6.46144"
                  y="7.76712"
                  width="1.84615"
                  height="13.2551"
                  rx="0.923077"
                  transform="rotate(-45 6.46144 7.76712)"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryContainer;
