"use client"
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import { useEffect, useReducer, useRef } from "react";
import Graph from "./components/Gaph";
import HeroText from "./components/HeroText";
import Advantages from "./components/Advantages";
import Servers from "./components/Servers";
import Networks from "./components/Networks";
import Footer from "./components/Footer";


export default function Home() {
  const theme = useSelector((state: any) => state.theme.theme.isDark);
  const refNetworkPage = useRef<HTMLDivElement>(null)

  const scrollToNetworkPage = () => {
    if (refNetworkPage.current) {
      refNetworkPage.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // console.log(isDark);

  }, []);
  return (
    <div className={`text-3xl h-full ${theme ? "bg-gray-800 " : "bg-gray-100 "} transition-colors duration-500 ease-in-out`}>
      <Navbar />
      <Graph>
        <HeroText scrollToNetworkPage={scrollToNetworkPage} />
      </Graph>
      <div className="">
        <div className="mt-27"></div>
        <Advantages />
        <Servers />
        <Networks ref={refNetworkPage} />
      </div>
      <Footer />


    </div>
  );
}
