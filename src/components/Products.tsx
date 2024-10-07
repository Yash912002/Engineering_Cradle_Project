// @ts-nocheck
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

export default function Products() {
	const [products, setProducts] = useState([]);
	const [email, setEmail] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");
	const productsPerPage = 8;

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				// retrieve the token from local storage
				const token = localStorage.getItem("token");

				const response = await axios.get(
					"https://intern-task-api.bravo68web.workers.dev/api/products",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, []);

	useEffect(() => {
		const findEmail = async () => {
			try {
				const token = localStorage.getItem("token");

				const response = await axios.get(
					"https://intern-task-api.bravo68web.workers.dev/api/me",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				setEmail(response.data.user.sub);
			} catch (error) {
				console.log(error);
			}
		};
		findEmail();
	}, []);

	// Filter the products based on search query
	let filteredProducts = products.filter((product) => (
		product.title.toLowerCase().includes(searchTerm.toLowerCase())
	));

	// console.log(currentPage);
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

	// Slice the filtered products based on the indexes
	const currentProducts = filteredProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

	// console.log(indexOfFirstProduct)
	// console.log(indexOfLastProduct)
	// console.log(filteredProducts);

	// Formula for finding total pages
	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

	const handlePageClick = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const handleSearch = (e:any) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<div className="text-center m-5">
				<span className="text-lg font-bold">Logged in as {email}</span>
			</div>

			<SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />

			<ProductList products={currentProducts} />

			<Pagination
				totalPages={totalPages}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
			/>
		</div>
	);
}
