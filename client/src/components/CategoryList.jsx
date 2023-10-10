import { imgs, categories } from '../data';
import { CategoryCard } from "../components/CategoryCard";

const [
	imgCar,
	imgBabyonboard,
	imgWheel,
	imgLight,
	imgEnvironment,
	imgTrafficlight,
	imgSign,
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-5 mt-10'>
			{/* Category Link Ciencia */}
			<CategoryCard
				category={categories.car}
				src={imgCar}
				alt={`Categoría ${categories.car}`}
				gradientColor=' from-purple-200 to-pink-500'
			/>
			{/* Category Link Babyonboard */}
			<CategoryCard
				category={categories.babyonboard}
				src={imgBabyonboard}
				alt={`Categoría ${categories.babyonboard}`}
				gradientColor='from-lime-400 to-teal-700'
			/>
			{/* Category Link Wheel */}
			<CategoryCard
				category={categories.wheel}
				src={imgWheel}
				alt={`Categoría ${categories.wheel}`}
				gradientColor='from-red-400 to-zinc-400'
			/>
			{/* Category Link Light */}
			<CategoryCard
				category={categories.light}
				src={imgLight}
				alt={`Categoría ${categories.light}`}
				gradientColor='from-cyan-200 to-lime-200'
			/>
			{/* Category Link Environment */}
			<CategoryCard
				category={categories.environment}
				src={imgEnvironment}
				alt={`Categoría ${categories.environment}`}
				gradientColor='from-sky-300 to-indigo-900'
			/>
			{/* Category Link Trafficlight */}
			<CategoryCard
				category={categories.trafficlight}
				src={imgTrafficlight}
				alt={`Categoría ${categories.trafficlight}`}
				gradientColor='from-amber-400 to-emerald-600'
			/>		
			{/* Category Link Light */}
			<CategoryCard
				category={categories.light}
				src={imgLight}
				alt={`Categoría ${categories.light}`}
				gradientColor='from-cyan-200 to-lime-200'
			/>
			{/* Category Link Environment */}
			<CategoryCard
				category={categories.environment}
				src={imgEnvironment}
				alt={`Categoría ${categories.environment}`}
				gradientColor='from-sky-300 to-indigo-900'
			/>
			{/* Category Link Sign */}
			<CategoryCard
				category={categories.sign}
				src={imgSign}
				alt={`Categoría ${categories.sign}`}
				gradientColor='from-amber-400 to-emerald-600'
			/>		
		</div>
	);
};