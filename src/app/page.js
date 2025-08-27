import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
    </div>
  );
}
