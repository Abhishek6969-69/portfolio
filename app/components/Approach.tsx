"use client";
import React from "react";
import Buttonmagic from "./ui/Buttonmagic";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

interface IconProps {
  className?: string;
  [key: string]: unknown;
}

export function Approach() {
  return (
    <div>
      <div className="  flex justify-center">
        <h1 className=" text-4xl md:text-4xl text-purple-500 lg:text-6xl  ">My Approach</h1>
        </div>
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-center  dark:bg-black w-full gap-4 sm:gap-6 md:gap-8 mx-auto px-4 sm:px-6 md:px-8">
    

      <Card
        title="Planning & Design"
        icon={<AceternityIcon order="phase-1" />}
        desc="In this initial phase, the focus is on understanding the project's goals, gathering requirements, and planning the system architecture."
      >
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-emerald-900"
        />
      </Card>
      <Card
        title="Development & Integration"
        icon={<AceternityIcon order="phase-2" />}
        desc="This is the execution phase, where I implement both frontend and backend features."
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2}
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </Card>
      <Card
        title="Testing, Deployment & Maintenance"
        icon={<AceternityIcon order="phase-3" />}
        desc="In the final phase, I focus on polishing the product, ensuring reliability, and preparing it for production."
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]}
        />
      </Card>
    </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
  desc,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc: string;
}) => {
  const [hovered, setHovered] = React.useState(false);

  const handleToggle = () => {
    setHovered((prev) => !prev);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleToggle}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full max-w-[90vw] sm:max-w-[400px] mx-auto p-4 sm:p-6 relative h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] cursor-pointer"
    >
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-2 -left-2  text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2 -left-2  text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -top-2 -right-2  text-black" />
      <Icon className="absolute h-5 w-5 sm:h-6 sm:w-6 -bottom-2 -right-2  text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0 z-10"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2
            className={` text-base sm:text-lg md:text-xl ${
              hovered ? "opacity-100" : "opacity-0"
            } sm:group-hover/canvas-card:opacity-100 relative z-20 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200`}
          >
            {title}
          </h2>
          <p
            className={` text-sm sm:text-base ${
              hovered ? "opacity-100" : "opacity-0"
            } sm:group-hover/canvas-card:opacity-100 relative z-20 text-black mt-2 font-medium group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200`}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <Buttonmagic title={order} icon="" position="left" />
    </div>
  );
};

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
