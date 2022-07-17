import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import PredictionContainer from "../components/layout/PredictionContainer";
import PredictionHistory from "../components/layout/PredictionHistory";
import Footer from "../components/layout/Footer/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="text-white flex justify-around">
        <Link href="/">HOME PAGE</Link>
        <Link href="/prediction">PREDICT</Link>
        <Link href="/rewards">REWARDS</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
