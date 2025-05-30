"use client";

import dynamic from 'next/dynamic';
import Navbar1 from "./navbar";
import Footer from "./footer";

// Dynamically import components that use browser APIs
const Hero = dynamic(() => import("./hero"), { ssr: false });
const Grid = dynamic(() => import("./Grid").then(mod => ({ default: mod.Grid })), { ssr: false });
const Recentproject = dynamic(() => import("./Recentproject"), { ssr: false });
const Approach = dynamic(() => import("./Approach").then(mod => ({ default: mod.Approach })), { ssr: false });

export default function ClientPage() {
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