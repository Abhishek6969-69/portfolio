"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
import { navItems } from "@/data/itemlist";
import React from 'react'

function Navbar1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-[#04071D]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#04071D] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>
      <div className="relative z-50 -ml-4 mt-8 py-4 w-full px-4">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton className="ml-4" />
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <a
                  href="#login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-md bg-white text-black text-sm font-bold text-center hover:-translate-y-0.5 transition duration-200"
                >
                  Login
                </a>
                <a
                  href="#book-a-call"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm font-bold text-center hover:-translate-y-0.5 transition duration-200"
                >
                  Book a call
                </a>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </div>
  );
}

export default Navbar1;