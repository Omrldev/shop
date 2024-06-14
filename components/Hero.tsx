import Button from "./Button";
import Stadistics from "./Stadistics";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="w-full max-w-7xl mx-auto relative min-h-screen flex">
      <div className="border-4 py-16 px-2">
        <p className="">Nuestra colección de verano</p>
        <h1 className="">
          <span className="">Lo último running-3D</span>
          <br />
          <span className="">street&nbsp;</span>
          style
        </h1>
        <p className="">
          Únete al club y gana 500 puntos para gastarlos en recompesas.
        </p>
        <Button type="button" title="Shop now" variant="btn-indigo" />
        <Stadistics />
      </div>

      <div className="border-4 bg-hero bg-cover min-h-screen w-full relative">
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
