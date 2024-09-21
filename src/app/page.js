import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Host from "@/components/home/Host";
import Region from "@/components/home/Region";
import Speciality from "@/components/home/Speciality";
import Villas from "@/components/home/Villas";
import Scene from "@/components/home/Scene";


export default function Home() {
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
