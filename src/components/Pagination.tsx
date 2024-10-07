interface PaginationProps {
	totalPages: number;
	handlePageClick: (arg: number) => void;
	currentPage: number;
}

export default function Pagination({
	totalPages,
	handlePageClick,
	currentPage,
}: PaginationProps) {
	const pageNumbers: number[] = [];

	// Initialize the array with numbers starting from 1
	for (let i = 0; i < totalPages; i++) {
		pageNumbers[i] = i + 1;
	}

	return (
		<div className="flex justify-center items-center gap-2 m-4">
			{pageNumbers.map((number) => (
				<button
					key={number}
					onClick={() => handlePageClick(number)}
					className={`px-3 py-1 border rounded-lg ${
						number === currentPage
							? "bg-blue-500 text-white"
							: "bg-white border-gray-300"
					} hover:bg-blue-300`}
				>
					{number}
				</button>
			))}
		</div>
	);
}
