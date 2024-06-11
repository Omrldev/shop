import { stadistics } from "@/constants/Index";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="xl:w-2/5 w-full flex flex-col justify-center items-start border flex-1 relative">
        <p className="hero-text">Nuestra colección de verano</p>
        <h1 className="capitalize text-6xl mt-10 font-semibold">
          <span className="xl:whitespace-nowrap border py-3 bg-red-300">Lo último running-3D</span>
          <br />
          <span className="hero-subtext">street&nbsp;</span>
          style
        </h1>
        <p>Únete al club y gana 500 puntos para gastarlos en recompesas.</p>

        <Button type="button" title="Shop now" variant="btn-indigo" />

        <div className="flex justify-center items-center gap-10 flex-wrap mt-10">
          {stadistics.map((stats) => (
            <div key={stats.title}>
              <p>{stats.value}</p>
              <p>{stats.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
