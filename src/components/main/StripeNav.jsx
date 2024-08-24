"use client";
import Image from "next/image";
import React, { useState } from "react";

const NavbarData = {
    logo: {
        name: "stripe",
        link: "/",
        image: "/teqlogo.svg", // Add image URL here
    },
  links: [
    {
      parent: "HOME",
      children: null,
      link: "/",
    },
    {
      parent: "ABOUT",
      children: null,
      link: "/about",
    },
    {
      parent: "All COURSES",
      children: [
        {
          name: "FullStack Developemnt",
          link: "/fullStack",
          desc: "Java FullStack Developemnt",
        },
        {
          name: "Srum Master",
          link: "/srummaster",
          desc: "Srum Master Course",
        },
        {
          name: "DotNet",
          link: "/dotnet",
          desc: "DotNet Course",
        },
        {
          name: "FullStack Developemnt",
          link: "/fullStack",
          desc: "Java FullStack Developemnt",
        },
        {
          name: "Srum Master",
          link: "/srummaster",
          desc: "Srum Master Course",
        },
        {
          name: "DotNet",
          link: "/dotnet",
          desc: "DotNet Course",
        },
        {
          name: "FullStack Developemnt",
          link: "/fullStack",
          desc: "Java FullStack Developemnt",
        },
        {
          name: "Srum Master",
          link: "/srummaster",
          desc: "Srum Master Course",
        },
        {
          name: "DotNet",
          link: "/dotnet",
          desc: "DotNet Course",
        },
        {
          name: "FullStack Developemnt",
          link: "/fullStack",
          desc: "Java FullStack Developemnt",
        },
        {
          name: "Srum Master",
          link: "/srummaster",
          desc: "Srum Master Course",
        },
        {
          name: "DotNet",
          link: "/dotnet",
          desc: "DotNet Course",
        },
      ],
    },
    
    {
      parent: "SERVICES",
      children: [
        {
          name: "Web Development",
          link: "/web",
          desc: "Web Development Services",
        },
        {
          name: "Training & Placement",
          link: "/training",
          desc: "Training & Placement Services",
        },
        {
          name: "Blog",
          link: "/blog",
          desc: "News and updates",
        },
      ],
    },
    {
      parent: "TRAINING",
      children: [
        {
          name: "Online",
          link: "/online",
          desc: "Online Training",
        },
        {
          name: "Offline ",
          link: "/offline",
          desc: "Offline Training",
        },
        {
          name: "Live",
          link: "/live",
          desc: "Live Training",
        },
      ],
    },
  ],
  action: {
    name: "CONTACT",
    link: "/contact",
  },
};

const { logo, links, action } = NavbarData;

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [parent, setParent] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setParent(null);
  };

  const handleClick = (link) => {
    if (link.link) {
      window.location.href = link.link;
    } else {
      setParent(link);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="w-full flex justify-between items-center p-1">
          <a href={logo.link}>
            
          </a>
          <ul className="flex items-center justify-center gap-10">
            {links.map((link) => (
              <li className="relative group" key={link.parent}>
                {link.link ? (
                  <a
                    href={link.link}
                    className="font-semibold cursor-pointer hover:opacity-50"
                  >
                    {link.parent}
                  </a>
                ) : (
                  <button className="font-semibold cursor-default hover:opacity-50">
                    {link.parent}
                  </button>
                )}
                {link.children && (
                  <div className="absolute top-full left-0 mt-2 transition transform translate-y-5 invisible opacity-0 group-hover:opacity-100 group-hover:visible animate-short group-hover:translate-y-0 z-50 min-w-[250px]">
                    <div className="relative top-6 p-2 bg-white rounded-xl shadow-xl w-full flex flex-col z-50">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 rounded-sm"></div>
                      <div
                        className={`grid ${
                          link.children.length > 4
                            ? "grid-cols-2 min-w-[500px]"
                            : "grid-cols-1"
                        }`}
                      >
                        {link.children.map((child) => (
                          <a key={child.name} href={child.link} className="z-50">
                            <div className="py-2 px-4 hover:bg-slate-100 rounded-lg w-full">
                              <p className="font-semibold text-slate-800">
                                {child.name}
                              </p>
                              <p className="text-sm text-slate-500">
                                {child.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <a
            href={action.link}
            className="rounded-full px-4 py-2 font-semibold bg-mainblue bg-opacity-10 hover:bg-opacity-20 animate-smooth flex items-center group"
          >
            <span className="mr-2">{action.name}</span>
            <svg
              className="stroke-current"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
            >
              <g>
                <path
                  className="opacity-0 group-hover:opacity-100 animate-short"
                  d="M0 5.5h7"
                ></path>
                <path
                  className="opacity-100 fill-transparent group-hover:transform group-hover:translate-x-1 animate-short"
                  d="M1 1l3 5-5 5"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <a href={logo.link}>
              <Image src={logo.image} alt={logo.name} width={150} height={70} />
            </a>
            <button
              onClick={openModal}
              className="bg-white bg-opacity-5 py-3 px-4 rounded-full cursor-pointer"
            >
              <svg width="16" height="10" viewBox="0 0 16 10">
                <title>Open mobile navigation</title>
                <g fill="white">
                  <rect y="8" width="16" height="2" rx="1"></rect>
                  <rect y="4" width="16" height="2" rx="1"></rect>
                  <rect width="16" height="2" rx="1"></rect>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <NavModal
        isOpen={isModalOpen}
        onClose={closeModal}
        parent={parent}
        setParent={setParent}
        handleClick={handleClick} // Pass handleClick as a prop
      />
    </nav>
  );
};

const NavModal = ({ isOpen, onClose, parent, setParent, handleClick }) => {
  if (!isOpen) return null;
  return (
    <div className="block lg:hidden p-5 absolute top-0 w-full z-50">
      <div className="bg-white text-slate-600 rounded-lg w-full min-h-[600px] h-auto p-3 flex flex-col justify-between">
        <div className="relative">
          <div className="flex items-center justify-between pb-5">
            <a href={logo.link}>
              <Image src={logo.image} alt={logo.name} width={150} height={70} />
            </a>
            <button
              onClick={() => {
                setParent(null);
                onClose();
              }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path
                  d="M25.6 14.3a1 1 0 0 1 0 1.4l-4.24 4.25 4.25 4.24a1 1 0 1 1-1.42 1.42l-4.24-4.25-4.24 4.25a1 1 0 0 1-1.42-1.42l4.25-4.24-4.25-4.24a1 1 0 0 1 1.42-1.42l4.24 4.25 4.24-4.25a1 1 0 0 1 1.42 0Z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-full flex flex-col">
            {links.map((link, index) => (
              <button
                key={index}
                className="flex items-center justify-between py-3 px-2 border-b border-b-slate-300"
                onClick={() => handleClick(link)}
              >
                <span className="text-xl">{link.parent}</span>
                <span className="text-xl">&rarr;</span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-between p-3">
          {parent && (
            <div className="p-3">
              <h2 className="text-2xl font-semibold">{parent.parent}</h2>
              {parent.children && (
                <ul className="mt-4">
                  {parent.children.map((child, index) => (
                    <li
                      key={index}
                      className="py-2 px-3 hover:bg-slate-200 rounded-lg"
                    >
                      <a href={child.link}>
                        <p className="text-xl">{child.name}</p>
                        <p className="text-sm text-slate-500">{child.desc}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => setParent(null)}
                className="mt-5 p-2 border border-slate-300 rounded-lg"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

