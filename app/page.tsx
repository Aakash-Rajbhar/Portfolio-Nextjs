import Image from "next/image";
import { Hero } from "../components/Hero";
import Grid from "@/components/Grid";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Services />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
