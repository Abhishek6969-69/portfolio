import Hero from "./components/hero";
import { Grid } from "./components/Grid";
import Recentproject from "./components/Recentproject";
import { Approach } from "./components/Approach";
import Footer from "./components/footer";
// import { FloatingNav } from "./components/ui/floating-navbar";
// import { navItems } from "@/data/itemlist";
import Navbar1 from "./components/navbar";

export default function Home() {
  return (
    <main className="relative bg-[#04071D] flex justify-center items-center flex-col mx-auto sm:px-4 px-5">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#04071D] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>
      <div className="max-w-7xl w-full mt-[-30px] relative z-10">
        <Navbar1 />
        <Hero />
        <Grid />
        <Recentproject />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}