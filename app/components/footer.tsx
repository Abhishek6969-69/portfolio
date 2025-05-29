"use client"
import React from 'react';
import Buttonmagic from './ui/Buttonmagic';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data/itemlist';
import Image from 'next/image';
import Link from 'next/link';
function Footer() {
    function contact() {
        window.location.href = "mailto:sbh123yadav@gmail.com";
      }
      
  return (
    <footer id='Contacts' className="py-20 px-6 md:px-16 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Ready to take <span className="text-purple-500">Your</span> digital
        </h1>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">Presence to the Next Level?</h1>

        {/* Subheading */}
        <p className="text-gray-400 max-w-xl text-sm sm:text-base mt-4 mb-8">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        {/* Button */}
        <div className="mb-10">
          <Buttonmagic title="Contact Me Now" icon={<FaLocationArrow />} position="right" handleClick={contact} />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          {socialMedia.map(({ img, id,link }) => {
            const imageUrl = Object.values(img)[0];
            return (
             <div key={id} className="hover:scale-110 transition-transform duration-300">
               <Link href={link}>
                <Image
                  src={imageUrl}
                  alt={`social-${id}`}
                  width={32}
                  height={32}
                  className="rounded-full shadow-lg"
                />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
