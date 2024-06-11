import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="xl:w-2/5 w-full flex flex-col justify-center items-start border flex-1 relative">
        <p>Nuestra colección de verano</p>
        <h1 className="capitalize text-5xl font-semibold">
          <span className="">Lo último en</span>
          <br />
          <span className="text-indigo-300 font-bold">street </span>
          style
        </h1>
        <p>Únete al club y gana 500 puntos para gastarlos en recompesas.</p>

        <Button
          type="button"
          title="Shop now"
          variant="btn-indigo"
        />
      </div>
    </section>
  );
};

export default Hero;
