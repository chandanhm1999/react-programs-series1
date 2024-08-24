"use client";

import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
// import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] border-b-[1px]  border-primary/50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 text-white shadow-lg"
      >
        <nav className="container  flex h-[70px] items-center justify-between py-2 pl-4 ">
          <div className="text-2xl text-white md:text-3xl ">
            <a href="/#home" className="">
              DEV
              <span className="inline-block font-bold text-primary">WAVE</span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Services</li>
                    <li className="p-2 hover:bg-violet-200">About us</li>
                    <li className="p-2 hover:bg-violet-200">Privacy policy</li>
                  </ul>
                </div>
              </li>
              <li className="cursor pointer group">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Services{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-gray-100 p-2 text-black group-hover:block  ">
                  <div className="grid grid-cols-3 gap-5 ">
                    <div className="d-200 overflow-hidden">
                      <img
                        className="max-h-[450px] w-full rounded-b-3xl object-fill"
                        src="https://picsum.photos/200"
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2">
                      
                      <div className="grid grid-cols-3 gap-2 ">
                        <ul className="mt-3 flex flex-col gap-4">
                          <h1 className="text-2xl font-bold text-gray-800">
                            Development
                          </h1>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="https://picsum.photos/180"
                              alt="Certification Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                PMP® Certification
                              </h3>
                              <p className="text-sm opacity-90">
                                FullStack Development
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="https://picsum.photos/180"
                              alt="Certification Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                PMP® Certification
                              </h3>
                              <p className="text-sm opacity-90">
                                FullStack Development
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="https://picsum.photos/180"
                              alt="Certification Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                PMP® Certification
                              </h3>
                              <p className="text-sm opacity-90">
                                FullStack Development
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 transition-all hover:text-white duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>
                        </ul>

                        <ul className="mt-3 flex flex-col gap-4">
                          <h1 className="text-2xl font-bold text-gray-800">
                            Course
                          </h1>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="https://picsum.photos/180"
                              alt="Certification Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                PMP® Certification
                              </h3>
                              <p className="text-sm opacity-90">
                                FullStack Development
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="https://picsum.photos/180"
                              alt="Certification Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                PMP® Certification
                              </h3>
                              <p className="text-sm opacity-90">
                                FullStack Development
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-2 text-black border-l-gray-400 shadow-lg rounded-lg cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 border-2 border-transparent flex items-center">
                            <img
                              src="https://picsum.photos/180"
                              alt="Certification Logo"
                              className="w-12 h-12 mr-4"
                            />
                            <div className="flex flex-col w-full">
                              <h3 className="text-xs font-bold">
                                PMP® Certification
                              </h3>
                              <p className="text-sm opacity-90">
                                FullStack Development
                              </p>
                              <div className="flex pt-2 justify-between mt-auto items-center">
                                <p className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                                  4 weeks
                                </p>
                                <p className="text-xs text-green-800 px-2 py-1 hover:bg-gray-800 hover:text-white transition-all duration-300">
                                  Popular
                                </p>
                              </div>
                            </div>
                          </div>
                        </ul>
                        <div>
                          <img src="https://picsum.photos/180" alt="no image" />
                        </div>
                      </div>
                      <h1 className="pt-3 text-xl font-semibold">
                        Best Selling
                      </h1>
                      <p className="text-sm text-slate-600 w-5/5">
                        Working with your web development team was a pleasure.
                        The communication throughout the project was excellent,
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cursor pointer">
                <a href="/#contact">About us</a>
              </li>
              {/* Phone number section */}
              <div className="flex items-center gap-4">
                <li>
                  <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
                </li>
                <li>
                  <div>
                    <p className="text-sm">Call us on</p>
                    <p className="text-lg">
                      {" "}
                      <a href="tel:+91123456789">+91 123456789</a>
                    </p>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden pr-4 ">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-violet-900 text-white">
            <ul className="flex flex-col gap-4 p-4">
              <li>
                <a href="/#home">Home</a>
              </li>
              <li onClick={toggleDropdown} className="cursor-pointer">
                Services
                <FaCaretDown
                  className={`inline ml-2 transition-all duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </li>
              {isDropdownOpen && (
                <ul className="flex flex-col pl-4 text-sm">
                  <li className="p-2 hover:bg-violet-700">Web development</li>
                  <li className="p-2 hover:bg-violet-700">
                    IOS App Development
                  </li>
                  <li className="p-2 hover:bg-violet-700">App Development</li>
                  <li className="p-2 hover:bg-violet-700">Cloud Services</li>
                  <li className="p-2 hover:bg-violet-700">Mobile App</li>
                  <li className="p-2 hover:bg-violet-700">App Development</li>
                </ul>
              )}
              <li>
                <a href="/#about-us">About us</a>
              </li>
            </ul>
          </div>
        )}
      </header>
      {/* <ResponsiveMenu showMenu={showMenu} /> */}
    </>
  );
};

export default Navbar;
