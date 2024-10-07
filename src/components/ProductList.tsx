import ProductCard from "./ProductCard";

interface productProps {
	products: product[];
}

interface product {
	id: string;
	title: string;
	price: string;
	thumbnail: string;
}

export default function ProductList({ products }: productProps) {
	return (
		<div className="flex flex-row flex-wrap justify-center items-center gap-4 m-5">
			{products.length > 0 ? (
				products.map((product) => (
					<ProductCard
						key={product.id}
						title={product.title}
						price={product.price}
						thumbnail={product.thumbnail}
					/>
				))
			) : (
				<p>No products to show</p>
			)}
		</div>
	);
}
