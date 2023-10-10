import { Link } from "react-router-dom";

export const CategoryCard = ({
	category,
	alt,
	src,
	gradientColor,
}) => {
	return (
		<Link
			to={`/home/category/${category}`}
			className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105`}
		>
			<div className='p-3 mt-8  flex justify-center items-center'>
				<img src={src} alt={alt} className='w-36' />
			</div>

			<h1 className='text-xl font-semibold text-stone-100 bg-stone-800 bg-opacity-60 p-3 px-5'>
				{category}
			</h1>
		</Link>
	);
};
