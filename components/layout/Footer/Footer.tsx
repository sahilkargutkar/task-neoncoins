import Image from "next/image";
import React from "react";
import Svglogo from "../../svg/Svglogo";

const Footer = () => {
  return (
    <footer>
      <div className="mx-4 py-4 flex justify-start">
        <div>
          <Svglogo />
        </div>
        <div className="mx-8">
          <div
            className="font-bold text-white text-sm  px-2 h-6 w-[220px] rounded-full bg-lightgray flex items-center justify-evenly font-mono"
            // style={{ height: "20px", width: "180px", fontSize: "10px" }}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.17392 0.399902C4.74679 0.399902 3.37815 0.96682 2.36904 1.97597C1.35989 2.98505 0.792969 4.35376 0.792969 5.78085C0.792969 7.20795 1.35989 8.57662 2.36904 9.58574C3.37811 10.5949 4.74683 11.1618 6.17392 11.1618C7.60102 11.1618 8.96969 10.5949 9.9788 9.58574C10.988 8.57666 11.5549 7.20795 11.5549 5.78085C11.5549 4.35376 10.988 2.98509 9.9788 1.97597C8.96973 0.96682 7.60102 0.399902 6.17392 0.399902ZM3.55457 4.29242C3.61838 4.1386 3.72783 4.00798 3.86805 3.91812C4.00827 3.82826 4.17268 3.78352 4.33911 3.78982H6.1686H7.99809H7.99816C8.16271 3.78284 8.32569 3.82526 8.46607 3.91151C8.60645 3.99784 8.71786 4.12409 8.78587 4.27416C8.81365 4.31267 8.821 4.36222 8.80561 4.40719C8.79022 4.45208 8.75397 4.48676 8.7084 4.50012L6.28161 5.76465C6.21923 5.80039 6.14266 5.80039 6.08034 5.76465L3.62223 4.4894C3.58266 4.47761 3.55121 4.44743 3.5377 4.40832C3.52426 4.36929 3.53049 4.32612 3.55444 4.29242H3.55457ZM8.84939 7.07858C8.81884 7.27375 8.71884 7.45136 8.56773 7.57867C8.4167 7.70599 8.22474 7.77452 8.02724 7.77168H6.53029H4.33699C4.15082 7.77573 3.96871 7.71718 3.81977 7.6054C3.67091 7.49355 3.56387 7.33493 3.5159 7.15498C3.49661 7.08487 3.48648 7.0125 3.4858 6.93976V5.18234C3.4858 5.03062 3.58054 4.97461 3.71716 5.04459C4.48129 5.44208 5.24465 5.84023 6.00732 6.23915C6.05859 6.26955 6.11714 6.28562 6.17682 6.28562C6.23643 6.28562 6.29498 6.26955 6.34632 6.23915C7.10542 5.84098 7.86557 5.44635 8.62668 5.05531V5.05538C8.64815 5.04277 8.67134 5.03339 8.69552 5.02738C8.73733 5.0129 8.78357 5.021 8.81795 5.04885C8.85226 5.07663 8.8699 5.12017 8.8645 5.16401V6.68467C8.87028 6.8162 8.86525 6.94794 8.84941 7.07856L8.84939 7.07858Z"
                fill="#C5C5C5"
              />
            </svg>
            <p className="ml-2 text-sm">support@neoncoins.com</p>
          </div>
          <div className="flex justify-start space-x-5 m-2">
            <svg
              className="h-5 w-5"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.953 0.912598C14.3945 1.24165 13.274 1.6901 12.6152 1.81945C12.5959 1.82443 12.5802 1.83082 12.5615 1.8358C11.9794 1.26582 11.1818 0.912598 10.2989 0.912598C8.51966 0.912598 7.0769 2.34466 7.0769 4.11075C7.0769 4.20385 7.06902 4.37513 7.0769 4.4661C4.67612 4.4661 2.84886 3.21811 1.53856 1.6233C1.39608 1.97865 1.33379 2.5401 1.33379 3.06744C1.33379 4.06313 2.11782 5.04106 3.33861 5.64729C3.11379 5.70485 2.86605 5.74607 2.60828 5.74607C2.19228 5.74607 1.75194 5.63734 1.34882 5.30757C1.34882 5.31965 1.34882 5.33102 1.34882 5.34382C1.34882 6.73537 2.83669 7.68273 4.15988 7.9464C3.89137 8.10347 3.35007 8.1191 3.08586 8.1191C2.8997 8.1191 2.24097 8.03453 2.06483 8.00184C2.43286 9.14251 3.76034 9.78356 5.02553 9.8063C4.03601 10.5767 3.34935 10.8624 1.32305 10.8624H0.632812C1.91304 11.6769 3.54339 12.2845 5.17733 12.2845C10.4973 12.2845 13.521 8.25982 13.521 4.4661C13.521 4.40498 13.5196 4.27705 13.5174 4.14842C13.5174 4.13562 13.521 4.12354 13.521 4.11075C13.521 4.09156 13.5153 4.07308 13.5153 4.05389C13.5131 3.95724 13.511 3.86698 13.5088 3.82007C14.0745 3.41497 14.5649 2.90967 14.953 2.334C14.4339 2.56284 13.8768 2.71636 13.2919 2.786C13.889 2.43065 14.7375 1.5835 14.953 0.912598Z"
                fill="#C5C5C5"
              />
            </svg>
            <svg
              className="h-5 w-5"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.253906 4.39696C0.253906 2.14826 2.07746 0.324707 4.32616 0.324707H10.8418C13.0905 0.324707 14.914 2.14826 14.914 4.39696V10.9126C14.914 13.1613 13.0905 14.9848 10.8418 14.9848H4.32616C2.07746 14.9848 0.253906 13.1613 0.253906 10.9126V4.39696ZM13.2847 2.76831C13.2847 2.31873 12.9198 1.95386 12.4702 1.95386C12.0206 1.95386 11.6558 2.31873 11.6558 2.76831C11.6558 3.21789 12.0206 3.58276 12.4702 3.58276C12.9198 3.58276 13.2847 3.21789 13.2847 2.76831ZM7.58398 3.58228C9.83268 3.58228 11.6562 5.40583 11.6562 7.65453C11.6562 9.90323 9.83268 11.7268 7.58398 11.7268C5.33528 11.7268 3.51172 9.90323 3.51172 7.65453C3.51172 5.40583 5.33528 3.58228 7.58398 3.58228ZM5.14062 7.65478C5.14062 6.30535 6.23455 5.21143 7.58398 5.21143C8.93341 5.21143 10.0273 6.30535 10.0273 7.65478C10.0273 9.00421 8.93341 10.0981 7.58398 10.0981C6.23455 10.0981 5.14062 9.00421 5.14062 7.65478Z"
                fill="#C5C5C5"
              />
            </svg>

            <svg
              className="h-6 w-6"
              viewBox="0 0 17 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5013 0.486477C10.1406 -0.0684091 6.7107 -0.0684091 3.34996 0.486477C1.42811 0.886338 0.229004 2.11856 0.229004 3.72616V9.43845C0.229004 11.0705 1.42811 12.2864 3.38282 12.7026C5.05459 12.9823 6.74676 13.1242 8.44206 13.127C10.1426 13.1266 11.8402 12.9874 13.5177 12.7108C15.4232 12.3517 16.6551 11.0787 16.6551 9.44661V3.73432C16.6551 2.1104 15.4232 0.837375 13.5013 0.486477ZM11.1195 6.96585L7.01299 9.41397C6.94875 9.45287 6.87465 9.47269 6.79945 9.4711C6.72815 9.47052 6.65792 9.45378 6.59412 9.42213C6.52954 9.38319 6.47651 9.32794 6.44044 9.26199C6.40437 9.19605 6.38655 9.12178 6.38879 9.04675V4.1505C6.38941 4.07823 6.4086 4.00732 6.44453 3.94448C6.48046 3.88165 6.53195 3.82897 6.59412 3.79145C6.65854 3.75716 6.73048 3.73922 6.80355 3.73922C6.87663 3.73922 6.94857 3.75716 7.01299 3.79145L11.1195 6.23957C11.1789 6.27718 11.2277 6.32905 11.2616 6.39038C11.2954 6.45171 11.3132 6.52052 11.3132 6.59047C11.3132 6.66041 11.2954 6.72923 11.2616 6.79056C11.2277 6.85189 11.1789 6.90376 11.1195 6.94137V6.96585Z"
                fill="#C5C5C5"
              />
            </svg>

            <svg
              className="h-5 w-5"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.42236 0.324707H13.8247C14.7246 0.324707 15.4536 1.05364 15.4536 1.95361V13.3559C15.4536 14.2559 14.7246 14.9848 13.8247 14.9848H2.42236C1.52239 14.9848 0.793457 14.2559 0.793457 13.3559V1.95361C0.793457 1.05364 1.52239 0.324707 2.42236 0.324707ZM3.625 11.727H5.67986V6.02588H3.625V11.727ZM4.61623 4.9813C3.98829 4.9813 3.56885 4.56267 3.56885 4.00395C3.56885 3.44524 3.98748 3.02661 4.68546 3.02661C5.3134 3.02661 5.73284 3.44524 5.73284 4.00395C5.73284 4.56267 5.31422 4.9813 4.61623 4.9813ZM11.0215 11.727H13.0104V8.61095C13.0104 6.8216 12.2146 6.02588 11.2202 6.02588C10.2257 6.02588 9.69553 6.35736 9.43084 6.8216V6.02588H7.37598V11.727H9.43084V8.61095C9.43084 7.68329 10.0938 7.55053 10.2925 7.55053C10.4913 7.55053 11.0215 7.74926 11.0215 8.61095V11.727Z"
                fill="#C5C5C5"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
