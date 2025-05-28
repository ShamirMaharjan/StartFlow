import React from 'react';
import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Page({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  return (
    <section className="relative h-160 w-full">
      {/* Background Image */}
      {/* <Image
        src="/pitch.png"
        alt="Pitch background"
        layout="fill"
        objectFit="cover"
        quality={100}

      /> */}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center  z-10 bg-gradient-to-r from-blue-400 to-indigo-600  bg-opacity-40 text-white ">
        <h1 className="heading mt-40 mb-4">Pitch Your startup <br /> Connect with Enterprenures</h1>
        <p className="text-3xl mb-8">Share your startup ideas with the world</p>
        <SearchForm query={query} />
      </div>
    </section>
  );
};


