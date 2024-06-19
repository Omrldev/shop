import { stadistics } from "@/constants/Index";

const Stadistics = () => {
  return (
    <div className="flex justify-start items-center gap-10 flex-wrap mt-7">
      {stadistics.map((stats) => (
        <div key={stats.title}>
          <p className="text-2xl font-bold">{stats.value}</p>
          <p className="text-gray-500">{stats.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stadistics;
