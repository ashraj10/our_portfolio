"use client";

import { useState } from "react";
import Link from "next/link";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/images/logo_bg_remove.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/our-services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact-us" },
  ];

  const linkClass = (href) =>
    pathname === href
      ? "text-blue-600 font-bold transition-colors duration-300"
      : "text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300";

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between px-4 md:px-10 py-3">
        {/* ✅ Responsive Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="QueueSpaceIT Logo"
            width={200} // base size
            height={80}
            priority
            className="w-auto h-10 sm:h-12 md:h-14 lg:h-20 xl:h-24 object-contain"
          />
        </Link>

        {/* ✅ Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={linkClass(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ✅ Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-3xl text-gray-700"
          aria-label="open menu"
        >
          <IoMenuOutline />
        </button>
      </div>

      {/* ✅ Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* ✅ Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="QueueSpaceIT Logo"
              width={120}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl text-gray-700"
            aria-label="close menu"
          >
            <IoCloseOutline />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={linkClass(link.href)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
