import React from 'react';
import Image from "next/image";
import Link from "next/link";

// Ensure images are correctly placed in the 'public' directory
const homeProduct = [
  {
    id: "1",
    image: "/abouting.jpg",
    title: "Product 1",
    description: "This is product 1 description."
  },
  {
    id: "2",
    image: "/abouting.jpg",
    title: "Product 2",
    description: "This is product 2 description."
  },
  {
    id: "3",
    image: "/abouting.jpg",
    title: "Product 3",
    description: "This is product 3 description."
  },
  {
    id: "4",
    image: "/abouting.jpg",
    title: "Product 4",
    description: "This is product 4 description."
  },
];

const MainVideo = () => {
  return (
    <main className="bg-gray-50 pb-8">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full mx-auto">
        {homeProduct.map((item) => (
          <Link
            href={`/${item.id}`}
            className="relative shadow-lg hover:shadow-xl"
            key={item.id}
          >
            <div className="aspect-w-1 aspect-h-1 relative">
              <Image
                src={item.image}
                layout="fill"
                objectFit="cover"
                alt={item.title}
                className="transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <p className="mb-4">{item.description}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">See More</button>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default MainVideo;
