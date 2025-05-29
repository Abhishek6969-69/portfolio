"use client";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useState } from "react";
import { techStacks } from "@/data/itemlist";
// import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { GlobeDemo } from "./Gridglobe";
import Lottie from "lottie-react";
import animationdata from "../../../data/confetti.json";
import Buttonmagic from "./Buttonmagic";
import { IoCopyOutline } from "react-icons/io5";
import { SparklesPreview } from "./sparkelpreview";
// BentoGrid Component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto   grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-min",
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem Component
export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  imgClassName = "",
  img,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string;
  img?: string | StaticImport;
  children?: React.ReactNode;
}) => {
  const [copied, setcopied] = useState(false);
  const handalecopy = () => {
    navigator.clipboard.writeText("sbh123yadav@gmail.com");
    setcopied(true);
  };
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between rounded-3xl border  bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none relative overflow-hidden min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem] border-white/[0.1]",
        className
      )}
    >
      {/* Background Image */}
      {img && (
        <Image
          src={img}
          alt={typeof title === "string" ? title : "Grid item background"}
          fill
          className={cn(
            "object-cover object-center",
            id === 5 ? "h-24 sm:h-32 md:h-40" : "",
            imgClassName
          )}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      )}

      {/* Content */}
      <div className="flex flex-col justify-center items-center relative z-10 transition duration-200 group-hover/bento:translate-x-1">
        <div
          className={cn(
            "mt-2 font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl",
            id === 1 && "absolute bottom-4 sm:bottom-6 md:bottom-8 capitalize",
            id === 3 && "mt-0 text-center",
            id === 4 &&
              "flex justify-center items-center text-xl sm:text-2xl md:text-3xl mt-4 sm:mt-6",
            id === 2 && "  "
          )}
        >
          {title}
          {id === 6 && (
            <div className="absolute inset-0 -z-20 ">
              <SparklesPreview />
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-20 ml-14  md:mt-20 md:ml-24">
              <div className="absolute -bottom-5 right-0  ">
                <Lottie
                  animationData={animationdata}
                  loop={copied}
                  autoplay={copied}
                  rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                  }}
                  style={{ width: 100, height: 100 }}
                />
              </div>
              <Buttonmagic
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handalecopy}
              />
            </div>
          )}
        </div>
        <div
          className={cn(
            "font-sans font-extralight text-neutral-500 dark:text-neutral-300 text-xs sm:text-sm md:text-base z-10",
            id === 2 && "flex justify-center items-center h-full w-full "
          )}
        >
          {description}
        </div>
      </div>
      <div className=" ">
        {id === 2 && (
          <div className=" sm:relative sm:top-20  lg:mt-[-6rem] sm:mt-[-6rem] md:mt-[0rem]">
            <GlobeDemo />
          </div>
        )}
      </div>
      {id === 3 && (
        <div className="flex flex-wrap justify-around gap-2 sm:gap-3 lg:gap-4 w-full mt-4">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 sm:gap-3 flex-1 min-w-[100px] sm:min-w-[120px]"
            >
              {stack.category.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center justify-center gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm opacity-80 rounded-lg bg-neutral-100 dark:bg-neutral-800 w-full text-center"
                >
                  {tech.icon && (
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5"
                    />
                  )}
                  <span className="capitalize font-medium">{tech.name}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
