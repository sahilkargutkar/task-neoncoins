import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/layout/Navbar";
import Container from "../components/layout/Container";
import PredictionContainer from "../components/layout/PredictionContainer";
import PredictionHistory from "../components/layout/PredictionHistory";
import Footer from "../components/layout/Footer/Footer";

const Prediction: NextPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Container />
      <PredictionContainer />
      <PredictionHistory />
      <Footer />
    </div>
  );
};

export default Prediction;
