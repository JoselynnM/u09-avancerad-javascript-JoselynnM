import { imgs, categories } from "../data";
import { CategoryCard } from "../components/CategoryCard";

const [
  imgCar,
  imgBabyonboard,
  imgWheel,
  imgLight,
  imgEnvironment,
  imgTrafficlight,
  imgAccidents,
  imgDark,
  imgCity,
] = imgs;

export const CategoryList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 mt-10">
      {/* Category Link Card */}
      <CategoryCard
        category={categories.car}
        src={imgCar}
        alt={`Categoría ${categories.car}`}
        gradientColor=" from-purple-200 to-pink-500"
      />
      {/* Category Link Babyonboard */}
      <CategoryCard
        category={categories.babyonboard}
        src={imgBabyonboard}
        alt={`Categoría ${categories.babyonboard}`}
        gradientColor="from-lime-400 to-teal-700"
      />
      {/* Category Link Wheel */}
      <CategoryCard
        category={categories.wheel}
        src={imgWheel}
        alt={`Categoría ${categories.wheel}`}
        gradientColor="from-red-400 to-zinc-400"
      />
      {/* Category Link Light */}
      <CategoryCard
        category={categories.light}
        src={imgLight}
        alt={`Categoría ${categories.light}`}
        gradientColor="from-cyan-200 to-lime-200"
      />
      {/* Category Link Environment */}
      <CategoryCard
        category={categories.environment}
        src={imgEnvironment}
        alt={`Categoría ${categories.environment}`}
        gradientColor="from-sky-300 to-indigo-900"
      />
      {/* Category Link Trafficlight */}
      <CategoryCard
        category={categories.trafficlight}
        src={imgTrafficlight}
        alt={`Categoría ${categories.trafficlight}`}
        gradientColor="from-amber-400 to-emerald-600"
      />
      {/* Category Link Accidents */}
      <CategoryCard
        category={categories.accidents}
        src={imgAccidents}
        alt={`Categoría ${categories.accidents}`}
        gradientColor="from-red-300 to-purple-200"
      />
      {/* Category Link Dark */}
      <CategoryCard
        category={categories.dark}
        src={imgDark}
        alt={`Categoría ${categories.dark}`}
        gradientColor="from-lime-600 to-cyan-200 "
      />
      {/* Category Link City */}
      <CategoryCard
        category={categories.city}
        src={imgCity}
        alt={`Categoría ${categories.city}`}
        gradientColor="from-purple-600 to-pink-200"
      />
    </div>
  );
};
