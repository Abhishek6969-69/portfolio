"use client"

import Link from 'next/link'
import { Projects } from '@/data/itemlist'
import React from 'react'
import Image from 'next/image'
import { PinContainer } from './ui/3-Dpin'
import { FaLocationArrow } from 'react-icons/fa'

function Recentproject() {
  return (
    <section id='Projects' className="py-16 px-4 md:px-10 bg-gray-950 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          A small section of <span className="text-purple-500">Recent Projects</span>
        </h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Here are some of the projects I’ve recently worked on. Each one showcases different skills and creativity.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {Projects.map(({ id, title, des, img, iconLists, link }, index) => {
          const isFourthAndOnlyFour = Projects.length === 4 && index === 3;

          return (
            <div
              key={id}
              className={`w-full max-w-sm mb-24 p-4  mt-4 ${
                isFourthAndOnlyFour ? 'lg:col-span-3 lg:mx-auto' : ''
              }`}
            >
              <PinContainer title={title} href={link}>
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-purple-500/30 transition duration-300">
                  <Image
                    src={
                      typeof img === 'string'
                        ? img
                        : img.p1 || img.p2 || img.p3  || ''
                    }
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
                 <div>
                  {title}
                 </div>
                {/* Description */}
                <div className="p-3 text-sm text-gray-300">{des}</div>

                {/* Icons and Link */}
                <div className="flex  justify-center items-center gap-3 px-3">
                  <div className="flex items-center gap-3">
                    {iconLists.map((icon) => (
                      <Image
                        key={icon}
                        src={icon}
                        alt=""
                        className="rounded-full"
                        height={20}
                        width={20}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 hover:underline text-sm">
                    <Link href={link}>Visit my website</Link>
                    <FaLocationArrow />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Recentproject
