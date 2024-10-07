interface products {
  price: string,
  thumbnail: string,
  title: string,
}

export default function ProductCard({ price, thumbnail, title}: products) {
	return (
		<div className="m-5">
			<div className="bg-blue-300 p-4 text-center w-60 gap-3 rounded-md">
				<div className="relative">
					<img
						src={thumbnail}
						alt={title}
						className="w-full h-40 object-cover rounded-md"
					/>
					<div className="absolute bottom-2 right-3 bg-green-500 text-white text-xs p-1 transform -rotate-12">
						${price}
					</div>
				</div>
				<div className="mt-3 text-white text-lg font-bold">
					{title}
				</div>
			</div>
		</div>
	);
}
