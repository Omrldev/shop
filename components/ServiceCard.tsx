import Image from "next/image";

type ServiceCardProp = {
  icon: string;
  label: string;
  text: string;
};

const ServiceCard = ({ icon, label, text }: ServiceCardProp) => {
  return (
    <div className="flex-1 border rounded-xl shadow-xl p-3 w-full mb-3 bg-slate-50">
      <div className="rounded-full w-10 h-10 bg-indigo-200 flex justify-center items-center mb-3">
        <Image src={icon} alt="imagen" width={24} height={24} className="object-contain"/>
      </div>

      <h3 className="font-bold mt-2 text-indigo-500">{label}</h3>
      <p className="mt-2 text-gray-500">{text}</p>
    </div>
  );
};

export default ServiceCard;
