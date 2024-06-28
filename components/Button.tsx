import { HiOutlineArrowLongRight } from "react-icons/hi2";

type BtnProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant?: string;
};

const Button = ({ type, title, icon, variant }: BtnProps) => {
  return (
    <button
      className={`${variant} flex justify-center items-center text-white px-7 py-3 leading-none mt-7`}
    >
      {title}
      
      <HiOutlineArrowLongRight
        className="ml-3 rounded-full bg-white text-indigo-300"
        size={22}
      ></HiOutlineArrowLongRight>
    </button>
  );
};

export default Button;
