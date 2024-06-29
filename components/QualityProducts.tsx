import Button from "./Button";
import shoe8 from "../public/assets/images/shoe8.jpg";
import Image from "next/image";

const QualityProducts = () => {
  return (
    <section
      id="about"
      className="max-container min-h-screen -mb-40"
    >
      <div className="px-2 min-h-screen md:flex">
        <div className="lg:w-2/5">
          <h2 className="text-5xl font-semibold capitalize">
            Contamos con productos de{" "}
            <span className="text-indigo-400">alta calidad</span>
          </h2>
          <p className="info-text mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, et.
            Nulla in, id dolorem voluptates ut deserunt aut ipsum. Repellendus,
            porro perferendis officia distinctio libero aliquam nihil ullam
            eaque dicta?
          </p>
          <p className="info-text mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, et.
          </p>

          <Button type="button" title="Detalles" variant="btn-indigo" />
        </div>

        <div className="flex flex-1 justify-center items-start max-w-[890px] h-[650px] mt-7">
            <Image src={shoe8} alt="shoe8" width={650} height={520} className="rounded-xl object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default QualityProducts;
