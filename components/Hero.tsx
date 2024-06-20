"use client";

import Image from "next/image";
import Button from "./Button";
import Stadistics from "./Stadistics";
import bigshoe1 from "../public/assets/images/bigshoe1.png";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen border-4 w-full xl:flex max-container"
    >
      <div className="py-16 px-2 xl:w-2/5">
        <p className="text-indigo-400 text-lg font-semibold">
          Convierte la presión en progresión.
        </p>
        <h1 className="capitalize text-7xl font-bold mt-7 relative z-10">
          <span className="xl:whitespace-nowrap xl:bg-white">
            Lo último Running
          </span>
          <br />
          <span className="text-indigo-400">street </span>style
        </h1>
        <p className="text-gray-500 text-lg sm:max-w-xs mt-7">
          Únete al club y gana puntos para gastarlos en recompensas.
        </p>

        <Button type="button" title="Comprar" variant="btn-indigo" />

        <Stadistics />
      </div>

      <div className="bg-hero bg-cover xl:min-h-screen border-4 bg-center flex justify-center items-center flex-1 relative">
        <Image
          src={bigshoe1}
          alt="big shoe red"
          width={610}
          height={500}
          className="object-contain relative z-50"
        />

        <div className="justify-self-center">
          <ShoeCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
