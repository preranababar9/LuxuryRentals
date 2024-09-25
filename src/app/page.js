"use client";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Host from "@/components/home/Host";
import Region from "@/components/home/Region";
import Speciality from "@/components/home/Speciality";
import Villas from "@/components/home/Villas";
import Scene from "@/components/home/Scene";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Home() {
  useEffect(() => {
    AOS.init({
    duration : 1000,
    });
  }, []);
  return (
    <div className="">
    <Hero/>
    <Villas/>
    <Region/>
    <Speciality/>
    <Host/>
    <About/>
    <Scene/>
    </div>
  );
}
