import Button from "./Button";
import Stadistics from "./Stadistics";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="xl:w-2/5 w-full flex flex-col justify-center items-start flex-1 relative py-12">
        <p className="hero-text">Nuestra colección de verano</p>
        <h1 className="capitalize text-6xl mt-10 font-semibold">
          <span className="xl:whitespace-nowrap py-3 xl:bg-white">
            Lo último running-3D
          </span>
          <br />
          <span className="title-subtext">street&nbsp;</span>
          style
        </h1>
        <p className="hero-subtext">
          Únete al club y gana 500 puntos para gastarlos en recompesas.
        </p>

        <Button type="button" title="Shop now" variant="btn-indigo" />

        <Stadistics />
      </div>

      <div className="bg-hero bg-center bg-cover xl:min-h-screen z-50 flex bg-white border-red-600 border-2">
        <Image
          src={"/assets/images/bigshoered.png"}
          alt="bigshoegray"
          width={810}
          height={700}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
